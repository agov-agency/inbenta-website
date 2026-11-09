# Inbenta website

Homepage built from the Figma file "Website Redesign".

## Structure

- `css/tokens.css`: design tokens (fonts, type scale, colors, gradient, shadow) taken from the Figma Style Guide.
- `css/base.css`: light reset and the text style classes (`.h1`–`.h5`, `.p0`–`.p4`, `.l1`–`.l3`, `.l1-mono`, `.l2-mono`).
- `css/components.css`: Button, Link, Checkbox, Pill and Tabs from the Figma Components page.
- `js/components.js`: tab switching (click and arrow keys).
- `assets/icons`, `assets/effects`: icons and button glows exported from Figma.
- `styleguide.html` and `components.html`: preview pages to compare against Figma. Their layout lives in `css/styleguide.css` and is not meant for the site.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/styleguide.html or http://localhost:8000/components.html
