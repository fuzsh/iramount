const twoDigit = require("./twoDigit");
const { hundredMultiples } = require("../../numberToString");

module.exports = threeDigit = input => {
  let result = "";
  const divOfHundred = Math.floor(input / 100);
  const remOfHundred = input % 100;
  result += hundredMultiples[divOfHundred];
  if (remOfHundred !== 0) result += " و ";
  result += twoDigit(remOfHundred);
  return result;
};
