## Full Stack Development, betaversio 12/2017-1/2018
## Suoritusloki (ajankäyttö ja kommentteja)
Mikko Kotola

### Viikot
* [Viikko 1](#vko1)
* [Viikko 2](#vko2)
* [Viikko 3](#vko3)

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

Ajankäyttö yhteensä: KESKEN x h x min

_Yleiskommentit viikosta_

* Askel askeleelta etenevä pedagoginen tyyli materiaalissa toimii todella hyvin: ymmärrys kasvaa tällä tyylillä huomattavasti syvällisemmin kuin hyppäämällä suoraan lopulliseen päämäärään.

_Ajankäyttö ja tarkemmat kommentit_

Node.js; Express; Lisää routeja 2 h 10 min 

* Askel askeleelta etenevä pedagoginen tyyli materiaalissa toimii todella hyvin: ymmärrys kasvaa tällä tyylillä huomattavasti syvällisemmin kuin hyppäämällä suoraan lopulliseen päämäärään.

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
