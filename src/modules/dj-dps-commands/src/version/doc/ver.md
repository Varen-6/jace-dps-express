---
title: version.ver
template: index.njk
---

# Version.ver

**Gets** DJ DP script version

# How to use

```dps
ver()
```

This data processing script returns

```json
{
  "name": "DJ Data Processing Script",
  "version": "0.1.1",
  "commands": "@async, @all, @any, @defaults, help, nlp.content.tokenize, nlp.content.stemmize, nlp.content.stems, nlp.content.tokens, nlp.content.ngrams, nlp.content.tfidf, nlp.content.lang, nlp.content.removestopwords, context, get, set, json, export, version, run, dps, print, library, import, call, preset, logger, info, eval, uuid, wait, html, wrapHtml, html.select, xml, csv, string, append, client, @permission, dml.insert, dml.delete, dml.update, dml.select, dml.load, http, cache.save, cache.get, sendmail, profile.find, file.load, collection.select, collection.orderby, collection.groupby, collection.uniqueby, collection.leftjoin, collection.innerjoin, collection.outerjoin, collection.map, collection.countby, collection.zip, collection.unzip, collection.pushInto, collection.take, matrix.transpose, stat.correlation, stat.histogram, stat.rank, stat.cluster, stat.pca, stat.normalize, stat.logNormalize, stat.standardize, stat.granulate, stat.centroid, stat.pca.loadings, stat.pca.eigenValues, stat.average, stat.median, stat.entropy, stat.std, stat.min, stat.max, stat.reg, stat.agglomerate, stat.clusterization, timeline.eventIndicator, timeline.points, bbn.create, service.uri.ip, service.uri.info, service.google.news, dict.countries.map, service.elasticsearch, cypher, service.cypher, sql, service.sql, uml, plantuml, service.uml, service.mongodb, service.mongodb.collections, service.mongodb.replace, service.mongodb.remove, service.github.createProvider, service.github.org.repos, service.github.repos.getJSON, service.github.repos.getContent, service.github.repos.getTree, service.nlp.tokenize, service.nlp.namedEntities, service.nlp.ner.highlight, service.dataverse.search, service.data.ghuCovid.get, service.data.nszu.get, service.data.db.update, md, md.toHtml, lexer.tokenize, simulation.compartment.solve, simulation.compartment.model.seird."
}
```
