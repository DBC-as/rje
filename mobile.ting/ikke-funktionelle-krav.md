# Presentation 

NB: afbryd med spørgsmål undervejs

- introduktion 
- non-funktionelle krav for åbenhed, kodekvalitet og teknisk arkitektur
- diskussion: kan det bruges? hvorledes/hvorfor ikke/hvorfor? Er der noget vi skal have uddybet? Næste skridt?
    - evt. hurtig runde - hvordan relevant for jer?
- evt. uddybning af et af emne, såsom:
    - open source licenser (PD/LGPL/GPL/AGPL, vendor-lockin, afhængigheder, ...)
    - åben process (lukkede vs. åbne repositorier, upstream,
    - udviklingsartefakter(versionsstyring, issue-tracking, integrationsserver, reviewboard, scrum-artefakter, ...) 
    - teknisk arkitektur (Rasmus: hybrid web/mobil-apps, Jan: mono, ??: BApps)
    - gennemgang af kravkatalog
- næste skridt? forbedring af krav-katalog? hvem? -> ting.counsel?
- afrunding



## Indledning

- hvorfor oplæg: 
    - vi snakkede om det på sidste mobile.ting møde, og der lød til at være et behov
    - DBC(hvorfor jeg kan få tid til dette): involvering i community, mere åbne løsninger (friere konkurrence) vil være en fordel for os (eksempelvis evt. mobil bibliotek.dk-app, samt bibliotek.dk).
- hvad: 
    - start på katalog over krav til udbud/kravspecifikation
    - redskab til at sikre
        - at løsninger kan deles, og andres løsninger kan genbruges
        - fri konkurrence / undgå vendor-lockin
- indhold i kravkatalog
    - krav
    - motivation
    - operationalisering
    - NB: krav er generiske, skal justeres/tilpasses til situationen.

## Overblik: non-funktionelle krav for åbenhed, kodekvalitet, og teknisk arkitektur

- åbenhed (mulighed for fri konkurrence, samt samarbejde om udvikling)
    - kildekode
        - BSD(PublicDomain)/LGPL/GPL/AGPL og ejerskab af kildekode
        - afhængigheder
    - åben process
        - løbende publicering af kildekode, ie. åben github og lignende
        - åben adgang til issue-tracking
        - kode upstream (eksempelvis til ting, men også andre projekter)
- kodekvalitet / best practices
    - versionsstyring
    - automatisk test (code coverage, integrationsserver)
        - typer af tests
            - unit-tests
            - 
        - code coverage
        - integrationsserver
    - code review
    - kodekonventioner
    - dokumentation
    - agil / løbende indragelse af interessenter
- tekniske krav / fælles arkitektur og teknologivalg på tværs af projekter
    - ?: BApps
    - Hybrid web/mobil-apps
    - Jan: 

# Kravkatalog

## Åbenhed

## Best practices

## Teknisk arkitektur


------

# Noter


## Dokumentstruktur

- Indledning 
- Katalog over ikke-funktionelle krav
    - Ordnet i kategorier
    - Indeholder hver følgende afsnit: synopsis, forretningsorienteret beskrivelse/motivation, tekniske krav, checkliste til validering
- Anbefalinger

------


## Formål

Formålet med dette dokument er at sætte nogle retningslinjer, der gør det lettere at dele og genbruge IT-udviklingsarbejde mellem projekter.

- forretningsmæssig beskrivelse af krav
- motivation/årsag til de enkelte krav 
- teknisk tjekliste/beskrivelse af krav
- teknisk guide/tjekliste til at verificere at kravene er opfyldt

### Open source / fri software

## Krav

### Åbenhed

- Open source / fri software
    - Motivation
        - Fri konkurrence / undgå vendor-lockin
        - Rettighed til at dele udviklingsarbejdet, og genbruge andres udvikling
    - Krav
        - Fælles for alle niveauer
            - Kildekoden frigivet under en GPL-kompatibel licens (eller GPL+apple-kompatibel licens hvis mobil-app)
            - Der skal være en tydelig angivelse af licens i projektets rodkatalog.
            - Anvendelse af eksterne services/APIer skal ligge i separate udskiftelige moduler
        - Niveau 1
            - Ejerskabet af kildekoden ligger 100% hos organisationen.
                - eller kildekoden frigivet under BSD, Apache eller lignende (GPL-kompatible) licens, der også tillader proprietær anvendelse
            - Produktet er uden proprietære afhængigheder
        - Niveau 2
            - Produktet er uden proprietære afhængigheder
        - Niveau 3
            - Kildekoden kan have proprietære afhængigheder, men disse er:
                - udviklet af større tredjepart
                - har lave/moderate entry-omkostninger for udviklere 
                - tillader ubegrænset distribution/anvendelse af slutprodukt
- Åben process
    - Motivation
        - Undgå parallelt dobbeltarbejde på tværs af organisationer
        - Gennemsigtighed i udviklingsprocessen
    - Krav
        - Niveau 1
            - patches upstream
            - ejerskab af udviklingsrepositorie og issue-tracker ligger hos organisation(biblioteket) eller konsortie (ting.dk), og ligger sammen med lignende projekter
            - alle krav i niveau 2 opfyldt
        - Niveau 2
            - offentlig læseadgang til versionsstyringssystem og issue-tracker
            - alle krav i niveau 3 opfyldt
        - Niveau 3
            - Information om projektet, herunder formål, tidshorisont og kontaktperson(organisation), publiceres på primært forum for interessenter [ting.dk]
            - Organisationen har læseadgang issue-tracker der anvendes i forbindelse med projektet
            - Organisationen har læseadgang til versionsstyringssystem hvor kildekoden udvikles
     - Noter
        - issue-tracker (værktøj der anvendes under udvikling til at tracke tasks/issues. Eksempelvis bugzilla, lighthouse, scrumdo).

### Kvalitetssikring

- Dokumentation
    - Byggedokumentation
    - Arkitekturdokumentation
    - API-dokumentation
    - Intern kodedokumentation
- Automatisk test
    - Unit test
    - Interface
    - Code coverage
- Manuel test
    - Guide
- Infrastruktur
    - Versionsstyring
    - Integrationsserver
    - Issuetracking - backlog, roadmap
- Kodekonventioner
- Code Review
- Fælles arkitektur

## Tilgange for mobil-app udvikling


##### Operationalisering af non-funktionelle krav



## Mindmap
- Dokument-afsnit
    - Indledning
    - Executive overview
    - Indhold til udbudmateriale/kravspecifikation
    - Baggrund og motivation af de enkelte krav
    - Teknisk specifikation af krav
    - Operationalisering af non-funktionelle krav
    - Overblik over teknologi i forhold til mobile løsninger
- Åbenhed
    - Open source/fri kildekode:  licens (+ejerskab)
        - Afhængigheder
        - Taxonomi
            - Fri software
            - Fri software med proprietære afhængigheder på visse platforme
            - Fri software med proprietære mainstream-afhængigheder
            - Fri software med vendor lock-in 
        - patches sendes upstream
    - Åben process
        - Løbende publicering af kildekode, ie. github, og lignende
        - Åben adgang til issue-tracking
        - Åbenhed omkring
    - Dokumentation
        - Byggedokumentation
        - Arkitekturdokumentation
        - Apidokumentation
        - Kodedokumentation
- Kvalitetssikring
    - Versionsstyring
    - Automatisk test
        - Integrationsserver
        - Code coverage
    - Code review
        - Åben adgang til reviewboard eller lignende
    - Kodekonventioner
    - Fælles arkitektur / teknologivalg på tværs af projekter
