(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/data.service.ts ***!
  \*******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/fesm2015/ngx-indexed-db.js");



var DataService = /** @class */ (function () {
    function DataService(dbService) {
        this.dbService = dbService;
        this.timeOnLessonOne = 0;
        this.timeOnLessonTwo = 0;
        this.timeOnQuestionOne = 0;
        this.timeOnQuestionTwo = 0;
        this.errorsOnQuestionOne = 0;
        this.errorsOnQuestionTwo = 0;
    }
    DataService.prototype.save = function () {
        var _this = this;
        if (this.playerId) {
            this.dbService.update('results', {
                id: this.playerId,
                playerName: this.playerName,
                timeOnLessonOne: this.timeOnLessonOne,
                timeOnLessonTwo: this.timeOnLessonTwo,
                timeOnQuestionOne: this.timeOnQuestionOne,
                timeOnQuestionTwo: this.timeOnQuestionTwo,
                errorsOnQuestionOne: this.errorsOnQuestionOne,
                errorsOnQuestionTwo: this.errorsOnQuestionTwo,
            })
                .subscribe(function (data) {
                console.log(data);
            });
        }
        else {
            this.dbService.add('results', {
                playerName: this.playerName,
                timeOnLessonOne: this.timeOnLessonOne,
                timeOnLessonTwo: this.timeOnLessonTwo,
                timeOnQuestionOne: this.timeOnQuestionOne,
                timeOnQuestionTwo: this.timeOnQuestionTwo,
                errorsOnQuestionOne: this.errorsOnQuestionOne,
                errorsOnQuestionTwo: this.errorsOnQuestionTwo,
            })
                .subscribe(function (key) {
                console.log(key);
                _this.playerId = key;
            });
        }
    };
    DataService.prototype.getResults = function () {
        return this.dbService.getAll('results');
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_indexed_db__WEBPACK_IMPORTED_MODULE_2__["NgxIndexedDBService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/_services/seconds.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/seconds.pipe.ts ***!
  \*******************************************/
/*! exports provided: MinuteSecondsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinuteSecondsPipe", function() { return MinuteSecondsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MinuteSecondsPipe = /** @class */ (function () {
    function MinuteSecondsPipe() {
    }
    MinuteSecondsPipe.prototype.transform = function (value) {
        var minutes = Math.floor(value / 60);
        return minutes.toString().padStart(2, '0') + ':' + (value - minutes * 60).toString().padStart(2, '0');
    };
    MinuteSecondsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'minuteSeconds'
        })
    ], MinuteSecondsPipe);
    return MinuteSecondsPipe;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _credits_credits_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./credits/credits.component */ "./src/app/credits/credits.component.ts");
/* harmony import */ var _end_game_end_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./end-game/end-game.component */ "./src/app/end-game/end-game.component.ts");
/* harmony import */ var _lesson_one_lesson_one_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lesson-one/lesson-one.component */ "./src/app/lesson-one/lesson-one.component.ts");
/* harmony import */ var _lesson_two_lesson_two_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lesson-two/lesson-two.component */ "./src/app/lesson-two/lesson-two.component.ts");
/* harmony import */ var _question_one_question_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question-one/question-one.component */ "./src/app/question-one/question-one.component.ts");
/* harmony import */ var _question_two_question_two_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./question-two/question-two.component */ "./src/app/question-two/question-two.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _start_game_start_game_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./start-game/start-game.component */ "./src/app/start-game/start-game.component.ts");











var routes = [
    { path: 'start', component: _start_game_start_game_component__WEBPACK_IMPORTED_MODULE_10__["StartGameComponent"] },
    { path: '', component: _start_game_start_game_component__WEBPACK_IMPORTED_MODULE_10__["StartGameComponent"] },
    { path: 'lesson/1', component: _lesson_one_lesson_one_component__WEBPACK_IMPORTED_MODULE_5__["LessonOneComponent"] },
    { path: 'lesson/2', component: _lesson_two_lesson_two_component__WEBPACK_IMPORTED_MODULE_6__["LessonTwoComponent"] },
    { path: 'question/1', component: _question_one_question_one_component__WEBPACK_IMPORTED_MODULE_7__["QuestionOneComponent"] },
    { path: 'question/2', component: _question_two_question_two_component__WEBPACK_IMPORTED_MODULE_8__["QuestionTwoComponent"] },
    { path: 'results', component: _results_results_component__WEBPACK_IMPORTED_MODULE_9__["ResultsComponent"] },
    { path: 'credits', component: _credits_credits_component__WEBPACK_IMPORTED_MODULE_3__["CreditsComponent"] },
    { path: 'end', component: _end_game_end_game_component__WEBPACK_IMPORTED_MODULE_4__["EndGameComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Jogo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _start_game_start_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start-game/start-game.component */ "./src/app/start-game/start-game.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _lesson_one_lesson_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lesson-one/lesson-one.component */ "./src/app/lesson-one/lesson-one.component.ts");
/* harmony import */ var _question_two_question_two_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./question-two/question-two.component */ "./src/app/question-two/question-two.component.ts");
/* harmony import */ var _question_one_question_one_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./question-one/question-one.component */ "./src/app/question-one/question-one.component.ts");
/* harmony import */ var _lesson_two_lesson_two_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lesson-two/lesson-two.component */ "./src/app/lesson-two/lesson-two.component.ts");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/fesm2015/ngx-indexed-db.js");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _services_seconds_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/seconds.pipe */ "./src/app/_services/seconds.pipe.ts");
/* harmony import */ var _credits_credits_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./credits/credits.component */ "./src/app/credits/credits.component.ts");
/* harmony import */ var _end_game_end_game_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./end-game/end-game.component */ "./src/app/end-game/end-game.component.ts");
















var dbConfig = {
    name: 'JogoDb',
    version: 1,
    objectStoresMeta: [{
            store: 'results',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'playerName', keypath: 'playerName', options: { unique: false } },
                { name: 'timeOnLessonOne', keypath: 'timeOnLessonOne', options: { unique: false } },
                { name: 'timeOnLessonTwo', keypath: 'timeOnLessonTwo', options: { unique: false } },
                { name: 'timeOnQuestionOne', keypath: 'timeOnQuestionOne', options: { unique: false } },
                { name: 'timeOnQuestionTwo', keypath: 'timeOnQuestionTwo', options: { unique: false } },
                { name: 'errorsOnQuestionOne', keypath: 'errorsOnQuestionOne', options: { unique: false } },
                { name: 'errorsOnQuestionTwo', keypath: 'errorsOnQuestionTwo', options: { unique: false } },
            ]
        }]
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _start_game_start_game_component__WEBPACK_IMPORTED_MODULE_5__["StartGameComponent"],
                _lesson_one_lesson_one_component__WEBPACK_IMPORTED_MODULE_7__["LessonOneComponent"],
                _lesson_two_lesson_two_component__WEBPACK_IMPORTED_MODULE_10__["LessonTwoComponent"],
                _question_one_question_one_component__WEBPACK_IMPORTED_MODULE_9__["QuestionOneComponent"],
                _question_two_question_two_component__WEBPACK_IMPORTED_MODULE_8__["QuestionTwoComponent"],
                _end_game_end_game_component__WEBPACK_IMPORTED_MODULE_15__["EndGameComponent"],
                _credits_credits_component__WEBPACK_IMPORTED_MODULE_14__["CreditsComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_12__["ResultsComponent"],
                _services_seconds_pipe__WEBPACK_IMPORTED_MODULE_13__["MinuteSecondsPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_indexed_db__WEBPACK_IMPORTED_MODULE_11__["NgxIndexedDBModule"].forRoot(dbConfig)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/credits/credits.component.html":
/*!************************************************!*\
  !*** ./src/app/credits/credits.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"start-game-section\">\n\n  <img class=\"start-game-image\" src=\"assets/img/start.png\" alt=\"\">\n\n  <div class=\"start-game-name\">Jogo das Estações</div>\n\n\n  <!-- campo pra por o nome -->\n  \n  <p>Jogo desenvolvido por:</p>\n  <p>EDUARDO NATAN MACHADO INACIO</p>\n  <p>ROBSON JEAN PENTEADO</p>\n  <p>THIAGO HENRIQUE OLIVEIRA DE JESUS</p>\n  <br>\n  <p><b>UNIVERSIDADE TECNOLÓGICA FEDERAL DO PARANÁ</b></p>\n\n\n</div>"

/***/ }),

