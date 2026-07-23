import { isValid, checkDigit } from "./luhn.ts";
import { test } from "node:test";
import assert from "node:assert/strict";
test("known vectors", () => {
  assert.ok(isValid("79927398713"));
  assert.ok(!isValid("79927398710"));
  assert.equal(checkDigit("7992739871"), 3);
});
