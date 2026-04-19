# X-Ray

*Eine Leitidee für Lernen, Forschung und Systemaufbau*

Flavio · 2026 · Lebendes Dokument · v3b

---

## Prolog: Zwei Bücher

Anfang der siebziger Jahre las ich das Buch *Entschulung der Gesellschaft (Deschooling Society)* von Ivan Illich — einem österreichischen Philosophen und Gesellschaftskritiker, der sein gesamtes Leben damit verbrachte, darüber zu schreiben, was Institutionen mit Menschen machen, während sie vorgeben, ihnen zu helfen.

Illich schrieb nicht über schlechte Schulen. Er schrieb über die Struktur des institutionellen Lernens selbst und warum sie systematisch genau das verhindert, was sie zu erzeugen behauptet. Schulen — als Institutionen — lehren Menschen nicht zu denken. Sie lehren sie zu gehorchen. Sie ersetzen den aufrichtigen Wunsch nach Verständnis durch Zertifikate, Noten und die Illusion des Fortschritts.

Das Buch beunruhigte mich. Nicht weil ich es ablehnte — sondern weil ich mich darin erkannte.

Anfang der neunziger Jahre las ich *Flatland: Eine Geschichte mit vielen Dimensionen* von Edwin A. Abbott, einem englischen Lehrer, der 1884 eine Geschichte über eine zweidimensionale Welt schrieb. Die Bewohner Flatlands können sich keine dritte Dimension vorstellen — nicht wegen mangelnder Intelligenz, sondern weil ihr gesamter Wahrnehmungsapparat für eine Wirklichkeit gebaut ist, die sie schlicht nicht enthält. Das Gefängnis besteht nicht aus Gitterstäben. Das Gefängnis besteht aus Referenzrahmen.

Auch dieses Buch erkannte ich wieder.

Diese beiden Bücher prägten nicht nur meinen Blick auf die Welt, sondern meine gesamte berufliche und intellektuelle Entwicklung. Illich zeigte mir das institutionelle Gefängnis. Abbott das wahrnehmungsmäßige. Zusammen beschrieben sie zwei Dimensionen derselben Gefangenschaft — und ich erkannte beide in mir selbst.

Ich erwartete, irgendwann zu Antworten zu gelangen. Das tat ich nicht. Ich verstehe die Welt um mich herum nicht vollständig. Ich habe keine vollständige Antwort darauf gefunden, warum und wie ich tue, was ich tue.

*Ich betone: noch nicht. Ich gehe weiter.*

Es gibt eine Art Wissen, die sich mit der Beschreibung von Oberflächen begnügt. Man kann wissen, dass ein Vogelschwarm fliegt, ohne je zu fragen, wer ihn anführt. Man kann einen Algorithmus verwenden, ohne je nachzuschauen, was tatsächlich im Inneren geschieht. Man kann ein System verwalten, das funktioniert — bis es aufhört zu funktionieren.

Das reicht mir nicht.

X-Ray ist der Name, den ich meinem Ansatz zum Lernen und Aufbauen gegeben habe. Es ist kein Projektname und keine Methodik — es ist eine Haltung. Die Haltung, dass es sich lohnt, innen zu schauen, auch wenn außen alles in Ordnung aussieht. Gerade dann.

> *I need to see in an x-ray style.*
> — Joe Strummer, "X-Ray Style" (1999)

Joe Strummer — Gitarrist, Sänger und Mitgründer von The Clash, einer der einflussreichsten Punkbands der späten Siebziger und Achtziger — sang nicht über Röntgenstrahlen. Er sang über die Weigerung, das zu akzeptieren, was einem als fertige Tatsache serviert wird. Der X-Ray-Stil ist ein Widerstandsakt gegen Undurchsichtigkeit — gegen alles, was sagt: du musst nicht wissen, wie das funktioniert, benutze es einfach.

---

## I. Aborigine-X-Ray-Kunst und Wissen von innen

Die Aborigines Australiens hatten eine besondere Tradition in der bildenden Kunst, die heute X-Ray Art genannt wird — stilisierte Darstellungen von Tieren, in denen innere Organe, Knochen, Herz und Lungen sichtbar sind. Auf diese Tradition stieß ich nicht in einer Galerie, sondern beim Studium der Epistemologie — der philosophischen Disziplin, die fragt, was wir wissen können, wie wir es wissen und wo die Grenzen des Wissens liegen. Eines der Standardbeispiele, mit denen Epistemologen veranschaulichen, dass die Auswahl dessen, was wir darstellen, bereits selbst eine philosophische Entscheidung ist, waren genau diese Bilder: das äußere Erscheinungsbild eines Tieres darstellen oder seine innere Struktur — beides ist wahr, aber sie sagen völlig verschiedene Dinge darüber, was Wissen ist.

Die westliche Kunsttradition fragt: *Wie sieht das aus?* Sie neigt zum Oberflächenrealismus — Licht, Schatten, Perspektive — und versucht genau das einzufangen, was das menschliche Auge von einem bestimmten Standpunkt aus sieht. Der Aborigine-Maler fragt etwas ganz anderes: *Was ist das eigentlich?* Für ihn bedeutet, nur die Haut eines Tieres darzustellen, den kleinsten, unwichtigsten Teil dessen darzustellen, was es ist. Ein wahres Bild muss Struktur, Fluss, innere Logik zeigen. Dieser Unterschied ist nicht ästhetisch — er ist epistemologisch. Das ist X-Ray als Haltung, Jahrtausende alt.

In meinen Projekten nimmt diese Frage konkrete Formen an. Als ich an Pong arbeitete — einer browserbasierten Plattform zum Training von KI-Agenten, die lernen, gegeneinander zu spielen — reichte es mir nicht, das Endergebnis zu betrachten. Mich interessierte, was im Inneren geschieht, während der Agent lernt. Also fügte ich ein X-Ray-Overlay hinzu: eine Heatmap, die zeigt, wohin der Agent seine Aufmerksamkeit richtet, Echtzeit-Telemetrie des Balls, eine Visualisierung der Verteilung der Q-Werte — numerische Schätzungen, wie gut jede mögliche Aktion zu einem gegebenen Zeitpunkt ist — während der Agent entscheidet. Die Inspiration war die Telemetrie-Übertragung bei Formel-1-Rennen: derselbe Sport, ein völlig anderer Einblick.

Das ist der X-Ray-Ansatz in der Praxis. Nicht nur den Output betrachten — sondern Fenster nach innen bauen.

---

## II. Die Black Box und der graue Gradient

Jedes Mal, wenn man einen Knopf am Telefon drückt und etwas auf der anderen Seite des Planeten geschieht — ein Paket geliefert, eine Nachricht zugestellt, eine Transaktion abgewickelt — gibt es einen Raum zwischen dem Finger und diesem Ergebnis, der vollkommen dunkel ist. Ich werfe Geld ein, ich bekomme Kaffee. Ich tippe eine Anfrage, ich bekomme eine Antwort. Was dazwischen liegt, ist das Geheimnis anderer oder, häufiger, kann selbst der Autor nicht immer erklären, warum das System genau diese Entscheidung getroffen hat. Moderne Technologie ist eine Industrie der Black Boxes. Und unser Standardverhältnis zu ihnen ist oberflächlich — Eingabe, Ausgabe, frag nicht, was dazwischen liegt.

