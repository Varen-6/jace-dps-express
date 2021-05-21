---
title: Context.context
template: index.njk
---

# Context.context

**Puts string `Hello` into context**

### Aliases

They are follows aliases of command name:

- `ctx`
- `context`

### Command parameters

- `value` (aliased as `v`, `val`, `value`) - Value will be stored in context

Default values of `value` is defined as:

```js
"string", "number", "bindable", "injection";
```

# How to use

```dps
context(value:'Hello')

//or with synonims and defaults
ctx('Hello')
set('b')
info()

//or with injection
<?text Hello ?>

//or get string from var
info()
set('a')
ctx({{a}})
info()
ctx({{b}})
info()

log()
```

This data processing script returns

```json
[
  {
    "logger": 2,
    "scope": "local",
    "timeStamp": "14/05/21 06:07:31",
    "level": "info",
    "message": ["{\"type\":\"string\",\"data\":\"Hello\"}"]
  },
  {
    "logger": 2,
    "scope": "local",
    "timeStamp": "14/05/21 06:07:31",
    "level": "info",
    "message": ["{\"data\":\" Hello \",\"type\":\"string\"}"]
  },
  {
    "logger": 2,
    "scope": "local",
    "timeStamp": "14/05/21 06:07:31",
    "level": "info",
    "message": ["{\"type\":\"string\",\"data\":\" Hello \"}"]
  },
  {
    "logger": 2,
    "scope": "local",
    "timeStamp": "14/05/21 06:07:31",
    "level": "info",
    "message": ["{\"type\":\"string\",\"data\":\"Hello\"}"]
  }
]
```
