'use strict';
import test from "tape";
import { Sum } from "./sum";

test('the method should return the sum of the nums in the array', t => {
    const obj = new Sum();
    const input = [1, 2, 2, 3];
    const expected = 8;

    const actual = obj.sum(input);

    t.equal(actual, expected);
    t.end();
});

test('the method should return 0, if given an empty array', t => {
    const obj: Sum = new Sum();
    const input: number[] = [];
    const expected = 0;

    const actual = obj.sum(input);

    t.equal(actual, expected);
    t.end();
});

test('the method should return one number, if given an array with one num', t => {
    const obj: Sum = new Sum();
    const input: number[] = [2];
    const expected = 2;

    const actual = obj.sum(input);

    t.equal(actual, expected);
    t.end();
});

test('the method should return the sum, even if given an array with negative nums', t => {
    const obj: Sum = new Sum();
    const input: number[] = [-2, -5, 0, -6];
    const expected = -13;

    const actual = obj.sum(input);

    t.equal(actual, expected);
    t.end();
});