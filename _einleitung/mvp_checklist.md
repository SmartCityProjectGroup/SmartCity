# Das MVP - Minimum Viable Product

**Autor:** Scrum Master: Janik Geist

?> WIP
## Ein Überblick
Im Gegensatz zu der [Definition](https://de.wikipedia.org/wiki/Minimum_Viable_Product) auf Wikipedia, dient das MVP, 
im Rahmen unseres Projektes, als Orientierung für die fortlaufende Projektentwicklung und stellt ein Grundgerüst für 
sowohl interne als auch externe Routen dar. Ziel ist es, mithilfe des MVPs alle öffentlichen Schnittstellen und die meisten 
privaten (nicht funktional) zu implementieren. Das heißt, dass diese Schnittstellen bereits zugänglich sein sollen und von 
anderen Services genutzt werden können, jedoch bei Aufruf nur einen konstanten Wert (NULL, Hardcoded-Objekt etc.) liefern. 
Funktionale Implementierungen, sollen dann in den Wochen nach der Vorstellung des MVPs geschehen. 

## Was sollte man beim MVP beachten?

| Öffentliche Schnittstellen                                                                          | Erledigt |
|:----------------------------------------------------------------------------------------------------|:---------|
| Alle Schnittstellen aus meiner Spezifikation sind implementiert. (Events und API)                   | [ ]      |
| Alle in meiner Spezifikation angegebenen Parameter sind beachtet worden.                            | [ ]      |
| Alle Parameter werden auf ihre Korrektheit geprüft. [(JSON-Schema)](../json_schema_tutorial.md)     | [ ]      |
| Mein Service kann eine Verbindung mit RabbitMQ aufbauen und Events senden/empfangen.                | [ ]      |
| Alle Routen sind (soweit möglich) mit Testfällen abgedeckt.                                         | [ ]      |
| Meine Spezifikation ist entsprechend meiner Implementierung. (Parameter, Rückgaben, Routen etc.)    | [ ]      |
| Mein Kanbanboard ist entsprechend meines Fortschritts geführt.                                      | [ ]      |

| Private Schnittstellen                                                                          | Erledigt |
|:------------------------------------------------------------------------------------------------|:---------|
| Alle meine öffentlichen Schnittstellen sind entsprechend der Checkliste von oben implementiert. | [ ]      |
| Alle in meiner Spezifikation angegebenen Parameter sind beachtet worden.                        | [ ]      |
| Alle Parameter werden auf ihre Korrektheit geprüft. [(JSON-Schema)](../json_schema_tutorial.md) | [ ]      |
| Alle Routen sind (soweit möglich) mit Testfällen abgedeckt.                                     | [ ]      |
| Meine Implementierung ist entsprechend der Spezifikation (Parameter, Rückgaben, Routen etc.)    | [ ]      |
| Ich kann für bestimmte Routen schon mit ersten Frontend-Implementierungen beginnen.             | [ ]      |
| Mein Datenbankschema ist auf dem Datenbankserver zu erreichen.                                  | [ ]      |
| Alle wichtigen Module sind installiert.                                                         | [ ]      |

| Allgemein                                                    | Erledigt |
|:-------------------------------------------------------------|:---------|
| Mein Service hat eine rudimentäre Startseite.                | [ ]      |
| Es existiert ein vernüftiges Dockerfile für meinen Service.  | [ ]      |
| Mein Service ist auf dem Server erreichbar. (Startseite)     | [ ]      |

### Zusammenfassung
Im Fokus liegen offensichtlich die öffentlichen Schnittstellen. Mit Abgabe des MVPs soll jeder Service in der Lage sein,
die Schnittstellen eines anderen Services, auch wenn diese noch keine direkte Funktionalität bieten, zu nutzen. 
So kann sich nach der Abgabe jeder Service um seine eigenen Aufgaben kümmern, und muss nicht auf große Veränderungen in 
den Schnittstellen der anderen reagieren.
