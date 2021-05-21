---
title: help.help
template: index.njk
---
# help.help
Helps for command usage

### Aliases
They are follows aliases of command name: 
+ ```help```,  
+ ```h```.


### Command Parameters

+ ```direction```(aliased as ```dir```, ```for```): Direction of iteration (optional)


### How to use
```dps
help(command:'s.rank')
```


### Data processing script returns:

```json
{
    "synopsis": "Add rank",
    "name": {
        "default": "rank",
        "synonims": []
    },
    "input": [
        "table"
    ],
    "output": "table",
    "default param": "indexes",
    "params": [
        {
            "name": "direction",
            "synopsis": "Direction of iteration (optional)",
            "type": [
                "Rows",
                "row",
                "Columns",
                "col"
            ],
            "synonims": [
                "direction",
                "dir",
                "for"
            ],
            "default value": "Columns"
        },
        {
            "name": "indexes",
            "synopsis": "Array of 0-based indexes of items that will be ranked (optional)",
            "type": [
                "array of numbers"
            ],
            "synonims": [
                "indexes",
                "items"
            ],
            "default value": []
        },
        {
            "name": "asc",
            "synopsis": "Define order (optional)",
            "type": [
                "A-Z",
                "az",
                "direct",
                "Z-A",
                "za",
                "inverse"
            ],
            "synonims": [
                "order",
                "as"
            ],
            "default value": "A-Z"
        }
    ],
    "example": {
        "description": "Rank first column values",
        "code": "load(\r\n    ds:'47611d63-b230-11e6-8a1a-0f91ca29d77e_2016_02',\r\n    as:\"dataset\"\r\n)\r\nproj([\r\n  { dim:'time', role:'row', items:[] },\r\n  { dim:'indicator', role:'col', items:[] }\r\n])\r\n\r\nrank(for:\"col\",items:[0],as:\"az\")\r\n\r\norder(by:0, as:\"az\")\r\n\r\n"
    },
    "implemented commands": [
        "@async",
        "@all",
        "@any",
        "@defaults",
        "help",
        "nlp.content.tokenize",
        "nlp.content.stemmize",
        "nlp.content.stems",
        "nlp.content.tokens",
        "nlp.content.ngrams",
        "nlp.content.tfidf",
        "nlp.content.lang",
        "nlp.content.removestopwords",
        "context",
        "get",
        "set",
        "json",
        "export",
        "version",
        "run",
        "dps",
        "print",
        "library",
        "import",
        "call",
        "preset",
        "logger",
        "info",
        "eval",
        "uuid",
        "wait",
        "html",
        "wrapHtml",
        "html.select",
        "xml",
        "csv",
        "string",
        "append",
        "client",
        "@permission",
        "dml.insert",
        "dml.delete",
        "dml.update",
        "dml.select",
        "dml.load",
        "http",
        "cache.save",
        "cache.get",
        "sendmail",
        "profile.find",
        "file.load",
        "collection.select",
        "collection.orderby",
        "collection.groupby",
        "collection.uniqueby",
        "collection.leftjoin",
        "collection.innerjoin",
        "collection.outerjoin",
        "collection.map",
        "collection.countby",
        "collection.zip",
        "collection.unzip",
        "collection.pushInto",
        "collection.take",
        "matrix.transpose",
        "stat.correlation",
        "stat.histogram",
        "stat.rank",
        "stat.cluster",
        "stat.pca",
        "stat.normalize",
        "stat.logNormalize",
        "stat.standardize",
        "stat.granulate",
        "stat.centroid",
        "stat.pca.loadings",
        "stat.pca.eigenValues",
        "stat.average",
        "stat.median",
        "stat.entropy",
        "stat.std",
        "stat.min",
        "stat.max",
        "stat.reg",
        "stat.agglomerate",
        "stat.clusterization",
        "timeline.eventIndicator",
        "timeline.points",
        "bbn.create",
        "service.uri.ip",
        "service.uri.info",
        "service.google.news",
        "dict.countries.map",
        "service.elasticsearch",
        "cypher",
        "service.cypher",
        "sql",
        "service.sql",
        "uml",
        "plantuml",
        "service.uml",
        "service.mongodb",
        "service.mongodb.collections",
        "service.mongodb.replace",
        "service.mongodb.remove",
        "service.github.createProvider",
        "service.github.org.repos",
        "service.github.repos.getJSON",
        "service.github.repos.getContent",
        "service.github.repos.getTree",
        "service.nlp.tokenize",
        "service.nlp.namedEntities",
        "service.nlp.ner.highlight",
        "service.dataverse.search",
        "service.data.ghuCovid.get",
        "service.data.nszu.get",
        "service.data.db.update",
        "md",
        "md.toHtml",
        "lexer.tokenize",
        "simulation.compartment.solve",
        "simulation.compartment.model.seird"
    ]
}
```