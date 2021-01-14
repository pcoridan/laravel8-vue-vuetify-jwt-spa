(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_recipes_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/recipes.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/recipes.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/axios */ "./resources/js/utils/axios.js");
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
  name: 'Recipes',
  data: function data() {
    return {
      page: 1,
      pageCount: 20,
      itemsPerPage: 10,
      dialog: false,
      dialogDelete: false,
      headers: [{
        text: 'Recipe',
        align: 'start',
        value: 'name'
      }, {
        text: 'Calories',
        value: 'calories'
      }, {
        text: 'Fat (g)',
        value: 'fat'
      }, {
        text: 'Carbs (g)',
        value: 'carbs'
      }, {
        text: 'Protein (g)',
        value: 'protein'
      }, {
        text: 'Actions',
        align: 'right',
        value: 'actions',
        sortable: false
      }],
      recipes: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    };
  },
  computed: {},
  watch: {
    dialogDelete: function dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      this.recipes = [{
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0
      }, {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3
      }, {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0
      }, {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3
      }, {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9
      }, {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0
      }, {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0
      }, {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5
      }, {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9
      }, {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7
      }];
    },
    editItem: function editItem(item) {
      console.log(item);
    },
    deleteItem: function deleteItem(item) {
      console.log(item);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/recipes.vue":
/*!****************************************!*\
  !*** ./resources/js/views/recipes.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _recipes_vue_vue_type_template_id_2feb6e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipes.vue?vue&type=template&id=2feb6e76&scoped=true& */ "./resources/js/views/recipes.vue?vue&type=template&id=2feb6e76&scoped=true&");
