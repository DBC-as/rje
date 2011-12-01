% Udkast/noter til mobil strategi / teknisk arkitektur
% version 0.0.1  rje@dbc.dk
% 1. December 2011

Nedenstående er et hurtigt udkast med noter i forbindelse med teknisk arkitektur for mobiludvikling.

DBC har tre spor i forhold til mobil udvikling:

1) Den nuværende m.bibliotek.dk
2) Mobilt bibliotek.dk theme ved migration til Drupal
3) Mobile apps

Disse bliver gennemgået i de næste tre afsnit, herunder med forslag til teknologiske valg.
Efter dette er der et par afsnit der gennemgår:

- Mobilplatforme til test - med liste over smartphone-platforme til test.
- JavaScript kodeguidelines på mobilområdet - der indeholder best practise i forhold til udvikling af apps

og til sidst rundes af med 'Koordinering / videre planer' - hvad de næste trin er i forhold til mobil strategi / teknisk arkitektur.

# m.bibliotek.dk

Vi har haft en ekstern leverandør på bibliotek.dk mobilsite, og er forøjeblikket igang med at hjemtage dette.
Herunder tekniske valg omkring dette.

## Understøttede platforme

Vi skal bevare den nuværende funktionalitet, så derfor skal løsningen understøtter både featurephones og smartphones.

Fokus er primært understøtte de enheder der forøjeblikket bruger m.bibliotek.dk.
Vi har kun adgang til en ufuldstændig statistik, så vi ved ikke hvilke operativsystem-/browser-versioner der anvendes men groft set er det:
ca. 60½% Safari, ca. 36% Android, ca. 1½% Opera (5 + 9/10), ca. 1½% Nokia og ca. ½% Øvrige. 

## Teknologivalg

Da løsningen ikke kræver avanceret funktionalitet og vi gerne vil understøtte så mange devices som muligt, laves siden i XHTML Mobile Profile.

Selve implementationen bygges oven på bibliotek.dk-stakken.

## Teststrategi for m.bibliotek.dk: 

Til automatisk test af best practices med xhtml-mp, anvendes online tests: http://mobiready.com/ og http://validator.w3.org/mobile/.

Udover platformene beskrevet under teststrategi for smartphones, skal der også testes på featurephones: Opera mini er her et vigtigt target og kan testes direkte i browseren: http://www.opera.com/developer/tools/mini/?ver=4 
mobiready indeholder en simplificeret mobilbrowser-emulator der kan bruges til test i en håndfuld browsere, og derudover bør der testes i et par low-end telefoner.

# Mobilgrænseplade i Drupal for bibliotek.dk

Når bibliotek.dk implementeres i Drupal, skal den nye udgave også have en mobilgrænseflade. Dette er med i høringsoplæg bibliotek.dk 2012.

Vores tekniske arkitektur bør her læne sig op ad / koordineres med tilgangen for mobil-delen af ding2, således vi kan bruge og udveksle erfaringer og kode i ting-communitiet. 

De teknologiske valg afhænger derfor af hvad der sker i transitionen til ding2, - den nuværende løsning i ding1 anvender drupal-modulet mobile_tools, men vi ved ikke om der bliver holdt fast i dette eller hvad der sker.

# Mobile Apps

Mobilapps oven på brøndteknologi er med som en del af høringsforslaget til udvikling af bibliotek.dk i 2012, og vi er begyndt i denne retning, både med grænseflade for spørgetjenesten, og forskellige eksperimentelle protyper.

## Udviklingsplatform

Som platform vælger vi at bygge applikationen ved hjælp af webteknologi, og derefter bundle den som en native app. 
Dette betyder at både at både kompetancer og kode kan genbruges ved mobil-app udvikling og generel frontend udvikling.
Samtidigt betyder det at størstedelen af koden kan deles mellem de forskellige mobilplatforme så vi ikke skal bruge resourcer  på at udvikle og vedligeholde en fuld applikation for hver enkel platform.

Ved indpakning som native apps, er det muligt at bruge/lave plugins som tilgår telefon-features som ikke er tilgængelig i traditionel browser, - eksempelvis stregkodeskanning, kamera, strømstyring, bluetooth, filer, sms, etc.

Samme app vil desuden kunne køre i (mobile) webbrowsere hvor telefon-features så blot vil mangle. 

## App indpakning

Til at bygge native apps er Apache Callback (tidligere kaldet PhoneGap) det oplagte valg. 
Native apps kan installeres på telefonerne via market/appstore/...

Udover apps til market, kan applikationen også indpakkes som en offline webapp, ie. til at tilgå i webbrowser, men stadig fungere selv uden netværksforbindelse efter den er downloaded/cachet efter første visning. 

Hertil kommer widget konfiguration, så den kan installeres som widget hvor dette understøttes.

## Valg af platform og libraries

Valg af platform og og libraries bør koordineres med tilsvarende udvikling hos bibliotekerne, så kode vil kunne genbruges på tværs. 
Det overordnede kriterie for valg af framework og libraries, er at det skal virke på tværs af platforme, ie. applikationen skal bundles til mobil distribution, men kode skal også kunne genbruges i browsere, og test skal kunne køre på integrationsserver. 

