---
title: Devlinks.ktj.st ja React hookit
date: 2020-04-11T07:01:09.207Z
description: Testailin React hookkeja pienen React projektin kanssa.
---
![screenshotti devlinks.ktj.st](/img/devlink.png)

Kuuntelin uusimman [Webbidevaus.fi](https://webbidevaus.fi/81) podcastin muutama päivä sitten, ja siinä mainittiin React hookit. Pienen kokeilemisen jälkeen, ne vaikuttavat olevan erittäin käteviä, ainakin näin aloittelija React devin näkökulmasta. 

Päätin tehdä pienen React projektin, joka löytyy osoitteesta <https://devlinks.ktj.st>. Se listaa koodareiden usein tarvitsemia ja hyödyllisiä linkkejä. Näitä linkkejä voi sitten suodattaa kirjoittamalla tekstiä hakupalkkiin. Ajattelin aluksi tekeväni haun "häshäämällä" eli tekemällä stringeistä lukuja nopeampaa vertailua varten, mutta se on ainakin vielä näin vähäisillä linkkimäärillä tarpeetonta. 

Sivulla on myös stateless React formi johon voi ehdottaa linkkejä lisättäväksi, se tosin poistuu pienillä näytöillä näkyvistä, koska se ei ole kovin tarpeellinen ja vie paljon tilaa. Formi käyttää Netlify formssia, koska se nyt vaan on helpoin tapa saada formin submissioneita kerättyä ilman suurempaa säätöä.