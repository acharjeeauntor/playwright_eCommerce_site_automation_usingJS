class LoginPage {
registerBtnSelector=`[routerlink*="auth"]`
emailInputSelector=`#userEmail`
passwordInputSelector=`#userPassword`
loginBtnSelector=`#login`
requiredFieldsErrorMsgSelector=`.invalid-feedback`
errorMsgToastSelector=`#toast-container`
forgetPassLinkSelector=`[href*='/client/auth/password-new']`


    constructor(page) {
        this.page = page
    }


    async clickRegisterBtn(){
        await this.page.click(this.registerBtnSelector)
    }

    async goToLoginPage(url) {
        await this.page.goto(url)
    }

    async enterEmail(email){
        await this.page.locator(this.emailInputSelector).fill(email)
    }
    async enterPassword(pass) {
        await this.page.locator(this.passwordInputSelector).fill(pass)
    }

    async clickLoginBtn(){
        await this.page.click(this.loginBtnSelector)
    }

    async getEmailPlaceholder() {
        return await this.page.getAttribute(this.emailInputSelector, "placeholder")
    }

    async getPasswordPlaceholder(){
        return await this.page.getAttribute(this.passwordInputSelector, "placeholder")
    }

    async getRequiredFieldErrorMessages() {
        return await this.page.locator(this.requiredFieldsErrorMsgSelector).allTextContents()
    }
    async getErrorOrSuccessToastMsg() {
        return await this.page.textContent(this.errorMsgToastSelector)
    }
    async clickForgetPassLink(){
        await this.page.click(this.forgetPassLinkSelector)
    }
}

module.exports = LoginPage;