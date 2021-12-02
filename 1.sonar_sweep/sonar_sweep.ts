export class SonarSweeper {
  numbers: number[];
  constructor(input: string) {
    this.numbers = this.parseNumbersInput(input);
  }
  public getIncreases() {
    let increases = 0;
    for (let i = 1; i < this.numbers.length; i++) {
      const value = this.numbers[i];
      const previous = this.numbers[i - 1];
      if (value > previous) {
        increases += 1;
      }
    }
    return increases;
  }
  private parseNumbersInput(input = "") {
    return input.split("\n").map(Number);
  }
}

export function sonarSweep(input = "") {
  const pipeline =
    (...fns: any[]) =>
    (initialValue = "") =>
      fns.reduce((output, fn) => fn(output), initialValue);
  const parseInputString = (input = "") => {
    return input.split("\n").map(Number);
  };
  const getIncreases = (arr: number[]) => {
      let increases = 0
      for (let i = 1; i < arr.length; i++) {
        const value = arr[i];
        const previous = arr[i - 1];
        if (value > previous) {
          increases += 1;
        }
      }
      return increases;
    };
  return pipeline(parseInputString, getIncreases)(input);
}
