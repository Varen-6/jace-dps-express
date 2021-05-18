---
title: log.log
template: index.njk
---

# log.log
Puts logger messages into context


### Aliases
They are follows aliases of command name: 
+ ```log.log```,
+```log.logger```.


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