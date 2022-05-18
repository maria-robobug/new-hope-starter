# Redocly API developer portal

## Prerequisites

- [node.js >= 12.22.6](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/)

1. You should have [new hope](https://github.com/Redocly/new-hope) installation next to `new-hope-starter`.

```
├── ...
├── new-hope
├── new-hope-starter
└── ...
```

2. From the `new-hope` folder run `npm run compile`
3. From the `new-hope-starter` folder run `yarn install`
4. Then you can run `new-hope-starter` in development or build mode

## Install

```
yarn install
```

## Start development server

```
yarn start
```

## Build portal

```
yarn build
```

### Eject (theme component or entire theme)

Ejecting means copying a theme component (or all of its components) to the `@theme` directory in the specified content folder (`-d` option).
This way users can override default theme or its separate components like (Navbar, Footer, MenuItem) by modifying content of ejected file.

#### Ejecting components

```
yarn eject-component [<PATH_TO_COMPONENT>] -- [-f] -d <CONTENT_DIR> [--theme <CUSTOM_THEME_NAME>]
```

`<PATH_TO_COMPONENT>` - is the path relative to default theme or glob filter. For glob matching, `picomatch` is used, so only globbing understood by it is supported.

If component path you're using in `import` is `@theme/Footer/Footer` then `<PATH_TO_COMPONENT>` is `Footer/Footer`.
If `<PATH_TO_COMPONENT>` is not passed then you'll be asked to select from list components to eject.

**Example:**

```
# Ejecting component from default theme

> yarn eject-component Navbar/Navbar

[info] 📦 Component Navbar/Navbar.tsx has been ejected into .../@theme/Navbar/Navbar.tsx 1ms
```

```
# Ejecting component from custom theme

> yarn eject-component Navbar/Navbar -- --theme @redocly-theme-stylish-navbar

[info] 📦 Component Navbar/Navbar.tsx has been ejected into .../@theme/Navbar/Navbar.tsx 1ms
```

```
# Ejecting several components that start with Footer/Foo

> yarn eject-component 'Footer/Foo*'

? Please select from list components to eject: …  (Use <space> to select, <return> to submit)

✔ Footer/
  ✔ Footer
  ✔ FooterColumn
  ✔ FooterColumns
  ✔ FooterCopyright
```

IMPORTANT: Ensure that you're using single quotes to avoid substitution by your shell.

```
> yarn eject-component '*/Foo*'
```

#### Ejecting entire theme

```
# yarn eject-theme -- [-f] -d <CONTENT_DIR> [--theme <CUSTOM_THEME_NAME>]
```

**Example:**

```
# Ejecting default theme
yarn eject-theme

# Ejecting custom theme
yarn eject-theme -- --theme @redocly-theme-stylish-navbar
```

In case you have already ejected some components, the script will ask you to confirm overwriting every component.

```
✖ File [ Footer/Footer.tsx ] will be overwritten. Are you sure ? (y/N) · false
```

If you want to overwrite every component already ejected, run the command with `--force` or `-f` option:

```
yarn eject-theme -- --force
```