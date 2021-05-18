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
/**
 **
 **     DATA PROCESSING SCRIPT: statistic.rank
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

get("data")


s.rank(by:"a", as:"asc", return: "rankA")

stat.rank(
    by:<? item => item.b + item.a ?>, 
    return: "rankB"
)


collection.orderBy( by:"rankA")
```


### Data processing script returns:

```json
[
    {
        "a": 2,
        "b": 0,
        "rankA": 1,
        "rankB": 1
    },
    {
        "a": 1,
        "b": 1,
        "rankA": 2,
        "rankB": 1
    },
    {
        "a": 0,
        "b": 2,
        "rankA": 3,
        "rankB": 1
    }
]
```
