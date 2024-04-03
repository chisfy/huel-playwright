import { test, expect, chromium } from "@playwright/test";

//basic skeleton test
test("empty skeleton test for setup", function () {});

//Please note user flow, I was unable to use the basket/cart page to verify items in the my cart until I had clicked continue on the bottom and used that interface, this was checked on desktop and mobile (us and uk website). Basing user flow and playwright test on this experience.

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

// No product found
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
//use playwright click interaction to click on locator of link button
//product page
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

//basket check
//create a locator for interactive summary bar
//assert that it is visible on the page
//create a locator for image through alt text
//assert locator is visible
//upon successful location and assertion that should mean product is in the basket
//repeat image step for second product
//create a locator for continue button
//assert this is visible on the page
//use playwright interaction click to use button
//repeat action
//create a locator for continue to basket button
//assert this is visible
//assert the button has the value of "Conitnue to Basket"
//possible to assert colour
//this ensures user can see this button and choosing the right button to use
//use playwright interaction click to use button
//assert page url to be "https://uk.huel.com/cart"
//create a locator for page title
//assert the value is "Your Basket" and visible on the page
//create a locator for item count
//assert the item is count is visible and to the value fo "2"
//this means the user is currenly on the basket page with the correct amount of items selected in the basket
//to verify items selected are indeed in the basket
//locate the basket listS
//assert it has the correct one is chosen by checking class is "CartMixAndMatchBundle__items"
//locate the list items
//assert the value of list items to match name of product
//e.g. Cinnamon Swirl

