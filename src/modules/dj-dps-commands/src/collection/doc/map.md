---
title: collection.map
template: index.njk
---
# collection.map
Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee.


### Aliases
They are follows aliases of command name: 
+ ```collection.map```,  
+ ```collection.transform```, 
+ ```c.map```, 
+ ```c.transform```.


### Command parameters
    
+ ```map```(aliased as ```by```) - **default command parameter** is a function that maps a collection item to a projection for counting values.
+ **Processed collection should be on the head of script context.** 

### How to use

```dps

/**
 **
 **     DATA PROCESSING SCRIPT: map
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
```

