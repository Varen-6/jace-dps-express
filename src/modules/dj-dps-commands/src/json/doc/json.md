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
 **     DATA PROCESSING SCRIPT: countby example
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

<?xml
    <a id="1">
        <b><![CDATA[<no parsed data> ]]> text value 0</b>
        <b><![CDATA[<no parsed data> ]]> text value 1</b>
        
    </a>
?>
json()
set('xml')

<?html
    <div id="1">
        <h2>Title</h2>
        <div>Content</div>
    </div>
?>
json()
set('html')

get()

```
