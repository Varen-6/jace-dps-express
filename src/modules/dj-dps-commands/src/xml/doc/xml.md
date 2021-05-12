---
title: xml.xml
template: index.njk
---

Set `xml` type for script context

```dps
load(
    url:'http://127.0.0.1:8080/api/resource/scripting-xml.xml',
    as:'xml',
    into:'external'
)

<?xml
    <a><b>text</b></a>
?>
set('internal')

get()
```
