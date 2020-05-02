---
title: "Emacs: editorien kuningas"
date: 2020-05-02T21:03:30.552Z
description: Emacs on se ainoa oikea editori, don't @ me.
---
![emacs-logo](/img/emacs.png)

Veikkaan, että jokainen ohjelmoija on käyttänyt uransa aikana kohtuullisen montaa editoria, kunnes on löytänyt sen joka tuntuu omalta (jollei ole aloittanut viimeaikoina ja käyttänyt VS codea koko sen ajan kun on koodannut). Ihan ensimmäiseksihän aloitin vanhalla kunnon notepadilla, jolla sai kätevästi kirjoitettua batch skriptejä. Kun tarvi oppia C++:ssaa, luulin että ainoa vaihtoehto oli 30Gb:n Visual Studio. Voi kuinka väärässä ihminen voikaan olla. 

Kisakoodatessa, sain hyvin nopeasti kuulla, ettei Visual Studiolla (tai ylipäätään millään IDE:llä tee mitään), ja päädyin kokeilemaan Vim:iä. Ohjelmaa, jonka käyttökokemus on aivan järkyttävää kahden eri moodin välillä sahaamista ja kokemukseni Vim:istä jäi "How to get out of a Vim instance" google-hakuun. Emacsissä minuun vetosivat aluksi mielestäni helpot näppäinyhdistelmät sekä ikkunoiden helppo jakaminen osiin ja niiden välillä liikkuminen.

Löysin kuin löysinkin lopulta elämääni kaksi käyttökelpoista editoria: Emacs sekä VS code. Jälkimmäinen on käyttökelpoisin asia Windows Subsystem for Linuxin ohella, jonka Microsoft on koskaan onnistunut tekemään, mikä ei sinänsä vaadi paljoa ottaen huomioon Microsoftin ohjelmistojen yleisen käyttäjän elämän hankaloittamisen. VS code on tekijästään huolimatta hyvä tekstieditori erittäin hyvillä ominaisuuksilla moderniin webbikehitykseen.

Töideni alkaessa pian, tulee minun päättää, minkä tekstieditorin otan päivittäiseen käyttöön ja konffaan täydelliseksi itselleni. Kuten otsikosta voi päätellä, valitsin VS coden paremmasta lisäosienhallinnasta sekä muutenkin helpommasta käyttökokemuksesta huolimatta Emacsin. Miksi? No, voiko VS coden käytössä nousta lähes jumalalliselle tasolle, jolloin pystyt tekemään muutoksia koodiisi samalla nopeudella kuin ajattelet? Ei, mutta ei välttämättä Emacsilläkään. Emacsin käyttöön vaadittava taito, ja sen oppimisesta saatava nopeus (sekä se ettei Emacs ole Microsoftin tekemä) tekevät siitä mielestäni editorien kuninkaan.

Tämä postaushan oli oikeasti vain tekosyy listata tänne Emacs conffini, jotta saan kopioitua sen täältä aina helposti eri koneille.

Asentamani paketit (suurin osa MELPA:sta), listaan näitä sitä mukaan kun asentelen niitä:

* Naysayer-theme (ohjelmoijaidolini Jonathan Blow:n Emacs teema)

/.emacs.d/.init.el:

```
(require 'package)
(let* ((no-ssl (and (memq system-type '(windows-nt ms-dos))
                    (not (gnutls-available-p))))
       (proto (if no-ssl "http" "https")))
  (when no-ssl (warn "\
Your version of Emacs does not support SSL connections,
which is unsafe because it allows man-in-the-middle attacks.
There are two things you can do about this warning:
1. Install an Emacs version that does support SSL and be safe.
2. Remove this warning from your init file so you won't see it again."))
  (add-to-list 'package-archives (cons "melpa" (concat proto "://melpa.org/packages/")) t)
  ;; Comment/uncomment this line to enable MELPA Stable if desired.  See `package-archive-priorities`
  ;; and `package-pinned-packages`. Most users will not need or want to do this.
  ;;(add-to-list 'package-archives (cons "melpa-stable" (concat proto "://stable.melpa.org/packages/")) t)
  )
(package-initialize)
(menu-bar-mode -1)
(toggle-scroll-bar -1)
(tool-bar-mode -1) 
(load-theme 'naysayer t)
```