---
title: collection.take
template: index.njk
---

Build list of tags

```dps
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
