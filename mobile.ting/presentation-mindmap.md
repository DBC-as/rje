# Presentation 

NB: afbryd med spørgsmål undervejs

http://dbc-as.github.com/rje/mobile.ting/kravkatalog.html

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
        http://dbc-as.github.com/rje/mobile.ting/kravkatalog.html
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
        - NB: på leverandørsiden interesse?
        - kørende prototype/demo
        - nb krav, eksempel scrum
- tekniske krav / fælles arkitektur og teknologivalg på tværs af projekter
    - ?: BApps
    - Hybrid web/mobil-apps
    - Jan: 
