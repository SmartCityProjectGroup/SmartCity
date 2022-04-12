VERSION: `1.0`
AUTOR: `Paul Merlin Nagel`
DATUM: `12.04.2022`

Das GitHub und Repomanagement wird über ein Hauptrepo und mehereren Submodules realisiert. 
Jedes Submodule stellt einen eigenen Microservice dar. In dem Hauptverzeichnis wird die Navigationsseite als ausschlaggebender Startpunkt der Benutzernavigation dargestellt.

Zum Teilnehmen an dem Projekt, `pullen` Sie bitte das Hauptverzeichnis. Jeder Entwickler sollte bereits eine Einladung zu seinem Repo erhalten haben. 

In dem Unterverzeichnis `microservices/SC_MicroserviceX` entwickeln Sie Ihren eigenen Microservice. Denken Sie daran das wir ein entsprechenden Datenbankserver im Docker Container zur Verfügung stellen werden.

Informieren Sie sich bitte in jedem Fall zu Docker.

Ebenso wird jeder Webentwicklungsserver in einem eigenen Container `gehosted`. 
Entsprechende Docker-Files und dazugehörende Docker-Images werden im laufe des Projektes zur Verfügung gestellt, ab dem Zeitpunkt, wenn klar ist, welche Front- und Backendscriptsprachen/Frameworks etc. genutzt werden. 

Passwörter, Authentifizierungsdaten, müssen im Repo unter `Settings->SECRETS` angelegt werden und dürfen nicht RAW im Code stehen. Im Code kann man dann eine Referenz nutzen.

Bei Fragen, bitte bei mir melden.

Repo- und CI/CDManager
Paul Merlin Nagel