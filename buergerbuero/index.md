# Bürgerbüro

**Autor:** Tristan Kechlo


## Überblick

<!--- Textuelle Beschreibung der Anwendungsdomäne --->
Das Bürgerbüro dient als erste Anlaufstelle wenn ein Bürger sich in der Stadt melden will.  
Dies kann der Bürger in der SmartCity auch online durchführen.
Nach Abschluss des Meldevorgangs erhält der Bürger ein Email mit einem Registrierungscode.
Mit diesem Code kann der Bürger sich dann einen Account in der SmartCity anlegen. 
Der Account wird für die Nutzung anderer Microservices der SmartCity benötigt.  
  
Desweiteren kann bei dem Bürgerbüro eine Namens-/Adressänderung beantragt werden.
Diese Änderungen werden den anderen Microservices über Events mitgeteilt. Auch andere Statusänderungen, 
wie Eheschließung, Scheidung oder Todesmeldungen, werden an die anderen Microservices veteilt.  
Zusätzlich können die Bürger über das Bürgerbüro verschiedene Genehmigungen, wie z.B. eine Baugenehmigung, beantragen. 
  
<!--Konzeptionelles Analyseklassendiagramm (logische Darstellung der Konzepte der Anwendungsdomäne)-->
![Analyseklassendiagramm](media/Analyseklassendiagramm.svg)


## Funktionale Anforderungen
<!--
  * Definition der Akteure
  * Use-Case Diagramme
  * Strukturierung der Diagramme in funktionale Gruppen
  * Akteure sowie andere Begriffe der implementierten Fachdomäne definieren 
  * Begriffe konsistent in der Spezifikation verwenden  
  * Begriffe im Glossar darstellen
-->
### Akteure
**Bürger:** eine Person die sich in dieser Stadt melden will  
**User:** ein Bürger der sich in der SmartCity registriert hat  
**Angestellter:** ein Mitarbeiter der Stadt  

### Use-Case Diagramme
![Funktionale Gruppen](media/use_case_funktionale_gruppen.png)
![Use-Cases](media/use_case_combined.png)


## Anforderungen im Detail
<!--
- User Stories mit Akzeptanzkritierien 
- Optional: Name (oder ID) und Priorität ("Must", "Should", "Could", "Won't")
- Strukturierung der User Stories in funktionale Gruppen
- Sicherheit: Misuse-Stories formulieren
-->
**User-Stories: Personendetails verwalten**

| **ID** | **Als** | **möchte ich** | **so dass** | **Akzeptanz** | **Prioität** |
| :------ | :----- | :------ | :-------- | :------ | :------ |
| 1 | Bürger | möchte ich mich im Bürgeramt melden können | ich in dieser Stadt gemeldet bin | Bürger wird gemeldet | Muss |
| 2 | User | eine Namensänderung beantragen | mein Name im Melderegister korrekt ist | Antrag wird eingereicht | Muss |
| 3 | User | einen Umzug melden | meine Adresse im Melderegister korrekt ist | Daten werden geändert | Muss |
| 4 | User | eine Eheschließung beantragen | mit meinem Partner verheiratet bin | Heirat wird beantragt | Muss |
| 5 | User | eine Scheidung beantragen | nicht mehr mit meinem Partner verheiratet bin | Scheidung wird beantragt | Muss |
| 6 | Angestellter | ausstehende Anträge sehen | ich diese annehmen/ablehnen kann | Anträge werden angezeigt | Muss |
| 7 | Angestellter | einen ausstehenden Antrag annehmen/ablehnen | dieser bearbeitet wurde | Antrag wird angenommen/abgelehnt | Muss |

**User-Stories: Genehmigungen einreichen**

| **ID** | **Als** | **möchte ich** | **so dass** | **Akzeptanz** | **Prioität** |
| :------ | :----- | :------ | :-------- | :------ | :------ |
| 8 | User | Genehmigungen beantragen | diese eingereicht wird | Genehmigung wird eingereicht | Muss |
| 9 | User | meine Genehmigungen sehen | ich weiß welche Genehmigungen angenommen wurden | Genehmigungen werden angezeigt | Muss |
| 10 | Angestellter | ausstehende Genehmigungen sehen | ich diese annehmen/ablehnen kann | Genehmigungen werden angezeigt | Muss |
| 11 | Angestellter | eine ausstehende Genehmigung annehmen/ablehnen | diese bearbeitet wurde | Genehmigung wird angenommen/abgelehnt | Muss |