/***/ "./src/app/credits/credits.component.scss":
/*!************************************************!*\
  !*** ./src/app/credits/credits.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-game-section {\n  margin-top: calc(50vh - 312px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column; }\n\n.start-game-image {\n  height: 256px; }\n\n.start-game-name {\n  font-size: 64px;\n  margin-bottom: 16px;\n  font-weight: bold;\n  color: #fff; }\n\n.input {\n  width: 400px; }\n\n.start-buttons-wrapper {\n  display: flex;\n  margin-top: 32px; }\n\n.start-buttons-wrapper .start-game-level {\n    background-color: #fff;\n    text-align: center;\n    font-size: 24px;\n    padding: 64px;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    margin: 0px 16px;\n    cursor: pointer; }\n\n.start-buttons-wrapper .start-game-level:hover {\n      background-color: #56CBF9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2Jzb24vd2ViL3Byb2pldG8tam9nby9zcmMvYXBwL2NyZWRpdHMvY3JlZGl0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZLEVBQUE7O0FBSWQ7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBRmxCO0lBS0Usc0JBQXNCO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQ0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUFabkI7TUFjTSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NyZWRpdHMvY3JlZGl0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uc3RhcnQtZ2FtZS1zZWN0aW9ue1xuICBtYXJnaW4tdG9wOiBjYWxjKDUwdmggLSAzMTJweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cblxuLnN0YXJ0LWdhbWUtaW1hZ2V7XG4gIGhlaWdodDogMjU2cHg7XG59XG5cbi5zdGFydC1nYW1lLW5hbWV7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaW5wdXR7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuXG4uc3RhcnQtYnV0dG9ucy13cmFwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICAuc3RhcnQtZ2FtZS1sZXZlbHtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZzogNjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICAgIG1hcmdpbjogMHB4IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZDQkY5O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/credits/credits.component.ts":
/*!**********************************************!*\
  !*** ./src/app/credits/credits.component.ts ***!
  \**********************************************/
/*! exports provided: CreditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsComponent", function() { return CreditsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");




var CreditsComponent = /** @class */ (function () {
    function CreditsComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    CreditsComponent.prototype.ngOnInit = function () {
    };
    CreditsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-credits',
            template: __webpack_require__(/*! ./credits.component.html */ "./src/app/credits/credits.component.html"),
            styles: [__webpack_require__(/*! ./credits.component.scss */ "./src/app/credits/credits.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreditsComponent);
    return CreditsComponent;
}());



/***/ }),

/***/ "./src/app/end-game/end-game.component.html":
/*!**************************************************!*\
  !*** ./src/app/end-game/end-game.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"start-game-section\">\n\n  <img class=\"start-game-image\" src=\"assets/img/start.png\" alt=\"\">\n\n  <div class=\"start-game-name\">Jogo das Estações</div>\n\n\n  <!-- campo pra por o nome -->\n  \n\n  <div>\n    <p>Você errou {{data.errorsOnQuestionOne}} na Lição 1</p>\n    <p>Você errou {{data.errorsOnQuestionTwo}} na Lição 2</p>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/end-game/end-game.component.scss":
/*!**************************************************!*\
  !*** ./src/app/end-game/end-game.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-game-section {\n  margin-top: calc(50vh - 312px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column; }\n\n.start-game-image {\n  height: 256px; }\n\n.start-game-name {\n  font-size: 64px;\n  margin-bottom: 16px;\n  font-weight: bold;\n  color: #fff; }\n\n.input {\n  width: 400px; }\n\n.start-buttons-wrapper {\n  display: flex;\n  margin-top: 32px; }\n\n.start-buttons-wrapper .start-game-level {\n    background-color: #fff;\n    text-align: center;\n    font-size: 24px;\n    padding: 64px;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    margin: 0px 16px;\n    cursor: pointer; }\n\n.start-buttons-wrapper .start-game-level:hover {\n      background-color: #56CBF9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2Jzb24vd2ViL3Byb2pldG8tam9nby9zcmMvYXBwL2VuZC1nYW1lL2VuZC1nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVksRUFBQTs7QUFJZDtFQUNFLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFGbEI7SUFLRSxzQkFBc0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDBDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBOztBQVpuQjtNQWNNLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW5kLWdhbWUvZW5kLWdhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnN0YXJ0LWdhbWUtc2VjdGlvbntcbiAgbWFyZ2luLXRvcDogY2FsYyg1MHZoIC0gMzEycHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG5cbi5zdGFydC1nYW1lLWltYWdle1xuICBoZWlnaHQ6IDI1NnB4O1xufVxuXG4uc3RhcnQtZ2FtZS1uYW1le1xuICBmb250LXNpemU6IDY0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmlucHV0e1xuICB3aWR0aDogNDAwcHg7XG59XG5cblxuLnN0YXJ0LWJ1dHRvbnMtd3JhcHBlcntcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgLnN0YXJ0LWdhbWUtbGV2ZWx7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmc6IDY0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICBtYXJnaW46IDBweCAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVye1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU2Q0JGOTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/end-game/end-game.component.ts":
/*!************************************************!*\
  !*** ./src/app/end-game/end-game.component.ts ***!
  \************************************************/
/*! exports provided: EndGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndGameComponent", function() { return EndGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");




var EndGameComponent = /** @class */ (function () {
    function EndGameComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    EndGameComponent.prototype.ngOnInit = function () {
    };
    EndGameComponent.prototype.goToLevel1 = function () {
        this.router.navigate(['lesson/1']);
        this.data.save();
    };
    EndGameComponent.prototype.goToLevel2 = function () {
        this.router.navigate(['lesson/2']);
        this.data.save();
    };
    EndGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-end-game',
            template: __webpack_require__(/*! ./end-game.component.html */ "./src/app/end-game/end-game.component.html"),
            styles: [__webpack_require__(/*! ./end-game.component.scss */ "./src/app/end-game/end-game.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EndGameComponent);
    return EndGameComponent;
}());



/***/ }),

