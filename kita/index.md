# Kita

**Autor:** Maximilian Hertzke

!> WIP

## Überblick

### Textuelle Beschreibung der Anwendungsdomäne (z.T. veraltet)

Der Kita-Microservice dient als Portal für User der SmartCity, die Betreuung für ihre Kinder suchen. 
- langfristiger Kitaplatz 
- Tages-/Ferienbetreuung (ggf. in anderer Einrichtung)

Dazu können User eine Liste von in der SmartCity registrierten Kitas abrufen, die nach verschiedenen Kriterien durchsuchbar und filterbar ist:
- Umkreis (gut: Straßen mit Map-Einbindung, sonst: Stadtteil)
- Alter d. Kindes
- pädagogischer Schwerpunkt

User können im nächsten Schritt eines ihrer Kinder bei bis zu drei (?) Kitas auf die Warteliste setzen. Dabei können die zur Aufnahme eines Kindes benötigte Dokumente hinterlegt werden, sodass sie im Falle einer Aufnahme direkt der richtigen Kita vorliegen. *(Von Kitas unabhängig verwaltet? Gefahr von Dateninkonsistenz. Problem bei Verwaltung im Service: Einpflegen von Kindern außerhalb des SmartCity-Services)* Die Kita kann nach Abschluss ihres internen Aufnahmeverfahrens eine Anmeldung akzeptieren oder ablehnen.

Zusätzlich können Kitas vorgemerkt werden, um Updates zu erhalten (z.B. Warteliste ist gerade kurz, freie Plätze, andere News der Kita)

EB von Kindern mit Mitgliedschaft in einer Kita können Vorgänge direkt im Kita-Service anstoßen:
- Abmeldung
- Nachricht senden
- Abwesenheit wegen Arztbesuch
- regelmäßige Freistellung (Vereinsmitgliedschaft, Reiten, ...)
- Notfallmeldung mit Relevanz für Kita-Geschäft (z.B. ansteckende Krankheit) (--> anonymisiertes Event an Gesundheitsamt)


Dabei wird eine entsprechend kategorisierte E-Mail an die zuständige(n) Mitarbeiter\*innen der betroffenen Kita gesendet, der restliche Vorgang erfolgt außerhalb des Kita-Services. Beim Senden der Erstnachricht kann ein Anhang im PDF-Format hinzugefügt werden.
Evtl.: Auf der Admin-Seite können allerdings eingegangene Erstnachrichten nachverfolgt werden.

Neben dem Anmeldevorgang per Warteliste können EB akuten Betreuungsbedarf anmelden (separater Vorgang). Amt für Integration oder andere privilegierte Ämter können Anträge auf Betreuungsbedarf mit erhöhter Priorität stellen, die vom Kita-Service auf geeignete Kitas verteilt werden.

Jede registrierte Kita erhält auf dem Service eine standardisierte Möglichkeit zur Selbstdarstellung (Kurzprofil der Kita in der Liste + Detailansicht). Kita-Admin-Kontos können Bild(er) und Beschreibungstext hinzufügen bzw. editieren, die entsprechend auf deren Detailansicht angezeigt werden. Dieser wird auch bei der Stichwortsuche mit einbezogen, sodass User z.B. Kitas mit besonderen Angeboten finden können.

Zu jeder registrierten Kita gehören ein oder mehrere Admin-Kontos, die unabhängig von der User-Datenbank sind. Funktionen auf der Admin-Seite:
- Warteliste verwalten
- Kitaplätze verwalten
- Kita-Kunden (und ihre Kinder), die keine SmartCity-User sind, verwalten
- Selbstdarstellung verwalten
- Hinterlegen von Email-Adressen & Tel. für nichtautomatisierten Kontakt
- Hinterlegen eigener Webpräsenz der Kita
- Einsehen und Ändern administrativer Daten: Kapizität, freie Plätze, auslaufende Mitgliedschaften...
- Hinzufügen von Kindern, deren EB nicht an SmartCity teilnehmen (Anmeldung vor Ort...)
- Busticket für Gruppen anfragen
- Beiträge für Newsletter/Schwarzes Brett verfassen

### Konzeptionelles Analyseklassendiagramm