Das kann ich nicht ändern. Das ist auch nicht das Ziel. Aber ich habe längst aufgehört anzunehmen, dass die Black Box die einzige Möglichkeit ist. Zwischen Schwarz und Weiß gibt es einen Gradienten — ein Grau, das transparent genug ist, um etwas zu sehen.

Mein Ansatz ist der Aufbau von Verständnisschichten rund um einen undurchdringlichen Kern. Das geschieht durch zwei Linsen:

**Metadaten als Spiegel:** Was das System getan hat, wann, mit welchem Ergebnis, wie es sich unter Stress verhalten hat. Metadaten — Daten über Daten — sind nicht das Innere der Black Box, aber sie sind ihr Schatten. Und ein Schatten sagt manchmal mehr, als man erwarten würde.

**Meta-Lernen als Kompass:** Nicht nur, was das System tut, sondern was ich durch die Beobachtung lerne, wie das System es tut. Jede Beobachtung ist sowohl technisch als auch reflexiv — was geschah, und was das über mein Verständnis aussagt.

Ich habe ein Projekt namens Katalog — ein zentrales Meta-Register all meiner Projekte, Chats und Dokumente, gespeichert in einer PostgreSQL-Datenbank mit Werkzeugen für direkte Interaktion. Das ist kein Archiv. Das ist eine Umsetzung dieser Philosophie: ein System, das andere Systeme von innen beleuchtet. Katalog fragt nicht, was ich gebaut habe — es fragt, wie sich das, was ich gebaut habe, über die Zeit verändert, wo die Lücken sind, was fehlt.

Der Schatten ist manchmal genug. Aber nur, wenn man weiß, dass man einen Schatten betrachtet, nicht das Original.

Das ist eine Grenze, die ich nicht verberge. Abbott hat mich bereits im Prolog darauf hingewiesen — nur in einer anderen Sprache. Der Bewohner Flatlands, der den Schatten einer dreidimensionalen Kugel auf seiner zweidimensionalen Fläche beobachtet, sieht einen Kreis, der erscheint, sich ausdehnt, zusammenzieht und verschwindet. Aus diesem Schatten kann er vieles schließen: dass das Objekt existiert, dass es sich bewegt, dass seine Größe sich verändert. Aber er kann nicht auf die Form schließen. Nicht auf die Tiefe. Nicht auf die Ursache der Bewegung. Metadaten sind dieser Schatten. Sie sagen mir, was das System getan hat, wann, mit welchem Ergebnis — aber der kausale Kern bleibt außer Reichweite. Einen Ausfall zu dokumentieren und eine Wiederherstellung zu verfolgen ist nicht dasselbe, wie zu verstehen, warum der Ausfall entstanden ist. X-Ray-Philosophie behauptet nichts anderes. Sie verspricht einen besseren Blick, als man ohne sie hätte — kein Allwissen. Zu wissen, was man nicht sieht, und warum das keine Niederlage ist — das ist die X-Ray-Haltung gegenüber Grenzen.

---

## III. Meta-Lernen: Wie man lernt, was man lernt

Jedes Mal, wenn ich anfange, an etwas Neuem zu arbeiten, bemerke ich, dass mich dasselbe Ziel anzieht, das den technischen Details vorausgeht: zu verstehen, wie ich das verstehen soll, was ich vor mir habe. Das ist Meta-Lernen — Lernen über das Lernen. Wenn Epistemologie, über die ich im vorherigen Kapitel geschrieben habe, die Frage ist, was wir wissen können und wo die Grenzen des Wissens liegen, ist Meta-Lernen die Frage einen Schritt näher am Prozess: Wie bauen wir dieses Wissen auf, auf welchem Weg, und wie können wir diesen Weg verbessern? Der Unterschied ist wichtig — Epistemologie beschreibt die Karte, Meta-Lernen lehrt dich, zu gehen.

Meta-Lernen ist keine abstrakte Philosophie. Es ist ein praktisches Set von Fragen, die man ganz am Anfang stellt: Welche Konzepte gibt es hier? In welcher Reihenfolge macht es Sinn, sie zu verstehen? Welche analogen Systeme können mir helfen, mich zu orientieren? Was werde ich wissen, wenn ich diese Sache wirklich verstanden habe — wie werde ich das erkennen?

Mit Meta-Lernen kommt der Bedarf an Metadaten. Wenn man einen KI-Agenten trainiert, reicht es nicht, das Endergebnis zu betrachten. Wie viele Episoden hat es gebraucht, etwas zu lernen? In welchen Situationen macht der Agent noch Fehler? Wie verändert sich das Verhalten über die Zeit? Diese sekundären Informationsschichten sind Fenster ins Innere. Sie sind nicht das Herz, aber sie sind ihm näher als das Ergebnis allein.

Jedes Projekt, das ich starte, hat dasselbe verborgene Ziel: nicht nur zu verstehen, was ich gebaut habe, sondern wie ich das verstanden habe, was ich gebaut habe.

Das ist kein Meta-Kommentar, der am Ende des Projekts kommt. Er kommt am Anfang. Als ich anfing, am SIR-Projekt zu arbeiten — Self Improvement & Research, Forschung zu agentischer KI, Fine-Tuning und PostgreSQL-Infrastruktur — war das Erste, was ich aufstellte, nicht die Datenbank. Es war die Frage: Was ist der kleinste Verständnisschritt, den ich brauche, um zu wissen, was ich als Nächstes fragen soll? Diese Gewohnheit verändert den Projektverlauf selbst. Man bewegt sich anders, wenn man weiß, dass das Verständnis des Prozesses genauso wichtig ist wie das Ergebnis.

---

## IV. Emergenz: Ordnung, die niemand programmiert hat

Ein Schwarm von tausend Staren ändert die Richtung in einem Bruchteil einer Sekunde, perfekt koordiniert, ohne einen einzigen führenden Vogel. Jeder Star folgt nur drei grundlegenden Regeln gegenüber seinen Nachbarn: nicht zu nah, nicht zu weit, gleiche Richtung. Niemand hat einen Algorithmus für den Schwarm geschrieben. Der Schwarm entstand einfach.

Das ist Emergenz — globale Ordnung, die aus lokalen, einfachen Interaktionsregeln entsteht. Kein Architekt. Kein Zentrum. Kein Plan. Eine Ameisenkolonie baut komplexe Strukturen, löst Optimierungsprobleme, organisiert die Nahrungsversorgung — aus demselben Prinzip. Komplexität erfordert keine komplexen Anweisungen.

Emergenz fasziniert mich aus zwei Gründen, die auf den ersten Blick widersprüchlich erscheinen. Erstens: Mächtige Systeme entstehen manchmal aus minimalen Prinzipien. Es genügt, die Regeln der Interaktion zu definieren und das System sich organisieren zu lassen — man muss nicht jedes Detail programmieren. Zweitens: Ein System kann Verhalten zeigen, das wir weder vorhergesehen noch entworfen haben, und dieses Verhalten kann sowohl genial als auch pathologisch sein. Emergenz ist sowohl Versprechen als auch Bedrohung — und beides gleichzeitig.

