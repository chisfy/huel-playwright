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

//plan
//navigate to the URL
//search bar
//create a locator for the search button
//use the locator for the search to assert that it is visible
//use playwright interaction click - action
//locate search bar area
//assert - check that search bar space has appeared and is visible
//input and search
//create a locator for the search bar input
//fill in input with value of "Complete Protein Powder"
//assert that the input's value is now "Complete Protein Powder"
//action the search by pressing enter on keyboard or click on search button
//locate search button icon
//use playwright click interaction to submit 
//search
//locate the product card with role of "listitem"
//assert product card is on page
//assert product card has the input value included in it's title
//this ensures the correct result is displayed
//create a locator for link button
//assert value of button is "Shop Powder"
//assert that is visible
//this ensures the correct product was shown in the results
//product page
//use playwright click interaction to click on locator of link button 
//create a locator for product title
//assert that it's title is value of "Huel Powder" and is visible
//this ensures correct product was clicked on
//selecting item
//create a locator for the cinnamon swirl increase button
//assert that it is visible
//this ensures flavour is there on product page and actionable
//use playwright click interaction to click button
//create a locator for quantity input
//assert this is visible
//assert the value is equal to "1"
//assert this button is no longer visible
//this ensures button has been clicked on
//first half of the plan to be repeated for second item


//error checking - no product
//search bar
//create a locator for the search button
//use the locator for the search to assert that it is visible
//use playwright interaction click - action
//locate search bar area
//assert - check that search bar space has appeared and is visible
//input and search
//create a locator for the search bar input
//fill in input with value of "Complete Protein Powder"
//assert that the input's value is now "Complete Protein Powder"
//action the search by pressing enter on keyboard or click on search button
//locate search button icon
//use playwright click interaction to submit
//search
// use previous locator of the product card with role of "listitem"
//assert product card is not visible on page
//this ensures the incorrect search means no product card is on the page
