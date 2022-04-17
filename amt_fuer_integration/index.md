# Amt für Integration

**Autor:** Jannis Thiel

## Überblick
Wegen Krieg und Verfolgung flüchten viele Menschen aus ihrer Heimat und kommen zu uns.
Wir versuchen die Geflüchteten ab ihrer Ankunft bestmöglich zu unterstützen und ihren 
Integrationsprozess zu begleiten. Dabei sollen bürokratischen Hürden überwunden werden,
um schnelle, flexible Hilfe gewährleisten.<br>
<br>
Die Gefüchteten können sich und ihre Familie bei der Ankunft digital mit ihren Dokumenten anmelden. 
Bei diesem Event werden ihnen eine geeigente Unterkunft/Wohnung zugewiesen, sowie ein QR-Code mit 
dem sie Zugang zur Unterkunft haben. Dieser wird ihnen direkt als Download zur Verfügung gestellt.<br>
Des Weiteren können sich die Flüchtlinge mit dem QR-Code Ausweisen. Dadurch können andere Einrichtungen ihren Status abfragen.
Mit dem QR-Code können Geflüchtete kostenlos mit öffentlichen Verkehrsmittel fahren, sowie an Freitzeitaktivitäten 
teilnehmen, wie beispielsweise im Fitnessstudio.<br>
Als weiterer digitaler Service bieten wir die Beantragung der Unterbringung von Kindern in der Kita an.<br>
Neben den dititalen Lösungen besteht auch die Möglichkeit der Kontaktaufnahme vor Ort.
Dazu sind alle Informationen auf der Website aufgeführt.<br>
Bürger können einen Beitrag leisten, indem sie Wohnraum zur Verfügung stellen oder spenden.<br>
Wichtige Informationen für Bürger werden regelmäßig im Newsletter veröffentlicht.

![](media/Analyseklassendiagramm.png) <!-- Analyseklassendiagramm -->

## Funktionale Anforderungen
### Akteure
| **Akteur** | **Definition**  |
| :-------: | :------- |
| User | jeder Nutzer der den Service nutzt, also den digitalen Auftritt des Amt für Integration aufruft |
| Mitarbeiter | Angestellter beim Amt für Integration |
| Bürger | gemeldete Person in unserer Stadt |
| Flüchtling | Geflüchtete Person mit Auftenhaltsgenehmigung/Fiktionsbescheinigung, die in unserer Stadt integriert wird |
| Kita-Verwaltung | verwaltet alle Kitas in der Stadt |
| Stadtbus | öffentliches Verkehrssystem in der Stadt |
| Fitnessstudio | - |
| Bürgerbüro | Amt das sich primär um die Meldung von Bürgern kümmert |

### Use-Case Diagramme

#### Verwaltung
![](media/usecase/Verwaltung.png) <!-- Use Case Verwaltung -->

#### Anmeldevorgang
![](media/usecase/Anmeldevorgang.png) <!-- Use Case Anmeldevorgang -->

#### Integration mit Portal
![](media/usecase/Integration_mit_Portal.png) <!-- Use Case Integration mit Portal -->

#### Datenabfrage
![](media/usecase/Datenabfrage.png) <!-- Use Case Datenabfrage -->

