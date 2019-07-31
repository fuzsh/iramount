#number to persian text converter
This library enables you to create formal Farsi spoken format for numbers that represent an amount in Rials (IRR).

##install
using npm :

```javascript
$ npm install iramount --save
```
##Usage

```javascript
const irAmount = require("iramount"); 
const amount = irAmount(10239876); // constructor just accepts number 
```

To group digits by three, use
```javascript
const withDigitGrouping = amount.digitGrouped(); // returns 10,239,876
```

To display Farsi spoken format in Rials (IRR), use
```javascript
const withDigitGrouping = amount.farsiFormatToman(); // returns ده میلیون و دویست و سی و نه هزار و هشتصد و هفتاد و شش
```

##special thanks :

<ul>
  <li>
    <a href="https://github.com/farhad">@farhad</a>
  </li>
</ul>

