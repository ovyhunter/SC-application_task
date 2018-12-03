# SOLUTION

## Features
- preview store items
- add items to shopping cart
- manage shopping cart 


## How does it work

A mock database has been done in the a JSON file. For the store page, the items are being fetched from the JSON file and displayed on the page. Every "Add to cart" button has a click handler, which takes care of adding the item to cart. On every cart interaction, it is synced with `localStorage` for persistance. 
The cart page displays the items and buttons for managing quantity or removing the item from cart, and also calculates the total price with an additional tax. 
