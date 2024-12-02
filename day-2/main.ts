import fs from "node:fs";

export function add(a: number, b: number): number {
  return a + b;
}

function printNumSafeReports(): void {
  const data: string[] = fs.readFileSync('./input.txt', {
    encoding: "utf-8",
    flag: "r"
  }).trim().split("\n");

  let result = 0;

  for(const line of data) {
    let [curr, isIncreasing]: [number, boolean] = [0, false];
    let levels: string[] = line.trim().split(" ");
    let currDiff: number = 0;

    for(let i = 0; i < levels.length; i++) {
      if(i === 0) {
        curr = parseInt(levels[i]);
        continue;
      } else if (i === 1){
        isIncreasing = (parseInt(levels[i]) - curr) > 0;
        // Sticky situation, but the code below will take care of the ranges.
      }
      //check range and stuff here.
    }
  }
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  printNumSafeReports();
  console.log("Add 2 + 3 =", add(2, 3));
}
