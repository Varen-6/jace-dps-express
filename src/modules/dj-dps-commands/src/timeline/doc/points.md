---
title: html.html
template: index.njk
---
# html.html
Bild groups from context via javascript callback


### How to use

    <?javascript
   
      $context.mapper = function(d){
             return {
                       key:d, 
                       value:d
                                }};
                                                           
       $context.transform = function(d){
                return {
                         key:d.key, 
                         count: d.values.length
                                     }};
                                                                                                         
        $context.criteria = function(a,b){
               return b.count-a.count
                  };

    ?>
    nmeta('$..dataset.topics.*')
    ngroup({{mapper}})
    map({{transform}})
    sort({{criteria}})
    extend()
    translate()
                  
