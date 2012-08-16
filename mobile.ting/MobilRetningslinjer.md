# Retningslinjer for udvikling af applikationer til mobile platforme

[uddrag af dokument fra april 2012, med enkelte rettelser for at reflektere nyere beslutninger, herunder dokumentationsformat for javascript, samt mobilstrategi]

# 1 Baggrund

Retningslinier for udvikling af
applikationer (i bredeste forstand) til mobile platforme. Dette dokument beskriver
disse retningslinier, samt de tekniske valg der følger af dem. Desuden beskrives
hvilke mobile platforme vi (pt) ønsker at understøtte, og strategier for test. Denne
liste vil løbende blive ændret, da udviklingen inden for området går hurtigt.
Slutteligt indeholder dokumentet nogle retningslinier for JavaScript udvikling på
mobiltelefoner.

Bemærk, at der med mobile platforme primært tænkes på telefoner og
tabletcomputere. F.eks. laptops og notebooks opfattes ikke som en mobil platform,
uanset at de principielt er mobile.

Disse retningslinjer har også en koordinerende rolle, og afsnittene om app-udvikling,
test og kodeguidelines, deles med bibliotekerne og TING.Community'et, for at sikre
at det er let at anvende hinandens kode.

Dokumentet kan læsemæssigt opfattes som delt i to. Tilogmed afsnit 4 er generelle
principper/retningslinier omkring udvikling. Fra afsnit 5 og frem er der primært tale
om oplistning af tekniske valg som følge af principperne/retningslinierne fastlagt i
starten af dokumentet.

# 2 Principper/retningslinier

Følgende principper/retningslinier, der blev formuleret af TA Forum i december
2011, ligger til grund for de efterfølgende tekniske valg.

- For løsninger til mobiltelefoner, udvikles der primært til smartphones, ikke til featurephones. Så meget som muligt udvikles i platformeneutrale løsninger.  SMS løsninger, mv, videreføres fra eksisterende løsninger.
- Tablets henvises som hovedregel til (traditionelle) webløsninger (der evt.  tilpasses). Apps til tablets/der afvikles på tablets kan evt. henvise til webløsninger.
- Apps vil som hovedregel udvikles som ”wrappere” omkring platformneutral kode/mobilsites el. lignende.
- Der udvikles til anerkendte standarder. Der testes på markedsledende platforme.
- Strategien skal løbende revideres, f.eks. årligt, og afstemmes med relevante samarbejdspartnere.

Udover ovenstående principper er det værd at bemærke at retningslinierne skal
forstås i sammenhæng med DBCs service orienterede arkitektur. Som udgangspunkt 
skal funktionalitet der ikke er nært knyttet til grænseflader, placeres i
services, således at der er en klar opdeling imellem forretningsfunktionalitet/logik
og grænseflader.

# 3 Trends som baggrund for tekniske valg

Strategien om at hjemtage mobiludvikling er i sig selv begrundet i opfattelsen af at
mobil udvikling ikke kan være et ”påhæng” til de aktiviteter DBC har, men at DBC
med fordel kan udvikle og fastholde de nødvendige kompetencer in-house. Dette
skyldes især at mobile platforme forventes at tage en større og større andel af
trafikken fra PC platformen fremover. Fra udviklervirksomheder der beskæftiger sig
med mobiludvikling, er det i øvrigt erfaringen at det ofte kan betale sig at starte
med at udvikle til de mobile platforme, da man derved får skåret ind til lige præcis
den funktionalitet der er relevant for disse platforme.

En anden trend der ligger til grund for de tekniske valg, er opfattelsen af at
forholdet imellem ”smartphones” og ”featurephones” på både mellemlangt og langt
sigt vil være helt domineret af smartphones. Samtidig er det forventningen at
telefonbrugere der ønsker at anvende mobile platforme til at tilgå f.eks. websider, i
høj grad vil anskaffe sig en smartphone. Af denne grund retter den tekniske strategi
sig i høj grad imod smartphones (i modsætning til featurephones).

En sidste trend er forudsætningen om at være online. For bare ganske få år siden,
kunne man ikke tage for givet, at en enhed konstant havde adgang til internettet,
men i dag antages det for et stigende antal applikationer. En almindelig model er en
applikation på enheden, der kommunikerer med en applikation/server i ”skyen”.
Med udbredelsen af stadig billigere dataplaner fra mobiludbydere, kan
forventningen/forudsætningen om (næsten) konstant internetforbindelse i højere og
højere grad indarbejdes i mobilapplikationer.

# 4 Tilgange til mobil udvikling

Overordnet skelner vi imellem to tilgange for mobil udvikling:

