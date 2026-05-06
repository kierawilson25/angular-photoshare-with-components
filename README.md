# Photo Share

An Angular application that displays a photo gallery with color palette information for each image. Each photo shows the dominant colors extracted from that image as clickable color swatches. Clicking a swatch logs the selected color name to the page.

## Features

- Displays three photos (British Museum, Emirates Stadium, Albert Hall) with captions and location info
- Each photo has an associated color palette rendered via the `ColorsComponent`
- Color swatches are dynamically styled using the hex value and luminance (light colors get black text, dark colors get white text)
- Clicking a color swatch emits an event up to the parent and displays the last clicked color name

## Project Structure

```
src/
  app/
    app.component.ts        # Root component — holds photo/color data and click handler
    app.component.html      # Main template with photo gallery layout
    colors/
      colors.component.ts   # Reusable color swatch component (@Input color, @Output colorClicked)
      colors.component.html # Renders a single styled color span
public/
  5855729828.jpg            # British Museum
  5855735700.jpg            # Emirates Stadium
  5855174537.jpg            # Albert Hall
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Angular CLI](https://angular.dev/tools/cli) v19

Install the CLI globally if you don't have it:

```bash
npm install -g @angular/cli
```

## Setup

Install dependencies:

```bash
npm install
```

## Running the App

```bash
npm start
```

Then open your browser to `http://localhost:4200/`. The app will hot-reload on any source file changes.

## Building for Production

```bash
npm run build
```

Output is placed in the `dist/` directory.

## Running Tests

```bash
npm test
```
