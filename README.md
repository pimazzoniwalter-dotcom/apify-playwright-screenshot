# Playwright Screenshot Actor (Apify)

This repository contains a minimal but robust **Playwright-based Apify Actor** designed to reliably capture screenshots from JavaScript-heavy websites.

The implementation focuses on **stability over complexity**, handling dynamic rendering, delayed content, and real-world edge cases commonly found in modern sites (CMP banners, async loading, heavy JS execution).

---

## Purpose

The main goal of this project is to:
- Capture **accurate, full-page screenshots** of dynamic websites
- Ensure the page is fully rendered before taking the screenshot
- Integrate seamlessly with an external automation pipeline (Make)

This actor is used as a **data capture component**, not as a crawler.

---

## Key Design Decisions

- **Playwright** is used instead of raw HTTP requests to properly render JavaScript-heavy pages
- A **single-page execution model** is used for predictability and reliability
- The output key name (`screenshot`) is intentionally kept as-is to maintain compatibility with an existing downstream automation (Make scenario)
- Timeouts and waits are explicitly handled to reduce flaky runs

---

## Output

The actor returns a structured output containing:

```json
{
  "screenshot": "<base64-encoded image>"
}
