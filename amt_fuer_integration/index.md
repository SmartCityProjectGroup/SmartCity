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
| 1  | Flüchtling | mich Anmelden | um gemeldet zu sein und Zugang zum Portal zu bekommen | Relevante Meldedaten werden ans Bürgerbüro weitergeleitet + Anmeldefunktion bereitgestellt | Must |
| 2  | Flüchtling | Informationen zum Kontakt mit dem Amt für Integration finden | ich Hilfe auch vor Ort oder per Telefon bekomme | Informationen werden im Service angezeigt | Must |
| 3  | Flüchtling | einen QR-Code ausgestellt bekommen | diesen Nutzen kann | QR-Code bereitgestellt | Must |
| 4  | Flüchtling | meinen QR-Code downloaden | ich ihn auf meinen Geräten speichern kann | QR-Code steht zum Download bereit | Must |
| 5  | Flüchtling | meinen QR-Code drucken | ich ihn habe (falls ich kein mobiles Endgerät besitze) | QR-Code steht zum Drucken bereit | Must |
| 6  | Flüchtling | eine Unterkunft bekommen | ich dort leben kann | Flüchtling bekommt Unterkunft zugewiesen | Must |
| 7  | Flüchtling | mich mit meinem QR-Code ausweisen können | öffentliche Verkehrsmittel oder Freitzeitangebote zu nutzen | Wert des QR-Code ist ein individueller Code der zur Abfrage genutzt werden kann | Must |
| 8  | Flüchtling | mit meinem QR-Code die Unterkunft öffnen | ich Zugang zur Unterkunft habe | QR-Code-Wert bei der Unterkunft hinterlegt | Must |
| 9  | Flüchtling | nicht mit meinem QR-Code andere Unterkünfte öffnen | ich sie berauben kann | QR-Code nur einer Unterkunft zugwiesen | Must |

### Integration mit Portal
| **ID** | **Als** | **möchte ich** | **so dass** | **Akzeptanz** | **Priorität** |
| :----: | :------ | :------------- | :---------- | :------------ | :-----------: |
| 10 | Flüchtling | meinen QR-Code aufrufen können | ihn jederzeit wieder downloaden oder drucken kann | QR-Code steht zum Drucken bereit | Must |
| 11 | Flüchtling | neuen QR-Code beantragen | falls ich den alten verloren habe | QR-Code steht zum Drucken/Download bereit | Could |
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

