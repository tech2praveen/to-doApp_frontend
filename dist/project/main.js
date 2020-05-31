(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./to-do/to-do.module": [
		"./src/app/to-do/to-do.module.ts",
		"to-do-to-do-module~user-user-module",
		"to-do-to-do-module"
	],
	"./user/user.module": [
		"./src/app/user/user.module.ts",
		"to-do-to-do-module~user-user-module",
		"user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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

module.exports = "\r\n<ng-snotify></ng-snotify>\r\n<router-outlet></router-outlet>\r\n"

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
        this.title = 'app';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _to_do_to_do_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./to-do/to-do.module */ "./src/app/to-do/to-do.module.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng_snotify__WEBPACK_IMPORTED_MODULE_7__["SnotifyModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"],
                _to_do_to_do_module__WEBPACK_IMPORTED_MODULE_6__["ToDoListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
                    { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
                    { path: '**', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
                    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
                    { path: 'signup', loadChildren: './user/user.module' },
                    { path: 'passwordReset/:resetToken', loadChildren: './user/user.module' },
                    { path: 'to-do', loadChildren: './to-do/to-do.module', pathMatch: 'full' }
                ])
            ],
            providers: [{ provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_7__["ToastDefaults"] },
                ng_snotify__WEBPACK_IMPORTED_MODULE_7__["SnotifyService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/list-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/list-service.service.ts ***!
  \*****************************************/
/*! exports provided: ListServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListServiceService", function() { return ListServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListServiceService = /** @class */ (function () {
    function ListServiceService(_http) {
        var _this = this;
        this._http = _http;
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authToken');
        //public url = "http://localhost:3000/api/v1/list";
        this.url = "http://api.to-doApp.tech2praveen.info/api/v1/list";
        this.getAllListOfUser = function (userId) {
            var details = {
                userId: userId
            };
            return _this._http.post(_this.url + "/getAll?authToken=" + _this.authToken, details);
        }; // end of  get all lists of user
        this.updateListUsingListId = function (details) {
            return _this._http.post(_this.url + "/updateList/id?authToken=" + _this.authToken, details);
        }; // end of update list using Id
        this.createNewList = function (details) {
            return _this._http.post(_this.url + "/create?authToken=" + _this.authToken, details);
        }; // end of create new list
        this.deleteList = function (details) {
            return _this._http.post(_this.url + "/delete?authToken=" + _this.authToken, details);
        }; // en of deleteList
        this.updateAllListsOfUser = function (details) {
            return _this._http.post(_this.url + "/update/allLists?authToken=" + _this.authToken, details);
        }; // end of update all list of user
        this.deleteAllListsOfUser = function (details) {
            return _this._http.post(_this.url + "/allList/delete?authToken=" + _this.authToken, details);
        }; // end of delete all lusts of user
    }
    ListServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListServiceService);
    return ListServiceService;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <img src=\"../../assets/404.gif\" style=\"width: 100%;height:100vh;\">"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/socket-service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/socket-service.service.ts ***!
  \*******************************************/
/*! exports provided: SocketServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketServiceService", function() { return SocketServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketServiceService = /** @class */ (function () {
    function SocketServiceService(http) {
        var _this = this;
        this.http = http;
        // public url = "http://localhost:3000"
        this.url = "http://api.to-doApp.tech2praveen.info";
        this.sendUserId = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('send-userId', function (data) {
                    observer.next(data);
                });
            });
        }; //  end of send urser Id
        this.check = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('change-made', function (data) {
                    observer.next(data);
                });
            });
        }; //  end of check
        this.refresh = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('refresh', function (data) {
                    observer.next(data);
                });
            });
        }; // end of refresh
        this.newFriend = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('newFriend', function (data) {
                    observer.next(data);
                });
            });
        }; // end of new friend
        this.rejectFriend = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('rejectFriend', function (data) {
                    observer.next(data);
                });
            });
        }; // end of new friend
        this.undoEvent = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('undoEvent', function (data) {
                    observer.next(data);
                });
            });
        }; // end of undoEvent
        // events to emit
        this.userId = function (id) {
            _this.socket.emit('userId', id);
        }; // end of userId
        this.newChange = function (data) {
            _this.socket.emit('newChange', data);
        }; //  end of new change
        this.frndRequestSent = function (data) {
            _this.socket.emit('frndRequestSent', data);
        }; //  end of friend request sent.
        this.requestAccepted = function (data) {
            _this.socket.emit('requestAccepted', data);
        }; //  end of request accepted
        this.sendMail = function (data) {
            _this.socket.emit('mail', data);
        };
        this.undo = function (id) {
            _this.socket.emit('undo', id);
        }; // end of undo
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.url);
    } // end of constructor
    SocketServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SocketServiceService);
    return SocketServiceService;
}());



/***/ }),

/***/ "./src/app/to-do/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/to-do/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (allUsers, filterVAlue) {
        return allUsers.filter(function (i) {
            return (((i.firstName + " " + i.lastName).toLowerCase()).includes(filterVAlue.toLowerCase()));
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/to-do/to-do.module.ts":
/*!***************************************!*\
  !*** ./src/app/to-do/to-do.module.ts ***!
  \***************************************/
/*! exports provided: ToDoListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoListModule", function() { return ToDoListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/to-do/todo-list/todo-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.module.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_selectize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-selectize */ "./node_modules/ng-selectize/index.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/to-do/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ToDoListModule = /** @class */ (function () {
    function ToDoListModule() {
    }
    ToDoListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderModule"],
                _ng_bootstrap_ng_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng_selectize__WEBPACK_IMPORTED_MODULE_9__["NgSelectizeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                    { path: 'to-do', component: _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"], pathMatch: 'full' },
                ])
            ],
            declarations: [_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"], _filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"]]
        })
    ], ToDoListModule);
    return ToDoListModule;
}());



/***/ }),

/***/ "./src/app/to-do/todo-list/todo-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/to-do/todo-list/todo-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 99999;\r\n    top: 10;\r\n    right: 0;\r\n   background-color:#eee;\r\n    overflow-x: hidden;\r\n    transition: 0.3s;\r\n    \r\n  }\r\n\r\n  .headerbtn{\r\n\r\n    margin-right: 5px;\r\n  }\r\n\r\n  .friendsdiv{\r\n    background: #f7f7f7;\r\n    border-radius: 8px;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    color: black;\r\n    padding: 0; \r\n  \r\n  }\r\n\r\n  .friendbtn{\r\n      \r\n    float: right;\r\n    margin-left: 5px;\r\n\r\n  }\r\n\r\n  .box{\r\n     \r\n    padding:30px 30px;\r\n    position: absolute;\r\n    width: 100%;\r\n    padding-top: 80px;\r\n \r\n  \r\n}\r\n\r\n  .fas-edit{\r\n  color:#007bff;margin-right: 10px;\r\n}\r\n\r\n  .box-part{\r\n    background:#FFF;\r\n    border-radius:0;\r\n    padding:30px 10px;\r\n    margin:20px 0px;\r\n}\r\n\r\n  .text{\r\n    margin:20px 0px;\r\n}\r\n\r\n  .card-body{\r\n  padding: 0.95rem;\r\n}\r\n\r\n  .card{\r\n  width: 100%\r\n}\r\n\r\n  .containerDiv {\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n  padding-top: 3%;\r\n  display : flex;\r\n flex-flow: row wrap;\r\n padding-bottom: 10%;\r\n \r\n justify-content: space-evenly;\r\n}\r\n\r\n  .containerDiv > div {\r\n \r\n  background: #ececec;\r\n  margin:5px;\r\n  min-width:350px;\r\n\r\n  /* flex: 1; */\r\n}\r\n\r\n  @media ( min-width: 768px ) and ( max-width: 992px ) {\r\n.containerDiv {\r\n  justify-content: flex-start;\r\n\r\n  \r\n}\r\n}\r\n\r\n  .flex-container {\r\n  display: flex;\r\n  background-color: #343a40;\r\n  height: 100%;\r\n  flex-grow: 1;\r\n  padding-top:50px; \r\n}\r\n\r\n  #right_column{\r\n\r\n  display:none;\r\n  background-color: #343a40;\r\n  width: 25%;\r\n   margin: 0px 5px 0px 5px;\r\n  \r\n}\r\n\r\n  #searchCol\r\n{\r\n  display:none;\r\n  background-color: #343a40;\r\n  width: 25%;\r\n   margin: 0px 5px 0px 5px;\r\n}\r\n\r\n  #left_column{\r\n  background-color: #eee;\r\n  width: 100%;\r\n\r\n}\r\n\r\n  .wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n\r\n  hr{\r\n  margin-top: 0rem;\r\n              margin-bottom: 0.5rem;\r\n              border: 0;\r\n              border-top: 1px solid white;\r\n}\r\n  \r\n  \r\n \r\n  \r\n "

/***/ }),

