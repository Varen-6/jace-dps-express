---
title: json
template: index.njk
---
# collection.countby
Contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON


### Aliases
They are follows aliases of command name: 
+ ```json```,  
+ ```JSON```.


### Command parameters
    
+ ```json``` - **default command parameter** is a function that maps a collection item to a projection for counting values.
+ **Processed collection should be on the head of script context.** 


### How to use

```dps

/**
 **
 **     DATA PROCESSING SCRIPT: json
 **     SERVICE: https://nevada-jace-dps.herokuapp.com
 **
 **/

 <?json
    [1,1,1]
?>
set('json')

<?csv
    a;b;c
    1;2;3
    4;5;6
?>
json()
set('csv')
info()

<?xml
    <a id="1">
        <b><![CDATA[<no parsed data> ]]> text value 0</b>
        <b><![CDATA[<no parsed data> ]]> text value 1</b>
        
    </a>
?>
json()
set('xml')
info()

<?html
    <div id="1">
        <h2>Title</h2>
        <div>Content</div>
    </div>
?>
json()
set('html')
info()

get()
log()

This data processing script returns
'''
[
    {
        "logger": 10,
        "scope": "local",
        "timeStamp": "23/05/21 11:39:20",
        "level": "info",
        "message": [
            "{\"type\":\"json\",\"data\":[{\"a\":\"1\",\"b\":\"2\",\"c\":\"3\"},{\"a\":\"4\",\"b\":\"5\",\"c\":\"6\"}]}"
        ]
    },
    {
        "logger": 10,
        "scope": "local",
        "timeStamp": "23/05/21 11:39:20",
        "level": "info",
        "message": [
            "{\"data\":{\"a\":{\"_attributes\":{\"id\":\"1\"},\"b\":[\"<no parsed data>  text value 0\",\"<no parsed data>  text value 1\"]}},\"type\":\"json\"}"
        ]
    },
    {
        "logger": 10,
        "scope": "local",
        "timeStamp": "23/05/21 11:39:20",
        "level": "info",
        "message": [
            "{\"data\":{\"node\":\"root\",\"child\":[{\"node\":\"text\",\"text\":\"\\n    \"},{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"id\":\"1\"},\"child\":[{\"node\":\"text\",\"text\":\"\\n        \"},{\"node\":\"element\",\"tag\":\"h2\",\"child\":[{\"node\":\"text\",\"text\":\"Title\"}]},{\"node\":\"text\",\"text\":\"\\n        \"},{\"node\":\"element\",\"tag\":\"div\",\"child\":[{\"node\":\"text\",\"text\":\"Content\"}]},{\"node\":\"text\",\"text\":\"\\n    \"}]},{\"node\":\"text\",\"text\":\"\\n\"}]},\"type\":\"json\"}"
        ]
    }
]
'''