/***/ "./src/app/lesson-one/lesson-one.component.html":
/*!******************************************************!*\
  !*** ./src/app/lesson-one/lesson-one.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Aprendendo as Estações</h1>\n  <div class=\"row\">\n    <div class=\"col-lg-2\">\n      <div class=\"lesson-station verao\" [ngClass]=\"{'active': selected=='verao'}\" (click)=\"selected='verao'\">Verão</div>\n      <div class=\"lesson-station inverno\" [ngClass]=\"{'active': selected=='inverno'}\" (click)=\"selected='inverno'\">Inverno</div>\n      <div class=\"lesson-station outono\"  [ngClass]=\"{'active': selected=='outono'}\" (click)=\"selected='outono'\">Outono</div>\n      <div class=\"lesson-station primavera\" [ngClass]=\"{'active': selected=='primavera'}\" (click)=\"selected='primavera'\">Primavera</div>\n    </div>\n    <div class=\"col-lg-10\">\n      <div *ngIf=\"selected=='verao'\">\n        <p>O verão é a estação mais quente do ano, as temperaturas são altas e os dias ficam maiores do que as noites. Isso acontece porque uma parte da Terra está mais perto do Sol.</p>\n        <p>Com o calor, a água evapora e, por isso, chove mais.</p>\n        <p>É importante não esquecer de utilizar o protetor solar e tomar muitos líquidos nessa época do ano. Isso porque além de ser muito quente, os raios solares são bem fortes.</p>\n        <p>No Brasil, o verão inicia em 21 de dezembro e dura até 20 de março.</p>\n        <audio src=\"./assets/audio/audio-verao.mp3\" autoplay=\"true\"></audio>\n      </div>\n\n\n      <div *ngIf=\"selected=='inverno'\">\n        <p>O inverno começa depois do outono e termina com o início da primavera. É a época mais fria do ano e em algumas regiões existe muita neve.</p>\n        <p>Durante o inverno, uma parte da Terra é menos iluminada pelos raios solares, assim os dias ficam mais curtos e as noites mais longas.</p>\n        <p>Nesse período, o clima é frio e seco, pois a umidade ar é baixa. Isso tudo pode fazer com que as pessoas fiquem mais resfriadas.</p>\n        <p>No Brasil, o inverno começa no dia 21 de junho e termina no dia 23 de setembro.</p>\n        <audio src=\"./assets/audio/audio-inverno.mp3\" autoplay=\"true\"></audio>\n      </div>\n\n\n      <div *ngIf=\"selected=='outono'\">\n        <p>O outono é a estação que acontece depois do verão e antes do inverno. Durante o outono os dias voltam a ficar curtos e as folhas das árvores, já amareladas, começam a cair no solo.</p>\n        <p>As temperaturas começam a baixar e os dias ficam mais frios. Os raios solares também ficam cada vez menos fortes e podem acontecer ventanias.</p>\n        <p>No Brasil, o outono inicia entre 20 ou 21 de Março e termina entre 21 ou 22 de Junho. Porém, o outono não é percebido em todas as regiões do país.</p>\n        <audio src=\"./assets/audio/audio-outono.mp3\" autoplay=\"true\"></audio>\n      </div>\n\n\n      <div *ngIf=\"selected=='primavera'\">\n        <p>A primavera é a estação mais florida e colorida do ano. A temperatura é mais agradável e com o passar do tempo os dias começam a ficar maiores do que as noites.</p>\n        <p>Os dias são agradáveis para passeios e contemplação da natureza. Os animais voltam a ficar ativos e as plantas ficam cheinhas de flores.</p>\n        <p>No Brasil, a primavera inicia em 23 de setembro e termina em 22 de dezembro.</p>\n        <audio src=\"./assets/audio/audio-primavera.mp3\" autoplay=\"true\"></audio>\n      </div>\n\n\n    </div>\n  </div>\n\n<div class=\"start-buttons-wrapper\">\n  <div class=\"start-questions\" (click)=\"startQuestion1()\">\n    Começar <br>Questões\n  </div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/lesson-one/lesson-one.component.scss":
/*!******************************************************!*\
  !*** ./src/app/lesson-one/lesson-one.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 64px; }\n\n.col-lg-10,\n.col-lg-2 {\n  border: 4px solid #fff; }\n\nh1 {\n  text-align: center;\n  margin-bottom: 32px; }\n\n.start-buttons-wrapper {\n  margin-top: 32px; }\n\n.start-buttons-wrapper .start-questions {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: 0 auto;\n    background-color: #fff;\n    text-align: center;\n    font-size: 24px;\n    padding: 64px;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    cursor: pointer; }\n\n.start-buttons-wrapper .start-questions:hover {\n      background-color: #56CBF9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2Jzb24vd2ViL3Byb2pldG8tam9nby9zcmMvYXBwL2xlc3Nvbi1vbmUvbGVzc29uLW9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjs7RUFFRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBRUUsZ0JBQWdCLEVBQUE7O0FBRmxCO0lBSUksMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDcEIsY0FBYztJQUNkLHNCQUFzQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMENBQXVDO0lBQ3ZDLGVBQWUsRUFBQTs7QUFabkI7TUFjTSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xlc3Nvbi1vbmUvbGVzc29uLW9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG59XG5cbi5jb2wtbGctMTAsXG4uY29sLWxnLTJ7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XG59XG5cbmgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5cbi5zdGFydC1idXR0b25zLXdyYXBwZXJ7XG4gIC8vIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIC5zdGFydC1xdWVzdGlvbnN7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmc6IDY0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NkNCRjk7XG4gICAgfVxuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/lesson-one/lesson-one.component.ts":
/*!****************************************************!*\
  !*** ./src/app/lesson-one/lesson-one.component.ts ***!
  \****************************************************/
/*! exports provided: LessonOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonOneComponent", function() { return LessonOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");




var LessonOneComponent = /** @class */ (function () {
    function LessonOneComponent(router, data) {
        this.router = router;
        this.data = data;
        this.selected = "verao";
    }
    LessonOneComponent.prototype.ngOnInit = function () {
        this.startTimer();
    };
    LessonOneComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.data.timeOnLessonOne++;
        }, 1000);
    };
    LessonOneComponent.prototype.startQuestion1 = function () {
        this.data.save();
        clearInterval(this.interval);
        console.log(this.data.timeOnLessonOne);
        this.router.navigate(['/question/1']);
    };
    LessonOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lesson-one',
            template: __webpack_require__(/*! ./lesson-one.component.html */ "./src/app/lesson-one/lesson-one.component.html"),
            styles: [__webpack_require__(/*! ./lesson-one.component.scss */ "./src/app/lesson-one/lesson-one.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], LessonOneComponent);
    return LessonOneComponent;
}());



/***/ }),

