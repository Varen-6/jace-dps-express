
title: str 
template: index.njk


**Converts script context** to ````string````

```js
<?json
    [1,1,1]
?>

text()
json()
text()
```
title: append
title: append.njk

```js
<?html
    <h1>
?>
append('hello')
append('</h1>')

// or

<?html hello ?>
wrap('h1')
```