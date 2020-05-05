export class CD {
  constructor(
    private _id: string,
    private _title: string,
    private _genre: string
  ) {}
  public get genre(): string {
    return this._genre;
  }
  public set genre(value: string) {
    this._genre = value;
  }
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  getDetail(): String {
    return `ID= ${this.id}, Title= ${this.title},Genre = ${this.genre}`;
  }
}
