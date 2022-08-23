const base = require("@playwright/test")
const LoginPage = require("../pageobjects/loginpage")
const ForgetPassPage = require("../pageobjects/forgetpasspage")
const RegisterPage =require("../pageobjects/registerpage")
const HomePage =require("../pageobjects/homepage")
const NavBar =require("../pageobjects/navbar")
const OrdersPage =require("../pageobjects/orderspage")
const ProductDetailsPage =require("../pageobjects/productdetailspage")
const CartPage =require("../pageobjects/cartpage")
const PlaceOrderPage =require("../pageobjects/placeorderpage")


const test = base.test.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page))
    },
    forgetPassPage:async({page},use)=>{
        await use(new ForgetPassPage(page))
    },
    homePage:async({page},use)=>{
        await use(new HomePage(page))
    },
    navBar:async({page},use)=>{
        await use(new NavBar(page))
    },
    ordersPage:async({page},use)=>{
        await use(new OrdersPage(page))
    },
    productDetailsPage:async({page},use)=>{
        await use(new  ProductDetailsPage(page))
    },
    cartPage:async({page},use)=>{
        await use(new CartPage(page))
    },
    placeOrderPage:async({page},use)=>{
        await use(new PlaceOrderPage(page))
    }

})


module.exports = test