/* harmony import */ var _recipes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes.vue?vue&type=script&lang=js& */ "./resources/js/views/recipes.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _recipes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _recipes_vue_vue_type_template_id_2feb6e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _recipes_vue_vue_type_template_id_2feb6e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2feb6e76",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/recipes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/recipes.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/recipes.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recipes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./recipes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/recipes.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recipes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/recipes.vue?vue&type=template&id=2feb6e76&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/recipes.vue?vue&type=template&id=2feb6e76&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recipes_vue_vue_type_template_id_2feb6e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recipes_vue_vue_type_template_id_2feb6e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recipes_vue_vue_type_template_id_2feb6e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./recipes.vue?vue&type=template&id=2feb6e76&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/recipes.vue?vue&type=template&id=2feb6e76&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/recipes.vue?vue&type=template&id=2feb6e76&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/recipes.vue?vue&type=template&id=2feb6e76&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        [
          _c(
            "v-col",
            { staticClass: "d-flex pb-0", attrs: { cols: "12" } },
            [
              _c("h2", [_vm._v("\n        Recipes\n      ")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                { staticClass: "mb-2", attrs: { color: "primary", dark: "" } },
                [_vm._v("\n        New Item\n      ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            [
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.recipes,
                  "sort-by": "calories"
                },
                scopedSlots: _vm._u([
                  {
                    key: "item.actions",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "v-icon",
                          {
                            staticClass: "mr-2",
                            attrs: { small: "" },
                            on: {
                              click: function($event) {
                                return _vm.editItem(item)
                              }
                            }
                          },
                          [_vm._v("\n            mdi-pencil\n          ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-icon",
                          {
                            attrs: { small: "" },
                            on: {
                              click: function($event) {
                                return _vm.deleteItem(item)
                              }
                            }
                          },
                          [_vm._v("\n            mdi-delete\n          ")]
                        )
                      ]
                    }
                  },
                  {
                    key: "no-data",
                    fn: function() {
                      return [
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary" },
                            on: { click: _vm.initialize }
                          },
                          [_vm._v("\n            Reset\n          ")]
                        )
                      ]
                    },
                    proxy: true
                  }
                ])
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center pt-2" },
                [
                  _c("v-pagination", {
                    attrs: { "total-visible": "8", length: _vm.pageCount },
                    model: {
                      value: _vm.page,
                      callback: function($$v) {
                        _vm.page = $$v
                      },
                      expression: "page"
                    }
                  })
                ],
                1
              )
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL3JlY2lwZXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9yZWNpcGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvcmVjaXBlcy52dWU/YjE4ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvcmVjaXBlcy52dWU/MzgwOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBO0FBRUE7QUFDQSxpQkFEQTtBQUVBO0FBQUE7QUFDQSxhQURBO0FBRUEsbUJBRkE7QUFHQSxzQkFIQTtBQUlBLG1CQUpBO0FBS0EseUJBTEE7QUFNQSxnQkFDQTtBQUNBLHNCQURBO0FBRUEsc0JBRkE7QUFHQTtBQUhBLE9BREEsRUFNQTtBQUFBO0FBQUE7QUFBQSxPQU5BLEVBT0E7QUFBQTtBQUFBO0FBQUEsT0FQQSxFQVFBO0FBQUE7QUFBQTtBQUFBLE9BUkEsRUFTQTtBQUFBO0FBQUE7QUFBQSxPQVRBLEVBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BVkEsQ0FOQTtBQWtCQSxpQkFsQkE7QUFtQkEscUJBbkJBO0FBb0JBO0FBQ0EsZ0JBREE7QUFFQSxtQkFGQTtBQUdBLGNBSEE7QUFJQSxnQkFKQTtBQUtBO0FBTEEsT0FwQkE7QUEyQkE7QUFDQSxnQkFEQTtBQUVBLG1CQUZBO0FBR0EsY0FIQTtBQUlBLGdCQUpBO0FBS0E7QUFMQTtBQTNCQTtBQUFBLEdBRkE7QUFxQ0EsY0FyQ0E7QUF1Q0E7QUFDQSxnQkFEQSx3QkFDQSxHQURBLEVBQ0E7QUFDQTtBQUNBO0FBSEEsR0F2Q0E7QUE0Q0EsU0E1Q0EscUJBNENBO0FBQ0E7QUFDQSxHQTlDQTtBQStDQTtBQUNBLGNBREEsd0JBQ0E7QUFDQSxzQkFDQTtBQUNBLDZCQURBO0FB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QUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc192aWV3c19yZWNpcGVzX3Z1ZWY3ZDI5NTk4ZGJlNWYxNThiMTEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8di1jb250YWluZXIgZmx1aWQ+XG4gICAgPHYtcm93IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgIDx2LWNvbCBjbGFzcz1cImQtZmxleCBwYi0wXCIgY29scz1cIjEyXCI+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICBSZWNpcGVzXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICA8di1idG5cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGRhcmtcbiAgICAgICAgICBjbGFzcz1cIm1iLTJcIlxuICAgICAgICA+XG4gICAgICAgICAgTmV3IEl0ZW1cbiAgICAgICAgPC92LWJ0bj5cbiAgICAgIDwvdi1jb2w+XG4gICAgICA8di1jb2w+XG4gICAgICAgIDx2LWRhdGEtdGFibGVcbiAgICAgICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxuICAgICAgICAgIDppdGVtcz1cInJlY2lwZXNcIlxuICAgICAgICAgIHNvcnQtYnk9XCJjYWxvcmllc1wiXG4gICAgICAgICAgY2xhc3M9XCJlbGV2YXRpb24tMVwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0uYWN0aW9ucz1cInsgaXRlbSB9XCI+XG4gICAgICAgICAgICA8di1pY29uXG4gICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgIGNsYXNzPVwibXItMlwiXG4gICAgICAgICAgICAgIEBjbGljaz1cImVkaXRJdGVtKGl0ZW0pXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgbWRpLXBlbmNpbFxuICAgICAgICAgICAgPC92LWljb24+XG4gICAgICAgICAgICA8di1pY29uXG4gICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgIEBjbGljaz1cImRlbGV0ZUl0ZW0oaXRlbSlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBtZGktZGVsZXRlXG4gICAgICAgICAgICA8L3YtaWNvbj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bm8tZGF0YT5cbiAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJpbml0aWFsaXplXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC92LWRhdGEtdGFibGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwdC0yXCI+XG4gICAgICAgICAgPHYtcGFnaW5hdGlvblxuICAgICAgICAgICAgdi1tb2RlbD1cInBhZ2VcIlxuICAgICAgICAgICAgdG90YWwtdmlzaWJsZT1cIjhcIlxuICAgICAgICAgICAgOmxlbmd0aD1cInBhZ2VDb3VudFwiXG4gICAgICAgICAgPjwvdi1wYWdpbmF0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdi1jb2w+XG4gICAgPC92LXJvdz5cbiAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQXhpb3MgZnJvbSAnQC91dGlscy9heGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1JlY2lwZXMnLFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHBhZ2U6IDEsXG4gICAgcGFnZUNvdW50OiAyMCxcbiAgICBpdGVtc1BlclBhZ2U6IDEwLFxuICAgIGRpYWxvZzogZmFsc2UsXG4gICAgZGlhbG9nRGVsZXRlOiBmYWxzZSxcbiAgICBoZWFkZXJzOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdSZWNpcGUnLFxuICAgICAgICBhbGlnbjogJ3N0YXJ0JyxcbiAgICAgICAgdmFsdWU6ICduYW1lJyxcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6ICdDYWxvcmllcycsIHZhbHVlOiAnY2Fsb3JpZXMnIH0sXG4gICAgICB7IHRleHQ6ICdGYXQgKGcpJywgdmFsdWU6ICdmYXQnIH0sXG4gICAgICB7IHRleHQ6ICdDYXJicyAoZyknLCB2YWx1ZTogJ2NhcmJzJyB9LFxuICAgICAgeyB0ZXh0OiAnUHJvdGVpbiAoZyknLCB2YWx1ZTogJ3Byb3RlaW4nIH0sXG4gICAgICB7IHRleHQ6ICdBY3Rpb25zJywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAnYWN0aW9ucycsIHNvcnRhYmxlOiBmYWxzZSB9LFxuICAgIF0sXG4gICAgcmVjaXBlczogW10sXG4gICAgZWRpdGVkSW5kZXg6IC0xLFxuICAgIGVkaXRlZEl0ZW06IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgY2Fsb3JpZXM6IDAsXG4gICAgICBmYXQ6IDAsXG4gICAgICBjYXJiczogMCxcbiAgICAgIHByb3RlaW46IDAsXG4gICAgfSxcbiAgICBkZWZhdWx0SXRlbToge1xuICAgICAgbmFtZTogJycsXG4gICAgICBjYWxvcmllczogMCxcbiAgICAgIGZhdDogMCxcbiAgICAgIGNhcmJzOiAwLFxuICAgICAgcHJvdGVpbjogMCxcbiAgICB9LFxuICB9KSxcbiAgY29tcHV0ZWQ6IHtcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBkaWFsb2dEZWxldGUgKHZhbCkge1xuICAgICAgdmFsIHx8IHRoaXMuY2xvc2VEZWxldGUoKVxuICAgIH0sXG4gIH0sXG4gIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaW5pdGlhbGl6ZSAoKSB7XG4gICAgICB0aGlzLnJlY2lwZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnRnJvemVuIFlvZ3VydCcsXG4gICAgICAgICAgY2Fsb3JpZXM6IDE1OSxcbiAgICAgICAgICBmYXQ6IDYuMCxcbiAgICAgICAgICBjYXJiczogMjQsXG4gICAgICAgICAgcHJvdGVpbjogNC4wLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0ljZSBjcmVhbSBzYW5kd2ljaCcsXG4gICAgICAgICAgY2Fsb3JpZXM6IDIzNyxcbiAgICAgICAgICBmYXQ6IDkuMCxcbiAgICAgICAgICBjYXJiczogMzcsXG4gICAgICAgICAgcHJvdGVpbjogNC4zLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0VjbGFpcicsXG4gICAgICAgICAgY2Fsb3JpZXM6IDI2MixcbiAgICAgICAgICBmYXQ6IDE2LjAsXG4gICAgICAgICAgY2FyYnM6IDIzLFxuICAgICAgICAgIHByb3RlaW46IDYuMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdDdXBjYWtlJyxcbiAgICAgICAgICBjYWxvcmllczogMzA1LFxuICAgICAgICAgIGZhdDogMy43LFxuICAgICAgICAgIGNhcmJzOiA2NyxcbiAgICAgICAgICBwcm90ZWluOiA0LjMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnR2luZ2VyYnJlYWQnLFxuICAgICAgICAgIGNhbG9yaWVzOiAzNTYsXG4gICAgICAgICAgZmF0OiAxNi4wLFxuICAgICAgICAgIGNhcmJzOiA0OSxcbiAgICAgICAgICBwcm90ZWluOiAzLjksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnSmVsbHkgYmVhbicsXG4gICAgICAgICAgY2Fsb3JpZXM6IDM3NSxcbiAgICAgICAgICBmYXQ6IDAuMCxcbiAgICAgICAgICBjYXJiczogOTQsXG4gICAgICAgICAgcHJvdGVpbjogMC4wLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0xvbGxpcG9wJyxcbiAgICAgICAgICBjYWxvcmllczogMzkyLFxuICAgICAgICAgIGZhdDogMC4yLFxuICAgICAgICAgIGNhcmJzOiA5OCxcbiAgICAgICAgICBwcm90ZWluOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0hvbmV5Y29tYicsXG4gICAgICAgICAgY2Fsb3JpZXM6IDQwOCxcbiAgICAgICAgICBmYXQ6IDMuMixcbiAgICAgICAgICBjYXJiczogODcsXG4gICAgICAgICAgcHJvdGVpbjogNi41LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0RvbnV0JyxcbiAgICAgICAgICBjYWxvcmllczogNDUyLFxuICAgICAgICAgIGZhdDogMjUuMCxcbiAgICAgICAgICBjYXJiczogNTEsXG4gICAgICAgICAgcHJvdGVpbjogNC45LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0tpdEthdCcsXG4gICAgICAgICAgY2Fsb3JpZXM6IDUxOCxcbiAgICAgICAgICBmYXQ6IDI2LjAsXG4gICAgICAgICAgY2FyYnM6IDY1LFxuICAgICAgICAgIHByb3RlaW46IDcsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH0sXG5cbiAgICBlZGl0SXRlbSAoaXRlbSkge1xuICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgfSxcblxuICAgIGRlbGV0ZUl0ZW0gKGl0ZW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgIH1cbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcmVjaXBlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmZlYjZlNzYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVjaXBlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlY2lwZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyZmViNmU3NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9wY29yaWRhbi9zaXRlcy9mcmVpZ2h0YXBwdGVzdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZmViNmU3NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZmViNmU3NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZmViNmU3NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcmVjaXBlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmZlYjZlNzYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmZlYjZlNzYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9yZWNpcGVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWNpcGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlY2lwZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgeyBhdHRyczogeyBmbHVpZDogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgeyBhdHRyczogeyBqdXN0aWZ5OiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggcGItMFwiLCBhdHRyczogeyBjb2xzOiBcIjEyXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJcXG4gICAgICAgIFJlY2lwZXNcXG4gICAgICBcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiLCBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIsIGRhcms6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIE5ldyBJdGVtXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWRhdGEtdGFibGVcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0xXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5yZWNpcGVzLFxuICAgICAgICAgICAgICAgICAgXCJzb3J0LWJ5XCI6IFwiY2Fsb3JpZXNcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJpdGVtLmFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc21hbGw6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVkaXRJdGVtKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgbWRpLXBlbmNpbFxcbiAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc21hbGw6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZUl0ZW0oaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBtZGktZGVsZXRlXFxuICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJuby1kYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaW5pdGlhbGl6ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBSZXNldFxcbiAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgcHQtMlwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRvdGFsLXZpc2libGVcIjogXCI4XCIsIGxlbmd0aDogX3ZtLnBhZ2VDb3VudCB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=