1. Mobile websites - Websider målrettet mobile platforme.
2. Mobile applikationer (Apps) - Programmer kodet til at blive afviklet direkte på en (eller flere kompatible) mobile platforme.

Mobile websites er f.eks. karakteriseret ved at have valgt opløsning på billeder,
indholdselementer, navigationsmuligheder, mv, der er målrettet den mindre
størrelse og særlige betjeningsinteraktion der præger en mobil platform. Mobile
sites vises på den mobile platform i en browser (eller indlejret i en browserkomponent), og fordelen er altså at et sådan site principielt kan anvendes på alle
mobile platforme der har en browser. Omvendt kan sites kun anvendes når enheden
er forbundet til nettet.

Mobile applikationer er kendetegnet ved at være programmeret direkte til et API for
en specifik telefon (eller familie af telefoner), evt. i en specifik version. Eksempler er
applikationer til Apples iOS, Googles Android platform, Microsofts Windows Mobile
platform, eller Symbian platformen. Disse kan så igen være programmeret til en
specifik version, og igen til forskelige formater (f.eks. afhængig af skærmstørrelse/opløsning/mv). Fordelene handler altså om at brugeren får en oplevelse af
en applikation der er kodet direkte til platformen (ensartethed, mv). Ulemperne
ligger naturligvis i at der skal bruges flere ressourcer på udvikling, mv.

Der findes forskellige blandingsformer, f.eks. at man koder et antal mobile sider, der
ikke er afhængige af netværksadgang, og ”pakker” dem ind i en applikation. Eller at
man laver en applikation der har en lokal del, og henviser til mobilsite for en række
operationer. Eller kombinationer heraf, f.eks. et site der er pakket som applikation,
men betjener sig af services bagved, når der skal bruges information fra netværket.
Forskellige modeller fastlægges for de forskellige udviklingsspor vi har på DBC.

# 5 Nuværende mobiludvikling på DBC

DBC har tre spor i forhold til mobil udvikling:

1. Den nuværende m.bibliotek.dk
2. Mobilt bibliotek.dk theme ved migration til Drupal
3. Mobile applikationer

Disse bliver gennemgået i de næste tre afsnit, og de tekniske valg der er truffet
omkring udviklingen, oplistes.
Bemærk, at teknologivalgene primært handler om grænseflader. For underliggende
forretningslogik, er udgangspunktet at det er/bliver implementeret som services.

## 5.1 m.bibliotek.dk

[Udfases/erstattes af mobilt theme i den kommende drupal-udgave af bibliotek.dk]

## 5.2 Mobilgrænseflade i Drupal for bibliotek.dk

Når nyt bibliotek.dk implementeres i Drupal, skal den nye udgave også have en
mobilgrænseflade. Dette er med i høringsoplæg bibliotek.dk 2012.

Grænsefladen bliver som udgangspunkt implementeret med responsivt layout oven
på Omega-themet. Det er dog vigtigt at dette valg ikke giver begrænsninger i
forhold til at kunne udnytte mobilplatformens muligheder.

## 5.3 Mobile apps

Mobilapps oven på brøndteknologi er med som en del af høringsforslaget til
udvikling af bibliotek.dk i 2012, og vi er begyndt i denne retning, både med
grænseflade for spørgetjenesten, og forskellige eksperimentelle prototyper.

### 5.3.1 Udviklingsplatform

[TODO: note om opdateret mobilstrategi]

Som platform bygges applikationen ved hjælp af webteknologi, og derefter bundles
den som en native app.

Dette betyder at både at både kompetancer og kode kan genbruges ved mobil-app
udvikling og generel frontend udvikling.

Samtidigt betyder det at størstedelen af koden kan deles mellem de forskellige
mobilplatforme så vi ikke skal bruge ressourcer på at udvikle og vedligeholde en
fuld applikation for hver enkel platform.

Ved indpakning som native apps, er det muligt at bruge/lave plugins som tilgår
telefon-features som ikke er tilgængelig i traditionel browser, - eksempelvis
stregkodeskanning, kamera, strømstyring, bluetooth, filer, sms, etc.
Samme app vil desuden kunne køre i (mobile) webbrowsere hvor telefon-features så
blot vil mangle.

### 5.3.2 App indpakning

Widgets/apps implementeres med webteknologi så de både kan publiceres som
mobile applikationer via market/appstore med adgang til mobilspecifikke features
såsom stregkodeskanning, og også kan køre direkte i webbrowseren. Dette giver
desuden mulighed for, udover mobile apps, også at køre dem som widgets på pc'er,
tablets og storskærme.

#### 5.3.2.1 Teknikker til app indpakning – valgte teknologier

