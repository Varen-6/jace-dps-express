---
title: matrix.transpose
template: index.njk
---
# matrix.transpose
Transpose matrix

### Aliases
They are follows aliases of command name: 
+ ```matrix.transpose```.
+ ```m.transpose```.

### How to use

```
<?javascript
   
   $context.mapper = function(d){
       return {
           key:d, 
           value:d
           
       }
   };
   
   $context.transform = function(d){
        return {
            key:d.key, 
            count: d.values.length
        }
   };
   
   $context.criteria = function(a,b){
       return b.count-a.count
   };
   
?>

meta('$..dataset.topics.*')

group({{mapper}})
map({{transform}})
sort({{criteria}})

extend()
translate()
```
