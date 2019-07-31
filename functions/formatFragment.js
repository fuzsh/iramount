const { oneDigit, twoDigit, threeDigit } = require("./digits");

module.exports = formatFragment = input => {
  if (input >= 100 && input <= 999) return threeDigit(input);
  if (input >= 10 && input <= 99) return twoDigit(input);
  if (input >= 0 && input <= 9) return oneDigit(input);
  return "";
};
