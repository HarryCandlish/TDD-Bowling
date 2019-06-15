const game = require("../game");

const simpleGame = [
  [1, 2],
  [6, 4],
  [5, 4],
  [10, 0],
  [7, 2],
  [10, 0],
  [10, 0],
  [5, 2],
  [7, 0],
  [4, 4]
]; // 3       18      27       46      55       80       97      104     111     119

const perfectGame = [
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 10, 10]
]; //  30       60       90       120      150      180      210      240      270      300

const spareInLastFrame = [
  [1, 2],
  [6, 4],
  [5, 4],
  [10],
  [7, 2],
  [10],
  [10],
  [5, 2],
  [7, 0],
  [6, 4, 8]
]; // 3       18      27     46     55     80    97     104     111     129

const strikeInLastFrame = [
  [1, 2],
  [6, 4],
  [5, 4],
  [10],
  [7, 2],
  [10],
  [10],
  [5, 2],
  [7, 0],
  [10, 4, 5]
]; // 3       18      27     46     55     80    97     104     111      130

test("test setup working", function() {
  expect(true).toBeTruthy();
});

test("score a gutterball frame", function() {
  const frame = [0, 0];
  const expected = 0;
  const actual = game.scoreFrame(frame);
  expect(actual).toBe(expected);
});

test("score a normal frame", function() {
  const frame = [2, 3];
  const expected = 5;
  const actual = game.scoreFrame(frame);
  expect(actual).toBe(expected);
});

test("score a spare frame", () => {
  const frame = [6, 4];
  const expected = true;
  const actual = game.isSpare(frame);
  expect(actual).toBe(expected);
});
