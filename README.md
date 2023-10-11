![NewsHook React TypeScript News App Preview](./public/newshook-preview.png)

# NewsHook - React TypeScript News App

Responsive news app made with React, React Router and TypeScript. Displays fetched news from Guardian.

App is also deployed on Netlify: https://newshook.netlify.app

## Built with

-   HTML
-   CSS
-   JavaScript / TypeScript
-   React & React Router

## Installation and Setup

This app was created using Vite: https://vitejs.dev

-   Clone repository
-   Install: `npm install`
-   Run: `npm run dev`
-   Open http://localhost:5173 to view the app in the browser

## Description and Usage

-   App is fetching data from Guardian API: https://open-platform.theguardian.com
-   News are divided into sections, when you open a section it will display 30 latest articles from that category
-   You can go to `src/components/Display.tsx` and change `pageSize` property inside the `query` object if you want different number of articles by section.
-   Articles are grouped by dates on the section page
-   When you click on the article link, a full article will be displayed with the article id as the route path
-   Article is saved in local storage and will display again after page reloads

## License

MIT License. See `LICENSE.txt` for more information.
