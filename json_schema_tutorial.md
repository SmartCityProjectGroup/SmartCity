# JSON Schemas

Mit JSON Schemas kann man JSON Objekte auf ihre Richtigkeit überprüfen. 

Dazu muss das JSON Schema als JSON 
selbst definiert werden. Damit alle die Schemas nutzen können, ist es aber einfacher die Schemas als String
zu geben, damit auch andere Sprachen mit dem Schema arbeiten können. 

Für ein JSON Schema gibt es zunächst
Informationen, die jedes Schema hat. Das sind `title`, `description`, und `type`. `title` sollte der Eventname
sein, für dies das Schema geschrieben wurde. `description` ist nicht ganz so wichtig und kann auch frei
gelassen werden. `type` ist immer `object`, weil wir immer mit JSON Objekten arbeiten. 

Danach kommen die
`properties`. Hier kommen alle Felder des JSON Objektes hinein. Hier können alle Bedingungen für die
Werte gemacht werden; welchen Typ soll der Wert haben?, oder welche Wertegrenzen sollen eingehalten werden?

Zum Schluss kommt noch `required`, in dem alle Felder aufgelistet werden, die zwingend vorhanden sein können.
Alle Felder, die hier nicht angegeben werden, sind somit optional. Felder eines JSON Objektes, welche nicht
im Schema definiert wurden, werden beim Überprüfen ignoriert. Es kann also nicht festgelegt werden, dass nur
die definierten Felder im Objekt existieren.

Um nun ein JSON Objekt zu überprüfen, wird eine Bibliothek verwendet. In Javascript kann man z.B. `ajv` 
benutzen. Mit einer solchen Bibliothek können JSON Objekte ganz einfach mit einem angegebenen Schema 
überprüft werden.

Eine Sache, die wir mit den JSON Schemas leider nicht überprüfen können, ist ob `date` das richtige Zeitformat
hat oder nicht. Wird dieses Feld gebraucht, muss hier unglücklicherweise doch noch manuell geprüft werden.

## Beispiel

```
const Ajv = require('ajv')

const schema = {
    "title": "Change About Us",
    "description": "Schema for the event to change the about us",
    "type": "object",
    "properties": {
        "event_id" : {
            "type": "integer",
            "minimum": 0,
            "maximum": 10000
        },
        "event_name": {
            "type": "string",
            "const": "Updated About US"
        },
        "service_name": {
            "type": "string"
        },
        "date": {
            "type": "string"
        },
        "about_us":{
            "type": "string"
        },
        "picture": {
            "type": "string"
        }
    },
    "required": [
        "event_id",
        "event_name",
        "service_name",
        "date"
    ]
}

const schemaAsObject = JSON.parse(schema)

const valid = {
event_id: 9000,
service_name: "integration",
event_name: "Updated About US",
date: "21.04.2022T09:12",
about_us: "..."
}

const invalid = {
event_id: "1001",
event_name: 5,
date: "21.04.2022T09:12",
about_us: "..."
}

const ajv = new Ajv({allErrors: true})

console.log(ajv.validate(schemaAsObject, valid))
console.log(ajv.validate(schemaAsObject, invalid))
```

Die Funktion `ajv.validate(schema, object)` gibt hier zum Schluss also für das erste Objekt `true` zurück,
während das Ergebnis vom zweiten Aufruf mit dem inkorrekten Objekt ein `false` ist.