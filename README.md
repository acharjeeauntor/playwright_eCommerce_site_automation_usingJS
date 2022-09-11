# playwright_eCommerce_site_automation

-----------------------------------------------------------
## Technology: <br>
* Automation Framework: Playwright <br>
* Build tool: npm <br>
* Bundled Tools: Mocha, Chai
* Language: Javascript <br>
* Report: Allure,html-report <br>
* Dependency/Packages:{
    "adm-zip": "^0.5.9",
    "allure-commandline": "^2.18.1",
    "allure-playwright": "^2.0.0-beta.17",
    "cross-env": "^7.0.3",
    "edit-json-file": "^1.7.0",
    "rimraf": "^3.0.2"
} <br>
* IDE: Visual Studio Code <br>

----------------------------------------------------------

## Requirement:<br>
1. Automate [https://rahulshettyacademy.com/client](https://rahulshettyacademy.com/client/) UI

----------------------------------------------------------

## Prerequisite:
The following software are required:

1. nodejs : Download and Install Node JS from<br>
    https://nodejs.org/en/download/<br>
2. Install Java 8 or above, Allure Reports require Java 8 or higher.<br>
3. allure commandline : Install allure command line for generating Allure Reports using<br>
    npm install -g allure-commandline<br>
    
----------------------------------------------------------

## Installation:
1. Clone the repo using below URL<br>
  [https://github.com/acharjeeauntor/playwright_eCommerce_site_automation_usingJS.git](https://github.com/acharjeeauntor/playwright_eCommerce_site_automation_usingJS.git)<br>
2. Navigate to folder and install npm packages using:<br>
  npm install<br>

----------------------------------------------------------

## Usage:
1. For Browser Configuration, change required parameters in "playwright.config.ts".<br>
2. To execution entire test suite of functional test on all available browsers simultaneously execute below command where "ENV" can be "functional" or "api",Test Cases are present in "tests" folder:<br>
    npx cross-env ENV=functional npm run test<br>
3. To run e2e test<br>
    npx cross-env ENV=functional npm run endToEndTest<br>

----------------------------------------------------------
## HTML Report view for functional test:
![Screenshot from 2022-06-23 22-40-11](https://user-images.githubusercontent.com/38497405/175352119-6f410436-c5d3-4907-b69c-40af70cc07cc.png)
![Screenshot from 2022-06-23 22-40-22](https://user-images.githubusercontent.com/38497405/175352132-8df38134-219b-4f9d-b348-bd0284581a51.png)
![Screenshot from 2022-06-23 22-40-32](https://user-images.githubusercontent.com/38497405/175352155-6bbbcf93-5178-421f-b77c-99b536e00dab.png)

## To See the intregation of Github Actions Video click [here](https://youtu.be/5b3cAz5THr8)