/***/ "./src/app/lesson-two/lesson-two.component.html":
/*!******************************************************!*\
  !*** ./src/app/lesson-two/lesson-two.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Aprendendo as Estações e suas Roupas</h1>\n  <div class=\"row\">\n    <div class=\"col-lg-2\">\n      <div class=\"lesson-station verao\" [ngClass]=\"{'active': selected=='verao'}\" (click)=\"selected='verao'\">Verão</div>\n      <div class=\"lesson-station inverno\" [ngClass]=\"{'active': selected=='inverno'}\" (click)=\"selected='inverno'\">Inverno</div>\n      <div class=\"lesson-station outono\" [ngClass]=\"{'active': selected=='outono'}\" (click)=\"selected='outono'\">Outono</div>\n      <div class=\"lesson-station primavera\" [ngClass]=\"{'active': selected=='primavera'}\" (click)=\"selected='primavera'\">Primavera</div>\n    </div>\n    <div class=\"col-lg-10\">\n      <div *ngIf=\"selected=='verao'\">\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <img src=\"assets/img/cVerao.jpg\" alt=\"\"></div>\n          <div class=\"col-lg-6 text-wrapper\">\n            <p>Para aguentar o calor do verão, o melhor é usar camiseta, bermuda, chinelo e boné.</p>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"selected=='inverno'\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <img src=\"assets/img/cInverno.jpg\" alt=\"\"></div>\n          <div class=\"col-lg-6 text-wrapper\">\n            <p>Para aguentar o frio do inverno, o melhor é usar casaco, calça moletom, botas, gorro.</p>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"selected=='outono'\">\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <img src=\"assets/img/cOutono.jpg\" alt=\"\"></div>\n          <div class=\"col-lg-6 text-wrapper\">\n            <p>No outono as temperatura mudam muito durante o dia, o melhor é usar blusa, calça, tênis.</p>\n\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"selected=='primavera'\">\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <img src=\"assets/img/cPrimavera.jpg\" alt=\"\"></div>\n          <div class=\"col-lg-6 text-wrapper\">\n            <p>Durante a primavera o clima costuma ser ao mesmo tempo quente e fresquinho, o melhor é usar camiseta, bermuda e tênis.</p>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"start-buttons-wrapper\">\n    <div class=\"start-questions\" (click)=\"startQuestion1()\">\n      Começar <br>Questões\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/lesson-two/lesson-two.component.scss":
/*!******************************************************!*\
  !*** ./src/app/lesson-two/lesson-two.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 64px; }\n\n.col-lg-10,\n.col-lg-2 {\n  border: 4px solid #fff; }\n\nimg {\n  width: 100%; }\n\n.text-wrapper {\n  align-self: center; }\n\nh1 {\n  text-align: center;\n  margin-bottom: 32px; }\n\n.start-buttons-wrapper {\n  margin-top: 32px; }\n\n.start-buttons-wrapper .start-questions {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: 0 auto;\n    background-color: #fff;\n    text-align: center;\n    font-size: 24px;\n    padding: 64px;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    cursor: pointer; }\n\n.start-buttons-wrapper .start-questions:hover {\n      background-color: #56CBF9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2Jzb24vd2ViL3Byb2pldG8tam9nby9zcmMvYXBwL2xlc3Nvbi10d28vbGVzc29uLXR3by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjs7RUFFRSxzQkFBc0IsRUFBQTs7QUFHdEI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBRUUsZ0JBQWdCLEVBQUE7O0FBRmxCO0lBSUksMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDcEIsY0FBYztJQUNkLHNCQUFzQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMENBQXVDO0lBQ3ZDLGVBQWUsRUFBQTs7QUFabkI7TUFjTSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xlc3Nvbi10d28vbGVzc29uLXR3by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG59XG5cbi5jb2wtbGctMTAsXG4uY29sLWxnLTJ7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XG59XG5cbiAgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC50ZXh0LXdyYXBwZXJ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG5cbmgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5cbi5zdGFydC1idXR0b25zLXdyYXBwZXJ7XG4gIC8vIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIC5zdGFydC1xdWVzdGlvbnN7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmc6IDY0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NkNCRjk7XG4gICAgfVxuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/lesson-two/lesson-two.component.ts":
/*!****************************************************!*\
  !*** ./src/app/lesson-two/lesson-two.component.ts ***!
  \****************************************************/
/*! exports provided: LessonTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTwoComponent", function() { return LessonTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");




var LessonTwoComponent = /** @class */ (function () {
    function LessonTwoComponent(router, data) {
        this.router = router;
        this.data = data;
        this.selected = "verao";
    }
    LessonTwoComponent.prototype.ngOnInit = function () {
        this.startTimer();
    };
    LessonTwoComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.data.timeOnLessonTwo++;
        }, 1000);
    };
    LessonTwoComponent.prototype.startQuestion1 = function () {
        clearInterval(this.interval);
        this.data.save();
        console.log(this.data.timeOnLessonOne);
        this.router.navigate(['/question/2']);
    };
    LessonTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lesson-two',
            template: __webpack_require__(/*! ./lesson-two.component.html */ "./src/app/lesson-two/lesson-two.component.html"),
            styles: [__webpack_require__(/*! ./lesson-two.component.scss */ "./src/app/lesson-two/lesson-two.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], LessonTwoComponent);
    return LessonTwoComponent;
}());



/***/ }),

