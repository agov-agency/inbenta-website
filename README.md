# Inbenta website

Homepage built from the Figma file "Website Redesign".

## Structure

- `css/tokens.css`: design tokens (fonts, type scale, colors, gradient, shadow) taken from the Figma Style Guide.
- `css/base.css`: light reset and the text style classes (`.h1`–`.h5`, `.p0`–`.p4`, `.l1`–`.l3`, `.l1-mono`, `.l2-mono`).
- `styleguide.html`: a preview page showing every token, to compare against Figma.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/styleguide.html
