export {}

let project_name = '===Expense Tracker===';
console.log(project_name.toUpperCase());

class Person {
  static id_counter: number = 0
  id: number;
  name: string;

  constructor(name: string) {
    this.id = ++Person.id_counter;
    this.name = name;
  }

  toString(): string {
    return `${this.name} (ID: ${this.id})`;
  }
}

let connor = new Person('Connor')
console.log(connor.toString());

let joe = new Person('Joe');
console.log(joe.toString());