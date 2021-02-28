var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setName = function (name) {
        this.name = name;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, surname) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.setSurname(surname);
        return _this;
    }
    Child.prototype.setSurname = function (surname) {
        this.surname = surname;
    };
    Child.prototype.toString = function () {
        return "Name: " + this.name + ", Surname: " + this.surname;
    };
    return Child;
}(Parent));
var my_variable = new Child('Name', 'Surname');
console.log(my_variable.toString());
