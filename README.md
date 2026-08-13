# Ly Brothers EDS foundation

Foundational Adobe Edge Delivery Services project for migrating lybrothers.es from WordPress to document-based authoring.

## Architecture

- **Authoring:** Google Docs, via a Google Drive folder mounted in `fstab.yaml`. No Adobe/AEM license required.
- **Delivery:** default `aem.page` and `aem.live` preview/publish URLs.
- **Frontend:** vanilla JavaScript, native browser APIs, and scoped CSS. No jQuery, libraries, frameworks, custom domain routing, or Cloudflare Worker setup.

## Content mapping notes

- The first introductory area maps to the `Hero` block.
- Booking is a direct phone call CTA authored with a `tel:` URL.
- Finding the bar is a Google Maps/directions link CTA.
- The current menu is image-based, so the `Cards` block supports single picture rows while still allowing structured cocktail cards later.

## Example hero authoring

> **Important:** the last row must be an actual **inserted image** (Insert ▸ Image in
> Google Docs), not typed text like `hero-image.jpg`. Typed filenames get treated as an
> icon reference and render as nothing — they are not a working image placeholder.

| Hero |
| --- |
| Barcelona Speakeasy |
| Ly Brothers |
| Cócteles clásicos, recetas propias y una atmósfera íntima en Barcelona. |
| Call here | tel:+34XXXXXXXXX |
| Find directions | https://www.google.com/maps/search/?api=1&query=Ly%20Brothers%20Barcelona |
| *(inserted image)* |

## Example menu authoring

> Same rule applies: each row below must contain a real inserted image, not text.

| Cards |
| --- |
| *(inserted image)* |
| *(inserted image)* |

## Setup

1. Create/confirm the Google Drive folder for this site and share it (Editor) with `helix@adobe.com`.
2. Point `fstab.yaml`'s `mountpoints: /:` at that folder's URL.
3. Install the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync/installations/new) on this repo.
4. Author `index` (see examples above) in the mounted Google Drive folder, using real inserted images.
5. Preview content on the default `aem.page` URL (via Sidekick, or `POST https://admin.hlx.page/preview/<org>/<repo>/main/`) and publish to `aem.live` the same way.
