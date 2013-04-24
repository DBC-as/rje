# Overblik over Linked Data stores

Formålet med dette dokument er at give et overblik over, og finde bud på forskellige triplestores i forhold til linked data i brønden. 

- maturity og skalerbarhed
- licens - i hvilken grad kan det blive en del af brønden, ie. GPLv3 kompatibiltet

Europeanas RDF-store report fra 2011, er et rigtigt godt udgangspunkt, og kan klart anbefales hvis man vil have mere detaljeret overblik. Ifølge denne var 4store, Virtuoso og OWLIM de dominerende triplestores.
Herudover dukker Apache Jena ofte op i diskussioner om linked-data store, og denne ser ud til (ifølge google trends: "apache jena") først at have søge volumen siden 2012 og er nu der på niveau med 4store.
Seneste berlin-benchmark (2011) sammenligner Virtuoso, Jena TDB, 4store, BigData, and OWLIM. I db-engines rankingen af rdf-stores ligger Jena i toppen, efterfulgt af Sesame og AllegroGraph, - det ser dog ikke ud til at den har alle med.


*Jena* er et Java framework for linked data, det indeholder sin egen triple-store (TDB), med nogenlunde skalerbarhed. Har abstrationslag så underliggende triple-store også kan udskiftes. Det er et top-level apache-projekt. 

*Sesame* er ligeledes et Java framework for linked data, - ligesom 

*Jena vs. Sesame* - hvis andre triplestores undestøtter at bliver brugt som backends, er det typisk via disse to framework. Det ser ud til at Sesame er det ældste, - men at Jena har mest traction. Begge er i aktiv udvikling. Europeana undersøgelsen har mest vægt på Jena, og det ser ud til at denne har lidt flere features ifølge Jena/Sesame-sammenligningen. At Jena er et apache-projekt, er også et plus, men begge kunne være gode bud. Begge er GPL-kompatibel open source (Apache og BSD licens).


*4store* er et triple store med god performance/skalerbarhed. Det er GPLv3, er skrevet i C/C++ og har også Java API, og virker enkelt at gå til.


*Virtuoso* er et hybrid triple-store/database, med god performance/skalerbarhed. Er tilgængelig under GPLv2+proprietær-licens, som jeg er usikker på om kan fungere med brøndens GPLv3. Kan dog også fungere som backend til Jena eller Sesame.

*OWLIM* er en proprietær løsning, med god performance/skalerbarhed  og har jena/sesame-API'er. 

*Jena* - TDB scales moderately - java api, with different backends - BSD

*AllegroGraph* proprietært, skalerbar,  jena/sesame backend.

*BigData* triple store er nok en lidt anden skala end det vi kigger efter (petabyte-scale, cluster 100s-1000s of machines), GPLv2.

*Mulgara*(/Kowari) - dele af koden er under "Open Software License" som ikke er GPL-kompatibel. Ej heller så mainstream og nok ikke oppe på 4store/virtuoso/owlim-performance-niveau.


Konklusion: Jena ser ud til at være det bedste bud.

# Kilder

blandt andet:
- Europeana RDF Store Report http://eprints.cs.univie.ac.at/2833/
- Virtuoso license: https://github.com/openlink/virtuoso-opensource/blob/master/LICENSE
- http://www.w3.org/wiki/RdfStoreBenchmarking
- db-engines ranking http://db-engines.com/en/ranking/rdf+store
- jena/sesame sammenligning: http://answers.semanticweb.com/questions/1638/jena-vs-sesame-is-there-a-serious-complete-up-to-date-unbiased-well-informed-side-by-side-comparison-between-the-two


