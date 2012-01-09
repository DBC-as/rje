# Next

Version 1:

- traverse tests given in suite-config
- send test to single server
- replace login/password from server-config
- host from server-config
- simple reporting to stdout
- before/beforeEach/after/afterEach
- only single server/no-distribution

## Jenkins/chemical
- talk efter sprint planning

## Testere
- opsaet git (dbc-as) til testcases
- intro til testere
    - git intro
    - selenium intro

## opsaetning af server
- evt. saucelabs, herunder til testere
- syskons opsaet server

## Afklaring af spec
- traversal structure
    - execute `*suite`
    - json-config with suites and suite-configs
- parallelitetshaandtering

## ding-support
- oprettelse af testbrugere/admin

# Later

- serverconfig with sauce/different browsers
- parallel execution of testcases across browsers
- suit-exclusivity
- suites matching ding/artesis/bibdk + browsers in suite-config
- command line options
- exitcode for hudson

# Tasks

- selenese -> webdriver
    - unit tests
    - test traversal
        - hierachy/structure: suites, before/beforeEach/afterEach/after
        - ding/artesis/bibdk
        - user credentials
        - platforms
    - selenese->webdriver
        - selenese parser
        - soda
        - implementation of selenese commands
    - reporting
- production selenium-setup: 
    - hub + nodes 
    - platforms (ie. linux, windows, mac)
    - browsers (ie. firefox, internet-explorer, chrome, webdriver, iphone, android))
    - browser versions (...)
    - ALTERNATIVELY: saucelabs.com or testingbot.com or ...?
- integration server
    - job setup of running artesis/ding/bibdk-instances
    - testaccounts/services
- testwriting
    - hierachy/structure
    - training