Deciderede mobilapplikationer bygges via Apache Cordova. Dette gør at
applikationen i market/appstore kan få adgang til mobil-specifikke features der ikke
er i browseren, såsom skanning af stregkoder, samtidigt med at kodebasen også
kan bruges til webapps hvor disse features er disabled.

#### 5.3.2.2 Teknikker til widgets og offline apps – valgte teknologier

Udover indpakningen som mobilapp, kan webapplikationerne også bygges som
offline apps og widgets.

Offline applikationer implementeres via en manifest-fil, der er en del af html5, og
som definerer hvad der skal downloades for at applikationen kan køre offline.

Widget indpakning er en anden måde at lave distribuerbare pakker. W3 har udviklet
en standard på området, som for øjeblikket er implementeret i PhoneGaps byggeservice, Opera browsere, samt Apache Wookie. Dette foregår som et zip-arkiv med
applikationen, og en config.xml der indeholde metadata.

JavaScript applikationer og biblioteker har derudover ofte metadata i form af en
package.json som defineret i Commonjs.

### 5.3.3 Programmeringssprog

JavaScript anvendes til udvikling af apps.
Nedenstående tre afsnit oplister en række tekniske valg omkring JavaScript.

#### 5.3.3.1 Modulsystem til JavaScript

Moduler skrives som Commonjs-kompatible moduler, og indlejres i applikationen
med Requirejs.
 
#### 5.3.3.2 JavaScript og DOM-abstraktion

For at normalisere JavaScript-miljøet anvendes es5-shim.js og json2.js på de
platforme hvor der er behov for det. Disse moduler backporter de features fra
EcmaScript 5 som kan implementeres oven på EcmaScript 3 (EcmaScript er
JavaScript-standardiseringen).

Til DOM-manipulation anvendes JQuery, da det er det mest udbredte DOM-
abstraktion, har betydelig mindshare og anvendes allerede en del i
bibliotekssammehæng.

#### 5.3.3.3 Funktionsbiblioteker

underscore.js samt backbone.js anvendes for at undgå at genopfinde den
dybe tallerken. Disse indeholde diverse utilities, samt framework og konventioner
for MVC-design i JavaScript. Indenfor den type biblioteker virker det som om at disse
er dem der har størst mindshare, kildekoden ser meget fornuftig ud, og det
integrerer let med jquery/zepto.

# 6 Mobile platforme til test

Selvom der kodes til standarder, mv, er realiteten at både mobilsites og apps, vil
skulle testes i et eller andet omfang på de faktiske platforme. Det efterlader
naturligvis spørgsmålet: hvilke, og til hvilken standard.
Apps og website forventes at køre perfekt i nyere Android/iOS. Websites (og apps,
hvor det giver mening) skal have ”graceful degradation”, så der stadig er fornuftig
visning på øvrige platforme.

For platforme gælder at der er en række parametre der kan varieres. Mest
afgørende er operativsystem og browser, samt version af dette. Derudover kan der
være varianter i hardware, mest CPU og opløsningstæthed (DPI) på skærm.

Hardwarevariationer dækkes ikke af denne tabel, da det i praksis må være de
enheder der er tilgængelige der er de interessante, og de forventes at spænde over
f.eks. hurtige og langsomme enheder. Platformene er i øvrigt, i overensstemmelse
med principperne, valgt efter markedsudbredelse.


------------------------------------------------------------------------------------
OS/Browser     Version       Skal/kan Forventning
-------------- ------------- -------- ----------------------------------------------
iOS/Safari     5               Skal   Bør virke perfekt

iOS/Safari     3 eller 4       Skal   Bør virke bortset fra enkelte css småfejl.

Android        4               Skal   Bør virke perfekt

Android        2.2/2.3         Skal   Bør virke perfekt

Android        2.1             Kan    Få fejl ved brug af canvas, css småfejl. 
                                      (Version 2.1 er 7.6% af alle android-devices, 
                                      hvilket kan estimeres til knap 3% af vores 
                                      samlede brugere, og faldende.)

Opera Mini     4/6.5           Kan    Basal funktionalitet bør fungere, visse 
                                      features må forventes at mangle. Den har en 
                                      del begrænsninger på eventsystem og 
                                      javascript-udførsel. Kan installeres på de 
                                      fleste telefoner, hvilket kan gøre test 
                                      interessant.

(Mobile)       7/8/9           Kan    Har betydelig anderledes rendering
Internet                              engine end de platforme vi tester på. Bør
Explorer                              virke i version 9, med visse småfejl. Basal
                                      funktionalitet bør virke i version 7/8.
                                      Ældre udgaver forventes ikke at virke.

