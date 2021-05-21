---
title: markdown.md.to-html
template: index.njk
---

# Markdown.md.to-html

Tokenize document

### Aliases

They are follows aliases of command name:

- `md.toHtml`

### Command parameters

- `direction`(aliased as `dir`, `for`) - Direction of iteration (optional). **default command parametr (required)** 

- `indexes`(aliased as `items`) - Array of 0-based indexes of items that will be ranked (optional). **default command parametr (required)** 

- `asc`(aliased as `order`, `as`) - Define order (optional). **default command parametr (required)** 


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