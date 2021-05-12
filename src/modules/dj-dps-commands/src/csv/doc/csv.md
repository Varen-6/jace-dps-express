---
title: Csv injection
template: index.njk
---

**Sets** `csv` **type for script context**

For example you can inject csv data and manipulate it:

```dps

// Defines data via csv-injection

<?csv
    DATE;HOUR;MINUTE;AVG;MIN;MAX;HH;H;L;LL;MEASURE
    20160101;0;;143.73;;;;;;;Rh/h
    20160101;1;;143.79;;;;;;;Rh/h
    20160101;2;;143.68;;;;;;;Rh/h
?>

// The data is now at the head of the script context
// converts it to js structure
json()

// The js data is now at the head of the script context
// stores it in the $scope.data variable
set('data')

// You can access data using get() command or $scope.data in js-injection

```

This data processing script returns

```json
[
  {
    "DATE": "20160101",
    "HOUR": "0",
    "MINUTE": "",
    "AVG": "143.73",
    "MIN": "",
    "MAX": "",
    "HH": "",
    "H": "",
    "L": "",
    "LL": "",
    "MEASURE": "Rh/h"
  },
  {
    "DATE": "20160101",
    "HOUR": "1",
    "MINUTE": "",
    "AVG": "143.79",
    "MIN": "",
    "MAX": "",
    "HH": "",
    "H": "",
    "L": "",
    "LL": "",
    "MEASURE": "Rh/h"
  },
  {
    "DATE": "20160101",
    "HOUR": "2",
    "MINUTE": "",
    "AVG": "143.68",
    "MIN": "",
    "MAX": "",
    "HH": "",
    "H": "",
    "L": "",
    "LL": "",
    "MEASURE": "Rh/h"
  }
]
```
