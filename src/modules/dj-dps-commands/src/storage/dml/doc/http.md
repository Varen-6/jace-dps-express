---
title: dml.http
template: index.njk
---

# Dml.http

Get data from source. Available sources: dataset, cached data, external url

### Aliases

They are follows aliases of command name:

- `dml.http`

### Command parameters

- `dataset`(aliased as `ds`) - UUID for dataset (optional). Use command 'meta()' for find datasets. **default command parametr (required)** 
- `cache` - UUID for cached data (optional). Use command 'cache()' for cache context. **default command parametr (required)** 
- `url` - Url for data (optional). You can process external data via url. **default command parametr (required)** 


### How to use

```dps
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