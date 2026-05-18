/*
 * Core Adobe Edge Delivery Services initialization.
 * Vanilla JS only. No external dependencies.
 */

const LCP_BLOCKS = ['hero'];

/**
 * Loads a stylesheet once.
 * @param {string} href
 * @returns {Promise<void>}
 */
function loadCSS(href) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`link[href="${href}"]`)) {
      resolve();
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => resolve();
    link.onerror = reject;
    document.head.append(link);
  });
}

/**
 * Converts authored labels into CSS-safe class names.
 * @param {string} name
 * @returns {string}
 */
function toClassName(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^0-9a-z]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Reads metadata from authored meta tags.
 * @param {string} name
 * @returns {string}
 */
export function getMetadata(name) {
  const attr = name && name.toLowerCase();
  return [...document.head.querySelectorAll(`meta[name="${attr}"], meta[property="${attr}"]`)]
    .map((meta) => meta.content)
    .join(', ');
}

/**
 * Adds safe defaults to outbound links.
 * @param {Element} root
 */
function decorateLinks(root) {
  const { origin } = window.location;

  root.querySelectorAll('a[href]').forEach((link) => {
    if (link.href.startsWith('http') && !link.href.startsWith(origin) && !link.target) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
}

/**
 * Wraps top-level document content into semantic sections.
 * Horizontal rules in the source document create section breaks.
 * @param {Element} main
 */
function decorateSections(main) {
  const sections = [];
  let currentSection;

  [...main.children].forEach((element) => {
    if (element.tagName === 'HR') {
      currentSection = undefined;
      element.remove();
      return;
    }

    if (!currentSection) {
      currentSection = document.createElement('section');
      sections.push(currentSection);
    }

    currentSection.append(element);
  });

  main.replaceChildren(...sections);

  sections.forEach((section) => {
    const block = section.querySelector(':scope > .block');
    if (block) section.classList.add(`${block.dataset.blockName}-container`);
  });
}

/**
 * Decorates EDS block tables generated from document-based authoring.
 * @param {Element} main
 */
function decorateBlocks(main) {
  main.querySelectorAll('div').forEach((block) => {
    const firstCell = block.querySelector(':scope > div:first-child > div:first-child');
    if (!firstCell) return;

    const blockName = toClassName(firstCell.textContent || '');
    if (!blockName) return;

    block.classList.add(blockName, 'block');
    block.dataset.blockName = blockName;
    firstCell.parentElement.remove();

    if (!block.firstElementChild) block.remove();
  });
}

/**
 * Loads and decorates one block.
 * @param {Element} block
 * @returns {Promise<void>}
 */
async function loadBlock(block) {
  const blockName = block.dataset.blockName;
  if (!blockName || block.dataset.blockStatus === 'loaded') return;

  block.dataset.blockStatus = 'loading';

  try {
    await loadCSS(`/blocks/${blockName}/${blockName}.css`);
    const module = await import(`/blocks/${blockName}/${blockName}.js`);

    if (module.default) await module.default(block);

    block.dataset.blockStatus = 'loaded';
  } catch (error) {
    block.dataset.blockStatus = 'error';
    // eslint-disable-next-line no-console
    console.error(`Failed to load block: ${blockName}`, error);
  }
}

/**
 * Loads LCP-critical content first.
 * @param {Element} main
 */
async function loadEager(main) {
  document.documentElement.lang = document.documentElement.lang || 'es';
  decorateLinks(main);

  const lcpBlocks = [...main.querySelectorAll('.block')]
    .filter((block) => LCP_BLOCKS.includes(block.dataset.blockName));

  await Promise.all(lcpBlocks.map(loadBlock));
  document.body.classList.add('appear');
}

/**
 * Loads the remaining blocks after the LCP path.
 * @param {Element} main
 */
async function loadLazy(main) {
  const lazyBlocks = [...main.querySelectorAll('.block')]
    .filter((block) => block.dataset.blockStatus !== 'loaded');

  await Promise.all(lazyBlocks.map(loadBlock));
  document.dispatchEvent(new CustomEvent('eds:lazy-loaded'));
}

/**
 * Dispatches a hook for future non-critical behavior.
 */
function loadDelayed() {
  window.setTimeout(() => {
    document.dispatchEvent(new CustomEvent('eds:delayed-loaded'));
  }, 3000);
}

async function loadPage() {
  const main = document.querySelector('main');
  if (!main) return;

  decorateSections(main);
  decorateBlocks(main);

  await loadEager(main);
  await loadLazy(main);

  loadDelayed();
}

loadPage();
