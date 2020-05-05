import { Department } from "./Department";

export class Employee {
  private _id: number;
  private _firstName: string;
  private _lastname: string;
  private _email: string;
  private department: Department;

  public get id(): number {
    return this._id;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get lastname(): string {
    return this._lastname;
  }

  public get email(): string {
    return this._email;
  }

  public get getdepartment(): Department {
    return this.department;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public set lastname(value: string) {
    this._lastname = value;
  }

  public set email(value: string) {
    this._email = value;
  }

  public set setdepartment(value: Department) {
    this.department = value;
  }
}
