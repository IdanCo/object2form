webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark flex-row-reverse\">\n  <a class=\"github-button ml-auto\" href=\"https://github.com/IdanCo/object2form\" data-size=\"large\" data-show-count=\"true\" aria-label=\"Star IdanCo/object2form on GitHub\">Star</a>\n</nav>\n\n<!-- Main jumbotron for a primary marketing message or call to action -->\n<div class=\"jumbotron\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">\n      <code>&#123;object&#125;</code>\n      to\n      <code>&lt;form&gt;</code>\n    </h1>\n    <p class=\"lead pt-3\">Easily convert JavaScript objects to HTML forms for faster UI development</p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <!-- Example row of columns -->\n  <div class=\"row align-items-stretch mb-5\">\n    <div class=\"col-md-6\">\n      <app-transformer></app-transformer>\n    </div>\n    <div class=\"col-md-6\">\n      <app-transformer-settings></app-transformer-settings>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <app-object (sourceObjectChanged)=\"setSourceObject($event)\"></app-object>\n    </div>\n    <div class=\"col-md-6\">\n      <app-result [sourceObject]=\"sourceObject\"></app-result>\n    </div>\n  </div>\n\n  <hr>\n\n  <footer>\n    <p><a href=\"http://idancohen.com\">Idan Cohen</a> 2017</p>\n  </footer>\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-nav-svg {\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  vertical-align: text-top; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function AppComponent() {
        this.sourceObject = {};
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.setSourceObject = function (sourceObject) {
        this.sourceObject = sourceObject;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_transformer_transformer_component__ = __webpack_require__("../../../../../src/app/components/transformer/transformer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_transformer_settings_transformer_settings_component__ = __webpack_require__("../../../../../src/app/components/transformer-settings/transformer-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_object_object_component__ = __webpack_require__("../../../../../src/app/components/object/object.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_result_result_component__ = __webpack_require__("../../../../../src/app/components/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transformers_transformers_service__ = __webpack_require__("../../../../../src/app/transformers/transformers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_highlightjs__ = __webpack_require__("../../../../ngx-highlightjs/modules/ngx-highlightjs.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var options = {
    theme: 'github-gist',
    path: 'assets/hljs'
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_transformer_transformer_component__["a" /* TransformerComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_transformer_settings_transformer_settings_component__["a" /* TransformerSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_object_object_component__["a" /* ObjectComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_result_result_component__["a" /* ResultComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_highlightjs__["a" /* HighlightModule */].forRoot(options)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__transformers_transformers_service__["a" /* TransformersService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/object/object.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header text-white bg-primary \">3. Object</div>\n  <div class=\"card-body\">\n    <div class=\"form-group\">\n      <textarea class=\"form-control\" id=\"sourceObject\" rows=\"10\" [(ngModel)]=\"rawSourceObject\" [ngClass]=\"{'is-invalid': !isObjectValid}\"></textarea>\n      <div class=\"invalid-feedback\">Data is not a valid javascript object</div>\n    </div>\n    <button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"updateSourceObject()\">Update</button>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/object/object.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/object/object.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DEFAULT_SOURCE_OBJECT = "{\n  name: \"John Smith\",\n  registered: true,\n  age: 32\n}";
var ObjectComponent = (function () {
    function ObjectComponent() {
        this.sourceObjectChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.rawSourceObject = '';
        this.isObjectValid = true;
    }
    ObjectComponent.prototype.ngOnInit = function () {
        this.rawSourceObject = DEFAULT_SOURCE_OBJECT;
        this.updateSourceObject();
    };
    ObjectComponent.prototype.updateSourceObject = function () {
        var sourceObject;
        // const sourceObject = JSON.parse(this.rawSourceObject);
        try {
            sourceObject = JSON.parse(JSON.stringify(eval('(' + this.rawSourceObject + ')')));
            this.isObjectValid = true;
        }
        catch (e) {
            this.isObjectValid = false;
        }
        this.sourceObjectChanged.emit(sourceObject);
    };
    return ObjectComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], ObjectComponent.prototype, "sourceObjectChanged", void 0);
ObjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-object',
        template: __webpack_require__("../../../../../src/app/components/object/object.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/object/object.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ObjectComponent);

//# sourceMappingURL=object.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header text-white bg-primary \">4. Result</div>\n  <div class=\"card-body\">\n    <pre><code highlight [code]=\"result\" class=\"p-0\"></code></pre>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/result/result.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transformers_transformers_service__ = __webpack_require__("../../../../../src/app/transformers/transformers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultComponent = (function () {
    function ResultComponent(transformersService) {
        this.transformersService = transformersService;
        this.result = '';
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transformersService.getCurrentTransformer().subscribe(function () { return _this.renderResult(); });
    };
    ResultComponent.prototype.ngOnChanges = function () {
        this.renderResult();
    };
    ResultComponent.prototype.renderResult = function () {
        if (this.sourceObject) {
            this.result = this.transformersService.processObject(this.sourceObject);
        }
        else {
            this.result = 'Please use a valid object';
        }
    };
    return ResultComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ResultComponent.prototype, "sourceObject", void 0);
ResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-result',
        template: __webpack_require__("../../../../../src/app/components/result/result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/result/result.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__transformers_transformers_service__["a" /* TransformersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__transformers_transformers_service__["a" /* TransformersService */]) === "function" && _a || Object])
], ResultComponent);

