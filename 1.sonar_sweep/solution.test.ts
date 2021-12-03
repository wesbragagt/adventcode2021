import {SonarSweep} from './solution'

const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe("How many measurements are larger than the previous measuments", () => {
  it("should equal to 7 increases", () => {
    const actual = new SonarSweep(input).getIncreases();
    expect(actual).toEqual(7);
  });
});

describe("Consider sums of a three-measurement sliding window. How many sums are larger than the previous sum?", ()=>{
  it("should equal 5 sums", ()=>{
    const actual = new SonarSweep(input).getSums()
    expect(actual).toEqual(5)
  })
})
