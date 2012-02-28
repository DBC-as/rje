% Vidensdeling: OAuth 2.0
% rje@dbc.dk
% December 2011


# Indhold

1. Hvad/hvorfor
2. Hvordan virker det
3. OAuth 2.0
4. Hvad ville vi kunne bruge det til

# Hvad/hvorfor

- OAuth 2.0 er en standard for adgangskontrol 
    - Interessant tilgang
    - Kan måske være et relevant bud for vores webservices

Problem:

- IP-autentificering virker ikke med klient-applikationer
- Login/password i klienten er usikkert og understøtter ikke begrænset adgang eller 'revoke'


# Hvordan 

- afkobling mellem bruger ("resource owner") og klient
- indførsel af `access_token`
- forskellige authentikationsflow

------

Eksempel - implicit flow:

1. Klienten sender brugeren til service-login med liste af adgangsønsker
2. Service-login returnerer brugeren til klienten sammen med `access_token`
3. Klienten kan herefter kalde webservicen med `access_token`

Bemærk: klienten ser aldrig bruger-login, og brugeren kan vælge hvad klienten har adgang til.

# OAuth 2.0

- IETF Working Draft (forfattet af Yahoo/Microsoft/Facebook)
- SSL, og dermed enklere end OAuth 1.0
- Flows: authorization code, implicit, bruger credentials, klient,
- Anvendes allerede af google, facebook, microsoft, twitter, github, ...
    

# Hvad vi villle kunne bruge det til

- Klientapplikationer ie. mobil+web-apps.
- Testadgang til services (ie. begrænset antal api-kald/time)
- Åbning op for 3.parts-applikationer.
- Finkornet resourceadgang/billing: bibliotek/bruger/applikation vs. kun bibliotek. 
- Viden om hvem der bruger vores services.


# Opsamling

1. Hvad/hvorfor
2. Hvordan virker det
3. OAuth 2.0
4. Hvad ville vi kunne bruge det til


# Spørgsmål?

?
