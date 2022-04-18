# Tierheim

**Autor:** Vivien Traue

![Tierheim-Bild](media/tierheim.png)

## Überblick

Das Tierheim bietet den Bürgern die Möglichkeit, auf einer Webseite eine Vielzahl an Informationen einzusehen. So wird dem Nutzer eine Übersicht aller aktuell im Tierheim befindlichen Tiere angezeigt. Es können Termine zum Kennenlernen der Tiere oder auch für Hundespaziergänge vereinbart werden. Die Bürger können sich sowohl als Interessent für eine Adoption eintragen, als auch als Pflegestelle registrieren um Tieren dauerhaft oder vorübergehend ein Zuhause geben zu können. Außerdem informiert das Tierheim über entlaufende und gefundene Tiere. Nutzer können hierfür sowohl melden, wenn sie ein Tier vermissen, als auch, wenn sie ein Tier gefunden oder gesichtet haben. Zusätzlich bietet das Tierheim unterschiedliche Kurse für Hundebesitzer an, so beispielsweise auch einen Kurs zum Erhalt eines Sachkundenachweises, um große Hunde halten zu dürfen. Die Termine für die Kurse können ebenfalls über die Webseite eingesehen und gebucht werden. Des Weiteren können Bürger ihre Tiere in einer Urlaubsbetreuung im Tierheim unterbringen. Auch hierfür ist eine Terminbuchung möglich.


## Funktionale Anforderungen

### Akteure
| **Akteur** | **Definition** |
| --- | --- |
| User | Kann Informationen einsehen, Termine buchen und vermisste/gefundene Tiere melden |
| Mitarbeiter | Kann Inhalte der Tierheimseite erstellen, bearbeiten und löschen |
| Bürgerbüro | Austausch über den Erhalt/Besitz eines Sachkundenachweises für Hundehalter |
| Finanzamt | Dem Finanzamt wird mitgeteilt, wenn ein Hund adoptiert wird (Hundesteuer) |
| Forum | Über das Forum werden die Bürger über verschiedene Ereignisse informiert |
| Fitnessstudio | Mit dem Fitnessstudio existiert eine Kooperation, um bewegungsintensive Hunde mit engagierten Läufern zusammenzubringen |

## Anforderungen im Detail

### User Stories

#### Tieradoption

| **ID**| **Als**|   **möchte ich**   |  **so dass** | **Akzeptanz** | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| 1 | User | eine Übersicht über alle Tiere im Tierheim sehen | ich alle Tiere auf einen Blick sehen kann | Liste mit allen Tieren wird angezeigt| Muss |
| 2 | User | ein detaillierteres Profil eines einzelnen Tieres einsehen | ich mehr Informationen über dieses Tier erfahre | Profil eines Tieres wird angezeigt | Muss |
| 3 | User | die Liste aller Tiere filtern können | ich ein zu mir passendes Tier leichter finden kann | Liste der Tiere wird gefiltert angezeigt | Sollte |
| 4 | User | einen Besuchstermin vereinbaren können | ich ein Tier besser kennenlernen kann | Termin wird gebucht | Muss |
| 5 | User | einen gebuchten Besuchstermin stornieren können | der Termin gelöscht wird und wieder frei ist | Termin wird gelöscht | Muss |
| 6 | User | über neu eingetroffene Tiere informiert werden | immer auf dem Laufenden bin | Neue Tiere werden dem Forum-Service gemeldet | Sollte |
| 7 | Mitarbeiter | ein adoptiertes Tier als adoptiert markieren | es als bereits adoptiert angezeigt wird | Tier wird als adoptiert markiert und angezeigt |  Muss |
| 8 | Mitarbeiter | die Adressen von Bürgern sehen können, die ein Tier adoptiert haben | ich das adoptierte Tier besuchen und sein Wohlergehen überprüfen kann | Adresse der Bürger mit einem adoptierten Tier wird angezeigt | Sollte |
| 9 | Mitarbeiter | beim Bürgeramt anfragen, ob ein Bürger einen Sachkundenachweis für Hundehalter besitzt | ich weiß, ob ein Bürger einen Hund halten darf | Status des Sachkundenachweises eines Bürgers wird angezeigt | Muss |
| 10 | Mitarbeiter | beim Bürgeramt melden, dass ein Bürger einen Sachkundenachweis für Hundehalter erhalten hat | der Sachkundenachweis für den Bürger vermerkt wird | Erhalt des Sachkundenachweises wird gemeldet | Muss |

#### Termine

| **ID**| **Als**|   **möchte ich**   |  **so dass** | **Akzeptanz** | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| 11 | User | Termin für einen Hundespaziergang vereinbaren | ich einen Spaziergang zum gewünschten Zeitpunkt unternehmen kann | Termin wird gebucht | Muss |
| 12 | User | mein Tier für die Urlaubsbetreuung anmelden | mein Tier während ich im Urlaub bin versorgt wird | Zeitraum wird als Anfrage vorgemerkt | Muss |
| 13 | Mitarbeiter | alle Termine für Hundespaziergänge einsehen | die Hunde für den Spaziergang vorbereiten kann | Alle Termine für Hundespaziergänge werden angezeigt | Muss |
| 14 | Mitarbeiter | alle Anfragen für Urlaubsbetreuungen einsehen können | diese bestätigen oder ablehnen kann | Alle Anfragen werden angezeigt und können bestätigt oder abgelehnt werden (E-Mail an Bürger) | Muss |
| 15 | User | alle Termine für Kurse für Hundebesitzer ansehen können | ich mir einen passenden Kurs aussuchen kann | Liste mit allen Kursen für Hundebesitzer wird angezeigt | Muss |
| 16 | User | einen Platz für einen Kurs für Hundebesitzer buchen | an diesem Kurs teilnehmen zu können | Termin für Kurs wird gebucht | Muss |
| 17 | User | einen gebuchten Platz für einen Kurs für Hundebesitzer wieder stornieren können | ich meine Teilnahme zurückziehen kann und der Platz wieder frei ist | Terminbuchung für Kurs wird gelöscht | Muss | 
| 18 | Mitarbeiter | neue Kurse für Hundebesitzer anlegen können | diese auf der Seite angezeigt werden | Kurs wird auf der Seite angezeigt | Muss |
| 19 | Mitarbeiter | einen bestehenden Kurs für Hundebesitzer löschen können | der Kurs nicht mehr auf der Seite angezeigt wird | Kurs wird gelöscht | Muss |
| 20 | Mitarbeiter | einen bestehenden Kurs für Hundebesitzer ändern können | ich die Daten des Kurses anpassen kann | Kurs wird geändert | Muss |

#### Vermisste Tiere

| **ID**| **Als**|   **möchte ich**   |  **so dass** | **Akzeptanz** | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| 21 | User | eine Liste mit allen vermissten Tieren sehen | alle momentan vermissten Tiere sehen kann | Liste mit allen vermissten Tieren wird angezeigt | Muss |
| 22 | User | 

## Grafische Benutzerschnittstelle

## Datenmodell

## Abläufe

## Schnittstellen

## Technische Umsetzung

### Verwendete Technologien

- Frontend und Backend: Rust (Yew)
- Datenbank: MySQL
