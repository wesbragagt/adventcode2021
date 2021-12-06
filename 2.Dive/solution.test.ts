import { Diver, diverAim } from "./solution";

const input = `
forward 5
down 5
forward 8
up 3
down 8
forward 2
`;

describe("1.Calculate the horizontal position and depth you would have after following the planned course. What do you get if you multiply your final horizontal position by your final depth?", () => {
  it("After following these instructions, you would have a horizontal position of 15 and a depth of 10. (Multiplying these together produces 150.)", () => {
    const DiverInstance = new Diver(input);
    expect(DiverInstance.horizontal).toEqual(15);
    expect(DiverInstance.depth).toEqual(10);
    expect(DiverInstance.getMultiplied()).toEqual(150);
  });
});

describe(`2. Based on your calculations, the planned course doesn't seem to make any sense. You find the submarine manual and discover that the process is actually slightly more complicated.

In addition to horizontal position and depth, you'll also need to track a third value, aim, which also starts at 0. The commands also mean something entirely different than you first thought:

down X increases your aim by X units.
up X decreases your aim by X units.
forward X does two things:
It increases your horizontal position by X units.
It increases your depth by your aim multiplied by X.`, () => {
  it(`After following these new instructions, you would have a horizontal position of 15 and a depth of 60. (Multiplying these produces 900.)`, () => {
    const diverInstance = diverAim(input)
    expect(diverInstance.horizontal).toEqual(15);
    expect(diverInstance.depth).toEqual(60);
    expect(diverInstance.getMultiplied()).toEqual(900);
  })
})
