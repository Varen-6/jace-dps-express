---
title: collection.uniqueby
template: index.njk
---
# collection.uniqueby
Get all unique values in a JavaScript array (remove duplicates).


### Aliases
They are follows aliases of command name: 
+ ```collection.uniqueby```,  
+ ```collection.uniqueBy```, 
+ ```c.uniqueby```, 
+ ```c.uniqueBy```, 
+ ```c.unique```.


### Command parameters
    
+ ```uniqueby```(aliased as ```by```) - **default command parameter** is a function that maps a collection item to a projection for counting values.


### How to use

```dps

/**
 **
 **     DATA PROCESSING SCRIPT: countby example
 **     SERVICE: https://nevada-jace-dps.herokuapp.com
 **
 **/

"<?javascript\r\n   \r\n   $context.mapper = function(d){\r\n       return {\r\n           key:d, \r\n           value:d\r\n           \r\n       }\r\n   };\r\n   \r\n   $context.transform = function(d){\r\n        return {\r\n            key:d.key, \r\n            count: d.values.length\r\n        }\r\n   };\r\n   \r\n   $context.criteria = function(a,b){\r\n       return b.count-a.count\r\n   };\r\n   \r\n?>\r\n\r\nmeta('$..dataset.topics.*')\r\n\r\ngroup({{mapper}})\r\nmap({{transform}})\r\nsort({{criteria}})\r\n\r\nextend()\r\ntranslate()\r\n"

```
