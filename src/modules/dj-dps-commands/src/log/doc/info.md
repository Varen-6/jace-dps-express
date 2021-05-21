---
title: log.info
template: index.njk
---

# log.info
Puts info message into logger


### Aliases
They are follows aliases of command name: 
+ ```log.info```.


### Command Parameters

+ ```info```(aliased as ```value```) - **default command parameter** Value of info message (required)


### How to use

```dps
/**
 **
 **     DATA PROCESSING SCRIPT: info
 **     SERVICE: https://nevada-jace-dps.herokuapp.com
 **
 **/
info(value:'Direct')

<?text
    Hello injection! 
?>

info()
set('helloStr')
info('From var')
info({{helloStr}})

log()
```


### Data processing script returns:

```json
[
    {
        "logger": 22,
        "scope": "local",
        "timeStamp": "18/05/21 04:59:42",
        "level": "info",
        "message": [
            "\"Direct\""
        ]
    },
    {
        "logger": 22,
        "scope": "local",
        "timeStamp": "18/05/21 04:59:42",
        "level": "info",
        "message": [
            "{\"data\":\"\\n    Hello injection! \\n\",\"type\":\"string\"}"
        ]
    },
    {
        "logger": 22,
        "scope": "local",
        "timeStamp": "18/05/21 04:59:42",
        "level": "info",
        "message": [
            "\"From var\""
        ]
    },
    {
        "logger": 22,
        "scope": "local",
        "timeStamp": "18/05/21 04:59:42",
        "level": "info",
        "message": [
            "\"\\n    Hello injection! \\n\""
        ]
    }
]
```