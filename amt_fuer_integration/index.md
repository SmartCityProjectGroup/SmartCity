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

## Schnittstellen

### URL

http://smart.city/microservices/customer <!--- TODO replace >

### Private Schnittstellen
#### Commands 

**Asynchronous**

| **Name** | **Parameter** | **Resultat** |
| :------ | :----- | :------ |
| createRefugee() | RefugeeData d | Refugee r |
| assignHousing() | Refugee \[\] list | Boolean b |
| createHousing() | HousingData d | Housing h |


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
| private.finanzamt | {<br>"event_id": 9000,<br>"event_name": "Notify Incoming Donation",<br>"amount": 50.45,<br>"id_citizien": 932849834<br>} |

**Newsletter event channel**

| **Name** | **Payload** | 
| :------ | :----- | 
| public.newsletter | {<br>"event_id": 9000,<br>"event_name": "New Newsletter Post",<br>"title": "xyz",<br>"text_short": "foo",<br>"text_long": "foo bar long",<br>"date": DD.MM.YYYY (optional),<br>} |

**Landing Page event channel**

| **Name** | **Payload** | 
| :------ | :----- | 
| public.landingpage | {<br>"event_id": 9000,<br>event_name: "Update About Us",<br>"service_name": "integration", "date": DD.MM.YYYY,<br>"about_us": "about us foo bar text .. ",<br>"picture": "https://google.de/picture1",<br>} |

#### Queries

| **Name** | **URL** | **Parameter** | **Response Example** | **Response Type** |
| :------ | :----- | :------ | :------ | :------ |
| Refugee status  | /refugee/:hash/status | String hash | { "status": true } | json |

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