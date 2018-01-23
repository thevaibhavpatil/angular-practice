"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
/* coustom decoretor  start*/
function Console(target) {
    console.log(target);
}
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
        this.title = 'hiiii this is custom decoretor';
        console.log(this.title);
    }
    ExampleClass = __decorate([
        Console
    ], ExampleClass);
    return ExampleClass;
}());
/* coustom decoretor  End*/
var CustomDecoretorsComponent = /** @class */ (function () {
    function CustomDecoretorsComponent() {
    }
    CustomDecoretorsComponent.prototype.ngOnInit = function () {
    };
    CustomDecoretorsComponent = __decorate([
        core_1.Component({
            selector: 'yc-custom-decoretors',
            templateUrl: './custom-decoretors.component.html',
            styleUrls: ['./custom-decoretors.component.less'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], CustomDecoretorsComponent);
    return CustomDecoretorsComponent;
}());
exports.CustomDecoretorsComponent = CustomDecoretorsComponent;
