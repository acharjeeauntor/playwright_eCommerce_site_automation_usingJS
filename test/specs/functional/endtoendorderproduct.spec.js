const test = require("../../utils/basetest")
const{ expect } = require("@playwright/test")
const loginData = require("../../testdata/logindata.json")
const Common= require("../../utils/common")
const endToEndProductData = require("../../testdata/endToendorderproductdata.json")
const myCartData = require("../../testdata/mycartpagedata.json")
const homePageData = require("../../testdata/homepagedata.json")

let token
let common


common = new Common()

test.describe("End to End Product Order test", async () => {
  test.beforeAll(async () => {
    token = await common.getLoginToken(loginData.ValidLoginData.Email, loginData.ValidLoginData.Password)
  })

  test.beforeEach(async ({ homePage }) => {
    common.setTokenInLocalStroage(homePage.page, token)
    await homePage.page.goto("https://rahulshettyacademy.com/client")
  })
  test("Add to cart a product from product details and complete the order", async ({ page,homePage, placeOrderPage, productDetailsPage, navBar, cartPage }) => {
    //home-view-add to cart-cart-single (buy now)-place order-orderConfirm-order-view order-delete order
    await homePage.clickViewBtnofProductItem(endToEndProductData.ProductName)
    await page.waitForTimeout(5000)
    // const [response] = await Promise.all([
    //   await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/user/add-to-cart"),
    //   await productDetailsPage.clickAddToCartBtn()
    // ]);
    // let responseJsonData = await response.json()
    // let responseMsg = await responseJsonData.message
    await productDetailsPage.clickAddToCartBtn()

    expect(await productDetailsPage.getToastMsgLocator()).toHaveText(endToEndProductData.productAddedSuccessMsg)
    expect(await navBar.getCartLabelCount()).toBe("1")
    await navBar.clickCartBtn()
    await cartPage.clickBuyNowBtnOfCartItem(endToEndProductData.ProductName)
    // await placeOrderPage.selectCounty()
    // await placeOrderPage.clickPlaceOderBtn()
    // await placeOrderPage.page.pause()
  })

  test("Add to cart a product from Home page and complete the order", async ({ homePage, productDetailsPage, navBar, cartPage }) => {
    //home-add to cart--cart-single (buy now)-place order-orderConfirm-order-view order-delete order
    const [response] = await Promise.all([
      productDetailsPage.page.waitForResponse("https://rahulshettyacademy.com/api/ecom/user/add-to-cart"),
      await homePage.clickAddToCartOfProduct(endToEndProductData.ProductName)
    ]);

    let responseJsonData = await response.json()
    let responseMsg = await responseJsonData.message
    expect(await productDetailsPage.getToastMsgLocator()).toHaveText(responseMsg)
    expect(await navBar.getCartLabelCount()).toBe("1")
    await navBar.clickCartBtn()
    await cartPage.clickBuyNowBtnOfCartItem(endToEndProductData.ProductName)
    // await placeOrderPage.selectCounty(EndToEndProductData.CountryName)
  })


  test("Delete a single product from my cart page", async ({ homePage, placeOrderPage, productDetailsPage, navBar, cartPage }) => {
    //home-add to cart--cart-single (delete)-continue shopping
    const [response] = await Promise.all([
      productDetailsPage.page.waitForResponse("https://rahulshettyacademy.com/api/ecom/user/add-to-cart"),
      await homePage.clickAddToCartOfProduct(endToEndProductData.ProductName)
    ]);

    let responseJsonData = await response.json()
    let responseMsg = await responseJsonData.message
    expect(await productDetailsPage.getToastMsgLocator()).toHaveText(responseMsg)
    await navBar.clickCartBtn()
    await cartPage.clickDeleteBtnOfCartItem(endToEndProductData.ProductName)
    expect(await cartPage.getNoCartText()).toContain(myCartData.NoCartText)
    await cartPage.clickContinueShoppingBtn()
    await expect(homePage.page).toHaveURL(homePageData.homePageUrl)
  })

  test("Add to cart multiple product from Home page and complete the order", async ({ homePage, productDetailsPage, navBar, cartPage }) => {
    const [response] = await Promise.all([
      productDetailsPage.page.waitForResponse("https://rahulshettyacademy.com/api/ecom/user/add-to-cart"),
      await homePage.clickAddToCartOfProduct(endToEndProductData.ProductName),
      await homePage.clickAddToCartOfProduct(endToEndProductData.ProductName2)
    ]);

    let responseJsonData = await response.json()
    let responseMsg = await responseJsonData.message
    expect(await productDetailsPage.getToastMsgLocator()).toHaveText(responseMsg)

    await Promise.all([
      await navBar.clickCartBtn(),
      expect(await navBar.getCartLabelCount()).toBe("2")
    ])

    let totalPrice = endToEndProductData.ProducPrice + endToEndProductData.Product2Price
    expect(await cartPage.getTotalPriceOfProduct()).toBe(totalPrice)
    await cartPage.clickCheckoutBtn()
    // await placeOrderPage.selectCounty(EndToEndProductData.CountryName)
  })


})