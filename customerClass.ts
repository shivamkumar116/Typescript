export class CustomerClass {
  public constructor(private _firstname: string, private _lastname: string) {}

  public get firstname(): string {
    return this._firstname;
  }

  public get lastname(): string {
    return this._lastname;
  }

  public set firstname(value: string) {
    this._firstname = value;
  }

  public set lastname(value: string) {
    this._lastname = value;
  }
}

//creating an instance
// let myCustomer = new CustomerClass("shivam", "kumar");
// console.log(myCustomer.firstname + " " + myCustomer.lastname);
