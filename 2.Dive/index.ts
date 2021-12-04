
import { Diver } from "./solution";
import { getChallengeInput, parseInputString } from "../lib";

getChallengeInput(2)
  .then((response) => response.data)
  .then((input) => {
    const Dive = new Diver(input);
    const part1 = Dive.getMultiplied()
    return {
      part1,
    };
  })
  .then(console.log);
