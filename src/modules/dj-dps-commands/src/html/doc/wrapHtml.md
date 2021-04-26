---
title: html.wrapHtml
template: index.njk
---
# html.wrapHtml
Wrap context into html tag


### Aliases
They are follows aliases of command name: 
+ ```html.wrapHtml```,  
+ ```html.wrap```. 


### Command parameters
    
+ ```tag```(aliased as ```wrap```) - **default command parameter** Wrapper tag name (required)
+ ```style``` - Wrapper inline css style (optional)
+ ```class``` - Wrapper class (optional)


### How to use

```dps
<?javascript
    
    $context.rowMapper = function(d){
      return "<tr>"+ d.value.map(function(v){
         return "<td style=\\"font-size:x-small\\">"+v+"</td>"
      }).join("")+"</tr>"
    };

?>

<?dps

    map({{rowMapper}})
    concat()
    html()
    wrapHtml(tag:"table", class:"skin", style:'background:#ded;')

?>
set("t2html")



load(
    ds:"47611d63-b230-11e6-8a1a-0f91ca29d77e_2016_02",
    as:'dataset'
)

proj([
    {dim:"time", as:"row"},
    {dim:"indicator",as:"col"}
])

format(2)
json()
select("$.body.*")
run({{t2html}})
```