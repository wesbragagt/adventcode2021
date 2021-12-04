import { Diver } from "./solution";

const input = `
forward 5
down 5
forward 8
up 3
down 8
forward 2
`;

describe("Calculate the horizontal position and depth you would have after following the planned course. What do you get if you multiply your final horizontal position by your final depth?", () => {
  it("After following these instructions, you would have a horizontal position of 15 and a depth of 10. (Multiplying these together produces 150.)", () => {
    const DiverInstance = new Diver(input);
    expect(DiverInstance.horizontal).toEqual(15);
    expect(DiverInstance.depth).toEqual(10);
    expect(DiverInstance.getMultiplied()).toEqual(150);
  });
});