/***/ "./src/app/to-do/todo-list/todo-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/to-do/todo-list/todo-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      \r\n <div class=\"wrapper\">\r\n\r\n      <nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark\">\r\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n          </button>\r\n          <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\r\n            <a class=\"navbar-brand\" href=\"#\"> <img src='../../assets/todoicon.png' style=\"width:8%;margin-right: 4%\"/><h5 style=\"font-family: cursive;display: inline;\">To-Do App</h5></a>\r\n            <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n              \r\n            </ul>\r\n           \r\n          <button   class=\"btn btn-warning headerbtn\" (click)=\"newList()\">Create New</button>\r\n            \r\n          <button type=\"button\" (click)=\"showSections()\" class=\"btn btn-primary headerbtn\">\r\n              Friends <span *ngIf=\"loading\" class=\"badge badge-light\">{{this.currentUserDetails.friendReq.length}}</span>\r\n            </button>\r\n        <button  (click)=\"logout()\" type=\"button\" class=\"btn btn-danger headerbtn\">Logout</button>\r\n\r\n        \r\n          </div>\r\n        </nav>\r\n\r\n       \r\n        \r\n\r\n\r\n        <div class=\"flex-container\">    \r\n\r\n\r\n\r\n            <div id='searchCol' >\r\n\r\n                <div  class=\"container\" *ngIf=\"loading\" style=\"height: 100%;padding: 3px;\">\r\n      \r\n                <div class=\"row\" style=\"height: 100%;overflow: auto;\">\r\n                <div class=\"container\" >\r\n\r\n                    <h5 style=\"color:white;font-style: italic;\">{{currentUserDetails.firstName + \" \"+currentUserDetails.lastName}}<img src=\"../../assets/greendot.png\" style=\"width: 13px;\r\n                      margin-top: -5px;\r\n                      margin-left: 4px;\"/></h5>\r\n                      <hr/>\r\n                    <h5 style=\"color:white;font-style: italic;\">Users </h5>\r\n                  <input class=\"form-control\" placeholder=\"Search Users\" type=\"text\" [(ngModel)]=\"searchName\" />\r\n                        \r\n                        \r\n\r\n                    <ng-container *ngIf=\"( allUsers | filter : searchName ) as result\">\r\n                        <div *ngFor=\"let item of result\">\r\n\r\n\r\n                            <div class=\"container friendsdiv\"  *ngIf=\"userId!=item.userId\">\r\n  \r\n                                <div class=\"form-inline\" style=\"padding: 5px 0px\">\r\n                                    <p style=\"margin-left:5px;margin-bottom: 0px\">{{item.firstName + \" \"+item.lastName}}</p>\r\n                                    <button *ngIf='item.status==\"new\"' class=\"btn btn-primary btn-sm\" (click)=\"sendRequest(item)\" style=\"margin-left: 10px\">Send Request</button>\r\n                                    <p  *ngIf='item.status==\"sent\"' style=\"color: green;margin-left: 20px;margin-bottom: 0px;font-style: italic;\">Request Sent</p>\r\n                                    <p  *ngIf='item.status==\"done\"' style=\"color: green;margin-left: 20px;margin-bottom: 0px;font-style: italic;\">Friends</p>\r\n                                    <p  *ngIf='item.status==\"received\"' style=\"color: green;margin-left: 20px;margin-bottom: 0px;font-style: italic;\">Request Received</p>\r\n                                </div>\r\n                            </div>\r\n\r\n                          \r\n\r\n        \r\n\r\n                        \r\n                        </div>\r\n\r\n                        <h5  *ngIf=\"result.length === 0\"style=\"color:white;font-style: italic;\">No Users Found</h5>\r\n                      </ng-container>\r\n                    \r\n                </div>\r\n      \r\n                </div>\r\n            </div>\r\n            \r\n      \r\n          </div>\r\n          \r\n       \r\n        <div id=\"left_column\">\r\n\r\n      <div class=\"containerDiv\" *ngIf=\"loading\">\r\n\r\n        <div *ngFor=\"let each of allLists;\">\r\n\r\n       \r\n          <div class=\"card\" id=card_{{each.listId}}>\r\n\r\n              <div class=\"card-header\">\r\n\r\n                  <div class=\"d-flex align-items-center\">\r\n                      <h3 class=\"mr-auto\">{{each.listName}}</h3>\r\n                      <div class=\"btn-group\" role=\"group\">\r\n\r\n                          <i class=\"fas fa-undo\" (click)=\"undo(each.listId)\" style=\"margin-right: 10px;\"></i>   \r\n                          <i  class=\"fas fa-check-circle\" *ngIf=\"each.status\" (click)=\"markListcomplete(each,false)\"  style=\"color:#563d7c;margin-right: 10px;\"></i>\r\n                          <i  class=\"far fa-check-circle\" *ngIf=\"!each.status\"  (click)=\"markListcomplete(each,true)\" style=\"color:#563d7c;margin-right: 10px;\"></i>\r\n                          <i class=\"fas fa-trash\" (click)=\"deleteList(each.listId)\"  style=\"color:#dc3545;margin-right: 10px;\"></i>\r\n                          <i class=\"fas fa-edit\" style=\"color:#007bff;margin-right: 10px;\" (click)=\"processList('edit_-_'+each.listId,each.cards,each.listName);\"></i>\r\n                          <i class=\"fas fa-plus\"  style=\"color:green;\" (click)=\"processList('add_-_'+each.listId,each.cards,null);\"></i>\r\n                         \r\n                      \r\n                      </div>\r\n                    </div>\r\n              \r\n                    \r\n                </div>\r\n\r\n              <div class=\"card-body\" >\r\n                 <div class=\"card-text\">\r\n\r\n                 <div id=\"{{each.listId}}\" class=\"cardData\" [innerHTML]=\"addhtml(each.cards)\"></div>\r\n\r\n                  <p *ngIf=\"each.collabrators && each.collabrators.length!=0\" style=\"margin: 0;color: #5720ff;\">Collabrators:</p>\r\n                    <div *ngFor=\"let collab of each.collabrators\">\r\n                        <div *ngFor=\"let user of allUsers\">\r\n                         <p style=\"margin: 0;\" *ngIf=\"collab==user.userId && collab!=userId\"> {{user.firstName +\" \" + user.lastName}}</p>\r\n                         </div>\r\n                         </div>\r\n\r\n                        </div>\r\n                 \r\n            \r\n            </div>\r\n         \r\n              \r\n        </div>\r\n\r\n        </div>\r\n\r\n\r\n       \r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n      <div id=\"right_column\">\r\n\r\n          <div  class=\"container\" *ngIf=\"loading\" style=\"height: 100%;padding: 3px;\">\r\n\r\n          <div class=\"row\" style=\"height: 50%;overflow: auto;\">\r\n          <div class=\"container\" >\r\n              <h5 style=\"color:white;font-style: italic;\">Friends</h5>\r\n              <hr />\r\n\r\n              <h5  *ngIf=\"currentUserDetails.friendList.length==0\" style=\"color:white;font-style: italic;\">No Friends added.</h5>\r\n             \r\n              <div *ngFor=\"let each of currentUserDetails.friendList\" >\r\n                <div class=\"container friendsdiv\" >\r\n  \r\n                    <div class=\"form-inline\" style=\"padding: 5px 0px\">\r\n                        <p style=\"margin-left:5px;margin-bottom: 0px\">  {{each.fromName}} </p>\r\n                        </div>\r\n                </div>\r\n\r\n            </div>\r\n            \r\n          </div>\r\n\r\n          </div>\r\n\r\n     \r\n          <div class=\"row\" style=\"height: 50%;overflow: auto\"> \r\n\r\n         <div class=\"container\">\r\n            <h5 style=\"color:white;font-style: italic;\" >Friend Requests</h5>\r\n          <hr/>\r\n            \r\n            <h5  *ngIf=\"currentUserDetails.friendReq.length==0\" style=\"color:white;font-style: italic;\">No Friends Requests.</h5>\r\n\r\n\r\n        \r\n            <div *ngFor=\"let each of currentUserDetails.friendReq\" >\r\n                <div class=\"container friendsdiv\" >\r\n  \r\n                    <div class=\"form-inline\" style=\"padding: 5px 0px\">\r\n                        <p style=\"margin-left:5px;margin-bottom: 0px\">  {{each.fromName}} </p>\r\n                        <button class=\"btn btn-danger btn-sm\" (click)=\"rejectRequest(each.fromUserId)\" style=\"margin-left: 10px\"><i class=\"fas fa-times\" style=\"width:15px;\"></i></button>\r\n                        <button class=\"btn btn-success btn-sm\" (click)=\"acceptRequest(each.fromUserId)\" style=\"margin-left: 10px\"><i class=\"fas fa-check\" style=\"width:15px;\"></i></button>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n          \r\n        </div>\r\n\r\n     \r\n\r\n      </div>\r\n\r\n      </div>\r\n      \r\n\r\n    </div>\r\n\r\n   \r\n         \r\n        </div>\r\n      \r\n\r\n      \r\n     \r\n\r\n      </div>\r\n\r\n\r\n        <ng-template #modalContent let-close=\"close\">\r\n            <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                      <h5 class=\"modal-title\">Create New Todo List</h5>\r\n                      <button type=\"button\" (click)=\"closeModal()\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                          <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                       </div>\r\n          \r\n                       <div class=\"modal-body\">\r\n                         <div>\r\n                         <input class=\"form-control\" [(ngModel)]=\"newListName\" placeholder=\"Enter Title\">\r\n                        </div>\r\n                        <div style=\"margin-top: 20px;\">\r\n                         <ng-selectize [config]=\"config\" [options] = \"collabData\" [(ngModel)]=\"collabVal\" placeholder=\"Select Collabrators/Friends\" ></ng-selectize>\r\n                        </div>\r\n                       </div>\r\n                       <div class=\"modal-footer\">\r\n                          <button type=\"button\" (click)=\"saveNew()\" class=\"btn btn-primary\">Create</button>\r\n                       </div>\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template #modalContent2 let-close=\"close\">\r\n              <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\">Add/Edit Item</h5>\r\n                        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                          </button>\r\n                         </div>\r\n            \r\n                         <div class=\"modal-body\">\r\n                           <input class=\"form-control\" required   (keyup) =\"saveUpdatedListkey($event)\"  [(ngModel)]=\"currentItemValue\" placeholder=\"Enter Title\">\r\n                           \r\n                        \r\n                         </div>\r\n                         <div class=\"modal-footer\">\r\n                            <button type=\"button\" (click)=\"saveUpdatedList()\" class=\"btn btn-primary\">Save</button>\r\n                         </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n\r\n            <ng-template #modalContent1 let-close=\"close\">\r\n                <div class=\"modal-content\">\r\n                      <div class=\"modal-header\">\r\n                          <h5 class=\"modal-title\">Add/Edit Item</h5>\r\n                          <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                              <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                           </div>\r\n              \r\n                           <div class=\"modal-body\">\r\n                             <input class=\"form-control\" (keyup) = \"saveUpdatedCardKey($event)\" [(ngModel)]=\"currentItemValue\" placeholder=\"Enter Title\">\r\n                           </div>\r\n                           <div class=\"modal-footer\">\r\n                              <button type=\"button\" (click)=\"saveUpdatedCard()\" class=\"btn btn-primary\">Save</button>\r\n                           </div>\r\n                </div>\r\n              </ng-template>\r\n\r\n\r\n       \r\n          \r\n        \r\n\r\n\r\n      \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/to-do/todo-list/todo-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/to-do/todo-list/todo-list.component.ts ***!
  \********************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../list-service.service */ "./src/app/list-service.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.module.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _socket_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../socket-service.service */ "./src/app/socket-service.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var shortid = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");







