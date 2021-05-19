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
/**
 **
 **     DATA PROCESSING SCRIPT: wrapHTML
 **     SERVICE: https://nevada-jace-dps.herokuapp.com
 **
 **/


<?javascript
    $scope.data = [
        {
            a: 0,
            b:2
        },
        {
            a: 1,
            b:1
        },
        {
            a: 2,
            b:0
        },
    ]
    
?>

<?html
        <tr>
            <th>a</th>
            <th>b</th>
        </tr>
        ${body}
?>

set("tableWrapper")

<?html
        <tr>
            <td>${row.a}</td>
            <td>${row.b}</td>
        </tr>    
?>

set("rowWrapper")

<?javascript
    $scope.res =  _.template($scope.tableWrapper)({ body: $scope.data.map( row => _.template($scope.rowWrapper)( {row} )).join(" ") })
?>
get('res')

wrapHtml(tag:'table')

html()
```


### Data processing script returns:

```html
    <table>
        <tr>
            <th>a</th>
            <th>b</th>
        </tr>
        
        <tr>
            <td>0</td>
            <td>2</td>
        </tr>    
 
        <tr>
            <td>1</td>
            <td>1</td>
        </tr>    
 
        <tr>
            <td>2</td>
            <td>0</td>
        </tr>    

    <table> 
```