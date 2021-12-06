import { Diver, diverAim } from "./solution";
import { getChallengeInput, parseInputString } from "../lib";

getChallengeInput(2)
  .then((response) => response.data)
  .then((input) => {
    const Dive = new Diver(input);
    const part1 = Dive.getMultiplied()
    const part2 = diverAim(input).getMultiplied()
    return {
      part1,
      part2
    };
  })
  .then(console.log);
