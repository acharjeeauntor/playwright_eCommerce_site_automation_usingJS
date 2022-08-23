const {expect} = require('@playwright/test');
 const test= require("../../utils/basetest")
 const registerData = require("../../testdata/RegisterData.json")

 
test.describe("Test Register feature", async () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage("/client")
        await loginPage.clickRegisterBtn()
    })

    test("Verify a user can register to the application using valid input", async ({registerPage}) => {
        await registerPage.enterFirstName(registerData.ValidData.FirstName)
        await registerPage.enterLastName(registerData.ValidData.LastName)
        await registerPage.enterEmail(`${Math.random().toString(36).slice(2, 7)}@gmail.com`)
        await registerPage.enterPhoneNumber(registerData.ValidData.PhoneNumber)
        await registerPage.SelectOccupation(registerData.ValidData.Occupation)
        await registerPage.selectGender(registerData.ValidData.Gender)
        await registerPage.enterPassword(registerData.ValidData.Password)
        await registerPage.enterConfirmPassword(registerData.ValidData.ConfirmPassword)
        await registerPage.checkRequiredCheckbox()
        await registerPage.clickRegisterConfirmBtn()
        expect(await registerPage.getErrorOrSuccessToastMsg()).toContain(registerData.RegisterSuccessMessage)
    })

    test("Verify input fields placeholder is showing correctly or not", async ({ registerPage }) => {
        expect(await registerPage.getFirstNamePlaceholder()).toBe(registerData.PlaceholderData.FirstName)
        expect(await registerPage.getLastNamePlaceholder()).toBe(registerData.PlaceholderData.LastName)
        expect(await registerPage.getEmailPlaceholder()).toBe(registerData.PlaceholderData.Email)
        expect(await registerPage.getPhoneNumberPlaceholder()).toBe(registerData.PlaceholderData.PhoneNumber)
        expect(await registerPage.getPasswordPlaceholder()).toBe(registerData.PlaceholderData.Password)
        expect(await registerPage.getConfirmPassPlaceholder()).toBe(registerData.PlaceholderData.ConfirmPassword)

    })

    test("Verify required fields validation", async ({ registerPage }) => {
        await registerPage.clickRegisterConfirmBtn()
        expect(await registerPage.getRequiredFieldErrorMessages()).toStrictEqual(registerData.RequiredFieldsErrorMsg)
        expect(await registerPage.getRequiredCheckboxErrorMessages()).toBe(registerData.RequiredCheckboxErrorMsg)
    })
    test("Verify invalid First Name,email,phone number,confirm password field validation", async ({ registerPage }) => {
        await registerPage.enterFirstName(registerData.InvalidData.FirstName)
        await registerPage.enterEmail(registerData.InvalidData.Email)
        await registerPage.enterPhoneNumber(registerData.InvalidData.PhoneNumber)
        await registerPage.enterPassword(registerData.InvalidData.Password)
        await registerPage.enterConfirmPassword(registerData.InvalidData.ConfirmPassword)
        await registerPage.clickRegisterConfirmBtn()
        expect(await registerPage.getRequiredFieldErrorMessages()).toStrictEqual(registerData.InvalidFieldsErrorMsg)

    })
    for (const data of registerData.InvalidPassData) {
        test(`Verify invalid password field validation for ${data.Pass} Password`, async ({ registerPage }) => {
            await registerPage.enterFirstName(data.FirstName)
            await registerPage.enterLastName(data.LastName)
            await registerPage.enterEmail(`${Math.random().toString(36).slice(2, 7)}@gmail.com`)
            await registerPage.enterPhoneNumber(data.PhoneNumber)
            await registerPage.enterPassword(data.Pass)
            await registerPage.enterConfirmPassword(data.ConfirmPass)
            await registerPage.checkRequiredCheckbox()
            await registerPage.clickRegisterConfirmBtn()
            expect((await registerPage.getErrorOrSuccessToastMsg()).trim()).not.toContain(registerData.RegisterSuccessMessage)

        })
    }

    test("Verify already user created related Alert message is showing or not", async ({ registerPage }) => {
        await registerPage.enterFirstName(registerData.AlreadyUserRegisterData.FirstName)
        await registerPage.enterLastName(registerData.AlreadyUserRegisterData.LastName)
        await registerPage.enterEmail(registerData.AlreadyUserRegisterData.Email)
        await registerPage.enterPhoneNumber(registerData.AlreadyUserRegisterData.PhoneNumber)
        await registerPage.SelectOccupation(registerData.AlreadyUserRegisterData.Occupation)
        await registerPage.selectGender(registerData.AlreadyUserRegisterData.Gender)
        await registerPage.enterPassword(registerData.AlreadyUserRegisterData.Password)
        await registerPage.enterConfirmPassword(registerData.AlreadyUserRegisterData.ConfirmPassword)
        await registerPage.checkRequiredCheckbox()
        await registerPage.clickRegisterConfirmBtn()
        expect(await registerPage.getErrorOrSuccessToastMsg()).toContain(registerData.AlreadyUserRegisterData.AlertMessage)
    })


})