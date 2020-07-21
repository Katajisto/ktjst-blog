---
title: Hello TypeScript. Goodbye JavaScript.
date: 2020-07-21T19:26:44.177Z
description: "Päätin aloittaa uuden harrasteluprojektini: mökin
  hälytysjärjestelmän, frontin kehittämisen käyttäen TypeScriptiä. Olen jonkin
  aikaa vältellyt TypeScriptin opettelua ja ehkä hieman sivuuttanut sen
  ylimääräisenä komplikaationa build prosessiin, mutta lopulta totesin sen
  vaikuttavan vahvasti järkevimmältä vaihtoehdolta."
---
Ensinnä haluaisin kertoa muutaman syyn TypeScriptin valintaan ja opetteluun. Heräsin varsinaiseen ongelmaan vahviten, kun kuulin ihailemani ohjelmoijan Jonathan Blow:n toteavan jotakuinkin seuraavasti syistään olla pitämättä JavaScriptistä: 

> "In JavaScript, if you mistype a variable, that turns into a runtime debug situation."

Tämähän on päivänselvä fakta, mutta sai minut miettimään enemmän sitä, kuinka olen jo vain muutaman kuukauden kestäneen ohjelmointi työurani aikana käyttänyt todennäköisesti yhteenlaskettuna kohtuullisen suuren määrän aikaa siihen, että olen metsästänyt Chromen Devtoolsseilla bugia, joka on osoittautunut lopulta vain väärinkirjoitetuksi tai vääräntyyppiseksi variableksi. Kaikilla käännettävillä kielillä ongelma olisi varsin triviaali huomata, mutta JS:n ihmeellisessä maailmassa tähän törmätään vasta runtimessä. 

Triviaaleissa ohjelmissa tämä on varsin pieni ongelma, mutta laajemmassa codebasessa nämä ongelmat saattavat ilmetä niin harvoin, ettei niitä huomata kuin vasta myöhäisessä vaiheessa, tai ne saattavat aiheuttaa odottamattomia vaikutuksia, joiden juurisyiden löytäminen on turhan pitkä prosessi.

Tämänhetkinen TypeScript workflowini on seuraavanlainen:

1. TSC (compiler) asennettuna globaalisti NPM:n kautta. ( En olisi halunnut asentaa lainkaan mitään NPM:ää käyttäen, mutta se tuntui TS:n suhteen olevan todella hankalaa. ) Projektini säästyi kuitenkin node_modules tai package.json bloatilta.
2. Live-server ( Olin jo hävinnyt taisteluni NPM:ää vastaan, joten asensin tämänkin globaalisti että sain kehitysympäristöni nopeasti käyntiin. ) 
3. Pelkkä react buildattuna, jottei senkään vuoksi täydy altistaa projektiani nodemoduuleille.
4. Jonkin emacs TS plugari, jonka koen sopivan kevyeksi, mutta samalla tuottavuutta lisääväksi. ( Tätä en ole vielä valinnut. )

Saa nähdä, kuinka TS kokeiluni käy. Olen kuitenkin suhteellisen toiveikkain mielin liikkeellä kokeilemassa sitä. Ihan rehellisesti kirjoittaisin jotain, jota ei koskaan edes käännettäisi JavaScriptiksi ( esim. siksi että JS:ssä kaikki numerot ovat floatteja. ) Tämä ei kuitenkaan ole oikein vaihtoehto, koska vaikka WebAssemblyllä voi jo manipuloida fronttia, niin sekin täytyy tehdä JS syscallien kautta. Toisin kuin TypeScriptistä, näistä ei myöskään olisi hyötyä töissä. Pidän myös tietyllä tapaa Reactista, joten on mukavaa saada jatkaa sen kirjoittamista.