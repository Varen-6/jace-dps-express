---
title: export.exp
template: index.njk
---

# export.exp
Export data as file


### Aliases
They are follows aliases of command name: 
+ ```export```,
+```download```.


### Command Parameters

+ ```file``` - **default command parameter** File name with extension (required)


### How to use

```dps
/**
 **
 **     DATA PROCESSING SCRIPT: export.exp
 **     SERVICE: https://nevada-jace-dps.herokuapp.com
 **
 **/
 <?javascript
    $scope.data = [
        {
            a: 0,
            b:2
        },
        {
            a: 1,
            b:1
        },
        {
            a: 2,
            b:0
        },
    ]
    
?>
get("data")
export("data.json")
```


### Data processing script returns:

```json
{
    "url": "/downloads/data.json"
}
```