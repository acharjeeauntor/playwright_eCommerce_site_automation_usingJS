class NavBar {

    homeBtnSelector = `[routerlink='/dashboard/']`
    ordersBtnSelector = `[routerlink*='/myorders']`
    cartBtnSelector = `[routerlink*='/cart']`
    cartLabelSelector=`button label`

    constructor(page) {
        this.page = page
    }


    async clickHomeBtn() {
        await this.page.click(this.homeBtnSelector)
    }

    async clickOrdersBtn() {
        await this.page.click(this.ordersBtnSelector)
    }

    async clickCartBtn(){
        await this.page.click(this.cartBtnSelector)
    }

    async getCartLabelCount(){
     await this.page.locator(this.cartLabelSelector).waitFor({timeout:15000})
        return await this.page.textContent(this.cartLabelSelector)
    }

}

module.exports = NavBar;