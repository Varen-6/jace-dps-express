---
title: statistic.rank
template: index.njk
---
# statistic.rank
Add rank


### Aliases
They are follows aliases of command name: 
+ ```stat.max```,  
+ ```s.max```.


### Command Parameters

+ ```mapper```(aliased as ```by``` and ```for```): Mapper definition (required)

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
