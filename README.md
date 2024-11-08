# Pluto Theme Mode [![tag - 1.0.0](https://img.shields.io/badge/tag-1.0.0-1271dc?logo=github)](https://www.npmjs.com/package/pluto-theme-mode?activeTab=versions)

pluto-theme-mode is a lightweight and versatile theme provider library for React, designed to make switching between light and dark modes smooth and effortless. Built with TypeScript, styled-components, and Context Hook, it supports multiple styling approaches—including inline class, Tailwind CSS, and styled-components—offering flexible options for theme-based designs. Ideal for developers looking to add dark mode functionality seamlessly, pluto-theme-mode provides a modern, intuitive solution for managing theme states and creating customizable user experiences. 🌃🌇

- **Cross-platform** - Support for:
  - ES6 and above to support ESM
  - ESNext To be ES Module
  - Inline CSS, Tailwind CSS, Styled-Components
  - Chrome, Safari, Firefox, Edge browsers
- **Typescript** - Types now included

![style: styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![style: Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## Quickstart

**1. Install**

```shell
npm install pluto-theme-mode
```

**2. Add Provider**

```javascript
import { PlutoProvider } from 'pluto-theme-mode'; // import the provider

// wrap the App with provider
<PlutoProvider>
  <App />
</PlutoProvider>
```

You can also add props to the provider, including props to set the `meta` tag for `theme-color`. Here is an example of how to use it: ☀️🌙

```javascript
<PlutoProvider dark='#000' light='#FFF'>
  <App />
</PlutoProvider>
```

You can also add props to the provider, including props to set the `meta` tag for `theme-color`, with values specified in either HEX or RGB format, as shown in the example abov. 🖌️

**3. Add Toggle**

```javascript
import { ToggleButton } from 'pluto-theme-mode'; // import ToggleButton

// call the ToggleButton as appropriate
<ToggleButton />
```

<div align="start">
  <a href="https://github.com/ChakkritGit/pluto-theme-mode/blob/main/.github/workflows/toggle.png">
    <img alt="styled-components" src="https://raw.githubusercontent.com/ChakkritGit/pluto-theme-mode/refs/heads/main/.github/workflows/toggle.png" height="150px" />
  </a>
</div>

📄 Additionally, you can also call props, and the details will be explained below.

| Props                    | Details                                       | Values                                            | Type                  |
| ------------------------ | --------------------------------------------- | ------------------------------------------------- | --------------------- |
| **lightModeLabel**       | Label for light mode.                         | `Light` , `Specified`                             | `string`, `undefined` |
| **darkModeLabel**        | Label for dark mode.                          | `Dark`   , `Specified`                            | `string`, `undefined` |
| **systemModeLabel**      | Label for system mode.                        | `System`     , `Specified`                        | `string`, `undefined` |
| **lightModeIcon**        | Icon for light mode. Can be an SVG or image.  | `SVG`, `<img />`                                  | `ReactNode`           |
| **darkModeIcon**         | Icon for dark mode. Can be an SVG or image.   | `SVG`, `<img />`                                  | `ReactNode`           |
| **systemModeIcon**       | Icon for system mode. Can be an SVG or image. | `SVG`, `<img />`                                  | `ReactNode`           |
| **backgroundColorDark**  | Background color for dark mode.               | `#000`, `rgb(0,0,0)`, `black`                     | `string`, `undefined` |
| **backgroundColorLight** | Background color for light mode.              | `#FFF`, `rgb(255,255,255)`, `white`               | `string`, `undefined` |
| **colorDark**            | Text color for dark mode.                     | `#000`, `rgb(0,0,0)` , `black`                    | `string`, `undefined` |
| **colorLight**           | Text color for light mode.                    | `#FFF`, `rgb(255,255,255)`, `white`               | `string`, `undefined` |
| **borderColorDark**      | Border color for dark mode.                   | `#222`, `rgb(34,34,34)`, `grey`                   | `string`, `undefined` |
| **borderColorLight**     | Border color for light mode.                  | `#222`, `rgb(34,34,34)`, `grey`                   | `string`, `undefined` |
| **activeColor**          | Color for active state.                       | `#6495ED`, `rgb(100, 149, 237)`, `cornflowerblue` | `string`, `undefined` |
| **cardBorderRadius**     | Border radius for the card.                   | `24px`, `1.5rem`                                  | `string`, `undefined` |
| **menuBorderRadius**     | Border radius for the menu.                   | `16px`, `1rem`                                    | `string`, `undefined` |
| **fontSize**             | Font size for the text.                       | `16px`, `1.0000em`                                | `string`, `undefined` |
| **iconSize**             | Font size for icons.                          | `24px`, `1.5em`                                   | `string`, `undefined` |
| **height**               | Height of the button or menu.                 | `155px`, `max-content`                            | `string`, `undefined` |
| **width**                | Width of the button or menu.                  | `180px`, `max-content`                            | `string`, `undefined` |
| **padding**              | Padding inside the button/menu.               | `11.2px`, `0.7rem`                                | `string`, `undefined` |
| **gap**                  | Gap between elements inside the menu.         | `8px`, `0.5rem`                                   | `string`, `undefined` |
| **positionX**            | Horizontal position of the button/menu.       | `20px`                                            | `string`, `undefined` |
| **positionY**            | Vertical position of the button/menu.         | `40px`                                            | `string`, `undefined` |
| **zIndex**               | Z-index for stacking order.                   | `1`, `100`, `Specified`                           | `number`, `undefined` |

🎨 You can decorate it as desired.

**4. Usage**

```javascript
import { useTheme } from 'pluto-theme-mode'; // import useTheme

const { theme } = useTheme() // destructure theme from useTheme hook
```

**Inline Style CSS**

```javascript

javascript
Copy code
// This code renders a <div> and a <span> element, applying dynamic styling based on the current theme mode (either 'dark' or 'light').
// In the first <div> and <span> block, the background and text colors are set directly using color codes.
// In the second <div> and <span> block, the classes 'backgroundDark', 'backgroundLight', 'colorLight', and 'colorDark' are used 
// instead, allowing for centralized styling through CSS classes.
// When the theme mode is 'dark':
// - The first <div> has a background of '#333' (dark gray) and the text color of the <span> is '#fff' (white).
// - The second <div> and <span> apply 'backgroundDark' and 'colorLight' classes, using styles defined in CSS.
// When the theme mode is 'light':
// - The first <div> has a background of '#fff' (white) and the text color of the <span> is '#333' (dark gray).
// - The second <div> and <span> apply 'backgroundLight' and 'colorDark' classes.

<div style={{ backgroundColor: theme.mode === 'dark' ? '#333' : '#fff' }}>
  <span style={{ color: theme.mode === 'dark' ? '#fff' : '#333' }}>Inline CSS</span>
</div>

<div className={theme.mode === 'dark' ? 'backgroundDark' : 'backgroundLight'}>
  <span className={theme.mode === 'dark' ? 'colorLight' : 'colorDark'}>Inline CSS</span>
</div>
```

**Tailwind CSS**

```javascript
// This code applies dynamic styling to a <div> and a <span> element based on the current theme mode (dark or light) using TailwindCSS classes.

// If the theme mode is 'dark', the background of the <div> will be 'bg-gray-800' (dark gray) and the text color of the <span> will be 'text-white' (white).
// If the theme mode is 'light', the background of the <div> will be 'bg-white' (white) and the text color of the <span> will be 'text-gray-800' (dark gray).

<div className={`${theme.mode === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
  <span className={`${theme.mode === 'dark' ? 'text-white' : 'text-gray-800'}`}>Tailwind CSS</span>
</div>
```

**Styled Components**

```javascript
import styled from 'styled-components';

// Styled components for <div> and <span>
const StyledDiv = styled.div`
  background-color: ${(props) => (props.theme.mode === 'dark' ? '#333' : '#fff')};
`;

const StyledSpan = styled.span`
  color: ${(props) => (props.theme.mode === 'dark' ? '#fff' : '#333')};
`;

// call the StyledDiv and StyledSpan
<StyledDiv>
  <StyledSpan>Styled components</StyledSpan>
</StyledDiv>
```

**Example image**

- **Toggle**
  - Light
  - Dark
  - System

<div align="center">
  <a href="https://github.com/ChakkritGit/pluto-theme-mode/blob/main/.github/workflows/g1.gif">
    <img alt="styled-components" src="https://raw.githubusercontent.com/ChakkritGit/pluto-theme-mode/refs/heads/main/.github/workflows/g1.gif"  />
  </a>
</div>

<div align="center">
  <a href="https://github.com/ChakkritGit/pluto-theme-mode/blob/main/.github/workflows/g2.gif">
    <img alt="styled-components" src="https://raw.githubusercontent.com/ChakkritGit/pluto-theme-mode/refs/heads/main/.github/workflows/g2.gif"  />
  </a>
</div>

## License

Licensed under the MIT License, Copyright © 2024-present Chakkrit Laolit.

See [LICENSE](./LICENSE.md) for more information.
