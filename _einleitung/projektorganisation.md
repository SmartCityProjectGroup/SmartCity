# Projektorganisation

**Autor:** Scrum Master: Janik Geist

## Richtlinien

### Organisation

- Verwendetes Vorgehensmodell.
  - Scrum
- Welche Arten von Meetings finden wöchentlich statt?
  - Daily SCRUM
- Geplanter Ablauf der Meetings.
  - Wöchentliche Meetings in Raumm D317 Dienstags um 10:45. 
  - Jede erste Woche, Dailyscrum -> Wie ist der Fortschritt?/Was behindert mich?/Schaffe ich alles?
  - Alle zwei Wochen, Retrospektive/Sprintabschluss/Sprintplanning
- Werkzeuge für Projektorganisation? Kanban-Board?
    - Github als Versionskontrolle
    - Github-Projekttool zur Organisation
      - Allgemeines Kanbanboard im Hauptrepo, zeigt allgemeinen Fortschritt aller Services
      - Detailliertes Kanbanboard in den Unterrepos, zeigt detaillierten Fortschritt der einzelnen Services
    - Discord zur Kommunikation im Team
- Wie läuft ein typischer Sprint ab?
    - Sprintplanning:
      - Jedes Teammitglied wählt Userstories für den Sprint aus
      - Umfang sollte für alle ungefähr gleich sein
      - Ziele sollten ebenfalls aufeinander abgestimmt sein
    - Dailyscrum:
      - Erstes Meeting nach dem Sprintplanning
      - Jeder stellt kurz vor, was er bisher geschafft hat und was noch fehlt
      - Gab es Probleme oder Störungen?
      - Ist das Erreichen des Sprintziels noch realistisch?
    - Sprintretrospektive:
      - Zweites Meeting nach dem Sprintplanning
      - Jeder stellt seine Ergebnisse aus dem Sprint vor
      - Teammitglieder bewerten, ob Sprintziel erreicht wurde (Definition of Done)
    - Sprintabschluss:
      - Zweites Meeting nach dem Sprintplanning
      - Jeder geht auf positive/negative Einflüsse ein
      - Was sollte man beim nächsten Sprint anders machen, was sollte so bleiben?
      - Repeat 
- Wie sieht hier ein Codereview aus?
    - Codereview immer zusammen mit einem Pullrequest(PR) in den Repos für die Microservices
    - Für neue Features:
        - PR-Titel = User Story ID und Name 
        - PR-Beschreibung = Anmerkungen für die Implementierung / für das Review
            - keine Wiederholung von bereits dokumentierten Erklärungen nötig
    - Für Bugfixes:
        - PR-Titel = aussagekräftiger Name
        - PR-Beschreibung = Kurzbeschreibung des Bugs(was macht der und warum ist das so?), zur Reproduktion des Bugs, und zur Beseitigung / Lösung
    - Für sonstige Änderungen:
        - PR-Titel = aussagekräftiger Name
        - PR-Beschreibung = Kurzbeschreibung des vorherigen Zustands und der Änderung (was wurde konkret geändert und wie hat sich das Verhalten der Software dadurch geändert)
    - geprüft wird nach Qualitätsanforderungen (siehe Punkt 1 in Technik)
    - Dokumentation und Änderungsanfragen erfolgen im PR im Repo
- Wie und womit wird die Teamkommunikation durchgeführt?
  - Discord, zur Kommunikation zwischen den Teammitgliedern
- Dokumentation:
  - Entwicklerdokumentation?
      - Codedokumentation (Im Code)
  - Kundendokumentation?
      - Nicht nötig
  - Meeting-Protokoll-Dokumentation?
      - Janik (Dokumentiert im Bereich "Protokolle")
- Was ist der Produktlieferzeitplan? (x-Mal-wöchentliche Auslieferungen / Continuous I/D/D)
    - Tests Continous
    - CI
    - Alle 2 Wochen Release
    (Kontainerisierung Docker)
- Wie wird der Projektfortschritt gemessen und was passiert, wenn zeitlich verschoben werden muss?
    - Ein allgemeines Kanbanboard 
    - Detaillierte Kanbanboards für die einzelnen Services
- Wer setzt Erwartungen und Ziele fest und wie werden diese dokumentiert?
    - Jeder für seinen Teil für sich.
    - Allgemeine Einteilung zusammen.
- Was passiert, wenn jemand Verbesserungsmöglichkeiten identifiziert?
    - Direkte Kommunikation -> Discord
- Einschränkungen, Betriebsbedingungen, Faktoren und Risiken, die die Entwicklung beeinflussen können.
    - Krankheiten, Terminveränderung, Zeitstress aufgrund anderer Abhängigkeiten, unterschiedliches Know-How

### Team

- Werte und menschliche Umgangsformen
  - Nett sein :)...
- Wie werden Meinungsverschiedenheiten gelöst?
  - Einfach ansprechen