var _a;
//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/transformer-settings/transformer-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card h-100\">\n  <div class=\"card-header text-white bg-primary \">2. Settings</div>\n  <div class=\"card-body\">\n    <form (change)=\"updateSettings(f)\" #f=\"ngForm\">\n      <div class=\"form-check\" *ngFor=\"let setting of transformer.settings\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"setting.value\" [name]=\"setting.key\">\n          {{ setting.label }}\n        </label>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/transformer-settings/transformer-settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/transformer-settings/transformer-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransformerSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transformers_transformers_service__ = __webpack_require__("../../../../../src/app/transformers/transformers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransformerSettingsComponent = (function () {
    function TransformerSettingsComponent(transformersService) {
        this.transformersService = transformersService;
    }
    TransformerSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transformersService.getCurrentTransformer().subscribe(function (transformer) { return _this.transformer = transformer; });
    };
    TransformerSettingsComponent.prototype.updateSettings = function () {
        this.transformersService.setCurrentTransformer(this.transformer);
    };
    return TransformerSettingsComponent;
}());
TransformerSettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-transformer-settings',
        template: __webpack_require__("../../../../../src/app/components/transformer-settings/transformer-settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/transformer-settings/transformer-settings.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__transformers_transformers_service__["a" /* TransformersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__transformers_transformers_service__["a" /* TransformersService */]) === "function" && _a || Object])
], TransformerSettingsComponent);

var _a;
//# sourceMappingURL=transformer-settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/transformer/transformer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header text-white bg-primary \">1. Transformer</div>\n  <div class=\"card-body\">\n      <div class=\"form-check\" *ngFor=\"let transformer of transformers\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"transformer\" [(ngModel)]=\"chosenTransformer\" (change)=\"setTransformer(transformer)\" [value]=\"transformer\">\n          {{ transformer.name }}\n        </label>\n      </div>\n    <p class=\"card-text text-muted small\">Only 4 transformers right now :-\\ Help us and <a href=\"https://github.com/IdanCo/object2form\" target=\"_blank\">contribute</a> more</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/transformer/transformer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/transformer/transformer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransformerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transformers_transformers_service__ = __webpack_require__("../../../../../src/app/transformers/transformers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransformerComponent = (function () {
    function TransformerComponent(transformersService) {
        this.transformersService = transformersService;
    }
    TransformerComponent.prototype.ngOnInit = function () {
        this.transformers = this.transformersService.getTransformers();
        this.setTransformer(this.transformers[0]);
    };
    TransformerComponent.prototype.setTransformer = function (transformer) {
        this.chosenTransformer = transformer;
        this.transformersService.setCurrentTransformer(transformer);
    };
    return TransformerComponent;
}());
TransformerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-transformer',
        template: __webpack_require__("../../../../../src/app/components/transformer/transformer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/transformer/transformer.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__transformers_transformers_service__["a" /* TransformersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__transformers_transformers_service__["a" /* TransformersService */]) === "function" && _a || Object])
], TransformerComponent);

var _a;
//# sourceMappingURL=transformer.component.js.map

/***/ }),

/***/ "../../../../../src/app/transformers/angular-bootstrap3.transformer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularBootstrap3Transformer; });
var AngularBootstrap3Transformer = (function () {
    function AngularBootstrap3Transformer() {
        this.name = 'Angular & Bootstrap 3';
        this.settings = [{
                key: 'validations',
                label: 'add bootstrap 3 validation classes',
                value: true
            }];
    }
    AngularBootstrap3Transformer.prototype.getFormHeader = function () {
        return "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n";
    };
    AngularBootstrap3Transformer.prototype.getFormFooter = function () {
        return "  \n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>";
    };
    AngularBootstrap3Transformer.prototype.getFormControl = function (key, value) {
        var validations = this.settings.find(function (e) { return e.key === 'validations'; });
        var result;
        if (validations.value) {
            result = "\n  <div class=\"form-group\" [ngClass]=\"{'has-error': " + key + ".invalid && " + key + ".touched}\">\n    <label for=\"" + key + "\">" + key + "</label>\n    <input type=\"text\" class=\"form-control\" id=\"" + key + "\"\n       ngModel name=\"" + key + "\" #" + key + "=\"ngModel\"\n       required>\n    <span class=\"help-block\" *ngIf=\"" + key + ".invalid && " + key + ".touched}\">Invalid value</span>\n  </div>\n    ";
        }
        else {
            result = "\n  <div class=\"form-group\">\n    <label for=\"" + key + "\">" + key + "</label>\n    <input type=\"text\" class=\"form-control\" id=\"" + key + "\"\n       ngModel name=\"" + key + "\" #" + key + "=\"ngModel\"\n       required>\n  </div>\n    ";
        }
        return result;
    };
    return AngularBootstrap3Transformer;
}());

