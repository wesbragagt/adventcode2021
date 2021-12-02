import solution from "./sonar_sweep";

describe("How many measurements are larger than the previous measuments", () => {
  it("should equal to 7 measurements", () => {
    const exampleInput = `199 (N/A - no previous measurement)
200 (increased)
208 (increased)
210 (increased)
200 (decreased)
207 (increased)
240 (increased)
269 (increased)
260 (decreased)
263 (increased)
`;
    const actual = solution(exampleInput);
    expect(actual).toEqual(7);
  });
});
