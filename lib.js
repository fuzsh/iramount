const { thousandMultiples } = require("./numberToString");
const formatFragment = require("./functions/formatFragment");

Number.prototype.format = function(n, x) {
  var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
};

class Iramount {
  constructor(amount) {
    if (typeof amount !== "number")
      throw new Error(
        `param ${amount} type is ${typeof amount}; it should be number`
      );
    this.amount = amount;
  }

  digitGrouped() {
    return this.amount.format();
  }

  farsiSpokenFormat() {
    const groups = this.digitGrouped().split(",");
    return groups
      .map(group => parseInt(group))
      .map((number, index) => {
        let farsiRep = "";
        if (number !== 0 && index !== 0) farsiRep += " و ";
        farsiRep += formatFragment(number);
        if (number !== 0)
          farsiRep += ` ${thousandMultiples[groups.length - 1 - index]}`;
        return farsiRep;
      })
      .join("")
      .trim();
  }
}

module.exports = Iramount;
