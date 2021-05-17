---
title: collection.groupby
template: index.njk
---

# Collection.groupby

Select instances from collection

### Aliases

They are follows aliases of command name:

- `group`

### Command parameters

- `transform` - javascript callback function(item){<return {key, value}>} via bindable (required)

Default values of `transform` is defined as:

```js
"none";
```

### How to use

```dps
<?javascript
    var f1 = function(d){

             return d < 0};
             var f2 = function(d){
                return d == 0
                };
                var f3 = function(d){
                    return d > 0

                                  };
?>
set('filters')
<?json
[-2, -1, 0, 1, 2]
?>
set('data')
filter({{filters.f1}})
info()
get(var:'data'), as:'json')
filter({{filters.f2}})
info()
get(var:'data'), as:'json')
filter({{filters.f3}})
info()
log()


```
