"use strict";
exports.__esModule = true;
var project_name = '===Expense Tracker===';
console.log(project_name.toUpperCase());
var Person = /** @class */ (function () {
    function Person(name) {
        this.id = ++Person.id_counter;
        this.name = name;
    }
    Person.prototype.toString = function () {
        return this.name + " (ID: " + this.id + ")";
    };
    Person.id_counter = 0;
    return Person;
}());
var connor = new Person('Connor');
console.log(connor.toString());
var joe = new Person('Joe');
console.log(joe.toString());
