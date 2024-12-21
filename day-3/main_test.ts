import { assertEquals } from "@std/assert";
import { add,  parseValidMuls } from "./main.ts";

Deno.test(function addTest() {
  const lines: string[] = [
    "[%' mul(1,3){when()mul(1,0)@*mul(1,4)}?from()why()' do()@who()mul(1,6)](;/what()"
  ]
  assertEquals(parseValidMuls(lines), 13);
});

// Deno.test(function mulOperandsTest() {
//   const line: string = "mul(1,3)"
//   vfpassertEquals(parseMulOperands(line), [1, 3]);
// });