## Anforderungen im Detail
### Anmeldevorgang
| **ID** | **Als** | **möchte ich** | **so dass** | **Akzeptanz** | **Priorität** |
| :----: | :------ | :------------- | :---------- | :------------ | :-----------: |
| 1  | Flüchtling | mich Anmelden | um gemeldet zu sein und Zugang zum Portal zu bekommen | Relevante Meldedaten werden ans Bürgerbüro weitergeleitet | Must |
| 2  | Flüchtling | Informationen zum Kontakt mit dem Amt für Integration finden | ich Hilfe auch vor Ort oder per Telefon bekomme | Informationen werden im Service angezeigt | Must |
| 3  | Flüchtling | einen QR-Code ausgestellt bekommen | diesen Nutzen kann | QR-Code bereitgestellt | Must |
| 4  | Flüchtling | meinen QR-Code downloaden | ich ihn auf meinen Geräten speichern kann | QR-Code steht zum Download bereit | Must |
| 4  | Flüchtling | meinen QR-Code drucken | ich ihn habe (falls ich kein mobiles Endgerät besitze) | QR-Code steht zum Drucken bereit | Must |
| 6  | Flüchtling | meinen QR-Code aufrufen können | ihn jederzeit wieder downloaden oder drucken kann | QR-Code steht zum Drucken bereit | Must |
| 7  | Flüchtling | neuen QR-Code beantragen | falls ich den alten verloren habe | QR-Code steht zum Drucken/Download bereit | Could |
| 8  | Flüchtling | eine Unterkunft bekommen | ich dort leben kann | Flüchtling bekommt Unterkunft zugewiesen | Must |
| 9  | Flüchtling | mich mit meinem QR-Code ausweisen können | öffentliche Verkehrsmittel oder Freitzeitangebote zu nutzen | Wert des QR-Code ist ein individueller Code der zur Abfrage genutzt werden kann | Must |
| 10 | Flüchtling | mit meinem QR-Code die Unterkunft öffnen | ich Zugang zur Unterkunft habe | QR-Code-Wert bei der Unterkunft hinterlegt | Must |
| 11 | Flüchtling | nicht mit meinem QR-Code andere Unterkünfte öffnen | ich sie berauben kann | QR-Code nur einer Unterkunft zugwiesen | Must |

### Integration mit Portal
| **ID** | **Als** | **möchte ich** | **so dass** | **Akzeptanz** | **Priorität** |
| :----: | :------ | :------------- | :---------- | :------------ | :-----------: |
| 12 | Flüchtling | die Unterbringung meines Kindes in der Kita beantragen | mein Kind in die Kita gehen kann | Betantragung im Service möglich | Must |
| 13 | Bürger | Geld spenden | um Flüchtlinge zu unterstüzten | Spenden-Funktionalität bereitgstellt | Must |
| 14 | Bürger | nicht, das meine Zahlungsdaten öffentlich gemacht werden | die Daten missbraucht werden können | Externer Anbieter mit exellenter Sicherheit durch jahrelanger Erfahrung | Must |
| 15 | Bürger | Wohnraum bereitstellen | um Flüchtlinge zu helfen | Formular zum Eintragen von zur Verfügung gestellten Wohnraum | Should |
| 16 | Bürger | im Portal einloggen | ich Geld spenden oder Wohnraum bereitstellen kann | Link zum Portal | Must |
| 17 | Finanzamt | Informationen zu Spende eines Bürger bekommen | dies steuerlich gelten machen kann und Spendenquittungen ausstellen kann | entsprechendes Event wird getriggert beim Eingang einer neuen Spenden und Informationen werden ausgetauscht | Must |
| 18 | Kita-Verwaltung | Benachritgung über Bewerbung eines Kita-Platzes bekommen | ich dieses bearbeiten kann | Event wird bereitgesteltl | Must |

### Datenabfrage
| **ID** | **Als** | **möchte ich** | **so dass** | **Akzeptanz** | **Priorität** |
| :----: | :------ | :------------- | :---------- | :------------ | :-----------: |
| 19 | Fitnesstudio | den Flüchtlingsstatus abfragen | diese kostenlos mein Angebot nutzen können | Abfrage ist über Events bereitgestellt | Must |
| 20 | Busunternehmen | den Flüchtlingsstatus abfragen | diese kostenlos mein Angebot nutzen können | Abfrage ist über Events bereitgestellt | Must |