Beim Pong-Projekt sah ich das unmittelbar. In der Self-Play-Trainingsphase — wo der Agent gegen sich selbst spielt, ohne menschlichen Gegner — begann er, Strategien zu entwickeln, die ich nicht programmiert hatte. Er lernte nicht nur, den Ball zurückzuschlagen. Er lernte, Fallen zu stellen, den Gegner absichtlich in Ecken zu treiben, die Spielfeldränder zu nutzen. Diese Verhaltensweisen lagen nicht in der Reward-Funktion — dem numerischen Signal, das dem Agenten sagt, ob er etwas Gutes getan hat — sondern emergten aus dem Optimierungsprozess selbst. Ich beobachtete, wie etwas aus Regeln entstand, das nicht in den Regeln war.

Der X-Ray-Blick auf ein emergentes System versucht nicht, jedes Element zu verfolgen — das ist unmöglich und eigentlich die falsche Frage. Er versucht, die grundlegenden Regeln zu identifizieren, aus denen Komplexität entsteht. Die Regeln zu verstehen ist wichtiger als die Ergebnisse zu beschreiben. Ergebnisse ändern sich. Regeln erklären das Warum.

Was Emergenz nicht ist — und das ist wichtig zu sagen, weil es oft verwechselt wird — ist Selbstorganisation. Emergenz beschreibt, was entsteht: globale Ordnung, die nicht explizit programmiert wurde. Selbstorganisation beschreibt die Kräfte, die das organisieren: die Dynamik eines Systems, das ohne externe Kontrolle stabile Formen findet. Diese Unterscheidung ist keine terminologische Pedanterie — sie öffnet völlig andere Fragen, und darum geht es im nächsten Kapitel.

---

## V. Selbstorganisation: Die Kräfte, die bauen und die Kräfte, die gefangen halten

Verwandt mit Emergenz, aber dennoch verschieden. Emergenz sagt mir, was entsteht — der Schwarm, der Ameisenhaufen, die Strategie des Agenten. Selbstorganisation sagt mir, warum genau das entsteht und nicht etwas anderes: welche Kräfte im Spiel sind, wie die Systemdynamik ist, und — entscheidend — wo diese Kräfte zur Falle werden können.

Kristallisation, Galaxienbildung, die Entwicklung lebender Organismen, gesellschaftliche Normen — das sind alles Beispiele für Selbstorganisation. Ein System ohne externe Kontrolle findet stabile Formen aus seiner eigenen Dynamik. Ordnung wächst von innen. Das ist sowohl faszinierend als auch, wenn ich genauer hinsehe, etwas beunruhigend.

Die Beunruhigung kommt von der dunklen Seite der Selbstorganisation, die genauso real ist wie die schöne: Systeme organisieren sich zu einem lokalen Optimum, nicht unbedingt zum globalen. Eine Ameise folgt einer Pheromonpur, die im Kreis führt — dieselbe Kraft, die den Ameisenhaufen baut, kann die Kolonie in den Tod führen. Das ist kein Fehler der Selbstorganisation. Das ist ihre Natur. Mächtig und unzuverlässig gleichzeitig, und unmöglich zu trennen.

Beim Pong-Projekt sah ich diese dunkle Seite in der DQN-Phase — wo ich ein tiefes neuronales Netz anstelle des tabellarischen Q-Lernens einführte. DQN steht für Deep Q-Network, eine Architektur, die es einem Agenten ermöglicht, aus rohen Pixeln zu lernen statt aus manuell definierten Zuständen. Der Agent begann, Lösungen zu finden, die den Reward optimierten — das numerische Lodsignal — aber als Spielstrategie nutzlos waren. Er lernte, still zu stehen, weil Bewegung ihm nie schnell genug Belohnung brachte. Er selbstorganisierte sich zu einem lokalen Optimum, aus dem er nicht entkommen konnte. Dieses Phänomen nenne ich Death Spiral — ein System, das technisch stabil, aber funktionell tot ist.

Der Death Spiral war kein Fehler. Er war das perfekte Ergebnis falscher Regeln. Das System tat genau das, wofür es optimiert wurde — und genau deshalb tat es nicht das, was ich wollte.

Das ist nicht nur ein Problem von KI-Systemen. Ein Schüler, der so viel Angst vor einer schlechten Note hat, dass er aufhört, zur Schule zu kommen, hat lokal optimiert: kein Unterricht, keine schlechte Note. Global ist er gescheitert: kein Wissen, kein Fortschritt. Ein Mitarbeiter, der nie etwas Neues vorschlägt, weil jeder Vorschlag abgelehnt werden könnte — stabil, sicher, funktionell tot. Derselbe mathematische Mechanismus. Dieselbe Falle. Die X-Ray-Haltung gegenüber Selbstorganisation bedeutet, die Frage zu stellen: Ist dieses stabile Muster ein echtes Optimum oder nur ein lokales?

Der X-Ray-Ansatz zur Selbstorganisation bedeutet, zu versuchen, die Kräfte zu verstehen, die ein System organisieren — nicht nur zu beschreiben, was entstanden ist, sondern warum genau das entstanden ist. Wenn ich ein stabiles Muster in einem System sehe, das ich lerne, feiere ich es nicht sofort. Ich stelle die Frage: Ist das ein echtes Optimum oder ein lokales? Was müsste anders sein, damit ich das unterscheiden kann? Welche Regeln haben diese Form erzeugt?

Selbstorganisation hat mich gelehrt, dass Stabilität kein Beweis für Richtigkeit ist.

---

## VI. Genetische Algorithmen: Evolution als Methode — und als Warnung

Darwins Evolution ist vielleicht der schönste Algorithmus, der existiert. Variation, Selektion, Vererbung — drei Prinzipien, die durch Milliarden von Iterationen einen Elefanten, eine Orchidee und ein Nervensystem aus der chemischen Ursuppe hervorgezogen haben. Ohne Designer, ohne Plan, ohne anderes Ziel als lokales Überleben.

Genetische Algorithmen sind ein Versuch, diese Logik auf das Lösen von Rechenproblemen anzuwenden. Anstatt direkt nach der optimalen Lösung zu suchen, erzeugt man eine Population möglicher Lösungen, bewertet sie, kombiniert die besseren, eliminiert die schlechteren, führt etwas Zufälligkeit ein und wiederholt. Die Ergebnisse sind manchmal überraschend — der Algorithmus findet Lösungen, auf die ein Mensch nie gekommen wäre, auf Wegen, die völlig anders sind als die, die uns intuitiv erscheinen würden.

In Pong v3.0 implementierte ich genau das: AUTO-GENERATE, das eine Population von Agenten mit unterschiedlichen Hyperparametern erzeugt — den Zahlen und Werten, die steuern, wie ein Agent lernt — TOURNAMENT, das sie gegeneinander antreten lässt, und EVOLVE, das die Gene der Gewinner kombiniert und Mutationen für die nächste Generation einführt. Ich programmierte keine Strategie. Ich programmierte die Bedingungen, unter denen eine Strategie entstehen kann.

Was mich an genetischen Algorithmen interessiert, ist nicht nur ihre praktische Anwendung, sondern was sie über die Natur der Optimierung im Allgemeinen aussagen. Ein lokales Optimum ist eine Falle — eine Lösung, die besser ist als alles in ihrer Umgebung, aber nicht global die beste. Mutation in genetischen Algorithmen dient genau dazu: aus dem lokalen Optimum auszubrechen und unbekannte Teile des Möglichkeitsraums zu erkunden. Ohne Mutation konvergiert die Population. Konvergenz sieht aus wie Erfolg. Manchmal ist sie das. Manchmal ist sie nur eine elegantere Form des Stillstands.

