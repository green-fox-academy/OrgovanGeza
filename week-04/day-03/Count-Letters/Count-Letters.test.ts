'use strict';
import test from "tape";
import { letterCounter } from "./Count-Letters";

test ('the return value should be an object', t => {
    t.deepEqual(letterCounter('word'),{})
    t.end();
});