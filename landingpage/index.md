# Parkplatz

**Autor:** Jannik Geist, Adrian Koß


<!--
Here goes the path to the image if there is one
![]()
-->


## Überblick

- Textuelle Beschreibung der Anwendungsdomäne
- Konzeptionelles Analyseklassendiagramm (logische Darstellung der Konzepte der Anwendungsdomäne)


## Funktionale Anforderungen

* Definition der Akteure
* Use-Case Diagramme
* Strukturierung der Diagramme in funktionale Gruppen
* Akteure sowie andere Begriffe der implementierten Fachdomäne definieren 
* Begriffe konsistent in der Spezifikation verwenden  
* Begriffe im Glossar darstellen

## Anforderungen im Detail

- User Stories mit Akzeptanzkritierien 
- Optional: Name (oder ID) und Priorität ("Must", "Should", "Could", "Won't")
- Strukturierung der User Stories in funktionale Gruppen
- Sicherheit: Misuse-Stories formulieren

**Schablone für User Stories**

| **Als** | **möchte ich** | **so dass** | **Akzeptanz**   |
|:--------|:---------------|:------------|:----------------|
| Wer     | Was            | Warum       | Wann akzeptiert |

**Beispiel 1**

| **Als**  | **möchte ich**                                | **so dass**     | **Akzeptanz**         |
|:---------|:----------------------------------------------|:----------------|:----------------------|
| Benutzer | bei Fehleingabe die Lösung angezeigt bekommen | ich lernen kann | Lösung wird angezeigt |

**Beispiel**

| **Name** | **In meiner Rolle als**... | ...**möchte ich**...                          | ..., **so dass**... | **Erfüllt, wenn**...  | **Priorität** |
|:---------|:--------------------------:|:----------------------------------------------|:--------------------|:----------------------|:--------------|
| Lernen   |          Benutzer          | bei Fehleingabe die Lösung angezeigt bekommen | ich lernen kann     | Lösung wird angezeigt | Muss          |

## Graphische Benutzerschnittstelle

- GUI-Mockups passend zu User Stories
- Screens mit Überschrift kennzeichnen, die im Inhaltsverzeichnis zu sehen ist
- Unter den Screens darstellen (bzw. verlinken), welche User Stories mit dem Screen abgehandelt werden
- Modellierung der Navigation zwischen den Screens der GUI-Mockups als Zustandsdiagramm
- Mockups für unterschiedliche Akteure


## Datenmodell 

- Begriffe im Glossar darstellen
- Modellierung des physikalischen Datenmodells 
  - RDBMS: ER-Diagramm bzw. Dokumentenorientiert: JSON-Schema

## Abläufe

- Aktivitätsdiagramm für den Ablauf sämtlicher Use Cases
- Aktivitätsdiagramme für relevante Use Cases
- Aktivitätsdiagramm mit Swimlanes sind in der Regel hilfreich 
  für die Darstellung der Interaktion von Akteuren der Use Cases / User Stories
- Abläufe der Kommunikation von Rechnerknoten (z.B. Client/Server)
  in einem Sequenz- oder Aktivitätsdiagramm darstellen
- Modellieren Sie des weiteren die Diagramme, die für das (eigene) Verständnis des
  Softwaresystems hilfreich sind. 


## Schnittstellen

- Schnittstellenbeschreibung (API), z.B. mit OpenAPI 
- Auflistung der nach außen sichtbaren Schnittstelle des Microservices. Über welche Schnittstelle kann z.B. der Client den Server erreichen?
- In Event-gesteuerten Systemen ebenfalls die Definition der Ereignisse und deren Attribute
- Aufteilen in Commands, Events, Queries
* Abhängigkeiten: Liste mit Kommunikationsabhängigkeiten zu anderen Microservices

### URL

http://smart.city/microservices/customer

### API
**Synchronous**

| **Name**      | **Parameter** | **Resultat**                                                                                                           |
|:--------------|:--------------|:-----------------------------------------------------------------------------------------------------------------------|
| getServices() |               | Liste von allen Microservices:<br/>[<br/>{<br/>service_name: String,<br/>about_us: String,<br/>url: String<br/>}<br/>] |

### Dependencies

#### Event

| **Service**   | **Payload**                                                                                                                                                                                                    |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| Alle Services | {<br/>event_id: 100,<br/>event_name:"Updated About US<br/>service_name: <i>service</i><br/>date: <i>date</i><br/>about_us:"Neuer About Us Text" (optional)<br/>picture: <i>URL to picture</i> (optional)<br/>} |

## Technische Umsetzung


### Softwarearchitektur

- Darstellung von Softwarebausteinen (Module, Schichten, Komponenten)

Hier stellen Sie die Verteilung der Softwarebausteine auf die Rechnerknoten dar. Das ist die Softwarearchitektur. Zum Beispiel Javascript-Software auf dem Client und Java-Software auf dem Server. In der Regel wird die Software dabei sowohl auf dem Client als auch auf dem Server in Schichten dargestellt.

* Server
  * Web-Schicht: JavaScript Node.js 
  * Logik-Schicht: JavaScript Express.js
  * Persistenz-Schicht: MySQL Datenbank

* Client
  * View-Schicht: HTML, CSS
  * Logik-Schicht: JavaScript + Vue.js
  * Kommunikation-Schicht: Axios

Die Abhängigkeit ist bei diesen Schichten immer unidirektional von "oben" nach "unten". Die Softwarearchitektur aus Kapitel "Softwarearchitektur" ist demnach detaillierter als die Systemübersicht aus dem Kapitel "Systemübersicht". Die Schichten können entweder als Ganzes als ein Softwarebaustein angesehen werden. In der Regel werden die Schichten aber noch weiter detailliert und in Softwarebausteine aufgeteilt. 

### Entwurf

- Detaillierte UML-Diagramme für relevante Softwarebausteine

### Validierung

Test, dass die einkommenden Events zum Update der About Us Seite korrekt ausgeführt wird

Test, dass alle Daten über die Services korrekt an den Client übertragen werden

Test, dass alle Links zu den richtigen Microservices führen

### Verwendete Technologien

- Verwendete Technologien (Programmiersprachen, Frameworks, etc.)

* HTMl, CSS, JavaScript, Vue.js, Axios
* JavaScript, Node.js, Express.js
* MySQL
