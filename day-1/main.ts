import fs from "node:fs";

export function add(a: number, b: number): number {
  return a + b;
}

function printCumulativeDifference(): void {
  const data = fs.readFileSync("./input.txt", {
    encoding: "utf-8",
    flag: "r",
  }).trim().split("\n");

  const left: number[] = [];
  const right: number[] = [];
  let result1: number = 0;
  let result2: number = 0;

  for (const line of data) {
    const trimmed = line.trim().split(" ");
    left.push(parseInt(trimmed[0]));
    right.push(parseInt(trimmed[trimmed.length - 1]));
  }

  left.sort();
  right.sort();

  // p2: while looping over, use array.filter(x).length to find similarity score.
  for (let i = 0; i < left.length; i++) {
    result1 += Math.abs(left[i] - right[i]);
    result2 += left[i] * (right.filter(x => x === left[i]).length);
  }

  console.log("result1:", result1);
  console.log("result2:", result2);
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
  printCumulativeDifference();
}
