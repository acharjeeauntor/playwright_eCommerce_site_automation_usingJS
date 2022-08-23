const { expect } = require("@playwright/test")
const test = require("../../utils/basetest")
const loginData = require("../../testdata/logindata.json")
const orderPageData = require("../../testdata/orderspagedata.json")
const Common = require("../../utils/common")


let common
let token

common = new Common()

test.describe("Test Orders Page", async () => {

    test.beforeAll(async () => {
        token = await common.getLoginToken(loginData.ValidLoginData.Email, loginData.ValidLoginData.Password)
    })

    test.beforeEach(async ({ homePage }) => {
        common.setTokenInLocalStroage(homePage.page, token)
        await homePage.page.goto("https://rahulshettyacademy.com/client")
    })


    test("Unauthorized user accessed related message test", async ({ ordersPage, navBar }) => {

        await navBar.clickOrdersBtn()

        await ordersPage.page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=62b44749e26b7e1a10eea3ec",
            route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=62b48b7ae26b7e1a10eeaae8' })
        )
        await ordersPage.clickViewBtn()
        expect(await ordersPage.getUnAuthOrderText()).toContain(orderPageData.UnAuthText)

    })



})