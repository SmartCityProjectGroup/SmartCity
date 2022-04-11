Wir realisieren die Kommunikation zwischen den einzelnen Microservices hauptsächlich über Events. 
Dazu benutzen wir die RabbitMQ Software. Auf einem Server läuft ein RabbitMQ Service, der sich über das 
Speichern und Verteilen der Events kümmert. Die Microservices verbinden sich dann zu diesem Server, um 
Events zu schreiben und zu lesen. Dafür muss ein Client installiert werden.

Wie dieser Client installiert wird, und wie man damit in eurer gewählten Sprache arbeitet, findet ihr hier: 
https://www.rabbitmq.com/getstarted.html

Events für euren Service werden in einer Queue abgelegt. Der Name der queue ist euer Servicename in Kleinbuchstaben.
Daraus könnt ihr die Events dann immer lesen, wann ihr wollt. Events können aber immer nur einmal gelesen werden und 
werden danach aus der Queue gelöscht.

Events können veröffentlicht werden, indem sie zu der Exchange `events` für die kommunalen Services geschrieben werden. 

Alle Events haben einen `key`. Das ist ein String, mit dem wir Events filtern können. Dieser key muss immer beim
Schreiben mit angegeben werden. Da dies nur ein String ist, können wir darein schreiben, was wir wollen. Damit man damit
aber arbeiten kann, sollen diese Keys immer einem bestimmten Muster folgen:

Der Key beginnt entweder mit `public` oder `private`.
- `public` bedeutet, dass die enthaltenen Daten für alle Services zugängig gemacht werden dürfen
- `private` bedeutet, dass die Daten nur für Services der Kommune zukommen dürfen. Das ist z.B. der Fall, wenn 
Nutzerdaten übertragen werden, dessen Nutzer nicht der Verbreitung an private Unternehmen zugestimmt hat

Als Trennung zwischen den einzelnen Wörtern benutzen wir einen Punkt `.`

Danach kommt der Servicename in Kleinbuchstaben.

Ein Key könnte also so aussehen: `public.buergerbuero`. Ein Event mit diesem Key darf also an alle Services verteilt
werden und kommt vom Bürgerbüro.

Mithilfe dieses Keys können wir nun sicherstellen, dass private Unternehmen nur Daten bekommen, die diese auch erhalten
dürfen und jeder Service kann für sich entscheiden von welchem Service Events erhalten werden sollen und vom welchen
nicht, damit man sich nicht um zu viele irrelevante Events kümmern muss.

Um diese Filterung zu erreichen, muss die eigene Queue an die entsprechende Exchange(`events` für kommunale Services,
und `public_events` für private Unternehmen) mit einem Key gebunden werden. Auch dies ist an dem oben genannten Link zu
finden. 

Ein solcher binding key kann Wildcards enthalten. Wenn z.B. nur Events empfangen werden sollen, die nicht empfindliche
Daten enthalten, dann sieht der Key so aus: `public.*`. Der Stern zeigt an, dass der Teil nach dem Punkt für ein
beliebiges Wort steht. Es werden hier also Events von allen Services empfangen. Möchte man nur Nachrichten vom
Bürgerbüro, so könnte der Key so aussehen: `*.buergerbuero`. Hier ist es egal, welche Daten enthalten sind. Natürlich 
kann man auch den ganzen Key ohne Sterne schreiben: `public.buergerbuero` empfängt also nur noch Events von dem
Bürgerbüro, welche nicht sensible Daten enthalten.

Da die Nachrichten bei RabbitMQ auch einfach nur Strings sind, müssen wir auch hier ein gemeinsames Format festlegen.

Das Event ist im JSON Format. Für alle populären Sprachen gibt es Bibliotheken, die entsprechende JSON Formate verstehen
oder Daten in das Format bringen können.

Jedes Event enthält allgemeine Informationen:
- `event_name`: Der Name des Events (Wird in der Spezifikation festgelegt)
- `event_id`: Die einzigartige ID des Events (Wird in der Spezifikation festgelegt)
- `service_name`: Der Name des Service, das dieses Event erstellt hat
- `date`: Das Datum, an dem das Event erstellt wurde (Format: dd.mm.yyyyThh:mm entsprechend der ISO 8601)

Danach kommt der Payload des Events. Wie dieser aussieht, wird in der Spezifikation der einzelnen Events festgehalten.
Sollte sich etwas an diesem Payload während der Entwicklung etwas ändern, ist es wichtig, dass dies auch zum Pull Request
in der Dokumentation geändert wird.