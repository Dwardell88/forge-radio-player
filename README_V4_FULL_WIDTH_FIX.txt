FORGE Christian Radio PWA — V4 FULL WIDTH PHONE FIX

This update fixes the side-cropping visible on tall Android/Samsung screens.

What was wrong in V3:
The image-based app pages were set to the full viewport HEIGHT while also being forced to a 2:3 aspect ratio. On tall phones this made the app canvas wider than the physical screen, so the left and right sides were clipped.

What V4 changes:
- Home / Listen page now uses the exact viewport width and height.
- News page now uses the exact viewport width and height.
- Request page now uses the exact viewport width and height.
- Removed the forced 2:3 aspect ratio from the full-screen responsive override.
- Artwork fills the entire visible app canvas instead of extending beyond the sides.
- Existing hotspots, player controls, forms, ticker, modal, links, service worker, and fixed bottom navigation are preserved.
- Shows, Partners, Prayer Wall, install files, manifest, icons, and service worker remain unchanged.

Deploy this package over the existing PWA folder, preserving the same paths.
