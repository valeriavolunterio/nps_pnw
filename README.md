# e-commerce_app

Link to GitHub page of app:
https://github.com/valeriavolunterio/nps_pnw

DESCRIPTION

This is a partial implementation of an e-commerce app that provides a platform for users to buy and sell items. In it's current state, it includes a Home Screen with a search bar and discounted filter component, a Product Listing Screen, and a Sell Item Screen with a form component. The app depends on AsyncStorage to store product listings, and in the future, user and cart information will also be included.


SCREENS

Home/Listing Screen: Displays a list of products available for purchase. Products can be filtered through the search bar. Each product displays its name, price, and image. There is conditional formatting for discounted items as well.

Product Screen: Displays the details of a selected product, including its name, price, image, and description.
Sell Item Screen: Includes a form component to collect information about the item the user wants to sell, such as name, description, price, and photos. It also has a checkbox to automatically add a 20% discount.


COMPONENTS

Search Bar Component: Allows users to search for products. Returns filtered items as the user types.

Discounted Items Filter Component: Displays a checkbox to filter results to show discounted items.

The Search bar and Discounted Items filter work simultaneously.

Form Component: Used to collect information about the item the user wants to sell and simple validation to enable the add item button.


DEPENDENCIES

AsyncStorage: Used to store the product listings. Will also add user and cart information.


MILESTONES

Milestone 1 - Completed: Implemented Listing Screen with search bar component and discounted items filter component, Product Page Screen with product details, Sell Item Screen with form component, and AsyncStorage to store product listings.

Milestone 2: Log-in and registration screens for users, implementation of a shopping cart feature. Store these items to AsyncStorage.
