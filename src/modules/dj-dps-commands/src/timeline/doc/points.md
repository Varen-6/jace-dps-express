---
title: timeline.points
template: index.njk
---
# timeline.points
Build list of tags

### Aliases
They are follows aliases of command name: 
+ ```timeline.points```.
+ ```time.points```.
+ ```t.points```.
+ ```timeline.ticks```.
+ ```time.ticks```.
+ ```t.ticks```.

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
