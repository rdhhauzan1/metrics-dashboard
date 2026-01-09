# Prometheus Metrics Dashboard

Static viewer for Prometheus-style metrics that lets you point at any endpoint and monitor key proxy values as simple status blocks with configurable refresh pacing.

## Features

- Fetches raw Prometheus metrics text and renders proxy stats (connections, affinity cache, upstream health) as single-value/status cards.
- Focuses on these metrics: `proxy_active_connections`, `proxy_affinity_cache_size`, and every `proxy_upstream_health` label variant (each rendered as a 0/1 health card). `proxy_active_connections` and `proxy_affinity_cache_size` display their raw numeric value, so values above `1` are still shown without binarizing them.
- Maintains a per-series line chart (up to 40 points) powered by Chart.js.
- Supports selectable refresh intervals (3s, 5s, 15s) and an on-demand refresh button.
- Status banner surfaces last refresh time or fetch errors.

## Getting started

1. Serve this folder with any static server (e.g., `npx serve metrics-dashboard`, `python -m http.server 8000`, etc.).
2. Open `http://localhost:PORT/index.html` in your browser.
3. Paste the metrics endpoint URL into the “Metrics URL” field (default is `http://localhost:9100/metrics`).
4. Choose a refresh cadence or click **Refresh now**; the dashboard will keep each chart up to date.

## Customization

- Edit `index.html` to tweak text, styles, or default endpoint/interval values.
- Update `styles.css` if you want a different color palette or layout.
- Chart.js is loaded via CDN; you can pin a version or swap for another library if needed.
