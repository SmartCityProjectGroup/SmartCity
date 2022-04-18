# Finanzamt

**Autor:** Mario Blomenkamp


## Überblick

In der heutigen Zeit wird es immer wichtiger, Bürokratie abzubauen und Vorgänge zu optimieren.
Nur so kann auf lange Zeit nachhaltig Geld eingespart und alle Bereiche der Gesellschaft ökologischer gestaltet werden.
Gerade in der Finanzwelt gehört das Internet schon lange zu den wichtigsten Begegnungsräumen.

Das soll auch mit dem smarten Finanzamt der Zukunft möglich sein.
Anträge sollten komplett online vom Abschicken bis zum Abschließen begleitet werden können und sollten dem Bürger umfassend erklärt werden.
Es sollte sich mit anderen Institutionen vernetzt werden, um z. B. automatisch die Steuerklasse ändern zu können, ohne eine erneute Meldung nötig zu machen.

Zudem sollte nach wie vor die Möglichkeit bestehen Termine für ein Gespräch zu vereinbaren und es sollte kein Account-Zwang bestehen, um niemanden den Zugang zu verwehren.

## Funktionale Anforderungen

  - Bürger
    - können alle gewohnten Vorgänge online durchführen
    - kriegen schnellen Überblick über Aktuelles
  - Arbeitgeber
    - können Mitarbeiter anmelden
    - können Steuern automatisiert abführen
  - Mitarbeiter
    - bearbeiten Anträge und sorgen für Richtigkeit
  - Bürgeramt 
    - meldet neue Bürger und Änderungen im Familienstand
  - Newsletter-Dienst
    - verteilt Meldungen über Events/ Neuigkeiten
  - Empfänger von Spenden
    - informieren über Spendeneingang

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

## Use-Case-Diagramm

![use-case-diagramm](media/use-case-diagramm.png)

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

![ER-Diagramm](media/finanzamt-erd.png)

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

### Dependencies

| **Service** | **Expected Content** | **Description** | **Action** |
| :------ | :----- | :----- | :----- |
| Bürgeramt | 	Bürger-ID<br>Anzahl der Kinder<br>ID des Ehepartners(optional) | Neuer Bürger | Anlegen einer Akte |
| Bürgeramt | 	Bürger-ID<br>Anzahl der Kinder(optional)<br>ID des Ehepartners(optional, false wenn getrennt) | Änderung Bürger | Änderung der Akte |
| Alle | Bürger-ID<br>Summe<br>Datum<br>Grund(optional)<br>Verwendungszweck(optional) | Spendeneingang | Vermerken der Spende, Ausstellen eines Spendenbescheids|

### Events

| **Service** | **Payload** | **Description** | 
| :------ | :----- | :----- |
| Newsletter | 	{<br>event_id: 8000,<br>event_name:"New Newsletter Entry",<br>service_name: finanzamt,<br>title: title,<br>text: text<br>} | Neuer Newsletter-Eintrag |
| Newsletter | 	{<br>event_id: 8001,<br>event_name:"New Calendar Entry",<br>service_name: finanzamt,<br>title: title,<br>text: text,<br>date: date<br>} | Neuer Kalendereintrag |

(Sofern nötig werden weitere Informationen ergänzt)
## Technische Umsetzung


### Softwarearchitektur

- Darstellung von Softwarebausteinen (Module, Schichten, Komponenten)

Hier stellen Sie die Verteilung der Softwarebausteine auf die Rechnerknoten dar. Das ist die Softwarearchitektur. Zum Beispiel Javascript-Software auf dem Client und Java-Software auf dem Server. In der Regel wird die Software dabei sowohl auf dem Client als auch auf dem Server in Schichten dargestellt.

* Server
  * Web-Schicht JavaScript Node.js
  * Logik-Schicht JavaScript Express.js
  * Persistenz-Schicht MySQL Datenbank

* Client
  * View-Schicht HTML, CSS
  * Logik-Schicht JavaScript + Vue.js
  * Kommunikation-Schicht Axios

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
