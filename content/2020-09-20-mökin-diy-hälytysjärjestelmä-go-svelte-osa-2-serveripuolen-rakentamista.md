---
title: Mökin DIY hälytysjärjestelmä (Go, Svelte) | Osa 2 - Serveripuolen rakentamista
date: 2020-09-20T15:40:08.707Z
description: Rakennetaan AWS:ään menevä Go API
---


![](/img/1_4lghhzmsjwbrahj1vguxkq.png)

## Autentikaatiojärjestelmän rakennus

Autentikaatio toteutetaan api:ssa niin, että Basic authilla (eli salasanalla ja käyttäjänimellä) saa hankittua itselleen tokenin, joka laitetaan databaseen. Kirjautumisen jälkeen tätä tokenia voi käyttää API kutsujen tekemiseen autentikoituneena. Tämä on varsin yleinen kuvio sovelluksia kehittäessä, uusia haasteita tässä tosin tuo se, että teen tämän Go:lla, ja haluan tehdä sen hyvin pitkälti alusta asti itse.

Käytän autentikaatiossa vain yhtä ei standard libraryssä olevaa kirjastoa, joka hoitaa hashin tekemisen salasanasta, sekä kyseisen hashin vertaamisen käyttäjän syöttämään salasanaan.

Sen lisäksi meillä on middleware komponentti, joka voidaan syöttää tehtäväksi ennen jokaista handleria, johon tarvitaan autentikaatio. Se komponentti näyttää tältä:

```go
func tokenMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
      
        // Tarkista, että autentikaatiotyyppi on oikea ja lue tokeni.
		auth := strings.SplitN(r.Header.Get("Authorization"), " ", 2)

		if len(auth) != 2 || auth[0] != "Bearer" {
			http.Error(w, "Authorization failed", http.StatusUnauthorized)
			return
		}

		user, err := GetUserFromToken(auth[1])

		if err != nil {
			http.Error(w, "Authorization failed", http.StatusUnauthorized)
			return
		}
        // Kirjoita käyttäjä requestin contekstiin (eli se on 
        // tulevaisuudessakin käytettävässä.
      
		ctx := context.WithValue(r.Context(), ContextUserKey, user)
        
        // Kutsu "oikea" handleri kutsulle, nyt kun autentikaatio on kunnossa
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}
```

Tämä tarkistaa tiedot ja asettaa käyttäjän pyynnön kutsun kontekstiin, jotta siihen päästään jatkossa käsiksi.

Middlewarea käytetään näin:

```
http.Handle("/user", tokenMiddleware(http.HandlerFunc(getUserInfo)))
```

Ja käyttäjään päästään käsiksi tällä funktiolla:

```go
func userFromContext(r *http.Request) (*User, error) {
	user := r.Context().Value(ContextUserKey)
	l(user)
	userPtr, ok := user.(*User)

	// Check if the above typecast worked.

	if !ok {
		return nil, errors.New("Failed to typecast user object from context.")
	}

	return userPtr, nil
}
```

Tässä on tähänastinen edistys, uskoisin että nyt kun autentikaatio on tehty, loppuosa tästä AWS:sään menevästä Go ohjelmasta tulee suhteellisen helpolla. Tämän jälkeen tulee vielä tehdä mökille Raspberry Pi:lle menevä osuus sekä Svelte PWA hälytysjärjestelmän kontrolloimiseen.