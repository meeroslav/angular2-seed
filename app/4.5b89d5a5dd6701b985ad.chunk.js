webpackJsonp([4],{

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(77);
var typefaces_component_1 = __webpack_require__(868);
var core_2 = __webpack_require__(44);
var shared_module_1 = __webpack_require__(204);
var routes = [
    { path: '', component: typefaces_component_1.TypefacesComponent }
];
var TypefacesPageModule = (function () {
    function TypefacesPageModule() {
    }
    TypefacesPageModule = __decorate([
        core_1.NgModule({
            imports: [
                core_2.TranslateModule,
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [typefaces_component_1.TypefacesComponent]
        })
    ], TypefacesPageModule);
    return TypefacesPageModule;
}());
exports.TypefacesPageModule = TypefacesPageModule;


/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var TypefacesComponent = (function () {
    function TypefacesComponent() {
    }
    TypefacesComponent.prototype.ngOnInit = function () {
    };
    TypefacesComponent = __decorate([
        core_1.Component({
            selector: 'typefaces-page',
            styles: [__webpack_require__(869)],
            template: __webpack_require__(870),
            host: {
                'class': 'page'
            }
        })
    ], TypefacesComponent);
    return TypefacesComponent;
}());
exports.TypefacesComponent = TypefacesComponent;


/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = "/********************************\n    Custom theme values\n*********************************/\n/********************************************\n*********************************************\n          Override bootstrap values\n*********************************************\n*********************************************/\n.bold-text {\n  font-family: 'OpenSans-Bold', sans-serif; }\n\n.regular-text {\n  font-family: 'OpenSans-Regular', sans-serif; }\n\n.light-text {\n  font-family: 'OpenSans-Light', sans-serif; }\n\n.icon {\n  font-size: 2rem;\n  text-align: center; }\n"

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = "<breadcrumb pageTitle=\"Typefaces\" pageSubtitle=\"Park\"></breadcrumb>\n\n<h2>OpenSans - sizes</h2>\n<div class=\"row\">\n  <div class=\"col-sm-12 cold-lg-6\">\n    <div class=\"card card-block\">\n      <h1>H1 - The quick brown fox jumps over the lazy dog</h1>\n      <h2>H2 - The quick brown fox jumps over the lazy dog</h2>\n      <h3>H3 - The quick brown fox jumps over the lazy dog</h3>\n      <h4>H4 - The quick brown fox jumps over the lazy dog</h4>\n      <h5>H5 - The quick brown fox jumps over the lazy dog</h5>\n      <h6>H6 - The quick brown fox jumps over the lazy dog</h6>\n      <div>Regular - The quick brown fox jumps over the lazy dog</div>\n    </div>\n  </div>\n</div>\n\n<h2>OpenSans - weights</h2>\n<div class=\"row\">\n  <div class=\"col-sm-12 cold-lg-6\">\n    <div class=\"card card-block\">\n      <h3 class=\"bold-text\">Bold - The quick brown fox jumps over the lazy dog</h3>\n      <h3 class=\"regular-text\">Regular - The quick brown fox jumps over the lazy dog</h3>\n      <h3 class=\"light-text\">Light - The quick brown fox jumps over the lazy dog</h3>\n    </div>\n  </div>\n</div>\n\n<h2>Theme icons</h2>\n<div class=\"row\">\n  <div class=\"col-sm-12 cold-lg-6\">\n      <div class=\"row\">\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-more-vertical\"></div>\n          theme-icon-more-vertical\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-eye\"></div>\n          theme-icon-eye\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-stats\"></div>\n          theme-icon-stats\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-list\"></div>\n          theme-icon-list\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-alert\"></div>\n          theme-icon-alert\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-search\"></div>\n          theme-icon-search\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-plus\"></div>\n          theme-icon-plus\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-minus\"></div>\n          theme-icon-minus\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-close\"></div>\n          theme-icon-close\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-checkmark\"></div>\n          theme-icon-checkmark\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-remove\"></div>\n          theme-icon-remove\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-add\"></div>\n          theme-icon-add\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-edit\"></div>\n          theme-icon-edit\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-step-backward\"></div>\n          theme-icon-step-backward\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-step-forward\"></div>\n          theme-icon-step-forward\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-chevron-left\"></div>\n          theme-icon-chevron-left, glyphicon-chevron-left\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-chevron-right\"></div>\n          theme-icon-chevron-right, glyphicon-chevron-right\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-chevron-up\"></div>\n          theme-icon-chevron-up\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-chevron-down\"></div>\n          theme-icon-chevron-down\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-chevron-up-down\"></div>\n          theme-icon-chevron-up-down\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-mail\"></div>\n          theme-icon-mail\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-notification\"></div>\n          theme-icon-notification\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-zoom-in\"></div>\n          theme-icon-zoom-in\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-zoom-out\"></div>\n          theme-icon-zoom-out\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-star\"></div>\n          theme-icon-star\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-star-o\"></div>\n          theme-icon-star-o\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-cards\"></div>\n          theme-icon-cards\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-question\"></div>\n          theme-icon-question\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-info\"></div>\n          theme-icon-info\n        </div></div>\n        <div class=\"col-auto\"><div class=\"card card-block\">\n          <div class=\"icon theme-icon-exclamation\"></div>\n          theme-icon-exclamation\n        </div></div>\n      </div>\n  </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=4.5b89d5a5dd6701b985ad.chunk.js.map