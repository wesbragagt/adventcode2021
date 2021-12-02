export class SonarSweeper {
  numbers: number[];
  constructor(input: string) {
    this.numbers = this.parseNumbersInput(input);
  }
  public getIncreases() {
    let increases = 0;
    for (let i = 1; i < this.numbers.length; i++) {
      const value = this.numbers[i];
      const nextValue = this.numbers[i + 1];
      if (nextValue > value) {
        increases += 1;
      }
    }
    return increases;
  }
  private parseNumbersInput(input = "") {
    return input.split("\n").map(Number);
  }
}
