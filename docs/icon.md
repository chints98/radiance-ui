# Icon
## Usage

```jsx
import { CameraIcon } from 'radiance-ui/lib/icons';

<CameraIcon width={16} height={16} />
```

<!-- STORY -->

### Proptypes
| prop      | propType           | required | default        | description                       |
|-----------|--------------------|----------|----------------|-----------------------------------|
| width     | number&#124;string | -        | "16"           |                                   |
| height    | number&#124;string | -        | "16"           |                                   |
| rotate    | number             | -        | "0"            | degrees to for clockwise rotation |
| fill      | string             | -        | COLORS.primary |                                   |
| inline    | bool               | -        | false          |                                   |
| className | string             | -        | ""             |                                   |

### Notes
See **Icon Library** for all available icon components and previews.

#### Adding a new SVG
In order to add an SVG to Radiance, you first need to determine what type
of icon you're adding. Currently we have 3 types:
- *Icon* - Any SVG that signifies interactivity (most often clicking).
  Good examples include "logout", "plus sign", etc.
- *Emoji* - Any SVG that has a facial expression. Check out existing
  emojis to get an idea of what those look like.
- *Glyph* - Any SVG that communicates an idea or message, but the user
  might not neccessarily interact with it. Examples include "sun",
"selfie", "pills".

If you don't know which category it belongs to, get a second opinion.

Add the SVG file into `src/svgs/ICON_TYPE/`. A few things to note:
- No need to optimize the SVG since SVGR will optimize the SVG for us.
- At build time, SVGR will convert all SVGs in `src/svgs/` to a React
  Component so consumers of the library will not need to run SVGR on
their projects.
- If you want to use SVGs in a storybook story, you'll want to import
  directly from the `src/svgs/..` folder.

After adding the SVG file, run `yarn run storybook` and confirm the icon
looks correct.

Open a PR.

Profit.

