import { SonarSweep } from "./solution";
import { getChallengeInput, parseInputString } from "../lib";

getChallengeInput(1)
  .then((response) => parseInputString(response.data))
  .then((input) => {
    const Sonar = new SonarSweep(input);
    const part1 = Sonar.getIncreases();
    const part2 = Sonar.getSums();
    return {
      part1,
      part2,
    };
  })
  .then(console.log);
