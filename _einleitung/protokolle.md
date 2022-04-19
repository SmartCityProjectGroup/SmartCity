# Protokolle

**Autor:** Scrum Master: Janik Geist

---

**Meeting 1 - Kennenlernen** 05.04.2022

Rollenverteilung (siehe [**Projektorganisation**](_einleitung/projektorganisation)), erste Ideensammlung.

Ansatz (Microservices):

Kommunal
- Landingpage (Adrian & Janik)
- Bürgeramt (Tristan)
  - Dokumentenservice (Upload/Dowload/Neue Dokumente)
- Microservice Newsletter (Jonathan)
- Authentifizierung (Jonathan)
- Finanzamt (Mario) 
- Zulassungsstelle (Tristan)
- Schule (Max)
- Kita (Max)
- Bus(tickets) (Celine)
- Gesundheitsamt / Ärtze (Gesundheitkarte) / Patienteninfos weitergeben (Schnittstellen) (Vivien)
- Tierheim (Vivien)

Privat
- API Schnittstelle für private Unternehmen (Adrian)
- Verein (Celine)
- ggf Hotel (Marius)
- Chiropraktiker
- Physiotherapeuten (Tom)
- Fitnesstudio / Weiterleitung an den Physiotherapeuten? (Tom)
- Einkaufsmöglichkeiten (Mario)
- Online-Shoppingdienst (Marius)
- Apotheken (Rezepte weiterleiten)
- Tierarzt

Nächstes Meeting 12.04.2022
- Jeder geht bei den gewählten Microservices genauer ins Detail, schaut wie sie **Inhaltlich** umsetzbar wären.

---

**Meeting 2 - Ideenfindung** 12.04.2022

Anwesende: Alle

Adrian stellt die technischen Anforderungen und Spezifikationen für die einzelnen 
Microsysteme vor. Alles wichtige dazu findet man unter der [**Projektorganisation**](_einleitung/projektorganisation)

