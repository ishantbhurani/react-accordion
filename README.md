# Accordion with ReactJS

Inspired by [Netflix's FAQ section](https://www.netflix.com/in/)

## Table of contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Links](#links)
  - [Features](#features)
- [Run Locally](#run-locally)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Credits](#credits)

## Overview

### Screenshots

<kbd>![desktop-preview](https://user-images.githubusercontent.com/67356291/151388485-deff7e58-ad7a-4b2e-ad9d-67ea41bc92b3.png)</kbd>

<kbd>![tablet-preview](https://user-images.githubusercontent.com/67356291/151388502-8628276f-26ef-4fec-b924-a9ec64fac371.png)</kbd>

<kbd>![mobile-preview](https://user-images.githubusercontent.com/67356291/151388512-f465487c-3a4c-4fb4-8986-1a6afab2052c.png)
</kbd>

### Links

- Live Site URL: [https://react-accordion-ishant.netlify.app/](https://react-accordion-ishant.netlify.app/)

### Features

- Animation on expansion
- Icon rotate on expansion
- Dynamic height for expanded cards

## Run Locally

Clone the project

```bash
git clone git@github.com:ishantbhurani/react-accordion.git
```

Go to the project directory

```bash
  cd react-accordion
```

Run

```bash
  npm start
```

## My process

### Built with

- ReactJS
- JSX
- CSS

### What I learned

- Fetching element properties (such as height) dynamically using `useRef` hook
- Smooth animation for card expansion

```js
useEffect(() => {
  if (expandedID === id) {
    const height = contentRef.current.getBoundingClientRect().height;
    containerRef.current.style.height = `${height + 10}px`;
  } else {
    containerRef.current.style.height = 0;
  }
}, [expandedID]);
```

### Useful resources

- [John Smilga](https://www.johnsmilga.com/) - dynamic height with `useRef` hook

## Author

- Twitter - [@IShaunt](https://twitter.com/IShaunt)

## Credits

- Design inspiration: [Netflix](https://www.netflix.com/in/)
