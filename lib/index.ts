import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

export async function getChallengeInput(day = 1) {
  const headers = {
    cookie: ("session=" + process.env.COOKIE) as string,
  };
  return axios.get(`https://adventofcode.com/2021/day/${day}/input`, {
    headers,
  });
}

export function parseInputString(input = "") {
  return input.split("\n").map(Number);
}
