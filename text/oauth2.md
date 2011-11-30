% Vidensdeling: OAuth 2.0
% December 2011
% rje@dbc.dk


# Indhold

1. Hvorfor denne præsentation / hvilket problem løser OAuth
2. Hvordan virker det
3. Praktisk info om OAuth 2.0
4. Hvad ville vi kunne bruge det til

# Hvorfor / problem

• Interessant tilgang til adgangskontrol på services

&nbsp;

• IP-autentificering virker ikke med klient-applikationer

• Login/password i klienten er usikkert og understøtter ikke begrænset adgang eller 'revoke'


# Hvordan / implicit flow

Indførsel af `access_token`

1. Klienten sender brugeren til service-login med liste af adgangsønsker
2. Service-login returnerer brugeren til klienten sammen med `access_token`
3. Klienten kan herefter kalde webservicen med `access_token`

Bemærk: klienten ser aldrig bruger-login, og brugeren kan vælge hvad klienten har adgang til.

# OAuth 2.0

• IETF Working Draft (forfattet af Yahoo/Microsoft/Facebook)

• SSL, og dermed enklere end OAuth 1.0

• Flows: Authorization Code, Implicit, Bruger Password, Klient

• Anvendes allerede af google, facebook, microsoft, twitter, github, ...
    
# Vores use-case

- Klientapplikationer vil kunne bruge vores adgangsbegrænsede appliktationer, ie. mobil, indlejeret webapps, samt 3.parts-applikationer
- Resourceadgangskontrol via bibliotek (implicit via bruger), applikation/`client_id` eller bruger

# Opsamling

1. Hvorfor denne præsentation / hvilket problem løser OAuth
2. Hvordan virker det
3. Praktisk info om OAuth 2.0
4. Hvad ville vi kunne bruge det til

## Spørgsmål?
