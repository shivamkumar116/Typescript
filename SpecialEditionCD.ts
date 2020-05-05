import { CD } from "./CD";

export class SpecialEditionCD extends CD {
  constructor(
    id: string,
    title: string,
    genre: string,
    private _is3D: boolean
  ) {
    super(id, title, genre);
  }

  public get is3D(): boolean {
    return this._is3D;
  }
  public set is3D(value: boolean) {
    this._is3D = value;
  }

  getDetail(): String {
    return super.getDetail() + ` is3D = ${this.is3D}`;
  }
}