## Graphische Benutzerschnittstelle
<!--
- GUI-Mockups passend zu User Stories
- Screens mit Überschrift kennzeichnen, die im Inhaltsverzeichnis zu sehen ist
- Unter den Screens darstellen (bzw. verlinken), welche User Stories mit dem Screen abgehandelt werden
- Modellierung der Navigation zwischen den Screens der GUI-Mockups als Zustandsdiagramm
- Mockups für unterschiedliche Akteure
-->
?> Klicke auf die Bilder um sie in voller Größe zu sehen

<div style="display:grid;grid-template-columns: repeat(4, 1fr);grid-template-rows: repeat(6, min-content);text-align:center;grid-column-gap: 5px;grid-row-gap: 5px;">
  <div>Hauptseite des Bürgerbüros</div>
  <div>Neuen Bürger im Melderegister eintragen</div>
  <div>Übersicht über eigene Anträge</div>
  <div>Übersicht über eigene Genehmigungen</div>
  <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_main_page.png" title="Klick mich!" target="_blank" rel="noopener">
    <img src="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_main_page.png">
  </a>
  <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_new_citizen.png" title="Klick mich!" target="_blank" rel="noopener">
    <img src="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_new_citizen.png">
  </a>
  <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_overview_a.png" title="Klick mich!" target="_blank" rel="noopener">
    <img src="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_overview_a.png">
  </a>
  <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_overview_g.png" title="Klick mich!" target="_blank" rel="noopener">
    <img src="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_overview_g.png">
  </a>
  <div>Antrag auf Namensänderung</div>
  <div>Umzug melden</div>
  <div>Eheschließung beantragen</div>
  <div>Scheidung beantragen</div>
  <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_name_change.png" title="Klick mich!" target="_blank" rel="noopener">
    <img src="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_name_change.png">
  </a>
  <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_moving.png" title="Klick mich!" target="_blank" rel="noopener">
    <img src="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_moving.png">
  </a>
  <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_marriage.png" title="Klick mich!" target="_blank" rel="noopener">
    <img src="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_marriage.png">
  </a>
  <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_divorce.png" title="Klick mich!" target="_blank" rel="noopener">
    <img src="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_divorce.png">
  </a>
  <div>Angestellter:<br>offene Anträge</div>
  <div>Angestellter:<br>Antragsdetails</div>
  <div>Angestellter:<br>offene Gemehmigungen</div>
  <div>Angestellter:<br>Genehmigungsdetails</div>
  <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_admin_list_a.png" title="Klick mich!" target="_blank" rel="noopener">
    <img src="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_admin_list_a.png">
  </a>
  <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_admin_single_a.png" title="Klick mich!" target="_blank" rel="noopener">
    <img src="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_admin_single_a.png">
  </a>
  <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_admin_list_g.png" title="Klick mich!" target="_blank" rel="noopener">
    <img src="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_admin_list_g.png">
  </a>
  <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_admin_single_g.png" title="Klick mich!" target="_blank" rel="noopener">
    <img src="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/mockup_admin_single_g.png">
  </a>
</div>


## Datenmodell
<!--
- Begriffe im Glossar darstellen
- Modellierung des physikalischen Datenmodells 
  - RDBMS: ER-Diagramm bzw. Dokumentenorientiert: JSON-Schema
-->
### ER-Modell
![ER-Modell](media/er_modell.png)
### Physisches Datenmodell
![PDM](media/pdm.png)

## Abläufe
<!--
- Aktivitätsdiagramm für den Ablauf sämtlicher Use Cases
- Aktivitätsdiagramme für relevante Use Cases
- Aktivitätsdiagramm mit Swimlanes sind in der Regel hilfreich 
  für die Darstellung der Interaktion von Akteuren der Use Cases / User Stories
- Abläufe der Kommunikation von Rechnerknoten (z.B. Client/Server)
  in einem Sequenz- oder Aktivitätsdiagramm darstellen
- Modellieren Sie des weiteren die Diagramme, die für das (eigene) Verständnis des
  Softwaresystems hilfreich sind. 
