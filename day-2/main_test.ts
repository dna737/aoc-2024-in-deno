import { assertEquals } from "@std/assert";
import { getLoopMultiplier, printNumSafeReports } from "./main.ts";

Deno.test(function addTest() {
// assertEquals(printNumSafeReports([
//   "9 7 6 2 1",
// ]), 0);
// assertEquals(printNumSafeReports([
//   "7 6 4 2 1",
// ]), 1);
// assertEquals(printNumSafeReports([
//   "1 2 7 8 9",
// ]), 0);
// assertEquals(printNumSafeReports([
//   "1 3 2 4 5",
// ]), 1);
// assertEquals(printNumSafeReports([
//   "8 6 4 4 1",
// ]), 1);
assertEquals(printNumSafeReports([
"3 1 2 3 4 5"
]), 1);

});

Deno.test(function testMultiplier() {
  assertEquals(getLoopMultiplier([1, 2, 3]), -1) 
})
