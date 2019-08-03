(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["api-authentication-authentication-module"],{

/***/ "./src/app/api/authentication/authentication.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/api/authentication/authentication.module.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPageModule", function() { return AuthenticationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication.page */ "./src/app/api/authentication/authentication.page.ts");







var routes = [
    {
        path: '',
        component: _authentication_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationPage"]
    }
];
var AuthenticationPageModule = /** @class */ (function () {
    function AuthenticationPageModule() {
    }
    AuthenticationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_authentication_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationPage"]]
        })
    ], AuthenticationPageModule);
    return AuthenticationPageModule;
}());



/***/ }),

/***/ "./src/app/api/authentication/authentication.page.html":
/*!*************************************************************!*\
  !*** ./src/app/api/authentication/authentication.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar no-border color=\"primary\">\n    <ion-title>Bearer Token Usage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n   <div padding>\n    <h1>OAuth 2.0 Bearer Token Usage</h1>\n    <p>Bearer Tokens are the predominant type of access token used with OAuth 2.0.</p>\n    <p>A Bearer Token is an opaque string, not intended to have any meaning to clients using it. Some servers will issue tokens that are a short string of hexadecimal characters, while others may use structured tokens such as JSON Web Tokens.</p>\n    <hr/>\n    <p>Access tokens are the thing that applications use to make API requests on behalf of a user. The access token represents the authorization of a specific application to access specific parts of a user’s data.</p>\n    <code>\n      <h3>Headers</h3>\n      <div>\n        <p>{{'new HttpHeaders({'}}</p>\n        <p><strong>Authorization:</strong> Bearer `TOKEN`</p>\n        <p>{{'})'}}</p>\n      </div>\n    </code>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/api/authentication/authentication.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/api/authentication/authentication.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/api/authentication/authentication.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/api/authentication/authentication.page.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPage", function() { return AuthenticationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthenticationPage = /** @class */ (function () {
    function AuthenticationPage() {
    }
    AuthenticationPage.prototype.ngOnInit = function () {
    };
    AuthenticationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! ./authentication.page.html */ "./src/app/api/authentication/authentication.page.html"),
            styles: [__webpack_require__(/*! ./authentication.page.scss */ "./src/app/api/authentication/authentication.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthenticationPage);
    return AuthenticationPage;
}());



/***/ })

}]);
//# sourceMappingURL=api-authentication-authentication-module.js.map