-->
### Bürger
Ablauf für Bürger die sich in der Stadt melden, und anschließend für die SmartCity registrieren  
![Ablauf Bürger](media/ablauf_buerger.png ':size=300x450')
### Anträge
Ablauf für das Stellen und bearbeiten von Anträgen  
![Ablauf Anträge](media/ablauf_antraege.png ':size=590x360')
### Genehmigungen
Ablauf für das Beantragen und bearbeiten von Genehmigungen  
![Ablauf Genehmigungen](media/ablauf_genehmigungen.png ':size=395x372')

## Schnittstellen
<!--
- Schnittstellenbeschreibung (API), z.B. mit OpenAPI 
- Auflistung der nach außen sichtbaren Schnittstelle des Microservices. Über welche Schnittstelle kann z.B. der Client den Server erreichen?
- In Event-gesteuerten Systemen ebenfalls die Definition der Ereignisse und deren Attribute
- Aufteilen in Commands, Events, Queries
* Abhängigkeiten: Liste mit Kommunikationsabhängigkeiten zu anderen Microservices
-->

<!-- code images created with https://carbon.now.sh -->
### API
?> Klicke auf die Bilder um sie in voller Größe zu sehen

**Basis - URL:** http://smart.city/microservices/buergerbuero/api

| **Pfad** | **Methode** | **Parameter** | **Resultat** |
| :------ | :----- | :------ | :------ |
| /info/{ID} | GET | ID: eindeutige Bürger-ID | Informationen zu einem einzelnen Bürger<a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/api_bürger_info_single.png" title="Klick mich!" target="_blank" rel="noopener">![Bürger](media/api_b%C3%BCrger_info_single.png)</a> |
| /licenses/{ID} | GET | ID: eindeutige Bürger-ID | Auskunft über alle Lizenzen eines einzelnen Bürger<a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/api_licenses_info.png" title="Klick mich!" target="_blank" rel="noopener">![Bürger](media/api_licenses_info.png)</a> |
| /children/{ID} | GET | ID: eindeutige Bürger-ID | Informationen zu den Kindern des angegebenen Bürgers<a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/api_children.png" title="Klick mich!" target="_blank" rel="noopener">![Kinder](media/api_children.png) |

### Events
?> Klicke auf die Bilder um sie in voller Größe zu sehen

| **Name** | **Beschreibung** | **Payload** |
| :------ | :----- | :----- |  
| About us | wird ausgelöst wenn sich die About-Us-Seite des Bürgerbüros ändern soll | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_about_us.png" title="Klick mich!" target="_blank" rel="noopener">![About us](media/event_about_us.png)</a> |
| Neuer Bürger gemeldet | wird ausgelöst sobald sich ein Bürger bei der Stadt meldet | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_citizen_created.png" title="Klick mich!" target="_blank" rel="noopener">![Bürger erstellt](media/event_citizen_created.png)</a> |
| Namensänderung | wird ausgelöst, wenn ein Bürger seinen Namen änder lässt | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_name_change.png" title="Klick mich!" target="_blank" rel="noopener">![Namensänderung](media/event_name_change.png)</a> |
| Adressänderung | wird ausgelöst, wenn ein Bürger innerhalb der Stadt umzieht | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_address_change.png" title="Klick mich!" target="_blank" rel="noopener">![Adressänderung](media/event_address_change.png)</a> |
| Eheschließung | wird ausgelöst, wenn zwei Bürger heiraten | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_marriage.png" title="Klick mich!" target="_blank" rel="noopener">![Eheschließung](media/event_marriage.png)</a> |
| Scheidung | wird ausgelöst, wenn zwei Bürger sich scheiden lassen | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_divorce.png" title="Klick mich!" target="_blank" rel="noopener">![Scheidung](media/event_divorce.png)</a> |
| Genehmigung ausgestellt | wird ausgelöst, wenn einem Bürger eine Genehmigung ausgestellt wird | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_license_issued.png" title="Klick mich!" target="_blank" rel="noopener">![Genehmigung ausgestellt](media/event_license_issued.png)</a> |
| Genehmigung widerrufen | wird ausgelöst, wenn einem Bürger eine Genehmigung widerrufen wird | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_license_removed.png" title="Klick mich!" target="_blank" rel="noopener">![Genehmigung widerrufen](media/event_license_removed.png)</a> |
| Todesmeldung | wird ausgelöst, wenn ein Bürger stirbt | <a href="https://merlinchiodo.github.io/SmartCity/buergerbuero/media/event_citizen_death.png" title="Klick mich!" target="_blank" rel="noopener">![Todesmeldung](media/event_citizen_death.png)</a> |


