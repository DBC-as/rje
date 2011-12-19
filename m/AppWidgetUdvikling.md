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

## Programmeringssprog

JavaScript anvendes til udvikling af apps.

Udover JavaScript er særligt Java undersøgt, da dette sprog bruges en del på DBC og kan oversættes til JavaScript via GWT så det ligeledes kan bruges i browsere. Ulempen ved Java i forhold til JavaScript er at det ikke integrerer helt så tæt med browseren, hvilket gør at sproget nogen gange kommer i vejen i applikationsudvikling. For applikationer der bruger en mere afgrænset del af browseren (ie. kun canvas eller lignende) vil Java oversat med GWT  kunne give god mening, men hvis vi skal afgrænse os til et primært sprog må det blive JavaScript.

Øvrige alternativer: CoffeScript (Syntactic sugar med tæt integration af JavaScript), Dart(Googles foreslag til JavaScripts efterfølger) og HaXe(crossplatform JavaScript-lignende sprog der oversættes til JavaScript) er også potentielle sprog, men ikke vurderet som værende tilstrækkeligt mainstream. 

## Modulsystem

requirejs vs. commonjs,yepnope,labjs,jquerymoduler

### Framework

## Funktionsbiblioteker


### DOM-abstraktion



## Dokumentation
docco 
dokumentation i markdown

## Normalisering af platform
### ES5
json2.js, es5-shim

### DOM-abstraktion
jquery 

## Test
### Intern test
jasmine or mocca
### Automatisk grænsefladetest
selenium
### Manuel test


### Integrationsservice
 travis-ci vs. jenkins