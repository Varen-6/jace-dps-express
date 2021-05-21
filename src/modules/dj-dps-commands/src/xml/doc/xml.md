---
title: xml.xml
template: index.njk
---

# Xml.xml

Set `xml` type for script context

# How to use

```dps
<?json
    "<a><b>some text</b></a>"
?>
str()
xml()

```

This data processing script returns

```html
<a><b>some text</b></a>
```
