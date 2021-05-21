---
title: statistic.normalize
template: index.njk
---
# statistic.normalize
Add rank


### Aliases
They are follows aliases of command name: 
+ ```stat.normalize```,  
+ ```s.vnorm```,
+ ```stat.norm.range```,
+ ```s.norm.range```.


### Command Parameters

+ ```mapper```(aliased as ```by```): Mapper definition (required)
+ ```named```(aliased as ```name```, ```return```): by what name to return rank (required)


### How to use

load(

    ds:'47611d63-b230-11e6-8a1a-0f91ca29d77e_2016_02',
    as:"dataset"
)
proj([
  { dim:'time', role:'row', items:[] },
  { dim:'indicator', role:'col', items:[] }
])

rank(for:"col",items:[0],as:"az")

order(by:0, as:"az")
