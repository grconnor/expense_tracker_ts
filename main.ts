export {};

let project_name = "===Expense Tracker===";
console.log(project_name.toUpperCase());

class Person {
  private static id_counter: number = 0;
  private id: number;
  private name: string;

  protected constructor(name: string) {
    this.id = ++Person.id_counter;
    this.name = name;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  toString(): string {
    return `${this.name} (ID: ${this.id})`;
  }
}

class Staff extends Person {
  private salary: number;
  private salaryEarned: number;

  constructor(name: string, salary: number) {
    super(name);
    this.salary = salary;
    this.salaryEarned = 0;
  }

  public receivedSalary() {
    this.salaryEarned += this.salaryEarned;
  }

  public getSalaryEarned(): number {
    return this.salaryEarned;
  }

  public toString() {
    return `${super.toString()}, received a total of ${this.getSalaryEarned()}`;
  }
}

class Client extends Person {
  private paid: number = 0;
  private totalToPay: number;
  private company: string = null;

  constructor(name: string, totalToPay: number, company?: string) {
    super(name);
    this.totalToPay = totalToPay;
    if (company) {
      this.company = company;
    }
  }

  public pay(amount: number) {
    this.paid += amount;
  }

  public getPaid(): number {
    return this.paid;
  }

  private getRemainingToPay(): number {
    return this.totalToPay - this.paid;
  }

  public toString(): string {
    return `${super.toString()}${
      this.company ? " from the company " + this.company : ""
    } has ${this.getRemainingToPay()} kr left to pay`;
  }
}

class Company {
  private name: string;
  private staffList: Staff[];
  private clientsList: Client[];

  constructor(name: string, staffList: Staff[], clientsList: Client[]) {
    this.name = name;
    this.staffList = staffList;
    this.clientsList = clientsList;
  }

  private getTotalSpent(): number {
    return this.staffList
      .map((staff) => staff.getSalaryEarned())
      .reduce((sum, current) => sum + current, 0);
  }

  private getTotalEarned(): number {
    return this.clientsList
      .map((client) => client.getPaid())
      .reduce((sum, current) => sum + current, 0);
  }

  public toString(): string {
    return `Company name: ${
      this.name
    } Earned: ${this.getTotalEarned()} Spent: ${this.getTotalSpent()}`;
  }
}

let connor = new Staff("Connor", 350);
connor.receivedSalary();
console.log(connor.toString());

let joe = new Staff("Joe", 500);
joe.receivedSalary();
console.log(joe.toString());

let john = new Staff("John", 650);
john.receivedSalary();
console.log(john.toString());

let sebastian = new Staff("Sebastian", 500);
sebastian.receivedSalary();
console.log(sebastian.toString());

let conrad = new Client("Conrad", 5000);
let jesse = new Client("Jesse", 7500, "Mobility Motors");

conrad.pay(1000);
jesse.pay(4750);

console.log(conrad.toString());
console.log(jesse.toString());

let martianBrand = new Company(
  "Martian",
  [connor, joe, john, sebastian],
  [conrad, jesse]
);

console.log(martianBrand.toString());
