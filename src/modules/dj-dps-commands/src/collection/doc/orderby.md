---
title: collection.orderby
template: index.njk
---
# collection.orderby
Sort an array of objects by property values.


### Aliases
They are follows aliases of command name: 
+ ```collection.orderby```,  
+ ```collection.orderBy```, 
+ ```c.orderby```, 
+ ```c.orderBy```, 
+ ```c.order```.


### Command parameters
    
+ ```order```(aliased as ```by```) - **default command parameter** is a function that maps a collection item to a projection for counting values.

### How to use

```dps

/**
 **
 **     DATA PROCESSING SCRIPT: orderby
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
