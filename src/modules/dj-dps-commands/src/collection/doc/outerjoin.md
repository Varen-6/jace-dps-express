---
title: collection.outerjoin
template: index.njk
---

# collection.outerjoin

Build groups from context via javascript callback

### Aliases

They are follows aliases of command name:

- `collection.outerjoin`

### Command parameters

- `transform` - javascript callback function(item){<return {key, value}>} via bindable (required). **default command parametr (required)** 


### How to use

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