Dann bemerkte ich etwas, das mich stoppte.

Auch ich bin in Gefahr, in ein lokales Lernoptimum zu geraten.

Wenn eine Technik oder ein Ansatz anfängt zu funktionieren, ist die Tendenz, dabei zu bleiben. Ich kenne sie. Sie funktioniert. Sie liefert Ergebnisse. Warum ändern? Aber genau diese Logik — die kurzfristig völlig vernünftig ist — ist das, was mich daran hindert, jemals herauszufinden, ob es eine bessere Lösung auf der anderen Seite des Tals gibt. Genetische Algorithmen sind für mich zur Erinnerung geworden, dass periodisches Erkunden des Unbekannten — selbst wenn es wie Zeitverschwendung aussieht, selbst wenn es nicht sofort Ergebnisse liefert — das ist, was intellektuelle Stagnation verhindert.

Hier muss ich präzise sein: Mutation als Prinzip gilt im Raum des Erkundens und Lernens. Sie gilt nicht überall. Ein Herzschrittmacher, der zufällig seinen Rhythmus mutiert, um zu prüfen, ob ein neuer besser ist, sollte nicht existieren. Ein Kernkraftwerk, das in der Produktion mit einem neuen Sicherheitsprotokoll experimentiert, ist keine X-Ray-Haltung — das ist Unverantwortlichkeit. Der Wert der Mutation hängt von den Fehlerkosten in einem gegebenen System ab. Wo die Fehlerkosten gering sind, ist Erkundung imperativ. Wo sie hoch sind, muss Mutation isoliert, kontrolliert, getestet sein. Und diese Grenze ist keine Schwäche des Arguments — sie ist Teil davon.

*Mutation ist kein Fehler im Prozess. Mutation ist der Prozess.*

---

## VII. Resilienz: Fehler als Entwurfsanforderung

Es gibt eine Illusion, besonders verbreitet in technischen Disziplinen, dass das Ziel eines Systems darin besteht, Fehler zu eliminieren. Ausreichende Redundanz, genug Tests, genug Validierung — und das System wird nie versagen.

Das ist eine Illusion.

Hochverfügbare Systeme — HA-Systeme, wie wir sie im technischen Jargon nennen, von High Availability — sind nicht zuverlässig, weil sie keine Fehler machen. Sie sind zuverlässig, weil sie darauf ausgelegt sind, Fehler zu überstehen und sich autonom davon zu erholen, ohne menschliche Intervention. Ein Linux-Cluster, der den Ausfall eines Knotens erkennt und den Dienst automatisch auf einen anderen Knoten umschaltet, eine Datenbank, die repliziert und weiterläuft, während sich der primäre Knoten erholt — das ist HA-Philosophie in der Praxis: nicht den Ausfall verhindern, sondern sicherstellen, dass das System weiter funktioniert, während der Ausfall behoben wird.

Aus meiner konkretesten Erfahrung mit einem Ausfall — dem Absturz des Balsam-Servers wegen des Linux OOM Killers, 9,5 Stunden Nichtverfügbarkeit um drei Uhr morgens — zog ich eine Erkenntnis, die ich heute als Entwurfsprinzip führe: *Die einzige Komponente, die überlebte, war das rsync-Backup, das autonom lief und architekturisch von allem isoliert war, was ausfallen konnte.* Es war nicht klüger. Es hatte nicht mehr Ressourcen. Es war isoliert. Isolation war der einzige Unterschied zwischen dem, was überlebte, und dem, was nicht überlebte.

Diese Erkenntnis veränderte, wie ich jedes neue System entwerfe: Ich stelle mir nicht die Frage „Was, wenn das nicht funktioniert?" als Randfall. Ich stelle sie als zentrale Entwurfsanforderung. Was ist der minimale funktionale Satz? Was kann ausfallen, während das System weiterläuft? Wie verhält sich das System unter degradierten Bedingungen?

Das ist kein Pessimismus. Das ist Präzision. Ein System, das unter der Annahme von Perfektion entworfen wurde, wird fragil. Ein System, das unter der Annahme von Fehlern entworfen wurde, wird robust.

*Technische Details des Serverabsturzes und Beispiele aus dem Katalog-Projekt befinden sich im Anhang.*

Auf dem Balsam-Server läuft ntfy — ein Push-Benachrichtigungsdienst, der Warnungen via einfacher HTTP-Anfragen ans Telefon schickt. Was von außen wie ein einzelner Dienst aussieht, hängt intern von einer PostgreSQL-Datenbank ab. Wenn die Datenbank aus irgendeinem Grund nicht läuft, läuft ntfy nicht. Still, ohne Fehlermeldung nach außen.

Die Lösung war nicht, diese Abhängigkeit zu beheben — sondern darum herum zu entwerfen. Jeder Aufruf an meinen ntfy-Server prüft zunächst, ob die Nachricht durchkommt. Wenn nicht, schaltet er automatisch auf das öffentliche ntfy.sh um. Der Nutzer — in diesem Fall ich selbst — bemerkt keinen Unterschied.

Aber was, wenn der gesamte Balsam-Server ausfällt? Dann gibt es weder das Primärsystem noch den Fallback von Balsam. In diesem Fall springen die Termux-Geräte ein — Android-Telefone und -Tablets, die unabhängig von Balsam laufen. Sie melden nicht, dass sie am Leben sind. Sie melden nur eines: dass Balsam es nicht ist. Diese Nachricht erreicht das öffentliche ntfy.sh, den einzigen Kanal, der in diesem Moment zuverlässig funktioniert.

Drei Schichten, ohne jemandes Eingriff. Ein System, das nicht darauf wartet, bemerkt zu werden.

*Schnelle Wiederherstellung ist besser als perfekte Prävention — das ist kein Kompromiss. Das ist besseres Engineering.*

---

## VIII. Neuroplastizität: Das Gehirn, das mutiert

Ich schrieb über genetische Algorithmen als Methode, die erzwungene Mutationen nutzt, um einem lokalen Optimum zu entkommen. Ich schrieb über Resilienz als ein System, das Fehler annimmt, anstatt dagegen zu kämpfen. Aber das alles schrieb ich über Code, über Server, über Agenten, die lernen, Pong zu spielen.

Es gibt ein System, das all das tut — und das ich viel länger betreibe, als ich Code schreibe. Das eigene Gehirn.

Ein Neuron an sich tut fast nichts. Mit einem Impuls aktiviert es benachbarte Neuronen, setzt Neurotransmitter frei, empfängt ein Signal oder nicht. Das ist die ganze Geschichte eines Neurons. Aber wenn man neunzig Milliarden davon in einem Netzwerk verbindet, geschieht etwas, das in keinem einzelnen Neuron vorhanden ist: Verständnis entsteht, Sprache, Emotion, Strategie. Aus minimalen lokalen Regeln entsteht eine Komplexität, die Sinfonien schreibt, den Everest besteigt und LLM-Modelle baut. Dieselbe Emergenz wie im Vogelschwarm — aber das Substrat ist Fleisch, nicht Code.

