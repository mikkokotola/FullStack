### Full Stack Development, betaversio 12/2017-1/2018
### Suoritusloki (ajankäyttö ja kommentteja)
Mikko Kotola

__Vko 1__

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


__Vko 2__

Ajankäyttö yhteensä: KESKEN x h x min 

_Yleiskommentit viikosta_
Kannattaa varmaan ohjeistaa opiskelijoita, onko tarkoitus luoda erillinen react app jokaiselle tehtäväkokonaisuudelle vai käyttää samaan appia ja muuttaa vain noita src:n sisällä olevia koodeja. Erilliset sovelluksethan ovat aika isoja.

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

REST API:n käyttö 10.30-
