(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{14:function(_,e,t){},4:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_React_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),D_React_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),D_React_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),D_React_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(14),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__),nums=[7,8,9,4,5,6,1,2,3,0],ops=["/","*","+","-"],ids={7:"seven",8:"eight",9:"nine",4:"four",5:"five",6:"six",1:"one",2:"two",3:"three",0:"zero","/":"divide","*":"multiply","+":"add","-":"subtract"},App=function(_Component){Object(D_React_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(D_React_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;Object(D_React_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={lastPressed:void 0,calc:"0",operation:void 0},_this.handleClick=function(e){var _this$state=_this.state,calc=_this$state.calc,lastPressed=_this$state.lastPressed,innerText=e.target.innerText;switch(innerText){case"AC":_this.setState({calc:"0"});break;case"=":var evaluated=eval(calc);_this.setState({calc:evaluated});break;case".":var splitted=calc.split(/[\+\-\*\/]/),last=splitted.slice(-1)[0];last.includes(".")||_this.setState({calc:calc+"."});break;default:var _e=void 0;if(ops.includes(innerText))if(ops.includes(lastPressed)&&"-"!==innerText){var lastNumberIdx=calc.split("").reverse().findIndex((function(_){return" "!==_&&nums.includes(+_)}));_e=calc.slice(0,calc.length-lastNumberIdx)+" ".concat(innerText," ")}else _e="".concat(calc," ").concat(innerText," ");else _e="0"===calc?innerText:calc+innerText;_this.setState({calc:_e})}_this.setState({lastPressed:innerText})},_this}return Object(D_React_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){var _=this,e=this.state,t=e.calc;e.currentNumber;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"display",id:"display",children:t}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"nums-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{className:"ac dark-grey big-h",id:"clear",onClick:this.handleClick,children:"AC"}),nums.map((function(e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{className:"light-grey ".concat(0===e&&"big-h"),onClick:_.handleClick,id:ids[e],children:e},e)})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{className:"light-grey",id:"decimal",onClick:this.handleClick,children:"."})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"ops-container",children:[ops.map((function(e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{className:"orange",onClick:_.handleClick,id:ids[e],children:e},e)})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{className:"orange",id:"equals",onClick:this.handleClick,children:"="})]})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=App},9:function(_,e,t){"use strict";t.r(e);t(1);var a=t(3),c=t.n(a),s=t(4),r=t(0);c.a.render(Object(r.jsx)(s.a,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.e31569be.chunk.js.map