test("Huel user flow, first time user adding two items to their basket", async function ({
  page
}) {
  // //launching browser
  // const browser = await playwright.chromium.launch({ headless: true });
  // const context = await browser.newContext();
  // const page = await context.newPage();
  //navigate to the URL
  await page.goto("https://uk.huel.com/");
  //assert site is correct
  await expect(page).toHaveURL("https://uk.huel.com");
  //search bar
  //create a locator for the search button
  //using testid for identifying element
  const searchButton = page.getByTestId("IconLink-Search");
  //use the locator for the search to assert that it is visible
  await expect(searchButton).toBeVisible();
  //use playwright interaction click - action
  await searchButton.click();
  //locate search bar area
  //multiple items with id, so selecting first one as that is the div that holds all of it
  const searchBar = page.getByTestId("Search").first();
  //assert - check that search bar space has appeared and is visible
  page.waitForURL();
  await expect(searchBar).toBeVisible();

  //input and search
  //create a locator for the search bar input
  const searchBarInput = page.getByTestId("SearchBar__input");
  //assert this is empty and nothing is filled in already
  await expect(searchBarInput).toBeEmpty();
  //fill in input with value of "Complete Protein Powder"
  const proteinPowder = "Complete Protein Powder";
  await searchBarInput.fill(proteinPowder);
  //assert that the input's value is now "Complete Protein Powder"
  await expect(searchBarInput).toHaveValue(proteinPowder);
  //action the search by pressing enter on keyboard or click on search button
  await page.keyboard.press("Enter");
  //   //to complete action by action clicking search button
  //   //locate search button icon
  //   const searchbarSubmitBtn = page.getByLabel("SearchBar__submit-button");
  //   //assertion to check locator is present on the page - hidden due to search icon being wrapped in a huel icon svg
  //   await expect(searchbarSubmitBtn).toBeHidden();
  //   //action to click on button
  //   //use playwright click interaction to submit .click();
  //   searchbarSubmitBtn.click();
  //asserting the page has changed after pressing Enter to submit search
  await expect(page).toHaveURL(/Powder/);

  //search
  //locating product list following search
  const productCardList = page.locator("ul").nth(3);
  //asserting product card list is present on page and correctly identified
  await expect(productCardList).toBeVisible();
  await expect(productCardList).toHaveClass("columns is-multiline");
  //locate the product card with role of "listitem", filtered to find specific one
  //creating variable so it can be re-used
  let productName = "Huel Powder";
  const powderProductCard = page
    .getByRole("listitem")
    .filter({
      has: page.getByRole("link", { name: productName, exact: true }),
    });
  //assert product card is on page and correctly identified
  await expect(powderProductCard).toBeVisible();
  //assert product card is the item we want by checking value in it's title
  await expect(powderProductCard).toContainText(productName);
  //this ensures the correct result is displayed
  //create a locator for link button
  const productCardLink = page.getByRole("link", { name: "Shop Powder" });
  //asserting correct selection of link by checking it matches class
  await expect(productCardLink).toHaveClass("button");
  //assert value of button is "Shop Powder"
  await expect(productCardLink).toHaveText("Shop Powder");
  //assert that is visible on the page
  await expect(productCardLink).toBeVisible();
  //this ensures the correct product was shown in the results
  //user action to click on link to take to product page
  await productCardLink.click();

  //product page
  //assert url page has changed since clicking on link - checking it contains products
  await expect(page).not.toHaveURL(/Powder/);
  await expect(page).toHaveURL(/products/);

  //selecting item
  // //seems to need this step otherwise other steps in selecting item fail
  await page.waitForURL();
  //create a locator for product title
  const powderPageTitle = page.getByRole("heading", {
    name: "Huel Powder",
    exact: true,
  });
  //assert that it's title is value of "Huel Powder" and is visible
  //this ensures correct product was clicked on
  await expect(powderPageTitle).toBeVisible();
  //create a locator for the cinnamon swirl increase button
  const addBtnCinSwrl = page.getByRole("button", {
    name: "Cinnamon Swirl Increase",
  });
  //assert that it is visible
  //this ensures flavour is there on product page and actionable
  await expect(addBtnCinSwrl).toBeVisible();
  //use playwright click interaction to click button
  await addBtnCinSwrl.click();
  //create a locator for quantity input
  const cinSwrlQuantity = page.getByRole("spinbutton", {
    name: "Cinnamon Swirl Quantity",
  });
  //assert this is visible
  await expect(cinSwrlQuantity).toBeVisible();
  //assert the value is equal to "1"
  await expect(cinSwrlQuantity).toHaveValue("1");
  //assert this button has changed to white background
  //this ensures button has been clicked on
  await expect(addBtnCinSwrl).toHaveCSS(
    "background-color",
    "rgb(244, 244, 246)"
  );

  //repeating steps for item 2
  //reusing search button located for first item
  await expect(searchButton).toBeVisible();
  //use playwright interaction click - action
  await searchButton.click();
  //reusing searchbar and searchbar input already located
  //assert - check that search bar space has appeared and is visible on this page
  //this ensures search button icon has been clicked and a dropdown search bar appears
  await expect(searchBar).toBeVisible();
  //assert this is empty and nothing is filled in already
  await expect(searchBarInput).toBeEmpty();
  //fill in input with value of "Protein Bar" - non existent product
  const nutritionBar = "Nutrition Bar";
  await searchBarInput.fill(nutritionBar);
  //assert that the input's value is now "Protein Bar" and correctly typed
  await expect(searchBarInput).toHaveValue(nutritionBar);
  //action the search by pressing enter on keyboard or click on search button
  //alternative way to using keyboard action
  await searchBarInput.press("Enter"); // Press Enter key
  // Asserting the page has "Nutrition" in the URL to show that the page has indeed changed and correctly searched the term used in input
  //alternative way for asserting this
  await expect(page.url()).toContain("Nutrition");

  //search for item 2
  //reusing product list locator following search
  //asserting product card list is present on page and correctly identified
  await expect(productCardList).toBeVisible();
  await expect(productCardList).toHaveClass("columns is-multiline");
  //locate the product card with role of "listitem", filtered to find specific one
  //chanigng variable so it can be re-used
  productName = "Huel Complete Nutrition Bar";
  const nutribarProductCard = page
    .getByRole("listitem")
    .filter({
      has: page.getByRole("link", { name: productName, exact: true }),
    });
  //assert product card is on page and correctly identified
  await expect(nutribarProductCard).toBeVisible();
  //assert product card is the item we want by checking value in it's title
  await expect(nutribarProductCard).toContainText(productName);
  //this ensures the correct result is displayed
  //create a locator for link button
  const nutriBarCardLink = page.getByRole("link", { name: "Shop Complete Nutrition Bar" });
  //asserting correct selection of link by checking it matches class
  await expect(nutriBarCardLink).toHaveClass("button");
  //assert value of button is "Shop Powder"
  await expect(nutriBarCardLink).toHaveText("Shop Complete Nutrition Bar");
  //assert that is visible on the page
  await expect(nutriBarCardLink).toBeVisible();
  //this ensures the correct product was shown in the results
  //user action to click on link to take to product page
  await nutriBarCardLink.scrollIntoViewIfNeeded();
  await nutriBarCardLink.click();
  
  //product page
  //assert url page has changed since clicking on link - checking it contains products
  await page.waitForURL();
  await expect(page).not.toHaveURL(/Nutrition/);
  await expect(page).toHaveURL(/products/);

  //selecting item
  // //seems to need this step otherwise other steps in selecting item fail
  await page.waitForURL();
  //create a locator for product title
  const nutrbarPageTitle = page.getByRole("heading", {
    name: "Huel Complete Nutrition Bar",
    exact: true,
  });
  //assert that it's title is value of "Huel Powder" and is visible
  //this ensures correct product was clicked on
  await expect(nutrbarPageTitle).toBeVisible();
  //create a locator for the cinnamon swirl increase button
  const addBtnPeanCar = page.getByRole('button', { name: 'Peanut Caramel Increase' })
  //assert that it is visible
  //this ensures flavour is there on product page and actionable
  await expect(addBtnPeanCar).toBeVisible();
  //use playwright click interaction to click button
  await addBtnPeanCar.click();
  //create a locator for quantity input
  const peanCarQuantity = page.getByRole('spinbutton', { name: 'Peanut Caramel Quantity' });
  //assert this is visible
  await expect(peanCarQuantity).toBeVisible();
  //assert the value is equal to "1"
  await expect(peanCarQuantity).toHaveValue("1");
  //assert this button has changed to white background
  //this ensures button has been clicked on
  await expect(addBtnPeanCar).toHaveCSS(
    "background-color",
    "rgb(244, 244, 246)"
  );

});