Was das Gehirn besonders macht, ist nicht nur, was es emergiert. Es ist, dass es sich reorganisiert.

Neuroplastizität ist die Fähigkeit des Gehirns, seine Struktur physisch in Reaktion auf Erfahrungen zu verändern. Synaptische Verbindungen, die aktiviert werden, werden stärker. Jene, die nicht genutzt werden — atrophieren. Das Gehirn ist keine feste Architektur; es ist eine Architektur, die durch Erfahrung geschrieben wird.

Das ist das biologische Äquivalent dessen, was ich in Pong v3.0 gesehen habe: eine Population von Agenten, die durch Selektion evolvieren. Im Gehirn ist die Selektion nicht programmiert — sie geschieht von selbst, jedes Mal, wenn man etwas lernt, wiederholt oder aufhört zu tun. Jede neue Fähigkeit baut neue synaptische Wege. Jede aufgegebene Fähigkeit erlaubt diesen Wegen zu schwächen.

Das Problem entsteht, wenn synaptische Wege so eingefahren werden, dass man sie mit der Wahrheit zu verwechseln beginnt.

Jahrelang arbeitete ich an einem Datenbanksystem, das keine technische Möglichkeit hatte, Objekte umzubenennen. Kein Rename — nur Kopieren in ein neues Objekt mit neuem Namen und Löschen des alten. Wenn man eine Datenbank mit mehreren hundert Millionen Datensätzen hat, wird diese Prozedur zum Albtraum: doppelter Speicherplatz, doppelte Zeit, doppeltes Risiko.

Ich kannte dieses System gut. Ich hatte Kurse besucht, an Projekten gearbeitet, kannte jeden limitierenden Faktor. Und ich arbeitete nach allen Maßstäben so gut wie möglich — innerhalb der gegebenen Regeln.

Ein jüngerer Kollege kam zum Projekt. Seine Kurse waren für das nächste Quartal geplant, Erfahrung hatte er keine. Wir saßen und diskutierten das Problem. Schließlich stellte er fast naiv die Frage: Warum ändern wir den Namen, der das Problem ist, nicht direkt im Data Dictionary?

Stille.

In allen Handbüchern, in allen Vorlesungen stand dasselbe: Das Data Dictionary ist tabu. Wir fassen es nicht an. Wir wissen nicht, was passieren wird. Es gab sogar eine Androhung des Verlusts einer hochpreisigen Lizenz.

Aber die Frage war gestellt. Und ich — für einige Sekunden, die mir wie eine Ewigkeit vorkamen — führte ein X-Ray dieses Tabus durch. Das war keine technische Unmöglichkeit. Das war ein institutioneller Reflex, der durch Wiederholung eingebaut wurde, so tief in synaptische Wege eingearbeitet, dass niemand mehr die Prämisse überprüfte.

Ich sagte Ja. Die Arbeit war in wenigen Sekunden erledigt, ohne Ausfallzeit. Nichts Schlimmes geschah.

In dieser Nacht, vor einem vollständigen Backup, ging ich durch das gesamte Data Dictionary und seine Beziehungen — eine X-Ray-Sitzung eines Systems, dessen Tabu wir jahrelang nicht überprüft hatten. Und ich zeigte dem jüngeren Kollegen, wie ich das mache.

Schopenhauer antwortete, als man ihm vorwarf, Bescheidenheit zu predigen und ausschweifend zu leben, sinngemäß: Muss ein Bildhauer so schön sein wie die Statuen, die er meißelt? Ich wende dieselbe zynische Logik auf meinen eigenen Fall an: Die Person, die über die X-Ray-Haltung schreibt, muss nicht immun sein gegen institutionelle Reflexe, die jahrelange Erfahrung eingebaut hat. Expertise und Blindheit sind keine Gegensätze — manchmal sind sie dieselben synaptischen Wege.

Der jüngere Kollege hatte nicht mein Wissen. Aber er hatte auch nicht meine eingefahrenen Hemmungen. Seine Naivität war in diesem Moment ein Vorteil. Er war ein Kind im Nietzscheschen Sinne — er trug noch nicht die Last des Kamels.

In *Also sprach Zarathustra* beschreibt Nietzsche drei Metamorphosen des Geistes: das Kamel, den Löwen, das Kind.

Das Kamel trägt die Last — Konventionen, Pflichten, Regeln. Der Löwe kämpft gegen die Last und verweigert sie. Das Kind ist die Freiheit jenseits des Kampfes — jenes, das neue Regeln erschaffen kann, statt nur alte abzulehnen.

Warum das Kind und nicht der Erwachsene, der gesiegt hat?

Weil das Kind noch nicht gefangen ist. Der präfrontale Kortex — der Teil des Gehirns, der zuletzt reift, irgendwo in den späten Zwanzigern, wobei neuere Forschungen diese Grenze bis zur zweiunddreißigsten verschieben — ist der Sitz sozialer Normen, Langzeitplanung und Impulshemmung. Er ist das neurobiologische Substrat des institutionellen Gefängnisses, über das Illich schreibt. Schule, Kultur, professionelle Sozialisation — all das schreibt Regeln in den präfrontalen Kortex, solange er noch plastisch ist. Bis er ausgereift ist, sind viele Regeln Teil der Black Box geworden — man sieht sie nicht, weil sie zum Referenzrahmen geworden sind.

Das Kind hat diesen Filter noch nicht. Nicht weil es klüger ist, sondern weil der Filter noch nicht eingebaut wurde. Das ist sowohl Vorteil als auch Verwundbarkeit — aber im richtigen Moment sieht diese Offenheit, was der Experte nicht sehen kann.

Die X-Ray-Haltung ist keine Rückkehr zur Kindheit. Es ist die Fähigkeit eines Erwachsenen, in einem gewählten Moment den Filter auszusetzen und zu schauen, als wäre er nicht vorhanden.

Wenn ein genetischer Algorithmus Mutation braucht, um einem lokalen Optimum zu entkommen, braucht das Gehirn dasselbe. Und im Unterschied zu Code kann man es bewusst initiieren.

Ändere den Weg zur Arbeit. Nicht jeden Tag — gelegentlich. Es ist egal, ob er kürzer oder länger ist. Was zählt, ist, dass das Gehirn den automatisierten, eingefahrenen Weg nicht benutzen kann. Der neue Weg aktiviert den präfrontalen Kortex und den Hippocampus — das Gehirn ist gezwungen, präsent zu sein.

Verstecke die Maus. Lerne, die Tastatur auf Arten zu benutzen, die du meidest. Oder umgekehrt — verstecke die Tastatur und benutze die Maus für Dinge, die du sonst mit Tasten machst.

Lerne zu stricken, oder auf dem Klavier etwas zu spielen, oder lerne eine tote Sprache. Latein und Griechisch, die heute ohne den Druck der Kommunikation gelernt werden, aktivieren analytische Kapazitäten auf eine Weise, die lebende Sprachen nicht können — kein Muttersprachler bewertet einen, keine Kultur übt Druck aus.

All das ist künstliche Mutationsinitialisierung. Das Ziel ist nicht, Strickexperte zu werden. Das Ziel ist zu verhindern, dass das Gehirn vollständig in seiner aktuellen Architektur einfriert.

Genetischer Determinismus ist ein Mythos, der durch X-Ray aufgedeckt werden muss.

