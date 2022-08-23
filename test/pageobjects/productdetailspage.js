class ProductDetailsPage {
    addTOCartBtnSelector = `div button`
    productAddToCartToastMsgSelector = `#toast-container`

    constructor(page) {
        this.page = page
    }

    async clickAddToCartBtn() {
        await this.page.click(this.addTOCartBtnSelector)
    }

    async getToastMsg() {
        return await this.page.textContent(this.productAddToCartToastMsgSelector)
    }

    async getToastMsgLocator() {
        return this.page.locator(this.productAddToCartToastMsgSelector)
    }

}
module.exports = ProductDetailsPage;