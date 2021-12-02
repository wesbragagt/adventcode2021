import { sonarSweep, SonarSweeper } from './sonar_sweep'
import {getChallengeInput} from '../lib'

getChallengeInput(1)
.then((response) => sonarSweep(response.data))
.then(console.log)
