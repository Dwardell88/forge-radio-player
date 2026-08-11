FORGE PWA V3 — RESPONSIVE / SAFE-NAV REBUILD

THIS REPLACES THE PREVIOUS FULL-SCREEN-STRETCH VERSION.

WHAT WAS FIXED
1. Artwork is NO LONGER stretched to the phone's width and height.
2. Image-driven pages preserve the original 2:3 artwork proportions.
3. On tall phones, only the far left/right decorative edges may crop slightly.
   The main artwork, forms, player controls, and interactive overlays remain aligned.
4. The moving speaker-cone overlays on the player keep their original alignment.
5. The navigation artwork baked into the image is hidden.
6. A real HTML navigation bar is fixed to the bottom of the app.
   It remains visible above Android/iPhone system navigation and safe-area regions.
7. The app root remains the correct TAP TO ENTER intro artwork.
8. Service worker cache was changed to forge-pwa-v3-responsive-safe-nav.

APP BUILDER REQUIREMENTS
- WebView must use the full available viewport (MATCH_PARENT / 100% height).
- Do not place the web app inside a fixed-height iframe.
- Do not force a custom page zoom or aspect ratio.
- Let the page control its own viewport using the included viewport meta tag.

DEPLOYMENT
- Replace the old PWA files with ALL files in this package.
- Upload to the root of listen.theforgeradio.org.
- Clear the old WebView/PWA cache or uninstall/reinstall once after deployment.