/***/ "./src/app/question-one/question-one.component.html":
/*!**********************************************************!*\
  !*** ./src/app/question-one/question-one.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-lg-12\">\n      <div *ngIf=\"selected=='verao'\">\n        <h1>Qual imagem representa o <b>Verão</b>?</h1>\n        <div class=\"cards-option\">\n          <div class=\"card-option\" (click)=\"setAnswer(1,1)\" [ngStyle]=\"{'background-image': 'url(assets/img/summer.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(1)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(1,2)\" [ngStyle]=\"{'background-image': 'url(assets/img/winter.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(2)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(1,3)\" [ngStyle]=\"{'background-image': 'url(assets/img/spring.jpg)'}\">\n            <div  alt=\"\" class=\"error\"*ngIf=\"removeAnswer.includes(3)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(1,4)\" [ngStyle]=\"{'background-image': 'url(assets/img/autumn.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(4)\"></div>\n          </div>\n\n          <!-- <div class=\"card-option \">\n            <img src=\"assets/img/autumn.jpg\" alt=\"\" (click)=\"setAnswer(1,2)\" *ngIf=\"!removeAnswer2\">\n          </div>\n          <div class=\"card-option \">\n            <img src=\"assets/img/spring.jpg\" alt=\"\" (click)=\"setAnswer(1,3)\" *ngIf=\"!removeAnswer3\">\n          </div>\n          <div class=\"card-option \">\n            <img src=\"assets/img/winter.jpg\" alt=\"\" (click)=\"setAnswer(1,4)\" *ngIf=\"!removeAnswer4\">\n          </div> -->\n        </div>\n      </div>\n\n\n      <div *ngIf=\"selected=='inverno'\">\n        <h1>Qual imagem representa o <b>Inverno</b>?</h1>\n        <div class=\"cards-option\">\n          <div class=\"card-option\" (click)=\"setAnswer(2,1)\" [ngStyle]=\"{'background-image': 'url(assets/img/autumn.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(1)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(2,4)\" [ngStyle]=\"{'background-image': 'url(assets/img/summer.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(4)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(2,3)\" [ngStyle]=\"{'background-image': 'url(assets/img/winter.jpg)'}\">\n            <div  alt=\"\" class=\"error\"*ngIf=\"removeAnswer.includes(3)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(2,2)\" [ngStyle]=\"{'background-image': 'url(assets/img/spring.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(2)\"></div>\n          </div>\n        \n\n        </div>\n      </div>\n\n\n      <div *ngIf=\"selected=='outono'\">\n        <h1>Qual imagem representa o <b>Outono</b>?</h1>\n        <div class=\"cards-option\">\n          <div class=\"card-option\" (click)=\"setAnswer(3,1)\" [ngStyle]=\"{'background-image': 'url(assets/img/winter.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(1)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(3,4)\" [ngStyle]=\"{'background-image': 'url(assets/img/spring.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(4)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(3,3)\" [ngStyle]=\"{'background-image': 'url(assets/img/autumn.jpg)'}\">\n            <div  alt=\"\" class=\"error\"*ngIf=\"removeAnswer.includes(3)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(3,2)\" [ngStyle]=\"{'background-image': 'url(assets/img/summer.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(2)\"></div>\n          </div>\n\n        </div>\n      </div>\n\n\n      <div *ngIf=\"selected=='primavera'\">\n        <h1>Qual imagem representa o <b>Primavera</b>?</h1>\n        <div class=\"cards-option\">\n          <div class=\"card-option\" (click)=\"setAnswer(4,1)\" [ngStyle]=\"{'background-image': 'url(assets/img/summer.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(1)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(4,2)\" [ngStyle]=\"{'background-image': 'url(assets/img/winter.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(2)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(4,3)\" [ngStyle]=\"{'background-image': 'url(assets/img/autumn.jpg)'}\">\n            <div  alt=\"\" class=\"error\"*ngIf=\"removeAnswer.includes(3)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(4,4)\" [ngStyle]=\"{'background-image': 'url(assets/img/spring.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(4)\"></div>\n          </div>\n        </div>\n\n      </div>\n\n\n      <div *ngIf=\"selected=='congrats'\" class=\"congrats-next\">\n        <video [src]=\"'assets/parabens-'+randomVideo+'.mp4'\" autoplay=\"true\" (ended)=\"endLevel()\"></video>\n        <h1>Parabéns! <br> Vamos para a próxima Fase</h1>\n      </div>\n\n\n      <div *ngIf=\"selected=='congrats-next'\" class=\"congrats-next\">\n        <video [src]=\"'assets/parabens-'+randomVideo+'.mp4'\" autoplay=\"true\" (ended)=\"nextQuestion()\"></video>\n        <h1>Parabéns, vamos para a próxima questão!</h1>\n      </div>\n\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/question-one/question-one.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/question-one/question-one.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 64px; }\n\n.col-lg-10,\n.col-lg-2 {\n  border: 4px solid #fff; }\n\nh1 {\n  text-align: center;\n  font-size: 28px;\n  margin-bottom: 32px; }\n\n.cards-option {\n  display: flex;\n  margin: 0 auto;\n  text-align: center;\n  justify-content: center; }\n\n.card-option {\n  width: 200px;\n  height: 200px;\n  background-color: #fff;\n  text-align: center;\n  font-size: 24px;\n  padding: 0px;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  margin: 0 16px;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.card-option img {\n    width: 100%;\n    height: 100%; }\n\n.card-option p {\n    margin: 0; }\n\n.card-option .error {\n    width: 100%;\n    height: 100%;\n    background-image: url('error.png');\n    z-index: 999999;\n    background-size: cover;\n    background-position: center center; }\n\n.card-option:hover {\n    background-color: #56CBF9; }\n\n.congrats-next {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2Jzb24vd2ViL3Byb2pldG8tam9nby9zcmMvYXBwL3F1ZXN0aW9uLW9uZS9xdWVzdGlvbi1vbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7O0VBRUUsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMENBQXNDO0VBQ3RDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBOztBQVp4QjtJQWdCSSxXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQWpCaEI7SUFxQkksU0FBUyxFQUFBOztBQXJCYjtJQXlCSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtDQUFtRDtJQUNuRCxlQUFlO0lBQ2Ysc0JBQXNCO0lBRXRCLGtDQUFrQyxFQUFBOztBQS9CdEM7SUFtQ0kseUJBQXlCLEVBQUE7O0FBSTdCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi1vbmUvcXVlc3Rpb24tb25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgbWFyZ2luLXRvcDogNjRweDtcbn1cblxuLmNvbC1sZy0xMCxcbi5jb2wtbGctMntcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcbn1cblxuaDF7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLmNhcmRzLW9wdGlvbntcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkLW9wdGlvbntcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsLjIpO1xuICBtYXJnaW46IDAgMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvLyBkaXNwbGF5OiBmbGV4O1xuICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbiAgcHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuZXJyb3J7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9lcnJvci5wbmcnKTtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIH1cblxuICAmOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NkNCRjk7XG4gIH1cbn1cblxuLmNvbmdyYXRzLW5leHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/question-one/question-one.component.ts":
/*!********************************************************!*\
  !*** ./src/app/question-one/question-one.component.ts ***!
  \********************************************************/
/*! exports provided: QuestionOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionOneComponent", function() { return QuestionOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");




var QuestionOneComponent = /** @class */ (function () {
    function QuestionOneComponent(router, data) {
        this.router = router;
        this.data = data;
        this.selected = "verao";
        this.randomVideo = 0;
        this.question1 = 1;
        this.question2 = 3;
        this.question3 = 3;
        this.question4 = 4;
        this.removeAnswer = [];
    }
    QuestionOneComponent.prototype.ngOnInit = function () {
        this.startTimer();
    };
    QuestionOneComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.data.timeOnQuestionOne++;
        }, 1000);
    };
    QuestionOneComponent.prototype.setAnswer = function (question, answer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(question === 1)) return [3 /*break*/, 3];
                        if (!(this.question1 === answer)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.generateRandomVideo()];
                    case 1:
                        _a.sent();
                        this.selected = 'congrats-next';
                        // setTimeout(()=>{this.selected = 'inverno';},2000);
                        this.removeAnswer = [];
                        this.next = 'inverno';
                        return [3 /*break*/, 3];
                    case 2:
                        this.removeAnswer.push(answer);
                        this.data.errorsOnQuestionOne++;
                        _a.label = 3;
                    case 3:
                        if (!(question === 2)) return [3 /*break*/, 6];
                        if (!(this.question2 === answer)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.generateRandomVideo()];
                    case 4:
                        _a.sent();
                        this.selected = 'congrats-next';
                        // setTimeout(()=>{this.selected = 'outono';},2000);
                        this.removeAnswer = [];
                        this.next = 'outono';
                        return [3 /*break*/, 6];
                    case 5:
                        this.removeAnswer.push(answer);
                        this.data.errorsOnQuestionOne++;
                        _a.label = 6;
                    case 6:
                        if (!(question === 3)) return [3 /*break*/, 9];
                        if (!(this.question3 === answer)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.generateRandomVideo()];
                    case 7:
                        _a.sent();
                        this.selected = 'congrats-next';
                        // setTimeout(()=>{this.selected = 'primavera';},2000);
                        this.removeAnswer = [];
                        this.next = 'primavera';
                        return [3 /*break*/, 9];
                    case 8:
                        this.removeAnswer.push(answer);
                        this.data.errorsOnQuestionOne++;
                        _a.label = 9;
                    case 9:
                        if (!(question === 4)) return [3 /*break*/, 12];
                        if (!(this.question4 === answer)) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.generateRandomVideo()];
                    case 10:
                        _a.sent();
                        this.selected = 'congrats';
                        this.removeAnswer = [];
                        return [3 /*break*/, 12];
                    case 11:
                        this.removeAnswer.push(answer);
                        this.data.errorsOnQuestionOne++;
                        _a.label = 12;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    QuestionOneComponent.prototype.generateRandomVideo = function () {
        this.randomVideo = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    };
    QuestionOneComponent.prototype.nextQuestion = function () {
        this.selected = this.next;
        this.next = '';
    };
    QuestionOneComponent.prototype.endLevel = function () {
        var _this = this;
        clearInterval(this.interval);
        this.data.save();
        setTimeout(function () {
            _this.router.navigate(['lesson/2']);
        }, 2000);
    };
    QuestionOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-one',
            template: __webpack_require__(/*! ./question-one.component.html */ "./src/app/question-one/question-one.component.html"),
            styles: [__webpack_require__(/*! ./question-one.component.scss */ "./src/app/question-one/question-one.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], QuestionOneComponent);
    return QuestionOneComponent;
}());



