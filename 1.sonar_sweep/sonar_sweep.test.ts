import { SonarSweeper } from "./sonar_sweep";

const tester = () => {
  it("should equal to 7 measurements", () => {
    const input = `
199
200
208
210
200
207
240
269
260
263
`;
    const actual = new SonarSweeper(input);
    expect(actual.getIncreases()).toEqual(7);
  });
};
describe("How many measurements are larger than the previous measuments", () => {
  describe("OOP", tester);
});
