(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");







var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
                    }
                ])
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/list/list.page.html":
/*!*************************************!*\
  !*** ./src/app/list/list.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar no-border color=\"primary\">\n    <!-- <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> -->\n    <ion-title>\n      API Docs\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ng-container *ngIf=\"showparams !== 99999\">\n        <ion-button (click)=\"showparams = 99999\">\n          <ion-icon  mode=\"ios\" slot=\"start\" name=\"apps\"></ion-icon>\n        </ion-button>\n      </ng-container>\n      <ng-container *ngIf=\"showparams === 99999\">\n        <ion-button (click)=\"showparams = null\">\n          <ion-icon   mode=\"ios\" slot=\"start\" name=\"list\"></ion-icon>\n        </ion-button>\n      </ng-container>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"full\" color=\"medium\">\n    <ng-container *ngFor=\"let i of endpoints; let r = index;\" >\n      <ion-item (click)=\"showParams(i, r)\" class=\"__IN\" [ngClass]=\"{ 'active' : showparams === r && i.params.length > 0, 'pointer': i.params.length > 0 }\">\n        <ion-label color=\"dark\">\n          <p>\n            <ion-badge *ngIf=\"i.method === 'post'\" color=\"primary\" mode=\"md\">{{i.method}}</ion-badge>\n            <ion-badge *ngIf=\"i.method === 'put'\" color=\"warning\" mode=\"md\">{{i.method}}</ion-badge>\n            <ion-badge *ngIf=\"i.method === 'get'\" color=\"success\" mode=\"md\">{{i.method}}</ion-badge>\n            <ion-badge *ngIf=\"i.method === 'delete'\" color=\"danger\" mode=\"md\">{{i.method}}</ion-badge>\n            {{i.url}}\n          </p>\n          <p class=\"actions\">\n            <ion-badge *ngIf=\"i.fromAddon.name\" mode=\"ios\">{{i.fromAddon.name}}</ion-badge>&nbsp;&nbsp;\n            <ion-badge *ngIf=\"i.query\" mode=\"ios\">Query {{i.query.entity + '.' + i.query.id}}</ion-badge>&nbsp;&nbsp;\n            <ion-badge mode=\"ios\" *ngIf=\"i.controller\">{{i.controller + '.' + i.action}}</ion-badge>\n          </p>\n          <ng-container *ngIf=\"i.params.length > 0\">\n            <code *ngIf=\"showparams === r || showparams === 99999\" >\n              <h3>Params</h3>\n              <div>\n                <p>{{'{'}}</p>\n                <ng-container *ngFor=\"let p of i.params\">\n                  <p><strong>{{p.name}}:</strong> {{p.type}}</p>\n                </ng-container>\n                <p>{{'}'}}</p>\n              </div>\n            </code>\n          </ng-container>\n        </ion-label>\n        <div class=\"item-note auth\" slot=\"end\" *ngFor=\"let r of i.permissions\">\n          {{r}}\n        </div>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".actions ion-badge {\n  display: inline-block;\n  font-size: 10px;\n  padding: 5px 10px;\n  background-color: var(--ion-color-light);\n  border-radius: 50px;\n  color: var(--ion-color-dark);\n  font-weight: 300;\n  letter-spacing: 0px;\n  margin-top: 10px;\n  text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UZXJ0aXVzL0Ryb3Bib3gvZmlsZXMvZW1zcmFpbC9zd2FnZ2VyL3NyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb25zIHtcbiAgICBpb24tYmFkZ2Uge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_swagger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/swagger.service */ "./src/app/services/swagger.service.ts");



var ListPage = /** @class */ (function () {
    function ListPage(swagger) {
        this.swagger = swagger;
        this.endpoints = [];
        this.params = [];
        this.showparams = null;
    }
    ListPage.prototype.ngOnInit = function () {
        this.getSwagger();
    };
    ListPage.prototype.getSwagger = function () {
        var _this = this;
        this.swagger.getSwagger().then(function (d) {
            _this.endpoints = d;
        }).catch(function (e) {
            console.log(e);
        });
    };
    // add back when alpha.4 is out
    // navigate(item) {
    //   this.router.navigate(['/list', JSON.stringify(item)]);
    // }
    ListPage.prototype.showParams = function (p, index) {
        if (this.showparams === index) {
            this.showparams = null;
            this.params = [];
        }
        else {
            this.showparams = index;
            this.params = p.params;
        }
    };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.page.html */ "./src/app/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_swagger_service__WEBPACK_IMPORTED_MODULE_2__["SwaggerService"]])
    ], ListPage);
    return ListPage;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var API = 'http://localhost:8080/';
var ApiService = /** @class */ (function () {
    function ApiService(http, platform) {
        this.http = http;
        this.platform = platform;
        this.TOKEN = null;
    }
    ApiService.prototype.ngOnInit = function () {
    };
    ApiService.prototype.getHeaders = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var u, i, H_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.platform.is('cordova')) {
                    u = window.localStorage.getItem('User');
                    i = JSON.parse(u);
                    console.log(i);
                    H_1 = i.access_token;
                    setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var h;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', "Bearer " + H_1)];
                                case 1:
                                    h = _a.sent();
                                    return [4 /*yield*/, h];
                                case 2: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        });
    };
    ApiService.prototype.get = function (url, params, head) {
        return this.http.get("" + API + url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', "application/json") }).toPromise();
    };
    ApiService.prototype.post = function (url, params, head) {
        return this.http.post("" + API + url, params, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', "application/json") }).toPromise();
    };
    ApiService.prototype.put = function (url, params, head) {
        return this.http.put("" + API + url, params, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', "application/json") }).toPromise();
    };
    ApiService.prototype.delete = function (url, params, head) {
        // tslint:disable-next-line: max-line-length
        return this.http.delete("" + API + url + "?" + params, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', "application/json") }).toPromise();
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/swagger.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/swagger.service.ts ***!
  \*********************************************/
/*! exports provided: SwaggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerService", function() { return SwaggerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");



var SwaggerService = /** @class */ (function () {
    function SwaggerService(api) {
        this.api = api;
    }
    SwaggerService.prototype.getSwagger = function () {
        return this.api.get('api/swagger/docs', null);
    };
    SwaggerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SwaggerService);
    return SwaggerService;
}());



/***/ })

}]);
//# sourceMappingURL=list-list-module.js.map