### Desktop
[User Story 27, 29](#user-interface)
#### Home
[User Story 2](#anmeldevorgang-1)
![](media/mockups/desktop/Desktop_Home.png) <!-- desktop home -->

#### Anmeldevorgang
[User Story 1](#anmeldevorgang-1)
![](media/mockups/desktop/DesktopAnmeldung1.png) <!-- desktop anmeldung -->

[User Story 1](#anmeldevorgang-1)
![](media/mockups/desktop/DesktopAnmeldung2.png) <!-- desktop anmeldung -->

[User Story 1, 3](#anmeldevorgang-1)
![](media/mockups/desktop/DesktopAnmeldung3.png) <!-- desktop anmeldung -->

[User Story 1, 3, 4, 5](#anmeldevorgang-1)
![](media/mockups/desktop/DesktopAnmeldung5.png) <!-- desktop anmeldung -->

[User Story 1, 2](#anmeldevorgang-1)
![](media/mockups/desktop/DesktopAnmeldung4.png) <!-- desktop anmeldung -->

#### New QR Code - LoggedIn
[User Story 10, 11](#integration-mit-portal-1)
![](media/mockups/desktop/DesktopLoggedInNewQR-Code.png) <!-- desktop new qr-code -->

#### Kita - LoggedIn
[User Story 12](#integration-mit-portal-1)
![](media/mockups/desktop/DesktopLoggedInKita1.png) <!-- desktop kita -->
![](media/mockups/desktop/DesktopLoggedInKita2.png) <!-- desktop kita -->

#### Spenden - LoggedIn
[User Story 13](#integration-mit-portal-1)
![](media/mockups/desktop/DesktopLoggedInDonation1.png) <!-- desktop donation -->
![](media/mockups/desktop/DesktopLoggedInDonation2.png) <!-- desktop donation -->
![](media/mockups/desktop/DesktopLoggedInDonation3.png) <!-- desktop donation -->

#### Wohnraum - LoggedIn
[User Story 15](#integration-mit-portal-1)
![](media/mockups/desktop/DesktopLoggedInHousing1.png) <!-- desktop housing -->
![](media/mockups/desktop/DektopLoggedInHousing2.png) <!-- desktop housing -->

#### Login/Logout
[User Story 16](#integration-mit-portal-1)
![](media/mockups/desktop/Logout.png) <!-- desktop logout -->

#### Mitarbeiter Login
[User Story 23](#verwaltung-1)
![](media/mockups/desktop/DesktopMitarbeiterLogin.png) <!-- desktop employee login -->

#### Mitarbeiter Home/Logout
[User Story 24](#verwaltung-1)
![](media/mockups/desktop/DesktopMitarbeiterHome.png.png) <!-- desktop employee home/logout -->

#### Mitarbeiter Newsletter
[User Story 21](#verwaltung-1)
![](media/mockups/desktop/DesktopMitarbeiterPublischNewsletter.png) <!-- desktop newsletter -->

#### Mitarbeiter About Us
[User Story 22](#verwaltung-1)
![](media/mockups/desktop/DesktopMitarbeiterEditAboutUs.png) <!-- desktop about us -->

#### Mitarbeiter Wohnraum einsehen
[User Story 25](#verwaltung-1)
![](media/mockups/desktop/DesktopMitarbeiterHousing1.png) <!-- desktop housing -->

#### Mitarbeiter Wohnraum hinzufügen
[User Story 26](#verwaltung-1)
![](media/mockups/desktop/DesktopHousing2.png) <!-- desktop housing -->

### Mobile
[User Story 27, 29](#user-interface)

#### Home
![](media/mockups/mobile/MobileHome.png) <!-- mobile -->
![](media/mockups/mobile/MobileNav.png) <!-- mobile -->

#### Anmeldevorgang
![](media/mockups/mobile/MobileAnmeldung1.png) <!-- mobile -->
![](media/mockups/mobile/MobileAnmeldung2.png) <!-- mobile -->
![](media/mockups/mobile/MobileAnmeldung3.png) <!-- mobile -->
![](media/mockups/mobile/MobileAnmeldung4.png) <!-- mobile -->

#### LoggedIn
![](media/mockups/mobile/MobileLoggedIn.png) <!-- mobile -->
![](media/mockups/mobile/MobileLoggedInNav.png) <!-- mobile -->

#### Spenden
![](media/mockups/mobile/MobileLoggedInDonation.png) <!-- mobile -->
![](media/mockups/mobile/MobileLoggedInDonation2.png) <!-- mobile -->
![](media/mockups/mobile/MobileLoggedInDonation3.png) <!-- mobile -->

#### Wohnraum
![](media/mockups/mobile/MobileLoggedInHousing1.png) <!-- mobile -->
![](media/mockups/mobile/MobileLoggedInHousing2.png) <!-- mobile -->

#### Kita
![](media/mockups/mobile/MobileLoggedInnKita1.png) <!-- mobile -->
![](media/mockups/mobile/MobileLoggedInKita2.png) <!-- mobile -->

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

#### Rest
| **Name** | **Method** | **URL** | **Request**| **Response** |
| :------ | :----- | :------ | :------ | :------ |
| Register New Refugee | POST | api/private/refugee/register | {<br>"firstname": "John",<br>"lastname": "Doe",<br>"date_of_brith": "2000-01-01T00:00:00Z",<br>"email": "johndoe@gmail.com",<br>"phone": "555888" (optional),<br>"nationality": "Germany" (optional),<br>"language": "german" (optional),<br>"document": "testbuffer" (optional)<br>} | {<br>"firstname": "John",<br>"lastname": "Doe",<br>"date_of_brith": "2000-01-01T00:00:00Z",<br>"email": "johndoe@gmail.com",<br>"phone": "555888" (optional),<br>"nationality": "Germany" (optional),<br>"language": "german" (optional),<br>"document": "testbuffer" (optional),<br>"qr_code": "John.Doe.23984-9384",<br>"housing_id": 4<br>} |
| Register New Refugee Family | POST | api/private/refugee/registerFamily | {<br>"parents": \[<br>{<br>"firstname": "John",<br>"lastname": "Doe",<br>"date_of_brith": "2000-01-01T00:00:00Z",<br>"email": "johndoe@gmail.com",<br>"phone": "555888" (optional),<br>"nationality": "Germany" (optional),<br>"language": "german" (optional),<br>"document": "testbuffer" (optional)<br>}<br> ... \],<br>children: \[<br>{<br>"firstname": "John",<br>"lastname": "Doe",<br>"date_of_brith": "2000-01-01T00:00:00Z",<br>"email": "johndoe@gmail.com",<br>"phone": "555888" (optional),<br>"nationality": "Germany" (optional),<br>"language": "german" (optional),<br>"document": "testbuffer" (optional)<br>}<br> ... \]} | {<br>"parents": \[<br>{<br>"firstname": "John",<br>"lastname": "Doe",<br>"date_of_brith": "2000-01-01T00:00:00Z",<br>"email": "johndoe@gmail.com",<br>"phone": "555888" (optional),<br>"nationality": "Germany" (optional),<br>"language": "german" (optional),<br>"document": "testbuffer" (optional),<br>"qr_code": "John.Doe.234234-23424",<br>"housing_id": 5<br>}<br> ... \],<br>children: \[<br>{<br>"firstname": "John",<br>"lastname": "Doe",<br>"date_of_brith": "2000-01-01T00:00:00Z",<br>"email": "johndoe@gmail.com",<br>"phone": "555888" (optional),<br>"nationality": "Germany" (optional),<br>"language": "german" (optional),<br>"document": "testbuffer" (optional),<br>"qr_code": "John.Doe.234-234",<br>"housing_id": 5<br>}<br> ... \]} |
| New Donation | POST | api/private/donation | {<br>"amount": 100.0,<br>"citizen_id": "2398492" (optional)<br>} | {<br>"id": 1,<br> "amount": 100.0,<br>"citizen_id": "2398492" (optional)<br>} |
| New Kita Application | POST | api/private/kita | {<br>"date": "2000-01-01T00:00:00Z",<br>"care_time": 40,<br>"child":<br>{<br>"citizen_id: 12345,<br>"refugee_id": 45678<br>},<br>"parent":<br>{<br>"citizen_id": 44345,<br>"refugee_id": 423444<br>},<br>} | {<br>"id": 1,<br> "date": "2000-01-01T00:00:00Z",<br>refugee_id: "45678" <br>} |
| New Post | POST | api/private/post | {<br>"title": "text",<br>"text": "testtext",<br>"picture": "http://testurl.de" (optional),<br>"date": "2000-01-01T00:00:00Z",<br>"employee_id": "2398492"<br>} | {<br>"id": 1,<br>"title": "text",<br>"text": "testtext",<br>"picture": "http://testurl.de" (optional),<br>"date": "2000-01-01T00:00:00Z",<br>"employee_id": "2398492"<br> } |
| New Housing | POST | api/private/housing | {<br>"housing":<br>{<br>"housing_type": "C117",<br>"people_assigned": 0,<br>"people_limit": 4,<br>"size": 80.0,<br>"shared_bathroom": true (optional),<br>"rooms": 3 (optional),<br>"rent": 0.0,<br>"info": "additional info" (optional),<br>"citizen_id": 234565 (optional)<br>},<br>"address:<br>{<br>"house_number": 5,<br> "street":"Musterweg",<br>"city_code": 12334<br>},<br>}| {<br>"id": 1,<br>"housing_type": "C117",<br>"people_assigned": 0,<br>"people_limit": 4,<br>"size": 80.0,<br>"shared_bathroom": true (optional),<br>"rooms": 3 (optional),<br>"rent": 0.0,<br>"info": "additional info" (optional),<br>"citizen_id": 234565 (optional),<br>"address_id": 22<br>} |
| Get All Housing | GET | api/private/housing | - | ArrayList of all Housings | 
| Get Housing | GET | api/private/housing/:id | - | {<br>"id": 1,<br>"housing_type": "C117",<br>"people_assigned": 0,<br>"people_limit": 4,<br>"size": 80.0,<br>"shared_bathroom": true (optional),<br>"rooms": 3 (optional),<br>"rent": 0.0,<br>"info": "additional info" (optional),<br>"citizen_id": 234565 (optional),<br>"address_id": 22<br>} |
| Update Housing | PUT | api/private/housing/:id | {<br>"housing_type": "C117" (optional),<br>"people_assigned": 0 (optional),<br>"people_limit": 4(optional),<br>"size": 80.0 (optional),<br>"shared_bathroom": true (optional),<br>"rooms": 3 (optional),<br>"rent": 0.0 (optional),<br>"info": "additional info" (optional),<br>"citizen_id": 234565 (optional),<br>"address_id": 22 (optional)<br>} | {<br>"housing_type": "C117" (optional),<br>"people_assigned": 0 (optional),<br>"people_limit": 4(optional),<br>"size": 80.0 (optional),<br>"shared_bathroom": true (optional),<br>"rooms": 3 (optional),<br>"rent": 0.0 (optional),<br>"info": "additional info" (optional),<br>"citizen_id": 234565 (optional),<br>"address_id": 22 (optional)<br>} |
| Delete Housing | DELETE | api/private/housing/:id | - | 'Housing Deleted' |


### Öffentliche Schnittstellen

#### Events

|**Service** | **Key** | **Payload** | 
| :------ | :------ | :----- | 
| Bürgerbüro | private.integration | {<br>"event_id": 9000,<br>"event_name":"Register New Refugee",<br>"service_name": "integration",<br>"refugee": {<br>&emsp;"firstname": "John",<br>&emsp;"lastname": "Doe",<br>&emsp;"date of birth": "2000-01-20",<br>&emsp;"email": "john@doe.com",<br>&emsp;}<br> } |
| Bürgerbüro | private.integration | {<br>"event_id": 9001,<br>"event_name":"Register New Refugee Family",<br>"service_name": "integration",<br>"parents": \[ {<br>&emsp;"firstname": "John",<br>&emsp;"lastname": "Doe",<br>&emsp;"date of birth": "12.08.2000",<br>&emsp;"email": "john@doe.com",<br>&emsp;},<br>&emsp;{<br>&emsp;"firstname": "John",<br>&emsp;"lastname": "Doe",<br>&emsp;"date of birth": "12.08.2000",<br>&emsp;"email": "john@doe.com",<br>&emsp;} \],<br>"children": \[ {<br>&emsp;"firstname": "John",<br>&emsp;"lastname": "Doe",<br>&emsp;"date of birth": "12.08.2000",<br>&emsp;"email": "john@doe.com",<br>&emsp;},<br>&emsp;{<br>&emsp;"firstname": "John",<br>&emsp;"lastname": "Doe",<br>&emsp;"date of birth": "12.08.2000",<br>&emsp;"email": "john@doe.com",<br>&emsp;} \]<br> } |
| Kita-Verwaltung | private.integration | {<br>"event_id": 9002,<br>"event_name":"Refugee Kita Application",<br>"service_name": "integration",<br>"care_time": 35,<br>"child": { "citizen_id": 12345 },<br>"parent": { "citizen_id": 12345 }<br>} |
| Finanzamt | private.integration | {<br>"event_id": 9003,<br>"event_name": "Notify Incoming Donation",<br>"service_name": "integration",<br>"amount": 50.45,<br>"citizen_id": 12345<br>} |
| Newsletter| public.integration | {<br>"event_id": 9004,<br>"event_name": "New Newsletter Post",<br>"service_name": "integration",<br>"title": "xyz",<br>"text": "foo bar long",<br>"picture": "https://google.de/picture1"<br>"date": "YYYY-MM-DDTHH:MM:SS" (optional)<br>} |
| Landing Page | public.integration | {<br>"event_id": 9005,<br>"event_name": "Update About Us",<br>"service_name": "integration",<br>"date": "YYYY-MM-DDTHH:MM:SS",<br>"about_us": "about us foo bar text .. ",<br>"picture": "https://google.de/picture1"<br>} |

#### Queries

| **Name** | **Method** | **URL** | **Parameter** | **Response Example** | **Response Type** |
| :------ | :----- | :------ | :------ | :------ | :------ |
| Refugee status  | GET | api/refugee/:qr_code | String qr_code | { "status": true } | json |

### Dependencies

#### RPC (REST)

| **Service** | **Funktion** |
| :------ | :----- | 
| SmartAuth | authenticateUser() |
| SmartAuth | authenticateEmployee() |

## Technische Umsetzung

### Softwarearchitektur
![](media/Softwarearchitektur.png) <!-- Softwarearchitektur -->

### Validierung
| Testart | User Story ID | Validierung |
| :------ | :--------- | :---------- |
| End-to-End | [1, 3, 4, 5, 6, 8](#anmeldevorgang-1)  | Ablauf des Anmeldevorgang |
| End-to-End | [12, 18](#integration-mit-portal-1)    | Ablauf des Vorgangs Kita-Antrags stellen |
| End-to-End | [13, 17](#integration-mit-portal-1)    | Ablauf des Spendenvorgangs |
| End-to-End | [15](#integration-mit-portal-1)    | Ablauf Wohnraum bereitstellen |
| End-to-End | [16](#integration-mit-portal-1)    | Ablauf Login/Logout |
| End-to-End | [23, 24](#verwaltung-1)    | Ablauf Mitarbeiter Login/Logout |
| End-to-End | [21](#verwaltung-1)    | Ablauf Mitarbeiter Newsletter publizieren |
| End-to-End | [22](#verwaltung-1)    | Ablauf Mitarbeiter About Us Page aktualisieren |
| End-to-End | [25, 26](#verwaltung-1)    | Ablauf Wohnraum verwalten |
| Integration Testing | [1, 6](#anmeldevorgang-1) | Zuweisung an korrekten Wohnraum |
| Integration Testing | [11](#integration-mit-portal-1),[2](#anmeldevorgang-1) | Zuweisung des neuen QR-Codes an Wohnraum |
| Intetration Testing | [17](#integration-mit-portal-1) | Spenden werden korrekt ans Finanzamt weitergeleitet |
| Intetration Testing | [14](#integration-mit-portal-1) | Datenübermittlung der Spenden mit Zahlungssytem |
| Integration Testing | [18](#integration-mit-portal-1) | Daten werden korrekt an Kita-Verwaltung weitergeleitet |
| Integration Testing | [19, 20](#datenabfrage-1)| Status Abfrage korrekt zwischen Service und Client |
| Integration Testing | [21](#verwaltung-1) | Daten werden korrekt an Newsletter übermittelt |
| Integration Testing | [22](#verwaltung-1) | Daten werden korrekt an Landing Page übermittelt |
| Unit Testing | [3](#anmeldevorgang-1) | QR-Code Funktion |
| Unit Testing | [6](#anmeldevorgang-1) | Unterkunft-Zuweisung Funktion |
| Unit Testing | [29](#user-interface) | Toggle-Dark-Mode Funktion |
| Unit Testing | [27, 28](#user-interface) | Media Queries (manuell) |
| Unit Testing | - | Datenbank: Erstellen, Löschen, Abrufen von Instanzen |

### Fehlerbehandlung

| Fehler | Beschreibung |
| :----- | :----------- |
| CreateQRCodeError | QR-Code konnte nicht erstellt werden |
| QRCodeAssignHousingError | QR-Code konnte nicht einer Unterkunft zugewiesen werden |
| DonationError | Spendevorgang konnte nicht erfolgreich abgeschlossen werden |
| CreateHousingError | Unterkunft konnte nicht erstellt werden |

| Fehlercode | Bedeutung |
| :--------- | :---------|
| 400        | Bad Request (bspw. eine syntaktisch falsche Anfrage) |
| 403        | Keine Authorisierung für die Anfrage |
| 404        | Seite nicht gefungen |
| 405        | Methode nicht erlaubt |
| 500        | Server konnte Anfrage nicht erfüllen |

### Verwendete Technologien

* Programmiersprache: Javascript
* Frontend: Nextjs (React Framework)
* Backend: Nextjs
* Datenbank: MySQL
* ORM: Prisma
* Komponenten-Library: Mantine
* Code-Formatter: Prettier
* Frameworks für Integrationstests: Cypress oder Playwright (Steht noch nicht fest bei Spezifikationserstellung)
* Frameworks für Unit-Testing: Jest 
* weitere Frameworks: Stripe (Zahlungssystem)

## Glossar
| **Begriff** | **Definition** |
| :---------- | :------------- |
| Portal | Ist das SmartCity Portal, welches aus allen Microservices besteht |
| Service | Amt für Integration |
| QR-Code | zweidimensionaler Code, der eine Zeichenkette speichert |
