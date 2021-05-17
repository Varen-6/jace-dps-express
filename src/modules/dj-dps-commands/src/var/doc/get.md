---
title: var.get
template: index.njk
---

# var.get

**Gets** deep copy of variable and **sets** context

### Aliases

They are follows aliases of command name:

- `get`

### Command parameters

- `path` (aliased as `path`, `select`, `var`)
- `as` (aliased as `type`) - type of variable

Default values of `path` and `as` are defined as:

```js
"$";
```

### How to use

```dps
<?json
    "Hello"
?>
set("str")

<?javascript
    var notNull = function(item){
        return item != undefined

    };
?>
set("functions")

load(
    ds:"47611d63-b230-11e6-8a1a-0f91ca29d77e_2016_02",
    as:'json'
)

select("$.metadata.dataset.commit")

set(var:"commitNote", val:"$[0].note")
get("str")
info()
get("functions.notNull")
info()
get("commitNote")
info()
// equals for previus
get("$.commitNote")
info()
log()
```

This data processing script returns

```json
[
  {
    "logger": 1,
    "scope": "local",
    "timeStamp": "12/05/21 10:44:16",
    "level": "info",
    "message": ["{\"data\":\"Hello\",\"type\":\"json\"}"]
  },
  {
    "logger": 1,
    "scope": "local",
    "timeStamp": "12/05/21 10:44:16",
    "level": "info",
    "message": ["{\"type\":\"function\"}"]
  },
  {
    "logger": 1,
    "scope": "local",
    "timeStamp": "12/05/21 10:44:16",
    "level": "info",
    "message": ["{\"type\":\"json\"}"]
  },
  {
    "logger": 1,
    "scope": "local",
    "timeStamp": "12/05/21 10:44:16",
    "level": "info",
    "message": ["{\"type\":\"json\"}"]
  }
]
```
