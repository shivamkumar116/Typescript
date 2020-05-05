import { CD } from "./CD";

export class InternationalCD extends CD {
  constructor(
    id: string,
    title: string,
    genre: string,
    private _languages: String[]
  ) {
    super(id, title, genre);
  }
  public get languages(): String[] {
    return this._languages;
  }
  public set languages(value: String[]) {
    this._languages = value;
  }
  getDetail(): String {
    return super.getDetail() + ` Languages = ${this.languages}`;
  }
}
