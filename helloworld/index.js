/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _redux = __webpack_require__(1);
	
	var _reducers = __webpack_require__(3);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _actions = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = (0, _redux.createStore)(_reducers2.default);
	
	// 打印初始状态
	console.log(store.getState());
	
	// 每次 state 更新时，打印日志
	// 注意 subscribe() 返回一个函数用来注销监听器
	var unsubscribe = store.subscribe(function () {
	  return console.log(store.getState());
	});
	
	// 发起一系列 action
	store.dispatch((0, _actions.addTodo)('Learn about actions'));
	store.dispatch((0, _actions.addTodo)('Learn about reducers'));
	store.dispatch((0, _actions.addTodo)('Learn about store'));
	store.dispatch((0, _actions.toggleTodo)(0));
	store.dispatch((0, _actions.toggleTodo)(1));
	store.dispatch((0, _actions.setVisibilityFilter)(_actions.VisibilityFilters.SHOW_COMPLETED));
	
	// 停止监听 state 更新
	unsubscribe();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(158);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = lib;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(1);
	
	var _todos = __webpack_require__(4);
	
	var _todos2 = _interopRequireDefault(_todos);
	
	var _visibilityFilter = __webpack_require__(5);
	
	var _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var todoApp = (0, _redux.combineReducers)({
	  todos: _todos2.default,
	  visibilityFilter: _visibilityFilter2.default
	});
	
	exports.default = todoApp;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var todo = function todo(state, action) {
	  switch (action.type) {
	    case 'ADD_TODO':
	      return {
	        id: action.id,
	        text: action.text,
	        completed: false
	      };
	    case 'TOGGLE_TODO':
	      if (state.id !== action.id) {
	        return state;
	      }
	
	      return Object.assign({}, state, {
	        completed: !state.completed
	      });
	    default:
	      return state;
	  }
	};
	
	var todos = function todos() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case 'ADD_TODO':
	      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);
	    case 'TOGGLE_TODO':
	      return state.map(function (t) {
	        return todo(t, action);
	      });
	    default:
	      return state;
	  }
	};
	
	exports.default = todos;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var visibilityFilter = function visibilityFilter() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 'SHOW_ALL' : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case 'SET_VISIBILITY_FILTER':
	      return action.filter;
	    default:
	      return state;
	  }
	};
	
	exports.default = visibilityFilter;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addTodo = addTodo;
	exports.toggleTodo = toggleTodo;
	exports.setVisibilityFilter = setVisibilityFilter;
	/*
	 *  action 类型
	 */
	
	var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
	var TOGGLE_TODO = exports.TOGGLE_TODO = 'TOGGLE_TODO';
	var SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
	
	/*
	 * 其他的常量
	 */
	
	var VisibilityFilters = exports.VisibilityFilters = {
	  SHOW_ALL: 'SHOW_ALL',
	  SHOW_COMPLETED: 'SHOW_COMPLETED',
	  SHOW_ACTIVE: 'SHOW_ACTIVE'
	};
	
	/*
	 * action 创建函数
	 */
	
	function addTodo(text) {
	  return {
	    type: ADD_TODO,
	    text: text
	  };
	}
	
	function toggleTodo(index) {
	  return {
	    type: TOGGLE_TODO,
	    index: index
	  };
	}
	
	function setVisibilityFilter(filter) {
	  return {
	    type: SET_VISIBILITY_FILTER,
	    filter: filter
	  };
	}

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map