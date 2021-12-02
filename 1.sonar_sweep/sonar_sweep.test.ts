import { SonarSweeper, sonarSweep } from "./sonar_sweep";
import input from './example_input'

describe("How many measurements are larger than the previous measuments", () => {
  describe("OOP", () => {
    it("should equal to 7 increases", () => {
      const actual = new SonarSweeper(input).getIncreases();
      expect(actual).toEqual(7);
    });
  });
  describe("Functional", () => {
    it("should equal to 7 increases", () => {
      const actual = sonarSweep(input);
      expect(actual).toEqual(7);
    });
  });
});
