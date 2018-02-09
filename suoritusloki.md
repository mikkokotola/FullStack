## Full Stack Development, betaversio 12/2017-1/2018
## Suoritusloki (ajankäyttö ja kommentteja)
Mikko Kotola

### Viikot
* [Viikko 1](#vko1)
* [Viikko 2](#vko2)
* [Viikko 3](#vko3)
* [Viikko 4](#vko4)
* [Viikko 5](#vko5)
* [Viikko 6](#vko6)

<a name="vko1"></a>
### Vko 1

Ajankäyttö yhteensä: 15 h 20 min (sis. 5 h työkalusäätöä eli 10 h 20 min varsinainen aika)

_Yleiskommentit viikosta_

* Työkalujen säätö oli aika tuskaista. Materiaali ja tehtävät olivat oikein hyviä. Viimeinen tehtäväblokki oli haastava, mutta sain kyllä selvitettyä pähkäilyn jälkeen (en osaa arvioida, kuinka puhdasoppinen ratkaisuni on, mutta toimii). Viikolla haastavaa oli funktionaalisen ohjelmointityylin ajatusmaailmaan sukeltaminen - minulla on taustaa aika puhtaasti vain java-/olioohjelmoinnista.

_Ajankäyttö ja tarkemmat kommentit_

Työkalut kuntoon (Node, Visual Studio Code, Create-react-app): 5 h.

* Nodea ja VSC:tä ei ole opiskelijoiden koneilla esiasennettuna ja 2017 fuksiläppäreissä käyttäjillä ei ole oletusarvoisesti sudoja. Laitoin cs:n it-tukeen ehdotuksen näiden lisäämisestä esiasennuspakettiin. Kävin keskustelemassa Jani Jaakkolan kanssa to 4.1. ja hän auttoi asennuksissa. Lupasi keskustella Matin kanssa tarvittavien ohjelmien asentamisesta fuksiläppäreille ennen kurssin alkua. Tämänkin jälkeen oli vielä säätöä, mutta sain lopulta työkalut toimimaan (vaati lopulta sudojen käyttöä).

Vko 1 materiaalin läpi käyminen ensimmäisiin tehtäviin asti 1 h 45 min. 

* Oli hyvin kirjoitettu ja selkeä ja kävi läpi perinteisen web-sovelluksen ja js:llä toteutetun eroja. Katsoin myös js-koodeja tarkemmin ja pyrin ymmärtämään mitä koodi tekee.

Tehtävät 1,2 (html, css, lomakkeet) skippasin, suht tuttua kamaa.

Tehtävä 3-6: 45 min. 

* Hyviä tehtäviä, tulee käytyä läpi prosessit/sekvenssit ja tuli myös websequencediagram-työkalu tutuksi.

React-materiaalin eka osa 45 min

Tehtävät 7-8: 30 min

* Hyvää harjoitusta refaktoroinnin kautta.
  
React-materiaali: 20 min

Tehtävät 9-11: 20 min

* Verrattain helppoja tehtäviä - hyvää ja opettavaista harjoitusta.
  
Javascript: Olioiden metodit ja this, luokat 15 min

A re-introduction to JavaScript (JS tutorial): 1 h

Paluu Reactin äärelle: 1 h

Tehtävät 12-20: 3 h 30 min

* Olivat haastavia, mutta onnistui pähkäilyn, materaalin kertaamisen ja googlailun jälkeen.


<a name="vko2"></a>
### Vko 2

Ajankäyttö yhteensä: 9 h 30 min

_Yleiskommentit viikosta_
Melko haastava, mutta hyvin opettavainen viikko oli! Tehtävä 33 jäi kesken 90 min pähkimisen jälkeen, muut onnistuivat. Ehkä tuokin nyt jo menisi jos siihen vielä palaisi.

Kannattaa varmaan ohjeistaa opiskelijoita, onko tarkoitus luoda erillinen react app jokaiselle tehtäväkokonaisuudelle vai käyttää samaan appia ja muuttaa vain noita src:n sisällä olevia koodeja. Erilliset sovelluksethan ovat aika isoja. Tein itse erillisiä alkuun, sitten siirryin vain kopioimaan varsinaisen ydinkoodin alakansioihin ja käyttämään samaa sovelluspohjaa.

_Ajankäyttö ja tarkemmat kommentit_

Kokoelmien renderöiminen 25 min

Tehtävät 21-25 40 min

* Tehtävä 22 oli ainakin minulla jo valmiiksi ratkaistu viikon 1 versiossa eli tässä ei tarvinnut tehdä mitään

* Tehtävä 23 sen sijaan vaati pohdintaa, koska lähtödata ei ollut arrayna vaan arrayn objectien ominaisuutena. Ratkaisuni oli const reducer = (accumulator, currentValue) => accumulator + currentValue; return (\<p>yhteensä {Array.from(props.osat, x => x.tehtavia).reduce(reducer)} tehtävää\</p>)

* Tehtävässä 24 oli haastavuustaso juuri kohdallaan. Piti miettiä ja kerrata materiaalia, mutta onnistui kuitenkin melko nopeasti.

* Tässä toimi hyvin materiaalin ja tehtävien suhde

Lomakkeet 50 min

Tehtävät 26-30 65 min

* Hyviä tehtäviä, sai soveltaa materiaalien oppeja

* Tehtävässä 30 en ollut aivan varma, mitä haettiin. Ainoa komponentti, jonka olin jo valmiiksi eriyttänyt, oli Person (joka renderöi henkilön). Tapahtumankäsittelijöitä ei kai voi/ole tarkoituksenmukaista ottaa omiksi komponenteikseen? En muokannut sovelluksen komponenttirakennetta.

Datan haku palvelimelta 45 min

Tehtävät 31-32 50 min
* Jälkimmäinen oli aivan mahtava tehtävä! Pienellä soveltamisella päästiin käyttämään oikeita rajapintoja.

REST API:n käyttö ja Datan lähetys palvelimelle 1 h 5 min

Tehtävät 33-37 3 h 10 min

* Tehtävä 33 oli vaikea. Aikaa meni ehkä 90 min enkä saanut toimimaan. Tarkoitukseni oli päivittää Appin statessa olevan filtterin arvoa erillisen Appin funktion kautta, mutta en saanut sitä toimimaan yhteen maalistauskomponentin kanssa. Jätin tehtävän hautumaan.

* 34 ja 35 menivät helposti materiaalin esimerkkiä seuraten

* 36 oli hieman vaikeampi ja vaati pähkimistä, mutta onnistui. Aikaa meni tunnin verran.

* 37 oli taas helpompi ja onnistui soveltamalla materiaalin esimerkkiä ja pienellä päättelyllä

Tyylien lisääminen 15 min

Tehtävät 38-39: 25 min

* Nämä olivat kivoja soveltamistehtävä, suht helposti onnistuivat.

<a name="vko3"></a>
### Vko 3

Ajankäyttö yhteensä: 10 h 20 min

_Yleiskommentit viikosta_

* Tuon oman backend-appin koodi ei nyt näy päärepossa - ilmeisesti koska se on itsessään repo - onko ongelma - pitääkö saada näkyviin? Linkki sovellukseen on tämän repon etusivulla.

* Askel askeleelta etenevä pedagoginen tyyli materiaalissa toimii todella hyvin: ymmärrys kasvaa tällä tyylillä huomattavasti syvällisemmin kuin hyppäämällä suoraan lopulliseen päämäärään.

* Oli edelleen haastavaa, mutta opettavaista - ja tehtävät onnistuivat kyllä (joskus pähkimisen jälkeen)!

* Paljon uusia työkaluja vyön alle

_Ajankäyttö ja tarkemmat kommentit_

Node.js; Express; Lisää routeja 2 h 10 min 

* Katsoin ensin postmania, mutta otin sitten käyttöön VSCoden REST Client pluginin, mikä vaikuttikin toimivan hyvin.

Tehtävät 40-45 45 min

* Menivät helposti materiaalin esimerkkiä seuraten. 

Huomioita HTTP pyyntötyyppien käytöstä 10 min

Tehtävät 46-47 25 min

* Hyvät tehtävät. Vaativat hieman pähkäilyä, mutta vihjeet auttoivat juuri sopivasti.

Yhteys frontendiin; Sovellus internettiin 1 h 30 min

Tehtävät 48-50 50 min

Node-sovellusten debuggaaminen 15 min
Mongo 30 min

Tehtävät 51-52 30 min

* Aivan mahtavia tehtäviä! Nämä onnistuivat vihjeillä - ja uutta asiaa kertyy päähän koko ajan.

Tietokantaa käyttävä backend 25 min

Tehtävät 53-54 20 min

Virheiden käsittely 10 min

Tehtävät 55-57 30 min

Refaktotointia - promisejen ketjutus ja Sovelluksen vieminen tuotantoon 40 min

Tehtävät 58-59 1 h 10 min

* Tehtävä 58 oli hankala, mutta onnistui pähkäilyn jälkeen. Aikaa meni noin 50 min

<a name="vko4"></a>
### Vko 4

Ajankäyttö yhteensä: 16 h

_Yleiskommentit viikosta_

* Tehtävien numeroinnissa on nyt kaksi tehtävää numerolla 60. En korjannut tätä vielä, varmaan kannattaa korjata numerointi kun vie tehtäviä varsinaisen kurssin tehtävälistaan (jos tulee muitakin muutoksia).

* Lopetin esimerkkisovelluksen kehittämisen tekstin lukemisen ohessa tehtävän 60 jälkeen. En saanut esimerkkisovellusta toimimaan, joten siirryin tekemään materiaalia vastaavia muutoksia suoraan omaan sovellukseeni (blogilista).

* Viikko oli melko haastava ja aikaa meni

_Ajankäyttö ja tarkemmat kommentit_

Sovelluksen rakenteen parantelu 65 min

* Uuh. Tässä meni kauan. Tein esimerkin muutokset omaan versiooni materiaalin Noteappista, mutta muutokset aiheuttivat sen, että backend ei enää palauttanut vastauksia frontendin kyselyihin. Tuo controller/paths ilmeisesti hajosi jotenkin. Kävin koodia läpi ja se oli mielestäni tarkalleen kuin materiaalissa, mutta ei toiminut. Pohdin mm., miksi paikallisen kehitysversion tietokantayhteyden määrittelevä if (process.env.NODE_ENV !== 'production') {require('dotenv').config()} oli poistettu. Mutta sen lisäämisellä tai poistolla ei ollut vaikutusta (Notesapp ei toiminut herokussa eikä paikallisesti). Sitten kopioin materiaalin koodin Matin githubista, mutta tämäkään ei johtanut mihinkään. Aikaa tähän oli mennyt tunti, joten totesin, että siirryn eteenpäin ja katson, onnistuisiko siirtymä omassa (phonebook) appissani.

* Mongoose antoi ohjeiden (osan 4 alku) mukaisella mongoosen yhdistämiskomennolla mongoose.connect(mongoUrl, { useMongoClient: true }) virheilmoituksen:
WARNING: The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it. Kun tuo osan poisti, niin virheilmoitus katosi. Aiemmin minulla oli pakko olla tuo pidempi versio - ehkäpä mongoose on päivittynyt tässä välissä.

Tehtävä 60 40 min

* Tämä oli erinomainen tehtävä! Kurssilla opittavista taidoista uuden backendin luominen tyhjästä on keskeinen taito, ja tämä tehtävä kertasi prosessia mainiosti.

Tehtävä 60 osa2 1 h 10 min

* En saanut otettua middlewaren erroria käyttöön. Jos otin sen käyttöön, palvelin palautti kaikkiiin pyyntöihin vastauksena errorin (vaikka get-pyyntö olisi ollut validi). Logger taas toimi hyvin.

* Piti kyllä tosiaan tehdä pienissä askeleissa.

Node-sovellusten testaaminen 40 min

* Selkeä kokonaisuus

Tehtävät 61-65 2 h 30 min

* Itse testien tekeminen tuntui melko sujuvalta. Javascriptin taulukoiden ja key-value-parien käsittely ja iteroiminen vaati vain aika paljon aikaa... Pitäisi opiskella tarkemmin noita valmiita käsittelyfunktioita.


Apin testaaminen 1 h 20 min

* Tässä vaiheessa piti asentaa Mongodb paikallisesti ja perehtyä paikallisen version käyttöön, jotta testien ajamisessa pääsi eteenpäin. Tein materiaalia vastaavia testejä omalle blogisovellukselleni.

Tietokannan alustaminen ennen testejä 50 min

Tehtävät 66-69 20 min

* 66 ja 67 olin jo tehnyt materiaalin lukemisen ohella, olivat käytännössä valmiit

* 68 ja 69 menivät helposti

Testien refaktorointi 15 min

Tehtävät 70-72 1 h 10 min

Käyttäjien hallinta ja monimutkaisempi tietokantaskeema
sekä samaan aikaan tehtävät 73-75 2 h

Kirjautuminen ja tehtävät 76-79 3 h 45 min

* Toiminnallisuudet oli helpompi toteuttaa kuin testit. Tehtävä 79 jäi kesken.

ESLint ja tehtävä 80 10 min

* ESlint-erroreita tuli aika paljon. En lähtenyt kuitenkaan vielä korjaamaan.

<a name="vko5"></a>
### Vko 5

Ajankäyttö yhteensä: 19 h 40 min

_Yleiskommentit viikosta_

* Viikko vaati paljon aikaa ja tuntui haastavalta.

* Kaksi tehtävää jäi kesken (92 ja 94)

* Siirryin viikon alkupuolella käyttämään varsinaisen kurssin materiaaleja. Katsoin myös tehtävissä rinnakkain betan ja varsinaisen kurssin tehtäviä ja hyödynsin muutamissa kohdissa varsinaisen kurssin lisättyjä vihjeitä.

_Ajankäyttö ja tarkemmat kommentit_

Kirjautuminen React-sovelluksesta ja tehtävät 81-84 3 h 45 min

* Tähän meni normaalia kauemmin, silä olin tehnyt osion osittain alun perin (1 h 30 min), mutta osaa muutettiin varsinaista kurssia varten, joten katsoin tämän vielä uudelleen muuttuneen materiaalin kanssa.

Kirjautumislomakkeen näyttäminen vain tarvittaessa; Komponentin lapset; ref sekä tehtävät 85-88  7 h 35 min

* Yksilöllisten tapahtumakäsittelijöiden määrittäminen ja blogin laajojen tietojen näkyvyystiedon ylläpito statessa blogin "ylimääräisenä kenttänä" vaati paljon pähkäilyä. Yksilöllisten linkkien tekeminen oli jäänyt minulla kesken osan 2 tehtävissä, joten nyt piti käydä perusteellisesti uudestaan läpi.

* Tässä oli paljon tekemistä!

* Toiminnot on toteutettu siten, että kaikki toiminnot vaativat kirjautumisen

TÄSSÄ VAIHEESSA SIIRRYIN LUKEMAAN VARSINAISEN KURSSIN MATERIAALIA. Jatkoin kuitenkin betan tehtävillä.

PropTypes ja tehtävä 89 10 min

React-sovelluksen testaus ja tehtävät 90-92 1 h 10 min

* 90 ja 91 menivät helposti ja nopeasti
* 92:ssa oli vaikeuksia blogin ehdollisen renderöinnin testaamisen kanssa. Jätin kesken/hautumaan.

Mount ja full DOM -renderöinti; Frontendin integraatiotestaus ja tehtävät 93-94 1 h 40 min
* 93 meni OK
* 94:ssa en saanut appia renderöitymään kirjautuneella käyttäjällä. Jätin kesken/hautumaan. 

Snapshot-testaus; End to end -testaus; Sovellusten tilan hallinta reduxilla; Redux-muistiinpanot sekä tehtävät 95-96 2 h 30 min

* Hyvät tehtävät, 96:sta piti vähän pähkiä mutta onnistui

Lisää toiminnallisuutta ja ei-kontrolloitu lomake; action creatorit; staten välittäminen propseissa ja contextissa sekä tehtävät 97-99 2 h 45 min

* Tehtävät onnistuivat ja olivat vaikeustasoltaan sopivia

<a name="vko6"></a>
### Vko 6

Ajankäyttö yhteensä: KESKEN

_Yleiskommentit viikosta_

_Ajankäyttö ja tarkemmat kommentit_

Muistiinpano-sovelluksen refaktorointia ja tehtävät 100-103 3 h 50 min

* Tein myös varsinaisen kurssin tehtävän 6.1 (ESLint-konfiguraatio)

* Tein tässä jo samalla Providerin käytön sovellukseeni

Connect 10 min

Tehtävät 104-106 30 min

Presentational/Container revisited ja tehtävä 107 40 min

Redux-sovelluksen kommunikointi palvelimen kanssa ja tehtävät 108- 15.10-
15.55
