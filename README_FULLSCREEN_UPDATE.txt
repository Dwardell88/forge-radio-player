FORGE PWA — FULL SCREEN REBUILD

This package fixes the app-screen sizing problem.

IMPORTANT CHANGES
- Intro, Player, News, and Request artwork now fills the COMPLETE WebView/app viewport.
- Removed the fixed 2:3 page aspect-ratio restriction.
- Removed the 520px/960px visual sizing restriction on app screens.
- Artwork is stretched to the exact device viewport so the interactive hotspot percentages remain aligned.
- Uses 100dvh / 100svh / 100vh fallbacks for modern Android and iPhone browser chrome.
- Shows, Partners, Install, Offline, and Prayer pages now have a minimum full-screen height.
- Bottom navigation on CSS pages spans the full app viewport.
- Service worker cache changed to forge-pwa-v2-fullscreen so devices receive the corrected files instead of an old cached version.

DEPLOYMENT
1. DELETE or replace the old PWA files on listen.theforgeradio.org.
2. Upload ALL contents of this package to the same root location.
3. Do not put these files inside an iframe with a fixed pixel height.
4. If an app-builder WebView is used, make the WebView itself MATCH_PARENT / full screen.
5. Open the app once while online. The new service worker will replace the old cache.
6. If a device still shows the old version, remove the installed PWA and install it again.

The live player still uses the existing Live365 stream.