var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(snotifyService, userService, el, listService, router, _router, modal, socketService) {
        var _this = this;
        this.snotifyService = snotifyService;
        this.userService = userService;
        this.el = el;
        this.listService = listService;
        this.router = router;
        this._router = _router;
        this.modal = modal;
        this.socketService = socketService;
        this.collabVal = null;
        this.currentItemValue = null;
        this.currentItem = null;
        this.currentList = null;
        this.loading = false;
        this.allUsers = [];
        this.selectedUiList = null;
        this.searchName = '';
        this.modalReference = null;
        this.notificationData = null;
        //Method to get all the users of the application
        this.getAllUsers = function () {
            var details = {
                userId: _this.userId
            };
            _this.userService.getAllUsers(details).subscribe(function (response) {
                // console.log(response);
                if (response.status == 200) {
                    _this.allUsers = response.data;
                    console.log(_this.allUsers);
                    for (var _i = 0, _a = _this.currentUserDetails.friendReq; _i < _a.length; _i++) {
                        var each = _a[_i];
                        for (var _b = 0, _c = _this.allUsers; _b < _c.length; _b++) {
                            var ind = _c[_b];
                            if (each.fromUserId == ind.userId) {
                                console.log(ind);
                                _this.allUsers[_this.allUsers.indexOf(ind)].status = 'received';
                            }
                        }
                    }
                    for (var _d = 0, _e = _this.currentUserDetails.friendList; _d < _e.length; _d++) {
                        var each = _e[_d];
                        for (var _f = 0, _g = _this.allUsers; _f < _g.length; _f++) {
                            var ind = _g[_f];
                            if (each.fromUserId == ind.userId) {
                                console.log(ind);
                                _this.allUsers[_this.allUsers.indexOf(ind)].status = 'done';
                            }
                        }
                    }
                }
                else if (response.status == 404 || response.status == 500) {
                    _this.snotifyService.create({
                        title: "Error Occured",
                        body: "Something went wrong.Please login again.",
                        config: {
                            position: ng_snotify__WEBPACK_IMPORTED_MODULE_6__["SnotifyPosition"].centerTop,
                            type: 'error'
                        }
                    });
                }
            });
        }; // end of get all users method
        //Method to send userId to socket for registering the user
        this.register = function () {
            _this.socketService.sendUserId().subscribe(function (data) {
                _this.socketService.userId(_this.userId);
            });
        }; //  end of register method
        this.checkForChanges = function () {
            _this.socketService.check().subscribe(function (data) {
                _this.changeInfo = data.content.info;
                _this.snotifyService.success(data.content.info, {
                    timeout: 5000,
                    showProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true
                });
                _this.getAllLists();
            });
        }; // end of check for change method
        //end of parseNode method
        //Method to Delete list
        this.deleteList = function (listId) {
            var details = {
                listId: listId
            };
            for (var _i = 0, _a = _this.allLists; _i < _a.length; _i++) {
                var each = _a[_i];
                if (each.listId == details.listId)
                    _this.notificationData = {
                        sender: _this.userId,
                        collabrators: each.collabrators,
                        content: {
                            info: "List \"" + each.listName + "\" deleted by " + _this.currentUserDetails.firstName + " " + _this.currentUserDetails.lastName + "."
                        }
                    };
            }
            _this.listService.deleteList(details).subscribe(function (response) {
                if (response.status == 200) {
                    _this.getAllLists();
                    // alert('list deleted successfully');
                    _this.socketService.newChange(_this.notificationData);
                } // end
            });
        };
        //end of deleteList method
        //Method to check if user have authentication
        this.checkauth = function () {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get('authToken') == '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get('authToken') == null || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get('authToken') == undefined || (!ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get('authToken'))) {
                _this.router.navigate(['/login']);
            }
        };
        //end of checkauth method
        //Method to get current user information
        this.getCurrentUserInfo = function () {
            var details = {
                userId: _this.userId
            };
            _this.userService.getUserDetails(details).subscribe(function (response) {
                //debugger;
                _this.loading = true;
                console.log(response);
                if (response.status == 200) {
                    _this.currentUserDetails = response.data[0];
                }
            });
        }; //  end of getCurrentUserInfo method
        //Method to get all the list of the user
        this.getAllLists = function () {
            _this.listService.getAllListOfUser(_this.userId).subscribe(function (response) {
                console.log(response.status);
                if (response.status == 200) {
                    _this.allLists = response.data;
                    console.log(_this.allLists);
                }
                else if (response.status == 500) {
                    _this.logout();
                }
            });
        }; // end of getAllLists metod
        //end of closeModal method
        //Method to create new List
        this.newList = function () {
            _this.config = {
                labelField: 'label',
                valueField: 'value',
                maxItems: 10,
                highlight: true,
                create: false,
            };
            var currentUserDetails = _this.currentUserDetails;
            _this.collabData = [];
            for (var _i = 0, _a = currentUserDetails.friendList; _i < _a.length; _i++) {
                var each = _a[_i];
                _this.collabData.push({ 'label': each.fromName, 'value': each.fromUserId });
            }
            _this.modalReference = _this.modal.open(_this.modalContent);
        }; // end of newList method
        this.saveNew = function () {
            if (_this.collabVal != null) {
                _this.collabVal.push(_this.userId);
            }
            var details = {
                userId: _this.userId,
                listName: _this.newListName,
                cards: [],
                cardsHistory: { card: [], listStatus: [] },
                collabrators: _this.collabVal
            };
            _this.listService.createNewList(details).subscribe(function (response) {
                if (response.status == 200) {
                    // alert('new list create')
                    _this.snotifyService.success('New List created');
                    _this.closeModal();
                    _this.notificationData = {
                        sender: _this.userId,
                        collabrators: _this.collabVal,
                        content: {
                            info: "New List \"" + _this.newListName + "\" added by " + _this.currentUserDetails.firstName + " " + _this.currentUserDetails.lastName + " with you as collabrator."
                        }
                    };
                    _this.getAllLists();
                    _this.socketService.newChange(_this.notificationData);
                }
            });
            _this.newListName = '';
        }; //  end of saveNew method
        //Method to handle keydown event on card modal
        this.saveUpdatedCardKey = function (event) {
            console.log(event);
            if (event.keyCode == 13) {
                _this.saveUpdatedCard();
            }
        }; //  end of saveUpdatedCardKey method
        //Method to handle keydown event on list modal
        this.saveUpdatedListkey = function (event) {
            console.log(event);
            if (event.keyCode == 13) {
                _this.saveUpdatedList();
            }
        }; //  end of saveUpdatedListkey method
        //Method to send friend request
        this.sendRequest = function (data) {
            _this.searchResult = data;
            if (_this.currentUserDetails.userId == _this.searchResult.userId) {
                _this.snotifyService.error('You cannot send a friend request to yourself');
            }
            else {
                var details_1 = {
                    userId: _this.searchResult.userId,
                    fromUserId: _this.currentUserDetails.userId,
                    fromName: _this.currentUserDetails.firstName + ' ' + _this.currentUserDetails.lastName,
                    fromEmail: _this.currentUserDetails.email
                };
                _this.userService.sendFrndRequest(details_1).subscribe(function (response) {
                    if (response.status == 200) {
                        _this.snotifyService.success('Friend request sent');
                        _this.socketService.frndRequestSent(details_1.userId);
                        _this.getCurrentUserInfo();
                        _this.getAllUsers();
                    }
                });
            }
        }; // end of sendRequest
        //Method to accept friend request
        this.acceptRequest = function (id) {
            var details = {
                userId: _this.userId,
                fromUserId: id
            };
            console.log(details);
            _this.userService.acceptReq(details).subscribe(function (response) {
                if (response.status == 200) {
                    // alert('user moved');
                    _this.getCurrentUserInfo();
                    _this.getAllUsers();
                    var data = {
                        id: details.fromUserId,
                        name: _this.currentUserDetails.firstName + ' ' + _this.currentUserDetails.lastName
                    };
                    _this.socketService.requestAccepted(data);
                }
            });
        }; //  end of acceptRequest
        //Method to reject friend request
        this.rejectRequest = function (id) {
            var details = {
                userId: _this.userId,
                fromUserId: id
            };
            console.log(details);
            _this.userService.rejectUser(details).subscribe(function (response) {
                if (response.status == 200) {
                    // alert('user moved');
                    _this.getCurrentUserInfo();
                    _this.getAllUsers();
                    var data = {
                        id: details.fromUserId,
                        name: _this.currentUserDetails.firstName + ' ' + _this.currentUserDetails.lastName
                    };
                    _this.socketService.requestAccepted(data);
                }
            });
        }; //  end of rejectRequest
        //Method to check if any new friend request
        this.refresh = function () {
            _this.socketService.refresh().subscribe(function (data) {
                _this.getCurrentUserInfo();
                _this.getAllUsers();
                _this.snotifyService.create({
                    title: "request",
                    body: 'new friend request',
                    config: {
                        position: ng_snotify__WEBPACK_IMPORTED_MODULE_6__["SnotifyPosition"].centerTop,
                        type: 'success'
                    }
                });
            });
        }; //  end of refresh
        //Method to check if any Friend Request accepted
        this.newFriendNotification = function () {
            _this.socketService.newFriend().subscribe(function (data) {
                _this.getCurrentUserInfo();
                _this.getAllUsers();
                _this.snotifyService.create({
                    title: "Friend Request",
                    body: "Friend Request accepted by " + data.name,
                    config: {
                        position: ng_snotify__WEBPACK_IMPORTED_MODULE_6__["SnotifyPosition"].centerTop,
                        type: 'info'
                    }
                });
            });
        }; //  end of newFriendNotification
        //Method to check if any Friend Request rejected
        this.requestRejectNotification = function () {
            _this.socketService.rejectFriend().subscribe(function (data) {
                _this.getCurrentUserInfo();
                _this.getAllUsers();
                // this.snotifyService.info(`Friend request accepted by ${data.name}`);
                _this.snotifyService.create({
                    title: "Friend Request",
                    body: "Friend Request Rejected by " + data.name,
                    config: {
                        position: ng_snotify__WEBPACK_IMPORTED_MODULE_6__["SnotifyPosition"].centerTop,
                        type: 'info'
                    }
                });
            });
        }; //  end of requestRejectNotification
        //Method to logout of application
        this.logout = function () {
            _this.userService.deleteLocalStorage();
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].delete('authToken');
            _this.router.navigate(['/home']);
        };
        // end of logout
        //Method to show/hide friends section 
        this.showSections = function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_8__('#right_column')[0].style.display != "block") {
                jquery__WEBPACK_IMPORTED_MODULE_8__('#right_column')[0].style.display = "block";
                jquery__WEBPACK_IMPORTED_MODULE_8__('#searchCol')[0].style.display = "block";
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_8__('#right_column')[0].style.display = "none";
                jquery__WEBPACK_IMPORTED_MODULE_8__('#searchCol')[0].style.display = "none";
            }
        };
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.userService.getUserInfoInLocalStorage().userId;
        this.checkauth();
        this.getCurrentUserInfo();
        this.register();
        this.getAllUsers();
        this.getAllLists();
        this.checkForChanges();
        this.refresh();
        this.newFriendNotification();
        this.requestRejectNotification();
        //Handles Ctrl+Z on keyboard for undo action
        document.onkeydown = function (event) {
            if (event.keyCode == 90 && event.ctrlKey) {
                if (_this.selectedUiList != null) {
                    _this.undo(_this.selectedUiList);
                }
                else {
                    _this.snotifyService.info('Please select the List.');
                }
            }
        };
        //Handles Click event on cards and items added
        document.onclick = function (event) {
            var targetId = event.target.className;
            var selectedCard = jquery__WEBPACK_IMPORTED_MODULE_8__(event.target).closest('.card')[0];
            if (selectedCard != undefined && selectedCard.id.includes('card_')) {
                if (_this.selectedUiList != null) {
                    jquery__WEBPACK_IMPORTED_MODULE_8__('#card_' + _this.selectedUiList).css('border', '1px solid rgba(0,0,0,.125)');
                }
                _this.selectedUiList = selectedCard.id.split('card_')[1];
            }
            if (targetId.includes('node_')) {
                var currentlistId = jquery__WEBPACK_IMPORTED_MODULE_8__(event.target).closest('div')[0].id;
                _this.currentItem = targetId;
                _this.currentList = currentlistId;
                if (!targetId.includes('fa-trash') && !targetId.includes('fa-check-circle')) {
                    if (targetId.includes('fa-edit')) {
                        if (jquery__WEBPACK_IMPORTED_MODULE_8__(event.target)[0].title) {
                            _this.currentItemValue = jquery__WEBPACK_IMPORTED_MODULE_8__(event.target)[0].title;
                        }
                    }
                    else {
                        _this.currentItemValue = null;
                    }
                    _this.modalReference = _this.modal.open(_this.modalContent2);
                }
                else {
                    _this.saveUpdatedList();
                }
            }
        };
    };
    //Used to add innerHTML for cards .i.e List,items
    TodoListComponent.prototype.addhtml = function (cards) {
        var htmlObj = this.parseNodes(cards);
        var trashEle = jquery__WEBPACK_IMPORTED_MODULE_8__('.fa-trash');
        for (var ind = 0; ind < trashEle.length; ind++) {
            trashEle[ind].style.color = '#dc3545';
            trashEle[ind].style.cursor = 'pointer';
        }
        var editEle = jquery__WEBPACK_IMPORTED_MODULE_8__('.fa-edit');
        for (var ind = 0; ind < editEle.length; ind++) {
            editEle[ind].style.color = '#007bff';
            editEle[ind].style.cursor = 'pointer';
        }
        var addEle = jquery__WEBPACK_IMPORTED_MODULE_8__('.fa-plus');
        for (var ind = 0; ind < addEle.length; ind++) {
            addEle[ind].style.color = 'green';
            addEle[ind].style.cursor = 'pointer';
        }
        var checkEle = jquery__WEBPACK_IMPORTED_MODULE_8__('.far.fa-check-circle');
        for (var ind = 0; ind < checkEle.length; ind++) {
            checkEle[ind].style.color = 'orange';
            checkEle[ind].style.cursor = 'pointer';
        }
        var checkEle1 = jquery__WEBPACK_IMPORTED_MODULE_8__('.fas.fa-check-circle');
        for (var ind = 0; ind < checkEle1.length; ind++) {
            checkEle1[ind].style.color = 'green';
            checkEle1[ind].style.cursor = 'pointer';
        }
        jquery__WEBPACK_IMPORTED_MODULE_8__('.cardData').css('font-size', '18px');
        jquery__WEBPACK_IMPORTED_MODULE_8__('.cardData').css('font-family', 'cursive');
        if (this.selectedUiList != null) {
            jquery__WEBPACK_IMPORTED_MODULE_8__('#card_' + this.selectedUiList).css('border', '2px solid black');
        }
        return htmlObj.outerHTML;
    }; //end of addHtml function
    //Method to open modal for add/edit list 
    TodoListComponent.prototype.processList = function (listId, cards, cardTitle) {
        this.currentList = listId;
        this.currentItemValue = cardTitle;
        this.modalReference = this.modal.open(this.modalContent1);
    };
    //End of processList method
    //Method to perform changes of particular card
    TodoListComponent.prototype.saveUpdatedCard = function () {
        var currentListArr = this.currentList.split('_-_');
        if (this.modalReference != null && (currentListArr[0] == 'add') || currentListArr[0] == 'edit') {
            if (this.currentItemValue == null || this.currentItemValue == "") {
                this.snotifyService.info('Title cannot be empty');
                return;
            }
            this.closeModal();
        }
        for (var _i = 0, _a = this.allLists; _i < _a.length; _i++) {
            var each = _a[_i];
            console.log(each);
            if (each.listId == currentListArr[1]) {
                if (currentListArr[0] == 'add') {
                    each.cards.push({
                        children: [],
                        id: shortid.generate(),
                        status: false,
                        title: this.currentItemValue
                    });
                    this.notificationData = {
                        sender: this.userId,
                        collabrators: each.collabrators,
                        content: {
                            info: "New List Item \"" + this.currentItemValue + "\" added by " + this.currentUserDetails.firstName + " " + this.currentUserDetails.lastName
                        }
                    };
                }
                else if (currentListArr[0] == 'edit') {
                    this.notificationData = {
                        sender: this.userId,
                        collabrators: each.collabrators,
                        content: {
                            info: "List title changed from \"" + each.listName + "\" to \"" + this.currentItemValue + "\" by " + this.currentUserDetails.firstName + " " + this.currentUserDetails.lastName + "."
                        }
                    };
                    each.listName = this.currentItemValue;
                }
                this.updateList(each.listId, each.cards, each.listName);
                this.currentItemValue = null;
            }
        }
    };
    //End of saveUpdatedCard method
    //Method to perform undo action on card
    TodoListComponent.prototype.undo = function (listId) {
        var _this = this;
        for (var _i = 0, _a = this.allLists; _i < _a.length; _i++) {
            var list = _a[_i];
            if (list.listId == listId) {
                list.cardsHistory.card.pop();
                list.cardsHistory.listStatus.pop();
                if (list.cardsHistory.card.length == 0) {
                    this.snotifyService.error('No History found.');
                }
                else {
                    var index = list.cardsHistory.card.length - 1;
                    var index1 = list.cardsHistory.listStatus.length - 1;
                    list.cards = list.cardsHistory.card[index];
                    list.status = list.cardsHistory.listStatus[index1];
                    console.log(list);
                    this.notificationData = {
                        sender: this.userId,
                        collabrators: list.collabrators,
                        content: {
                            info: "Changes for list \"" + list.listName + "\" reverted by " + this.currentUserDetails.firstName + " " + this.currentUserDetails.lastName
                        }
                    };
                    this.listService.updateListUsingListId(list).subscribe(function (response) {
                        if (response.status == 200) {
                            _this.socketService.newChange(_this.notificationData);
                            _this.getAllLists();
                        }
                    });
                }
            }
        }
    };
    //End of undo method
    //Method to perform changes of particular list
    TodoListComponent.prototype.updateList = function (listId, cards, title) {
        var _this = this;
        for (var _i = 0, _a = this.allLists; _i < _a.length; _i++) {
            var list = _a[_i];
            if (list.listId == listId) {
                list.cards = cards;
                list.cardsHistory.card.push(cards);
                list.cardsHistory.listStatus.push(list.status);
                list.title = title;
                this.listService.updateListUsingListId(list).subscribe(function (response) {
                    if (response.status == 200) {
                        // alert('list updated successfully');
                        // debugger;
                        _this.socketService.newChange(_this.notificationData);
                        _this.getAllLists();
                        //end
                    }
                    // event.target.value=''
                    //this.showAdd(this.addCardEvent);
                });
            }
        }
    };
    //End of updateList method
    //method to mark list as open/closed
    TodoListComponent.prototype.markListcomplete = function (each, status) {
        each.status = status;
        recurse(each.cards);
        function recurse(obj) {
            for (var key in obj) {
                var item = obj[key];
                if (typeof item === "object")
                    recurse(item);
                else {
                    console.log(key, item);
                    if (key == 'status') {
                        obj[key] = status;
                    }
                }
            }
        }
        if (status) {
            this.notificationData = {
                sender: this.userId,
                collabrators: each.collabrators,
                content: {
                    info: "List \"" + each.listName + "\" marked as closed by " + this.currentUserDetails.firstName + " " + this.currentUserDetails.lastName + "."
                }
            };
        }
        else {
            this.notificationData = {
                sender: this.userId,
                collabrators: each.collabrators,
                content: {
                    info: "List \"" + each.listName + "\" marked as open by " + this.currentUserDetails.firstName + " " + this.currentUserDetails.lastName + "."
                }
            };
        }
        this.updateList(each.listId, each.cards, each.listName);
    };
    //Method to update the List
    TodoListComponent.prototype.saveUpdatedList = function () {
        var itemArr = this.currentItem;
        var listId = this.currentList;
        var notifUserId = this.userId;
        var notifUserDetails = this.currentUserDetails;
        var notificationData = this.notificationData;
        var currentItemValue = this.currentItemValue;
        console.log(itemArr);
        var itemId = itemArr.replace(/  +/g, ' ').split(' ')[2].split('node_')[1];
        var itemClass = itemArr.replace(/  +/g, ' ').split(' ')[1];
        console.log(itemClass);
        if (this.modalReference != null && itemClass == 'fa-plus') {
            if (this.currentItemValue == null || this.currentItemValue == "") {
                this.snotifyService.info('Title cannot be empty');
                return;
            }
            this.closeModal();
        }
        console.log(itemId);
        var listName = '';
        var collabrators;
        for (var _i = 0, _a = this.allLists; _i < _a.length; _i++) {
            var each = _a[_i];
            console.log(each);
            if (each.listId == listId) {
                listName = each.listName;
                collabrators = each.collabrators;
                if (itemClass == 'fa-trash') {
                    for (var ind in each.cards) {
                        if (each.cards[ind].id == itemId) {
                            notificationData = {
                                sender: notifUserId,
                                collabrators: collabrators,
                                content: {
                                    info: "Item \"" + each.cards[ind].title + "\" of List \"" + listName + "\" deleted by " + notifUserDetails.firstName + " " + notifUserDetails.lastName + "."
                                }
                            };
                            each.cards.splice(ind, 1);
                        }
                        else {
                            notificationData = {
                                sender: notifUserId,
                                collabrators: collabrators,
                                content: {
                                    info: "SubItems from List\" " + listName + "\" deleted by " + notifUserDetails.firstName + " " + notifUserDetails.lastName + "."
                                }
                            };
                            removeFromTree(each.cards[ind], itemId);
                        }
                    }
                }
                else if (itemClass == 'fa-check-circle') {
                    markComplete(each.cards);
                }
                else {
                    recurse(each.cards);
                }
                this.notificationData = notificationData;
                this.updateList(listId, each.cards, listName);
                this.currentItemValue = null;
            }
        }
        function recurse(obj) {
            for (var key in obj) {
                var item = obj[key];
                if (typeof item === "object")
                    recurse(item);
                else {
                    if (item == itemId) {
                        //console.log(itemArr[1]);
                        if (itemClass == 'fa-plus') {
                            obj.children.push({
                                children: [],
                                id: shortid.generate(),
                                status: false,
                                title: currentItemValue
                            });
                            notificationData = {
                                sender: notifUserId,
                                collabrators: collabrators,
                                content: {
                                    info: "New Child Item \"" + currentItemValue + "\"  added to \"" + listName + "\" by " + notifUserDetails.firstName + " " + notifUserDetails.lastName + "."
                                }
                            };
                        }
                        else if (itemClass == 'fa-edit') {
                            console.log(obj);
                            notificationData = {
                                sender: notifUserId,
                                collabrators: collabrators,
                                content: {
                                    info: "Child Item title of List \"" + listName + "\" changed from \"" + obj.title + "\" to " + currentItemValue + "\" by " + notifUserDetails.firstName + " " + notifUserDetails.lastName + "."
                                }
                            };
                            obj.title = currentItemValue;
                        }
                    }
                }
            }
        }
        function markComplete(obj) {
            for (var key in obj) {
                var item = obj[key];
                if (typeof item === "object")
                    markComplete(item);
                else {
                    if (item == itemId) {
                        markCheck(obj, !obj.status);
                        if (!obj.status) {
                            notificationData = {
                                sender: notifUserId,
                                collabrators: collabrators,
                                content: {
                                    info: "Item \"" + obj.title + "\" marked as open by " + notifUserDetails.firstName + " " + notifUserDetails.lastName + "."
                                }
                            };
                        }
                        else {
                            notificationData = {
                                sender: notifUserId,
                                collabrators: collabrators,
                                content: {
                                    info: "Item \"" + obj.title + "\" marked as closed by " + notifUserDetails.firstName + " " + notifUserDetails.lastName + "."
                                }
                            };
                        }
                    }
                }
            }
        }
        function markCheck(obj, status) {
            for (var key in obj) {
                var item = obj[key];
                if (typeof item === "object")
                    markCheck(item, status);
                else {
                    obj.status = status;
                }
            }
        }
        function removeFromTree(parent, childNameToRemove) {
            parent.children = parent.children
                .filter(function (child) { return child.id !== childNameToRemove; })
                .map(function (child) { return removeFromTree(child, childNameToRemove); });
            return parent;
        }
    };
    //end of saveUpdatedList method
    //Method to create tree structure using UL tags
    TodoListComponent.prototype.parseNodes = function (nodes) {
        var ol = document.createElement("UL");
        ol.className = "list-group list-group-flush";
        for (var i = 0; i < nodes.length; i++) {
            ol.appendChild(this.parseNode(nodes[i]));
        }
        return ol;
    };
    //end of parseNodes method
    //Method to create tree structure, submethod of parseNodes that creates LI tag
    TodoListComponent.prototype.parseNode = function (node) {
        var li = document.createElement("LI");
        li.innerHTML += node.title;
        if (node.status) {
            li.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style=\"cursor: pointer;\"  class=\"fas fa-check-circle node_" + node.id + "\" ></i>";
        }
        else {
            li.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style=\"cursor: pointer;\"  class=\"far fa-check-circle node_" + node.id + "\" ></i>";
        }
        li.innerHTML += "&nbsp;&nbsp;&nbsp;<i style=\"cursor: pointer;\"  class=\"fas fa-trash node_" + node.id + "\" ></i>";
        li.innerHTML += "&nbsp;&nbsp;&nbsp;<i style=\"cursor: pointer;\" title=" + node.title + " class=\"fas fa-edit node_" + node.id + "\" ></i>";
        li.innerHTML += "&nbsp;&nbsp;&nbsp;<i  style=\"cursor: pointer;\" class=\"fas fa-plus node_" + node.id + "\" ></i>&nbsp;&nbsp;&nbsp;";
        li.setAttribute('id', node.id);
        li.className = "list-group-item";
        if (node.children) {
            li.appendChild(this.parseNodes(node.children));
        }
        return li;
    };
    //Method to close the modal
    TodoListComponent.prototype.closeModal = function () {
        this.modalReference.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TodoListComponent.prototype, "modalContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent1'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TodoListComponent.prototype, "modalContent1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent2'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TodoListComponent.prototype, "modalContent2", void 0);
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/to-do/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/to-do/todo-list/todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [ng_snotify__WEBPACK_IMPORTED_MODULE_6__["SnotifyService"], _user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserServiceService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _list_service_service__WEBPACK_IMPORTED_MODULE_2__["ListServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ng_bootstrap_ng_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _socket_service_service__WEBPACK_IMPORTED_MODULE_5__["SocketServiceService"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/user-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/user-service.service.ts ***!
  \*****************************************/
/*! exports provided: UserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function() { return UserServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserServiceService = /** @class */ (function () {
    function UserServiceService(_http) {
        var _this = this;
        this._http = _http;
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authToken');
        // private url = "http://localhost:3000/api/v1/users";
        this.url = "http://api.to-doApp.tech2praveen.info/api/v1/users";
        this.signUpFunction = function (signupDetails) {
            return _this._http.post(_this.url + "/signup", signupDetails);
        }; //  end of signup function
        this.loginFunction = function (loginDetails) {
            return _this._http.post(_this.url + "/login", loginDetails);
        }; //  end of login function
        this.deleteLocalStorage = function () {
            localStorage.setItem('userInfo', '{}');
        }; //  end of login function
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        }; //  end of set user info
        this.getUserInfoInLocalStorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end of get user info from local storage
        this.getUserDetails = function (details) {
            return _this._http.post(_this.url + "/getUser", details);
        }; // end of get user details
        this.UpdateUser = function (details) {
            return _this._http.post(_this.url + "/update", details);
        }; // end of update user
        this.updateList = function (details) {
            return _this._http.post(_this.url + "/updateList", details);
        }; // end of update list
        this.updateIndex = function (details) {
            return _this._http.post(_this.url + "/indexUpdate", details);
        }; // end of update Index
        this.getUserDetailsUsingEmail = function (details) {
            return _this._http.post(_this.url + "/email/getUserDetails", details);
        };
        this.sendFrndRequest = function (details) {
            return _this._http.post(_this.url + "/add/frndRequest?authToken=" + _this.authToken, details);
        }; // end of send frund request
        this.acceptReq = function (details) {
            return _this._http.post(_this.url + "/acceptReq?authToken=" + _this.authToken, details);
        }; // end of move user
        this.rejectUser = function (details) {
            return _this._http.post(_this.url + "/reject?authToken=" + _this.authToken, details);
        }; // end of move user
        this.getAllUsers = function (details) {
            return _this._http.post(_this.url + "/getAll?authToken=" + _this.authToken, details);
        }; //  end of get All users
        this.updateUserUsingEmail = function (details) {
            return _this._http.post(_this.url + "/using/email/updateUser", details);
        }; // end of update user using email
        this.getInfoUsingToken = function (token) {
            return _this._http.get(_this.url + "/getinfo/using/token/" + token);
        }; //end of get user info using token
        this.updatePassword = function (details) {
            return _this._http.post(_this.url + "/password/update", details);
        }; //end of update password
    } //  end of constructor
    UserServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserServiceService);
    return UserServiceService;
}()); // end of class user service



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    box-shadow: 0 1px 2px 0 gray;\r\n    border-radius: 10px;\r\n    background: #7e6d707a;\r\n    color: white\r\n}\r\n\r\n\r\n.container{\r\n    padding-top:5%; \r\n\r\n}\r\n\r\n\r\nlabel,button{\r\n    font-weight: 500;\r\n    font-family: cursive;\r\n}"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n    \r\n    </div>\r\n \r\n    \r\n\r\n    <div style=\"padding:2%\" class=\"col-md-4 box\">\r\n\r\n        <div style=\"text-align: center\">\r\n            <h5>To-Do App</h5>\r\n          \r\n        <div style=\"text-align: center\">\r\n          <img src=\"../../../assets/todoicon.png\" style=\"width: 20%;\">\r\n        </div>\r\n  \r\n        <div style=\"padding:2%;margin-top: 5%;\">\r\n          <label for=\"email\">Email address</label>\r\n          <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\">\r\n        </div>\r\n  \r\n        <div style=\"padding:2%\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\">\r\n        </div>\r\n        <br>\r\n        <div style=\"text-align:center\">\r\n          <button (click)=\"login()\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div>\r\n          <div (click)=\"forgotPassword()\" style=\"cursor: pointer\" class=\"badge badge-warning\">Forgot Password?</div><span style =\"margin-left: 50%\"  class=\"badge badge-primary\"><a style='color:white;' href=\"/signup\">Signup</a></span>\r\n        </div>\r\n  \r\n  \r\n      </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    \r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _socket_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../socket-service.service */ "./src/app/socket-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var shortid = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, snortify, socketService, elementRef) {
        var _this = this;
        this.userService = userService;
        this.snortify = snortify;
        this.socketService = socketService;
        this.elementRef = elementRef;
        //Login Method
        this.login = function () {
            if (!_this.email) {
                _this.snortify.error('Enter Email');
            }
            else if (!_this.password) {
                _this.snortify.error('Enter Password');
            }
            else {
                var loginDetails = {
                    email: _this.email,
                    password: _this.password
                };
                _this.userService.loginFunction(loginDetails).subscribe(function (response) {
                    if (response.status === 200) {
                        _this.snortify.success('Login successfull');
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('authToken', response.data.authToken);
                        _this.userService.setUserInfoInLocalStorage(response.data.userDetails);
                        window.location.assign("/to-do");
                    }
                    else {
                        _this.snortify.error('error occured');
                    }
                }, (function (err) {
                    _this.snortify.error('Incorrect credentials or user does not exist');
                }));
            }
        }; // end of login method
        //Method to process forgot password
        this.forgotPassword = function () {
            if (!_this.email) {
                _this.snortify.create({
                    title: "Email Required",
                    body: "Please enter Email and then click on Forgot Password to recover Password.",
                    config: {
                        position: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyPosition"].centerTop,
                        type: 'warning'
                    }
                });
            }
            else {
                var details_1 = {
                    email: _this.email,
                    PasswordResetToken: shortid.generate(),
                    PasswordResetExpiration: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
                };
                _this.userService.updateUserUsingEmail(details_1).subscribe(function (response) {
                    if (response.data.nModified > 0) {
                        var mailDetails = {
                            receiver: _this.email,
                            subject: 'To-Do App - Password Reset',
                            html: "<p>Hi,</p><h4>Below is your password rest link, it is valid for a period of 24hrs</h4><br><p>http://to-doapp.tech2praveen.info/passwordReset/" + details_1.PasswordResetToken + "</p><br><p>Regards:</p><p>TO-DO App Team</p>"
                        };
                        _this.socketService.sendMail(mailDetails);
                        _this.snortify.create({
                            title: "Link sent",
                            body: "An email has been sent to you, please click on the link in the email to reset your password",
                            config: {
                                position: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyPosition"].centerTop,
                                type: 'confirm'
                            }
                        });
                    }
                    else {
                        _this.snortify.error('No account found with Email');
                    }
                }, (function (err) {
                    _this.snortify.error('Error occured');
                }));
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.background = "url('../../../assets/background.jpg') no-repeat center center fixed";
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = "cover";
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceService"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"], _socket_service_service__WEBPACK_IMPORTED_MODULE_4__["SocketServiceService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LoginComponent);
    return LoginComponent;
}()); // end of forgotPassword Method



/***/ }),

