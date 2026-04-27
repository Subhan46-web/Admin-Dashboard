# Admin Dashboard

A responsive admin dashboard built with HTML, CSS, and JavaScript.

This project includes a sidebar navigation, dashboard cards, recent orders table, right-side updates panel, theme toggle, and a few interactive JavaScript features to make the UI feel more modern without becoming too complex.


## ScreenShots

![Desktop View 1](./asstes/images/Screenshots/Desktop-view%201.png)
![Desktop View 2](./asstes/images/Screenshots/Desktop-view%202.png)
![Mobile View 1](./asstes/images/Screenshots/Mobile-view%201.png)
![Mobile View 2](./asstes/images/Screenshots/Mobile-view%202.png)


## Features

- Responsive sidebar for desktop and mobile
- Theme toggler with dark mode support
- Theme preference saved with `localStorage`
- Sidebar section switching with active state
- Auto-filled current date input
- Interactive recent orders table
- Click-to-select table rows
- Sortable table columns
- Add Product action that inserts a new order row

## Project Structure

```text
Admin Dashboard/
|-- index.html
|-- README.md
`-- asstes/
    |-- css/
    |   `-- style.css
    |-- images/
    `-- js/
        `-- script.js
```

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Material Symbols

## How to Run

1. Open the project folder.
2. Open [index.html](C:/Users/USER/Desktop/Projects/Admin Dashboard/index.html) in your browser.

No build step or installation is required.

## JavaScript Functionality

The main interactivity lives in [script.js](C:/Users/USER/Desktop/Projects/Admin Dashboard/asstes/js/script.js).

It currently handles:

- opening and closing the mobile sidebar
- switching between light and dark theme
- saving theme choice after refresh
- updating the page title from sidebar clicks
- setting today’s date in the date field
- adding a new row from the Add Product button
- selecting rows in the orders table
- sorting table columns

## Styling

The styling is in [style.css](C:/Users/USER/Desktop/Projects/Admin Dashboard/asstes/css/style.css).

It includes:

- dashboard layout
- sidebar styling
- responsive breakpoints
- theme colors
- table and card styles
- small UI polish for the toggler and branding

## Notes

- The asset folder is currently named `asstes`, and the project files already reference it using that name.
- The project is static, so all data is frontend-only for now.
- The Add Product feature adds rows in the browser only and does not save them permanently.

## Future Improvements

- search and filter for orders
- edit and delete actions for rows
- charts with real data
- persistent products/orders storage
- better section content switching

## Author

Created by Subhan.
- GitHub: https://github.com/Subhan46-web
- LinkedIn: linkedin.com/in/subhanraza