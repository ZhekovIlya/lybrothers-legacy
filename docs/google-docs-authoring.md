# LY Brothers Google Docs authoring

The AEM content root is the Google Drive folder configured in `fstab.yaml`.
The root contains the page documents `index`, `menu`, and `contact`, plus the
shared fragments `nav` and `footer`.

Static media values use paths such as `/media/hero-image.jpeg`. The blocks turn
those paths into images and video, so editors do not need to upload duplicate
copies into every document.

## `index`

### Hero

| Hero | | |
| --- | --- | --- |
| Eyebrow | Barcelona · El Raval | |
| Heading | A Hidden World of Artisanal Spirits | |
| Copy | Barcelona's premier speakeasy in the heart of El Raval. Step behind the curtain for unforgettable nights, rare ingredients, and masterful mixology. | |
| Action | Book Your Table | /contact/ |
| Action | View Menu | /menu/ |
| Image | /media/hero-image.jpeg | |
| Scroll Label | Discover | |

### Scroll Ritual

| Scroll Ritual | | | |
| --- | --- | --- | --- |
| Eyebrow | The Tequila Ritual | | |
| Heading | You scroll. We mix. | | |
| Copy | Move through the craft from the first measured pour to the final reveal. | | |
| Video | /media/cocktail-making.mp4 | | |
| Poster | /media/cocktail-craft.png | | |
| Step | 01 | Measure the agave | Precision first. Character follows. |
| Step | 02 | Shake the night | Ice, citrus and movement become texture. |
| Step | 03 | Pour the reveal | The final detail is always yours. |

### Philosophy

| Philosophy | | |
| --- | --- | --- |
| Image | /media/cocktail-craft.png | |
| Caption | Every pour is a performance. | |
| Eyebrow | Our Philosophy | |
| Heading | The Alchemy of Taste & Time | |
| Copy | Hidden away in the vibrant alleys of El Raval, LY Brothers is a sanctuary for those who appreciate the finer things. We bypass the ordinary, sourcing rare, artisanal spirits and blending them with fresh, local botanicals to craft cocktails that tell a story. | |
| Copy | Here, there are no rushed orders. Every pour is a performance, every ingredient has a purpose, and every sip is a revelation. | |
| Action | Discover Our Story | /contact/ |

### Collection

| Collection | | |
| --- | --- | --- |
| Eyebrow | The Collection | |
| Heading | Signature Cocktails | |
| Cocktail | /media/cocktail-1.png | Smoke & Orchard |
| Cocktail | /media/cocktail-2.png | Golden Hour |
| Cocktail | /media/cocktail-3.jpeg | After Midnight |
| Copy | Our mixologists craft bespoke drinks tailored to your exact palate. Ask about our off-menu creations. | |
| Action | Explore Full Menu | /menu/ |

### Private Events

| Private Events | | |
| --- | --- | --- |
| Eyebrow | Exclusivity Redefined | |
| Heading | Host Your Night Behind the Curtain | |
| Copy | From intimate masterclasses to full-venue buyouts, LY Brothers offers a sophisticated backdrop for your most important milestones. | |
| Action | Plan Your Event | /contact/ |
| Option | Bespoke Mixology | A menu shaped around your guests. |
| Option | Private Buyouts | The hidden room, entirely yours. |
| Option | Masterclasses | Learn the craft behind the bar. |

### Hidden Door

| Hidden Door | | |
| --- | --- | --- |
| Eyebrow | Experience the Mystery | |
| Heading | Find the Hidden Door | |
| Copy | Deep in the winding streets of El Raval, down a quiet alleyway, a world of artisanal spirits awaits. We don't have a neon sign: just a door and a promise of a better drink. | |
| Detail | Find us | Carrer de Lancaster, 20 · 08001 Barcelona |
| Detail | Open | Sun–Thu 20:00–02:00 · Fri 20:00–03:00 · Sat 20:00–02:00 |
| Action | Get Directions | https://maps.app.goo.gl/PwqVrGvxxgDSQeHF8 |
| Action | Call the Bar | tel:+34602127026 |
| Image | /media/miguel.jpeg | |
| Caption | Look for the Fresh Juice sign. | |

## `menu`

| Page Intro | | |
| --- | --- | --- |
| Eyebrow | The Collection | |
| Heading | Our Menus | |
| Copy | Explore our selection of handcrafted cocktails and revitalizing fresh juices. | |

| Menu Viewer | | |
| --- | --- | --- |
| Menu | Cocktails | /media/menu-cocktails.png |
| Menu | Fresh Juice | /media/menu-juice.png |

## `contact`

| Contact Details | | |
| --- | --- | --- |
| Eyebrow | Get in Touch | |
| Heading | Find the Hidden Door | |
| Copy | Look for the “Fresh Juice” sign on Carrer de Lancaster. Step through the curtains, ask for Miguel, and leave the ordinary world behind. We highly recommend booking a table in advance to secure your spot. | |
| Detail | Location | Carrer de Lancaster, 20 · Ciutat Vella, 08001 Barcelona, Spain |
| Detail | Reservations & Inquiries | +34 602 12 70 26 |
| Detail | Hours of Operation | Sun–Thu 20:00–02:00 · Friday 20:00–03:00 · Saturday 20:00–02:00 |
| Action | Call to Reserve | tel:+34602127026 |
| Action | Get Directions | https://maps.app.goo.gl/PwqVrGvxxgDSQeHF8 |
| Image | /media/miguel.jpeg | |
| Caption | Look for this sign | |

## Metadata

Each page ends with a Metadata block containing `Title`, `Description`, `Lang`
(`en`), and `Image` (`/media/hero-image.jpeg`).

## `nav`

Use three sections separated by horizontal rules:

1. Link **LY Brothers** to `/`.
2. Add a bulleted list linking **Home** to `/`, **Menu** to `/menu/`, and
   **Contact** to `/contact/`.
3. Link **Call Us** to `tel:+34602127026`.

## `footer`

Use four sections separated by horizontal rules:

1. LY Brothers description and the Instagram link.
2. Explore links for Home, Menu, and Contact.
3. Opening hours.
4. Address, telephone, email, and copyright notice.
