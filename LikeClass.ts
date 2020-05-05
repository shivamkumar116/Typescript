export class Like {
  private _isSelected: Boolean = false;
  private _LikeCount: number;

  constructor(theLikes: number) {
    this.LikeCount = theLikes;
  }

  public get isSelected(): Boolean {
    return this._isSelected;
  }
  public set isSelected(value: Boolean) {
    this._isSelected = value;
  }

  public get LikeCount(): number {
    return this._LikeCount;
  }
  public set LikeCount(value: number) {
    this._LikeCount = value;
  }

  //   like(): void {
  //     if (this.isSelected == false) {
  //       this.isSelected = true;
  //       this.LikeCount += 1;
  //     } else if ((this.isSelected = true)) {
  //       this.LikeCount -= 1;
  //       this.isSelected = false;
  //     }
  //   }

  c = () => {
    if (this.isSelected == false) {
      this.LikeCount += 1;
      this.isSelected = true;
    } else if (this.isSelected == true) {
      this.isSelected = false;
      this.LikeCount -= 1;
    }
  };
}