(Mobile)       9/10                   Kan Har anderledes rendering engine end de
Firefox                               platforme vi tester på. Bør virke med
                                      visse småfejl.

Opera Mobile   10/11           Kan    Vil nok virke, måske med visse småfejl.
------------------------------------------------------------------------------------

# 7 JavaScript mobil kodeguidelines
Hvor koden er open source støttes en åben process ved løbende at give adgang til
koden. Github anvendes, da dette er det primære kodedelingsværktøj for TING-bibliotekerne i mellem.
Koden skal gennem mindst to sæt øjne før den er done. DBC bruger reviewboard
internt til code review. Derudover er der en form for code review når patches
accepteres gennem pull-requests i github.

### 7.1.1 Dokumentation

[TODO: revise with latest doc-standard]

Kode forventes at have tre typer dokumentation: intern dokumentation, api
dokumentation og projektdokumentation.

Til intern dokumentation anvendes docco12, og til API- og projekt-dokumentation
anvendes markdown13.

Motivation for valg af markdown: 1) samme dokumentationsformat for al
dokumentation(docco bruger også markdown internt), 2) tekstbaseret format bedre
til versionshistorik, 3) integration med github, 4) da JavaScript er dynamisk har api-
dokumentationsværktøj ikke samme fordele som med statiske sprog, så almindelig
tekst kan være et fornuftigt valg 5) det er let at konvertere dokumentation til andre
formater (html, pdf, ...)

Projektdokumentationen ligger i README.md forventes at indeholde:

- Beskrivelse af projektet: hvad og hvorfor
- Overblik over filstruktur / moduler
- Features, hvad er implementeret
- Roadmap, hvad er det planen at implementere
- Credits, hvem har bidraget til projektet, og hvilke andre projekter bygger det på
- Copyright (GPLv3 or later)

### 7.1.2 Intern test
[TODO: note om dette]

### 7.1.3 Automatisk grænsefladetest
Der bør være automatiske grænsefladetest, og Selenium anvendes her.
Selenese-runner scriptet bruges i integrationsserveren, og vi har mulighed for at lave udvidelser via dette.


### 7.1.4 Integrationsserver

Til automatisk kørsel at test anvendes Jenkins. Internt på DBC har vi sat en server op: is.dbc.dk,
og da den allerede bruges til det meste byg og test, og skal også anvendes internt til apps/widgets.

Der kan eventuelt som supplement også tilføjes en .travis.yml (4 linjer, der gør det muligt at køre test automatisk på den åbne travis-ci service).

# 8 Appendix – undersøgte alternativer
I dette appendix er nogle bemærkninger om de undersøgte alternativer til
forskellige teknologier. Det er rettet til den særligt interesserede læser.

## 8.1 Teknikker til app indpakning
Udover Apache Cordova, er særligt titanium, rhomobile, mosync samt unity
undersøgt, men de er alle mere lukkede og/eller understøtter ikke at applikationen
samtidigt er en webapp. Bemærk at en del af dem har properitær bygning af
mobilapps selvom de er open source.

## 8.2 Programmeringssprog til mobile apps
Udover JavaScript er særligt Java undersøgt, da dette sprog bruges en del på DBC
og kan oversættes til JavaScript via GWT så det ligeledes kan bruges i browsere.

Ulempen ved Java i forhold til JavaScript er at det ikke integrerer helt så tæt med
browseren, hvilket gør at sproget nogen gange kommer i vejen i applikationsudvikling. For applikationer der bruger en mere afgrænset del af browseren (ie. kun
canvas eller lignende) vil Java oversat med GWT kunne give god mening, men hvis
vi skal afgrænse os til et primært sprog må det blive JavaScript.

Øvrige alternativer: CoffeScript (Syntactic sugar med tæt integration af
JavaScript), Dart (Googles foreslag til JavaScripts efterfølger) og HaXe
(crossplatform JavaScript-lignende sprog der oversættes til JavaScript) er også
potentielle sprog, men ikke vurderet som værende tilstrækkeligt mainstream.

## 8.3 Modulsystem til mobile apps
[TODO]
Requirejs ser umiddelbart ud til at være det bedste bud. Det er designet så
moduler kan genbruges både i browsere og på server. Det understøtter
afhængigheder mellem moduler, og sikre også at modulerne ikke
konflikter/forurener det globale scope. Det er også udviklet med et øje på commonjs
moduler, som er ved at være standard serverside. Understøtter både at de enkelte
scripts bliver resolved og loadet i selve browseren, og også at script-filer bliver
kompileret/minimeret til en enkel fil til deployment.

