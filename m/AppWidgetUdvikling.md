# Teknisk arkitektur for (mobile) apps/widgets

Formålet med dette dokument er at koordinere tekniske valg for open source
(mobile) apps/widget implementation i biblioteksverdenen, så kode kan genbruges så let som muligt mellem projekter.

Dokumentet her er et udkast / oplæg til diskussion, - kom gerne med kommentarer til valgene og lad os prøve at finde en fælles platform.

Emnet her er i første omgang afgrænset til applikationer/widgets hvor logikken kører på klienten og som også kan bringes til delvis at fungere offline, i modsætning til (mobile) websites.

Kriterierne for de tekniske valg skal understøtte deling/genbrug af udvikling, og er derfor:

- Open Source
- Konsensus om valg
- Portabilitet (herunder også serverside)

Dette dokument vil senere blive taget op på tekniske arkitektur-forum hos DBC, og vil sandsynligvis blive interne guidelines her, så feedback nu er en måde at påvirke retningen her.

## Platform

Widgets/apps implementeres med webteknologi så de både kan publiceres som mobile applikationer via market/appstore med adgang til mobilspecifikke features såsom stregkodeskanning, og også kan køre direkte i webbrowseren. Dette giver desuden mulighed for, udover mobile apps, også at køre dem som widgets på pc'er, tablets og storskærme.

Herunder diskuteres forskellige måder at indpakke applikationen, udover blot at lægge den på en webserver.

### Apache Callback / PhoneGap

Mobilapps laves via Apache Callback(aka. PhoneGap). Dette gør at applikationen i market/appstore kan få adgang til mobil-specifikke features der ikke er i browseren, såsom skanning af stregkoder, samtidigt med at kodebasen også kan bruges til webapps hvor disse features er disabled.

PhoneGap skiftede navn til Callback i forbindelse med at det blev overdraget til Apache Foundation. Dette kan ses som en sikkerhed for at den forbliver helt open source, også efter at Adobe har opkøbt Nitobi(udviklerne af PhoneGap).

Udover Apache Callback, er særligt titanium, rhomobile, mosync undersøgt unity,
men de er alle mere lukkede og/eller understøtter ikke at applikationen samtidigt er en webapp. Bemærk at en del af dem har properitær bygning af mobilapps selvom de er open source.

### Widgets og offline apps

Udover indpakningen som mobilapp, kan webapplikationerne også bygges som offline apps og widgets.

