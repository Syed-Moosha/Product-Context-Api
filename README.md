### Summary

This React application implements a shopping cart for products, allowing users to view, add, and manage items. 

Key features include:

- **Product Display**: Each product shows an image, title, description, price, and rating.
- **Quantity Management**: Users can increase or decrease the quantity of items in the cart using buttons.
- **Dynamic Total Calculation**: The total price and quantity are calculated in real-time.
- **Remove Items**: Users can delete items from the cart.
- **Responsive Design**: The layout adjusts for different screen sizes and supports dark mode.

The application utilizes:

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **Flowbite** for UI components.
- **Tailwind CSS** for styling.

The main components include `Cards`, which render the product list, and a context provider to manage the state of the cart data.
