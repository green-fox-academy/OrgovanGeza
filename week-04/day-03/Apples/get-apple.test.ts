'use strict';

import { GetApple } from "./get-apple";
import test from "tape";


test ('the return value should be a string', t => {
  // 1. Arrange
const obj = new GetApple();
const expected = 'apples';

  // 2. Act
const actual = obj.getApple();

  // 3. Assert
  t.equal(actual, expected);
  t.end();
});