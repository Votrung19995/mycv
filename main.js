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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <div class=\"profile-page sidebar-collapse\">\n    <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent bg-primary\" color-on-scroll=\"400\">\n      <div class=\"container\">\n        <div class=\"navbar-translate\"><a class=\"navbar-brand\" href=\"#\" rel=\"tooltip\">MY RESUME</a>\n          <button class=\"navbar-toggler navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-bar bar1\"></span><span class=\"navbar-toggler-bar bar2\"></span><span class=\"navbar-toggler-bar bar3\"></span></button>\n        </div>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item\"><a class=\"nav-link smooth-scroll\" href=\"#about\">About</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link smooth-scroll\" href=\"#skill\">Skills</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link smooth-scroll\" href=\"#portfolio\">Technologies</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link smooth-scroll\" href=\"#experience\">Experience</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link smooth-scroll\" href=\"#education\">Education</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link smooth-scroll\" href=\"#awards\">Awards</a></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </div>\n</header>\n\n<div class=\"page-content\">\n  <div>\n    <div class=\"profile-page\">\n    <div class=\"wrapper\">\n    <div class=\"page-header page-header-small\" filter-color=\"green\">\n      <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image: url('assets/images/vl1.jpg');\"></div>\n      <div class=\"container\">\n        <div class=\"content-center\">\n          <div class=\"cc-profile-image\"><a href=\"#\"><img src=\"assets/images/v-l-mt.jpg\" alt=\"Image\"/></a></div>\n          <div class=\"h2 title\">Vo Le Minh Trung</div>\n          <p class=\"category text-white\">IT Engineer, Java Developer</p><a class=\"btn btn-info smooth-scroll mr-2\" href=\"#contact\" data-aos=\"zoom-in\" data-aos-anchor=\"data-aos-anchor\">Hire Me</a><a class=\"btn btn-info\" href=\"assets/cv/Vo-Le-Minh-Trung-cv.pdf\" download  data-aos=\"zoom-in\" data-aos-anchor=\"data-aos-anchor\">Download CV</a>\n        </div>\n      </div>\n      <div class=\"section\">\n        <div class=\"container\">\n          <div class=\"button-container\"><a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"#\" rel=\"tooltip\" title=\"Follow me on Facebook\"><i class=\"fa fa-facebook\"></i></a><a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"#\" rel=\"tooltip\" title=\"Follow me on Twitter\"><i class=\"fa fa-twitter\"></i></a><a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"#\" rel=\"tooltip\" title=\"Follow me on Google+\"><i class=\"fa fa-google-plus\"></i></a><a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"#\" rel=\"tooltip\" title=\"Follow me on Instagram\"><i class=\"fa fa-instagram\"></i></a></div>\n        </div>\n      </div>\n    </div>\n    </div>\n</div>\n\n<div class=\"section\" id=\"about\">\n  <div class=\"container\">\n    <div class=\"card\" data-aos=\"fade-up\" data-aos-offset=\"10\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12\">\n          <div class=\"card-body\">\n            <div class=\"h4 mt-0 title\">About</div>\n            <p>Hello! I am Vo Le Minh Trung. I come from Vinh Long province, but I am living in HCM city now</p>\n            <p>I am a Java developer</p>\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-12\">\n          <div class=\"card-body\">\n            <div class=\"h4 mt-0 title\">Basic Information</div>\n            <div class=\"row\">\n              <div class=\"col-sm-4\"><strong class=\"text-uppercase\">Age:</strong></div>\n              <div class=\"col-sm-8\">25</div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-sm-4\"><strong class=\"text-uppercase\">Email:</strong></div>\n              <div class=\"col-sm-8\">votrung017@gmail.com</div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-sm-4\"><strong class=\"text-uppercase\">Phone:</strong></div>\n              <div class=\"col-sm-8\">+840263550900</div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-sm-4\"><strong class=\"text-uppercase\">Address:</strong></div>\n              <div class=\"col-sm-8\">Ward 13, Tan Binh District, Ho Chi Minh City</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"section\" id=\"skill\">\n  <div class=\"container\">\n    <div class=\"h4 text-center mb-4 title\">Professional Skills</div>\n    <div class=\"card\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"progress-container progress-primary\"><span class=\"progress-badge\">HTML</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\"></div><span class=\"progress-value\">80%</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"progress-container progress-primary\"><span class=\"progress-badge\">CSS</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%;\"></div><span class=\"progress-value\">75%</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"progress-container progress-primary\"><span class=\"progress-badge\">JavaScript</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\"></div><span class=\"progress-value\">80%</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"progress-container progress-primary\"><span class=\"progress-badge\">Java</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 85%;\"></div><span class=\"progress-value\">85%</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"progress-container progress-primary\"><span class=\"progress-badge\">Bootstrap</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%;\"></div><span class=\"progress-value\">75%</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"progress-container progress-primary\"><span class=\"progress-badge\">Other</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 70%;\"></div><span class=\"progress-value\">70%</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"section\" id=\"portfolio\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 ml-auto mr-auto\">\n        <div class=\"h4 text-center mb-4 title\">Technologies</div>\n        <div class=\"nav-align-center\">\n          <ul class=\"nav nav-pills nav-pills-primary\" role=\"tablist\">\n            <li class=\"nav-item\" title=\"Java\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#web-development\" role=\"tablist\"><i class=\"fa fa-laptop\" aria-hidden=\"true\"></i></a></li>\n            <li class=\"nav-item\" title=\"Js\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#graphic-design\" role=\"tablist\"><i class=\"fa fa-internet-explorer\" aria-hidden=\"true\"></i></a></li>\n            <li class=\"nav-item\" title=\"Other\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#Photography\" role=\"tablist\"><i class=\"fa fa-microchip\" aria-hidden=\"true\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"tab-content gallery mt-5\">\n      <div class=\"tab-pane active\" id=\"web-development\">\n        <div class=\"ml-auto mr-auto\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\"><a href=\"#web-development\">\n                  <figure class=\"cc-effect\"><img src=\"assets/images/java.png\" alt=\"Image\"/>\n                    <figcaption>\n                      <div class=\"h4\">Java core</div>\n                      <p>Web Development</p>\n                    </figcaption>\n                  </figure></a></div>\n              <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\"><a href=\"#web-development\">\n                  <figure class=\"cc-effect\"><img src=\"assets/images/springmvc.png\" alt=\"Image\"/>\n                    <figcaption>\n                      <div class=\"h4\">Spring MVC</div>\n                      <p>Web Development</p>\n                    </figcaption>\n                  </figure></a></div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\"><a href=\"#web-development\">\n                  <figure class=\"cc-effect\"><img src=\"assets/images/spring-boot.png\" alt=\"Image\"/>\n                    <figcaption>\n                      <div class=\"h4\">Spring-boot</div>\n                      <p>Web Development</p>\n                    </figcaption>\n                  </figure></a></div>\n              <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\"><a href=\"#web-development\">\n                  <figure class=\"cc-effect\"><img src=\"assets/images/jpa.jpg\" alt=\"Image\"/>\n                    <figcaption>\n                      <div class=\"h4\">JPA, Hibernate</div>\n                      <p>Web Development</p>\n                    </figcaption>\n                  </figure></a></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-pane\" id=\"graphic-design\" role=\"tabpanel\">\n        <div class=\"ml-auto mr-auto\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\"><a href=\"#graphic-design\">\n                  <figure class=\"cc-effect\"><img src=\"assets/images/angular.png\" alt=\"Image\"/>\n                    <figcaption>\n                      <div class=\"h4\">Angular Js</div>\n                      <p>JS</p>\n                    </figcaption>\n                  </figure></a></div>\n              <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\"><a href=\"#graphic-design\">\n                  <figure class=\"cc-effect\"><img src=\"assets/images/vue.jpg\" alt=\"Image\"/>\n                    <figcaption>\n                      <div class=\"h4\">Vue Js</div>\n                      <p>JS</p>\n                    </figcaption>\n                  </figure></a></div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\"><a href=\"#graphic-design\">\n                  <figure class=\"cc-effect\"><img src=\"assets/images/th.png\" alt=\"Image\"/>\n                    <figcaption>\n                      <div class=\"h4\">Thymeleaf</div>\n                      <p>Web Template Design</p>\n                    </figcaption>\n                  </figure></a></div>\n              <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\"><a href=\"#graphic-design\">\n                  <figure class=\"cc-effect\"><img src=\"assets/images/js.png\" alt=\"Image\"/>\n                    <figcaption>\n                      <div class=\"h4\">Javascript, JQuery, Bootstrap</div>\n                      <p>JS</p>\n                    </figcaption>\n                  </figure></a></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-pane\" id=\"Photography\" role=\"tabpanel\">\n        <div class=\"ml-auto mr-auto\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\"><a href=\"#Photography\">\n                  <figure class=\"cc-effect\"><img src=\"assets/images/maven.png\" alt=\"Image\"/>\n                    <figcaption>\n                      <div class=\"h4\">Maven, Gradle</div>\n                      <p>Other</p>\n                    </figcaption>\n                  </figure></a></div>\n              <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\"><a href=\"#Photography\">\n                  <figure class=\"cc-effect\"><img src=\"assets/images/linux.jpg\" alt=\"Image\"/>\n                    <figcaption>\n                      <div class=\"h4\">Linux</div>\n                      <p>Other</p>\n                    </figcaption>\n                  </figure></a></div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\"><a href=\"#Photography\">\n                  <figure class=\"cc-effect\"><img src=\"assets/images/docker.png\" alt=\"Image\"/>\n                    <figcaption>\n                      <div class=\"h4\">Docker</div>\n                      <p>Other</p>\n                    </figcaption>\n                  </figure></a></div>\n              <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\"><a href=\"#Photography\">\n                  <figure class=\"cc-effect\"><img src=\"assets/images/ggg.png\" alt=\"Image\"/>\n                    <figcaption>\n                      <div class=\"h4\">Google Cloud Plaform</div>\n                      <p>Other</p>\n                    </figcaption>\n                  </figure></a></div>\n                  <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\"><a href=\"#graphic-design\">\n                      <figure class=\"cc-effect\"><img src=\"assets/images/laravel.jpg\" alt=\"Image\"/>\n                        <figcaption>\n                          <div class=\"h4\">PHP</div>\n                          <p>Programing language</p>\n                        </figcaption>\n                </figure></a></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"section\" id=\"experience\">\n  <div class=\"container cc-experience\">\n    <div class=\"h4 text-center mb-4 title\">Experience</div>\n    <div class=\"card\">\n      <div class=\"row\">\n        <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body cc-experience-header\">\n            <p>2017 - Present</p>\n            <div class=\"h5\">JAVA</div>\n          </div>\n        </div>\n        <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body\">\n            <div class=\"h5\">Java Developer, Web Developer</div>\n            <p>Have knowledge about Java in order to develop enterprise web-based applications.</p>\n            <p>Experience with Java Core and Web service (RESTful).</p>\n            <p>Web-based technologies: Spring (Spring Core, Spring MVC, Spring boot) and ORM (JPA, Hibernate).</p>\n            <p>Have knowledge about with unit testing: JUnit, mock.</p>\n            <p>Experience with writing SQL queries.</p>\n            <p>Have knowledge about: HTML, CSS, JavaScript, AJAX etc.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"row\">\n        <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body cc-experience-header\">\n            <p>2017 - Present</p>\n            <div class=\"h5\">OTHER</div>\n          </div>\n        </div>\n        <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body\">\n            <div class=\"h5\">Java Developer, Web Develope</div>\n            <p>Have basic knowledge about PHP (Laravel Framework) to develop web-based applications.</p>\n            <p>Have knowledge about technologies: Angular Js, VueJs, Thymeleaf, JSF, Javascript, JQuery, Bootstrap.</p>\n            <p>Database technologies: Mysql, Postgres.</p>\n            <p>Have knowledge about with building and deploying with Maven, Gradle or servers Tomcat.</p>\n            <p>Have knowledge about Linux and basic docker.</p>\n            <p>Have a little knowledge about using cloud platforms (GCP).</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"section\" id=\"education\">\n  <div class=\"container cc-education\">\n    <div class=\"h4 text-center mb-4 title\">Education</div>\n    <div class=\"card\">\n      <div class=\"row\">\n        <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body cc-education-header\">\n            <p>2013 - 2017</p>\n            <div class=\"h5\">Information Technology at Can Tho University</div>\n          </div>\n        </div>\n        <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body\">\n            <div class=\"h5\">Information Technology at Can Tho University</div>\n            <p class=\"category\">CAN THO UNIVERSITY</p>\n            <p>My speciality is Information Technology at Can Tho University (K39).</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"section\" id=\"awards\">\n    <div class=\"container cc-education\">\n      <div class=\"h4 text-center mb-4 title\">Awards</div>\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body cc-education-header\">\n              <p>2017</p>\n              <div class=\"h5\">Java developer fresher</div>\n            </div>\n          </div>\n          <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Java developer fresher</div>\n              <p class=\"category\">FPT Software</p>\n              <p>Developer for Java fresher level B at FPT software (2017).</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n<footer class=\"footer\">\n  <div class=\"container text-center\"><a class=\"cc-facebook btn btn-link\" href=\"#\"><i class=\"fa fa-facebook fa-2x \" aria-hidden=\"true\"></i></a><a class=\"cc-twitter btn btn-link \" href=\"#\"><i class=\"fa fa-twitter fa-2x \" aria-hidden=\"true\"></i></a><a class=\"cc-google-plus btn btn-link\" href=\"#\"><i class=\"fa fa-google-plus fa-2x\" aria-hidden=\"true\"></i></a><a class=\"cc-instagram btn btn-link\" href=\"#\"><i class=\"fa fa-instagram fa-2x \" aria-hidden=\"true\"></i></a></div>\n  <div class=\"h4 title text-center\">Vo Le Minh Trung</div>\n  <div class=\"text-center text-muted\">\n    <p>&copy; My Resume. All rights reserved. 2020</p>\n  </div>\n</footer>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Vo Le Minh Trung';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["APP_BASE_HREF"], useValue: '/' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/asus/Documents/PROJECT/my-cv/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map