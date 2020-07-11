---
title: Paremman kehittäjäkokemuksen etsintä
date: 2020-07-11T12:21:07.120Z
description: Tällä hetkellä webbidevauksessa tuntuu olevan hyvin vähän
  todellisia erilaisia vaihtoehtoja devaukseen. Tässä postauksessa käsittelen
  hyvien webbiteknologioiden etsintääni.
---
Ensimmäisenä haluaisin todeta, että nykyinen yleinen tapa webbidevaukseen (React + NPM + 100 eri kääntäjää ja prosessoijaa koodille + 10^20 node moduulia) luo kitkaa kehittämiseen, tekee koodin deployaamisesta turhan monimutkaista sekä hankaloittaa kokonaiskuvan projektista saamista. Jos webbiteknologioilla halutaan oikeasti korvata natiivisovellukset, niin varsinkin kehitysympäristöissä on paljon parantamisen varaa. 

Aluksi haluan listata fronttidevauksessa kokemiani ongelmia:

1. /node_modules kansio paisuu järjettömän suureksi, tuo turhaa kompleksisuutta koodiin sekä voi tuoda koodiin tietoturva-aukkoja. Tämän lisäksi varsin triviaalejen tehtävien tekemiseen saatetaan tuoda NPM kirjasto, sen sijaan että kirjoitettaisiin itse se 20 riviä koodia. Tämä on hyvin huomattavissa esimerkiksi StackOverflowissa, jossa hyvin nopeasti suositellaan jotain kirjastoa, miettimättä kummemmin sitä kuinka helposti sama toiminnallisuus olisi itse toteutettavissa.
2. JS ei nyt vaan rehellisesti sanottuna ole maailman paras ohjelmointikieli. JS kärsii monista ongelmista, kuten siitä että jokin voi olla ensin int ja muuttuakkin stringiksi. Tämähän oli vielä hetki sitten tosi hieno feature, mutta lopulta ihmiset alkoivat tajuamaan, että tyypeillä säästyy aika useilta bugeilta. Törmäsin yhtenä päivänä ongelmaan, joka johtui siitä, että JS ei tue numeroita, jotka mahtuvat 64 bittiseen inttiin, vaan jokainen numero on float, eli max ~2^52. En tiedä kenen idea tämä oli, mutta hyvä idea se ei ollut.
3. Pitkät kääntöajat ja prosessit käyttäen esim NPM:ää ja Webpackiä. En tiedä miten voi olla, että tulkatun kielen kääntämiseen voi mennä **kauemman** **aikaa** kuin käännetyn kielen kääntämiseen. Näin asia vain tuntuu olevan.



Fronttidevauksessa on myös hyviä puolia: CSS ja HTML. Kumpikin näistä toimii mielestäni varsin hyvin nykyisessä muodossaan, eikä tarvitse kummempaa korjausta. Single page app on tällä hetkellä mahdoton toteuttaa ilman javascriptiä. Jopa webassembly vaatii javascriptiä DOM:in manupulointiin. Eli nykytilanteessa paras vaihtoehto on löytää jokin toinen tapa kirjoittaa toiminnallisuutta fronttiin kuin JS. Tällä tavalla on minulta kolme vaatimusta:

1. Nopea ja yksinkertainen kääntää.
2. Nopea ja helppo ymmärtää ja kirjoittaa.
3. Teknologialla tulee olla potentiaalia.

Ensimmäinen ajatukseni oli kirjoittaa frontendiä Go:lla joka käännetään webassemblyksi. Tämä ei kuitenkaan täyttänyt varsinkaan ehtoa 2. Jotta ehto 2 täyttyisi tarvittaisiin jokin JSX:n tyyppinen ratkaisu, joka tekisi Go:lla frontin kirjoittamisesta sidettävää. Tämänhetkiset vaihtoehdot komponenttien kirjoittamiseen ovat raskaita kirjoittaa, sekä epäloogisen tuntuisia. Tällaisen toteutus ei olisi mahdotonta, mutta en ole varma onko se polku jolle haluan lähteä.

Nyt olen päätynyt tutkimaan Elm:iä vaihtoehtona JS:n kirjoittamiseen. Postailen siitä mahdollisesti lisää kun opin lisää.