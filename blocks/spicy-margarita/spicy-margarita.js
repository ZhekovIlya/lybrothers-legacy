/**
 * Spicy Margarita block.
 *
 * Recommended authoring shape:
 * | Spicy Margarita | |
 * | Signature ritual | |
 * | Margarita Fuego | |
 * | Fresh lime, tequila and a smoky chili finish. | |
 * | Lime | Chili | Tajin-style rim |
 * | Try it tonight | tel:+34602127026 |
 * | Optional inserted image | |
 */

function createElement(tag, options = {}) {
  const element = document.createElement(tag);
  if (options.className) element.className = options.className;
  if (options.text) element.textContent = options.text;
  return element;
}

function getText(row) {
  return row?.textContent?.trim() || '';
}

function getAction(row) {
  const label = row?.children?.[0]?.textContent?.trim() || '';
  const link = row?.querySelector?.('a[href]');
  const href = link?.href || row?.children?.[1]?.textContent?.trim() || '';
  return { href, label };
}

function createGlassArt() {
  const art = createElement('div', { className: 'margarita-art' });
  art.setAttribute('aria-hidden', 'true');
  art.innerHTML = `
    <span class="margarita-aura"></span>
    <svg class="margarita-glass" viewBox="0 0 520 560" focusable="false">
      <g class="margarita-dust">
        <circle cx="112" cy="88" r="4"/>
        <circle cx="425" cy="150" r="3"/>
        <circle cx="92" cy="228" r="2.5"/>
        <circle cx="404" cy="315" r="4.5"/>
        <circle cx="146" cy="388" r="3"/>
        <circle cx="369" cy="74" r="2"/>
      </g>
      <g class="margarita-coupe">
        <path class="margarita-rim" d="M92 126 C165 103 355 103 428 126"/>
        <path class="margarita-salt" d="M99 119 C174 96 346 96 421 119"/>
        <path class="margarita-liquid" d="M112 145 C185 128 335 128 408 145 L286 326 Q260 348 234 326 Z"/>
        <path class="margarita-bowl" d="M92 126 C165 103 355 103 428 126 L292 337 Q260 365 228 337 Z"/>
        <path class="margarita-shine" d="M138 146 C157 205 194 269 235 318"/>
        <g class="margarita-ice">
          <rect x="180" y="158" width="55" height="44" rx="8" transform="rotate(12 207 180)"/>
          <rect x="254" y="151" width="61" height="49" rx="8" transform="rotate(-10 284 175)"/>
          <rect x="307" y="187" width="51" height="43" rx="8" transform="rotate(18 332 208)"/>
        </g>
        <path class="margarita-stem" d="M260 354 V472"/>
        <path class="margarita-base" d="M190 484 Q260 462 330 484"/>
      </g>
      <g class="margarita-lime">
        <path d="M359 118 A70 70 0 0 1 445 42 L423 122 Z"/>
        <path class="margarita-lime-line" d="M423 122 L414 70 M423 122 L379 80"/>
      </g>
      <g class="margarita-pepper">
        <path class="margarita-pepper-body" d="M132 328 C73 350 73 417 122 432 C168 446 206 408 218 359 C184 384 152 371 132 328 Z"/>
        <path class="margarita-pepper-stem" d="M132 328 C139 300 158 289 184 294"/>
      </g>
    </svg>
  `;
  return art;
}

function createNotes(text) {
  const notes = createElement('ul', { className: 'spicy-margarita-notes' });
  text.split(/\s*[|•]\s*/).filter(Boolean).forEach((note) => {
    notes.append(createElement('li', { text: note }));
  });
  return notes;
}

export default function decorate(block) {
  const rows = [...block.children];
  const eyebrow = getText(rows[0]) || 'Ritual de la casa';
  const heading = getText(rows[1]) || 'Margarita Fuego';
  const description = getText(rows[2])
    || 'Lima fresca, tequila y un final ahumado de chile.';
  const notes = getText(rows[3]) || 'Lima | Chile | Borde de especias';
  const action = getAction(rows[4]);
  const picture = rows.map((row) => row.querySelector('picture')).find(Boolean);

  const content = createElement('div', { className: 'spicy-margarita-content' });
  content.append(
    createElement('p', { className: 'spicy-margarita-eyebrow', text: eyebrow }),
    createElement('h2', { text: heading }),
    createElement('p', { className: 'spicy-margarita-copy', text: description }),
    createNotes(notes),
  );

  if (action.label && action.href) {
    const link = createElement('a', {
      className: 'button spicy-margarita-action',
      text: action.label,
    });
    link.href = action.href;
    content.append(link);
  }

  const visual = createElement('div', { className: 'spicy-margarita-visual' });
  if (picture) {
    const image = picture.querySelector('img');
    if (image && !image.alt) image.alt = heading;
    visual.classList.add('has-photo');
    const photo = createElement('div', { className: 'spicy-margarita-photo' });
    photo.append(picture);
    visual.append(photo);
  }
  visual.append(createGlassArt());

  block.textContent = '';
  block.id = 'signature';
  block.append(content, visual);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        block.classList.add('is-visible');
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(block);
  } else {
    block.classList.add('is-visible');
  }
}
