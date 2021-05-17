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
 **     DATA PROCESSING SCRIPT: countby example
 **     SERVICE: https://nevada-jace-dps.herokuapp.com
 **
 **/

<?javascript
    
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