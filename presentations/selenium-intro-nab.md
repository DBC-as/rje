% Automatisk Selenium Webgrænsefladetest
% Marts 2012
% rje@dbc.dk


# Indhold

- Automatiserede grænsefladetests i browser


- Selenium-IDE
    - firefox-plugin

- Integrationsserver, testscripts og git
    - is.dbc.dk
    - testscript
    - git

- Filer
    - 
    - suite
    - suitelist
    - integrationsserver-setup


- Catchyas
    - nye vinduer, restart-browser
    - samarbejde omkring filer (ie. versionering)

- Værktøj
    - selenium-ide
    - integrationsserver
    - overførsel til integrationsserver (git)



# Indledning

- Overblik - hvad dækker det over, og hvorfor
    - Selenium-IDE



# Selenium-IDE Intro

- Værktøj til at optage browserinteraktion
- Firefox-plugin
- 
- *Selenese* triplets - domænespecifikt sprog
- Kan *også* bruges til at sende reproducerbare bugs, etc.

# IntegrationsServer 

- http://is.dbc.dk/ → Web sites → selenium-tests
- Build Now
- Job
    - Console Output
    - Test Result og detaljer herunde
- Kører regelmæssigt

# Automatiske test - udførsel

- Test-flow
    - læs suitelist
    - læs suites
    - læs testcases
    - udfør kommandoer
- Udføres parallelt på tværs af browsere 
- Konfigurerbar url
- Substitution af eksempelvis brugernavne
- Mulighed for nye kommandoer, eksempelvis: `restartBrowser`

# Catchyas

- nye vinduer 
- samarbejde omkring filer, ie. versionering.
- håndtering af filer i selenium-ide, husk både suites og testcases skal gemmes
- struktur af test-træ

# Selenium-IDE → IntegrationsServer

- Nuværende løsning: git
    - samme som Drupal Teamets øvrige aktiviteter
    - indlæringskurve
    - versionering
- L-drev 
    - kræver noget opsætning
- Andet versionsstyringssystem?
