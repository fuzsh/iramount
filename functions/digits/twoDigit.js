const oneDigit = require("./oneDigit");
const { oneToTwenty, tenMultiples } = require("../../numberToString");

module.exports = twoDigit = input => {
  if (input <= 20) return oneToTwenty[input];
  const divOfTen = Math.floor(input / 10);
  const remOfTen = input % 10;
  return remOfTen !== 0
    ? tenMultiples[divOfTen] + " و " + oneDigit(remOfTen)
    : tenMultiples[divOfTen];
};