### Overvejelser om framework

Et væsentligt spørgsmål er om applikationen skal bygges under et framework.
Har undersøgt nedenstående frameworks, der kunne være særligt interessante for mobile apps, men konklusionen er at nok at det bedste resultat fås ved at kode direkte mod browsens apier der også er et rigt framework i sig selv - se dog libraries herunder.

SenchaTouch er begrænset til webkit, og derfor kigger vi ikke nærmere på dette.

JQueryMobile fungerer godt til websites og simple apps. Ved mere avancerede applikationer hvor man vil have mere kontrol over layout etc. kommer frameworket dog i vejen, og udseendet er mere web-agitigt end native-app.

GWT er interessant ved at webapps kan kodes i Java istedet for JavaScript. GWT er dog ikke et mobilorientet framework og Java bliver desværre tungt i et asynkront/DOM-orienteret environment, trods fordelen ved toolability - så for ikke-canvas-orienterede mobil-applikationer vil jeg ikke anbefale det. 

Konklusionen er at det bedste resultat nok fås ved at kode det direkte i browseren.

### Libraries 

JavaScript mangler et modulsystem, og her ser det ud til at `requirejs` er det bedste valg, og det virker både på klient og server, samt indeholder en compiler til distribution. Dog kan yepnope være et fornuftigt alternativ til små browser-only applikationer.

Til unittest ser `jasmine` ud til at være det mest fornuftige framework, og understøtter også både klient og server-eksekvering.

For normalisering af platformen, giver det også mening at anvende `JSON2` og `es5shim` på de JavaScript-engines der mangler disse dele af sproget.  

Som utility library anbefales `underscore`.  For MVC-design, routing etc. er `backbone` desuden et fornuftigt supplement.

Til dom-abstraktion anbefales enten jquery eller zeptojs. JQuery har den fordel at det er battletested og godt til at abstrahere browserforskelle, - samtidigt anvender vi allerede dette i bibliotek.dk og ihvertfald på nogle, hvis ikke alle ding-ting-biblioteker. JQuery fylder dog en del, så zeptojs er en letvægtsimplementation af en stor del af samme api.


# Mobile platforme til test

Apps og website forventes at køre perfekt i nyere Android/iOS. Websites (og apps, hvor det giver mening) skal have graceful degradation, så der stadig er fornuftig visning på øvrige platforme.

- iOS Safari 3/4: Vi skal teste på denne. Bør virke bortset fra enkelte css-glitches.
- Android 2.1: Vi skal teste på denne, - forvent fejl ved brug af canvas, css-glitches.
- Opera Mini 4/6.5: Vi skal teste på denne. Basal funktionalitet bør fungere, visse features må forventes at mangle. Den har en del begrænsninger på eventsystem og javascript-udførsel. Står højt på listen, da denne kan installeres på de fleste telefoner.
- (Mobile) Internet Explorer: Vi bør teste på denne, pga. betydelig anderledes rendering engine. Bør virke i version 9, forvent visse dog glitches. Basal funktionalitet bør fungere i IE Mobile 7 og nyere, - ældre udgaver (herunde Desktop IE7) forventes ikke at virke. 
- Mobile Firefox: Vi bør teste på denne, pga. betydelig anderledes rendering engine. Bør virke med enkelte glitches
- Android 4: Vi skal teste på denne. Bør virke perfekt
- iOS Safari 5: Vi skal teste på denne. Bør virke perfekt.
- Android 2.2/2.3: Vi skal teste på denne. Bør virke perfekt
- Opera Mobile 10/11: Vi bør teste på denne.
- Nokia browser: understøttes på nuværende m.bibliotek.dk, deprecated på drupal og apps (featurephones/symbian må bruge opera mini/mobile).
- Android 1.5/1.6: Lav markedsandel, basal funktionalitet bør virke.
- BlackBerry, Bada, Palm, ...: Vi tester ikke på disse på grund af begrænset market share, men de burde fungere.

På Android og iOS bør der desuden både på et low-dpi og et high-dpi device.

# JavaScript kodeguidlines på mobilområdet 

Kildekoden lægges løbende ud som open source, skal også overholde de krav ting-communitiet stiller til kodekvaliteten.

## Test og review

Der skal være unit test og disse bør implementeres således at de kan køres headless af integrationsserveren.
Jasmine kan anbefales hvis det skal kunne køre både i browser og serverside.

Koden bør have været gennem mindst to set øjne. På DBC benytter vi internt "Review Board" til dette.

## Dokumentation
Selve koden skal have intern dokumentation.  Til dette kan docco anbefales.

Funktionsbiblioteker skal have deres api'er dokumenteret. 

Projekter skal have en readme, gerne i markdownformat, med overblik over projektet med beskrivelse/roadmap/features/user stories etc.

# Koordinering / videre planer

Dette er dokument er første draft af et work-in-progress. 
Tages hermed op på teknisk arkitekturforum, med håb om feedback der kan inkoopereres i næste udgave.

En videre idé er at dokumentet også tages op i bibliotekernes udviklernetværk og mobile.ting i et forsøg på at koordinere mobil-arkitekturen i communitiet - hvis TA-forum går ind for denne idé?
