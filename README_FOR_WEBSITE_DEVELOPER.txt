FORGE CHRISTIAN RADIO — INSTALLABLE PWA PACKAGE
==================================================

WHAT THIS IS
This package turns listen.theforgeradio.org into an installable Progressive Web App (PWA).
Listeners can install it directly from the website without using the Apple App Store or Google Play.

INCLUDED
- Intro / splash page
- Live player page with the FORGE stream
- FORGE News
- Song Request page (opens listener's email app addressed to info@theforgeradio.org)
- Prayer Wall
- Shows page
- Partners page
- Install instructions page
- PWA manifest
- Service worker for app-shell/offline caching
- 192x192, 512x512, maskable, Apple touch, and favicon icons

DEPLOYMENT
1. Unzip this package.
2. Upload EVERYTHING inside FORGE_PWA_Package to the ROOT of:
   https://listen.theforgeradio.org/
3. The server must use HTTPS.
4. Preserve the folder names exactly:
   /home/
   /news/
   /request/
   /shows/
   /our-partners/
   /prayer-wall/
   /install/
   /icons/
5. Make sure these files are publicly reachable:
   /manifest.webmanifest
   /service-worker.js

INSTALLING
Android / Chrome:
- Visit https://listen.theforgeradio.org/
- Choose Install App or Add to Home Screen.

iPhone / Safari:
- Visit https://listen.theforgeradio.org/
- Tap Share
- Tap Add to Home Screen
- Tap Add

IMPORTANT
- Live radio playback requires internet access. The service worker intentionally does NOT cache the Live365 stream.
- If changes do not appear immediately after an update, increment the cache name in service-worker.js
  from forge-pwa-v1 to forge-pwa-v2, etc.
- This package assumes it is installed at the ROOT of listen.theforgeradio.org, not inside a subfolder.
- Song requests use mailto:, so the listener's email app opens and they press Send.
