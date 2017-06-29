webpackJsonp([1,4],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 115;


/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(128);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_summary_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_sensor_sensor_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_timer_timer_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__disconnect_connection_guard__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__disconnect_disconnect_component__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/summary', pathMatch: 'full' },
    { path: 'summary', component: __WEBPACK_IMPORTED_MODULE_2__summary_summary_component__["a" /* SummaryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__disconnect_connection_guard__["a" /* ConnectionGuard */]] },
    { path: 'disconnected', component: __WEBPACK_IMPORTED_MODULE_7__disconnect_disconnect_component__["a" /* DisconnectComponent */] },
    { path: 'config', component: __WEBPACK_IMPORTED_MODULE_3__config_config_component__["a" /* ConfigComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__disconnect_connection_guard__["a" /* ConnectionGuard */]], children: [
            { path: 'sensor', component: __WEBPACK_IMPORTED_MODULE_4__config_sensor_sensor_component__["a" /* SensorComponent */] },
            { path: 'timer', component: __WEBPACK_IMPORTED_MODULE_5__config_timer_timer_component__["a" /* TimerComponent */] }
        ] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_socket_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(socket) {
        this.socket = socket;
        this.title = 'Summary';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(208),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_socket_service__["a" /* SocketService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_socket_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__summary_summary_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__module_connection_module_connection_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_app_routing_module__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config_config_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_angular2_ui_switch_src__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config_timer_timer_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config_sensor_sensor_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__disconnect_connection_guard__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__disconnect_disconnect_component__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__summary_summary_component__["a" /* SummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_8__module_connection_module_connection_component__["a" /* ModuleConnectionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__config_config_component__["a" /* ConfigComponent */],
            __WEBPACK_IMPORTED_MODULE_12__config_timer_timer_component__["a" /* TimerComponent */],
            __WEBPACK_IMPORTED_MODULE_13__config_sensor_sensor_component__["a" /* SensorComponent */],
            __WEBPACK_IMPORTED_MODULE_15__disconnect_disconnect_component__["a" /* DisconnectComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__node_modules_angular2_ui_switch_src__["a" /* UiSwitchModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__service_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_6__service_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_14__disconnect_connection_guard__["a" /* ConnectionGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleConnectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModuleConnectionComponent = (function () {
    function ModuleConnectionComponent(data) {
        this.data = data;
    }
    ModuleConnectionComponent.prototype.ngOnInit = function () {
    };
    return ModuleConnectionComponent;
}());
ModuleConnectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-module-connection',
        template: __webpack_require__(213),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */]) === "function" && _a || Object])
], ModuleConnectionComponent);

