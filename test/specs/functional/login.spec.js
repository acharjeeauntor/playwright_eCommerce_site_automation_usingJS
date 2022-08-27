const test = require("../../utils/basetest");
const {expect } = require('@playwright/test');
const loginData = require("../../testdata/logindata.json")

test.describe("Login Feature Test",async()=>{

    test.beforeEach(async({loginPage})=>{
        await loginPage.goToLoginPage("/client")
    })


    test('Verify user can login to the application using valid credential', async ({ loginPage }) => {
       
        await loginPage.enterEmail(loginData.ValidLoginData.Email)
        await loginPage.enterPassword(loginData.ValidLoginData.Password)
        await loginPage.clickLoginBtn()
        await loginPage.page.waitForNavigation()
        expect(await loginPage.getErrorOrSuccessToastMsg()).toContain(loginData.LoginSuccessMessage)
    
    })

    test("Verify input fields placeholder is showing correctly or not", async ({ loginPage }) => {
      
        expect(await loginPage.getEmailPlaceholder()).toBe(loginData.PlaceholderData.Email)
        expect(await loginPage.getPasswordPlaceholder()).toBe(loginData.PlaceholderData.Password)
       

    })
    
    test('Verify empty field validation', async ({ loginPage }) => {
        await loginPage.clickLoginBtn()
        expect(await loginPage.getRequiredFieldErrorMessages()).toStrictEqual(loginData.RequiredFieldsErrorMsg)
    
    })
    
    test('Verify invalid email and confirm password message', async ({ loginPage }) => {
        await loginPage.enterEmail(loginData.InvalidEmail)
        await loginPage.enterPassword(loginData.ValidLoginData.Password)
        await loginPage.clickLoginBtn()
        expect(await loginPage.getRequiredFieldErrorMessages()).toStrictEqual(loginData.InvalidEmailFieldErrorMsg)
    
    
    })
    
    
    for(const data of loginData.InvalidLoginData){
        test(`Verify user can not login to the application using invalid credential as ${data.Email}`, async ({ loginPage }) => {
            await loginPage.enterEmail(data.Email)
            await loginPage.enterPassword(data.Password)
            await loginPage.clickLoginBtn()
            expect(await loginPage.getErrorOrSuccessToastMsg()).not.toContain(loginData.LoginSuccessMessage)
        })
    }

    
})


