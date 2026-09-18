# Restaurant App

A responsive restaurant menu application built using React.

## Features

- Fetches restaurant and menu data from the provided API
- Displays the restaurant name and details
- Displays menu categories dynamically from the API
- Horizontally scrollable menu category tabs
- Displays dishes under the selected category
- Displays dish name, price, description, calories, and image
- Displays `Customizations available` when addons are present
- Displays `Not available` for unavailable dishes
- Allows users to increase and decrease dish quantities
- Updates the cart count based on selected quantities
- Responsive design for mobile and desktop screens
- Reusable React components

## Technologies Used

- React
- JavaScript
- CSS
- REST API

## API

Restaurant menu data is fetched from:

https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details

## Project Structure

src/
├── components/
│   ├── Header/
│   │   ├── index.js
│   │   └── index.css
│   ├── CategoryTabs/
│   │   ├── index.js
│   │   └── index.css
│   ├── MenuCategory/
│   │   ├── index.js
│   │   └── index.css
│   └── MenuItem/
│       ├── index.js
│       └── index.css
├── App.js
├── App.css
└── index.js