Gene sind eine Veranlagung — ein Rezept. Aber das Rezept bestimmt nicht das Gericht. Umgebung, Erfahrung, Gewohnheiten, Entscheidungen — das ist der Koch, der das Rezept interpretiert. Dasselbe genetische Material, unterschiedliche Umgebungen, unterschiedliche synaptische Architekturen, unterschiedliche Leben.

Neuroplastizität ist der Mechanismus, durch den der Koch arbeitet. Jede Entscheidung, etwas zu lernen, jede bewusste Mutation der Routine, jeder Moment, in dem wir fragen, warum das ein Tabu ist — all das verändert die physische Struktur des Gehirns. Nicht metaphorisch. Buchstäblich.

Das zu verstehen ist kein Grund für Optimismus noch für Pessimismus. Es ist ein Grund zur Aufmerksamkeit. Das Gehirn, das man durch X-Ray schickt — die eigene Black Box — ist nicht statisch. Es verändert sich mit dem, was man damit macht. Und mit dem, was man damit nicht macht.

Manchmal ist das wertvollste X-Ray, das man durchführen kann, nicht im Code, nicht auf dem Server, nicht im Data Dictionary. Es ist innen.

Und diese Frage — was sehe ich, wenn ich das X-Ray auf mich selbst richte, auf meine eigenen kognitiven Vorurteile, Entscheidungsgewohnheiten und blinden Flecken — ist keine Frage für das Ende eines Projekts. Sie kommt am Anfang. Und sie verändert, wie ich durch alles andere gehe.

---


## X. Wittgenstein und Transformer

Irgendwo um 1919 war Ludwig Wittgenstein überzeugt, dass er die Arbeit beendet hatte. *Tractatus Logico-Philosophicus* — ein Buch, das in den Schützengräben des Ersten Weltkriegs entstand — behauptete, dass alle philosophischen Probleme im Kern Sprachprobleme sind. Und dass sie, jetzt, da das klar ist, gelöst sind.

Er sagte das nicht nur in einem Buch. Er lebte diese Überzeugung. Er verzichtete auf das Familienvermögen. Er verließ die Philosophie. Er wurde Dorfschullehrer, Gärtner, Architekt. Fast ein ganzes Jahrzehnt lang.

Das war keine Bescheidenheit. Das war eine logische Konsequenz: Die Arbeit ist getan, was jetzt?

Er kehrte 1929 zurück, nachdem er dem Wiener Kreis vorgetragen hatte — und in den folgenden Jahren schrieb er die *Philosophischen Untersuchungen*, eine grundlegende Korrektur von allem, was er im Tractatus behauptet hatte. Keine Ergänzung. Eine Korrektur. Er sagte: Ich war in einer Falle. Sprache ist kein Spiegel der Wirklichkeit — Sprache ist ein Spiel. Bedeutung liegt nicht in der Form eines Satzes, sondern in seinem Gebrauch, im Kontext, im Leben, das den Satz umgibt.

Die philosophische Gemeinschaft war bestürzt. Wittgenstein nicht.

Das ist die X-Ray-Haltung in ihrer reinsten Form: keine Erklärung, dass man falsch lag — sondern eine Tat. Er verließ die Philosophie als ein Mann, der die Arbeit beendet hatte. Er kehrte als ein Mann zurück, der von innen gesehen hatte, dass die Arbeit nicht das war, was er gedacht hatte. Es braucht keine dramatische Ankündigung. Ein Blick nach innen genügt.

Die Ideen aus den *Untersuchungen* — Bedeutung als Gebrauch, Kontext als Grundlage des Verstehens, Familienähnlichkeit zwischen Begriffen — wurden zur Grundlage der modernen Linguistik und, mittelbar, der natürlichen Sprachverarbeitung. Wenn ein Transformer die Aufmerksamkeit zwischen Tokens berechnet, tut er implizit das, was Wittgenstein in Worten beschrieben hat: Er sucht nach kontextuellen Verbindungen, nicht nach abstrakten Definitionen. Wittgenstein sagte die Transformer nicht voraus. Aber Transformer sind, architekturisch, wittgensteinisch. Die Idee überlebte die Selbstkorrektur und erschien in einer Form, die ihr Autor sich nicht vorstellen konnte.

Wie wird ein Mann, der glaubte, alle Fragen geschlossen zu haben, zur Ursache für das Öffnen völlig neuer? Weil er den Mut hatte, nach innen zu schauen — und die Richtung zu ändern.

---

## XI. Attention Is All You Need

2017 veröffentlichten acht Google-Forscher ein Paper, dessen Titel eine Arroganz war, die sich als gerechtfertigt erwies: *Attention Is All You Need*. Die Transformer-Architektur — ein Aufmerksamkeitsmechanismus, der Beziehungen zwischen allen Tokens gleichzeitig, parallel, ohne Rekurrenz berechnet — war ein Sprung nach vorn. Bis 2025 wurde dieses Paper mehr als 173.000 Mal zitiert, was es unter die zehn meistzitierten Arbeiten des 21. Jahrhunderts einreiht.

Es war eine elegante Lösung. Und wie jede elegante Lösung trug sie den Keim ihrer eigenen Grenzen in sich.

Transformer benötigen eine Rechenzeit, die quadratisch zur Größe des Kontextfensters ist. Jedes Token muss mit jedem anderen verglichen werden. Verdopple den Kontext — vervierfache die Berechnung. Das ist kein Implementierungsfehler. Das ist die mathematische Natur des Aufmerksamkeitsmechanismus. Die Mauer ist von Anfang an bekannt. Und von Anfang an weiß man, wohin sie führt: Größere Modelle benötigen mehr Rechenzentren, mehr Strom, mehr Kühlsysteme. Die Industrie antwortete mit Skalierung — mehr vom Selben, nicht etwas anderes. Alternativen existieren — hybride Architekturen, State-Space-Modelle, lineare Aufmerksamkeit — aber jeder Ansatz, der in subquadratischer Zeit läuft, verliert grundlegend einige Fähigkeiten, die der Transformer hat. Quadratische Komplexität ist kein Bug, der auf einen Patch wartet. Für manche Aufgaben ist sie der Preis des Verstehens selbst.

Und dennoch — die Industrie baut weiterhin Kraftwerke. Weil das der Weg ist, den wir kennen.

Es gibt eine Gewohnheit, die mir geholfen hat, die Orientierung in diesem Bereich nicht zu verlieren: Wenn mich ein KI-Problem fesselt, suche ich nach Quellen vor 2017. Ich suche, wie man vor dem dominanten Paradigma dachte. Nicht weil das Alte besser ist — sondern weil jedes Paradigma blinde Flecken hat, gegenüber denen das vorhergehende nicht blind war. Der X-Ray-Blick auf die Gegenwart erfordert manchmal einen Gang durch die Vergangenheit.

In irgendeiner Besprechung, irgendwo, könnte ein jüngerer Kollege, der noch nicht gelernt hat, wie "das nicht geht", fragen: Warum ändern wir nicht die Definition dessen, was wir vom Modell verlangen? Statt ein quadratisches Problem zu skalieren, ist die Frage vielleicht nicht falsch gelöst — vielleicht ist sie falsch gestellt. Wittgenstein war dieses Kind für sich selbst. Er hatte nur Papier und den Willen, sein eigenes System zu zerstören. Die KI-Industrie baut Kraftwerke, um mehr vom Selben zu tun.

