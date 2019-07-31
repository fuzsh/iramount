# number to persian text converter
This NodeJs library enables you to create formal Farsi spoken format for numbers that represent an amount in Rials (IRR).

## install
using npm :

```javascript
$ npm install iramount --save
```
## Usage

```javascript
const irAmount = require("iramount"); 
const amount = new irAmount(10239876); // constructor just accepts number 
```

### Grouping Digits
To group digits by three, use
```javascript
const withDigitGrouping = amount.digitGrouped(); // returns 10,239,876
```
params : 

<ul>
  <li>
   formatType | default = "R" | R = Rial and T = Toman
  </li>
  <li>
   language | default = "EN" | EN = English and Fa = Farsi
  </li>
  <li>
   groupDigitBy | default = 3
  </li>
  <li>
   amount | constructor value
  </li>
</ul>

for Ex :

```javascript
const withDigitGrouping = amount.digitGrouped("R", "Fa"); // returns ۱۰,۲۳۹,۸۷۶
```
or 
```javascript
const withDigitGrouping = amount.digitGrouped("T", "Fa", 2); // returns ۱,۰۲,۳۹,۸۷.۶
```

### Convert To Text

To display Farsi spoken format in Rials (IRR), use
```javascript
const rialFormat = amount.farsiFormatRial(); // returns ده میلیون و دویست و سی و نه هزار و هشتصد و هفتاد و شش ریال
```
To display Farsi spoken format in Tomans (Toman), use
```javascript
const tomanFormat = amount.farsiFormatToman(); // returns یک میلیون و بیست و سه هزار و نهصد و هشتاد و هفت تومان
const tomanFormat = amount.farsiFormatToman(true); // returns یک میلیون و بیست و سه هزار و نهصد و هشتاد و هفت تومان و شش ریال
```

## special thanks :

<ul>
  <li>
    <a href="https://github.com/farhad">@farhad</a>
  </li>
</ul>

