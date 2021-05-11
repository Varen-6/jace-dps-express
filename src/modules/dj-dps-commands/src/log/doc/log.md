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