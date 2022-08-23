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
1. Automate [https://letcode.in/test](https://rahulshettyacademy.com/client/) UI

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
  [https://github.com/acharjeeauntor/Playwright_letcode.in_Automation.git](https://github.com/acharjeeauntor/playwright_eCommerce_site_automation)<br>
2. Navigate to folder and install npm packages using:<br>
  npm install<br>

----------------------------------------------------------

## Usage:
1. For Browser Configuration, change required parameters in "playwright.config.ts".<br>
2. For execution entire test suite of functional test on all available browsers simultaneously execute below command where "ENV" can be "functional" or "api",Test Cases are present in "tests" folder:<br>
    npx cross-env ENV=functional npm run test:functional<br>
3. For executing single test case on Chrome browser execute the below command, you can change the browser for execution e.g. if you want to run test cases on Firefox, you can change --project=Firefox against test:single in package.json, just make sure the browser name given matches the name given in playwright.config.ts.<br>
    npx cross-env ENV=functional npm run test:single<br>
4. For executing API test cases, please provide "ENV" value as "api":<br>
    npx cross-env ENV=api npm run test:api<br>
5. For Allure Report generation execute :<br>
    npm run allureReport<br>

----------------------------------------------------------
## HTML Report view for functional test:
![Screenshot from 2022-06-23 22-40-11](https://user-images.githubusercontent.com/38497405/175352119-6f410436-c5d3-4907-b69c-40af70cc07cc.png)
![Screenshot from 2022-06-23 22-40-22](https://user-images.githubusercontent.com/38497405/175352132-8df38134-219b-4f9d-b348-bd0284581a51.png)
![Screenshot from 2022-06-23 22-40-32](https://user-images.githubusercontent.com/38497405/175352155-6bbbcf93-5178-421f-b77c-99b536e00dab.png)