/***/ }),

/***/ "./src/app/question-two/question-two.component.html":
/*!**********************************************************!*\
  !*** ./src/app/question-two/question-two.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-lg-12\">\n      <div *ngIf=\"selected=='verao'\">\n        <h1>Qual grupo de roupas é de <b>Verão</b>?</h1>\n        <div class=\"cards-option\">\n          <div class=\"card-option\" (click)=\"setAnswer(1,1)\" [ngStyle]=\"{'background-image': 'url(assets/img/cVerao.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(1)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(1,2)\" [ngStyle]=\"{'background-image': 'url(assets/img/cInverno.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(2)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(1,3)\" [ngStyle]=\"{'background-image': 'url(assets/img/cPrimavera.jpg)'}\">\n            <div  alt=\"\" class=\"error\"*ngIf=\"removeAnswer.includes(3)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(1,4)\" [ngStyle]=\"{'background-image': 'url(assets/img/cOutono.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(4)\"></div>\n          </div>\n\n          <!-- <div class=\"card-option \">\n            <img src=\"assets/img/cOutono.jpg\" alt=\"\" (click)=\"setAnswer(1,2)\" *ngIf=\"!removeAnswer2\">\n          </div>\n          <div class=\"card-option \">\n            <img src=\"assets/img/cPrimavera.jpg\" alt=\"\" (click)=\"setAnswer(1,3)\" *ngIf=\"!removeAnswer3\">\n          </div>\n          <div class=\"card-option \">\n            <img src=\"assets/img/cInverno.jpg\" alt=\"\" (click)=\"setAnswer(1,4)\" *ngIf=\"!removeAnswer4\">\n          </div> -->\n        </div>\n      </div>\n\n\n      <div *ngIf=\"selected=='inverno'\">\n        <h1>Qual grupo de roupas é de <b>Inverno</b>?</h1>\n        <div class=\"cards-option\">\n          <div class=\"card-option\" (click)=\"setAnswer(2,1)\" [ngStyle]=\"{'background-image': 'url(assets/img/cOutono.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(1)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(2,4)\" [ngStyle]=\"{'background-image': 'url(assets/img/cVerao.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(4)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(2,3)\" [ngStyle]=\"{'background-image': 'url(assets/img/cInverno.jpg)'}\">\n            <div  alt=\"\" class=\"error\"*ngIf=\"removeAnswer.includes(3)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(2,2)\" [ngStyle]=\"{'background-image': 'url(assets/img/cPrimavera.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(2)\"></div>\n          </div>\n        \n\n        </div>\n      </div>\n\n\n      <div *ngIf=\"selected=='outono'\">\n        <h1>Qual grupo de roupas é de <b>Outono</b>?</h1>\n        <div class=\"cards-option\">\n          <div class=\"card-option\" (click)=\"setAnswer(3,1)\" [ngStyle]=\"{'background-image': 'url(assets/img/cInverno.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(1)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(3,4)\" [ngStyle]=\"{'background-image': 'url(assets/img/cPrimavera.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(4)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(3,3)\" [ngStyle]=\"{'background-image': 'url(assets/img/cOutono.jpg)'}\">\n            <div  alt=\"\" class=\"error\"*ngIf=\"removeAnswer.includes(3)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(3,2)\" [ngStyle]=\"{'background-image': 'url(assets/img/cVerao.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(2)\"></div>\n          </div>\n\n        </div>\n      </div>\n\n\n      <div *ngIf=\"selected=='primavera'\">\n        <h1>Qual grupo de roupas é de <b>Primavera</b>?</h1>\n        <div class=\"cards-option\">\n          <div class=\"card-option\" (click)=\"setAnswer(4,1)\" [ngStyle]=\"{'background-image': 'url(assets/img/cVerao.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(1)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(4,2)\" [ngStyle]=\"{'background-image': 'url(assets/img/cInverno.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(2)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(4,3)\" [ngStyle]=\"{'background-image': 'url(assets/img/cOutono.jpg)'}\">\n            <div  alt=\"\" class=\"error\"*ngIf=\"removeAnswer.includes(3)\"></div>\n          </div>\n          <div class=\"card-option\" (click)=\"setAnswer(4,4)\" [ngStyle]=\"{'background-image': 'url(assets/img/cPrimavera.jpg)'}\">\n            <div  alt=\"\" class=\"error\" *ngIf=\"removeAnswer.includes(4)\"></div>\n          </div>\n        </div>\n\n      </div>\n\n      <div *ngIf=\"selected=='congrats'\" class=\"congrats-next\">\n        <video [src]=\"'assets/parabens-'+randomVideo+'.mp4'\" autoplay=\"true\" (ended)=\"endLevel()\"></video>\n        <h1>Parabéns! <br> Vamos para a próxima Fase</h1>\n      </div>\n\n\n      <div *ngIf=\"selected=='congrats-next'\" class=\"congrats-next\">\n        <video [src]=\"'assets/parabens-'+randomVideo+'.mp4'\" autoplay=\"true\" (ended)=\"nextQuestion()\"></video>\n        <h1>Parabéns, fim de jogo!</h1>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/question-two/question-two.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/question-two/question-two.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 64px; }\n\n.col-lg-10,\n.col-lg-2 {\n  border: 4px solid #fff; }\n\nh1 {\n  text-align: center;\n  font-size: 28px;\n  margin-bottom: 32px; }\n\n.cards-option {\n  display: flex;\n  margin: 0 auto;\n  text-align: center;\n  justify-content: center; }\n\n.card-option {\n  width: 200px;\n  height: 200px;\n  background-color: #fff;\n  text-align: center;\n  font-size: 24px;\n  padding: 0px;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  margin: 0 16px;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center; }\n\n.card-option img {\n    width: 100%;\n    height: 100%; }\n\n.card-option p {\n    margin: 0; }\n\n.card-option .error {\n    width: 100%;\n    height: 100%;\n    background-image: url('error.png');\n    z-index: 999999;\n    background-size: cover;\n    background-position: center center; }\n\n.card-option:hover {\n    background-color: #56CBF9; }\n\n.congrats-next {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2Jzb24vd2ViL3Byb2pldG8tam9nby9zcmMvYXBwL3F1ZXN0aW9uLXR3by9xdWVzdGlvbi10d28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7O0VBRUUsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMENBQXNDO0VBQ3RDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQ0FBa0MsRUFBQTs7QUFicEM7SUFpQkksV0FBVztJQUNYLFlBQVksRUFBQTs7QUFsQmhCO0lBc0JJLFNBQVMsRUFBQTs7QUF0QmI7SUEwQkksV0FBVztJQUNYLFlBQVk7SUFDWixrQ0FBbUQ7SUFDbkQsZUFBZTtJQUNmLHNCQUFzQjtJQUV0QixrQ0FBa0MsRUFBQTs7QUFoQ3RDO0lBb0NJLHlCQUF5QixFQUFBOztBQUk3QjtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb24tdHdvL3F1ZXN0aW9uLXR3by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG59XG5cbi5jb2wtbGctMTAsXG4uY29sLWxnLTJ7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XG59XG5cbmgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbi5jYXJkcy1vcHRpb257XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZC1vcHRpb257XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLC4yKTtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgLy8gZGlzcGxheTogZmxleDtcbiAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG4gIHB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmVycm9ye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvZXJyb3IucG5nJyk7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB9XG5cbiAgJjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZDQkY5O1xuICB9XG59XG5cbi5jb25ncmF0cy1uZXh0e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/question-two/question-two.component.ts":
/*!********************************************************!*\
  !*** ./src/app/question-two/question-two.component.ts ***!
  \********************************************************/
