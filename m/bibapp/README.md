# BibApp

Prototype biblioteksapp. Forøjeblikket blot et eksperiment/skuffeprojekt, men det er intentionen at det bliver, eller bliver basis for, mobile apps som på udviklingsplanen for bibliotek.dk.

# Features

- søgning via opensearch-apiet
- liste af søgeresultater, der automatisk henter de næste resultater som man scroller ned gennem siden
- app-brugergrænseflade med topbar, transitioner mellem sider, etc.

## In progress / to do now


- rewrite, mere modulært
- opdatering så den følger guidelines fra github:DBC-as/rje/m/AppWidgetUdvikling.md

## Backlog / to do later

- skan isbn-nummer
- lånerstatus
- bogbestilling
- visuel søgning


# API
[ved at blive overført til requirejs]

## `jasmine_async`

Syntactic sugar for asynchronous test with jasmine, ie.

    async = require('jasmine_async');

    describe('something', function() {
        it('does something', function() {
            async.begin(); 
            doSomething(... function() {
                ...
                async.done();
            });
         });
     });

If an asynchronous test doesn't terminate within 10 seconds it will get a timeout and fail. This is done to prevent the test runner from halting.

It has two functions:
- `jasmine_async.begin()`: similar to `jasmine.waitsFor`, but waiting for done.
- `jasmine_async.done()`: `jasmine.waitFor` done.

# Project structure

- `assets`: statiske resourcer
- `scripts`: selve kildekoden
- `lib`: web-javascript-afhængigheder


Dependencies hentes med:

    npm update

Unit test køres med 

    npm test

eller ved at åbne testrunner.html i en browser (ikke fra filsystem, men fra webserver da der ellers kan være issues med same origin policy)

# Credits

Developers:

- DBC a/s

Dependencies

- TODO: add libraries etc. here
