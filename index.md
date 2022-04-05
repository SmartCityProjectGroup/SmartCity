# Softwareprojekt 2022

## Smart City

Sie sollen ein Softwareprodukt "Smart City" virtuell im Team planen, entwerfen und implementieren,
das die digitalen Transformation von Kommunen unterstützt und Behördengänge über das Internet ermöglicht.
Jeder Studierende implementiert einen Microservice mit Frontend, Backend und Datenbank.

Ein Microservice für eine Kommune kann z.B. sein: Bürgeramt, Straßenverwaltung, Tierarzt, Schule, PKW-Zulassungsstelle, Parkplätze, Friseur, Restaurants, Krankenhäuser, Kita, Mitfahrerzentrale, Bus, Bahn, Überwachung der Luftqualität, Tourismusanwendungen, Schützenverein, etc. Des Weiteren ist die Smart City über einen Integrations-Microservice ("Portal") zugänglich, der die Dienste zusammenfasst. Einzelne Microservices können (nicht-private) Daten publizieren, die von anderen Microservices genutzt und z.B. visualisiert werden können. Interkommunale Zusammenarbeit ist denkbar. Microservices mit künstlicher Intelligenz und Microservices für Authentifizierung und E-Mail können sinnvoll sein.


Ansatz (Microservices):

Kommunal
    
    - Landingpage (Adrian & Janik)
    - Bürgeramt (Tristan)
        Dokumentenservice (Upload/Dowload/Neue Dokumente)
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

Dieses Repository soll sämtliche relevante Dokumente für
das Softwareprojekt im Sommersemester 2022 enthalten.
Die Dokumente werden über [docsify](https://docsify.js.org/#/)
auf [github pages](https://docs.github.com/en/pages/quickstart) publiziert
und mit [markdown](https://www.markdownguide.org/basic-syntax/) geschrieben.