Offline applikationer implementeres via en manifest-fil, der er en del af (html5)[http://www.w3.org/TR/html5/offline.html], og som definerer hvad der skal downloades for at applikationen kan køre offline.

Widget indpakning er en anden måde at lave distribuerbare pakker. W3 har (standard)[http://www.w3.org/TR/widgets/] på området, som forøjeblikket er
implementeret i PhoneGaps byggeservice, Opera browsers, samt Apache Wookie.
Dette foregår som et zip-arkiv med applikationen, og en `config.xml` der indeholde metadata.

JavaScript applikationer og biblioteker har derudover ofte metadata i form af en `package.json` som defineret i (commonjs)[http://wiki.commonjs.org/wiki/Packages/1.0]

## Programmeringssprog

JavaScript anvendes til udvikling af apps.

Udover JavaScript er særligt Java undersøgt, da dette sprog bruges en del på DBC og kan oversættes til JavaScript via GWT så det ligeledes kan bruges i browsere. Ulempen ved Java i forhold til JavaScript er at det ikke integrerer helt så tæt med browseren, hvilket gør at sproget nogen gange kommer i vejen i applikationsudvikling. For applikationer der bruger en mere afgrænset del af browseren (ie. kun canvas eller lignende) vil Java oversat med GWT  kunne give god mening, men hvis vi skal afgrænse os til et primært sprog må det blive JavaScript.

Øvrige alternativer: CoffeScript (Syntactic sugar med tæt integration af JavaScript), Dart(Googles foreslag til JavaScripts efterfølger) og HaXe(crossplatform JavaScript-lignende sprog der oversættes til JavaScript) er også potentielle sprog, men ikke vurderet som værende tilstrækkeligt mainstream. 

## Modulsystem

JavaScript mangler et decideret modulsystem.

`Requirejs` ser umiddelbart ud til at være det bedste bud. Det er designet så moduler kan genbruges både i browsere og på server. Det understøtter afhængigheder mellem moduler, og sikre også at modulerne ikke konflikter/forurener det globale scope.
Det er også udviklet med et øje på commonjs moduler, som er ved at være standard serverside.
Understøtter både at de enkelte scripts bliver resolved og loadet i selve browseren, og også at script-filer bliver kompileret/minimeret til en enkel fil til deployment.

`Commonjs` har en begyndende standardiseringen af JavaScript moduler, men er  rettet mod servere og understøtter endnu ikke asynkrone moduler, hvilket er en nødvendighed hvis det skal kunne køre i browser. Requirejs er det client-side modulsystem der lægger sig tættest i retning af den kommende standard her.

DBCs `jscommon`-`use`-system er ligesom Commonjs server-side, og kan ikke direkte anvendes på browsere. Det vil desuden give mening at rette `use`-systemet sålede at det også understøtter requirejs-moduler (eller hvad vi vælger til client-side applikationer), så kode også kan deles/genbruges mellem DBC server side og client-side applikationer.

`enderjs` er en browser-JavaScript pakkemanager der kompilere moduler til en enkel fil. Fordelen her er at modulerne laves i commonjs-format, og det gør styring af afhængigheder langt lettere. Ulempen er at modulerne skal kompileres hvilket tilføjer et trin i forhold til udvikling.

`yepnope` er en mere letvægts script-loader. De enkelte script har her selv ansvaret for eventuelt at oprette variable de kan blive tilgået via i det globale scope. Til gengæld har det god understøttelse af betinget load af scripts, så til små projekter med forskellig kode afhængig af platform giver dette god mening. 

`labjs` ligger i samme kategori som `yepnope`, dog ikke med samme conditional support.

`jquery` plugins var også nævnt som mulighed ved udviklermødet. Fordelen ved dette er at det (måske?) har mindshare hos udviklere i biblitekerne? Forbeholdet her er at det indføre en afhængighed på jquery, også i moduler der er ren JavaScript og ellers ville kunne genbruges andre steder.

## JavaScript og DOM-abstraktion

For at normalisere JavaScript-miljøet anvendes `es5-shim.js` og `json2.js` på de platforme hvor der er behov for det. Disse moduler backporter de features fra EcmaScript 5 som kan implementeres oven på EcmaScript 3 (EcmaScript er JavaScript-standardiseringen).

Til DOM-manipulation anvendes `zeptojs` eller `jquery`. JQuery er den mest udbredte DOM-abstraktion, har betydelig mindshare og anvendes allerede en del i bibliotekssammehæng, så det er oplagt at benytte dette API. Zeptojs er en letvægtsimplementation af dele af jquerys API, men understøtter ikke internet explorer, og fylder betydeligt mindre. Strategien er at anvende zeptojs på webkit+firefox, og jquery på øvrige platforme og holde sig til delmængden af deres api.

## Funktionsbiblioteker

`underscore.js` samt `backbone.js` anvendes for at undgå at genopfinde den dybe tallerken. Disse indeholde diverse utilities, samt framework og konventioner for MVC-design i JavaScript. Indenfor den type biblioteker virker det som om at disse er dem der har størst mindshare, kildekoden ser meget fornuftig ud, og det integrerer let med jquery/zepto.

## Best practices
github åben process
code review

## Dokumentation

Kode forventes at have tre typer dokumentation: intern dokumentation, api dokumentation og projektdokumentation.

Til intern dokumentation anvendes `docco`, og til API- og projekt-dokumentation anvendes markdown. 

Motivation for valg af markdown: 1) samme dokumentationsformat for al dokumentation(docco bruger også markdown internt), 2) tekstbaseret format bedre til versionshistorik, 3) integration med github, 4) da JavaScript er dynamisk har api-dokumentationsværktøj ikke samme fordele som med statiske sprog, så almindelig tekst kan være et fornuftigt valg 5) det er let at konvertere dokumentation til andre formater (html, pdf, ...)

Projektdokumentationen ligger i `README.md` forventes at indeholde
- Beskrivelse af projektet: hvad og hvorfor
- Overblik over filstruktur / moduler
- Features, hvad er implementeret
- Roadmap, hvad er det planen at implementere
- Credits, hvem har bidraget til projektet, og hvilke andre projekter bygger det på

## Test
### Intern test
jasmine or mocha
### Automatisk grænsefladetest
selenium
### Manuel test


### Integrationsservice
 travis-ci vs. jenkins
 

