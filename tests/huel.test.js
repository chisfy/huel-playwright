import { test, expect } from "@playwright/test"

//basic skeleton test
test("empty skeleton test for setup", function () {

});

//Please note user flow, I was unable to use the basket/cart page to verify items in the my cart until I had clicked continue on the bottom and used that interface, this was tested on desktop and mobile. Basing user flow and playwright test on this experience.

//user flow
// 1) Navigate to the Huel homepage (https://huel.com/)
// 2) Find search button icon
// 3) Click search button icon to trigger search bar to appear
// 4) Enter a huel (e.g., "Complete Protein Powder") product into the input bar
// 5) See the page has refreshed to a page full of search results
// 6) Click on product card with "shop...."
// 7) See the page has refreshed to a page specific to that product
// 8) Click on the add button of search product
// 9) See that after clicking add button, a quantity is displayed of product
// 10) Repeat steps 2-9 only with a new product and flavour (e.g., search for "Vegan Protein Bars")
// 11) Find continue button on bottom of the page 
// 12) See page has refreshed to a new overlay
// 13) Click continue
// 14) See page has refreshed to a new overlay
// 15) Click continue to basket
// 16) See that page has refreshed to basket page
// 17) Read the quantity total underneath "Your Basket"

// Not product found
// During second search for item, put in input value "non existant product" and verify when page is refreshed there are no product cards
