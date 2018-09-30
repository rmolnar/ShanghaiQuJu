(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div>\n\t<app-home></app-home>\n\t<app-footer></app-footer>  \n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'shanghai';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Import modules







var appRoutes = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n  padding: 25px 0;\r\n  text-align: center;\r\n  background: linear-gradient(to right, #111 0%, #000 100%);\r\n  color: #666;\r\n  padding-bottom: 50px;\r\n}\r\n\r\nfooter span.copyright {\r\n  font-size: 90%;\r\n  line-height: 40px;\r\n  text-transform: none;\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\nfooter ul.quicklinks {\r\n  font-size: 90%;\r\n  line-height: 40px;\r\n  margin-bottom: 0;\r\n  text-transform: none;\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\nul.social-buttons {\r\n  margin-bottom: 0;\r\n}\r\n\r\nul.social-buttons li a {\r\n  font-size: 20px;\r\n  line-height: 50px;\r\n  display: block;\r\n  width: 50px;\r\n  height: 50px;\r\n  transition: all 0.3s;\r\n  color: white;\r\n  border-radius: 100%;\r\n  outline: none;\r\n  background-color: #212529;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\nul.social-buttons li a:active, ul.social-buttons li a:focus, ul.social-buttons li a:hover {\r\n  background-color: #3333ff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container align-top\">\n    <div class=\"row\">\n\n      <div class=\"col-md-4\"><br/>\n        <ul class=\"list-inline social-buttons\">\n          <li class=\"list-inline-item\">\n            <a href=\"https://twitter.com/ShanghaiQuJu\">\n              <i class=\"fab fa-twitter\"></i>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"https://www.facebook.com/ShanghaiQuJu/\">\n              <i class=\"fab fa-facebook-f\"></i>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"https://www.linkedin.com/company/shanghaiquju/\">\n              <i class=\"fab fa-linkedin-in\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"col-md-4\"><br/>\n        <span class=\"copyright\">Copyright &copy; 2018 ShanghaiQuJu.com</span>\n      </div>\n\n      <div class=\"col-md-4\"><br/>\n        <span>Shanghai Quju Education & Technology Co., Ltd<br/>上海取炬教育科技有限公司</span>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-subheading, .service-heading, .service-text, .contact-text, .about-text {\r\n  mix-blend-mode: difference;\r\n}\r\n\r\nheader.masthead {\r\n  background-image: url('Rainbow-Banner.png');\r\n  text-align: center;\r\n  color: white;\r\n  background-repeat: no-repeat;\r\n  background-attachment: scroll;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  box-shadow: 5px 5px 5px 10px rgba(0,0,0,0.1);  \r\n}\r\n\r\nbutton {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.intro-text {\r\n  padding-top: 150px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.intro-lead-in {\r\n  font-size: 22px;\r\n  font-style: italic;\r\n  line-height: 22px;\r\n  margin-bottom: 25px;\r\n  color: white;\r\n  -webkit-text-shadow: 0.5px 0.5px 1px rgba(0,0,0,0.8), -0.5px -0.5px 1px rgba(0,0,0,0.8);\r\n  -moz-text-shadow: 0.5px 0.5px 1px rgba(0,0,0,0.8), -0.5px -0.5px 1px rgba(0,0,0,0.8);\r\n  text-shadow: 0.5px 0.5px 1px rgba(0,0,0,0.8), -0.5px -0.5px 1px rgba(0,0,0,0.8);  \r\n}\r\n\r\n.intro-heading {\r\n  font-size: 50px;\r\n  font-weight: 700;\r\n  line-height: 50px;\r\n  margin-bottom: 25px;\r\n  color: #fff;\r\n  mix-blend-mode: difference;\r\n}\r\n\r\n@media(min-width:768px) {\r\n  .intro-text {\r\n    padding-top: 300px;\r\n    padding-bottom: 200px;\r\n  } \r\n  .intro-lead-in {\r\n    font-size: 36px;\r\n    font-style: italic;\r\n    line-height: 40px;\r\n    margin-bottom: 25px;\r\n  }  \r\n  .intro-heading {\r\n    font-size: 60px;\r\n    font-weight: 700;\r\n    line-height: 75px;\r\n    margin-bottom: 50px;\r\n  }\r\n}\r\n\r\nsection#about {\r\n  background-image: url('Rainbow-Right-B.png');\r\n  background-size: 50%;\r\n  background-repeat: no-repeat;\r\n  background-position: bottom right;\r\n  padding-top: 150px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n#aboutus {\r\n  padding-bottom: 60px;\r\n}\r\n\r\n.about-text::first-letter { \r\n    font-size: 150%;\r\n    font-weight: 600;\r\n}\r\n\r\nsection#services {\r\n  background-image: url('Rainbow-Left-A.png');\r\n  background-size: 50%;  \r\n  background-repeat: no-repeat;\r\n  background-position: left;\r\n  padding-bottom: 100px;\r\n  padding-top: 100px;\r\n}\r\n\r\nsection#services .container {\r\n  padding-bottom: 60px;\r\n}\r\n\r\n#services i {\r\n  -webkit-text-shadow: 5px 5px 10px rgba(0,0,0,0.4);\r\n  -moz-text-shadow: 5px 5px 10px rgba(0,0,0,0.4);\r\n  text-shadow: 5px 5px 10px rgba(0,0,0,0.4);\r\n}\r\n\r\n#service-1 {color: #ff8833;}\r\n\r\n#service-2 {color: #fed136;}\r\n\r\n#service-3 {color: #99ff55;}\r\n\r\n#tech-banner {\r\n  margin-top: 50px;\r\n  padding: 40px;\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n#tech-banner .container{\r\n  margin: auto;\r\n}\r\n\r\n#tech-banner img {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#tech-heading {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#tech-row div {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\nsection#contact {\r\n  background-image: url('Rainbow-Bottom-Right.png');\r\n  background-repeat: no-repeat;\r\n  background-position: bottom right;\r\n  background-size: auto 100%;\r\n  padding-bottom: 150px;\r\n  padding-top: 100px;\r\n}\r\n\r\n.phone-number {\r\n  color: #ffdd33;\r\n}\r\n\r\n.phone-number:hover {\r\n  color: lightblue;\r\n}\r\n\r\n.email-address {\r\n  color: #ffdd33;\r\n}\r\n\r\n.email-address:hover {  \r\n  color: lightblue;\r\n}\r\n\r\n.social-links {\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.social-links i {\r\n  color: #ffdd33;\r\n  font-size: 30px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.social-links i:hover {\r\n  color: lightblue;\r\n}\r\n\r\n#map {\r\n  height: 400px;\r\n  width: 100%;\r\n  background-color: white;\r\n  margin-bottom: 0px;\r\n}\r\n\r\nsection#contact .form-group {\r\n  margin-bottom: 25px;\r\n}\r\n\r\nsection#contact .form-group input,\r\nsection#contact .form-group textarea {\r\n  padding: 20px;\r\n}\r\n\r\nsection#contact .form-group input.form-control {\r\n  height: auto;\r\n}\r\n\r\nsection#contact .form-group textarea.form-control {\r\n  height: 248px;\r\n}\r\n\r\nsection#contact .form-control:focus {\r\n  border-color: #fed136;\r\n  box-shadow: none;\r\n}\r\n\r\nsection#contact ::-webkit-input-placeholder {\r\n  font-weight: 700;\r\n  color: #ced4da;\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\nsection#contact :-moz-placeholder {\r\n  font-weight: 700;\r\n  color: #ced4da;\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\nsection#contact ::-moz-placeholder {\r\n  font-weight: 700;\r\n  color: #ced4da;\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\nsection#contact :-ms-input-placeholder {\r\n  font-weight: 700;\r\n  color: #ced4da;\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\nsection h2.section-heading {\r\n  font-size: 40px;\r\n  margin-top: 0;\r\n  margin-bottom: 15px;\r\n  text-shadow: 1px 1px 1px black;\r\n}\r\n\r\nsection h3.section-subheading {\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n  font-style: italic;\r\n  margin-bottom: 40px;\r\n  text-transform: none;\r\n  font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  section#about, section#services {\r\n    background-size: auto;\r\n  }\r\n}\r\n\r\n.modal-title {\r\n  color: black;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<header id=\"page-header\" class=\"masthead\">\r\n  <div class=\"container\">\r\n    <div class=\"intro-text\">\r\n      <div class=\"intro-lead-in\">Modern, international, web design and development studio</div>\r\n      <div class=\"intro-heading text-uppercase\">Let us make your website or app.</div>\r\n      <button class=\"btn btn-primary btn-xl text-uppercase\" (click)=\"scrollToElement(1)\">Tell Me More</button>\r\n      <button class=\"btn btn-secondary btn-xl text-uppercase\" (click)=\"scrollToElement(3)\">Get in Touch</button>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n\r\n<!-- About -->\r\n<section id=\"about\" (mouseleave)=\"deactivateLink(1)\" (mouseover)=\"activateLink(1)\">\r\n\t<div class=\"container\">\r\n\t\t<div id=\"aboutus\" class=\"row\">\r\n\t\t\t<div class=\"col-lg-12 text-center\">\r\n\t\t\t\t<h2 class=\"section-heading text-uppercase\">About us</h2>\r\n\t\t\t\t<h3 class=\"section-subheading text-center\">We are Shanghai QuJu Education & Technology Co., Ltd. (上海取炬教育科技有限公司)</h3>\r\n\t\t\t\t<p class=\"about-text\">Shanghai QuJu is an American owned web development and information technology company based out of Shanghai, China. We were founded in late 2017 by a teacher and software developer who wanted to use his love of information to collaborate with others and build great things. We specialize in developing websites and apps as well as providing related web based solutions for individuals and businesses in Shanghai, in Wuxi, and worldwide.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\t\r\n\t\t  \t<div class=\"col-lg-12 text-center\">    \r\n\t\t\t\t<h2 class=\"section-heading text-center\">We are passionate about what we do</h2>\r\n\t\t\t\t<h3 class=\"section-subheading text-center\">Oh, you thought programmers were robots?</h3>\r\n\t\t\t\t<p class=\"about-text\">Our mission is to use and create information technology in the furtherance of the democratization of knowledge. The name \"QuJu\" is a combination of two Chinese characters, 取 (\"Qǔ\") and 炬 (\"jù\"), which roughly translates to \"take the torch.\" The name pays homage to cultural legends, such as the Greek Titan Prometheus, who embody the mythological archetype of the lightbringer that gives fire (representing both knowledge and a form of technology) to mankind. As supporters of the <a href=\"https://en.wikipedia.org/wiki/Free_software_movement\">Free Software Movement</a>, we promote transparency and assert the right to learn and share what we learn with others by opposing software patents, the expansion of copyright law, DRM, and the distribution of proprietary software that restricts the rights of users. Additionally, we have a passion for creating clean, efficient products that take advantage of the latest, cutting-edge design and development methods, taking the torch passed on to us by the great developers of the past.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n\r\n\r\n\r\n<!-- Services -->\r\n<section id=\"services\" (mouseleave)=\"deactivateLink(2)\" (mouseover)=\"activateLink(2)\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t  <div class=\"col-lg-12 text-center\">\r\n\t\t    <h2 class=\"section-heading text-uppercase\">Services</h2>\r\n\t\t    <h3 class=\"section-subheading\">As an education, science, and technology company, we offer many IT related services for businesses and individuals, both online and offline. These services include search engine optimization (SEO), site optimization, content production, social media marketing, tech support, break/fix, deployment, and more. Contact us for more details. Here are some of our primary services:</h3>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t\t<div class=\"row text-center\">\r\n\t\t  <div class=\"col-md-4\">\r\n\t\t    <span class=\"fa-stack fa-4x\">\r\n\t\t      <i id=\"service-1\" class=\"fas fa-circle fa-stack-2x\"></i>\r\n\t\t      <i class=\"fas fa-laptop-code fa-stack-1x fa-inverse\"></i>\r\n\t\t    </span>\r\n\t\t    <h4 class=\"service-heading\">Website Development</h4>\r\n\t\t    <p class=\"service-text\">Whether you need a personal blog, company web page, or a full scale e-commerce solution, we've got you covered. We specialize in full stack development using the latest technologies. All of our sites are guaranteed to be fully responsive, efficient, and secure.</p>\r\n\t\t  </div>\r\n\t\t  <div class=\"col-md-4\">\r\n\t\t    <span class=\"fa-stack fa-4x\">\r\n\t\t      <i id=\"service-2\" class=\"fas fa-circle fa-stack-2x\"></i>\r\n\t\t      <i class=\"far fa-file-code fa-stack-1x fa-inverse\"></i>\r\n\t\t    </span>\r\n\t\t    <h4 class=\"service-heading\">App Development</h4>\r\n\t\t    <p class=\"service-text\">Need a mobile or web app? We can make it happen. We'll cover every step of the development process from design to deployment and even host and maintain it for you so you can focus on what you do best.</p>\r\n\t\t  </div>\r\n\t\t  <div class=\"col-md-4\">\r\n\t\t    <span class=\"fa-stack fa-4x\">\r\n\t\t      <i id=\"service-3\" class=\"fas fa-circle fa-stack-2x\"></i>\r\n\t\t      <i class=\"fas fa-server fa-stack-1x fa-inverse\"></i>\r\n\t\t    </span>\r\n\t\t    <h4 class=\"service-heading\">Hosting</h4>\r\n\t\t    <p class=\"service-text\">We offer all of our clients premium website hosting on our private, dedicated server. Our hosting plans include full cPanel access as well as unlimited email and FTP accounts, addon domains, and more. Contact us for information regarding application and VPS hosting.</p>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div id=\"tech-banner\">\r\n\t\t<p class=\"text-center\">We keep up to date with the latest trends in the industry.<p>\r\n\t\t<h3 id=\"tech-heading\" class=\"text-center\">Some of the technologies we use:</h3>\r\n\t\t<div id=\"tech-row\" class=\"row\">\r\n\t\t\t<div class=\"col-md-2 col-sm-4\">\r\n\t\t\t\t<img class=\"img-fluid d-block mx-auto\" src=\"../../../assets/img/logos/logo-htmlcssjs.png\" alt=\"\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 col-sm-4\">\r\n\t\t\t \t<img class=\"img-fluid d-block mx-auto\" src=\"../../../assets/img/logos/logo-angular.png\" alt=\"\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 col-sm-4\">\r\n\t\t\t \t<img class=\"img-fluid d-block mx-auto\" src=\"../../../assets/img/logos/logo-express.png\" alt=\"\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 col-sm-4\">\r\n\t\t\t\t<img class=\"img-fluid d-block mx-auto\" src=\"../../../assets/img/logos/logo-node.png\" alt=\"\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 col-sm-4\">\r\n\t\t\t\t<img class=\"img-fluid d-block mx-auto\" src=\"../../../assets/img/logos/logo-mongo.png\" alt=\"\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 col-sm-4\">\r\n\t\t\t\t<img class=\"img-fluid d-block mx-auto\" src=\"../../../assets/img/logos/logo-wordpress.png\" alt=\"\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n\r\n\r\n\r\n<!-- Contact -->\r\n<section id=\"contact\" (mouseleave)=\"deactivateLink(3)\" (mouseover)=\"activateLink(3)\">\r\n\t<div class=\"container\">\t\r\n\t    <div class=\"row\">\r\n\t      <div class=\"col-lg-12 text-center contact-text\">\r\n\t        <h2 class=\"section-heading text-uppercase\">Contact Us</h2>\r\n\t        <p class=\"text-center\">Phone: <span id=\"set-phone\" class=\"phone-number\"></span></p>\r\n\t\t\t<p class=\"text-center\">Email: <span id=\"set-email\" class=\"email-address\"></span></p>\r\n\t      \t<h5 class=\"text-center social-text\">Add and follow us on social media:</h5>\r\n\t\t\t<p class=\"text-center social-links\">\r\n\t\t\t\t<a href=\"https://www.facebook.com/ShanghaiQuJu/\"><i class=\"fab fa-facebook-f\"></i></a>\r\n\t\t\t\t<a href=\"https://twitter.com/ShanghaiQuJu\"><i class=\"fab fa-twitter\"></i></a>\r\n\t\t\t\t<a href=\"https://www.linkedin.com/company/shanghaiquju/\"><i class=\"fab fa-linkedin-in\"></i></a>\r\n\t\t\t\t<a href=\"#wechat-modal\" data-toggle=\"modal\" ><i class=\"fab fa-weixin\"></i></a>\r\n\t\t\t\t<a href=\"#alipay-modal\" data-toggle=\"modal\" ><i class=\"fab fa-alipay\"></i></a>\r\n\t\t\t</p>\r\n\t        <h3 class=\"section-subheading\">Interested in our services? Have some questions? Want to work with us?<br/>Use this form to send us a message and we'll get back to you soon.</h3>\r\n\t      </div>\r\n\t    </div>\r\n\t    <div class=\"row\">\r\n\t      <div class=\"col-lg-12\">\r\n\t        <form id=\"contactForm\" name=\"sentMessage\" novalidate=\"novalidate\">\r\n\t          <div class=\"row\">\r\n\t            <div class=\"col-md-6\">\r\n\t              <div class=\"form-group\">\r\n\t                <input class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Your Name *\" required=\"required\" data-validation-required-message=\"Please enter your name.\">\r\n\t                <p class=\"help-block text-danger\"></p>\r\n\t              </div>\r\n\t              <div class=\"form-group\">\r\n\t                <input class=\"form-control\" id=\"email\" type=\"email\" placeholder=\"Your Email *\" required=\"required\" data-validation-required-message=\"Please enter your email address.\">\r\n\t                <p class=\"help-block text-danger\"></p>\r\n\t              </div>\r\n\t              <div class=\"form-group\">\r\n\t                <input class=\"form-control\" id=\"phone\" type=\"tel\" placeholder=\"Your Phone *\" required=\"required\" data-validation-required-message=\"Please enter your phone number.\">\r\n\t                <p class=\"help-block text-danger\"></p>\r\n\t              </div>\r\n\t            </div>\r\n\t            <div class=\"col-md-6\">\r\n\t              <div class=\"form-group\">\r\n\t                <textarea class=\"form-control\" id=\"message\" placeholder=\"Your Message *\" required=\"required\" data-validation-required-message=\"Please enter a message.\"></textarea>\r\n\t                <p class=\"help-block text-danger\"></p>\r\n\t              </div>\r\n\t            </div>\r\n\t            <div class=\"clearfix\"></div>\r\n\t            <div class=\"col-lg-12 text-center\">\r\n\t              <div id=\"success\"></div>\r\n\t              <button id=\"sendMessageButton\" class=\"btn btn-primary btn-xl text-uppercase\" type=\"submit\">Send Message</button>\r\n\t            </div>\r\n\t          </div>\r\n\t        </form>\r\n\t      </div>\r\n\t    </div>\r\n\t</div>\r\n</section>\r\n\r\n<div id=\"map\"></div>\r\n\r\n<!-- Wechat Modal -->\r\n<div class=\"modal fade\" id=\"wechat-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"close-modal\" data-dismiss=\"modal\">\r\n        <div class=\"lr\">\r\n          <div class=\"rl\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"container\">\r\n        <div class=\"row text-center\">\r\n          <div class=\"col-lg-8 mx-auto\">\r\n            <div class=\"modal-body\">\r\n              <!-- Project Details Go Here -->\r\n              <h2 class=\"text-uppercase modal-title\">WeChat!</h2>\r\n              <p class=\"item-intro text-muted\">Scan the following QR code to add us on WeChat.</p>\r\n              <img class=\"img-fluid d-block mx-auto\" src=\"../../assets/img/qr/wechat.jpg\" alt=\"WeChat QR Code\">\r\n              <button class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\">\r\n                <i class=\"fas fa-times\"></i>\r\n                Dismiss</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Alipay Modal -->\r\n<div class=\"modal fade\" id=\"alipay-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"close-modal\" data-dismiss=\"modal\">\r\n        <div class=\"lr\">\r\n          <div class=\"rl\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"container\">\r\n        <div class=\"row text-center\">\r\n          <div class=\"col-lg-8 mx-auto\">\r\n            <div class=\"modal-body\">\r\n              <!-- Project Details Go Here -->\r\n              <h2 class=\"text-uppercase modal-title\">Alipay!</h2>\r\n              <p class=\"item-intro text-muted\">Scan the following QR code to add us on Alipay.</p>\r\n              <img class=\"img-fluid d-block mx-auto\" src=\"../../assets/img/qr/alipay.jpg\" alt=\"WeChat QR Code\">\r\n              <button class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\">\r\n                <i class=\"fas fa-times\"></i>\r\n                Dismiss</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.showEmail();
        this.showPhone();
    };
    HomeComponent.prototype.scrollToElement = function (element) {
        switch (element) {
            case 0:
                element = "page-header";
                break;
            case 1:
                element = "about";
                break;
            case 2:
                element = "services";
                break;
            case 3:
                element = "contact";
                break;
            default:
                element = "about";
        }
        var scrollElement = document.getElementById(element);
        scrollElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    };
    HomeComponent.prototype.activateLink = function (element) {
        switch (element) {
            case 1:
                element = "nav-about";
                break;
            case 2:
                element = "nav-services";
                break;
            case 3:
                element = "nav-contact";
                break;
            default:
                element = "nav-about";
        }
        var activateElement = document.getElementById(element);
        activateElement.classList.add('active');
    };
    HomeComponent.prototype.deactivateLink = function (element) {
        switch (element) {
            case 1:
                element = "nav-about";
                break;
            case 2:
                element = "nav-services";
                break;
            case 3:
                element = "nav-contact";
                break;
            default:
                element = "nav-about";
        }
        var activateElement = document.getElementById(element);
        activateElement.classList.remove('active');
    };
    HomeComponent.prototype.showPhone = function () {
        var element = document.getElementById('set-phone');
        element.innerHTML = "(+86) 133 7364 8721";
    };
    HomeComponent.prototype.showEmail = function () {
        var user = 'contact', domain = 'ShanghaiQuJu.com', element = document.getElementById('set-email');
        element.innerHTML = user + '@' + domain;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainNav {\r\n\tfont-size: 12px;\r\n\tright: 0;\r\n\tborder: 0;\r\n\tfont-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n\tbackground: linear-gradient(to right, #111 0%, #222 100%);\r\n\tbox-shadow: 2px 2px 1px 0px rgba(0,0,0,0.2);\r\n}\r\n\r\n#mainNav .navbar-brand {\r\n\tfont-family: 'Averia Libre', cursive;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#mainNav .navbar-brand:hover {\r\n\tcolor: violet !important;\r\n}\r\n\r\n#mainNav .navbar-brand.active, #mainNav .navbar-brand:active, #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover, .nav-link:hover {\r\n\tcolor: white;\r\n}\r\n\r\n.active {color: white !important;}\r\n\r\n#mainNav .navbar-nav .nav-item .nav-link {\r\n\tfont-size: 90%;\r\n\tfont-weight: 400;\r\n\tpadding: 0.75em 0;\r\n\tletter-spacing: 1px;\r\n\tfont-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\n@media (min-width: 992px) {\r\n\t#mainNav {\r\n\t\ttransition: padding-top 0.3s, padding-bottom 0.3s;\r\n\t\tborder: none;\r\n\t}\r\n\t#mainNav .navbar-brand {\r\n\t\tfont-size: 2em;\r\n\t\ttransition: all 0.3s;\r\n\t}\r\n\t\t#mainNav .navbar-nav .nav-item .nav-link {\r\n\t\tpadding: 1.1em 1em !important;\r\n\t}\r\n}\r\n\r\n.navbar-brand {\r\n\tcursor: pointer;\r\n}\r\n\r\n.nav-item {\r\n\tmargin-right: 16px;\r\n\tcursor: pointer;\r\n\tfont-size: 18px;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.nav-item:focus,.nav-item:active {\r\n   outline: none !important;\r\n   box-shadow: none;\r\n}\r\n\r\ni {\r\n\tpadding-right: 3px;\r\n\tfont-size: 16px;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n\t.nav-item {\r\n\t\tmargin-right: 16px;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 765px) {\r\n\t.navbar-brand {\r\n\t\tmargin-left: 20px;\r\n\t}\r\n\r\n\t.nav-item {\r\n\t\tmargin-left: 45px;\r\n\t}\r\n\r\n\t.icon-item {\r\n\t\tpadding-left: 30px;\r\n\t\tdisplay: inline-block;\r\n\t}\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"mainNav\" class=\"navbar navbar-expand-md navbar-dark fixed-top mb-4\">\n  <div class=\"container\">\n    <span class=\"navbar-brand text-center\" (click)=\"scrollToElement(0)\"><img height=\"32px\" width=\"32px\" src=\"../../assets/img/flame.png\">ShanghaiQuJu</span>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li tabindex=\"1\" class=\"nav-item\" (click)=\"scrollToElement(1)\" (click)=\"collapseMobileMenu()\">\n          <span id=\"nav-about\" class=\"nav-link\"><i class=\"fas fa-info-circle\"></i> About</span>\n        </li>\n        <li tabindex=\"2\" class=\"nav-item\" (click)=\"scrollToElement(2)\" (click)=\"collapseMobileMenu()\">\n          <span id=\"nav-services\" class=\"nav-link\"><i class=\"fas fa-hands-helping\"></i> Services</span>\n        </li>        \n        <li tabindex=\"3\" class=\"nav-item\" (click)=\"scrollToElement(3)\" (click)=\"collapseMobileMenu()\">\n          <span id=\"nav-contact\" class=\"nav-link\"><i class=\"fas fa-mail-bulk\"></i> Contact</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.collapseMobileMenu = function () {
        console.log("collapsing");
        var menu = document.getElementById("navbarCollapse");
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
        }
    };
    NavbarComponent.prototype.scrollToElement = function (element) {
        switch (element) {
            case 0:
                element = "page-header";
                break;
            case 1:
                element = "about";
                break;
            case 2:
                element = "services";
                break;
            case 3:
                element = "contact";
                break;
            default:
                element = "about";
        }
        var scrollElement = document.getElementById(element);
        scrollElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\Dev\ShanghaiQuJu.com\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map