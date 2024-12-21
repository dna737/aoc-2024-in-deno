import fs from "node:fs";

export function add(a: number, b: number): number {
  return a + b;
}

export function getLoopMultiplier(levels: number[]): number {
  const result: number[] = [];
  
  // Minimum of 3 comparisons required to find increasing or decreasing.
  for (let i = 1; i < 4; i++) {
    result.push(levels[i - 1] < levels[i] ? 1 : -1);
  }

  return result.reduce((acc, x) => acc + x, 0) >= 1 ? -1 : 1;
}

export function getPredecessorIndex(
  currIndex: number,
  ignoredIndex: number | null,
) {
  if (ignoredIndex !== null && ignoredIndex === currIndex - 1) {
    return currIndex - 2;
  }

  return currIndex - 1;
}

function iterateLoop(levels: number[], dampener?: boolean): number {
  let currDiff: number;
  let ignoredIndex: number | null = null; //Stores the index of the faulty number.
  const decreasing: number = getLoopMultiplier(levels);
  let couldBeFaulty: boolean = false;

  if (levels.length < 2) {
    return 0;
  }

  console.log("🚀 ~ iterateLoop ~ levels:", levels)
  for (let i: number = 1; i < levels.length; i++) {

  //Yet another invalid case.
  if((levels[i] - levels[getPredecessorIndex(i, ignoredIndex)]) * -1 * (decreasing) <= 0) {
    ignoredIndex = getPredecessorIndex(i, ignoredIndex);
  }

    currDiff = -1 * decreasing * (levels[i] - levels[getPredecessorIndex(i, ignoredIndex)]);
    console.log("🚀 ~ iterateLoop ~ currDiff:", currDiff)

    if (currDiff < 1 || currDiff > 3) {
      if (!dampener) {
        return 0;
      }

      if (ignoredIndex === null) {
        ignoredIndex = i;
      } else {
        // consider 1 to be the upper limit
        return 0;
      }
    }

  }
  return 1;
}

export function printNumSafeReports(data: string[]): number {
  let [result1, result2] = [0, 0];

  for (const line of data) {
    const levels: string[] = line.trim().split(" ");
    result1 += iterateLoop(levels.map((x) => parseInt(x)));
  }

  for (const line of data) {
    const levels: string[] = line.trim().split(" ");
    result2 += iterateLoop(levels.map((x) => parseInt(x)), true);
  }

  console.log("🚀 ~ printNumSafeReports ~ result:", result1);
  console.log("🚀 ~ printNumSafeReports ~ result2 :", result2);
  return result2;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const data: string[] = fs.readFileSync("./input.txt", {
    encoding: "utf-8",
    flag: "r",
  }).trim().split("\n");

  const mockData: string[] = [
    "3 1 2 3 4 5"
  ]

  printNumSafeReports(data);
}  
