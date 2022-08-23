class RegisterPage {
    firstNameInputSelector = `#firstName`
    lastNameInputSelector = `#lastName`
    emailInputSelector = `#userEmail`
    phoneNumberInputSelector = `#userMobile`
    passwordInputSelector = `#userPassword`
    confirmPasswordInputSelector = `#confirmPassword`
    genderRadioBtnSelector = `[formcontrolname='gender']`
    occupationDropDownSelector = `[formcontrolname='occupation']`
    requiredCheckboxSelector = `[formcontrolname='required']`
    registerBtnSelector = `#login`
    requiredFieldsErrorMsgSelector=`.invalid-feedback`
    checkboxRequiredErrorMsgSelector=`text=*Please check above checkbox`
    errorMsgToastSelector=`#toast-container`

    constructor(page) {
        this.page = page
    }

    async enterFirstName(fName) {
        await this.page.locator(this.firstNameInputSelector).fill(fName)
    }

    async enterLastName(LName){
        await this.page.locator(this.lastNameInputSelector).fill(LName)
    }

    async enterEmail(email) {
        await this.page.locator(this.emailInputSelector).fill(email)
    }

    async enterPhoneNumber(phone) {
        await this.page.locator(this.phoneNumberInputSelector).fill(phone)
    }
    async SelectOccupation(label){
        await this.page.selectOption(this.occupationDropDownSelector, { label: label })
    }

    async selectGender(input){
        if (input === "Male") {
            await this.page.locator(this.genderRadioBtnSelector).first().click()
        } else if (input === "Female") {
            await this.page.locator(this.genderRadioBtnSelector).last().click()
        }
    }

    async enterPassword(pass) {
        await this.page.locator(this.passwordInputSelector).fill(pass)
    }

    async enterConfirmPassword(confirmPass) {
        await this.page.locator(this.confirmPasswordInputSelector).fill(confirmPass)
    }

    async checkRequiredCheckbox() {
        await this.page.check(this.requiredCheckboxSelector)
    }

    async clickRegisterConfirmBtn() {
        await this.page.click(this.registerBtnSelector)
    }

    async getFirstNamePlaceholder() {
        return await this.page.getAttribute(this.firstNameInputSelector, "placeholder")
    }

    async getLastNamePlaceholder(){
        return await this.page.getAttribute(this.lastNameInputSelector, "placeholder")
    }

    async getEmailPlaceholder() {
        return await this.page.getAttribute(this.emailInputSelector, "placeholder")
    }


    async getPhoneNumberPlaceholder() {
        return await this.page.getAttribute(this.phoneNumberInputSelector, "placeholder")
    }

    async getPasswordPlaceholder() {
        return await this.page.getAttribute(this.passwordInputSelector, "placeholder")
    }


    async getConfirmPassPlaceholder() {
        return await this.page.getAttribute(this.confirmPasswordInputSelector, "placeholder")
    }

    async getRequiredFieldErrorMessages(){
        return await this.page.locator(this.requiredFieldsErrorMsgSelector).allTextContents()
    }

    async getRequiredCheckboxErrorMessages() {
        return await this.page.locator(this.checkboxRequiredErrorMsgSelector).textContent()
    }

    async getErrorOrSuccessToastMsg(){
        return await this.page.textContent(this.errorMsgToastSelector)
    }
}
module.exports = RegisterPage;