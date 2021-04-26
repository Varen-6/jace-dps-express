---
title: html.html
template: index.njk
---
# html.html
Set 'html' type for contet


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
run({{t2html}})```