# Mobiludvikling

Udkast/noter, baseret på TA-forum notat, skridt i retning af koordinering af mobiltilgang på dbc/ting/biblioteker.

Har ikke inkluderet tradeoffs/erfaringer/årsager til de enkelte valg, men hvis der er interesse for det, giv lyd, og så udvider jeg dokumentet.

## Transitions m.bibliotek.dk

- Implementeres via JQueryMobile, og den nuværende bibliotek.dk-kode

## Drupal

- Samme framework som artesis/ding2
    - `mobile_tools`?
- Test via selenium?

## Apps

Udvikling
- Apache Callback (aka. PhoneGap) for platformuafhængighed og adgang til "app-features"
- Funktionsbiblioteker: requirejs, zepto, underscore, backbone, phonegap
    - Kompatibilitet på buggy platforme: jquery, es5shim, json2
- Test/integrationsserver: (jasmine eller mocha(visionmedia)), (dbc-jenkins eller travis-ci)
- Docs: docco for kodedokumentation, markdown til api/beskrivels/roadmap
- Kode gennem mindst to sæt øjne, ie. reviewboard på dbc, (github-pull ifht. eksterne?)

Distribution:
- som webapp (med gracefull degradation af telefon-specifikke features, samt install/link-popup for Android/iOS)
    - cache-manifest, widget-config, ...
    - byggede pakker til devices understøttet på phonegap-build
- android market samt apple-appstore
    - manual build for plugins.
- kildekode lægges løbende ud under udviklingen på github

## Testplatforme

Primært understøttede/testede platforme på:
- Android 2.3 (-> 4), high-dpi device
- Android 2.1 (-> 2.2), low-end, low-dpi device
- iOS 5, high-dpi device
- iOS 4, low-end low-dpi device
da disse dækker sidder på størstedelen af mobil-app/web-trafikken i DK

Derudover testes på følgende for portabel kode, og fremad/bagud kompatibiltet:
- Opera Mini emulator (alternativ mobilbrowser, særligt til low-end devices)
- Internet Explorer 8 (desktop kompatibilitet, senere windows phone)
- Firefox (desktop kompatibilitet, senere firefox mobile)
- Chrome (desktop kompatibilitet)

