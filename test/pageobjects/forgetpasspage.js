class ForgetPassPage {
    requiredFieldsErrorMsgSelector=`.invalid-feedback`
    emailInputFieldSelector=`[formcontrolname="userEmail"]`
    passwordInputFieldSelector=`#userPassword`
    confirmPasswordInputFieldSelector=`#confirmPassword`
    saveNewPasswordBtnSelector=`button[type='submit']`
    errorMsgToastSelector=`#toast-container`

    constructor(page) {
        this.page = page
    }
    async getRequiredFieldErrorMessages(){
        return await this.page.locator(this.requiredFieldsErrorMsgSelector).allTextContents()
    }

    async clickSaveNewPassBtn(){
        await this.page.click(this.saveNewPasswordBtnSelector)
    }

    async enterEmail(email) {
        await this.page.locator(this.emailInputFieldSelector).type(email)
    }

    async enterPassword(pass){
        await this.page.locator(this.passwordInputFieldSelector).type(pass)
    }

    async enterConfirmPassword(confirmPass){
        await this.page.locator(this.confirmPasswordInputFieldSelector).type(confirmPass)
    }

    async getErrorOrSuccessToastMsg(){
        return await this.page.textContent(this.errorMsgToastSelector)
    }

    async getEmailPlaceholder(){
        return await this.page.getAttribute(this.emailInputFieldSelector, "placeholder")
    }

    async getPasswordPlaceholder(){
        return await this.page.getAttribute(this.passwordInputFieldSelector, "placeholder")
    }

    async getConfirmPasswordPlaceholder() {
        return await this.page.getAttribute(this.confirmPasswordInputFieldSelector, "placeholder")
    }
}

module.exports = ForgetPassPage;