var _a;
//# sourceMappingURL=module-connection.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(socket) {
        var _this = this;
        this.socket = socket;
        this.fan_timer = [];
        this.pump_timer = [];
        this.led_timer = [];
        this.ec_detecting = {
            'detecting': 10,
            'working': 10,
            'setpoint': 1.0,
            'enable': false
        };
        this.ph_detecting = {
            'detecting': 10,
            'working': 10,
            'setpoint': 7.0,
            'enable': false
        };
        this.co2_detecting = {
            'detecting': 10,
            'working': 10,
            'setpoint': 1000,
            'enable': false
        };
        this.socket.socket.on('SENSOR_DATA', function (data) {
            _this.temp = data['temp'];
            _this.humi = data['humi'];
            // this.wt = data['wt']
            _this.co2 = data['co2'];
            _this.ph = data['ph'];
            _this.ec = data['ec'];
        });
        this.socket.socket.on('REP_SETTING', function (data) {
            console.log(data);
            var timer_list = data.timer_list;
            var detecting_list = data.detecting_list;
            // extract timer 0f fan 
            for (var _i = 0, _a = timer_list.fan; _i < _a.length; _i++) {
                var t = _a[_i];
                var timer = {
                    'start': _this.extractTimer(t.start),
                    'end': _this.extractTimer(t.end)
                };
                _this.fan_timer.push(timer);
            }
            //extract pump
            for (var _b = 0, _c = timer_list.pump; _b < _c.length; _b++) {
                var t = _c[_b];
                var timer = {
                    'start': _this.extractTimer(t.start),
                    'end': _this.extractTimer(t.end)
                };
                _this.pump_timer.push(timer);
            }
            for (var _d = 0, _e = timer_list.led; _d < _e.length; _d++) {
                var t = _e[_d];
                var timer = {
                    'start': _this.extractTimer(t.start),
                    'end': _this.extractTimer(t.end)
                };
                _this.led_timer.push(timer);
            }
            var ec = detecting_list.ec;
            _this.ec_detecting.setpoint = ec.setpoint;
            _this.ec_detecting.detecting = ec.detecting;
            _this.ec_detecting.working = ec.working;
            _this.ec_detecting.enable = ec.enable;
            var ph = detecting_list.ph;
            _this.ph_detecting.setpoint = ph.setpoint;
            _this.ph_detecting.detecting = ph.detecting;
            _this.ph_detecting.working = ph.working;
            _this.ph_detecting.enable = ph.enable;
            var co2 = detecting_list.co2;
            _this.co2_detecting.setpoint = co2.setpoint;
            _this.co2_detecting.detecting = co2.detecting;
            _this.co2_detecting.working = co2.working;
            _this.co2_detecting.enable = co2.enable;
        });
        this.socket.socket.emit('REQ_SETTING');
        setInterval(this.requestLoop, 1000, this.socket);
    }
    DataService.prototype.requestLoop = function (socket) {
        socket.socket.emit("REQ_SENSORS", { "data": "REQ_SENSORS" });
    };
    DataService.prototype.extractTimer = function (val) {
        //230 == 02:30
        var hour = Math.floor(val / 100);
        var min = val % 100;
        var s_hour = String(hour);
        var s_min = String(min);
        if (hour < 10) {
            s_hour = "0" + s_hour;
        }
        if (min < 10) {
            s_min = "0" + s_min;
        }
        var data = {
            'hour': s_hour,
            'min': s_min
        };
        return data;
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\"></div>\n    <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\n        <h2><b>IntelAgro-Plant 1.0</b></h2>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" style=\"margin-top: 20px;\">\n        <a routerLink=\"/summary\">\n            <button type=\"button\" class=\"btn btn-round btn-default\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>Summary </button>\n        </a>\n        <a routerLink=\"/config/sensor\">\n            <button type=\"button\" class=\"btn btn-round btn-primary\"><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i> Setting</button>\n        </a>\n    </div>\n</div>\n<router-outlet></router-outlet>\n<!--\n<app-summary></app-summary>\n<app-module-connection></app-module-connection>\n<app-cm01-setting></app-cm01-setting> -->"

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" style=\"margin-top: 20px; margin-left: 40px;\">\n            <a routerLink=\"/config/sensor\">\n                <button type=\"button\" class=\"btn btn-theme03\">Sensor </button>\n            </a>\n            <a routerLink=\"/config/timer\">\n                <button type=\"button\" class=\"btn btn-theme03\"> Timer</button>\n            </a>\n\n        </div>\n    </div>\n\n\n    <div class=\"row\">\n        <router-outlet></router-outlet>\n    </div>\n\n\n</div>"

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__disconnect_connection_guard__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = (function () {
    function SocketService(connectionguard, router) {
        var _this = this;
        this.connectionguard = connectionguard;
        this.router = router;
        this.host = window.location.protocol + "//" + window.location.hostname + ":" + 8000;
        console.log('socket service');
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__["connect"](this.host);
        this.socket.on("connect", function () { return _this.connect(); });
        this.socket.on("disconnect", function () { return _this.disconnect(); });
        this.socket.on("reconect", function () { return _this.reconnect(); });
        this.socket.on("error", function (error) {
            console.log("ERROR: \"" + error + "\"");
        });
    }
    SocketService.prototype.connect = function () {
        console.log("[SocketIO]connected");
        this.connectionguard.isConnect = true;
        this.router.navigateByUrl('/summary');
    };
    SocketService.prototype.disconnect = function () {
        console.log("[SocketIO]disconnect");
        this.connectionguard.isConnect = false;
        this.router.navigateByUrl('/disconnected');
    };
    SocketService.prototype.reconnect = function () {
        console.log("[SocketIO]reconnect");
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__disconnect_connection_guard__["a" /* ConnectionGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__disconnect_connection_guard__["a" /* ConnectionGuard */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SocketService);

var _a, _b;
//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n    <div class=\"form-panel\">\n        <h4 class=\"mb\"><i class=\"fa fa-angle-right\"></i> EC</h4>\n        <form class=\"form-horizontal style-form\">\n            <div class=\"form-group\">\n                <label class=\"col-sm-2 col-sm-2 control-label\">Enable</label>\n                <div class=\"col-sm-10\">\n                    <ui-switch name=\"ec_enable\" [(ngModel)]=\"dataservice.ec_detecting.enable\"></ui-switch>\n                </div>\n            </div>\n\n            <div class=\"form-group\" *ngIf=\"dataservice.ec_detecting.enable\">\n                <label class=\"col-sm-2 col-sm-2 control-label\">Set point</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"number\" name=\"ec_setpoint\" [(ngModel)]=\"dataservice.ec_detecting.setpoint\" class=\"form-control round-form\">\n                </div>\n            </div>\n            <div class=\"form-group\" *ngIf=\"dataservice.ec_detecting.enable\">\n                <label class=\"col-sm-2 col-sm-2 control-label\">Detecting</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"number\" name=\"ec_detecting\" [(ngModel)]=\"dataservice.ec_detecting.detecting\" class=\"form-control round-form\">\n                </div>\n            </div>\n            <div class=\"form-group\" *ngIf=\"dataservice.ec_detecting.enable\">\n                <label class=\" col-sm-2 col-sm-2 control-label \">Working</label>\n                <div class=\"col-sm-10 \">\n                    <input type=\"number \" name=\"ec_working\" [(ngModel)]=\"dataservice.ec_detecting.working\" class=\"form-control round-form \">\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n<div class=\"col-lg-12 \">\n    <div class=\"form-panel \">\n        <h4 class=\"mb \"><i class=\"fa fa-angle-right \"></i> pH</h4>\n        <form class=\"form-horizontal style-form \">\n            <div class=\"form-group \">\n                <label class=\"col-sm-2 col-sm-2 control-label \">Enable</label>\n                <div class=\"col-sm-10 \">\n                    <ui-switch name=\"ph_enable\" [(ngModel)]=\"dataservice.ph_detecting.enable\"></ui-switch>\n                </div>\n            </div>\n            <div class=\"form-group\" *ngIf=\"dataservice.ph_detecting.enable\">\n                <label class=\"col-sm-2 col-sm-2 control-label \">Set point</label>\n                <div class=\"col-sm-10 \">\n                    <input type=\"number\" name=\"ph_setpoint\" [(ngModel)]=\"dataservice.ph_detecting.setpoint\" class=\"form-control round-form \">\n                </div>\n            </div>\n            <div class=\"form-group\" *ngIf=\"dataservice.ph_detecting.enable\">\n                <label class=\"col-sm-2 col-sm-2 control-label \">Detecting</label>\n                <div class=\"col-sm-10 \">\n                    <input type=\"number \" name=\"ph_detecting\" [(ngModel)]=\"dataservice.ph_detecting.detecting\" class=\"form-control round-form \">\n                </div>\n            </div>\n            <div class=\"form-group \" *ngIf=\"dataservice.ph_detecting.enable\">\n                <label class=\"col-sm-2 col-sm-2 control-label \">Working</label>\n                <div class=\"col-sm-10 \">\n                    <input type=\"number \" name=\"ph_working\" [(ngModel)]=\"dataservice.ph_detecting.working\" class=\"form-control round-form \">\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n<div class=\"col-lg-12 \">\n    <div class=\"form-panel \">\n        <h4 class=\"mb \"><i class=\"fa fa-angle-right \"></i> CO2</h4>\n        <form class=\"form-horizontal style-form \">\n            <div class=\"form-group \">\n                <label class=\"col-sm-2 col-sm-2 control-label \">Enable</label>\n                <div class=\"col-sm-10 \">\n                    <ui-switch name=\"co2_enable\" [(ngModel)]=\"dataservice.co2_detecting.enable\"></ui-switch>\n                </div>\n            </div>\n            <div class=\"form-group \" *ngIf=\"dataservice.co2_detecting.enable\">\n                <label class=\"col-sm-2 col-sm-2 control-label \">Set point</label>\n                <div class=\"col-sm-10 \">\n                    <input type=\"number \" name=\"co2_setpoint\" [(ngModel)]=\"dataservice.co2_detecting.setpoint\" class=\"form-control round-form \">\n                </div>\n            </div>\n            <div class=\"form-group \" *ngIf=\"dataservice.co2_detecting.enable\">\n                <label class=\"col-sm-2 col-sm-2 control-label \">Detecting</label>\n                <div class=\"col-sm-10 \">\n                    <input type=\"number \" name=\"co2_detecting\" [(ngModel)]=\"dataservice.co2_detecting.detecting\" class=\"form-control round-form \">\n                </div>\n            </div>\n            <div class=\"form-group \" *ngIf=\"dataservice.co2_detecting.enable\">\n                <label class=\"col-sm-2 col-sm-2 control-label \">Working</label>\n                <div class=\"col-sm-10 \">\n                    <input type=\"number \" name=\"co2_working\" [(ngModel)]=\"dataservice.co2_detecting.working\" class=\"form-control round-form \">\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n<div class=\"col-lg-12 \" style=\"margin-left: 10px;\">\n    <div style=\"display: inline-block\">\n        <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"Update()\">Update</button>\n        <span style=\"font-size: 20px;\" *ngIf=\"status_show\">Status: <b [ngStyle]=\"{ 'color': status_color }\">{{status_text}}</b></span>\n    </div>\n\n</div>"

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 \">\n    <div class=\"form-panel \">\n        <h4 class=\"mb \"><i class=\"fa fa-angle-right \"></i> Fan</h4>\n        <div class=\"row\">\n            <div class=\"panel-body\">\n                <div class=\"task-content\">\n                    <ul class=\"task-list\">\n                        <li *ngFor=\"let i of dataservice.fan_timer; let ind = index;\">\n\n                            <div class=\"row\" style=\"margin-top: 10px\">\n                                <div class=\"col-xs-12 col-sm-12 col-md-10 col-lg-10\">\n                                    <div class=\"task-title\">\n                                        <span class=\"task-title-sp\" style=\"font-size: 18px;\"><b>{{TimerToString(i)}}</b></span>\n                                        <div class=\"pull-right\">\n                                            <button class=\"btn btn-danger\" (click)=\"remove_fan(ind)\"><i class=\"fa fa-trash-o \"></i></button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xs-7 col-sm-7 col-md-3 col-lg-3\">\n                <h5>Start</h5>\n                <div style=\"display:inline-block;\">\n                    <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"fan.start.hour=$event.target.value\">\n                          <option  *ngFor=\"let i of hourList\">{{i}}</option>\n                        </select>\n                </div>\n                <div style=\"display:inline-block;\">\n                    <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"fan.start.min=$event.target.value\">\n                          <option  *ngFor=\"let i of minList\">{{i}}</option>\n                        </select>\n                </div>\n                <br>\n                <h5>To</h5>\n\n                <div style=\"display:inline-block;\">\n                    <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"fan.end.hour=$event.target.value\">\n                          <option  *ngFor=\"let i of hourList\">{{i}}</option>\n                        </select>\n                </div>\n\n\n                <div style=\"display:inline-block;\">\n                    <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"fan.end.min=$event.target.value\">\n                          <option  *ngFor=\"let i of minList\">{{i}}</option>\n                        </select>\n                </div>\n\n            </div>\n\n            <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n                <button type=\"button\" class=\"btn btn-default btn-lg\" style=\"margin-top: 60px;\" (click)=\"add_fan()\">Add</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n<div class=\"col-lg-12 \">\n    <div class=\"form-panel \">\n        <h4 class=\"mb \"><i class=\"fa fa-angle-right \"></i> Pump</h4>\n        <div class=\"row\">\n            <div class=\"panel-body\">\n                <div class=\"task-content\">\n                    <ul class=\"task-list\">\n                        <li *ngFor=\"let i of dataservice.pump_timer; let ind = index;\">\n\n                            <div class=\"row\" style=\"margin-top: 10px\">\n                                <div class=\"col-xs-12 col-sm-12 col-md-10 col-lg-10\">\n                                    <div class=\"task-title\">\n                                        <span class=\"task-title-sp\" style=\"font-size: 18px;\"><b>{{TimerToString(i)}}</b></span>\n                                        <div class=\"pull-right\">\n                                            <button class=\"btn btn-danger\" (click)=\"remove_pump(ind)\"><i class=\"fa fa-trash-o \"></i></button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xs-7 col-sm-7 col-md-3 col-lg-3\">\n                <h5>Start</h5>\n                <div style=\"display:inline-block;\">\n                    <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"pump.start.hour=$event.target.value\">\n                          <option  *ngFor=\"let i of hourList\">{{i}}</option>\n                        </select>\n                </div>\n                <div style=\"display:inline-block;\">\n                    <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"pump.start.min=$event.target.value\">\n                          <option  *ngFor=\"let i of minList\">{{i}}</option>\n                        </select>\n                </div>\n                <br>\n                <h5>To</h5>\n\n                <div style=\"display:inline-block;\">\n                    <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"pump.end.hour=$event.target.value\">\n                          <option  *ngFor=\"let i of hourList\">{{i}}</option>\n                        </select>\n                </div>\n\n\n                <div style=\"display:inline-block;\">\n                    <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"pump.end.min=$event.target.value\">\n                          <option  *ngFor=\"let i of minList\">{{i}}</option>\n                        </select>\n                </div>\n\n            </div>\n\n            <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n                <button type=\"button\" class=\"btn btn-default btn-lg\" style=\"margin-top: 60px;\" (click)=\"add_pump()\">Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n<div class=\"col-lg-12 \">\n    <div class=\"form-panel \">\n        <h4 class=\"mb \"><i class=\"fa fa-angle-right \"></i> Led</h4>\n        <div class=\"row\">\n            <div class=\"panel-body\">\n                <div class=\"task-content\">\n                    <ul class=\"task-list\">\n                        <li *ngFor=\"let i of dataservice.led_timer; let ind = index;\">\n\n                            <div class=\"row\" style=\"margin-top: 10px\">\n                                <div class=\"col-xs-12 col-sm-12 col-md-10 col-lg-10\">\n                                    <div class=\"task-title\">\n                                        <span class=\"task-title-sp\" style=\"font-size: 18px;\"><b>{{TimerToString(i)}}</b></span>\n                                        <div class=\"pull-right\">\n                                            <button class=\"btn btn-danger\" (click)=\"remove_led(ind)\"><i class=\"fa fa-trash-o \"></i></button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xs-7 col-sm-7 col-md-3 col-lg-3\">\n                <h5>Start</h5>\n                <div style=\"display:inline-block;\">\n                    <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"led.start.hour=$event.target.value\">\n                          <option  *ngFor=\"let i of hourList\">{{i}}</option>\n                        </select>\n                </div>\n                <div style=\"display:inline-block;\">\n                    <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"led.start.min=$event.target.value\">\n                          <option  *ngFor=\"let i of minList\">{{i}}</option>\n                        </select>\n                </div>\n                <br>\n                <h5>To</h5>\n\n                <div style=\"display:inline-block;\">\n                    <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"led.end.hour=$event.target.value\">\n                          <option  *ngFor=\"let i of hourList\">{{i}}</option>\n                        </select>\n                </div>\n\n\n                <div style=\"display:inline-block;\">\n                    <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"led.end.min=$event.target.value\">\n                          <option  *ngFor=\"let i of minList\">{{i}}</option>\n                        </select>\n                </div>\n\n            </div>\n\n            <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n                <button type=\"button\" class=\"btn btn-default btn-lg\" style=\"margin-top: 60px;\" (click)=\"add_led()\">Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"col-lg-12 \" style=\"margin-left: 10px;\">\n    <div style=\"display: inline-block\">\n        <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"Update()\">Update</button>\n        <span style=\"font-size: 20px;\" *ngIf=\"status_show\">Status: <b [ngStyle]=\"{ 'color': status_color }\">{{status_text}}</b></span>\n    </div>\n\n</div>"

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>Service status: <span style=\"color: red;\">Offline</span></h2>\n</div>"

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n        </div>\n        <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n        \t<h3><b>Connection Status</b></h3>\n        </div>\n    </div>\n    <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\"></div>\n    <div class=\"col-md-2 col-sm-2 box0\">\n        <div class=\"box1\">\n            <span class=\"li_cloud\"></span>\n            <h3>SOLUTION</h3>\n            <h4 *ngIf=\"data.cm01\"><b style=\"color: green;\">ONLINE</b></h4>\n            <h4 *ngIf=\"!data.cm01\"><b style=\"color: red;\">OFFLINE</b></h4>\n        </div>\n        <p>EC , PH MODULE</p>\n    </div>\n    <div class=\"col-md-2 col-sm-2 box0\">\n        <div class=\"box1\">\n            <span class=\"li_cloud\"></span>\n            <h3>AIR</h3>\n            <h4 *ngIf=\"data.cm02\"><b style=\"color: green;\">ONLINE</b></h4>\n            <h4 *ngIf=\"!data.cm02\"><b style=\"color: red;\">OFFLINE</b></h4>\n        </div>\n        <p>CO2 , TEMPERATURE MODULE</p>\n    </div>\n</div>\n"

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <div class=\"col-lg-4 col-md-4 col-sm-4 mb\">\n                <div class=\"weather-3 pn centered\" style=\"background-color: #4298f4;\">\n                    <i class=\"fa fa-pagelines\"></i>\n                    <h1>{{data.co2}} ppm</h1>\n                    <div class=\"info\">\n                        <div class=\"row\">\n                            <h3 class=\"centered\">CO<sub>2</sub></h3>\n                            <div class=\"col-sm-6 col-xs-6 pull-left\">\n                                <p class=\"goleft\"><i class=\"fa fa-pagelines\"></i> CO<sub>2</sub></p>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 pull-right\">\n                                <p class=\"goright\"><i class=\"fa fa-cog\"></i> </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 mb\">\n                <div class=\"weather-3 pn centered\" style=\"background-color: #e87777;\">\n                    <i class=\"fa fa-thermometer-empty\"></i>\n                    <h1>{{data.temp}}º C</h1>\n                    <div class=\"info\">\n                        <div class=\"row\">\n                            <h3 class=\"centered\">Temperature</h3>\n                            <div class=\"col-sm-6 col-xs-6 pull-left\">\n                                <p class=\"goleft\"><i class=\"fa fa-thermometer-empty\"></i> Temperature</p>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 pull-right\">\n                                <p class=\"goright\"><i class=\"fa fa-cog\"></i></p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 mb\">\n                <div class=\"weather-3 pn centered\" style=\"background-color: #00c5de;\">\n                    <i class=\"fa fa-tint\"></i>\n                    <h1>{{data.humi}} %</h1>\n                    <div class=\"info\">\n                        <div class=\"row\">\n                            <h3 class=\"centered\">Humidity</h3>\n                            <div class=\"col-sm-6 col-xs-6 pull-left\">\n                                <p class=\"goleft\"><i class=\"fa fa-tint\"></i> Humidity</p>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 pull-right\">\n                                <p class=\"goright\"><i class=\"fa fa-cog\"></i></p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n\n\n\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <!-- <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\"></div> -->\n\n            <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n\n            </div>\n\n            <div class=\"col-lg-4 col-md-4 col-sm-4 mb\">\n                <div class=\"weather-3 pn centered\" style=\"background-color: #81d45f;\">\n                    <i class=\"fa fa-bolt\"></i>\n                    <h1>{{data.ec}} mS/cm</h1>\n                    <div class=\"info\">\n                        <div class=\"row\">\n                            <h3 class=\"centered\">EC</h3>\n                            <div class=\"col-sm-6 col-xs-6 pull-left\">\n                                <p class=\"goleft\"><i class=\"fa fa-bolt\"></i> ec</p>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 pull-right\">\n                                <p class=\"goright\"><i class=\"fa fa-cog\"></i></p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 mb\">\n                <div class=\"weather-3 pn centered\" style=\"background-color: #f9d367;\">\n                    <i class=\"fa fa-flask\"></i>\n                    <h1>{{data.ph}} </h1>\n                    <div class=\"info\">\n                        <div class=\"row\">\n                            <h3 class=\"centered\">pH</h3>\n                            <div class=\"col-sm-6 col-xs-6 pull-left\">\n                                <p class=\"goleft\"><i class=\"fa fa-flask\"></i> pH</p>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 pull-right\">\n                                <p class=\"goright\"><i class=\"fa fa-cog\"></i></p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(116);


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConnectionGuard = (function () {
    function ConnectionGuard(router) {
        this.router = router;
        this.isConnect = false;
    }
    ConnectionGuard.prototype.canActivate = function () {
        if (!this.isConnect) {
            this.router.navigateByUrl('/disconnected');
        }
        return this.isConnect;
    };
    return ConnectionGuard;
}());
ConnectionGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], ConnectionGuard);

var _a;
//# sourceMappingURL=connection-guard.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigComponent = (function () {
    function ConfigComponent() {
    }
    ConfigComponent.prototype.ngOnInit = function () {
    };
    return ConfigComponent;
}());
ConfigComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-config',
        template: __webpack_require__(209),
        styles: [__webpack_require__(198)]
    }),
    __metadata("design:paramtypes", [])
], ConfigComponent);

