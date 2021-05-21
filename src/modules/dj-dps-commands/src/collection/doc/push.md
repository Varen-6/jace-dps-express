---
title: collection.pushInto
template: index.njk
---
# collection.push
Adds one or more elements to the end of an array and returns the new length of the array.


### Aliases
They are follows aliases of command name: 
+ ```collection.pushInto```,  
+ ```collection.push```, 
+ ```c.pushInto```, 
+ ```c.push```.


### Command parameters
    
+ ```push``` - **default command parameter** is a function that maps a collection item to a projection for counting values.
+ **Processed collection should be on the head of script context.** 


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
