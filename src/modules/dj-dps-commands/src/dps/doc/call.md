---
title: dps.call
template: index.njk
---

# dps.call
Call from server


### Aliases

They are follows aliases of command name: 
+ ```dps.call```,
+ ```dps.ext```,
+ ```dps.extension```.


### Command Parameters

+ ```path```(aliased as ```ext```, ```extension```) - Json path to selected value (optional). If 'value' is not assigned then storage will be restored.". **default command parameter** (required)

    
### How to use

```dps
<?json 
    "Hello" 
?>
set("str")

<?javascript 
    var notNull = function(item){
        return item != undefined
        
    }; 
?>
set("functions")

load(
    ds:"47611d63-b230-11e6-8a1a-0f91ca29d77e_2016_02", 
    as:'json'
)

select("$.metadata.dataset.commit")

set(var:"commitNote", val:"$[0].note")
get("str")
info()
get("functions.notNull")
info()
get("commitNote")
info()
// equals for previus
get("$.commitNote")
info()
log()
```