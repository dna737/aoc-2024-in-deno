import fs from "node:fs";

export function add(a: number, b: number): number {
  return a + b;
}

function iterateLoop(levels: string[]): number {

    let [curr, isIncreasing]: [number, boolean] = [0, false];
    let currDiff: number = 0;

    for (let i = 0; i < levels.length; i++) {
      if (i === 0) {
        curr = parseInt(levels[i]);
        continue;
      }

      currDiff = parseInt(levels[i]) - curr;

      if (i === 1) {
        isIncreasing = currDiff > 0;
        // Sticky situation, but the code below will take care of the ranges.
      }

      //check range and stuff here.
      if((isIncreasing && currDiff > 0) || (!isIncreasing && currDiff < 0) && Math.abs(currDiff) >= 1 && Math.abs(currDiff) <= 3) {
        continue;
      }
      return 0;
    }
    return 1;
}

export function printNumSafeReports(data: string[]): number {
  let result = 0;

  // for (const line of data) {
  //   const levels: string[] = line.trim().split(" ");
  //   result += iterateLoop(levels);
  // }
  
  return iterateLoop(data);
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {

  const data: string[] = fs.readFileSync("./input.txt", {
    encoding: "utf-8",
    flag: "r",
  }).trim().split("\n");

  printNumSafeReports(data);
}
