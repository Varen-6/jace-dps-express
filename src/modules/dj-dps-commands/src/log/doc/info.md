---
title: log.info
template: index.njk
---

# log.info
Puts info message into logger


### Aliases
They are follows aliases of command name: 
+ ```log.info```.


### Command Parameters

+ ```info```(aliased as ```value```) - **default command parameter** Value of info message (required)


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
