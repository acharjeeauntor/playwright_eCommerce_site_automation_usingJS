class OrdersPage {

    unAuthMsgTextSelector=`.email-wrapper p`
    viewBtnSelector=`button:has-text('View')`

    constructor(page) {
        this.page = page
    }

    async getUnAuthOrderText(){
        return await this.page.textContent(this.unAuthMsgTextSelector)
    }

    async clickViewBtn(){
        await this.page.click(this.viewBtnSelector)
    }
}


module.exports = OrdersPage;