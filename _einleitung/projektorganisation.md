# Projektorganisation

**Autor:** Scrum Master: Janik Geist

## Richtlinien

### Organisation

- Verwendetes Vorgehensmodell.
- Welche Arten von Meetings finden wöchentlich statt?
    Daily SCRUM
- Geplanter Ablauf der Meetings.
    Einmal die Woche Meeting in Raumm D317 Dienstags um 10:45. 
    Besprechung der Themen
    Retrospektive  
- Werkzeuge für Projektorganisation? Kanban-Board?
    GitHub -> Projekttool
    Discord

- Wie läuft ein typischer Sprint ab?
    2 Wochen -Abschluss der User-Stories aus dem Sprint.
- Wie sieht hier ein Codereview aus?
    -Adrian (WIP)
- Wie und womit wird die Teamkommunikation durchgeführt?
    Discord
- Dokumentation:
  - Entwicklerdokumentation?
      -Codedokumentation (Im Code)
      
  - Kundendokumentation?
      -Nicht nötig
  - Meeting-Protokoll-Dokumentation?
      -Janik (Dokumentiert hier.)
- Was ist der Produktlieferzeitplan? (x-Mal-wöchentliche Auslieferungen / Continuous I/D/D)
    - Tests Continous
    - CI
    - Alle 2 Wochen Release
    (Kontainerisierung Docker)
- Wie wird der Projektfortschritt gemessen und was passiert, wenn zeitlich verschoben werden muss?
    - Kanban Board (Mehrere (Geteilt))
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
  -Einfach ansprechen
- Wer legt Prioritäten und Zeitpläne fest?
  -Janik setzt allgemeine Meilensteine vor
- Was passiert, wenn ein Teammitglied ein Ziel nicht einhält bzw. die Erwartungen nicht erfüllt?
  -Direkte Kommunikation, Ansprechen, Ansprechen, Ansprechen, Eskalation 
- Falls jemand es zeitlich nicht schafft, inhaltlich nicht seinen Ansprüchen gerecht wird, es direkt anspricht und sich Hilfe sucht. (Mentoring Tätigkeit der unterstützenden Person.)

### Technik

- Interne Anforderungen an Softwarequalitätsmerkmale 
  - Erweiterbarkeit
  - Dokumentation
  - automatische und manuelle Tests
  - Statische Codeanalyse
  - ...
- Aufteilung in Repositories gemäß Systemarchitektur? Monorepo?
  - Doku Repo
  - Landing Page Repo
  - Microservice- Repos
- Versionskontrolle? Git-Workflow?
  -GitHub-Workflow
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
| Tristan Kechlo | Software Engineer | Microservice [Parkplatz](parkplatz/index) |
| Celine Dridiger | Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |
| Maximilian Hertzke | Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |
| Marius Braun | Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |
| Vivien Traue | Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |
| Jonathan Hauter| Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |
| Tom Luca Horstmann| Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |
| Mario Blomenkamp | Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |
| Jannis Thiel | Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |

Hinweis: Ein Microservice für die Authentifizierung/Autorisierung könnte sinnvoll sein.

## Grober Meilensteinplan

Zuästzlich zum Kanban-Board hier Meilensteine beschreiben.

**Feststehende Termine:**

* **Abgabe Spezifikation:** KW 16 (18.4.-20.4.)
* **Erster Prototyp (MVP):** KW 20 (16.5.-18.5.) / KW 21 (23.5.-25.5.)
* **Softwareprojektabgabe:** Ende Juni 2022 / Anfang Juli 2022
