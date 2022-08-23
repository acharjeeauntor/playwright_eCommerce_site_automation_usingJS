const test = require("../../utils/basetest")
const homeData = require("../../testdata/homepagedata.json")
const loginData = require("../../testdata/logindata.json")
const { expect, request } = require("@playwright/test")
const  Common = require("../../utils/common")

let common
let token

common = new Common()

test.describe("Test Home page features", async () => {
    test.beforeAll(async () => {
        token = await common.getLoginToken(loginData.ValidLoginData.Email, loginData.ValidLoginData.Password)
    })

    test.beforeEach(async ({ homePage }) => {
         common.setTokenInLocalStroage(homePage.page, token)
        await homePage.page.goto("https://rahulshettyacademy.com/client")
    })

    test("Verify Filter Search input is working properly or not for valid data", async ({ homePage }) => {
        await homePage.searchProduct(homeData.ValidProductName)
        expect((await homePage.getProductName()).toLowerCase()).toContain(homeData.ValidProductName)
    })

    for (const data of homeData.InvalidProductName) {
        test(`Verify Filter Search input is working properly or not for invalid ${data.Product} data`, async ({ homePage }) => {
            await homePage.searchProduct(data.Product)
            expect(await homePage.getErrorToastMsg()).toBe(homeData.ErrorMessage)
        })
    }


    test("Verify Price Range is working properly or not for valid data", async ({ homePage }) => {
        await homePage.setMinimumAndMaxPriceRange(homeData.ValidPriceRange.Mini, homeData.ValidPriceRange.Max)
        expect(await homePage.getRangeProductName()).toContain(homeData.ValidRangeProductName)

    })

    test("Verify Price Range is working properly or not for invalid data", async ({ homePage }) => {
        await homePage.setMinimumAndMaxPriceRange(homeData.InvalidPriceRange.Mini, homeData.InvalidPriceRange.Max)
        expect(await homePage.getErrorToastMsg()).toBe(homeData.ErrorMessage)
    })



})

