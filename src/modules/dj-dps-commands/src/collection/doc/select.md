---
title: collection.select
template: index.njk
---

# Collection.select

Select instances from collection

### Command parameters

- `criteria` (aliased as `criteria`, `select`) - javascript callback via bindable (required)

Default values of `criteria` is defined as:

```js
"none";
```

### How to use

```dps

<?javascript

    $scope.data = [-2, -1, 0, 1, 2]

?>

get('data')

c.select(where: <? item => item < 0 ?>)
```

This data processing script returns:

```json
[-2, -1]
```
