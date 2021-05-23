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
 **     DATA PROCESSING SCRIPT: push
 **     SERVICE: https://nevada-jace-dps.herokuapp.com
 **
 **/

<?javascript

    $scope.f = {
            f1: d => d < 0,
            f2: d => d == 0,
            f3: d => d > 0
        }
   
   var mapper = function(d){
       return {
           key:d, 
           value:d
           
       }
   };
   
   var transform = function(d){
        return {
            key:d.key, 
            count: d.values.length
        }
   };
   
   var criteria = function(a,b){
       return b.count-a.count
   };
   
?>

set('f')

get('f.mapper')
info('mapper')
info()

get('f.transform')
info('transform')

get('f.criteria')
info('criteria')
info()

log()

```

This data processing script returns
```json
[
    {
        "logger": 3,
        "scope": "local",
        "timeStamp": "23/05/21 11:05:11",
        "level": "info",
        "message": [
            "\"mapper\""
        ]
    },
    {
        "logger": 3,
        "scope": "local",
        "timeStamp": "23/05/21 11:05:11",
        "level": "info",
        "message": [
            "{\"type\":\"function\"}"
        ]
    },
    {
        "logger": 3,
        "scope": "local",
        "timeStamp": "23/05/21 11:05:11",
        "level": "info",
        "message": [
            "\"transform\""
        ]
    },
    {
        "logger": 3,
        "scope": "local",
        "timeStamp": "23/05/21 11:05:11",
        "level": "info",
        "message": [
            "\"criteria\""
        ]
    },
    {
        "logger": 3,
        "scope": "local",
        "timeStamp": "23/05/21 11:05:11",
        "level": "info",
        "message": [
            "{\"type\":\"function\"}"
        ]
    }
]
```
