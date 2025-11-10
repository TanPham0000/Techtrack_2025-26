Wiki

Week 1
API zoeken:
opties: NS OV fiets, Schiphol, Wereld nieuws



Wel een aantal problemen omdat de Api's duur zijn of niet locatie data aangeven
Wereld nieuws api: 
https://newsapi.org/docs/get-started
https://countrylayer.com/?utm_source=APILayerProductPage&utm_medium=Referral
https://developer.ap.org/ap-metadata-services/
https://github.com/TheAssociatedPress/APISamples/blob/master/APMS/annotations.md

Lokaal zoeken
Nederlands nieuws:
https://newsapi.org/s/netherlands-news-api
https://docs.gnews.io/

Concept
Techtrack concept – Flight Tracker API

Projecttitel: "Vliegtuigen in Beweging – Een visuele blik op de lucht"
	
Beschrijving:
Voor mijn minor Information Design wil ik een interactieve webapp maken die real-time data van vliegtuigen visualiseert. Het idee is om met behulp van de AviationStack API te laten zien wat oor vliegtuigen rond vliegen en het aantal toestellen en ook waar vliegtuigen zich op dat moment bevinden, hoeveel er onderweg zijn, en welke routes het meest worden gevlogen. De focus ligt dus niet alleen op cijfers, maar vooral op het inzichtelijk maken van wereldwijde luchtbewegingen.

Tools:
- HTML, CSS, JavaScript
- Svelte voor component-based structuur
- D3.js voor datavisualisatie (zoals kaarten, vluchtroutes, animaties)
- AviationStack API (real-time flight data)
- potentieel nog een weather API voor extra data

Scaffold Svelte:
MY-APP/
├── .svelte-kit/
│   └── generated/
│       ├── ambient.d.ts
│       └── non-ambient.d.ts
├── node_modules/
├── src/
│   ├── components/
│   │   ├── Header.svelte
│   │   └── Lineplot.svelte
│   ├── lib/
│   │   ├── assets/
│   │   │   └── favicon.svg
│   │   └── index.js
│   ├── routes/
│   │   ├── +layout.svelte
│   │   ├── +page.svelte
│   │   └── app.html
│   └── app.html (appears twice?)
├── static/
│   └── robots.txt
├── .gitignore
├── .npmrc
├── package-lock.json
├── package.json
├── README.md
├── svelte.config.js
├── tsconfig.json
└── vite.config.js

Doel:
Een dynamische webapplicatie die visueel laat zien hoe de lucht zich constant vult en leegloopt — een soort ‘ademhaling van de wereld’ via vliegtuigen. Daarnaast wil ik onderzoeken wat we kunnen leren van deze data: waar zijn de drukste luchtcorridors, welke luchthavens zijn het actiefst, en hoe ziet dat eruit in real time?

Onderzoeksvragen:
- Welke regio’s hebben op een bepaald moment de meeste vluchten in de lucht?
- Kun je patronen herkennen in drukte per tijdstip of dag?
- Hoeveel vliegtuigen zijn er gemiddeld tegelijk onderweg?
- Welke luchthavens hebben de meeste vertrekkende en aankomende vluchten?
- Zijn er verschillen tussen continenten in vluchtactiviteit?
- Hoe snel verandert de luchtactiviteit in een bepaald gebied?
- Welke soorten vliegtuigen komen het meeste voor
- Welke vliegvelden land de Airbus A300-600ST Beluga het meest

Stappenplan:
1. **Oriëntatie en API-verkenning**
   - Verdiepen in de documentatie van de AviationStack API
   - Testen van endpoints met fetch() in JavaScript
   - Kijken welke data beschikbaar is (bijv. locatie, altitude, snelheid, richting)
   - Eenvoudige console output genereren met actuele vluchtdata

2. **Datavisualisatie opzetten**
   - Basiskaart maken met D3 (wereldkaart als SVG)
   - Vliegtuig-iconen plotten op basis van latitude/longitude
   - Animaties toevoegen voor beweging (richting, snelheid)

3. **Interactie toevoegen**
   - Hover-info over een vliegtuig (luchtvaartmaatschappij, vluchtcode, bestemming)
   - Filters maken: bijv. filter op continent of maatschappij
   - Live updates laten refreshen om de illusie van ‘real-time’ te versterken

4. **Ontwerp en stijl**
   - Rustig, informatief ontwerp in Svelte
   - Gebruik van zachte kleuren en subtiele animaties
   - Eventueel dark mode met dynamische kleur op basis van tijdstip

5. **Reflectie en analyse**
   - Kijken wat de visualisatie laat zien: drukte, trends, patronen
   - Conclusies trekken over wereldwijde luchtbeweging
   - Documenteren wat werkte en wat verbeterd kan worden

Extra ideeën:
- Een "heatmap" van luchtdrukte over tijd
- Realtime vluchtroutes die over de kaart bewegen
- Vergelijking tussen continenten (Europa vs. Azië)
- Animatie van “één dag in de lucht”

Samenvatting:
Dit project combineert design, data en technologie op een visuele manier. Met D3 en Svelte wil ik data tot leven brengen — niet in cijfers, maar in beweging. Vliegtuigen vormen hier een symbool voor onze verbonden wereld.