/***/ "./src/app/user/password-rest/password-rest.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/password-rest/password-rest.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    border-radius: 5px;\r\n    background: black;\r\n    opacity: 0.7;\r\n    color:white;\r\n    padding: 1%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/password-rest/password-rest.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/password-rest/password-rest.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    \r\n    <div style=\"margin: 15% 0 0 0\" class=\"row\">\r\n    \r\n      <div class=\"col-md-3\"></div>\r\n    \r\n      \r\n    <div class=\"col-md-6 box\">\r\n    \r\n      <div class=\"form-group\">\r\n        <label>Enter New Password</label>\r\n        <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control\" placeholder=\"New Password\">\r\n      </div>\r\n      \r\n    <button type=\"submit\" (click)=\"update()\" class=\"btn btn-primary btn-md\" style=\"float: right\">Submit</button>\r\n\r\n    \r\n    \r\n    </div>\r\n      <div class=\"col-md-3\"></div>\r\n    </div>\r\n    \r\n    </div>\r\n    \r\n    "

/***/ }),

/***/ "./src/app/user/password-rest/password-rest.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/password-rest/password-rest.component.ts ***!
  \***************************************************************/
/*! exports provided: PasswordRestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordRestComponent", function() { return PasswordRestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _socket_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../socket-service.service */ "./src/app/socket-service.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PasswordRestComponent = /** @class */ (function () {
    function PasswordRestComponent(userService, router, socketService, _router, snortify, elementRef) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.socketService = socketService;
        this._router = _router;
        this.snortify = snortify;
        this.elementRef = elementRef;
        this.date = new Date();
        this.getInfoUsingToken = function (token) {
            _this.userService.getInfoUsingToken(token).subscribe(function (response) {
                console.log(response);
                if (response.status == 200) {
                    if ((response.data.PasswordResetToken == _this.token) && (Date.parse("" + response.data.PasswordResetExpiration) > Date.parse("" + _this.date))) {
                        // console.log('user verified')
                        _this.emailReceived = response.data.email;
                    }
                    else {
                        alert('some error occured');
                        _this.router.navigate(['/login']);
                    }
                }
                else {
                    _this.router.navigate(['/login']);
                }
            }, (function (err) {
                _this.router.navigate(['/login']);
            }));
        };
        this.update = function () {
            if (!_this.emailReceived) {
                _this.snortify.error('Error has occured, Please try again');
            }
            else if (!_this.CheckPassword(_this.password)) {
                _this.snortify.create({
                    title: "Check",
                    body: "Your Password must be between 7 to 15 characters which contain at least one digit and a special character.",
                    config: {
                        position: ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyPosition"].centerTop,
                        type: 'warning'
                    }
                });
            }
            else {
                var details = {
                    email: _this.emailReceived,
                    password: _this.password
                };
                _this.userService.updatePassword(details).subscribe(function (response) {
                    if (response.status === 200) {
                        _this.snortify.success('Password changed successfully');
                        _this.router.navigate(['/login']);
                    }
                    else {
                        _this.snortify.error(response.message);
                    }
                });
            }
        };
    }
    PasswordRestComponent.prototype.ngOnInit = function () {
        this.token = this._router.snapshot.paramMap.get('resetToken');
        this.elementRef.nativeElement.ownerDocument.body.style.background = "url('../../../assets/background.jpg') no-repeat center center fixed";
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = "cover";
        this.getInfoUsingToken(this.token);
    };
    //end of update
    //Check entered password using regex
    PasswordRestComponent.prototype.CheckPassword = function (inputtxt) {
        if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(inputtxt)) {
            return true;
        }
        else {
            return false;
        }
    }; // end of password validation
    PasswordRestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-rest',
            template: __webpack_require__(/*! ./password-rest.component.html */ "./src/app/user/password-rest/password-rest.component.html"),
            styles: [__webpack_require__(/*! ./password-rest.component.css */ "./src/app/user/password-rest/password-rest.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _socket_service_service__WEBPACK_IMPORTED_MODULE_3__["SocketServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PasswordRestComponent);
    return PasswordRestComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    box-shadow: 0 1px 2px 0 gray;\r\n    border-radius: 10px;\r\n    background: #7e6d707a;\r\n    color: white\r\n}\r\n\r\n\r\n.container{\r\n    padding-top:5%; \r\n\r\n}\r\n\r\n\r\nlabel,button{\r\n    font-weight: 500;\r\n    font-family: cursive;\r\n}"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div cass=\"container\">\r\n  <div style=\"padding:2%\" class=\"row\">\r\n    <div class=\"col-md-4\"></div>\r\n    <div class=\"col-md-4 box\">\r\n\r\n      <div style=\"text-align: center\">\r\n        <br>\r\n        <h5>To-Do App</h5>\r\n      </div>\r\n\r\n      <div style=\"text-align: center\">\r\n          <img src=\"../../../assets/todoicon.png\" style=\"width: 20%;\">\r\n      </div>\r\n\r\n      <div style=\"padding:1%\">\r\n        <label for=\"name\">Name</label>\r\n\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col\">\r\n        <input [(ngModel)]=\"firstName\"  placeholder=\"First Name\" class=\"form-control\" type=\"text\"> \r\n      </div>\r\n      <div class=\"col\">\r\n        <input [(ngModel)]=\"lastName\" placeholder=\"Last Name\" class=\"form-control\" type=\"text\">\r\n      </div>\r\n    </div>\r\n\r\n      </div>\r\n\r\n     <div style=\"padding:1%\">\r\n       <label for=\"email\">Email Address</label>\r\n       <input class=\"form-control\" type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\"> \r\n     </div>\r\n\r\n     <div style=\"padding: 1%\">\r\n       <label>Phone Number</label>\r\n       \r\n       <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n          <select name=\"countryCode\" class=\"form-control\" [(ngModel)]=\"countryCode\">\r\n\r\n              <option data-countryCode=\"IN\" value=\"91\">India (+91)</option>\r\n              <optgroup label=\"Other countries\">  \r\n                  <option data-countryCode=\"GB\" value=\"44\" Selected>UK (+44)</option>\r\n                  <option data-countryCode=\"US\" value=\"1\">USA (+1)</option>    \r\n                <option data-countryCode=\"DZ\" value=\"213\">Algeria (+213)</option>\r\n                <option data-countryCode=\"AD\" value=\"376\">Andorra (+376)</option>\r\n                <option data-countryCode=\"AO\" value=\"244\">Angola (+244)</option>\r\n                <option data-countryCode=\"AI\" value=\"1264\">Anguilla (+1264)</option>\r\n                <option data-countryCode=\"AG\" value=\"1268\">Antigua &amp; Barbuda (+1268)</option>\r\n                <option data-countryCode=\"AR\" value=\"54\">Argentina (+54)</option>\r\n                <option data-countryCode=\"AM\" value=\"374\">Armenia (+374)</option>\r\n                <option data-countryCode=\"AW\" value=\"297\">Aruba (+297)</option>\r\n                <option data-countryCode=\"AU\" value=\"61\">Australia (+61)</option>\r\n                <option data-countryCode=\"AT\" value=\"43\">Austria (+43)</option>\r\n                <option data-countryCode=\"AZ\" value=\"994\">Azerbaijan (+994)</option>\r\n                <option data-countryCode=\"BS\" value=\"1242\">Bahamas (+1242)</option>\r\n                <option data-countryCode=\"BH\" value=\"973\">Bahrain (+973)</option>\r\n                <option data-countryCode=\"BD\" value=\"880\">Bangladesh (+880)</option>\r\n                <option data-countryCode=\"BB\" value=\"1246\">Barbados (+1246)</option>\r\n                <option data-countryCode=\"BY\" value=\"375\">Belarus (+375)</option>\r\n                <option data-countryCode=\"BE\" value=\"32\">Belgium (+32)</option>\r\n                <option data-countryCode=\"BZ\" value=\"501\">Belize (+501)</option>\r\n                <option data-countryCode=\"BJ\" value=\"229\">Benin (+229)</option>\r\n                <option data-countryCode=\"BM\" value=\"1441\">Bermuda (+1441)</option>\r\n                <option data-countryCode=\"BT\" value=\"975\">Bhutan (+975)</option>\r\n                <option data-countryCode=\"BO\" value=\"591\">Bolivia (+591)</option>\r\n                <option data-countryCode=\"BA\" value=\"387\">Bosnia Herzegovina (+387)</option>\r\n                <option data-countryCode=\"BW\" value=\"267\">Botswana (+267)</option>\r\n                <option data-countryCode=\"BR\" value=\"55\">Brazil (+55)</option>\r\n                <option data-countryCode=\"BN\" value=\"673\">Brunei (+673)</option>\r\n                <option data-countryCode=\"BG\" value=\"359\">Bulgaria (+359)</option>\r\n                <option data-countryCode=\"BF\" value=\"226\">Burkina Faso (+226)</option>\r\n                <option data-countryCode=\"BI\" value=\"257\">Burundi (+257)</option>\r\n                <option data-countryCode=\"KH\" value=\"855\">Cambodia (+855)</option>\r\n                <option data-countryCode=\"CM\" value=\"237\">Cameroon (+237)</option>\r\n                <option data-countryCode=\"CA\" value=\"1\">Canada (+1)</option>\r\n                <option data-countryCode=\"CV\" value=\"238\">Cape Verde Islands (+238)</option>\r\n                <option data-countryCode=\"KY\" value=\"1345\">Cayman Islands (+1345)</option>\r\n                <option data-countryCode=\"CF\" value=\"236\">Central African Republic (+236)</option>\r\n                <option data-countryCode=\"CL\" value=\"56\">Chile (+56)</option>\r\n                <option data-countryCode=\"CN\" value=\"86\">China (+86)</option>\r\n                <option data-countryCode=\"CO\" value=\"57\">Colombia (+57)</option>\r\n                <option data-countryCode=\"KM\" value=\"269\">Comoros (+269)</option>\r\n                <option data-countryCode=\"CG\" value=\"242\">Congo (+242)</option>\r\n                <option data-countryCode=\"CK\" value=\"682\">Cook Islands (+682)</option>\r\n                <option data-countryCode=\"CR\" value=\"506\">Costa Rica (+506)</option>\r\n                <option data-countryCode=\"HR\" value=\"385\">Croatia (+385)</option>\r\n                <option data-countryCode=\"CU\" value=\"53\">Cuba (+53)</option>\r\n                <option data-countryCode=\"CY\" value=\"90392\">Cyprus North (+90392)</option>\r\n                <option data-countryCode=\"CY\" value=\"357\">Cyprus South (+357)</option>\r\n                <option data-countryCode=\"CZ\" value=\"42\">Czech Republic (+42)</option>\r\n                <option data-countryCode=\"DK\" value=\"45\">Denmark (+45)</option>\r\n                <option data-countryCode=\"DJ\" value=\"253\">Djibouti (+253)</option>\r\n                <option data-countryCode=\"DM\" value=\"1809\">Dominica (+1809)</option>\r\n                <option data-countryCode=\"DO\" value=\"1809\">Dominican Republic (+1809)</option>\r\n                <option data-countryCode=\"EC\" value=\"593\">Ecuador (+593)</option>\r\n                <option data-countryCode=\"EG\" value=\"20\">Egypt (+20)</option>\r\n                <option data-countryCode=\"SV\" value=\"503\">El Salvador (+503)</option>\r\n                <option data-countryCode=\"GQ\" value=\"240\">Equatorial Guinea (+240)</option>\r\n                <option data-countryCode=\"ER\" value=\"291\">Eritrea (+291)</option>\r\n                <option data-countryCode=\"EE\" value=\"372\">Estonia (+372)</option>\r\n                <option data-countryCode=\"ET\" value=\"251\">Ethiopia (+251)</option>\r\n                <option data-countryCode=\"FK\" value=\"500\">Falkland Islands (+500)</option>\r\n                <option data-countryCode=\"FO\" value=\"298\">Faroe Islands (+298)</option>\r\n                <option data-countryCode=\"FJ\" value=\"679\">Fiji (+679)</option>\r\n                <option data-countryCode=\"FI\" value=\"358\">Finland (+358)</option>\r\n                <option data-countryCode=\"FR\" value=\"33\">France (+33)</option>\r\n                <option data-countryCode=\"GF\" value=\"594\">French Guiana (+594)</option>\r\n                <option data-countryCode=\"PF\" value=\"689\">French Polynesia (+689)</option>\r\n                <option data-countryCode=\"GA\" value=\"241\">Gabon (+241)</option>\r\n                <option data-countryCode=\"GM\" value=\"220\">Gambia (+220)</option>\r\n                <option data-countryCode=\"GE\" value=\"7880\">Georgia (+7880)</option>\r\n                <option data-countryCode=\"DE\" value=\"49\">Germany (+49)</option>\r\n                <option data-countryCode=\"GH\" value=\"233\">Ghana (+233)</option>\r\n                <option data-countryCode=\"GI\" value=\"350\">Gibraltar (+350)</option>\r\n                <option data-countryCode=\"GR\" value=\"30\">Greece (+30)</option>\r\n                <option data-countryCode=\"GL\" value=\"299\">Greenland (+299)</option>\r\n                <option data-countryCode=\"GD\" value=\"1473\">Grenada (+1473)</option>\r\n                <option data-countryCode=\"GP\" value=\"590\">Guadeloupe (+590)</option>\r\n                <option data-countryCode=\"GU\" value=\"671\">Guam (+671)</option>\r\n                <option data-countryCode=\"GT\" value=\"502\">Guatemala (+502)</option>\r\n                <option data-countryCode=\"GN\" value=\"224\">Guinea (+224)</option>\r\n                <option data-countryCode=\"GW\" value=\"245\">Guinea - Bissau (+245)</option>\r\n                <option data-countryCode=\"GY\" value=\"592\">Guyana (+592)</option>\r\n                <option data-countryCode=\"HT\" value=\"509\">Haiti (+509)</option>\r\n                <option data-countryCode=\"HN\" value=\"504\">Honduras (+504)</option>\r\n                <option data-countryCode=\"HK\" value=\"852\">Hong Kong (+852)</option>\r\n                <option data-countryCode=\"HU\" value=\"36\">Hungary (+36)</option>\r\n                <option data-countryCode=\"IS\" value=\"354\">Iceland (+354)</option>\r\n                <option data-countryCode=\"ID\" value=\"62\">Indonesia (+62)</option>\r\n                <option data-countryCode=\"IR\" value=\"98\">Iran (+98)</option>\r\n                <option data-countryCode=\"IQ\" value=\"964\">Iraq (+964)</option>\r\n                <option data-countryCode=\"IE\" value=\"353\">Ireland (+353)</option>\r\n                <option data-countryCode=\"IL\" value=\"972\">Israel (+972)</option>\r\n                <option data-countryCode=\"IT\" value=\"39\">Italy (+39)</option>\r\n                <option data-countryCode=\"JM\" value=\"1876\">Jamaica (+1876)</option>\r\n                <option data-countryCode=\"JP\" value=\"81\">Japan (+81)</option>\r\n                <option data-countryCode=\"JO\" value=\"962\">Jordan (+962)</option>\r\n                <option data-countryCode=\"KZ\" value=\"7\">Kazakhstan (+7)</option>\r\n                <option data-countryCode=\"KE\" value=\"254\">Kenya (+254)</option>\r\n                <option data-countryCode=\"KI\" value=\"686\">Kiribati (+686)</option>\r\n                <option data-countryCode=\"KP\" value=\"850\">Korea North (+850)</option>\r\n                <option data-countryCode=\"KR\" value=\"82\">Korea South (+82)</option>\r\n                <option data-countryCode=\"KW\" value=\"965\">Kuwait (+965)</option>\r\n                <option data-countryCode=\"KG\" value=\"996\">Kyrgyzstan (+996)</option>\r\n                <option data-countryCode=\"LA\" value=\"856\">Laos (+856)</option>\r\n                <option data-countryCode=\"LV\" value=\"371\">Latvia (+371)</option>\r\n                <option data-countryCode=\"LB\" value=\"961\">Lebanon (+961)</option>\r\n                <option data-countryCode=\"LS\" value=\"266\">Lesotho (+266)</option>\r\n                <option data-countryCode=\"LR\" value=\"231\">Liberia (+231)</option>\r\n                <option data-countryCode=\"LY\" value=\"218\">Libya (+218)</option>\r\n                <option data-countryCode=\"LI\" value=\"417\">Liechtenstein (+417)</option>\r\n                <option data-countryCode=\"LT\" value=\"370\">Lithuania (+370)</option>\r\n                <option data-countryCode=\"LU\" value=\"352\">Luxembourg (+352)</option>\r\n                <option data-countryCode=\"MO\" value=\"853\">Macao (+853)</option>\r\n                <option data-countryCode=\"MK\" value=\"389\">Macedonia (+389)</option>\r\n                <option data-countryCode=\"MG\" value=\"261\">Madagascar (+261)</option>\r\n                <option data-countryCode=\"MW\" value=\"265\">Malawi (+265)</option>\r\n                <option data-countryCode=\"MY\" value=\"60\">Malaysia (+60)</option>\r\n                <option data-countryCode=\"MV\" value=\"960\">Maldives (+960)</option>\r\n                <option data-countryCode=\"ML\" value=\"223\">Mali (+223)</option>\r\n                <option data-countryCode=\"MT\" value=\"356\">Malta (+356)</option>\r\n                <option data-countryCode=\"MH\" value=\"692\">Marshall Islands (+692)</option>\r\n                <option data-countryCode=\"MQ\" value=\"596\">Martinique (+596)</option>\r\n                <option data-countryCode=\"MR\" value=\"222\">Mauritania (+222)</option>\r\n                <option data-countryCode=\"YT\" value=\"269\">Mayotte (+269)</option>\r\n                <option data-countryCode=\"MX\" value=\"52\">Mexico (+52)</option>\r\n                <option data-countryCode=\"FM\" value=\"691\">Micronesia (+691)</option>\r\n                <option data-countryCode=\"MD\" value=\"373\">Moldova (+373)</option>\r\n                <option data-countryCode=\"MC\" value=\"377\">Monaco (+377)</option>\r\n                <option data-countryCode=\"MN\" value=\"976\">Mongolia (+976)</option>\r\n                <option data-countryCode=\"MS\" value=\"1664\">Montserrat (+1664)</option>\r\n                <option data-countryCode=\"MA\" value=\"212\">Morocco (+212)</option>\r\n                <option data-countryCode=\"MZ\" value=\"258\">Mozambique (+258)</option>\r\n                <option data-countryCode=\"MN\" value=\"95\">Myanmar (+95)</option>\r\n                <option data-countryCode=\"NA\" value=\"264\">Namibia (+264)</option>\r\n                <option data-countryCode=\"NR\" value=\"674\">Nauru (+674)</option>\r\n                <option data-countryCode=\"NP\" value=\"977\">Nepal (+977)</option>\r\n                <option data-countryCode=\"NL\" value=\"31\">Netherlands (+31)</option>\r\n                <option data-countryCode=\"NC\" value=\"687\">New Caledonia (+687)</option>\r\n                <option data-countryCode=\"NZ\" value=\"64\">New Zealand (+64)</option>\r\n                <option data-countryCode=\"NI\" value=\"505\">Nicaragua (+505)</option>\r\n                <option data-countryCode=\"NE\" value=\"227\">Niger (+227)</option>\r\n                <option data-countryCode=\"NG\" value=\"234\">Nigeria (+234)</option>\r\n                <option data-countryCode=\"NU\" value=\"683\">Niue (+683)</option>\r\n                <option data-countryCode=\"NF\" value=\"672\">Norfolk Islands (+672)</option>\r\n                <option data-countryCode=\"NP\" value=\"670\">Northern Marianas (+670)</option>\r\n                <option data-countryCode=\"NO\" value=\"47\">Norway (+47)</option>\r\n                <option data-countryCode=\"OM\" value=\"968\">Oman (+968)</option>\r\n                <option data-countryCode=\"PW\" value=\"680\">Palau (+680)</option>\r\n                <option data-countryCode=\"PA\" value=\"507\">Panama (+507)</option>\r\n                <option data-countryCode=\"PG\" value=\"675\">Papua New Guinea (+675)</option>\r\n                <option data-countryCode=\"PY\" value=\"595\">Paraguay (+595)</option>\r\n                <option data-countryCode=\"PE\" value=\"51\">Peru (+51)</option>\r\n                <option data-countryCode=\"PH\" value=\"63\">Philippines (+63)</option>\r\n                <option data-countryCode=\"PL\" value=\"48\">Poland (+48)</option>\r\n                <option data-countryCode=\"PT\" value=\"351\">Portugal (+351)</option>\r\n                <option data-countryCode=\"PR\" value=\"1787\">Puerto Rico (+1787)</option>\r\n                <option data-countryCode=\"QA\" value=\"974\">Qatar (+974)</option>\r\n                <option data-countryCode=\"RE\" value=\"262\">Reunion (+262)</option>\r\n                <option data-countryCode=\"RO\" value=\"40\">Romania (+40)</option>\r\n                <option data-countryCode=\"RU\" value=\"7\">Russia (+7)</option>\r\n                <option data-countryCode=\"RW\" value=\"250\">Rwanda (+250)</option>\r\n                <option data-countryCode=\"SM\" value=\"378\">San Marino (+378)</option>\r\n                <option data-countryCode=\"ST\" value=\"239\">Sao Tome &amp; Principe (+239)</option>\r\n                <option data-countryCode=\"SA\" value=\"966\">Saudi Arabia (+966)</option>\r\n                <option data-countryCode=\"SN\" value=\"221\">Senegal (+221)</option>\r\n                <option data-countryCode=\"CS\" value=\"381\">Serbia (+381)</option>\r\n                <option data-countryCode=\"SC\" value=\"248\">Seychelles (+248)</option>\r\n                <option data-countryCode=\"SL\" value=\"232\">Sierra Leone (+232)</option>\r\n                <option data-countryCode=\"SG\" value=\"65\">Singapore (+65)</option>\r\n                <option data-countryCode=\"SK\" value=\"421\">Slovak Republic (+421)</option>\r\n                <option data-countryCode=\"SI\" value=\"386\">Slovenia (+386)</option>\r\n                <option data-countryCode=\"SB\" value=\"677\">Solomon Islands (+677)</option>\r\n                <option data-countryCode=\"SO\" value=\"252\">Somalia (+252)</option>\r\n                <option data-countryCode=\"ZA\" value=\"27\">South Africa (+27)</option>\r\n                <option data-countryCode=\"ES\" value=\"34\">Spain (+34)</option>\r\n                <option data-countryCode=\"LK\" value=\"94\">Sri Lanka (+94)</option>\r\n                <option data-countryCode=\"SH\" value=\"290\">St. Helena (+290)</option>\r\n                <option data-countryCode=\"KN\" value=\"1869\">St. Kitts (+1869)</option>\r\n                <option data-countryCode=\"SC\" value=\"1758\">St. Lucia (+1758)</option>\r\n                <option data-countryCode=\"SD\" value=\"249\">Sudan (+249)</option>\r\n                <option data-countryCode=\"SR\" value=\"597\">Suriname (+597)</option>\r\n                <option data-countryCode=\"SZ\" value=\"268\">Swaziland (+268)</option>\r\n                <option data-countryCode=\"SE\" value=\"46\">Sweden (+46)</option>\r\n                <option data-countryCode=\"CH\" value=\"41\">Switzerland (+41)</option>\r\n                <option data-countryCode=\"SI\" value=\"963\">Syria (+963)</option>\r\n                <option data-countryCode=\"TW\" value=\"886\">Taiwan (+886)</option>\r\n                <option data-countryCode=\"TJ\" value=\"7\">Tajikstan (+7)</option>\r\n                <option data-countryCode=\"TH\" value=\"66\">Thailand (+66)</option>\r\n                <option data-countryCode=\"TG\" value=\"228\">Togo (+228)</option>\r\n                <option data-countryCode=\"TO\" value=\"676\">Tonga (+676)</option>\r\n                <option data-countryCode=\"TT\" value=\"1868\">Trinidad &amp; Tobago (+1868)</option>\r\n                <option data-countryCode=\"TN\" value=\"216\">Tunisia (+216)</option>\r\n                <option data-countryCode=\"TR\" value=\"90\">Turkey (+90)</option>\r\n                <option data-countryCode=\"TM\" value=\"7\">Turkmenistan (+7)</option>\r\n                <option data-countryCode=\"TM\" value=\"993\">Turkmenistan (+993)</option>\r\n                <option data-countryCode=\"TC\" value=\"1649\">Turks &amp; Caicos Islands (+1649)</option>\r\n                <option data-countryCode=\"TV\" value=\"688\">Tuvalu (+688)</option>\r\n                <option data-countryCode=\"UG\" value=\"256\">Uganda (+256)</option>\r\n                <!-- <option data-countryCode=\"GB\" value=\"44\">UK (+44)</option> -->\r\n                <option data-countryCode=\"UA\" value=\"380\">Ukraine (+380)</option>\r\n                <option data-countryCode=\"AE\" value=\"971\">United Arab Emirates (+971)</option>\r\n                <option data-countryCode=\"UY\" value=\"598\">Uruguay (+598)</option>\r\n                <!-- <option data-countryCode=\"US\" value=\"1\">USA (+1)</option> -->\r\n                <option data-countryCode=\"UZ\" value=\"7\">Uzbekistan (+7)</option>\r\n                <option data-countryCode=\"VU\" value=\"678\">Vanuatu (+678)</option>\r\n                <option data-countryCode=\"VA\" value=\"379\">Vatican City (+379)</option>\r\n                <option data-countryCode=\"VE\" value=\"58\">Venezuela (+58)</option>\r\n                <option data-countryCode=\"VN\" value=\"84\">Vietnam (+84)</option>\r\n                <option data-countryCode=\"VG\" value=\"84\">Virgin Islands - British (+1284)</option>\r\n                <option data-countryCode=\"VI\" value=\"84\">Virgin Islands - US (+1340)</option>\r\n                <option data-countryCode=\"WF\" value=\"681\">Wallis &amp; Futuna (+681)</option>\r\n                <option data-countryCode=\"YE\" value=\"969\">Yemen (North)(+969)</option>\r\n                <option data-countryCode=\"YE\" value=\"967\">Yemen (South)(+967)</option>\r\n                <option data-countryCode=\"ZM\" value=\"260\">Zambia (+260)</option>\r\n                <option data-countryCode=\"ZW\" value=\"263\">Zimbabwe (+263)</option>\r\n              </optgroup>\r\n\r\n\r\n\r\n            </select>\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n          <input type=\"tel\" class=\"form-control\" [(ngModel)]=\"mobileNumber\" placeholder=\"Phone Number\">\r\n        </div>\r\n       </div>\r\n     </div>\r\n\r\n     <div style=\"padding: 1%\">\r\n       <label>Password</label>\r\n       <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\">\r\n     </div>\r\n\r\n     <div style=\"padding: 1%; text-align: center\">\r\n       <button class=\"btn btn-primary\" (click)=\"signUp()\" type=\"submit\">Signup</button><br><br>\r\n        <a style=\"color:white;font-size: 20px\" href=\"/login\">Have an account already?</a>\r\n     </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-4\"></div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _socket_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../socket-service.service */ "./src/app/socket-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, snortify, socketService, elementRef) {
        var _this = this;
        this.userService = userService;
        this.snortify = snortify;
        this.socketService = socketService;
        this.elementRef = elementRef;
        //Method to process signup
        this.signUp = function () {
            if (!_this.firstName) {
                _this.snortify.error('Please add First Name');
            }
            else if (!_this.lastName) {
                _this.snortify.error('Please add Last Name');
            }
            else if (!_this.validateEmail(_this.email)) {
                _this.snortify.error('Invalid Email');
            }
            else if (!_this.CheckPassword(_this.password)) {
                _this.snortify.error('Your password mmust be between 7 to 15 characters which contain at least one digit and a special character.');
            }
            else if (!_this.countryCode) {
                _this.snortify.error('Country Code missing');
            }
            else if (!_this.phonenumberCheck(_this.mobileNumber)) {
                _this.snortify.error('Invalid Mobile Number');
            }
            else {
                var signupDetails = {
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    email: _this.email,
                    password: _this.password,
                    mobileNumber: _this.mobileNumber,
                    countryCode: _this.countryCode
                };
                _this.userService.signUpFunction(signupDetails).subscribe(function (response) {
                    if (response.status === 200) {
                        var mailDetails = {
                            receiver: response.data.email,
                            subject: 'Welcome to To-Do App',
                            html: "<p>Hi,</p><br><p>Thank you for joining To-Do App, start adding friends and completing tasks.</p><br><p>Regards:</p><p>To-Do App Team</p>"
                        };
                        _this.socketService.sendMail(mailDetails);
                        _this.snortify.success('Signed-up successfully');
                        window.location.assign('/login');
                    }
                    else {
                        _this.snortify.error(response.message);
                    }
                }, (function (err) {
                    _this.snortify.error('user already exists, try login');
                }));
            } //  end of signup function
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.background = "url('../../../assets/background.jpg') no-repeat center center fixed";
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = "cover";
    };
    //end of signup
    //Method to validate email
    SignupComponent.prototype.validateEmail = function (mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true);
        }
        return (false);
    }; // end of email validation
    //Method to check password using regex
    SignupComponent.prototype.CheckPassword = function (inputtxt) {
        if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(inputtxt)) {
            return true;
        }
        else {
            return false;
        }
    }; // end of password validation
    //Method to check phone number
    SignupComponent.prototype.phonenumberCheck = function (inputtxt) {
        var phoneno = /^\d{10}$/;
        if ((/^\d{10}$/.test(inputtxt))) {
            return true;
        }
        else {
            return false;
        }
    }; // end of phone number check
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceService"], ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"], _socket_service_service__WEBPACK_IMPORTED_MODULE_3__["SocketServiceService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _password_rest_password_rest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./password-rest/password-rest.component */ "./src/app/user/password-rest/password-rest.component.ts");
/* harmony import */ var _socket_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../socket-service.service */ "./src/app/socket-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"] },
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                    { path: 'passwordReset/:resetToken', component: _password_rest_password_rest_component__WEBPACK_IMPORTED_MODULE_8__["PasswordRestComponent"] }
                ])
            ],
            providers: [_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserServiceService"], _socket_service_service__WEBPACK_IMPORTED_MODULE_9__["SocketServiceService"]],
            declarations: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _password_rest_password_rest_component__WEBPACK_IMPORTED_MODULE_8__["PasswordRestComponent"]]
        })
    ], UserModule);
    return UserModule;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! C:\Users\Praveen Kumar\Documents\final_front\New folder\new\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map