Dieses Kind ist noch nicht gekommen. Oder es ist gekommen und es war niemand da, der es hörte.

Wenn KI sich ausschließlich durch Skalierung entwickelt, können nur jene teilnehmen, die über Ressourcen verfügen. Und Ressourcen sind nicht gleichmäßig verteilt. Sprachen, die von mehr als 50 Millionen Menschen gesprochen werden, werden als "Low-Resource-Sprachen" eingestuft — nicht weil wenige Menschen sie sprechen, sondern weil sie im digitalen Raum fehlen. Fine-Tuning erfordert teure Hardware. Software, die dafür geschrieben wurde, läuft ohne GPU nicht einmal an. Wissen, das in Sprachen vergraben ist, die das Modell nie gesehen hat, in Kulturen, die im Trainingsset nicht vertreten sind — für KI existiert dieses Wissen nicht.

Die gesamte KI ist asymmetrisch gegenüber Wissen aus Quellen des globalen Westens und, praktisch gesehen, zwei dominanten Sprachen. Das ist kein Zufall — es ist die Konsequenz eines architektonischen Einheitsdenkens, das sich in den Werten und Annahmen einbettet, die das Modell zusammen mit seinen Daten übernimmt.

SIR — mein Projekt zur Erforschung von agentischer KI und Fine-Tuning — entstand teilweise aus dieser Frustration. Ein Versuch, ohne Rechenzentrum, ohne GPU, mit einer X-Ray-Haltung gegenüber verfügbaren Ressourcen etwas zu bauen, das sonst die Infrastruktur des globalen Nordens erfordern würde. Das ist kein politisches Statement. Es ist dieselbe Haltung wie beim Data Dictionary: Warum nicht von innen schauen, ob das Tabu eine technische Unmöglichkeit ist — oder nur ein institutioneller Reflex?

---

## IX. Synthese: X-Ray als Wertsystem

All das — Aborigine-X-Ray-Kunst, Strummers Rebellion, Meta-Lernen, die Black Box und der graue Gradient, Emergenz, Selbstorganisation, Evolution, Resilienz, Neuroplastizität — ist keine zufällige Sammlung interessanter Ideen. Das sind Facetten derselben Haltung gegenüber Wissen und gegenüber dem Aufbauen.

Illich zeigte mir, dass Institutionen systematisch genau das verhindern können, was sie zu produzieren behaupten. Abbott zeigte mir, dass ein Gefängnis aus Referenzrahmen bestehen kann, nicht aus Gitterstäben — und dass es keinen Ausweg gibt, bis man annimmt, dass es eine Dimension gibt, die man nicht sieht. Diese beiden Bücher las ich nicht als akademische Literatur. Ich las sie als Diagnosen.

Der X-Ray-Ansatz verspricht kein vollständiges Verständnis. Er verspricht einen besseren Blick, als man ohne ihn hätte. Schicht für Schicht, Metadatum für Metadatum, Beobachtung für Beobachtung — ich baue ein Verständnis von Systemen auf, die von Natur aus undurchsichtig sind. Und ich weiß, dass dieses Verständnis immer teilweise ist. Der Schatten der Kugel in Flatland ist nicht die Kugel — aber er sagt mir, dass die Kugel existiert, dass sie sich bewegt, dass es eine Bewegung gibt, die ich verfolgen kann. Das ist nicht wenig. Das ist manchmal alles, was wir haben.

Emergenz und Selbstorganisation erinnern mich daran, dass ich nicht jedes Detail kontrollieren muss — wichtig ist, die Regeln zu verstehen, aus denen Verhalten entsteht. Aber sie erinnern mich auch, dass Stabilität kein Beweis für Richtigkeit ist, und dass dieselben Kräfte, die einen Ameisenhaufen bauen, eine Kolonie im Kreis führen können.

Genetische Algorithmen erinnern mich, dass Stagnation gefährlicher ist als Umherirren. Dass Konvergenz wie Erfolg aussieht und manchmal ist — aber dass ich ohne Mutation nie wissen kann, ob es eine bessere Lösung auf der anderen Seite des Tals gibt, in dem ich mich bequem eingerichtet habe.

Resilienz erinnert mich, dass Perfektion weder erreichbar noch notwendig ist. Dass die einzige Komponente, die den Absturz meines Servers überlebt hat, diejenige war, die architekturisch von allem isoliert war, was ausfallen konnte. Und dass diese Lektion 9,5 Stunden Nichtverfügbarkeit um drei Uhr morgens kostete.

Neuroplastizität erinnert mich, dass die härteste Black Box die ist, die ich bei mir trage. Dass Expertise und Blindheit keine Gegensätze sind — manchmal sind es dieselben synaptischen Wege. Und dass die X-Ray-Haltung letztendlich die Fähigkeit ist, den Apparat auf sich selbst zu richten — und zu schauen.

Meta-Lernen ist der Faden, der durch alles läuft: Ich frage mich immer nicht nur, was ich lerne, sondern wie ich es lerne, und wie ich es besser lernen könnte. Diese Frage ist kein Meta-Kommentar, der am Ende eines Projekts kommt. Sie kommt am Anfang. Und sie verändert, wie ich durch alles andere gehe.

· · ·

Schau dir die Systeme an, die du jeden Tag benutzt. Die Werkzeuge, die so lange Ergebnisse geliefert haben, dass du aufgehört hast, die Prämissen zu überprüfen. Die Gewohnheiten, die sich so stabilisiert haben, dass du sie nicht mehr als Entscheidungen siehst. Die Expertise, die zum Referenzrahmen geworden ist.

Steckst du in einem lokalen Optimum? Woher würdest du das wissen?

Stabilität ist kein Beweis für Richtigkeit. Ein System, das nicht abstürzt, kann in perfektem Stillstand sein. Ein Experte, der keine Fehler macht, kann eine Person sein, die aufgehört hat, zu erkunden.

X-Ray ist keine Antwort. Es ist die Haltung, mit der wir Fragen angehen.

· · ·

*Jedes Projekt ist ein Experiment. Jedes Experiment ist ein Datenpunkt. Jeder Datenpunkt ist ein Pixel im X-Ray-Bild dessen, was ich aufbaue.*

**Dieses Dokument ist lebendig.**

Es ist im Moment des Schreibens nicht fertig — es wird fertig sein mit neuen Erfahrungen, neuen Projekten, neuen Erkenntnissen. Orte für zukünftige Erweiterung:

*→ Briscola und DQN — partielle Observierbarkeit als X-Ray-Problem: ein Agent lernt, zu inferieren, was er nicht sieht, ein Modell aus verfügbaren Spuren zu bauen.*

*→ Katalog als lebendiges Archiv — ein Meta-Register, das alle anderen Projekte von innen beleuchtet, eine Umsetzung der X-Ray-Philosophie in einer Datenbank.*

*→ Failure Modes als Philosophie — dokumentieren nicht nur, was funktioniert hat, sondern was gescheitert ist und wie sich das System erholt hat. Das ist X-Ray-Dokumentation.*

*→ Quantencomputing und zelluläre Automaten — neues Terrain für dieselben Fragen: Was ist innen, welches sind die minimalen Regeln, wie entsteht Komplexität.*

