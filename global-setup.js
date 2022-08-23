const rimraf = require("rimraf")

async function globalSetup(){
    await new Promise(resolve => {
        rimraf(`./allure-results`, resolve);
        rimraf(`./html-report.zip`, resolve);
    });
}
module.exports = globalSetup;