//# sourceMappingURL=angular-bootstrap3.transformer.js.map

/***/ }),

/***/ "../../../../../src/app/transformers/angular-bootstrap4.transformer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularBootstrap4Transformer; });
var AngularBootstrap4Transformer = (function () {
    function AngularBootstrap4Transformer() {
        this.name = 'Angular & Bootstrap 4';
        this.settings = [{
                key: 'validations',
                label: 'add bootstrap 4 validation classes',
                value: true
            }];
    }
    AngularBootstrap4Transformer.prototype.getFormHeader = function () {
        var result = "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n";
        return result;
    };
    AngularBootstrap4Transformer.prototype.getFormFooter = function () {
        return "  \n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>";
    };
    AngularBootstrap4Transformer.prototype.getFormControl = function (key, value) {
        var result;
        switch (typeof (value)) {
            case 'boolean':
                result = this.renderBooleanControl(key);
                break;
            default:
                result = this.renderTextControl(key);
        }
        return result;
    };
    AngularBootstrap4Transformer.prototype.renderTextControl = function (key) {
        var result;
        var validations = this.settings.find(function (e) { return e.key === 'validations'; });
        if (validations.value) {
            result = "\n  <div class=\"form-group\">\n    <label for=\"" + key + "\">" + key + "</label>\n    <input type=\"text\" class=\"form-control\" id=\"" + key + "\"\n       ngModel name=\"" + key + "\" #" + key + "=\"ngModel\" required\n       [ngClass]=\"{'is-invalid': " + key + ".invalid && " + key + ".touched}\">\n    <div class=\"invalid-feedback\">Invalid value</div>\n  </div>\n";
        }
        else {
            result = "\n  <div class=\"form-group\">\n    <label for=\"" + key + "\">" + key + "</label>\n    <input type=\"text\" class=\"form-control\" id=\"" + key + "\"\n       ngModel name=\"" + key + "\" #" + key + "=\"ngModel\" required>\n  </div>\n";
        }
        return result;
    };
    AngularBootstrap4Transformer.prototype.renderBooleanControl = function (key) {
        var result;
        result = "\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"" + key + "\"\n       ngModel name=\"" + key + "\" #" + key + "=\"ngModel\">\n      " + key + "\n    </label>\n  </div>\n";
        return result;
    };
    return AngularBootstrap4Transformer;
}());

//# sourceMappingURL=angular-bootstrap4.transformer.js.map

/***/ }),

/***/ "../../../../../src/app/transformers/angular-material.transformer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMaterialTransformer; });
var AngularMaterialTransformer = (function () {
    function AngularMaterialTransformer() {
        this.name = 'Angular & Angular Material';
        this.settings = [{
                key: 'validations',
                label: 'add material validation',
                value: true
            }];
    }
    AngularMaterialTransformer.prototype.getFormHeader = function () {
        return "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">";
    };
    AngularMaterialTransformer.prototype.getFormFooter = function () {
        return "\n\n    <button mat-button type=\"submit\">Submit</button>\n</form>";
    };
    AngularMaterialTransformer.prototype.getFormControl = function (key, value) {
        var result;
        switch (typeof (value)) {
            case 'boolean':
                result = this.renderBooleanControl(key);
                break;
            default:
                result = this.renderTextControl(key);
        }
        return result;
    };
    AngularMaterialTransformer.prototype.renderTextControl = function (key) {
        var result;
        var validations = this.settings.find(function (e) { return e.key === 'validations'; });
        if (validations.value) {
            result = "\n\n    <div>\n        <mat-form-field>\n            <input matInput placeholder=\"" + key + "\" id=\"" + key + "\"\n            [(ngModel)]=\"" + key + "\" name=\"" + key + "\"  [formControl]=\"" + key + "FormControl\">\n            <mat-error *ngIf=\"" + key + "FormControl.invalid\">\n                Invalid value.\n            </mat-error>\n        </mat-form-field>\n    </div>";
        }
        else {
            result = "\n\n        <div>\n            <mat-form-field>\n                <input matInput placeholder=\"" + key + "\" id=\"" + key + "\"\n                [(ngModel)]=\"" + key + "\" name=\"" + key + "\" required>\n            </mat-form-field>\n        </div>";
        }
        return result;
    };
    AngularMaterialTransformer.prototype.renderBooleanControl = function (key) {
        var result;
        result = "\n\n    <div>\n        <mat-checkbox id=\"" + key + "\" [(ngModel)]=\"" + key + "\" name=\"" + key + "\">\n        " + key + "\n        </mat-checkbox>\n    </div>";
        return result;
    };
    return AngularMaterialTransformer;
}());

