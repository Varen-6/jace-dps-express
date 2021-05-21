---
title: dml.http
template: index.njk
---
# http
Make HTTP requests that can be used to send or receive data from a server side resource.


### Aliases
They are follows aliases of command name: 
+ ```http```.


### How to use

```dps

/**
 **
 **     DATA PROCESSING SCRIPT: countby example
 **     SERVICE: https://nevada-jace-dps.herokuapp.com
 **
 **/

load(
    ds:'47611d63-b230-11e6-8a1a-0f91ca29d77e_2016_02',
    as:'dataset')

load(
    cache:'5855481930d9ae60277a474a',
    as:'table'
)

import(
    url:'http://127.0.0.1:8080/api/resource/scripting-js.js',
    as:'javascript'
)

load(
    url:'http://127.0.0.1:8080/api/resource/scripting-csv.csv',
    as:'csv'
)

load(
    url:'http://127.0.0.1:8080/api/resource/scripting-xml.xml',
    as:'xml'
)

load(
    url:'http://127.0.0.1:8088',
    as:'html'
)

```
