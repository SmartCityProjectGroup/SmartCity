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