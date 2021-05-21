---
title: file.load
template: index.njk
---

# file.load
Import data from file


### Aliases
They are follows aliases of command name: 
+ ```file.load```,
+ ```file.import```.


### Command Parameters

+ ```file``` - **default command parameter** File name with extention (required)


### How to use

```dps

/**
 **
 **     DATA PROCESSING SCRIPT: help
 **     SERVICE: https://nevada-jace-dps.herokuapp.com
 **
 **/
 
 
file.load('package.json')
```


### Data processing script returns:

```dps
USE JACE DEV http://nevada-jace-dev.herokuapp.com/ DPS http://localhost:8098
dushu3b2qi4 "noname"
  
{
    "name": "jace-dps-express",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "jest",
        "start": "node server",
        "jace-doc": "node ./build/jace-doc/index.js",
        "postinstall": "npm run jace-doc",
        "dev": "nodemon server"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "bluebird": "^3.7.2",
        "body-parser": "^1.19.0",
        "cors": "^2.8.5",
        "dj-dps-interpreter": "file:src/modules/dj-dps-interpreter",
        "dj-dps-parser": "file:src/modules/dj-dps-parser",
        "dps-command-pack-bbn": "file:src/modules/dj-dps-commands/src/bbn",
        "dps-command-pack-collection": "file:src/modules/dj-dps-commands/src/collection",
        "dps-command-pack-dps": "file:src/modules/dj-dps-commands/src/dps",
        "dps-command-pack-export": "file:src/modules/dj-dps-commands/src/export",
        "dps-command-pack-file": "file:src/modules/dj-dps-commands/src/file",
        "dps-command-pack-help": "file:src/modules/dj-dps-commands/src/help",
        "dps-command-pack-html": "file:src/modules/dj-dps-commands/src/html",
        "dps-command-pack-javascript": "file:src/modules/dj-dps-commands/src/javascript",
        "dps-command-pack-json": "file:src/modules/dj-dps-commands/src/json",
        "dps-command-pack-lexer": "file:src/modules/dj-dps-commands/src/lexer",
        "dps-command-pack-lib": "file:src/modules/dj-dps-commands/src/lib",
        "dps-command-pack-markdown": "file:src/modules/dj-dps-commands/src/markdown",
        "dps-command-pack-matrix": "file:src/modules/dj-dps-commands/src/matrix",
        "dps-command-pack-nlp": "file:src/modules/dj-dps-commands/src/nlp",
        "dps-command-pack-permissions": "file:src/modules/dj-dps-commands/src/permissions",
        "dps-command-pack-profile": "file:src/modules/dj-dps-commands/src/profile",
        "dps-command-pack-sendmail": "file:src/modules/dj-dps-commands/src/sendmail",
        "dps-command-pack-service-data": "file:src/modules/dj-dps-commands/src/service/data",
        "dps-command-pack-service-cypher": "file:src/modules/dj-dps-commands/src/service/cypher",
        "dps-command-pack-service-dataverse": "file:src/modules/dj-dps-commands/src/service/dataverse",
        "dps-command-pack-service-dict": "file:src/modules/dj-dps-commands/src/service/dict",
        "dps-command-pack-service-elasticsearch": "file:src/modules/dj-dps-commands/src/service/elasticsearch",
        "dps-command-pack-service-github": "file:src/modules/dj-dps-commands/src/service/github",
        "dps-command-pack-service-google-news": "file:src/modules/dj-dps-commands/src/service/google-news",
        "dps-command-pack-service-jace-nlp": "file:src/modules/dj-dps-commands/src/service/jace-nlp",
        "dps-command-pack-service-mongodb": "file:src/modules/dj-dps-commands/src/service/mongodb",
        "dps-command-pack-service-mysql": "file:src/modules/dj-dps-commands/src/service/mysql",
        "dps-command-pack-service-nlp-uk": "file:src/modules/dj-dps-commands/src/service/nlp-uk",
        "dps-command-pack-service-plantuml": "file:src/modules/dj-dps-commands/src/service/plantuml",
        "dps-command-pack-service-uri": "file:src/modules/dj-dps-commands/src/service/uri",
        "dps-command-pack-statistic": "file:src/modules/dj-dps-commands/src/statistic",
        "dps-command-pack-storage": "file:src/modules/dj-dps-commands/src/storage",
        "dps-command-pack-text": "file:src/modules/dj-dps-commands/src/text",
        "dps-command-pack-timeline": "file:src/modules/dj-dps-commands/src/timeline",
        "dps-command-pack-var": "file:src/modules/dj-dps-commands/src/var",
        "dps-command-pack-version": "file:src/modules/dj-dps-commands/src/version",
        "express": "^4.17.1",
        "express-fileupload": "^1.2.1",
        "lodash": "^4.17.20",
        "lodash-node": "^3.10.2",
        "queue-promise": "^2.1.0",
        "swagger-ui-express": "^4.1.6",
        "yamljs": "^0.3.0"
    },
    "devDependencies": {
        "execa": "^5.0.0",
        "jace-doc": "github:boldak/jace-doc",
        "jest": "^26.6.3",
        "nodemon": "^2.0.7",
        "request": "^2.88.2"
    }
}
```