//# sourceMappingURL=angular-material.transformer.js.map

/***/ }),

/***/ "../../../../../src/app/transformers/angular-semantic.transformer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularSemanticTransformer; });
var AngularSemanticTransformer = (function () {
    function AngularSemanticTransformer() {
        this.name = 'Angular & Semantic';
        this.settings = [{
                key: 'validations',
                label: 'add Semantic validation classes',
                value: true
            }];
    }
    AngularSemanticTransformer.prototype.getFormHeader = function () {
        return "<form class=\"ui form\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n";
    };
    AngularSemanticTransformer.prototype.getFormFooter = function () {
        return "\n  <button type=\"submit\" class=\"ui primary button\">Submit</button>\n</form>";
    };
    AngularSemanticTransformer.prototype.getFormControl = function (key, value) {
        var validations = this.settings.find(function (e) { return e.key === 'validations'; });
        var result;
        if (validations.value) {
            result = "\n  <div class=\"field\">\n    <label for=\"" + key + "\">" + key + "</label>\n    <div class=\"ui input\" [ngClass]=\"{'error': " + key + ".invalid && " + key + ".touched}\">\n      <input type=\"text\" id=\"" + key + "\"\n        ngModel name=\"" + key + "\" #" + key + "=\"ngModel\"\n        required>\n    </div>\n  </div>\n    ";
        }
        else {
            result = "\n  <div class=\"form-group\">\n    <label for=\"" + key + "\">" + key + "</label>\n    <div class=\"ui input\">\n      <input type=\"text\" class=\"form-control\" id=\"" + key + "\"\n        ngModel name=\"" + key + "\" #" + key + "=\"ngModel\"\n        required>\n    </div>\n  </div>\n    ";
        }
        return result;
    };
    return AngularSemanticTransformer;
}());

//# sourceMappingURL=angular-semantic.transformer.js.map

/***/ }),

/***/ "../../../../../src/app/transformers/transformers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransformersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_bootstrap4_transformer__ = __webpack_require__("../../../../../src/app/transformers/angular-bootstrap4.transformer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_bootstrap3_transformer__ = __webpack_require__("../../../../../src/app/transformers/angular-bootstrap3.transformer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_transformer__ = __webpack_require__("../../../../../src/app/transformers/angular-material.transformer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_semantic_transformer__ = __webpack_require__("../../../../../src/app/transformers/angular-semantic.transformer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransformersService = (function () {
    function TransformersService() {
        this.transformers = [];
        this.currentTransformerSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"]();
        this.registerTransformer(new __WEBPACK_IMPORTED_MODULE_2__angular_bootstrap4_transformer__["a" /* AngularBootstrap4Transformer */]());
        this.registerTransformer(new __WEBPACK_IMPORTED_MODULE_3__angular_bootstrap3_transformer__["a" /* AngularBootstrap3Transformer */]());
        this.registerTransformer(new __WEBPACK_IMPORTED_MODULE_4__angular_material_transformer__["a" /* AngularMaterialTransformer */]());
        this.registerTransformer(new __WEBPACK_IMPORTED_MODULE_5__angular_semantic_transformer__["a" /* AngularSemanticTransformer */]());
    }
    TransformersService.prototype.registerTransformer = function (transformer) {
        this.transformers.push(transformer);
    };
    TransformersService.prototype.getTransformers = function () {
        return this.transformers;
    };
    TransformersService.prototype.setCurrentTransformer = function (transformer) {
        this.transformer = transformer;
        this.currentTransformerSubject.next(transformer);
    };
    TransformersService.prototype.getCurrentTransformer = function () {
        return this.currentTransformerSubject.asObservable();
    };
    TransformersService.prototype.processObject = function (sourceObject) {
        var result;
        result = this.transformer.getFormHeader();
        for (var key in sourceObject) {
            result = result + this.transformer.getFormControl(key, sourceObject[key]);
        }
        result = result + this.transformer.getFormFooter();
        return result;
    };
    return TransformersService;
}());
TransformersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TransformersService);

//# sourceMappingURL=transformers.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map