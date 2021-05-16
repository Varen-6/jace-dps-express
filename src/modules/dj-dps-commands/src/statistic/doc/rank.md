---
title: statistic.rank
template: index.njk
---
# statistic.rank
Add rank


### Aliases
They are follows aliases of command name: 
+ ```stat.rank```,  
+ ```s.rank```.


### Command Parameters

+ ```command```(aliased as ```for```, ```dir```): Direction of iteration (optional)
+ ```indexes```(aliased as ```items```): Array of 0-based indexes of items that will be ranked (optional)
+ ```asc```(aliased as ```order```, ```as```): Define order (optional)


### How to use

```dps
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
```
