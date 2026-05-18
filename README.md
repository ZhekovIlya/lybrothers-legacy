# Ly Brothers EDS foundation

Foundational Adobe Edge Delivery Services project for migrating lybrothers.es from WordPress to document-based authoring.

## Architecture

- **Authoring:** `da.live` with a Google Drive mount configured in `fstab.yaml`.
- **Delivery:** default `aem.page` and `aem.live` preview/publish URLs.
- **Frontend:** vanilla JavaScript, native browser APIs, and scoped CSS. No jQuery, libraries, frameworks, custom domain routing, or Cloudflare Worker setup.

## Content mapping notes

- The first introductory area maps to the `Hero` block.
- Booking is a direct phone call CTA authored with a `tel:` URL.
- Finding the bar is a Google Maps/directions link CTA.
- The current menu is image-based, so the `Cards` block supports single picture rows while still allowing structured cocktail cards later.

## Example hero authoring

| Hero |
| --- |
| Barcelona Speakeasy |
| Ly Brothers |
| Cócteles clásicos, recetas propias y una atmósfera íntima en Barcelona. |
| Call here | tel:+34XXXXXXXXX |
| Find directions | https://www.google.com/maps/search/?api=1&query=Ly%20Brothers%20Barcelona |
| hero-image.jpg |

## Example menu authoring

| Cards |
| --- |
| menu-page-1.jpg |
| menu-page-2.jpg |

## Setup

1. Replace `YOUR_GOOGLE_DRIVE_FOLDER_ID` in `fstab.yaml` with the folder connected to `da.live`.
2. Connect the repository to the EDS project.
3. Preview content on the default `aem.page` URL and publish to the default `aem.live` URL.
