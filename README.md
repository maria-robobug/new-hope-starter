# Redocly API developer portal

## Prerequisites

- [node.js >= 12.22.6](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/)

## Install

```
yarn install --registry http://3.236.95.236:8000/
```

## Start development server

```
yarn start
```

## Build portal

```
yarn build
```

## Customizing theme

### Ejecting specific component

```
yarn eject-component <PATH_TO_COMPONENT>

# overriding NavbarItem

yarn eject-component Navbar/Navbar


```

### Ejecting entire theme

```
# Ejects default theme

yarn eject-theme

# Ejects all components from @redocly-stylish-sidebar theme

yarn eject-theme --theme @redocly-stylish-sidebar
```