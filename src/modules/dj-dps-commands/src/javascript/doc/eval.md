---
title: eval
template: index.njk
---
# eval
The eval() function evaluates or executes an argument.

If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements


### Aliases
They are follows aliases of command name: 
+ ```eval```,  
+ ```evaluate```, 
+ ```js```, 
+ ```javascript```.

### Command parameters
"none";

### How to use

```dps

/**
 **
 **     DATA PROCESSING SCRIPT: eval example
 **     SERVICE: https://nevada-jace-dps.herokuapp.com
 **
 **/

<?javascript
    $scope.f = {
        f1: d => d < 0,
        f2: d => d == 0,
        f3: d => d > 0
    }
    
    var eqFirstMeta = function(a,b){
      return a.metadata[0].id == b.metadata[0].id
    }
    
    var nullCount = function(values){
        return values.filter(function(d){
            return d == null
        }).length
    };

?>

set('f')

get('f.eqFirstMeta')
info('eqFirstMeta')
info()

get('f.nullCount')
info('nullCount')
info()

log()

```

This data processing script returns

```json
     {
        "logger": 25,
        "scope": "local",
        "timeStamp": "18/05/21 05:20:00",
        "level": "info",
        "message": [
            "\"eqFirstMeta\""
        ]
    },
    {
        "logger": 25,
        "scope": "local",
        "timeStamp": "18/05/21 05:20:00",
        "level": "info",
        "message": [
            "{\"type\":\"function\"}"
        ]
    },
    {
        "logger": 25,
        "scope": "local",
        "timeStamp": "18/05/21 05:20:00",
        "level": "info",
        "message": [
            "\"nullCount\""
        ]
    },
    {
        "logger": 25,
        "scope": "local",
        "timeStamp": "18/05/21 05:20:00",
        "level": "info",
        "message": [
            "{\"type\":\"function\"}"
        ]
    }
```