

export class OneThreeNine{

  constructor(
    private valueNumber: number,
    private searchNumber: number,
  ) {
  }

  calculateExistingAmount(): number{
    return parseInt(`${this.valueNumber/this.searchNumber}`);
  }

}
