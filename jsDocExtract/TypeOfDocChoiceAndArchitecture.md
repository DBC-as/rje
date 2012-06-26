# Mulige dokumentationssystemer

- jsdoc
    - latest version in development <http://github.com/jsdoc3> works with e4x-code
    - annotation works with google closure compiler.
    - tvivlsomt eclipse plugin - no support anymore
    - er det mest udbredte af jsdoc og scriptdoc
    - flere tags end scriptdoc
     - ¿vil dette virke med vores objekt-patterns?
- scriptdoc
    - good integration with aptana
     - ¿vil dette virke med vores objekt-patterns?
    - mostly compatible with jsdoc
- MAYBE jgrousedoc: javascript, seems not that widely used/supported
- MAYBE robodoc: generic apidoc
- MAYBE sphinx: python-doc also targetable other language
- MAYBE headerdoc: apple/xcode, generic apidoc
- MAYBE naturaldocs:  generic apidoc
- NO doxygen: javascript-support is hackish at best, ie. java-like-annotations+perlscript
- NO docco: literate programming, not suitable for our use case (extractable api-doc)
- NO twintext: proprietary

# Dokumentationsformat

- union of scriptdoc+jsdoc (evt. sub-/super-set)
    - most tags the same in the two
    - notice @return works with jsdoc 3, not incompatible despite in practice in spite of documentation of jsdoc-tags. 

# Arkitektur-noter

- parser
    - største udfordring: genkende hvad den pågældende kommentar er om (ie. hvad er parent class på metode)
- interaktiv shell-hjælp
    - udvides, dispatch på type, så den både kan bruge de eksisterende xml-doc, og det nye format
- html/pdf-konvertering
    - jsdoc3
        - eksisterende løsning, let at implementere.
        - måske quirky result pga. inkompatibilitet med vores objekt-pattern
    - bygges oven på vores parser
        - fanger fejl i parsning lettere, da det ses i dokumentationen og ikke blot i den interne hjælp
- conversion
    - confirm conversion-list in repos+files
    - regex-hack vs. real parsing
    - heuristic memberof-tagging + name for that

# Other

- kodekonvention for function-as-block usage, ie. `(function(){ ... })()` `!function(){...}()` da `function(){...}()` kan være forvirrende ved lange funktioner
