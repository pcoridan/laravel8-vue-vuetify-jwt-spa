(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/daily-menu.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/daily-menu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "daily-menu",
  props: {
    day: {
      type: Object,
      "default": function _default() {
        return {
          day: '',
          date: ''
        };
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/axios */ "./resources/js/utils/axios.js");
/* harmony import */ var _components_dashboard_daily_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/dashboard/daily-menu */ "./resources/js/components/dashboard/daily-menu.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Dashboard',
  components: {
    'daily-menu': _components_dashboard_daily_menu__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    return {
      daysOfTheWeek: [{
        day: 'Monday',
        date: '11/30'
      }, {
        day: 'Tuesday',
        date: '12/1'
      }, {
        day: 'Wednesday',
        date: '12/2'
      }, {
        day: 'Thursday',
        date: '12/3'
      }, {
        day: 'Friday',
        date: '12/4'
      }, {
        day: 'Saturday',
        date: '12/5'
      }, {
        day: 'Sunday',
        date: '12/6'
      }]
    };
  },
  computed: {},
  watch: {},
  created: function created() {},
  methods: {
    test: function test() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _utils_axios__WEBPACK_IMPORTED_MODULE_1__.default.get('/adm/test');

              case 2:
                response = _context.sent;
                console.log(response);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/dashboard/daily-menu.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/dashboard/daily-menu.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _daily_menu_vue_vue_type_template_id_3842ae8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./daily-menu.vue?vue&type=template&id=3842ae8e&scoped=true& */ "./resources/js/components/dashboard/daily-menu.vue?vue&type=template&id=3842ae8e&scoped=true&");
/* harmony import */ var _daily_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./daily-menu.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/daily-menu.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _daily_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _daily_menu_vue_vue_type_template_id_3842ae8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _daily_menu_vue_vue_type_template_id_3842ae8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3842ae8e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/daily-menu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/dashboard.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _dashboard_vue_vue_type_template_id_7eb83ab6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=7eb83ab6&scoped=true& */ "./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6&scoped=true&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _dashboard_vue_vue_type_template_id_7eb83ab6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _dashboard_vue_vue_type_template_id_7eb83ab6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7eb83ab6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/daily-menu.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/dashboard/daily-menu.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_daily_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./daily-menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/daily-menu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_daily_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/dashboard/daily-menu.vue?vue&type=template&id=3842ae8e&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/daily-menu.vue?vue&type=template&id=3842ae8e&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_daily_menu_vue_vue_type_template_id_3842ae8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_daily_menu_vue_vue_type_template_id_3842ae8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_daily_menu_vue_vue_type_template_id_3842ae8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./daily-menu.vue?vue&type=template&id=3842ae8e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/daily-menu.vue?vue&type=template&id=3842ae8e&scoped=true&");


/***/ }),

