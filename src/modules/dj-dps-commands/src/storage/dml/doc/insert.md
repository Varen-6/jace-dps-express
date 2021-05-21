---
title: dml.insert
template: index.njk
---

# Dml.insert

Save context into cache

### Aliases

They are follows aliases of command name:

- `dml.insert`


### How to use

```dps
load(
    ds:'47611d63-b230-11e6-8a1a-0f91ca29d77e_2016_02',
    as:'json'
)
select('$.metadata')
extend()
translate()
cache()
select("$.data_id")
```