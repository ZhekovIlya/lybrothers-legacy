# LY Brothers — AEM Edge Delivery Services

Frontend code and authoring guidance for the LY Brothers cocktail bar website. The implementation uses vanilla JavaScript, native browser APIs, block-scoped CSS, and Google Docs as the AEM content source.

## Architecture

- **Code:** GitHub repository `ZhekovIlya/lybrothers-legacy`, synchronized by the AEM Code Sync GitHub App.
- **Content:** Google Docs in the Google Drive folder mounted at `/` by `fstab.yaml`.
- **Delivery:** AEM preview at `.aem.page` and published origin at `.aem.live`.
- **Frontend:** EDS document markup enhanced by `scripts/aem.js`, project scripts, and independently loaded blocks.

## Component map

| Component | Authored in Google Docs | Implemented in GitHub |
| --- | --- | --- |
| Header | `nav` | `blocks/header/` |
| Hero | `Hero` in `index` | `blocks/hero/` |
| Scroll cocktail ritual | `Scroll Ritual` in `index` | `blocks/scroll-ritual/` |
| Story and collection | `Philosophy`, `Collection`, `Private Events`, and `Hidden Door` in `index` | Corresponding folders under `blocks/` |
| Menu | `Page Intro` and `Menu Viewer` in `menu` | `blocks/page-intro/` and `blocks/menu-viewer/` |
| Contact | `Page Intro` and `Contact Details` in `contact` | `blocks/page-intro/` and `blocks/contact-details/` |
| Footer | `footer` | `blocks/footer/` |

Complete copy-ready tables for `index`, `menu`, `contact`, `nav`, and `footer` are in [`docs/google-docs-authoring.md`](docs/google-docs-authoring.md).

The legacy code-native `Spicy Margarita` block remains in the repository for compatibility. The current site uses `Scroll Ritual`, which scrubs a real cocktail-making video as the visitor scrolls.

## Local development

Prerequisites: a current Node.js LTS release and access to the AEM preview origin.

```sh
npm ci
npm start
```

`npm start` runs `aem up` and serves the site at `http://localhost:3000/`.

Quality checks:

```sh
npm run lint
```

## Google Drive setup

1. Confirm `fstab.yaml` points to the intended website folder.
2. Share the root folder as **Editor** with `helix@adobe.com`, or register and share it with a dedicated Google technical user.
3. In AEM Site Admin, confirm `ZhekovIlya/lybrothers-legacy` uses that folder as its content source.
4. Confirm the AEM Code Sync GitHub App is installed for the repository.
5. Keep native Google Docs named `index`, `menu`, `contact`, `nav`, and `footer` in the Drive root.

Use a horizontal rule to place each visual section in its own AEM section. Blocks that support repository media accept paths under `/media/`; other images can be inserted directly into Google Docs with useful alt text.

## Preview and publish

With the [AEM Sidekick](https://www.aem.live/docs/sidekick):

1. Open each of `index`, `menu`, `contact`, `nav`, and `footer`.
2. Choose **Preview** for each document.
3. Validate the `.aem.page` URLs.
4. Choose **Publish** for each document when approved.

Code and content deploy independently. A GitHub push updates JavaScript, CSS, and repository media through AEM Code Sync. Sidekick Preview updates `.aem.page`; Sidekick Publish updates `.aem.live`.

- Preview: https://main--lybrothers-legacy--zhekovilya.aem.page/
- Published origin: https://main--lybrothers-legacy--zhekovilya.aem.live/

Production use of Edge Delivery Services requires the appropriate AEM Sites entitlement. DNS, CDN, certificates, and production-domain configuration are separate launch steps.
