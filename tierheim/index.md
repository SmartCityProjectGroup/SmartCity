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
| 3 | User | einen Besuchstermin vereinbaren können | ich ein Tier besser kennenlernen kann | Termin wird gebucht | Muss |
| 4 | User | über neu eingetroffene Tiere informiert werden | immer auf dem Laufenden bin | Neue Tiere werden dem Forum-Service gemeldet | Sollte |

## Grafische Benutzerschnittstelle

## Datenmodell

## Abläufe

## Schnittstellen

## Technische Umsetzung

### Verwendete Technologien

- Frontend und Backend: Rust (Yew)
- Datenbank: MySQL
