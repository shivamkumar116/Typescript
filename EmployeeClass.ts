class EmployeeClass {
  private _firstname: string;
  private _lastname: string;
  private _email: string;

  public get firstname(): string {
    return this._firstname;
  }

  public get lastname(): string {
    return this._lastname;
  }

  public get email(): string {
    return this._email;
  }

  public set firstname(value: string) {
    this._firstname = value;
  }

  public set lastname(value: string) {
    this._lastname = value;
  }

  public set email(value: string) {
    this._email = value;
  }
}

let emp = new EmployeeClass();
emp.firstname = "shivam";
emp.lastname = "kumar";
emp.email = "shivamkumar116@gmail.com";
console.log(
  "Name :" + emp.firstname + " " + emp.lastname + " Email : " + emp.email
);