//# sourceMappingURL=config.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_socket_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SensorComponent = (function () {
    function SensorComponent(dataservice, io) {
        var _this = this;
        this.dataservice = dataservice;
        this.io = io;
        this.io.socket.on("DETECTING_SUCCESS", function (data) {
            _this.status_color = "#62fc62";
            _this.status_text = "Successful";
            _this.status_show = true;
        });
    }
    SensorComponent.prototype.ngOnInit = function () {
    };
    SensorComponent.prototype.Update = function () {
        this.status_color = "#9c9e9c";
        this.status_text = "Updating..";
        this.status_show = true;
        var sensors = {
            'ec': this.dataservice.ec_detecting,
            'ph': this.dataservice.ph_detecting,
            'co2': this.dataservice.co2_detecting
        };
        this.io.socket.emit('UPDATE_DETECTING', sensors);
    };
    return SensorComponent;
}());
SensorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-sensor',
        template: __webpack_require__(210),
        styles: [__webpack_require__(199)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_socket_service__["a" /* SocketService */]) === "function" && _b || Object])
], SensorComponent);

var _a, _b;
//# sourceMappingURL=sensor.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_socket_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimerComponent = (function () {
    function TimerComponent(dataservice, io) {
        var _this = this;
        this.dataservice = dataservice;
        this.io = io;
        this.hourList = ["HH", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.minList = ["MM", 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
        this.fan = {
            'start': {
                'hour': "NaN",
                'min': "NaN"
            },
            'end': {
                'hour': "NaN",
                "min": "NaN"
            }
        };
        this.pump = {
            'start': {
                'hour': "NaN",
                'min': "NaN"
            },
            'end': {
                'hour': "NaN",
                "min": "NaN"
            }
        };
        this.led = {
            'start': {
                'hour': "NaN",
                'min': "NaN"
            },
            'end': {
                'hour': "NaN",
                "min": "NaN"
            }
        };
        this.io.socket.on("TIMER_SUCCESS", function (data) {
            _this.status_color = "#62fc62";
            _this.status_text = "Successful";
            _this.status_show = true;
        });
    }
    TimerComponent.prototype.ngOnInit = function () {
        for (var i = 1; i < this.hourList.length; i++) {
            if (this.hourList[i] < 10)
                this.hourList[i] = "0" + this.hourList[i];
            else
                this.hourList[i] = "" + this.hourList[i];
        }
        for (var i = 1; i < this.minList.length; i++) {
            if (this.minList[i] < 10)
                this.minList[i] = "0" + this.minList[i];
            else
                this.minList[i] = "" + this.minList[i];
        }
    };
    TimerComponent.prototype.check_timer = function (timer) {
        if (timer.start.hour == "NaN" || timer.start.min == "NaN" || timer.end.hour == "NaN" || timer.end.min == "NaN") {
            return false;
        }
        var start = Number(timer.start.hour) * 100 + Number(timer.start.min);
        var end = Number(timer.end.hour) * 100 + Number(timer.end.min);
        if (start >= end) {
            return false;
        }
        return true;
    };
    TimerComponent.prototype.check_timer_list = function (timer, timer_list) {
        //start much greater than every end field of timer_list 
        var timer_start = Number(timer.start.hour) * 100 + Number(timer.start.min);
        console.log("start:" + timer_start);
        for (var _i = 0, timer_list_1 = timer_list; _i < timer_list_1.length; _i++) {
            var i = timer_list_1[_i];
            var timer_list_end = Number(i.end.hour) * 100 + Number(i.end.min);
            console.log("end:" + timer_list_end);
            if (timer_start < timer_list_end) {
                return false;
            }
        }
        return true;
    };
    TimerComponent.prototype.add_fan = function () {
        if (!this.check_timer(this.fan)) {
            console.log("[error] check timer fail");
            return;
        }
        if (!this.check_timer_list(this.fan, this.dataservice.fan_timer)) {
            console.log("[error] check timer list fail");
            return;
        }
        var timer = {
            'start': {
                'hour': this.fan.start.hour,
                'min': this.fan.start.min
            },
            'end': {
                'hour': this.fan.end.hour,
                'min': this.fan.end.min
            }
        };
        this.dataservice.fan_timer.push(timer);
        console.log("[info] add timer successful");
    };
    TimerComponent.prototype.remove_fan = function (index) {
        this.dataservice.fan_timer.splice(index, 1);
    };
    TimerComponent.prototype.add_pump = function () {
        if (!this.check_timer(this.pump)) {
            console.log("[error] check timer fail");
            return;
        }
        if (!this.check_timer_list(this.pump, this.dataservice.pump_timer)) {
            console.log("[error] check timer list fail");
            return;
        }
        var timer = {
            'start': {
                'hour': this.pump.start.hour,
                'min': this.pump.start.min
            },
            'end': {
                'hour': this.pump.end.hour,
                'min': this.pump.end.min
            }
        };
        this.dataservice.pump_timer.push(timer);
        console.log("[info] add timer successful");
    };
    TimerComponent.prototype.remove_pump = function (index) {
        this.dataservice.pump_timer.splice(index, 1);
    };
    TimerComponent.prototype.add_led = function () {
        if (!this.check_timer(this.led)) {
            console.log("[error] check timer fail");
            return;
        }
        if (!this.check_timer_list(this.led, this.dataservice.led_timer)) {
            console.log("[error] check timer list fail");
            return;
        }
        var timer = {
            'start': {
                'hour': this.led.start.hour,
                'min': this.led.start.min
            },
            'end': {
                'hour': this.led.end.hour,
                'min': this.led.end.min
            }
        };
        this.dataservice.led_timer.push(timer);
        console.log("[info] add timer successful");
    };
    TimerComponent.prototype.remove_led = function (index) {
        this.dataservice.led_timer.splice(index, 1);
    };
    TimerComponent.prototype.TimerToString = function (timer) {
        // var str = ((timer.start.hour<10)?"0":"") + timer.start.hour + ":" +  ((timer.start.min<10)?"0":"") + timer.start.min +
        // " - " +  ((timer.end.hour<10)?"0":"") + timer.end.hour + ":" +  ((timer.end.min<10)?"0":"") + timer.end.min
        var str = timer.start.hour + ":" + timer.start.min + " - " + timer.end.hour + ":" + timer.end.min;
        return str;
    };
    TimerComponent.prototype.Update = function () {
        this.status_color = "#9c9e9c";
        this.status_text = "Updating..";
        this.status_show = true;
        this.CraftTimer(this.dataservice.fan_timer);
        var timer_list = {
            'fan': this.CraftTimer(this.dataservice.fan_timer),
            'pump': this.CraftTimer(this.dataservice.pump_timer),
            'led': this.CraftTimer(this.dataservice.led_timer)
        };
        this.io.socket.emit('UPDATE_TIMER', timer_list);
    };
    TimerComponent.prototype.CraftTimer = function (timer_list) {
        var timer = [];
        for (var _i = 0, timer_list_2 = timer_list; _i < timer_list_2.length; _i++) {
            var t = timer_list_2[_i];
            var start = Number(t.start.hour) * 100 + Number(t.start.min);
            var end = Number(t.end.hour) * 100 + Number(t.end.min);
            var time = {
                'start': start,
                'end': end
            };
            timer.push(time);
        }
        return timer;
    };
    return TimerComponent;
}());
TimerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-timer',
        template: __webpack_require__(211),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_socket_service__["a" /* SocketService */]) === "function" && _b || Object])
], TimerComponent);

var _a, _b;
//# sourceMappingURL=timer.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisconnectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisconnectComponent = (function () {
    function DisconnectComponent() {
    }
    DisconnectComponent.prototype.ngOnInit = function () {
    };
    return DisconnectComponent;
}());
DisconnectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-disconnect',
        template: __webpack_require__(212),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [])
], DisconnectComponent);

//# sourceMappingURL=disconnect.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummaryComponent = (function () {
    function SummaryComponent(data) {
        this.data = data;
        this.title = "Summary";
    }
    SummaryComponent.prototype.ngOnInit = function () {
        if (this.data.cm01 == undefined || this.data.cm01 == false) {
            this.data.ec = 0.0;
            this.data.ph = 0.0;
            this.data.wt = 0.0;
        }
        if (this.data.cm02 == undefined || this.data.cm02 == false) {
            this.data.co2 = 0.0;
            this.data.temp = 0.0;
            this.data.humi = 0.0;
        }
    };
    return SummaryComponent;
}());
SummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-summary',
        template: __webpack_require__(214),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */]) === "function" && _a || Object])
], SummaryComponent);

var _a;
//# sourceMappingURL=summary.component.js.map

/***/ })

},[258]);
//# sourceMappingURL=main.bundle.js.map