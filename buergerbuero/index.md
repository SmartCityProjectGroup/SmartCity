# Bürgerbüro

**Autor:** Tristan Kechlo


## Überblick

`Textuelle Beschreibung der Anwendungsdomäne`  
Das Bürgerbüro dient als erste Anlaufstelle wenn ein Bürger sich in der Stadt melden will.  
Dies kann der Bürger in der SmartCity auch online durchführen.
Nach Abschluss des Meldevorgangs erhält der Bürger ein Email mit einem Registrierungscode.
Mit diesem Code kann der Bürger sich dann einen Account in der SmartCity anlegen. 
Der Account wird für die Nutzung anderer Microservices der SmartCity bebötigt.  
  
Desweiteren kann bei dem Bürgerbüro eine Namens-/Adressänderung beantragt werden.
Diese Änderungen werden den anderen Microservices über Events mitgeteilt. Auch andere Statusänderungen, 
wie Beendigung eines Arbeitsverhältnisses, Eheschließung oder Todesmeldungen, werden an die anderen Microservices veteilt.  
  
`Konzeptionelles Analyseklassendiagramm (logische Darstellung der Konzepte der Anwendungsdomäne)`


## Funktionale Anforderungen

### Akteure
**Bürger:** eine Person die sich in dieser Stadt melden will  
**User:** ein Bürger der sich in der SmartCity registriert hat  
**Angestellter:** ein Mitarbeiter der Stadt  

### Use-Case Diagramme
![Funktionale Gruppen](media/use_case_funktionale_gruppen.png)
![Use-Cases](media/use_case_combined.png)

## Anforderungen im Detail

**User-Stories: Personendetails verwalten**

| **ID** | **Als** | **möchte ich** | **so dass** | **Akzeptanz** | **Prioität** |
| :------ | :----- | :------ | :-------- | :------ | :------ |
| 1 | Bürger | möchte ich mich im Bürgeramt melden können | ich in dieser Stadt gemeldet bin | Bürger wird gemeldet | Muss |
| 2 | User | eine Namensänderung beantragen | mein Name im Melderegister korrekt ist | Antrag wird eingereicht | Muss |
| 3 | User | einen Umzug melden | meine Adresse im Melderegister korrekt ist | Antrag wird eingereicht | Muss |
| 4 | User | eine Eheschließung beantragen | mit meinem Partner verheiratet bin | Heirat wird beantragt | Muss |
| 5 | User | eine Scheidung beantragen | nicht mehr mit meinem Partner verheiratet bin | Scheidung wird beantragt | Muss |
| 6 | Angestellter | ausstehende Anträge sehen | ich diese annehmen/ablehnen kann | Anträge werden angezeigt | Muss |
| 7 | Angestellter | einen ausstehenden Antrag annehmen/ablehnen | dieser bearbeitet wurde | Antrag wird angenommen/abgelehnt | Muss |

**User-Stories: Genehmigungen einreichen**

| **ID** | **Als** | **möchte ich** | **so dass** | **Akzeptanz** | **Prioität** |
| :------ | :----- | :------ | :-------- | :------ | :------ |
| 8 | User | Genehmigungen beantragen | diese eingereicht wird | Antrag wird eingereicht | Muss |
| 9 | User | meine Genehmigungen sehen | ich weiß welche Genehmigungen angenommen wurden | Genehmigungen werden angezeigt | Muss |
| 10 | Angestellter | ausstehende Genehmigungen sehen | ich diese annehmen/ablehnen kann | Genehmigungen werden angezeigt | Muss |
| 11 | Angestellter | eine ausstehende Genehmigung annehmen/ablehnen | diese bearbeitet wurde | Genehmigung wird angenommen/abgelehnt | Muss |



## Graphische Benutzerschnittstelle

- GUI-Mockups passend zu User Stories
- Screens mit Überschrift kennzeichnen, die im Inhaltsverzeichnis zu sehen ist
- Unter den Screens darstellen (bzw. verlinken), welche User Stories mit dem Screen abgehandelt werden
- Modellierung der Navigation zwischen den Screens der GUI-Mockups als Zustandsdiagramm
- Mockups für unterschiedliche Akteure


## Datenmodell 
### ER-Modell
![ER-Modell](media/er_modell.png)
### Physisches Datenmodell
![PDM](media/pdm.png)

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
### API
?> Klicke auf die Bilder um sie in voller Größe zu sehen

!> Noch in Arbeit, Syntax der Resultate können sich noch ändern

**Basis - URL:** http://smart.city/microservices/buergerbuero/api

