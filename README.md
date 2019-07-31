<h1 dir="rtl">تبدیل عدد به متن</h1>
<p dir="rtl">
یک ماژول برای تبدیل اعداد به متن فارسی 
</p>

<h3 dir="rtl">نصب</h3>
<p dir="rtl">با استفاده از npm</p>

```javascript
$ npm install iramount --save
```
<h3 dir="rtl">استفاده</h3>

```javascript
const irAmount = require("iramount"); 
const amount = irAmount(10239876); // constructor just accepts number 
```

<p dir="rtl">برای دریافت عدد به صورت فرمت بندی شده </p>

```javascript
const withDigitGrouping = amount.digitGrouped(); // returns 10,239,876
```

<p dir="rtl">برای دریافت عدد به صورت متن </p>

```bash
const withDigitGrouping = amount.farsiFormatToman(); // returns ده میلیون و دویست و سی و نه هزار و هشتصد و هفتاد و شش
```

<h2 dir="rtl">باتشکر</h2>

<ul>
  <li>
    <a href="https://github.com/farhad">@farhad</a>
  </li>
</ul>


<h2 dir="rtl">مجوز</h2>

<p dir="rtl">
  
</p>
