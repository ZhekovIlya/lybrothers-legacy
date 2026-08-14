import {
  decorateBlocks,
  decorateSections,
  decorateTemplateAndTheme,
  getMetadata,
  loadFooter,
  loadHeader,
  loadSection,
  loadSections,
  waitForFirstImage,
} from './aem.js';
// The query keeps interaction updates from being masked by a stale edge/browser module cache.
// eslint-disable-next-line import/no-unresolved
import { initSiteExperience, renderFallbackPage } from './site-content.js?ritual-snap-v2';

if (window.trustedTypes && window.trustedTypes.createPolicy) {
  const innerPolicy = window.trustedTypes.createPolicy('ly-brothers-inner', {
    createHTML: (input) => input,
  });

  window.trustedTypes.createPolicy('default', {
    createHTML: (input, type, sink) => {
      let processed = input;
      if (/srcdoc\s*=/i.test(processed)) {
        const doc = new DOMParser().parseFromString(innerPolicy.createHTML(processed), 'text/html');
        doc.querySelectorAll('iframe[srcdoc]').forEach((iframe) => iframe.removeAttribute('srcdoc'));
        processed = doc.body.innerHTML;
      }
      if (sink.includes('createContextualFragment') || sink.includes('Document write')) {
        const doc = new DOMParser().parseFromString(innerPolicy.createHTML(processed), 'text/html');
        doc.querySelectorAll('script').forEach((script) => script.remove());
        processed = doc.body.innerHTML;
      }
      return processed;
    },
    createScriptURL: (input) => input,
    createScript: (input) => input,
  });
}

function decorateLinks(root) {
  root.querySelectorAll('a[href]').forEach((link) => {
    const url = new URL(link.href, window.location.href);
    if (url.protocol.startsWith('http') && url.origin !== window.location.origin) {
      link.target ||= '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
}

function decorateButtons(main) {
  main.querySelectorAll('p a[href]').forEach((link) => {
    if (link.closest('.block') || link.querySelector('img')) return;

    const paragraph = link.closest('p');
    if (!paragraph || paragraph.textContent.trim() !== link.textContent.trim()) return;

    const strong = link.closest('strong');
    const emphasis = link.closest('em');
    if (!strong && !emphasis) return;

    paragraph.classList.add('button-wrapper');
    link.classList.add('button', strong ? 'primary' : 'secondary');
    (strong || emphasis).replaceWith(link);
  });
}

// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  decorateSections(main);
  decorateBlocks(main);
  decorateButtons(main);
  decorateLinks(main);
}

async function loadEager(doc) {
  document.documentElement.lang = getMetadata('lang') || 'es';
  decorateTemplateAndTheme();

  const main = doc.querySelector('main');
  if (!main) {
    document.body.classList.add('appear');
    return;
  }

  const fallback = renderFallbackPage(main);
  if (!fallback) decorateMain(main);
  document.body.classList.add('appear');

  const firstSection = main.querySelector('.section');
  if (firstSection) await loadSection(firstSection, waitForFirstImage);
}

async function loadLazy(doc) {
  const main = doc.querySelector('main');
  const header = doc.querySelector('body > header');
  const footer = doc.querySelector('body > footer');

  await Promise.all([
    header ? loadHeader(header) : Promise.resolve(),
    main ? loadSections(main) : Promise.resolve(),
    footer ? loadFooter(footer) : Promise.resolve(),
  ]);

  if (main) initSiteExperience(main);

  decorateLinks(doc);

  const { hash } = window.location;
  const target = hash ? doc.getElementById(hash.slice(1)) : null;
  if (target) target.scrollIntoView();
}

async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
}

loadPage();
