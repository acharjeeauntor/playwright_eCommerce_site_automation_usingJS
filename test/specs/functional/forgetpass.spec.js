const test= require("../../utils/basetest")
const { expect } = require("@playwright/test") 
const forgetPassData = require("../../testdata/forgetpassdata.json")
const loginData = require("../../testdata/logindata.json")
const editJsonFile = require("edit-json-file");


let file = editJsonFile(`testData/logindata.json`);

test.describe("Test Forget Password feature", async () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage("/client")
        await loginPage.clickForgetPassLink()
    })

    test("Verify input fields placeholder is showing correctly or not", async ({ forgetPassPage }) => {

        expect(await forgetPassPage.getEmailPlaceholder()).toBe(forgetPassData.PlaceholderData.Email)
        expect(await forgetPassPage.getPasswordPlaceholder()).toBe(forgetPassData.PlaceholderData.Password)
        expect(await forgetPassPage.getConfirmPasswordPlaceholder()).toBe(forgetPassData.PlaceholderData.ConfirmPassword)


    })

    test("Verify new password is set successfully or not", async ({ forgetPassPage }) => {
        let randomPass = `Aa@${Math.floor(Math.random() * 90000) + 10000}`
        let email= loginData.ValidLoginData.Email

        await forgetPassPage.enterEmail(email)
        await forgetPassPage.enterPassword(randomPass)
        await forgetPassPage.enterConfirmPassword(randomPass)
        await forgetPassPage.clickSaveNewPassBtn()
        expect(await forgetPassPage.getErrorOrSuccessToastMsg()).toContain(forgetPassData.PassChangedSuccessMessage)
        file.set("ValidLoginData", {
            "Email":email,
            "Password":randomPass
        });
        file.save();

    })

    test("Verify required fields validation", async ({ forgetPassPage }) => {
        await forgetPassPage.clickSaveNewPassBtn()
        expect(await forgetPassPage.getRequiredFieldErrorMessages()).toStrictEqual(forgetPassData.RequiredFieldsErrorMsg)
    })


    test("Verify invalid email and Confirm password field validation in forget password page", async ({ forgetPassPage }) => {
        await forgetPassPage.enterEmail(forgetPassData.InvalidData.Email)
        await forgetPassPage.enterPassword(forgetPassData.InvalidData.Password)
        await forgetPassPage.enterConfirmPassword(forgetPassData.InvalidData.ConfirmPassword)
        await forgetPassPage.clickSaveNewPassBtn()
        expect(await forgetPassPage.getRequiredFieldErrorMessages()).toStrictEqual(forgetPassData.InvalidEmailPasswordErrorMsg)
    })



    for(const data of forgetPassData.InvalidPassData)

    test(`Verify ${data.Pass} can not be set after saving password from forget password page`, async ({forgetPassPage}) => {
        await forgetPassPage.enterEmail(data.Email)
        await forgetPassPage.enterPassword(data.Pass)
        await forgetPassPage.enterConfirmPassword(data.ConfirmPass)
        await forgetPassPage.clickSaveNewPassBtn()


// Those block of code are unnecessary as there are a issue , so we need to add those code


        file.set("ValidLoginData", {
            "Email":data.Email,
            "Password":data.Pass
        });
        file.save();


//

        expect((await forgetPassPage.getErrorOrSuccessToastMsg()).trim()).not.toContain(forgetPassData.PassChangedSuccessMessage)

    })
})