[![Analyseklassendiagramm](media/analyseklassendiagramm.svg)](https://raw.githubusercontent.com/MerlinChiodo/SmartCity/main/kita/media/analyseklassendiagramm.png)


## Funktionale Anforderungen

### Definition der Akteure
**User:** Erziehungsberechtigte mit SmartCity-Account
- noch nicht Mitglied einer SmartCity-Kita
- nutzt bereits eine oder mehrere Kitas im SmartCity-Verbund

**Verwaltende:** Mitarbeiter\*innen 
- Admin einer Kita-Präsenz
- Verwaltende\*r Mitarbeiter\*in mit eingeschränkten Rechten

**Andere SmartCity-Services**
- Privilegiertes Amt
- (alle Services) --> Datenschutz speziell bei Kindern bedenken, was für Funktionalitäten bleiben übrig?


### Use-Case Diagramme

<!--- 
![Use Case Diagramme](media/usecase_1.png)

![Use Case Diagramme](media/usecase_2.png)
--->
[![Use Case Diagramme](media/usecase_all.svg)](https://merlinchiodo.github.io/SmartCity/kita/media/usecase_all.svg)



## Anforderungen im Detail

### User Stories

**Kita suchen**

| **Als** | **möchte ich** | **so dass** | **Akzeptanz** | **Priorität** |
|---|---|---|---|---|
| User | eine Liste aller Kitas anzeigen | ich einen Überblick über das Angebot erhalte | Kitaliste wird angezeigt | Muss |
| User | die Kitas filtern | ich eine meinen Bedürfnissen entsprechende Kita finden kann | passende Kitaliste wird angezeigt | Muss |
| User | die Kitas nach Stichworten durchsuchen | ich Kitas mit bestimmtem Namen oder Angeboten finden kann | passende Kitaliste wird angezeigt | Sollte |
| User | das Profil einer Kita ansehen | ich bestimmen kann, ob die Kita meinen Anforderungen entspricht | Detailansicht gewählter Kita wird angezeigt | Muss |
| User | eine Kita vormerken | ich die Auswahl eingrenzen kann | Vormerken & rückgängig machen, Liste vorgemerkter Kitas wird angezeigt | Muss |
| User | Updates zu vorgemerkten Kitas erhalten | ich während meiner Entscheidungsfindung über Neuigkeiten informiert werde | Nachricht kann an Newsletter\-Service versandt werden | Kann |

**Kitaplatz erhalten**

| **Als** | **möchte ich** | **so dass** | **Akzeptanz** | **Priorität** |
|---|---|---|---|---|
| User | einen Kitaplatz beantragen | mein Kind betreut wird | Antrag wird gespeichert | Muss |
| User | einen Antrag zurückziehen | ich nicht mehr kontaktiert werde | Antrag wird entfernt | Muss |
| User | Dokumente zur Antragsstellung zentral hinterlegen | ich nicht bei jedem Antrag die gleichen Dateien hochladen muss | PDFs werden gespeichert und der gewählten Kita zugänglich gemacht | Kann |
| User | akuten Betreuungsbedarf anmelden | mein Kind kurzzeitig betreut werden kann | Nachricht mit Terminwünschen wird auf Adminseite angezeigt | Kann |
| Verwalter*in | Anträge bearbeiten | neue Kinder in die Kita aufgenommen werden können | Liste mit Anträgen wird angezeigt, Antrag lässt sich annehmen/ablehnen | Muss |
| Verwalter*in | Kontakt mit Antragstellern aufnehmen | ich offene Fragen zu klären kann | Nachricht lässt sich an Antragsteller*in senden | Sollte |

**Mitgliedschaft verwalten**

| **Als** | **möchte ich** | **so dass** | **Akzeptanz** | **Priorität** |
|---|---|---|---|---|
| User | eine Abwesenheit meines Kindes anmelden | die Kita Bescheid weiß (und ich Geld zurückbekomme?) | Nachricht mit Zeiten und ggf. Anhang wird auf Adminseite angezeigt | Sollte |
| User | eine regelmäßige Freistellung meines Kindes anmelden | die Kita Bescheid weiß (und ich Geld zurückbekomme?) | Nachricht mit Zeiten und ggf. Anhang wird auf Adminseite angezeigt | Sollte |
| User | die Kontaktdaten meiner Kitas einsehen | ich eine E\-Mail senden oder einen Anruf tätigen kann | Kontaktdaten der Kita werden unter "Unsere Kitas" angezeigt | Muss |
| User | meinen Kitaplatz aufgeben | mein Vertrag mit der Kita beendet wird | Verwalter werden unterrichtet und das Kind abgemeldet | Muss |
| Verwalter*in | Nachrichten einsehen | ich Kunden antworten kann | Postfach wird angezeigt | Sollte |
| Verwalter*in | Nachrichten organisieren | wir im Team strukturiert arbeitenkönnen | Nachrichten lassen sich markieren | Kann |
| Verwalter*in | Mitgliedschaften beenden |  Änderungen im System eingepflegt werden | Mitgliedschaft lässt sich beenden und wird nachgehalten | Muss |
| Verwalter*in | Kita-Kunden, die nicht an SmartCity teilnehmen, einpflegen | unsere Kita alle Kunden zentral verwalten kann| Kunden lassen sich unabhängig von SmartCity-Account in DB einpflegen und verwalten | Sollte

**Kitadaten verwalten**

| **Als** | **möchte ich** | **so dass** | **Akzeptanz** | **Priorität** |
|---|---|---|---|---|
| Verwalter*in | Profilinformationen meiner Kita bearbeiten | die Informationen im Kita\-Service aktuell bleiben | Kita\-Profildaten lassen sich bearbeiten | Muss |
| Verwalter*in | Profilbilder meiner Kita bearbeiten | die Kita einladend präsentiert wird | Kita\-Bilder lassen sich hinzufügen und entfernen | Sollte |
| Verwalter*in | administrative Daten einsehen | freie und belegte Plätze schnell ersichtlich sind | Platzzustand wird aus Datenbank berechnet | Sollte |
| Verwalter*in | Nachrichten an an Kunden und Vormerker senden  | sie über Vorgänge informiert werden können | Nachricht an User senden | Sollte |
| Verwalter*in | Nachrichten an den Newsletter senden | die Öffentlichkeit über meine Kita informiert und Werbung gemacht wird | Nachricht an Newsletter\-Service senden | Kann |

**Mit Services kooperieren**

| **Als** | **möchte ich** | **so dass** | **Akzeptanz** | **Priorität** |
|---|---|---|---|---|
| Verwalter*in | Bustickets für Gruppen beantragen | Ausflüge mit Kindern gemacht werden können | Antrag auf Busticket an Bus\-Service, Verarbeitung der Rückmeldung | Sollte |
| Verwalter*in | Tierbesuche anmelden | Kinder vor Ort Kontakt mit Tieren haben können | Antrag beim Tierheim, Verarbeitung der Rückmeldung | Sollte |
| Verwalter*in | Besuche im Tierheim anmelden | Ausflüge ins Tierheim organisiert werden können | Antrag beim Tierheim, Verarbeitung der Rückmeldung | Sollte |

**Kitas Administrieren**

| **Als** | **möchte ich** | **so dass** | **Akzeptanz** | **Priorität** |
|---|---|---|---|---|
| Admin | Kita\-Accounts hinzufügen oder deaktivieren | um Kita\-Mitarbeitenden zu unterstützen | Verwaltungsaccounts können erstellt und deaktiviert werden | Muss |
| Admin  | Kitas in der Datenbank hinzufügen oder entfernen | das Angebot in der SmartCity aktuell reflektiert wird | Kitas können in Datenbank gepflegt werden | Sollte |

**Misuse Stories**
...



## Graphische Benutzerschnittstelle
### GUI-Mockups
<!--- 
- Screens mit Überschrift kennzeichnen, die im Inhaltsverzeichnis zu sehen ist
- Unter den Screens darstellen (bzw. verlinken), welche User Stories mit dem Screen abgehandelt werden
- Modellierung der Navigation zwischen den Screens der GUI-Mockups als Zustandsdiagramm
- Mockups für unterschiedliche Akteure
--->

[![GUI-Mockups](media/gui_mockups.svg)](https://merlinchiodo.github.io/SmartCity/kita/media/gui_mockups.svg)


## Datenmodell 
### ER-Diagramm

<!---
- Begriffe im Glossar darstellen
- Modellierung des physikalischen Datenmodells 
  - RDBMS: ER-Diagramm bzw. Dokumentenorientiert: JSON-Schema
  --->
  
[![ER-Diagramm](media/ERM.svg)](https://merlinchiodo.github.io/SmartCity/kita/media/ERM.svg)

## Abläufe

<!---
- Aktivitätsdiagramm für den Ablauf sämtlicher Use Cases
- Aktivitätsdiagramme für relevante Use Cases
- Aktivitätsdiagramm mit Swimlanes sind in der Regel hilfreich 
  für die Darstellung der Interaktion von Akteuren der Use Cases / User Stories
- Abläufe der Kommunikation von Rechnerknoten (z.B. Client/Server)
  in einem Sequenz- oder Aktivitätsdiagramm darstellen
- Modellieren Sie des weiteren die Diagramme, die für das (eigene) Verständnis des
  Softwaresystems hilfreich sind. 
--->


[![Aktivitätsdiagramm Kitaplatz beantragen](media/activity_kitaplatzbeantragen.png)](https://merlinchiodo.github.io/SmartCity/kita/media/activity_kitaplatzbeantragen.png)

[![Aktivitätsdiagramm Busticket beantragen](media/activity_busticket.png)](https://merlinchiodo.github.io/SmartCity/kita/media/activity_busticket.png)


## Schnittstellen

### APIs
!> WIP: unvollständig
#### Private
| **Methode** | **Name** | **Parameter** | **Resultat** |
| :------ | :----- | :------ | :------ |
| POST | createApplication() | int id_einrichtung, int id_kind, int id_ezb, date datum, int priority, str status | response status code |
| GET | getApplications() | int id_ezb | return alle aktuellen Anträge des Users |
| DELETE | deleteApplication() | int id_antrag, int id | Antrag wird gelöscht |
| POST | createContract() | int id_einrichtung, int id_kind, int id_ezb, (date beginn), (date ende), int betreuungsstunden | Neuer Vertrag wird angelegt |
| GET | getContractsUser() | int id_ezb | return alle aktuellen Verträge des Users |
| GET | getContractsKita() | int id_kita | return alle aktuellen Verträge der Kita |
| PATCH | terminateContract() | int id_vertrag, date ende | Enddatum des Vetrags wird verändert |

| | | | |
| PUT | addKitaToWatchlist() | int id_ezb, int id_einrichtung | Kita wird den vorgemerkten Kitas des Users hinzugefügt |
| PATCH | removeKitaFromWatchlist() | int id_ezb, int id_einrichtung | Kita wird aus den vorgemerkten Kitas des Users entfernt | 



#### Public
...




- Auflistung der nach außen sichtbaren Schnittstelle des Microservices. Über welche Schnittstelle kann z.B. der Client den Server erreichen?
- In Event-gesteuerten Systemen ebenfalls die Definition der Ereignisse und deren Attribute
- Aufteilen in Commands, Events, Queries
- Abhängigkeiten: Liste mit Kommunikationsabhängigkeiten zu anderen Microservices


**Beispiel:**

### URL

http://smart.city/microservices/kita

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

<!---
- Bürgerbüro: vermutlich starke Abhängigkeit, benötige sicheren Zugriff auf persönliche Daten aus der Datenbank des Bürgerbüros
- Bus-Service: schwache Abhängigkeit, benötige Beantragung von Gruppentickets durch Verwaltungsmitarbeiter\*innen
- Amt für Integration: schwache Abhängigkeit, biete Beantragung von Kita-Plätzen mit Unterstützung durch das AfI (z.B. Geflüchtete) mit erhöhter Priorität
- Newsletter: schwache Abhängigkeit, biete Inhalte für Newsletter & Schwarzes Brett


Aus Meeting:
- Jonathan erhält von mir Zugangsschlüssel mit sehr hohen Rechten (darf immer Userdaten abfragen etc.)
- Userdaten: ich speichere bei SmartCity-Mitgliedern nur die user_id und frage alles andere beim BB ab
- falls Familienrelation seitens BB nicht funktioniert: Eltern geben Kindesdaten selbst ein, ich prüfe beim BB ob das Kind dort vorhanden ist und EZB-Frage muss (imaginär) von Kitamitarbeitenden geklärt werden
- bei allen Elementen, wo eine Liste mehrerer User angezeigt wird, Loading spinner implementieren da Ladezeiten länger werden könnten
--->

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

* Frontend: Vue.js
* Backend: Express.js + Node.js, Multer
* Datenbank: mySQL
