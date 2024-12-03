# K7RMZ QSL Card Generator

This project was bootstrapped with `bun create vite {project}` and uses React + TypeScript + Vite!

## Usage

This application will print a single QSL card using a stock photo (credit: Nojronatron, November 2024).

1. Find some blank 4x6 inch postcard stock and load your printer.
1. Open the published website and fill out the forms as necessary. None are required but most are usually necessary.
1. Click 'View print preview' button to see a print-formatted version of the front and back of the QSL card.
1. Right-click and select 'Print' to open the Print Dialog.
1. Select the printer, all pages, Landscape layout, paper size of 4x6 inches (or 10x15 cm), print on both sides, flip on _short edge_, and print 'background graphics'.

## Current Features

- Maintain state.
- Set default background image sized for one entire side of the QSL Card.
- Enable updating data via input forms.
- Create a print preview screen.

## Known Issues

- Form fields will go blank after clicking 'View print preview', but the data will remain on both sides of the postcard.
- You cannot change the background photo.
- Mail-merge type printing is not available.
- Some fields might overflow when printed.

## Project Goals

Initial version:

- [x] Learn about Bun.
- [x] Learn _introductory_ TypeScript concepts and syntax.
- [x] Learn what the `src/assets` directory is for (css, images, other static files).
- [x] Develop a useful webapp that generates a Ham QSL Card.
- [x] Practice developing with React.
- [x] Make the QSL Card printable to a 4 x 6 inch postcard.

Future versions might include new and/or updated features.

## About Bun React Typescript Vite

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