| **Pfad** | **Methode** | **Parameter** | **Resultat** |
| :------ | :----- | :------ | :------ |
| /info/{ID} | GET | ID: eindeutige Bürger-ID | Informationen zu einem einzelnen Bürger<a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/api_bürger_info_single.png" title="Klick mich!">![Bürger](media/api_b%C3%BCrger_info_single.png)</a> |
| /licenses/{ID} | GET | ID: eindeutige Bürger-ID | Auskunft über alle Lizenzen eines einzelnen Bürger<a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/api_licenses_info.png" title="Klick mich!">![Bürger](media/api_licenses_info.png)</a> |
| /children/{ID} | GET | ID: eindeutige Bürger-ID | Informationen zu den Kindern des angegebenen Bürgers<a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/api_children.png" title="Klick mich!">![Kinder](media/api_children.png) |

### Events
?> Klicke auf die Bilder um sie in voller Größe zu sehen

!> Noch in Arbeit, Event-IDs und Event-Payloads können sich noch ändern

| **Name** | **Beschreibung** | **Payload** |
| :------ | :----- | :----- |  
| About us | wird ausgelöst wenn sich die About-Us-Seite des Bürgerbüros ändern soll | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_about_us.png" title="Klick mich!">![About us](media/event_about_us.png)</a> |
| Neuer Bürger gemeldet | wird ausgelöst sobald sich ein Bürger bei der Stadt meldet | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_citizen_created.png" title="Klick mich!">![Bürger erstellt](media/event_citizen_created.png)</a> |
| Eheschließung | wird ausgelöst, wenn zwei Bürger heiraten | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_marriage.png" title="Klick mich!">![Eheschließung](media/event_marriage.png)</a> |
| Namensänderung | wird ausgelöst, wenn ein Bürger seinen Namen änder lässt | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_name_change.png" title="Klick mich!">![Namensänderung](media/event_name_change.png)</a> |
| Adressänderung | wird ausgelöst, wenn ein Bürger innerhalb der Stadt umzieht | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_address_change.png" title="Klick mich!">![Adressänderung](media/event_address_change.png)</a> |
| Todesmeldung | wird ausgelöst, wenn ein Bürger stirbt | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_citizen_death.png" title="Klick mich!">![Todesmeldung](media/event_citizen_death.png)</a> |
| Genehmigung ausgestellt | wird ausgelöst, wenn einem Bürger eine Genehmigung ausgestellt wird | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_license_issued.png" title="Klick mich!">![Genehmigung ausgestellt](media/event_license_issued.png)</a> |
| Genehmigung widerrufen | wird ausgelöst, wenn einem Bürger eine Genehmigung widerrufen wird | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_license_removed.png" title="Klick mich!">![Genehmigung widerrufen](media/event_license_removed.png)</a> |


### Event-Subscriptions
Events, von anderen Microservices, die das Bürgerbüro auswertet/verarbeitet

| **Service** | **Event** | **Funktion** |
| :------ | :----- | :----- | 
| Amt für Integration |  |  |
| Amt für Integration |  |  |


## Technische Umsetzung


### Softwarearchitektur

- Darstellung von Softwarebausteinen (Module, Schichten, Komponenten)

Hier stellen Sie die Verteilung der Softwarebausteine auf die Rechnerknoten dar. Das ist die Softwarearchitektur. Zum Beispiel Javascript-Software auf dem Client und Java-Software auf dem Server. In der Regel wird die Software dabei sowohl auf dem Client als auch auf dem Server in Schichten dargestellt.

* Server
  * Web-Schicht
  * Logik-Schicht
  * Persistenz-Schicht

* Client
  * View-Schicht
  * Logik-Schicht
  * Kommunikation-Schicht

Die Abhängigkeit ist bei diesen Schichten immer unidirektional von "oben" nach "unten". Die Softwarearchitektur aus Kapitel "Softwarearchitektur" ist demnach detaillierter als die Systemübersicht aus dem Kapitel "Systemübersicht". Die Schichten können entweder als Ganzes als ein Softwarebaustein angesehen werden. In der Regel werden die Schichten aber noch weiter detailliert und in Softwarebausteine aufgeteilt. 



### Entwurf

- Detaillierte UML-Diagramme für relevante Softwarebausteine

### Fehlerbehandlung 

* Mögliche Fehler / Exceptions auflisten
* Fehlercodes / IDs sind hilfreich
* Nicht nur Fehler technischer Art ("Datenbankserver nicht erreichbar") definieren, sondern auch fachliche Fehler wie "Kunde nicht gefunden", "Nachricht wurde bereits gelöscht" o.ä. sind relevant. 

### Validierung

* Relevante (Integrations)-Testfälle, die aus den Use Cases abgeleitet werden können
* Testfälle für 
  - Datenmodell
  - API
  - User Interface
* Fokussieren Sie mehr auf Integrationstestfälle als auf Unittests
* Es bietet sich an, die IDs der Use Cases / User Stories mit den Testfällen zu verbinden,
  so dass erkennbar ist, ob Sie alle Use Cases getestet haben.

### Verwendete Technologien

* Frontend: React
* Backend: JavaScript (Node.js/Express.js)
* Datenbank: MySQL