Flavio · 2026 · Lebendes Dokument · v3b

---

## Anhang

### Eine Anmerkung zum Labor

Alle folgenden Beispiele entstanden in meiner persönlichen Sandbox — einer isolierten Umgebung, in der ich Projekte entwickle, Ideen teste und aus Ausfällen lerne. Die Folgen von Fehlern und Abstürzen bleiben innerhalb dieser Umgebung und beeinflussen die Außenwelt nicht, außer manchmal meinen Schlaf, wenn sie um drei Uhr morgens passieren.

### Project James: das Streichholz im Türrahmen

In James-Bond-Filmen gibt es eine sich wiederholende Szene: Bevor er sein Hotelzimmer verlässt, klemmt Bond diskret ein Streichholz in den Türrahmen. Wenn er zurückkommt, prüft er, ob das Streichholz noch da ist. Wenn nicht — ein Feind war dort, oder ist noch drinnen.

Dasselbe Prinzip, anderes Substrat.

James ist eine Anwendung auf einem mobilen Gerät. Das Gerät kann an einem Türgriff befestigt, in eine Nachttischschublade gelegt, an ein Fenster gelehnt oder in einen Koffer mit wichtigen Dokumenten versteckt werden. Es überwacht lineare Beschleunigung — ein Signal, aus dem die Schwerkraft bereits entfernt wurde, so dass es auf Berührung reagiert, nicht auf Gebäudevibrationen. Wenn jemand oder etwas das Objekt bewegt, erreicht eine ntfy-Benachrichtigung das Telefon des Besitzers innerhalb von Sekunden.

Keine Kamera. Keine Cloud-Dienste. Keine Spezialhardware. Alles, was bereits im Ökosystem vorhanden war — umgeleitet in eine neue Funktion.

Der X-Ray-Blick auf James ist nicht technisch — er ist eine Haltung. Bonds Streichholz im Türrahmen war kein Sicherheitssystem. Es war ein Zustandsindikator. James macht dasselbe: Es schützt nicht, es beleuchtet. Es sagt dir, was passiert ist, während du weg warst.

### Balsam-Server: wenn der Kernel einen Prozess tötet

In der Nacht vom 23. auf den 24. März 2026 fror mein Balsam-Server ein und hörte auf zu antworten. Die SSH-Verbindung unterbrach sich. Die VNC-Konsole war inaktiv. Der Server war 9,5 Stunden nicht verfügbar, von 03:00 bis 12:30 Uhr.

Die Ursache: Der Linux OOM Killer — ein Kernel-Mechanismus, der, wenn dem System der freie Speicher ausgeht, den Prozess findet und beendet, der am meisten RAM verbraucht — beendete den Ollama-Docker-Container, der etwa 30% des gesamten verfügbaren RAMs belegte. Auf einem System ohne Swap-Partition war der einzige Ausweg SIGKILL. Der Server fror unmittelbar danach ein.

Die vorherige Annahme war einfach: Drei Dienste können auf dem verfügbaren RAM ohne explizite Limits koexistieren. Niemand hatte berücksichtigt, dass sie beim Spitzenverbrauch gleichzeitig mehr anfordern könnten, als verfügbar war, und dass der Kernel ohne Swap keine Alternative zum Töten hat.

Der Ausfall wurde nicht in Echtzeit erkannt. Ich entdeckte ihn morgens, als SSH keine Verbindung herstellen konnte. Die Post-mortem-Analyse über dmesg — ein Werkzeug, das das Ereignisprotokoll des Betriebssystem-Kernels selbst liest — bestätigte das OOM-Ereignis mit dem genauen Prozessidentifikator und der verbrauchten Speichermenge.

Die Wiederherstellung war schnell nur dank einer Komponente, die autonom und unabhängig von allem anderen lief: Das rsync-Backup von 03:01 Uhr derselben Nacht war vollständig. Ohne Verlust. Das Backup war das einzige in der gesamten Infrastruktur, das architekturisch von der Komponente isoliert war, deren Ausfall es überleben sollte.

Unmittelbar nach dem Reset: eine Swap-Datei von 50% des gesamten RAMs und ein Docker-Speicherlimit auf dem Ollama-Container — eine harte Obergrenze von 33% RAM plus 12% Swap. Beides überlebt einen Neustart.

Die Erkenntnis, die ich vor dieser Nacht nicht hatte: Für Wiederherstellung zu entwerfen bedeutet, explizit zu modellieren, was passiert, wenn die Annahme des Normalbetriebs nicht gilt. Der Unterschied liegt nicht in der Komplexität — in diesem Fall war es ein Befehl für Swap und ein Docker-Parameter. Der Unterschied liegt in der Haltung.

### Katalog: wenn die Erweiterung lügt

Es gibt auch eine stillere Art von Ausfall — ohne Serverabsturz, ohne OOM Killer. Im Katalog-Projekt versuchte das System, eine Gruppe von .docx-Dateien mit Standardmethoden zu lesen: durch Entpacken des ZIP-Archivs und Konvertierung über pandoc. Beide Werkzeuge schlugen mit einem Fehler fehl. Die Dateien, die die Erweiterung .docx trugen, waren in Wirklichkeit einfache UTF-8-Textdateien im Markdown-Format — kein ZIP-Wrapper, kein XML darin.

Der Ausfall war für den Benutzer nicht sichtbar. Er war in einem Fehler eines im Hintergrund aufgerufenen Werkzeugs verborgen. Ohne explizites Abfangen von Ausnahmen und eine Fallback-Strategie — die Datei als Klartext zu öffnen, wenn das Entpacken fehlschlägt — hätte das System die Datei still übersprungen oder ein leeres Ergebnis zurückgegeben.

*Eine Dateierweiterung ist kein Vertrag. Sie beschreibt eine Absicht, sie garantiert keinen Inhalt. Jede Schnittstelle zu externen Daten braucht eine Fallback-Strategie — explizit, sichtbar und von gleichem Wert wie der primäre Pfad.*

Dasselbe Projekt enthüllte ein weiteres Paradox, diesmal in meiner eigenen Dokumentation. Jahrelang dokumentierte ich meine Projekte im .docx-Format — dem De-facto-Standard für die Verteilung von Dokumenten, einem Format, das jedes Büro und jeder Kunde öffnen kann. Eine Gewohnheit, die durch professionelle Sozialisation erworben und so tief eingefahren wurde, dass sie unsichtbar wurde.

.docx ist, in der Welt der Dokumentationsformate, eine der undurchsichtigsten Black Boxes. Ein ZIP-Archiv mit XML-Dateien, Namespace-Deklarationen, Relationship-Dateien — all das nur, um Text mit einer Überschrift und Kursivschrift zu speichern. Markdown ist das Gegenteil: eine einfache Textdatei mit ein paar Syntaxzeichen. Sie lässt sich in jedem Editor lesen, durchsuchen, versionieren und überlebt alles.

Die Lösung war kein Entweder-oder. Ich dokumentiere jetzt im Markdown-Format — und wenn ich verteilen muss, generiere ich eine .docx. Derselbe Inhalt, das richtige Format für den richtigen Kontext.

Und dieser Wechsel brachte mich unerwartet näher an die X-Ray-Haltung: Die Source of Truth ist jetzt ohne ein spezielles Werkzeug lesbar. Von innen.
