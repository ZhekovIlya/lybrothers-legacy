/**
 * Cards block for the cocktail/menu area.
 *
 * For the current lybrothers.es migration, the menu is authored as simple images.
 * The block also supports title, description, and price cells for future clean menu data.
 *
 * Recommended authoring shapes:
 * | Cards |
 * | Menu picture |
 *
 * Or:
 * | Cards |
 * | Image | Cocktail name | Description | Price |
 */

function createElement(tag, options = {}) {
  const element = document.createElement(tag);

  if (options.className) element.className = options.className;
  if (options.text) element.textContent = options.text;

  return element;
}

function getCellText(row, index) {
  return row.children[index]?.textContent?.trim() || '';
}

function getPicture(row) {
  return row.querySelector('picture');
}

export default function decorate(block) {
  const rows = [...block.children];
  const list = createElement('ul', { className: 'cards-list' });

  rows.forEach((row) => {
    const picture = getPicture(row);
    const pictureOnly = picture && row.children.length === 1;
    const title = pictureOnly ? '' : getCellText(row, picture ? 1 : 0);
    const description = pictureOnly ? '' : getCellText(row, picture ? 2 : 1);
    const price = pictureOnly ? '' : getCellText(row, picture ? 3 : 2);

    if (!title && !description && !price && !picture) return;

    const item = createElement('li', {
      className: pictureOnly ? 'cards-card cards-card-picture' : 'cards-card',
    });

    if (picture) {
      const media = createElement('div', { className: 'cards-card-media' });
      media.append(picture);
      item.append(media);
    }

    if (!pictureOnly && (title || description || price)) {
      const body = createElement('div', { className: 'cards-card-body' });

      if (title || price) {
        const header = createElement('div', { className: 'cards-card-header' });

        if (title) {
          header.append(createElement('h3', {
            className: 'cards-card-title',
            text: title,
          }));
        }

        if (price) {
          header.append(createElement('p', {
            className: 'cards-card-price',
            text: price,
          }));
        }

        body.append(header);
      }

      if (description) {
        body.append(createElement('p', {
          className: 'cards-card-description',
          text: description,
        }));
      }

      item.append(body);
    }

    list.append(item);
  });

  block.textContent = '';
  block.id = 'menu';
  if (!list.children.length) {
    block.hidden = true;
    return;
  }

  block.append(list);
}
