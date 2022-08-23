class HomePage {

    searchInputSelector=`[formcontrolname='productName']:visible`
    minimumPriceInputSelector=`[formcontrolname='minPrice']:visible`
    maximumPriceInputSelector=`[formcontrolname='maxPrice']:visible`
    errorMsgToastSelector = `#toast-container`
    productNameSelector = `.card-body b`
    productItemSelector=`div .card`
    viewBtnSelector = `button:has-text("View")`
    addToCartBtnSelector = `button:has-text("Add To Cart")`
    productAddToCartToastMsgSelector=`#toast-container`   
    
    constructor(page) {
        this.page = page
    }


    async searchProduct(productName) {
        await this.page.locator(this.searchInputSelector).fill(productName)
        await this.page.keyboard.press("Enter")
    }

    async setMinimumAndMaxPriceRange(minimum, maximum){
        await this.page.locator(this.minimumPriceInputSelector).fill(minimum)
        await this.page.locator(this.maximumPriceInputSelector).fill(maximum)
        await this.page.keyboard.press("Enter")
    }

    async getErrorToastMsg() {
        return (await this.page.textContent(this.errorMsgToastSelector)).trim()
    }
    async getProductName() {
        return await this.page.textContent(this.productNameSelector)
    }

    async getRangeProductName() {
        return (await this.page.locator(this.productNameSelector).last().textContent()).toLowerCase().trim()
    }

    async clickViewBtnofProductItem(pName){
        let products = this.page.locator(this.productItemSelector)
        let productCount = await products.count()
        for(let i =0;i<productCount;i++){
            let productName = await products.nth(i).locator(this.productNameSelector).textContent()
            if(productName===pName){
                await products.nth(i).locator(this.viewBtnSelector).click()
                break
            }
        }

    }
    async clickAddToCartOfProduct(pName){
        let products = this.page.locator(this.productItemSelector)
        let productCount = await products.count()
        for(let i =0;i<productCount;i++){
            let productName = await products.nth(i).locator(this.productNameSelector).textContent()
            if(productName===pName){
                await products.nth(i).locator(this.addToCartBtnSelector).click()
                break
            }
        }

    }
    

    async getToastMsgLocator(){
        return this.page.locator(this.productAddToCartToastMsgSelector)
    }

}

module.exports = HomePage;