### Verwaltung
| **ID** | **Als** | **möchte ich** | **so dass** | **Akzeptanz** | **Priorität** |
| :----: | :------ | :------------- | :---------- | :------------ | :-----------: |
| 21 | Mitarbeiter | Informationen an den Newsletter schicken | Bürger informiert werden können | Event  | Must |
| 22 | Mitarbeiter | Informationen auf der Landing-Page updaten | um ggf. Änderungen vorzunehmen | Event | Must |
| 23 | Mitarbeiter | mich im Mitarbeiterbereich einloggen | um meine Aufgaben zu erledigen | Login für Mitarbeiter | Must |
| 24 | Mitarbeiter | mich im Mitarbeiterbereich ausloggen | keinen unbefugten Zugriff gibt | Logout für Mitarbeiter | Must |
| 25 | Mitarbeiter | Wohnraum einsehen | ich diesen bearbeiten kann | Wohnraumauflistung im Mitarbeiterbereich mit Bearbeitungsfunktion | Could |
| 26 | Mitarbeiter | neuen Wohnraum hinzufügen | ich neuen Wohnraum in Datenbank aufnehmen kann | Wohnraum kann hinzugefügt werden | Could |

### User Interface
| **ID** | **Als** | **möchte ich** | **so dass** | **Akzeptanz** | **Priorität** |
| :----: | :------ | :------------- | :---------- | :------------ | :-----------: |
| 27 | User | den Service vom PC aufrufen können | ich eine gute User Expericence habe | Responsive Design | Must |
| 28 | User | den Service vom mobilen Endgerät aufrufen können | ich eine gute User Expericence habe | Responsive Design | Must |
| 29 | User | Dark oder White-Mode einstellen | ich eine gute User Expericence habe | Dark-Mode toggle, am Start auf Systempräferenz eingestellt | Must |

## Graphische Benutzerschnittstelle

## Datenmodell

### ER-Modell
![](media/datamodel/ER.png) <!-- data model ER -->

### Physischen Datenmodell
![](media/datamodel/PDM.png) <!-- data model PDM -->

## Abläufe

### Informationen veröffentlichen
![](media/uml_activity/InfoLandingPage.png) <!-- uml-activity information landing page -->
![](media/uml_activity/InfoNewsletter.png) <!-- uml-activity infomation newsletter -->

### Anmeldung Mitarbeiterseite
![](media/uml_activity/Login_Mitarbeiter.png) <!-- uml-activity employee login -->

### Wohnraum verwalten
![](media/uml_activity/Wohnraum_verwalten.png) <!-- uml-activity Wohnraum verwalten -->

### Anmelden digital beim Amt
![](media/uml_activity/AnmeldungF.png) <!-- uml-activity Anmelden digital beim Amt -->

### Wohnraum bereitstellen
![](media/uml_activity/Wohnraum.png) <!-- uml-activity Wohnraum bereitstellen -->

### Spenden
![](media/uml_activity/Donation.png) <!-- uml-activity Spenden -->

### Anmeldung im Portal
![](media/uml_activity/AnmeldungP.png) <!-- uml-activity Anmeldung im Portal -->

### Kita-Platz beantragen
![](media/uml_activity/Antrag_Kita.png) <!-- uml-activity Kita-Platz beantragen -->

### neuen QR-Code erstellen
![](media/uml_activity/neuerQR.png) <!-- uml-activity neuer QR-Code erstellen -->

### Abfrage Flüchtlingsstatus
![](media/uml_activity/Datenabfrage.png) <!-- uml-activity Abfrage Flüchtlingsstatus -->

## Schnittstellen

### URL

http://smart.city/microservices/integration <!--- TODO replace --->

### Private Schnittstellen
#### Commands 

**Asynchronous**

| **Name** | **Parameter** | **Resultat** |
| :------ | :----- | :------ |
| createRefugee() | RefugeeData d | Refugee r |
| assignHousing() | Refugee \[\] list | Boolean b |
| createHousing() | HousingData d | Housing h |
| createQRCode()  | Refugee r | QRCode c |


#### Queries