### Event-Subscriptions
Events, von anderen Microservices, die das Bürgerbüro auswertet/verarbeitet

| **Service** | **Event** | **Funktion** |
| :------ | :----- | :----- | 
| Amt für Integration | Register New Refugee | Bürger in der Datenbank speichern |
| Amt für Integration | Register New Refugee Family | Bürger in der Datenbank speichern |


## Technische Umsetzung


### Softwarearchitektur
<!---
Darstellung von Softwarebausteinen (Module, Schichten, Komponenten)

Hier stellen Sie die Verteilung der Softwarebausteine auf die Rechnerknoten dar. Das ist die Softwarearchitektur. Zum Beispiel Javascript-Software auf dem Client und Java-Software auf dem Server. In der Regel wird die Software dabei sowohl auf dem Client als auch auf dem Server in Schichten dargestellt.
--->

* **Server**
  * Web-Schicht: **JavaScript Node.js**
  * Logik-Schicht: **JavaScript Express.js**
  * Persistenz-Schicht: **MySQL Datenbank**

* **Client**
  * View-Schicht: **React**
  * Logik-Schicht: **React**
  * Kommunikation-Schicht: **JavaScript Fetch-API**

<!---
Die Abhängigkeit ist bei diesen Schichten immer unidirektional von "oben" nach "unten". Die Softwarearchitektur aus Kapitel "Softwarearchitektur" ist demnach detaillierter als die Systemübersicht aus dem Kapitel "Systemübersicht". Die Schichten können entweder als Ganzes als ein Softwarebaustein angesehen werden. In der Regel werden die Schichten aber noch weiter detailliert und in Softwarebausteine aufgeteilt. 
--->


### Fehlerbehandlung 
<!--
* Mögliche Fehler / Exceptions auflisten
* Fehlercodes / IDs sind hilfreich
* Nicht nur Fehler technischer Art ("Datenbankserver nicht erreichbar") definieren, sondern auch fachliche Fehler wie "Kunde nicht gefunden", "Nachricht wurde bereits gelöscht" o.ä. sind relevant. 
-->
#### API-Aufrufe
<table>
  <thead>
    <tr style="background-color:lightgrey;">
      <th>Methode</th> <th>Route</th> <th>Fehlercode</th> <th>Beschriebung</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color:aliceblue;">
       <td>GET</td><td>/info/{ID}</td><td>401</td><td>Keine Berechtigung diese Daten abzurufen</td>
    </tr>
    <tr style="background-color:aliceblue;">
      <td>GET</td><td>/info/{ID}</td><td>404</td><td>Der angegebene Bürger wurde nicht gefunden</td>
    </tr>
    <tr style="background-color:aliceblue;">
      <td>GET</td><td>/info/{ID}</td><td>500</td><td>Fehler beim Laden der Daten</td>
    </tr>
    <tr style="background-color:bisque;">
      <td>GET</td><td>/licenses/{ID}</td><td>401</td><td>Keine Berechtigung diese Daten abzurufen</td>
    </tr>
    <tr style="background-color:bisque;">
      <td>GET</td><td>/licenses/{ID}</td><td>404</td><td>Der angegebene Bürger wurde nicht gefunden</td>
    </tr>
    <tr style="background-color:bisque;">
      <td>GET</td><td>/licenses/{ID}</td><td>500</td><td>Fehler beim Laden der Daten</td>
    </tr>
    <tr style="background-color:#bbdfbb;">
      <td>GET</td><td>/children/{ID}</td><td>401</td><td>Keine Berechtigung diese Daten abzurufen</td>
    </tr>
    <tr style="background-color:#bbdfbb;">
      <td>GET</td><td>/children/{ID}</td><td>404</td><td>Der angegebene Bürger wurde nicht gefunden</td>
    </tr>
    <tr style="background-color:#bbdfbb;">
      <td>GET</td><td>/children/{ID}</td><td>500</td><td>Fehler beim Laden der Daten</td>
    </tr>
  </tbody>
</table>

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