- Wer legt Prioritäten und Zeitpläne fest?
  - Janik setzt allgemeine Meilensteine vor
- Was passiert, wenn ein Teammitglied ein Ziel nicht einhält bzw. die Erwartungen nicht erfüllt?
  - Falls ein Mitglied merkt, dass er/sie gesetzte Ziele nicht erreichen kann:
    - direkt ansprechen
    - nach Hilfe fragen (Wichtig ist, dass der Helfende als Mentor agiert und die Arbeit nicht komplett übernimmt)
  - Direkte Kommunikation ist das Ziel
  - Teammitglied wird 3x auf die Umstände angesprochen
  - Sollte keine Lösung gefunden werden, wird "eskaliert"
  - Falls jemand es zeitlich nicht schafft, inhaltlich nicht seinen Ansprüchen gerecht wird, es direkt anspricht und sich Hilfe sucht. (Mentoring Tätigkeit der unterstützenden Person.)

### Technik

- Interne Anforderungen an Softwarequalitätsmerkmale 
  - Erweiterbarkeit
  - Lesbarkeit
  - Dokumentation
    - so viel Doku, dass Außenstehende den Code grob verstehen können
  - automatische (und manuelle) Tests
    - Tests für Front- und Backend
    - optimalerweise gibt es Tests für jede Funktion
    - Minimum sind Tests für alle wichtigen Elemente (Events können verschickt und empfangen werden, oder die Hauptfeatures)
  - "normale" Codeconventions
    - keine Magic Numbers
    - kurze, prägnante Funktionen mit einer Aufgabe
    - nicht alles in einer Datei
    - ...
- Aufteilung in Repositories gemäß Systemarchitektur? Monorepo?
  - (dieses) Hauptrepo für Dokumentation
  - Landing Page Repo
  - ein Repo pro Microservice
- Versionskontrolle? Git-Workflow?
  -GitHub-Workflow -> https://github.com/kamilkisiela/release-based-workflow/issues/1
- Wie werden Änderungen intgriert und ausgeliefert? CI/CD? 
  - Für die einzelnen Repositories CI
  - Weitere Gedanken nächste Woche.(12.04.2022)
- Wie wird die Infrastruktur spezifiziert? Containerisierung?
  - Docker-File
- Implementierung
  - Entwicklungsumgebung.
    - Per Person
  - Betriebssysteme.
  - Programmiersprachen.
  - Frameworks.
    -https://www.keycloak.org/
    (Auth)
  - Logging.
- Technologieauswahl: Messaging zum Beispiel mit [RabbitMQ](https://www.rabbitmq.com/) und [AsyncAPI](https://www.asyncapi.com/)


## Rollen und Verantwortlichkeiten

| Person | Rolle | Verantwortlichkeit |
|----------|-----------|-----------|
| Janik Geist | Scrum Master | Leitung, Kanban-Board, Protokollierung, Prozessqualität |
| Janik Geist | Product Owner | Produktvision, Integrations-Microservice, Softwareproduktqualität |
| Paul Nagel | DevOps Engineer | Github-Repos, Docker, CI/CD, Dokumentation, Support, Infrastrukturqualität | 
| Adrian Koß | Software Architekt | Technische Leitung/Vision, Code Reviews, Mentoring, Technikevaluation, Softwarequalität |
| Tristan Kechlo | Software Engineer | Microservice 1 [Bürgerbüro](buergerbuero/index) | 
| Celine Dridiger | Software Engineer | Microservice 2 [Stadtbus](stadtbus/index) |
| Maximilian Hertzke | Software Engineer | Microservice 3 [Kita](kita/index) |
| Marius Braun | Software Engineer | Microservice 4 [Forum](forum/index) |
| Vivien Traue | Software Engineer | Microservice 5 [Tierheim](tierheim/index) |
| Jonathan Hauter| Software Engineer | Microservice 6 (Auth) [SmartAuth](Auth/index) |
| Tom Luca Horstmann| Software Engineer | Microservice 7 [Fitnessstudio](fitnessstudio/index) |
| Mario Blomenkamp | Software Engineer | Microservice 8 [Finanzamt](finanzamt/index) |
| Jannis Thiel | Software Engineer | Microservice 9 [Amt für Integration](amt_fuer_integration/index) |

Hinweis: Ein Microservice für die Authentifizierung/Autorisierung könnte sinnvoll sein.

## Grober Meilensteinplan

Zuästzlich zum Kanban-Board hier Meilensteine beschreiben.

**Feststehende Termine:**

* **Meeting 2 - Ideenfindung** KW 15 (12.04)
* 
* **Abgabe Spezifikation:** KW 16 (18.4.-20.4.)
* **Erster Prototyp (MVP):** KW 21 (23.5.-25.5.)
* **Softwareprojektabgabe:** Ende Juni 2022 / Anfang Juli 2022