| **Name** | **Parameter** | **Resultat** |
| :------ | :----- | :------ |
| getRefugee() | String hash | Refugee r |
| getHousings() | - | Housing \[\] list |

### Öffentliche Schnittstellen

#### Events
**Integration event channel**

| **Name** | **Payload** | 
| :------ | :----- | 
| public.integration | - |
| private.integration | - |

**Bürgerbüro event channel**

| **Name** | **Payload** | 
| :------ | :----- | 
| private.bürgerbüro | {<br>"event_id": 9000,<br>"event_name":"Register New Refugee",<br>"service_name": "integration",<br>"refugee": {<br>&emsp;"firstname": "John",<br>&emsp;"lastname": "Doe",<br>&emsp;"date of birth": "12.08.2000",<br>&emsp;"email": "john@doe.com",<br>&emsp;}<br> } |
| private.bürgerbüro | {<br>"event_id": 9001,<br>"event_name":"Register New Refugee Familie",<br>"service_name": "integration",<br>"parents": \[ {<br>&emsp;"firstname": "John",<br>&emsp;"lastname": "Doe",<br>&emsp;"date of birth": "12.08.2000",<br>&emsp;"email": "john@doe.com",<br>&emsp;},<br>&emsp;{<br>&emsp;"firstname": "John",<br>&emsp;"lastname": "Doe",<br>&emsp;"date of birth": "12.08.2000",<br>&emsp;"email": "john@doe.com",<br>&emsp;} \],<br>"children": \[ {<br>&emsp;"firstname": "John",<br>&emsp;"lastname": "Doe",<br>&emsp;"date of birth": "12.08.2000",<br>&emsp;"email": "john@doe.com",<br>&emsp;},<br>&emsp;{<br>&emsp;"firstname": "John",<br>&emsp;"lastname": "Doe",<br>&emsp;"date of birth": "12.08.2000",<br>&emsp;"email": "john@doe.com",<br>&emsp;} \],<br> } |

**Kita-Application event channel**

| **Name** | **Payload** | 
| :------ | :----- | 
| private.kita | {<br>"event_id": 9000,<br>"event_name":"Refugee Kita Application",<br>"service_name": "integration",<br>"care_time": 35,<br>"child": { "id_citizien": 928349823 },<br>"parent": \[{ "id_citizien": 928349823 }, { "id_citizien": 928349823 }, \]<br>} |

**Finanzamt event channel**

| **Name** | **Payload** | 
| :------ | :----- | 
| private.finanzamt | {<br>"event_id": 9000,<br>"event_name": "Notify Incoming Donation",<br>"amount": 50.45,<br>"citizen_id": 932849834<br>} |

**Newsletter event channel**

| **Name** | **Payload** | 
| :------ | :----- | 
| public.newsletter | {<br>"event_id": 9000,<br>"event_name": "New Newsletter Post",<br>"title": "xyz",<br>"text_short": "foo",<br>"text_long": "foo bar long",<br>"date": DD.MM.YYYY (optional),<br>} |

**Landing Page event channel**

| **Name** | **Payload** | 
| :------ | :----- | 
| public.landingpage | {<br>"event_id": 9000,<br>"event_name": "Update About Us",<br>"service_name": "integration", "date": DD.MM.YYYY,<br>"about_us": "about us foo bar text .. ",<br>"picture": "https://google.de/picture1",<br>} |

#### Queries

| **Name** | **Method** | **URL** | **Parameter** | **Response Example** | **Response Type** |
| :------ | :----- | :------ | :------ | :------ | :------ |
| Refugee status  | GET | api/refugee/:hash/status | String hash | { "status": true } | json |

### Dependencies

#### RPC

| **Service** | **Funktion** |
| :------ | :----- | 
| SmartAuth | authenticateUser() |
| SmartAuth | authenticateEmployee() |

#### Event-Subscriptions

| **Service** | **Funktion** |
| :------ | :----- | 
| - | - |