---
title: collection.groupby
template: index.njk
---

# Collection.groupby

Select instances from collection

### Aliases

They are follows aliases of command name:

- `group`

### Command parameters

- `transform` - javascript callback function(item){<return {key, value}>} via bindable (required)

Default values of `transform` is defined as:

```js
"none";
```

### How to use

```dps
<?javascript
    $scope.data = [1,0,0,0,1,0]
    $scope.collection = [
        { key: "age", value:"10"},
        { key: "type", value:"truck"},
        { key: "type", value:"vehicle"}
    ]
?>

get("data")
c.groupby(<? item => item.key ?>)
set("res.valuesDistribution")

get("collection")
c.groupby(<? item => item.key ?>)
set("res.keys")

return ("res")

```

This data processing script returns:

```json
{
  "valuesDistribution": [
    {
      "values": [1, 0, 0, 0, 1, 0]
    }
  ],
  "keys": [
    {
      "group": "age",
      "values": [
        {
          "key": "age",
          "value": "10"
        }
      ]
    },
    {
      "group": "type",
      "values": [
        {
          "key": "type",
          "value": "truck"
        },
        {
          "key": "type",
          "value": "vehicle"
        }
      ]
    }
  ]
}
```
