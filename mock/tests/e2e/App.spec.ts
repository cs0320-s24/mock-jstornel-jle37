import { expect, test } from "@playwright/test";

/**
  The general shapes of tests in Playwright Test are:
    1. Navigate to a URL
    2. Interact with the page
    3. Assert something about the page against your expectations
  Look for this pattern in the tests below!
 */

// If you needed to do something before every test case...
test.beforeEach(async ({ page }) => {
  // ... you'd put it here.
  await page.goto("http://localhost:8000/");
});

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle("Mock");
});
/**
 * Don't worry about the "async" yet. We'll cover it in more detail
 * for the next sprint. For now, just think about "await" as something
 * you put before parts of your test that might take time to run,
 * like any interaction with the page.
 */
test("on page load, i see a login button", async ({ page }) => {
  // Notice: http, not https! Our front-end is not set up for HTTPs.
  await expect(page.getByLabel("Login")).toBeVisible();
});

test("on page load, i dont see the input box until login", async ({ page }) => {
  // Notice: http, not https! Our front-end is not set up for HTTPs.
  await expect(page.getByLabel("Sign Out")).not.toBeVisible();
  await expect(page.getByLabel("Command input")).not.toBeVisible();

  // click the login button
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  await expect(page.getByLabel("Command input")).toBeVisible();
});

test("after I type into the input box, its text changes", async ({ page }) => {
  // Step 1: Navigate to a URL
  await page.getByLabel("Login").click();

  // Step 2: Interact with the page
  // Locate the element you are looking for
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("Awesome command");

  // Step 3: Assert something about the page
  // Assertions are done by using the expect() function
  const mock_input = `Awesome command`;
  await expect(page.getByLabel("Command input")).toHaveValue(mock_input);
});

test("on page load, i see a button", async ({ page }) => {
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Submit")).toBeVisible();
});

test("after I click the button, its label increments", async ({ page }) => {
  await page.getByLabel("Login").click();
  await page.getByLabel("Submit").click();
  await expect(page.getByLabel("Submit")).toHaveText("Submitted 1 time");
});

test("after I click the button, my command gets pushed", async ({ page }) => {
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("command");
  await page.getByLabel("Submit").click();
  await expect(page.getByText("command")).toBeVisible();
});

test("after I load a valid csv, I get a success message", async ({ page }) => {
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load data/exampleHouses.csv");
  await page.getByLabel("Submit").click();
  await expect(page.getByText("successfully loaded data/exampleHouses.csv"))
    .toBeVisible;

  await page
    .getByLabel("Command input")
    .fill("load data/exampleNeighborhoods.csv");
  await page.getByLabel("Submit").click();
  await expect(
    page.getByText("successfully loaded data/exampleNeighborhoods.csv")
  ).toBeVisible;

  await page.getByLabel("Command input").fill("load data/malformedCSV.csv");
  await page.getByLabel("Submit").click();
  await expect(page.getByText("successfully loaded data/malformedCSV.csv"))
    .toBeVisible;

  await page.getByLabel("Command input").fill("load data/oneColumn.csv");
  await page.getByLabel("Submit").click();
  await expect(page.getByText("successfully loaded data/oneColumn.csv"))
    .toBeVisible;

  await page.getByLabel("Command input").fill("load data/emptyCSV.csv");
  await page.getByLabel("Submit").click();
  await expect(page.getByText("successfully loaded data/emptyCSV.csv"))
    .toBeVisible;
});

test("after I load an invalid csv, I get a failure message", async ({
  page,
}) => {
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load data");
  await expect(page.getByText("invalid filepath - load fail"));
});

// test("after I load a valid csv, I can view it", async);
