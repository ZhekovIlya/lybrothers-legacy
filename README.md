# Ly Brothers — AEM Edge Delivery Services

Frontend code for the Ly Brothers cocktail bar website on Adobe Experience Manager (AEM) Edge Delivery Services. The implementation uses vanilla JavaScript, native browser APIs, and block-scoped CSS.

## Architecture

- **Code:** GitHub repository `ZhekovIlya/lybrothers-legacy`, synchronized by the AEM Code Sync GitHub App.
- **Authoring source:** Google Docs in the Google Drive folder mounted at `/` in `fstab.yaml`. Google Drive and Document Authoring (`da.live`) are alternative sources; this project is configured for Google Drive.
- **Delivery:** AEM preview at `.aem.page` and published origin at `.aem.live`.
- **Frontend:** EDS document markup enhanced by `scripts/aem.js`, project scripts, and independently loaded blocks.

A modern AEM Configuration Service site record can define code and content independently and is authoritative when configured. `fstab.yaml` is the legacy, main-branch content-source declaration and remains useful for this repository-style setup. Verify the effective Google Drive source in [AEM Site Admin](https://tools.aem.live/tools/site-admin/index.html); do not assume editing `fstab.yaml` changes a site whose content source is managed there.

## Component map

| Component | Authored in Google Docs | Implemented in GitHub | Missing-content behavior |
| --- | --- | --- | --- |
| Header | `nav` document | `blocks/header/` | Shows a complete Spanish fallback navigation until `nav` is previewed. |
| Hero | `Hero` table in `index` | `blocks/hero/` | Uses `images/speakeasy-hero.webp`; an inserted image replaces it. |
| Cards/menu | `Cards` table in `index` | `blocks/cards/` | Hides empty or filename-only rows; insert real images or card copy. |
| Footer | `footer` document | `blocks/footer/` | Shows core contact and location information until `footer` is previewed. |
| Error page | Not authored | `404.html` | Used only when a requested content path does not exist. |

The fallbacks make a newly connected site usable, but Google Docs remain the source of truth. As soon as valid `nav`, hero image, cards, or `footer` content is previewed, the authored content is used instead.

## Local development

Prerequisites: a current Node.js LTS release and access to the AEM preview origin.

```sh
npm ci
npm start
```

`npm start` runs `aem up` and serves the site at `http://localhost:3000/`. It proxies authored AEM content while serving frontend files from this checkout.

Quality checks:

```sh
npm run lint
```

## Google Drive setup

1. Confirm the root mount in `fstab.yaml` points to the intended folder:
   ```yaml
   mountpoints:
     /: https://drive.google.com/drive/folders/<folder-id>
   ```
2. Share the website root folder as **Editor** with `helix@adobe.com`, or register and share it with a dedicated Google technical user.
3. In AEM Site Admin, confirm the site `ZhekovIlya/lybrothers-legacy` uses this Google Drive folder as its content source. Never place Google, Adobe, GitHub, or Admin API credentials in Git.
4. Install/confirm the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync/installations/new) for the repository.
5. Create native Google Docs named `index`, `nav`, and `footer` in the Drive root. Preview and publish all three separately.

### Authoring rule: sections and blocks

Use a horizontal rule in Google Docs to start a new visual section. Keep the `Hero` table in its own first section, then add a horizontal rule before introductory copy, `Cards`, or another major block. Without that separator, EDS assigns multiple container classes to the same section and their section-level backgrounds can compete.

Use actual inserted images via **Insert → Image**. Plain text such as `menu-page-1.jpg` or `hero-background.png` is treated as an icon name, not as an image reference.

### `index` document

Use real inserted images (**Insert → Image**) and set useful image alt text in Google Docs. Typed filenames such as `hero-image.jpg` are interpreted as icon names and are not image placeholders.

Hero block:

| Hero | |
| --- | --- |
| Barcelona Speakeasy | |
| Ly Brothers | |
| Barcelona's premier speakeasy in the heart of El Raval. | |
| Call the Bar | tel:+34602127026 |
| Get Directions | https://maps.app.goo.gl/PwqVrGvxxgDSQeHF8 |
| *(inserted hero image with alt text)* | |

The inserted hero image is rendered as the full-width background with a dark readability overlay. If it is omitted, the repository-provided speakeasy image is used.

Cards block; repeat one row per item:

| Cards | | | |
| --- | --- | --- | --- |
| *(inserted image with alt text)* | Cocktail name | Description | Price |

For image-only menu pages, insert one image per single-cell row and provide alt text identifying the page.

Add a Metadata block at the end of the document:

| Metadata | |
| --- | --- |
| Title | Hidden Speakeasy Cocktail Bar in Barcelona — Ly Brothers |
| Description | Discover Ly Brothers, an intimate cocktail bar in El Raval, Barcelona. |
| Lang | es |
| Image | *(inserted 1200 × 630 social image)* |

### `nav` document

Use three sections separated by horizontal rules:

1. Brand: link **Ly Brothers** to `/`.
2. Navigation: a bulleted list of internal links (for example Home, Menu, Contact).
3. Action: a linked **Call the Bar** CTA using `tel:+34602127026`.

The header loads `/nav.plain.html`, supports keyboard focus and Escape, and collapses to a menu button below 900 px.

Until this document exists, the code supplies `Inicio`, `Carta`, `Visítanos`, and `Llamar`. Previewing a valid `nav` document replaces that fallback.

### `footer` document

Use up to three sections separated by horizontal rules, for example:

1. Ly Brothers name and short description.
2. Linked address and opening hours.
3. Phone link, social links, and legal/copyright text.

The footer loads `/footer.plain.html`. Until that document exists, the code supplies the brand description, Barcelona/El Raval location, directions, phone number, and copyright. Previewing a valid `footer` document replaces that fallback.

## Preview and publish

Install the [AEM Sidekick](https://www.aem.live/docs/sidekick), add the Google Drive project, then:

1. Select or open `index`, `nav`, and `footer`.
2. Choose **Preview** for each document.
3. Validate the preview URL.
4. Choose **Publish** for each document when approved.

Code and content deploy independently:

- A push to GitHub updates JavaScript, CSS, and repository images through AEM Code Sync.
- **Preview** in Sidekick updates `.aem.page` content for the selected Google Doc.
- **Publish** in Sidekick updates `.aem.live` content for the selected Google Doc.
- Publishing code does not publish Google Docs, and publishing `index` does not publish `nav` or `footer`.

Project URLs:

- Preview: https://main--lybrothers-legacy--zhekovilya.aem.page/
- Published origin: https://main--lybrothers-legacy--zhekovilya.aem.live/

The `.aem.page` origin is for preview and carries `noindex`. The `.aem.live` origin is the published origin used behind a production CDN/custom domain; it is not itself the final DNS launch configuration.

## Production access and licensing

Adobe provides free development access to Edge Delivery Services. Production use is part of AEM Sites and requires an AEM Sites license/entitlement; pricing and trial terms must be confirmed with Adobe. Google Drive authoring does not remove that production licensing requirement. See the [AEM FAQ](https://www.aem.live/docs/faq) and [Adobe Managed CDN prerequisites](https://www.aem.live/docs/byo-cdn-adobe-managed).

DNS, certificate, CDN, author permissions, Google Drive sharing, Configuration Service changes, and content preview/publish are external operations and cannot be completed from this repository alone.
