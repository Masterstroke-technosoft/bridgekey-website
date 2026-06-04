# BridgeKey Project Branding

This file documents the exact fonts and colors used in `BridgeKey.html`.

## Font Families

The project loads these fonts from Google Fonts:

- `Inter`
  - Used as the default page font and body copy.
  - CSS reference in the file: `font-family:Inter,system-ui,sans-serif;`

- `Syne`
  - Used for headings, logo typography, balance display, and prominent UI labels.
  - CSS reference in the file: `font-family:Syne,sans-serif;`

- `JetBrains Mono`
  - Used for ticker text, system labels, buttons, metadata, and small UI text.
  - CSS reference in the file: `font-family:JetBrains Mono,monospace;`

### Actual font import

```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

## Color Palette

### Root CSS variables used in the project

- `--bg`: `#050A14`
- `--bg-2`: `#070F1F`
- `--ink`: `#E8F0F8`
- `--ink-dim`: `#8FA0B6`
- `--ink-faint`: `#3A4A60`
- `--teal`: `#00E5C0`
- `--teal-soft`: `rgba(0,229,192,.18)`
- `--gold`: `#FFB830`
- `--gold-soft`: `rgba(255,184,48,.22)`
- `--line`: `rgba(143,160,182,.12)`
- `--line-2`: `rgba(143,160,182,.22)`

### Key UI usage

- Backgrounds:
  - main page and hero: `#050A14`
  - secondary dark surface: `#070F1F`
- Text and copy:
  - primary text: `#E8F0F8`
  - secondary text: `#8FA0B6`
  - muted text: `#3A4A60`
- Accent and brand highlights:
  - primary accent: `#00E5C0`
  - gold accent: `#FFB830`
- Borders and dividers:
  - subtle line: `rgba(143,160,182,.12)`
  - stronger line: `rgba(143,160,182,.22)`

### Other colors explicitly used in this project

These colors appear directly in the HTML/CSS or SVG assets and are part of the current visual system:

- `#FFFFFF`
- `#001016`
- `#0F1726`
- `#070E1C`
- `#0A1426`
- `#0A0F1A`
- `rgba(255,255,255,.06)`
- `rgba(255,255,255,.08)`
- `rgba(255,255,255,.03)`
- `rgba(255,255,255,.02)`
- `rgba(255,255,255,.04)`
- `rgba(0,229,192,.05)`
- `rgba(0,229,192,.06)`
- `rgba(0,229,192,.08)`
- `rgba(0,229,192,.12)`
- `rgba(0,229,192,.15)`
- `rgba(140,80,255,.10)`
- `rgba(140,80,255,.28)`
- `rgba(255,184,48,.06)`
- `rgba(255,184,48,.15)`
- `rgba(255,184,48,.25)`
- `rgba(255,184,48,.45)`
- `rgba(255,184,48,.5)`
- `#8C50FF`
- `#627EEA`
- `#3C4FBF`
- `#2775CA`
- `#1B5C9E`
- `#F7931A`
- `#D67700`
- `#FF6B35`
- `#FF6B6B`
- `#A0AAFF`
- `#C080FF`
- `#FFEAB0`
- `#B57400`
- `#FFD880`
- `#2030A0`
- `#D0A0FF`
- `#9945FF`
- `#14F195`
- `#9C5F00`
- `#FFEFC0`
- `#5B6BFF`
- `#C7B0FF`
- `#1A2952`
- `#0E2E3C`
- `#072028`
- `#3FA8E0`
- `#B89CFF`
- `#050A14` (reused from `--bg`)

### SVG / illustration-specific colors

The project also uses the following colors inside inline SVG gradients and paths:

- `#1A2952`
- `#0A1226`
- `#0E2E3C`
- `#072028`
- `#00E5C0`
- `#3FA8E0`
- `#FFEAB0`
- `#FFB830`
- `#B57400`
- `#FFD880`
- `#F7931A`
- `#2030A0`
- `#C0CCFF`
- `#627EEA`
- `#B89CFF`
- `#D0A0FF`
- `#9945FF`
- `#14F195`
- `#9C5F00`
- `#FFEFC0`
- `#5B6BFF`
- `#8C50FF`
- `#00C7A0`

