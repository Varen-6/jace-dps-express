---
title: text.append
template: index.njk
---

# Text.append

**Appends default `string` and `string` with HTML tags**

### Aliases

They are follows aliases of command name:

- `append`

### Command parameters

- `value` (aliased as `value`) - the meaning of text

Default values of `value` is defined as:

```js
"";
```

### How to use

```dps
<?html
    <h1>
?>
append('hello')
append('</h1>')

// or

<?html hello ?>
wrap('h1')
```

This data processing script returns

```html
<h1>hello</h1>
```