Paul Merlin geht kurz auf die Organisation der Git-Repos ein. 
  - Jeder Microservice ist als Sub-Repo des Main-Repos realisiert.
  - Um Systemunabhängiges Testen und Deployen zu ermöglichen wird Docker genutzt (siehe Discord **#wichtige-links**)

Janik stellt einen groben Zeitplan auf.
  - Welche Deadlines sind zu beachten? - **DI 19.04 Abgabe der Spezifikation**
  - Wie wird der Fortschritt der gesamten Repos beobachtet? - Jedes Repo ist als Kanbancard im Haupt-Repo vertreten, </br>
    dort kann auf einen Blick erkannt werden, in welchem Status sich jeder Microservice befindet
  - Wie wird der Fortschritt eines einzelnen Repos beobachtet? - Jedes Sub-Repo hat sein eigenes Kanbanboard, auf dem </br>
    alle Userstories als Sprintziele eingetragen und verfolgt werden.

Die einzelnen Microsysteme werden festgelegt, verteilt und inhaltlich aufgearbeitet.
  
Landing Page: 
  - Bekommt mittels der Events Updates der About Us, Bild, Links und Namen der einzelnen Microservices

Fitnessstudio (Tom):
  - Technik -> Unschlüssig
  - Meldet sich beim Finanzamt für automatische Steuerbearbeitung und Abrechnung
  - Bezieht Adressen der Mitglieder vom Bürgerbüro
  - Bietet vergünstigte Tarife für Mitarbeiter(Fremder Firmen)/Flüchtlinge
  - Bietet engagierten Kunden Arbeit im Tierheim an

Finanzamt (Mario):
  - Technik -> Javascript, node.js o.ä.
  - Bei Bürgeranmeldung steuern verwalten
  - Verwaltung von Fördergeldern (z.b. Flüchtlinge)

Bürgerbüro (Tristan):
  - Technik -> Javascript
  - Bürgeranmeldung löst Event für andere Services aus
  - Statusänderungen werden weitergegeben (Hochzeit o.ä.)
  - Eltern/Kind Beziehung, Ehestatus etc.

Authentifizierung (Jonathan):
  - Technik -> Rust
  - Aktive Session wird in Cookies gespeichert
  - Speichert nur Name und Vorname sowie EMail
  - reagiert auf angemeldeten Bürger mit EMail
    
Jeder Bürger bekommt bei Anmeldung am Amt eine E-Mail und kann sich über einen enthaltenen Link </br> 
bei der Authentifizierung anmelden. Zeitpunkt ist egal. </br>
Kinder können, müssen aber keine Email-Adresse angeben. Wer keine angibt, kann sich jederzeit anmelden(mit Überprüfung beim Bürgeramt).  

Kita (Max):
  - Technik -> vue.js express
  - Bei Kindes-Anmeldung wird eine EMail mit Kita empfehlungen geschickt
  - reagiert auch auf neue Flüchtlingskinder

Flüchtlingsamt (Jannis):
  - Technik -> express next.js oder react
  - meldet neue Flüchtlinge an 
  - gibt Auskunft über Flüchtlingsstatus
  - Fragt Kitaplätze/Fitnessstudio an

Bus (Celine):
  - Technik -> react express
  - Vergünstigungen für Familien/Flüchtlinge
  - Anfrage an Bürgerbüro für Daten über Personen
  - Kitaausflüge organisieren

Tierheim (Vivien):
- Technik -> Rust für Backend, Frontend unentschieden
- Hundesteuer beim Finanzamt melden
- Sachkundenachweis für gefährliche Hunde beim Bürgerbüro anfragen
- Schwarzes Brett gefundene/einsame Tiere melden
- Fitnessstudio engagierte Menschen finden
 
Newsletter (Marius):
  - Schwarzes Brett (Anmeldung über Events)
  - Schwarzes Brett für Bürger
  - Statistiken
  - Kalender (ebenfalls Events)
  - Werbung der einzelnen Services einbinden 

Bis nächste Woche, eher bis SO 17.04 die Spezifikation fertig stellen. </br>
Nächste Woche Vorstellung der Spezifikation und Sprintplanning mit Zielen aus den User Stories.

---

**Meeting 3 - Sprintplanning 1** DI 19.04

Meeting startet pünktlich, alle Teammitglieder sind anwesend.

Wir fangen an mit einer, von Hr. Brunsmann angeführten, Präsentation der einzelnen Spezifikationen.
Nachdem jeder Service seine Spezifikation vorgestellt hat, geht Jonathan nochmals genauer auf SmartAuth und den Umgang
mit Events und API dieses Services ein. Auch Tristan stellt nochmals alle Events und API Funktionen des Bürgerbüros vor.

Statt einer ID wird in Zukunft nur ein Schlüssel des SmartAuth verwendet, um die Identität des Bürgers zu schützen. 
Für Testzwecke stellt das Bürgerbüro noch eine API mit BürgerID zur Verfügung.

Adrian prüft noch ob in Zukunft ein JSON-Format-Prüfer genutzt werden soll, um Events auf Korrektheit und Vollständigkeit
zu prüfen. Ergebnis dazu, nächstes Meeting. Außerdem prüft Adrian ob eine Fehler-Event-Queue nötig/sinnvoll ist.

Bei Tests sollen wir uns laut Hr. Brunsmann eher auf integrations Testfälle als auf funktionale Testfälle konzentrieren.

Janik räumt die Woche über die Projektdokumentation auf und löscht unnötige/falsche Einträge und Seiten.

Jeder prüft nochmal bei seinen Klassendiagrammen ob die Aggregationsraute an der richtigen Stelle abgebildet ist.
Die Raute muss am Ganzen der Teil-Ganzes-Beziehung stehen.

Nachdem diese Dinge geklärt sind, erklärt Adrian nochmals das theoretische Verfahren mit RabbitMQ. Weitere Infos dazu 
können in dem [Tutorial](https://www.rabbitmq.com/tutorials/tutorial-two-python.html) nachgelesen werden. 
Außerdem kümmert sich Adrian um eine Visualisierung für die Spezifikation.

Es wird entschieden, dass das Bürgerbüro *erstmal* keine Weiteren Events/API-Routes zur Verfügung stellen muss.

Paul kümmert sich um einen Mailserver, Docker und einen Datenbankserver.

Das MVP sieht vor, dass Interfaces/Events implementiert, aber noch nicht funktional sind.
Um das MVP bis zur Deadline implementieren können, müssen alle Interfaces/Events bis zur 20.KW implementiert sein. Dazu
startet ab Heute dem 19.04 der erste Sprint. Jeder Service wählt einige Userstories aus seiner Spezifikation aus. Wichtig ist,
dass alle einen ähnlichen Umfang haben und jeder auch in der Lage ist, die festgesetzten Ziele zu erreichen.
Folgende Einteilung wurde festgelegt und ist auch in den einzelnen Repos unter "Projekt" auf einem Kanbanboard zu sehen.
Bitte folgt dem Scrumstandart und verschiebt die Karten entsprechend ihres aktuellen Status.

SmartAuth:

    * Userstories 1,2 und 3

Landingpage:

    * Registrierung der einzelnen Services und entsprechende Weiterleitung des Users

Bürgerbüro:

    * Userstories 1,2 und 3

Finanzamt:

    * Userstories 3,4,11,13,7,8

Amt für Integration:

    * Userstories 1,6,12,13,17,18,19,20,21,22

Fitnessstudio:

    * Userstories 2,3,8,9,6,7

Kita:

    * Servicekooperation, Userstory 1, Zweiterabschnitt 1 und 2

Stadtbus:

    * Userstories 1,3,5,7

Forum:

    * Tabelle 1

Tierheim:

    * Userstories 1,2,6,7,8,9,12,13,14,15

---

**Meeting 4 - Daily Scrum** DI 26.04