# Finanzamt

**Autor:** Mario Blomenkamp


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

## Anforderungen im Detail ##

**Unternehmer - User Stories**

| **ID** | **Als** | **möchte ich** | **so dass** | **Akzeptanz**   |
|:--------|:--------|:---------------|:---------------|:----------------|
| 1 | Arbeitgeber | Lohnsteuer abführen | Meine Abläufe Vereinfacht werden | Steuer wird online erfasst |
| 2 | Arbeitgeber | Meine Mitarbeiter anmelden | Meine Abläufe Vereinfacht werden | Mitarbeiter werden für weitere Nutzung gespeichert |

**Arbeitnehmer - User Stories**

| **ID** | **Als** | **möchte ich** | **so dass** | **Akzeptanz**   |
|:--------|:--------|:---------------|:---------------|:----------------|
| 3 | Arbeitnehmer | Familienstand, Beschäftigungsstatus o.ä. nicht ändern müssen | Ich weniger Aufwand habe | Automatische Änderung der Steuerklasse durch Infos vom Bürgeramt |

**Gemeinnützige Organisation/Verein - User Stories**

| **ID** | **Als** | **möchte ich** | **so dass** | **Akzeptanz**   |
|:--------|:--------|:---------------|:---------------|:----------------|
| 4 | Stiftung/Verein | Spenden melden | Wohltätern Arbeit abgenommen wird und Sonderausgaben geltend gemacht werden | Es wird auf eingehende Spendenmeldungen reagiert |

**Bürger (egal ob privat oder geschäftlich) - User Stories**

| **ID** | **Als** | **möchte ich** | **so dass** | **Akzeptanz**   |
|:--------|:--------|:---------------|:---------------|:----------------|
| 5 | Bürger | Antrag auf Fördergelder stellen | Ich Unterstützung erhalte | Plattform zum Beantragen von Fördergeldern |
| 6 | Bürger | Steuererklärung (+Jahresabschluss,...) machen | Ich meine Pflichten erfülle oder sich womöglich ein Finanzieller Vorteil ergibt | Schnittstelle zum Einreichen einer Steuererklärung|
| 7 | Bürger | In Kontakt treten | Mein Anliegen bearbeitet wird | Chat oder Plattform zur Terminvereinbarung |
| 8 | Bürger | Dokumente hochladen können | Mögliche Rückfragen ausgeschlossen werden | Dateien können mit Vorgängen verknüpft werden |
| 9 | Bürger | Auch ohne Account Formulare online Abschicken können | Ich keinen Brief verschicken muss | Formulare ohne konkreten Vorgang werden angenommen und bearbeitet |
| 10 | Bürger | Auf Fristen hingewiesen werden | Ich diese nicht verpasse | Hinweise werden auf der Website angezeigt und ein optionaler Newsletter wird bereitgestellt|
| 11 | Bürger | Meine Vorgänge einsehen können | Ich den Überblick nicht verliere | Übersicht über alle Vorgänge |

**Mitarbeiter - User Stories**

| **ID** | **Als** | **möchte ich** | **so dass** | **Akzeptanz**   |
|:--------|:--------|:---------------|:---------------|:----------------|
| 12 | Finanzbeamter | Vorgänge bearbeiten | Diese abgeschlossen werden können | Vorgänge können eingesehen werden |
| 13 | Finanzbeamter | Stichproben durchführen | Potenziell Betrug erkannt wird | Alle Bürger werden in Übersicht geführt |
## Graphische Benutzerschnittstelle

![mockup-home](media/home.png)
![mockup-formulare](media/formulare.png)
User Story 7,12
![mockup-konto](media/mein_konto.png)
User Story 5,6,7
![mockup-neuer-vorgang](media/Mein_Konto_Neuer_Vorgang.png)
User Story 7,8,9
![mockup-vorgang](media/vorgang.png)
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

**Beispiel:**

### URL

http://smart.city/microservices/customer

### Commands

**Synchronous**

| **Name** | **Parameter** | **Resultat** |
| :------ | :----- | :------ |
| createCustomer() | int id | int id |
| deleteOrder() | int id | int id |

**Asynchronous**

| **Name** | **Parameter** | **Resultat** |
| :------ | :----- | :------ |
| createContract() | int id | int id |
| changeContract() | int id | - |

### Events

**Customer event channel**

| **Name** | **Payload** | 
| :------ | :----- | 
| Customer Authorized | int id |
| Customer Deleted | int id |

**Contract event channel**

| **Name** | **Payload** | 
| :------ | :----- | 
| Contract Received | int id |
| Contract Deleted | int id |

### Queries

| **Name** | **Parameter** | **Resultat** |
| :------ | :----- | :------ |
| getContracts() | - | Contract [] list |
| getContract() | int id | Contract c |

### Dependencies

#### RPC

| **Service** | **Funktion** |
| :------ | :----- | 
| Authorization Service | authenticateUser() |
| Hospital Service | blockDate() |

#### Event-Subscriptions

| **Service** | **Funktion** |
| :------ | :----- | 
| Cinema channel | CancelFilmCreatedEvent |
| Customer reply channel | CreateCustomerEvent |


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

- Verwendete Technologien (Programmiersprachen, Frameworks, etc.)

* Frontend - vue.js 
* Backend - express
* Datenbank - MySQL
