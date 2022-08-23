class CartPage {
    cartItemSelector=`.cart li`
    productNameSelector=`.cart h3`
    buyNowBtnSelector=`button:has-text("Buy Now")`
    deleteBtnSelector=`.btn-danger`
    noCartTestSelector=`h1:has-text("No Products in Your Cart !")`
    continueShoppingBtnSelector=`[type="button"][routerlink="/dashboard"]`
    productPriceSelector=`.prodTotal p`
    checkoutBtnSelector=`button:has-text("Checkout")`

    constructor(page) {
        this.page = page
    }


    async clickBuyNowBtnOfCartItem(pName){
        await this.page.locator(this.cartItemSelector).first().waitFor()
        let cartProducts = this.page.locator(this.cartItemSelector)
        let totalProducts = await cartProducts.count()

        if (totalProducts == 1) {
            await cartProducts.locator(this.buyNowBtnSelector).click()
        } else if (totalProducts > 1) {
            for (var i = 0; i < totalProducts; i++) {
                let productName = await cartProducts.nth(i).locator(this.productNameSelector).textContent()
                if (productName === pName) {
                    await cartProducts.nth(i).locator(this.buyNowBtnSelector).click()
                    break
                }
            }
        }

    }

    async clickDeleteBtnOfCartItem(pName) {
        await this.page.locator(this.cartItemSelector).first().waitFor()
        let cartProducts = this.page.locator(this.cartItemSelector)
        let totalProducts = await cartProducts.count()

        if (totalProducts == 1) {
            await cartProducts.locator(this.deleteBtnSelector).click()
        } else if (totalProducts > 1) {
            for (var i = 0; i < totalProducts; i++) {
                let productName = await cartProducts.nth(i).locator(this.productNameSelector).textContent()
                if (productName === pName) {
                    await cartProducts.nth(i).locator(this.deleteBtnSelector).click()
                    break
                }
            }
        }

    }

    async getNoCartText(){
        return await this.page.textContent(this.noCartTestSelector)
    }

    async clickContinueShoppingBtn() {
        await this.page.click(this.continueShoppingBtnSelector)
    }

    async getTotalPriceOfProduct() {
        let priceWithCurrency = this.page.locator(this.productPriceSelector)
        let prodCount = await priceWithCurrency.count()
        let priceCount=0

        for (var i = 0; i < prodCount; i++) {
         let price=(await priceWithCurrency.nth(i).textContent()).split("$")[1].trim()
         priceCount=priceCount+ parseInt(price) 
        }

        return priceCount
    }

    async clickCheckoutBtn() {
        await this.page.click(this.checkoutBtnSelector)
    }


}

module.exports = CartPage;