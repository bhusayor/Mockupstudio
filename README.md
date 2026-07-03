# Mockup Studio

A free, browser-based tool for turning screenshots and screen recordings into polished device mockups — with backgrounds, shadows, 3D tilt, logos, badges and text. Export as **image, video, or GIF**. No signup, nothing uploaded to a server: everything runs in your browser.

**Live:** https://bhusayor.github.io/Mockupstudio/

## Features

- **Devices & frames** — plain frames or real device shells, single or two-device layouts
- **Backgrounds** — solid colours, gradients (with a custom gradient maker), or your own image
- **Effects** — drop shadows, 3D perspective tilt, adjustable radius, zoom and padding
- **Overlays** — upload logos, drop in marketing badges, and add editable text (Figma-style controls)
- **Smart editing** — drag to position, smart alignment guides, undo/redo (⌘/Ctrl+Z)
- **Export** — PNG/JPG image, MP4/WebM video, or animated GIF

## Tech

Vanilla HTML/CSS/JS — no build step, no dependencies. Served as static files via GitHub Pages.

```
index.html          markup + <head> (SEO, favicon, analytics)
css/styles.css      all styles
js/app.js           entire app (devices, render, controls, export pipeline)
js/mobile-gate.js   hides the app below 900px (desktop-first tool)
```

The app renders through **two paths** — a live DOM/CSS preview and a separate `<canvas>` export pipeline — so any new visual element is implemented in both.

## Running locally

It's a static site, so just serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly via `file://` also works for most features.

## License

All rights reserved unless a `LICENSE` file states otherwise.
