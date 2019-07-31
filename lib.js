const { thousandMultiples } = require("./numberToString");
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
    if (formatType === "R" && language.toLowerCase() === "en")
      return amount.format(0, groupDigitBy);
    if (formatType === "T" && language.toLowerCase() === "en")
      return (amount / 10).format(1, groupDigitBy);

    if (formatType === "R" && language.toLowerCase() === "fa")
      return persianNumbers(amount.format(0, groupDigitBy));
    if (formatType === "T" && language.toLowerCase() === "fa")
      return persianNumbers((amount / 10).format(1, groupDigitBy));

    return new Error(
      `FormatType shuld be R for rial || T for toman. You entered ${formatType} && language sholud be fa || en. You entered ${language}`
    );
  }

  farsiFormat(amount = this.amount) {
    const groups = this.digitGrouped(amount).split(",");
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

  farsiFormatRial(amount = this.amount) {
    return this.farsiFormat(amount) + " ریال";
  }

  farsiFormatToman(amount = this.amount) {
    const tomanFormat = this.farsiFormat(Math.floor(amount / 10)) + " تومان";
    const remOfTen = amount % 10;
    return remOfTen === 0
      ? tomanFormat
      : tomanFormat + " و " + this.farsiFormatRial(remOfTen);
  }
}

module.exports = Iramount;
