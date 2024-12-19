import fs from "node:fs";
import { stringify } from "node:querystring";

export function add(a: number, b: number): number {
  return a + b;
}

function iterateLoop(levels: number[]): number {
  let decreasing: number = 0;
  let currDiff: number;

    if(levels.length < 2) {
      return 0;  //Test edge case later.
    }

  for(let i: number = 0; i < levels.length; i++) {

    if(i === 0) {
      decreasing = levels[i + 1] < levels[i] ? 1 : -1; //Useful for checking valid steps later.
      continue;
    }
    
    currDiff = -1 * decreasing * (levels[i] - levels[i - 1]);

    if(currDiff < 1 || currDiff > 3) {
      return 0;
    } 
  }

  return 1;
}

export function printNumSafeReports(data: string[]): void {
  let result = 0;
  for (const line of data) {
    const levels: string[] = line.trim().split(" ");
    result += iterateLoop(levels.map(x => parseInt(x)));
  }
    console.log("🚀 ~ printNumSafeReports ~ result:", result)
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {

  const data: string[] = fs.readFileSync("./input.txt", {
    encoding: "utf-8",
    flag: "r",
  }).trim().split("\n");

  printNumSafeReports(data);
}
