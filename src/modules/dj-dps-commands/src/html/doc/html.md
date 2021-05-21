---
title: html.html
template: index.njk
---
# html.html
Set 'html' type for contet


### How to use

```dps
/**
 **
 **     DATA PROCESSING SCRIPT: html
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
    <table>
        <tr>
            <th>a</th>
            <th>b</th>
        </tr>
        ${body}
    <table>    
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

return("res")
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