const { oneToTwenty, thousandMultiples } = require("./numberToString");
const persianNumbers = require("./functions/utils");
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

  digitGrouped(
    formatType = "R",
    language = "En",
    groupDigitBy = 3,
    amount = this.amount
  ) {
    if (typeof amount !== "number")
      return new Error(
        `param ${amount} type is ${typeof amount}; it should be number`
      );
    if (formatType.toLowerCase() === "r" && language.toLowerCase() === "en")
      return amount.format(0, groupDigitBy);
    if (formatType.toLowerCase() === "t" && language.toLowerCase() === "en")
      return (amount / 10).format(1, groupDigitBy);

    if (formatType.toLowerCase() === "r" && language.toLowerCase() === "fa")
      return persianNumbers(amount.format(0, groupDigitBy));
    if (formatType.toLowerCase() === "t" && language.toLowerCase() === "fa")
      return persianNumbers((amount / 10).format(1, groupDigitBy));

    return new Error(
      `FormatType shuld be R for rial || T for toman. You entered ${formatType} && language sholud be fa || en. You entered ${language}`
    );
  }

  farsiFormat(amount = this.amount) {
    const groups = this.digitGrouped(undefined, undefined, 3, amount).split(
      ","
    );
    return groups
      .map((group, index) => {
        let number = parseInt(group);
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

  farsiFormatRial() {
    return this.farsiFormat(this.amount) + " ریال";
  }

  farsiFormatToman(showRial = false) {
    const tomanFormat =
      this.farsiFormat(Math.floor(this.amount / 10)) + " تومان";
    const remOfTen = this.amount % 10;
    return remOfTen === 0 || showRial === false
      ? tomanFormat
      : tomanFormat + " و " + oneToTwenty[remOfTen] + " ریال";
  }
}

module.exports = Iramount;