test("Checking that no product found works for non-existing product", async ({page}) => {
  //error checking - no product
  //navigate to the URL
  await page.goto("https://uk.huel.com/");
  //assert site is correct
  await expect(page).toHaveURL("https://uk.huel.com");
  //search bar
  //create a locator for the search button
  //using testid for identifying element
  const searchButton = page.getByTestId("IconLink-Search");
  //use the locator for the search to assert that it is visible
  await expect(searchButton).toBeVisible();
  //use playwright interaction click - action
  await searchButton.click();
  //locate search bar area
  //multiple items with id, so selecting first one as that is the div that holds all of it
  const searchBar = page.getByTestId("Search").first();
  //assert - check that search bar space has appeared and is visible
  await expect(searchBar).toBeVisible();
  //input and search
  //create a locator for the search bar input
  const searchBarInput = page.getByTestId("SearchBar__input");
  //assert this is empty and nothing is filled in already
  await expect(searchBarInput).toBeEmpty();
  //fill in input with value of "Protein Bar" - non existent product
  const proteinBar = "Protein Bar";
  await searchBarInput.fill(proteinBar);
  //assert that the input's value is now "Protein Bar" and correctly typed
  //action the search by pressing enter on keyboard or click on search button
  await page.keyboard.press("Enter");
  //search
  //locating product list following search
  const productCardList = page.locator("ul").nth(3);
  //assert product card is not visible on page
  //this ensures the search correctly identifies no products are returned as a result
  await expect(productCardList).not.toBeVisible();
  //closing page as test ends
  await page.close();
})