/*! exports provided: QuestionTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionTwoComponent", function() { return QuestionTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");




var QuestionTwoComponent = /** @class */ (function () {
    function QuestionTwoComponent(router, data) {
        this.router = router;
        this.data = data;
        this.selected = "verao";
        this.randomVideo = 0;
        this.question1 = 1;
        this.question2 = 3;
        this.question3 = 3;
        this.question4 = 4;
        this.removeAnswer = [];
    }
    QuestionTwoComponent.prototype.ngOnInit = function () {
        this.startTimer();
    };
    QuestionTwoComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.data.timeOnQuestionTwo++;
        }, 1000);
    };
    QuestionTwoComponent.prototype.setAnswer = function (question, answer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(question === 1)) return [3 /*break*/, 3];
                        if (!(this.question1 === answer)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.generateRandomVideo()];
                    case 1:
                        _a.sent();
                        this.selected = 'congrats-next';
                        // setTimeout(()=>{this.selected = 'inverno';},2000);
                        this.removeAnswer = [];
                        this.next = 'inverno';
                        return [3 /*break*/, 3];
                    case 2:
                        this.removeAnswer.push(answer);
                        this.data.errorsOnQuestionTwo++;
                        _a.label = 3;
                    case 3:
                        if (!(question === 2)) return [3 /*break*/, 6];
                        if (!(this.question2 === answer)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.generateRandomVideo()];
                    case 4:
                        _a.sent();
                        this.selected = 'congrats-next';
                        // setTimeout(()=>{this.selected = 'outono';},2000);
                        this.removeAnswer = [];
                        this.next = 'outono';
                        return [3 /*break*/, 6];
                    case 5:
                        this.removeAnswer.push(answer);
                        this.data.errorsOnQuestionTwo++;
                        _a.label = 6;
                    case 6:
                        if (!(question === 3)) return [3 /*break*/, 9];
                        if (!(this.question3 === answer)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.generateRandomVideo()];
                    case 7:
                        _a.sent();
                        this.selected = 'congrats-next';
                        // setTimeout(()=>{this.selected = 'primavera';},2000);
                        this.removeAnswer = [];
                        this.next = 'primavera';
                        return [3 /*break*/, 9];
                    case 8:
                        this.removeAnswer.push(answer);
                        this.data.errorsOnQuestionTwo++;
                        _a.label = 9;
                    case 9:
                        if (!(question === 4)) return [3 /*break*/, 12];
                        if (!(this.question4 === answer)) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.generateRandomVideo()];
                    case 10:
                        _a.sent();
                        this.selected = 'congrats';
                        this.removeAnswer = [];
                        return [3 /*break*/, 12];
                    case 11:
                        this.removeAnswer.push(answer);
                        this.data.errorsOnQuestionTwo++;
                        _a.label = 12;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    QuestionTwoComponent.prototype.generateRandomVideo = function () {
        this.randomVideo = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    };
    QuestionTwoComponent.prototype.nextQuestion = function () {
        this.selected = this.next;
        this.next = '';
    };
    QuestionTwoComponent.prototype.endLevel = function () {
        var _this = this;
        clearInterval(this.interval);
        console.log({
            name: this.data.playerName,
            timeL1: this.data.timeOnLessonOne,
            timeL2: this.data.timeOnLessonTwo,
            timeQ1: this.data.timeOnQuestionOne,
            timeQ2: this.data.timeOnQuestionTwo,
            errorsQ1: this.data.errorsOnQuestionOne,
            errorsQ2: this.data.errorsOnQuestionTwo,
        });
        this.data.save();
        setTimeout(function () {
            _this.router.navigate(['start']);
        }, 2000);
    };
    QuestionTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-two',
            template: __webpack_require__(/*! ./question-two.component.html */ "./src/app/question-two/question-two.component.html"),
            styles: [__webpack_require__(/*! ./question-two.component.scss */ "./src/app/question-two/question-two.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], QuestionTwoComponent);
    return QuestionTwoComponent;
}());



/***/ }),

/***/ "./src/app/results/results.component.html":
/*!************************************************!*\
  !*** ./src/app/results/results.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"start-game-section\">\n\n  <!-- <img class=\"start-game-image\" src=\"assets/img/start.png\" alt=\"\"> -->\n\n  <div class=\"start-game-name\">Jogo das Estações</div>\n\n\n  <!-- campo pra por o nome -->\n  \n  \n\n<section>\n  <header class=\"row\">\n    <div class=\"col\">Nome</div>\n    <div class=\"col\">Tempo Lição 1</div>\n    <div class=\"col\">Tempo Resolvendo 1</div>\n    <div class=\"col\">Erros na Lição 1</div>\n    <div class=\"col\">Tempo Lição 2</div>\n    <div class=\"col\">Tempo Resolvendo 2</div>\n    <div class=\"col\">Erros na Lição 2</div>\n  </header>\n  <div class=\"row\" *ngFor=\"let result of results\">\n    <div class=\"col\">{{result.playerName}}</div>\n    <div class=\"col\">{{result.timeOnLessonOne | minuteSeconds}}</div>\n    <div class=\"col\">{{result.timeOnQuestionOne | minuteSeconds}}</div>\n    <div class=\"col\">{{result.errorsOnQuestionOne}}</div>\n    <div class=\"col\">{{result.timeOnLessonTwo | minuteSeconds}}</div>\n    <div class=\"col\">{{result.timeOnQuestionTwo | minuteSeconds}}</div>\n    <div class=\"col\">{{result.errorsOnQuestionTwo}}</div>\n  </div>\n</section>\n  \n</div>"

/***/ }),

