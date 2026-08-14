# LY Brothers Google Docs authoring

The AEM content root is the Google Drive folder configured in `fstab.yaml`.
The root contains the page documents `index`, `menu`, and `contact`, plus the
shared fragments `nav` and `footer`.

## Phone-friendly image authoring

Photos do not need to go through GitHub. In the Google Docs mobile app, open the
page document, tap the image cell in the relevant block, and use **Insert →
Image → Photos** (or **Camera**). The site accepts a directly inserted image in
every `Image`, `Poster`, `Cocktail`, and `Menu` row.

For the best result:

1. Insert one image per image cell and remove the old path or image first.
2. Use portrait photos for cocktails and people, and landscape photos for the
   hero or menu artwork.
3. Keep each image below 10 MB so AEM can preview it successfully.
4. Add concise alt text in Google Docs when the mobile app exposes that option;
   otherwise add it later from desktop for accessibility.
5. Keep the first-column labels (`Image`, `Cocktail`, and so on) unchanged.

Repository paths such as `/media/hero-image.jpeg` remain supported as a fallback.

### Phone-friendly video replacement

Videos live in Google Drive beside the page documents rather than inside a
Google Doc. From Drive, upload the MP4, select it, and use AEM Sidekick to
**Preview** and then **Publish** the media file. Copy its resulting site URL or
path into the `Video` row of the Hero, Scroll Ritual, or Pour Stories table.
This can all be done from a phone browser that supports Sidekick; the Google
Docs app alone can edit the URL but cannot publish the MP4.

Keep hero loops short, silent, landscape, and preferably below 8 MB. In-view
films should be silent MP4 files and ideally stay below 20 seconds so visitors
reach the copy reveal without waiting. The `Image` or `Poster` row remains the
fallback while video loads or when a device blocks playback.

Editing copy and inserting images is fully phone-friendly. Previewing and
publishing still uses the AEM Sidekick workflow described below, so keep a
Sidekick-capable browser available for that final step.

## `index`

### Hero

| Hero | | |
| --- | --- | --- |
| Eyebrow | Barcelona · El Raval | |
| Heading | A Hidden World of Artisanal Spirits | |
| Copy | Barcelona's premier speakeasy in the heart of El Raval. Step behind the curtain for unforgettable nights, rare ingredients, and masterful mixology. | |
| Action | Book Your Table | /contact/ |
| Action | View Menu | /menu/ |
| Video | `/media/hero-ice-loop.mp4` | |
| Image | Insert a landscape photo here, or use `/media/hero-image.jpeg` | |
| Scroll Label | Discover | |

### Scroll Ritual

| Scroll Ritual | | | |
| --- | --- | --- | --- |
| Eyebrow | The Tequila Ritual | | |
| Heading | You scroll. We mix. | | |
| Copy | Move through the craft from the first measured pour to the final reveal. | | |
| Video | /media/cocktail-making.mp4 | | |
| Poster | Insert a landscape photo here, or use `/media/cocktail-craft.png` | | |
| Step | 01 | Measure the agave | Precision first. Character follows. |
| Step | 02 | Shake the night | Ice, citrus and movement become texture. |
| Step | 03 | Pour the reveal | The final detail is always yours. |

The Discover cue aligns the ritual to the viewport and starts its first
chapter. The video is divided evenly across the authored `Step` rows. Each
chapter loops while active. The bounded scroll controller advances exactly one
full-screen chapter per wheel, keyboard, or vertical swipe gesture, and tapping
a step snaps directly to its matching video segment. The next scroll after
chapter three exits to the following cocktail story.

### Pour Stories

Each `Story` row is one in-view film. Keep the first story set to `Left` and the
second to `Right` to preserve the alternating composition. The first video
frame remains visible while the film approaches. Each film plays once when it
is nearly fully aligned in the viewport. Film and copy remain visible together
in a 50/50 desktop layout; phones use a vertical film-and-copy composition.
Page scrolling never controls or interrupts playback. Tap or click a film to
pause or resume it.

| Pour Stories | | | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| Story | Left | /media/pour-story-agave.mp4 | 01 · The Bright Pour | Citrus makes the first move. | A clean measure of agave meets fresh acidity—bright, precise, and built for the first sip. | Insert a poster image, or use `/media/cocktail-1.png` |
| Story | Right | /media/pour-story-whiskey.mp4 | 02 · The Slow Stir | Time rounds every edge. | Whiskey, cold glass and patient movement. The drink settles into silk before it reaches you. | Insert a poster image, or use `/media/cocktail-2.png` |

### Philosophy

| Philosophy | | |
| --- | --- | --- |
| Image | Insert a portrait photo here, or use `/media/cocktail-craft.png` | |
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
| Cocktail | Insert a cocktail photo, or use `/media/cocktail-1.png` | Smoke & Orchard |
| Cocktail | Insert a cocktail photo, or use `/media/cocktail-2.png` | Golden Hour |
| Cocktail | Insert a cocktail photo, or use `/media/cocktail-3.jpeg` | After Midnight |
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
| Image | Insert a portrait photo here, or use `/media/miguel.jpeg` | |
| Caption | Look for the Fresh Juice sign. | |

## `menu`

| Page Intro | | |
| --- | --- | --- |
| Eyebrow | The Collection | |
| Heading | Our Menus | |
| Copy | Explore our selection of handcrafted cocktails and revitalizing fresh juices. | |

| Menu Viewer | | |
| --- | --- | --- |
| Menu | Cocktails | Insert the menu image, or use `/media/menu-cocktails.png` |
| Menu | Fresh Juice | Insert the menu image, or use `/media/menu-juice.png` |

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
| Image | Insert a portrait photo here, or use `/media/miguel.jpeg` | |
| Caption | Look for this sign | |

## Metadata

Each page ends with a Metadata block containing `Title`, `Description`, `Lang`
(`en`), and `Image` (a directly inserted image or `/media/hero-image.jpeg`).

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
