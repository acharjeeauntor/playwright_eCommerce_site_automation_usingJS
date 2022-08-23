class PlaceOrderPage {

    countrySelectInputSelector = `[placeholder="Select Country"]`
    placeOrderBtnSelector = `.action__submit`

    constructor(page) {
        this.page = page
    }


    async selectCounty() {
        await this.page.locator("[placeholder*='Country']").type("ind", { delay: 200 });
        const dropdown = this.page.locator(".ta-results");
        await dropdown.waitFor();
        let optionsCount = await dropdown.locator("button").count();
        for (let i = 0; i < optionsCount; ++i) {
            let text = await dropdown.locator("button").nth(i).textContent();
            if (text === " India") {
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }
    }

    async clickPlaceOderBtn() {
        await this.page.click(this.placeOrderBtnSelector)
    }

}
module.exports = PlaceOrderPage;