/***/ "./src/app/results/results.component.scss":
/*!************************************************!*\
  !*** ./src/app/results/results.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-game-section {\n  margin-top: calc(50vh - 312px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column; }\n\n.start-game-image {\n  height: 256px; }\n\n.start-game-name {\n  font-size: 64px;\n  margin-bottom: 16px;\n  font-weight: bold;\n  color: #fff; }\n\n.input {\n  width: 400px; }\n\n.start-buttons-wrapper {\n  display: flex;\n  margin-top: 32px; }\n\n.start-buttons-wrapper .start-game-level {\n    background-color: #fff;\n    text-align: center;\n    font-size: 24px;\n    padding: 64px;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    margin: 0px 16px;\n    cursor: pointer; }\n\n.start-buttons-wrapper .start-game-level:hover {\n      background-color: #56CBF9; }\n\nsection {\n  background-color: #fff;\n  text-align: center;\n  font-size: 24px;\n  padding: 0px 15px;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  margin: 0px 16px; }\n\n.col {\n  border: 1px solid black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2Jzb24vd2ViL3Byb2pldG8tam9nby9zcmMvYXBwL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZLEVBQUE7O0FBSWQ7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBRmxCO0lBS0Usc0JBQXNCO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQ0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUFabkI7TUFjTSx5QkFBeUIsRUFBQTs7QUFNL0I7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDBDQUF1QztFQUN2QyxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uc3RhcnQtZ2FtZS1zZWN0aW9ue1xuICBtYXJnaW4tdG9wOiBjYWxjKDUwdmggLSAzMTJweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cblxuLnN0YXJ0LWdhbWUtaW1hZ2V7XG4gIGhlaWdodDogMjU2cHg7XG59XG5cbi5zdGFydC1nYW1lLW5hbWV7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaW5wdXR7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuXG4uc3RhcnQtYnV0dG9ucy13cmFwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICAuc3RhcnQtZ2FtZS1sZXZlbHtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZzogNjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICAgIG1hcmdpbjogMHB4IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZDQkY5O1xuICAgIH1cbiAgfVxufVxuXG5cbnNlY3Rpb257XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gIG1hcmdpbjogMHB4IDE2cHg7XG59XG5cbi5jb2x7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");




var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(data, router) {
        this.data = data;
        this.router = router;
        this.results = [];
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getResults()
            .subscribe(function (data) {
            _this.results = data;
        });
    };
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.scss */ "./src/app/results/results.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/start-game/start-game.component.html":
/*!******************************************************!*\
  !*** ./src/app/start-game/start-game.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"start-game-section\">\n\n  <img class=\"start-game-image\" src=\"assets/img/start.png\" alt=\"\">\n\n  <div class=\"start-game-name\">Jogo das Estações</div>\n\n\n  <!-- campo pra por o nome -->\n  \n  <div class=\"field\">\n    <label for=\"\">Informe seu nome</label>\n    <input class=\"input\" [(ngModel)]=\"data.playerName\" type=\"text\">\n  </div>\n\n\n  <div class=\"start-buttons-wrapper\">\n    <div class=\"start-game-level\" (click)=\"goToLevel1()\">\n      Começar <br>Nível 1\n    </div>\n  \n    <div class=\"start-game-level\" (click)=\"goToLevel2()\">\n      Começar <br>Nível 2\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/start-game/start-game.component.scss":
/*!******************************************************!*\
  !*** ./src/app/start-game/start-game.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-game-section {\n  margin-top: calc(50vh - 312px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column; }\n\n.start-game-image {\n  height: 256px; }\n\n.start-game-name {\n  font-size: 64px;\n  margin-bottom: 16px;\n  font-weight: bold;\n  color: #fff; }\n\n.input {\n  width: 400px; }\n\n.start-buttons-wrapper {\n  display: flex;\n  margin-top: 32px; }\n\n.start-buttons-wrapper .start-game-level {\n    background-color: #fff;\n    text-align: center;\n    font-size: 24px;\n    padding: 64px;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    margin: 0px 16px;\n    cursor: pointer; }\n\n.start-buttons-wrapper .start-game-level:hover {\n      background-color: #56CBF9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2Jzb24vd2ViL3Byb2pldG8tam9nby9zcmMvYXBwL3N0YXJ0LWdhbWUvc3RhcnQtZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZLEVBQUE7O0FBSWQ7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBRmxCO0lBS0Usc0JBQXNCO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQ0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUFabkI7TUFjTSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0LWdhbWUvc3RhcnQtZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uc3RhcnQtZ2FtZS1zZWN0aW9ue1xuICBtYXJnaW4tdG9wOiBjYWxjKDUwdmggLSAzMTJweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cblxuLnN0YXJ0LWdhbWUtaW1hZ2V7XG4gIGhlaWdodDogMjU2cHg7XG59XG5cbi5zdGFydC1nYW1lLW5hbWV7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaW5wdXR7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuXG4uc3RhcnQtYnV0dG9ucy13cmFwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICAuc3RhcnQtZ2FtZS1sZXZlbHtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZzogNjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICAgIG1hcmdpbjogMHB4IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZDQkY5O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/start-game/start-game.component.ts":
/*!****************************************************!*\
  !*** ./src/app/start-game/start-game.component.ts ***!
  \****************************************************/
/*! exports provided: StartGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartGameComponent", function() { return StartGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");




var StartGameComponent = /** @class */ (function () {
    function StartGameComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    StartGameComponent.prototype.ngOnInit = function () {
        this.data.timeOnLessonOne = 0;
        this.data.timeOnLessonTwo = 0;
        this.data.timeOnQuestionOne = 0;
        this.data.timeOnQuestionTwo = 0;
        this.data.errorsOnQuestionOne = 0;
        this.data.errorsOnQuestionTwo = 0;
        this.data.playerId = undefined;
        this.data.playerName = "";
    };
    StartGameComponent.prototype.goToLevel1 = function () {
        this.router.navigate(['lesson/1']);
        this.data.save();
    };
    StartGameComponent.prototype.goToLevel2 = function () {
        this.router.navigate(['lesson/2']);
        this.data.save();
    };
    StartGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start-game',
            template: __webpack_require__(/*! ./start-game.component.html */ "./src/app/start-game/start-game.component.html"),
            styles: [__webpack_require__(/*! ./start-game.component.scss */ "./src/app/start-game/start-game.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StartGameComponent);
    return StartGameComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/robson/web/projeto-jogo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map