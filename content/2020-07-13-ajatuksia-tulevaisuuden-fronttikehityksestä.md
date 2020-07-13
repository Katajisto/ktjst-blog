---
title: Ajatuksia tulevaisuuden fronttikehityksestä
date: 2020-07-13T18:21:04.444Z
description: Erinomainen Webbidevaus.fi jakso nro. 89 ja siinä mainitut
  blogipostaukset herättivät ajatuksia siitä, miltä fronttidevaus tulee
  näyttämään ja miltä sen tulisi näyttää.
---
Aloin pohtimaan Reactin sekä perinteikkään "kaikki rendataan servulla"-lähestymistavan hyviä ja huonoja puolia. Reactin suuri hyvä puoli on helppo sovelluksen tilan renderöinti reaaliajassa, sekä välittömän vastauksen antaminen käyttäjän tekemiin toimintoihin. Sen huonoja puoli on valtavan JS bundlen lähettäminen, rendaaminen yms. Samalla siinä kuluu melko paljon turhaa devaus- sekä ajoaikaa tiedon hakemiseen API:sta, joka oltaisiin voitu lähettää esirenderöidyn sivun ohella.

Täysin serverilla renderöitävien sivujen paras puoli on se, ettei käyttäjälle lähetetä turhaa tietoa. Se toisaalta myös tekee sivusta kankeamman käyttää, eikä salli samanlaista interaktiivisuutta. Tälläinen sivu on myös todennäköisesti helpompaa ja halvempaa kehittää. Esimerkiksi ihan perus formi on moninkertaisesti nopeampaa kirjoittaa vaan HTML:nä kuin Reactina.

Mielestäni täydellinen ratkaisu löytyisi siltä kuuluisalta keskitieltä, jossa pieniä palasia sovelluksesta toteutettaisiin Reactilla, mutta suurin osa työstä tehtäisiin serverin puolella. Yritän omassa harrasteprojektissani löytää tälläisen keskitien, jossa JS (tai webassemblyllä) hoidettaisiin vain pieni määrä interaktiivisia ominaisuuksia, ja loppu tehtäisiin Go:lla servun puolella.