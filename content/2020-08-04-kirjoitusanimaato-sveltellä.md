---
title: "Kirjoitusanimaato Sveltellä. "
date: 2020-08-04T18:08:27.284Z
description: Tein pienen Svelte komponentin, joka näyttää tekstiä
  kirjoitusanimaatiolla (Typewriter effect).
---
![The typing animation.](/img/svelte-typing.gif "The typing animation.")

Koodi on melko yksinkertainen, mutta mielestäni kohtuullisen elegantti. Se toimii kutsumalla rekursiivista funktiota, joka kutsuu aina itseään setTimeoutilla. Näin on helppo määrittää kuinka pitkä viive seuraavan merkin syöttämiseen/poistamiseen on. Tällä saadaan aikaan mukavan "aidon" oloinen kirjoitusanimaatio verrattuna siihen, jos kaikissa väleissä olisi yhtä pitkä viive.

```html
<script>
	let text = ""
	
	let texts = [
		"Go is awesome!",
		"Svelte is awesome!",
		"I love programming!",
	]
	
	let direction = true
	let textIndex = 0;
	let charIndex = 0;
	
	
	const type = () => {
	
		let delay = 60
		
		if(direction) {
			text += texts[textIndex][charIndex]
			charIndex++
			if(charIndex >= texts[textIndex].length) {
				charIndex = 0
				textIndex++
				delay = 500
				if(textIndex >= texts.length) {
					textIndex = 0
				}
				direction = false
			}
		} else {
			if(text.length > 0) {
				text = text.slice(0,-1)
				delay = 30
			} else {
				direction = true
				delay = 200
			}
		}
		setTimeout(type, delay)
	}
	
	type()
	
	let blink = true
	
	setInterval(() => blink = !blink, 300)
	
</script>

<style>
	.blink {
		color: white;
	}
	.no-blink {
		color: black
	}
</style>

<h2>
	{text}<span class={blink ? "blink" : "no-blink"}>|</span>
</h2>
```