Commonjs har en begyndende standardiseringen af JavaScript moduler, men er
rettet mod servere og understøtter endnu ikke asynkrone moduler, hvilket er en
nødvendighed hvis det skal kunne køre i browser. Requirejs og enderjs er de client-side 
modulsystem der lægger sig tættest i retning af den kommende standard her.
Commonjs-moduler anvender require, exports, og module til at hente og definere
moduler.

DBCs jscommon-use-system er ligesom Commonjs server-side, og kan ikke direkte
anvendes på browsere. Det vil desuden give mening at rette use-systemet sålede at
det også understøtter requirejs-moduler (eller hvad vi vælger til client-side
applikationer), så kode også kan deles/genbruges mellem DBC server side og client-
side applikationer.

enderjs er en browser-JavaScript pakkemanager der kompilere moduler til en
enkel fil. Fordelen her er at modulerne laves i commonjs-format, og det gør styring
af afhængigheder langt lettere. Ulempen er at modulerne skal kompileres hvilket
tilføjer et trin i forhold til udvikling.

yepnope er en mere letvægts script-loader. De enkelte script har her selv ansvaret
for eventuelt at oprette variable de kan blive tilgået via i det globale scope. Til
gengæld har det god understøttelse af betinget load af scripts, så til små projekter
med forskellig kode afhængig af platform giver dette god mening.

labjs ligger i samme kategori som yepnope, dog ikke med samme conditional
support.

jquery-plugins var også nævnt som mulighed ved udviklermødet. Fordelen ved
dette er at det (måske?) har mindshare hos udviklere i biblitekerne? Forbeholdet her
er at det indføre en afhængighed på jquery på serverside, også i moduler der er ren
JavaScript og ellers ville kunne genbruges andre steder.

## 8.4 Kodeguidelines for javascript, intern test

[TODO]

Til intern test ser jasmine ud til at være det mest mature testframework, og virker
på tværs af platforme, så dette er umiddelbart det bedste bud.
Et muligt alternativ kunne være mocha, som ser ud til at have samme syntaks til
definition af tests som jasmine, men er mere asynkront og overlade test-
sammenligninger til andre biblioteker eller manuelle throws.

## 8.5 Dokumentation af JavaScript

[TODO] 
I DBCs nuværende, ret omfattende, JavaScript kodebase, er der dokumentation i
XML, der tildeles til en __doc__ variabel. Det har den fordel, at vi kan tilgå
dokumentation interaktivt, med vores ”help” funktion. Ulempen er at
dokumentation er XML, det vil vi gerne bort fra.
Til et nyt/andet system, er det forsat et krav at der ud fra dokumentationen kan
udtrækkes via help systemet (__doc__ eller tilsvarende) og at der kan udtrækkes API
dokumentation. Vi har aldrig implementeret noget baseret på det sidste, men det
ville ikke være specielt vanskeligt, men formentlig et omfattende arbejde, hvis man
ville have noget der var ”pænt”. Desuden indeholder vores system ikke muligheder
for f.eks. at forstå relationer imellem klasser eller lignende.

Der er fremadrettet to grundlæggende alternativer for dokumentation.
Dokumentation i kommentarer, i form af strukturerede strenge, eller tildeling til
variable i form af strukturerede strenge, objektnotation eller andet (f.eks. JSON).

Eksempel på det første:

        /**
         * \brief Add two numbers
         * \param a First number to be added
         * \param b Second number to be added
         * \return The result of the addition
         */
        function add( a, b ) {
            return a + b;
        }

Eksempel på det andet:

        function add( a, b ) {
            return a + b;
        }
        add.__doc__ = { 
            brief: ”Add two numbers”, 
            params: [ 
                { name: ”a”, brief: ”First number to be added” }, 
                { name: ”b”, ”Second number to be added” } ],
            returns: ”The result of the addition” };

Man ville naturligvis kunne lave noget med at konstruere en docstring, eller
lignende, i stedet for at bruge objektnotation, ligesom man ville kunne anvende
struktureret tekst.

Hvis vi går vejen med strukturerede kommentarer – som er en meget standard ting
at gøre – er den bedste løsning formentlig JsDoc Toolkit 29. Det er dog lidt usikkert om
den kan parse vores moduler og E4X ting. I denne situation skal vi desuden have
løst problemet omkring udtrækning af dokumentation til hjælpesystemet.

Hvis vi går objektvejen, skal vi have lavet noget, der kan udtrække informationen til
API dokumentation. En måde kunne være at danne en mellemkode i javascript, som
man kørte JsDoc Toolkit på. Evt. kunne man fjerne E4X konstruktioner når man
gjorde det.