/***/ "./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_7eb83ab6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_7eb83ab6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_7eb83ab6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=template&id=7eb83ab6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/daily-menu.vue?vue&type=template&id=3842ae8e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/daily-menu.vue?vue&type=template&id=3842ae8e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "mx-auto", attrs: { outlined: "" } },
    [
      _c(
        "v-list-item",
        { attrs: { "two-line": "" } },
        [
          _c(
            "v-list-item-content",
            [
              _c(
                "v-list-item-title",
                { staticClass: "headline mb-1 text-center" },
                [_vm._v("\n        " + _vm._s(_vm.day.day) + "\n      ")]
              ),
              _vm._v(" "),
              _c("v-list-item-subtitle", { staticClass: "text-center" }, [
                _vm._v(_vm._s(_vm.day.date))
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-list-item",
        { attrs: { "two-line": "" } },
        [
          _c(
            "v-list-item-content",
            [
              _c("v-list-item-title", [_vm._v("Omelet With Bacon")]),
              _vm._v(" "),
              _c("v-list-item-subtitle", [_vm._v("Breakfast")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item-action",
            [
              _c(
                "v-btn",
                { attrs: { icon: "" } },
                [
                  _c("v-chip", { attrs: { color: "primary", small: "" } }, [
                    _vm._v("\n          359\n        ")
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-list-item",
        { attrs: { "two-line": "" } },
        [
          _c(
            "v-list-item-content",
            [
              _c("v-list-item-title", [_vm._v("Pizza")]),
              _vm._v(" "),
              _c("v-list-item-subtitle", [_vm._v("Lunch")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-list-item",
        { attrs: { "two-line": "" } },
        [
          _c(
            "v-list-item-content",
            [
              _c("v-list-item-title", [_vm._v("Steak")]),
              _vm._v(" "),
              _c("v-list-item-subtitle", [_vm._v("Dinner")])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        _vm._l(_vm.daysOfTheWeek, function(day) {
          return _c(
            "v-col",
            { key: day.date, staticClass: "px-1" },
            [_c("daily-menu", { attrs: { day: day } })],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL2RhaWx5LW1lbnUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvdmlld3MvZGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFpbHktbWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL2Rhc2hib2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL2RhaWx5LW1lbnUudnVlPzlhOGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL2Rhc2hib2FyZC52dWU/MDY5ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFpbHktbWVudS52dWU/NWQ0OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvZGFzaGJvYXJkLnZ1ZT81OTRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFEQTtBQUZBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFFQTtBQUNBLG1CQURBO0FBRUE7QUFDQTtBQURBLEdBRkE7QUFLQTtBQUFBO0FBQ0Esc0JBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBRkEsT0FEQSxFQUtBO0FBQ0Esc0JBREE7QUFFQTtBQUZBLE9BTEEsRUFTQTtBQUNBLHdCQURBO0FBRUE7QUFGQSxPQVRBLEVBYUE7QUFDQSx1QkFEQTtBQUVBO0FBRkEsT0FiQSxFQWlCQTtBQUNBLHFCQURBO0FBRUE7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QTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9jaHVua3MvcmVzb3VyY2VzX2pzX3ZpZXdzX2Rhc2hib2FyZF92dWU5MjEzN2Y3NDBkOTkyZDVmNzA4ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHYtY2FyZFxuICAgIGNsYXNzPVwibXgtYXV0b1wiXG4gICAgb3V0bGluZWRcbiAgPlxuICAgIDx2LWxpc3QtaXRlbSB0d28tbGluZT5cbiAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGUgY2xhc3M9XCJoZWFkbGluZSBtYi0xIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAge3sgZGF5LmRheSB9fVxuICAgICAgICA8L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGUgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7IGRheS5kYXRlIH19PC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICA8L3YtbGlzdC1pdGVtPlxuICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG4gICAgPHYtbGlzdC1pdGVtIHR3by1saW5lPlxuICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT5PbWVsZXQgV2l0aCBCYWNvbjwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT5CcmVha2Zhc3Q8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgPHYtYnRuIGljb24+XG4gICAgICAgICAgPHYtY2hpcFxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgPlxuICAgICAgICAgICAgMzU5XG4gICAgICAgICAgPC92LWNoaXA+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICA8L3YtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICA8L3YtbGlzdC1pdGVtPlxuICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG4gICAgPHYtbGlzdC1pdGVtIHR3by1saW5lPlxuICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT5QaXp6YTwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT5MdW5jaDwvdi1saXN0LWl0ZW0tc3VidGl0bGU+XG4gICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgPC92LWxpc3QtaXRlbT5cbiAgICA8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuICAgIDx2LWxpc3QtaXRlbSB0d28tbGluZT5cbiAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+U3RlYWs8L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+RGlubmVyPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICA8L3YtbGlzdC1pdGVtPlxuICA8L3YtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcImRhaWx5LW1lbnVcIixcbiAgICBwcm9wczoge1xuICAgICAgZGF5OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7IGRheTogJycsIGRhdGU6ICcnIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8di1jb250YWluZXIgZmx1aWQ+XG4gICAgPHYtcm93IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgIDx2LWNvbCB2LWZvcj1cImRheSBpbiBkYXlzT2ZUaGVXZWVrXCIgOmtleT1cImRheS5kYXRlXCIgY2xhc3M9XCJweC0xXCI+XG4gICAgICAgIDxkYWlseS1tZW51IDpkYXk9XCJkYXlcIj48L2RhaWx5LW1lbnU+XG4gICAgICA8L3YtY29sPlxuICAgIDwvdi1yb3c+XG4gIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEF4aW9zIGZyb20gJ0AvdXRpbHMvYXhpb3MnO1xuaW1wb3J0IERhaWx5TWVudSBmcm9tICdAL2NvbXBvbmVudHMvZGFzaGJvYXJkL2RhaWx5LW1lbnUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdEYXNoYm9hcmQnLFxuICBjb21wb25lbnRzOiB7XG4gICAgJ2RhaWx5LW1lbnUnIDogRGFpbHlNZW51LFxuICB9LFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGRheXNPZlRoZVdlZWsgOiBbXG4gICAgICB7XG4gICAgICAgIGRheTogJ01vbmRheScsXG4gICAgICAgIGRhdGU6ICcxMS8zMCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRheTogJ1R1ZXNkYXknLFxuICAgICAgICBkYXRlOiAnMTIvMSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRheTogJ1dlZG5lc2RheScsXG4gICAgICAgIGRhdGU6ICcxMi8yJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGF5OiAnVGh1cnNkYXknLFxuICAgICAgICBkYXRlOiAnMTIvMydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRheTogJ0ZyaWRheScsXG4gICAgICAgIGRhdGU6ICcxMi80J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGF5OiAnU2F0dXJkYXknLFxuICAgICAgICBkYXRlOiAnMTIvNSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRheTogJ1N1bmRheScsXG4gICAgICAgIGRhdGU6ICcxMi82J1xuICAgICAgfSxcbiAgICBdXG4gIH0pLFxuICBjb21wdXRlZDoge1xuICB9LFxuICB3YXRjaDoge1xuICB9LFxuICBjcmVhdGVkKCkge1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgdGVzdCgpIHtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5nZXQoJy9hZG0vdGVzdCcpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH1cbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZGFpbHktbWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzg0MmFlOGUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGFpbHktbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2RhaWx5LW1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzODQyYWU4ZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9wY29yaWRhbi9zaXRlcy9mcmVpZ2h0YXBwdGVzdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczODQyYWU4ZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczODQyYWU4ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczODQyYWU4ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZGFpbHktbWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzg0MmFlOGUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzg0MmFlOGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9kYWlseS1tZW51LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZWI4M2FiNiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9kYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9kYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3ZWI4M2FiNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9wY29yaWRhbi9zaXRlcy9mcmVpZ2h0YXBwdGVzdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3ZWI4M2FiNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3ZWI4M2FiNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3ZWI4M2FiNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZWI4M2FiNiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ZWI4M2FiNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL2Rhc2hib2FyZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGFpbHktbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kYWlseS1tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNhcmRcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm14LWF1dG9cIiwgYXR0cnM6IHsgb3V0bGluZWQ6IFwiXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtbGlzdC1pdGVtXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgXCJ0d28tbGluZVwiOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxpc3QtaXRlbS1jb250ZW50XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1saXN0LWl0ZW0tdGl0bGVcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lIG1iLTEgdGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5kYXkuZGF5KSArIFwiXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtbGlzdC1pdGVtLXN1YnRpdGxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF5LmRhdGUpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1saXN0LWl0ZW1cIixcbiAgICAgICAgeyBhdHRyczogeyBcInR3by1saW5lXCI6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGlzdC1pdGVtLWNvbnRlbnRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWxpc3QtaXRlbS10aXRsZVwiLCBbX3ZtLl92KFwiT21lbGV0IFdpdGggQmFjb25cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LWxpc3QtaXRlbS1zdWJ0aXRsZVwiLCBbX3ZtLl92KFwiQnJlYWtmYXN0XCIpXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxpc3QtaXRlbS1hY3Rpb25cIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaWNvbjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNoaXBcIiwgeyBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIsIHNtYWxsOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgMzU5XFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtbGlzdC1pdGVtXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgXCJ0d28tbGluZVwiOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxpc3QtaXRlbS1jb250ZW50XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1saXN0LWl0ZW0tdGl0bGVcIiwgW192bS5fdihcIlBpenphXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1saXN0LWl0ZW0tc3VidGl0bGVcIiwgW192bS5fdihcIkx1bmNoXCIpXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtbGlzdC1pdGVtXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgXCJ0d28tbGluZVwiOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxpc3QtaXRlbS1jb250ZW50XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1saXN0LWl0ZW0tdGl0bGVcIiwgW192bS5fdihcIlN0ZWFrXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1saXN0LWl0ZW0tc3VidGl0bGVcIiwgW192bS5fdihcIkRpbm5lclwiKV0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgeyBhdHRyczogeyBmbHVpZDogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgeyBhdHRyczogeyBqdXN0aWZ5OiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgX3ZtLl9sKF92bS5kYXlzT2ZUaGVXZWVrLCBmdW5jdGlvbihkYXkpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICB7IGtleTogZGF5LmRhdGUsIHN0YXRpY0NsYXNzOiBcInB4LTFcIiB9LFxuICAgICAgICAgICAgW19jKFwiZGFpbHktbWVudVwiLCB7IGF0dHJzOiB7IGRheTogZGF5IH0gfSldLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=