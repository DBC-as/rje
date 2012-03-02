% Automatisk Selenium Webgrænsefladetest
% Marts 2012
% rje@dbc.dk


# Indhold

- Overblik 
    - Hvorfor/hvad 
    - Selenium setup intro
    - IntegrationsServer intro
- Selenium-IDE demo
- IntegrationsServer demo
- Praktiske detaljer
    - Om eksekvering af automatiske tests 
    - Catchyas 
    - Overførsel fra Selenium-IDE til IntegrationsServer
- Next

# Hvorfor / hvad
- Hvorfor
    - Regressionstest
    - Eliminere kedeligt arbejde :)
- Hvad
    - Automatisk fjernstyret browsing

# Selenium setup • Intro

- Selenium
    - Værktøj til fjernstyring af browsere
- Selenium-IDE
    - Værktøj til at optage browserinteraktion
    - Firefox-plugin
    - Kan *også* bruges til at sende reproducerbare bugs, etc.
- Filtyper
    - Testcases
    - Suites
    - Suitelists

# IntegrationsServer setup • Intro
- Hvad er en integrationsserver, ie. is.dbc.dk
    - Regelmæssig kørsel af tests: periodisk, manuelt, eller per ændring
    - Rapport med fejl: web, mail, ...
- Selenese-runner script
    - Hente suitelist, dispatch på tværs af browsere og testsites
    - Understøttelse af nye kommandoer, `restartBrowser` 
    - Substitutioner af eksempelvis brugernavn/kodeord
    - Parallel udførsel
- Selenium-servere
    - Status for setup

# Spørgsmål?

- Overblik 
    - Hvorfor/hvad 
    - Selenium setup intro
    - IntegrationsServer intro
- Selenium-IDE demo
- IntegrationsServer demo
- Praktiske detaljer
    - Om eksekvering af automatiske tests 
    - Overførsel fra Selenium-IDE til IntegrationsServer
    - Catchyas 
- Next


# Selenium-IDE • Demo
- Installation: firefox og http://seleniumhq.org/projects/ide/
- Kort gennemgang af grænseflade
    - Menupunkter, og grænseflade generelt
    - Eksempel optag + afspil
    - Højreklik for tests
    - Gem og åbn testsuite
        - Tilføj test
- *Selenese* triplets - domænespecifikt sprog
- Spørgsmål

# IntegrationsServer • Demo
- http://is.dbc.dk/ → Web sites → selenium-tests
- Build Now
- Job
    - Console Output
    - Test Result og detaljer herunde
- Læse fejlmeddelelser
- Configure: email-setup, regelmæssig kørsel, selenese-runner-konfiguration

# Spørgsmål?

- Overblik 
    - Hvorfor/hvad 
    - Selenium setup intro
    - IntegrationsServer intro
- Selenium-IDE demo
- IntegrationsServer demo
- Praktiske detaljer
    - Om eksekvering af automatiske tests 
    - Overførsel fra Selenium-IDE til IntegrationsServer
    - Catchyas 
- Next


# Automatiske test - udførsel

Flow for test:

- Læs suitelist
- Læs suites
- Læs testcases
- Udfør kommandoer

Udføres parallelt.

# Catchyas

- Nye vinduer, browserstate
- Samarbejde omkring filer, ie. versionering.
- Håndtering af filer i selenium-ide, husk både suites og testcases skal gemmes
- Struktur af test-træ
- Udførsel på tværs af browsere(ie. parallelle brugere), samt forskellige testsites(ie. relative urls).
- Specialtegn


# Selenium-IDE → IntegrationsServer

- Nuværende løsning: git
    - samme som Drupal Teamets øvrige aktiviteter
    - indlæringskurve
    - versionering
- L-drev 
    - kræver noget opsætning
- Andet versionsstyringssystem?

# Next
- Spørgsmål?
- Vælg overførselsmetode til Selenium-IDE 
- Installer selenium-ide
- Eksperimenter med selenium-ide
- Find mappestruktur i forhold til test 
- Lav selenium tests

