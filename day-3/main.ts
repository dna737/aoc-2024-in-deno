import fs from "node:fs";

export function parseMulValues(line: string): number {
  const numRegex = /[0-9]+/g;
  const totalMatches = [...line.matchAll(numRegex)];
  const result: number[] = []; //Only 2 are required, but part 2 is very sneaky.

  for (let i = 0; i < totalMatches.length; i++) {
    result.push(parseInt(totalMatches[i][0] as string));
  }

  return result.reduce((acc, x) => acc * x, 1);
}

//p1:
export function parseValidMuls(lines: string[]): number {
  let result: number = 0;
  const regex = /mul\([0-9]+,[0-9]+\)/g;

  for(const line of lines) {
    for(const occ of [...line.matchAll(regex)]) {
      result += parseMulValues(occ[0]); //occ: [item, index, start, end, etc]. We're using item here.
    }
  }

  return result;
}

//p2:
export function parseSelectiveMuls(lines: string[]): number {
  let result: number = 0;
  let shouldExecute: boolean = true
  const regex = /mul\([0-9]+,[0-9]+\)|do\(\)|don't\(\)/g;

  for(const line of lines) {
    for(const occ of [...line.matchAll(regex)]) {
      if(occ[0] === "do()") {
        shouldExecute = true;
        continue;
      }

      if(occ[0] === "don't()") {
        shouldExecute = false;
        continue;
      }
      
      if(shouldExecute) {
        result += parseMulValues(occ[0]); //occ: [item, index, start, end, etc]. We're using item here.
      }
      console.log("🚀 ~ parseSelectiveMuls ~ occ[0]:", occ[0])
    }
  }

  return result; 
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const data: string[] = fs.readFileSync("./input.txt", {
    encoding: "utf-8",
    flag: "r",
  }).trim().split("\n");

  console.log("d3p1 result:", parseValidMuls(data));
  console.log("d3p2 result:", parseSelectiveMuls(data));
}
