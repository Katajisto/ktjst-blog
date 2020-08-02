---
title: DIY Mökin hälytysjärjestelmä | Osa 1
date: 2020-08-02T07:41:44.123Z
description: "Muutama vuosi sitten perheeni rakensi mökin, ja minä sekä kaverini
  sinne hälytysjärjestelmän. Valitettavasti tämä ratkaisu osoittautui liian
  epävakaaksi ja epäluotettavaksi. Täten päätin rakentaa uuden järjestelmän
  käyttäen vanhaa järjestelmää varten laitettuja sensoreita ja johtoja. "
---
Muutama vuosi sitten perheeni rakensi mökin, ja minä sekä kaverini sinne hälytysjärjestelmän. Valitettavasti tämä ratkaisu osoittautui liian epävakaaksi ja epäluotettavaksi. Täten päätin rakentaa uuden järjestelmän käyttäen vanhaa järjestelmää varten laitettuja sensoreita ja johtoja. Alkuperäinen järjestelmä pohjautui kiinasta tilattuun arduinoon ja SMS lähettimeen. Varsinkin SMS lähetin osoittautui erittäin epävakaaksi ja epäluotettavaksi komponentiksi. Täten uusi hälytysjärjestelmä on tarpeen. 

Olen pitkän pohdinnan jälkeen viimeinkin aloittanut uuden järjestelmän koodaamisen. Toisin kuin aikaisemmin saatoin jossain postauksessa sanoa, niin en valinnutkaan fronttistackiksi Reactia ja TypeScriptiä. Nyt olen aloittanut frontin ja backin koodausta näin:

* Frontti on toteutettu Svelte:llä, joka on kevyt ja yksinkertainen tapa toteuttaa komponenttipohjaisia single-page-appeja. Valitsin sen koska vihaan boilerplatea ja Svelte tuo sen minimiin. Svelte onnistuu komponenttejen kirjoittamisen yksinkertaistamisessa jopa paremmin kuin React hookeilla.
* Backendissa pyritään äärimmäiseen yksinkertaisuuteen ja toimintavarmuuteen. Go on tähän mielestäni erinomainen kieli. Kirjoitan koko sovelluksen käyttäen pelkkää Go:n standard libraryä käyttäen, säästyen kaikenlaiselta package managementilta ja paketeiden päivittämiseltä. 
* Backend pyörii AWS Lightsail purkissa, suurilta osin AWS:n tarjoaman Simple Email Servicen takia, joka mahdollistaa erittäin helpon ja halvan sähköpostien lähettämisen. Saatan haluta käyttää tätä ominaisuutta. Frontin laitan joko AWS S3:een Cloudfront CDN:n taakse, täten sovellus cachetaan lähelle käyttäjää ja on erittäin nopea, tai sitten käytän Netlifyä frontille. Toinen Go:lla kirjoitettu komponentti pyörii mökillä Raspberry Pi:llä. Se ainoastaan pingaa ja lähettää dataa AWS:ään, joten sen kanssa ei tarvitse huolehtia porttien availusta tai muusta. En hostaa frontin vaatimaa dataa suoraan Raspberry Pi:stä mm. sen takia, että haluan saada ilmoituksen siitä, jossei siihen saada enää yhteyttä.

Seuraava osa varmaankin käsittelee backendiä ja sitä kuinka teen esim autentikaation. Stay tuned.