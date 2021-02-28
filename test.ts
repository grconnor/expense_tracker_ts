class Parent {
  protected name: string;

  protected constructor() {
  }

  private setName(name: string) {
    this.name = name;
  }
}

class Child extends Parent {
  private surname: string;

  constructor(name: string, surname: string) {
    super();
    this.name = name;
    this.setSurname(surname);
  }

  private setSurname(surname: string) {
    this.surname = surname;
  }

  public toString() {
    return `Name: ${this.name}, Surname: ${this.surname}`;
  }
}

let my_variable:Child = new Child('Name', 'Surname');
console.log(my_variable.toString());