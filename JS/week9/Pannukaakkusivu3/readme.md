


Täässä projectissa kesiteltiin tilauksia ja tallennettiin ne taulukkoon. Lisäksi uuden "Kaikki tilaukset" -sivun luotin, jossa "kokki" voi hallita jokaisen tilauksen tilaa.

Tässä on projectin kaikki vaiheet:


1. Tilausten tallennus taulukkoon

Jokainen tilaus tallennettiin oliona, joka sisältää seuraavat tiedot:

Yksilöllisen id:n
customerName (asiakkaan nimi)
selectedPancake (valittu lettutyyppi)
toppings (täytteet, taulukko)
extras (lisukkeet, taulukko)
deliveryMethod (toimitustapa)
totalPrice (kokonaishinta)
status (tila, oletuksena: "waiting")

2. "Kaikki tilaukset" -sivu

Uusi HTML-sivu luotiin alusta alkaen. 

Se näyttää kaikki tallennetut tilaukset.

Kokki voi päivittää tilauksen tilaa.

Eri tilat näkyvät erilaisilla tyyleillä:

"waiting" – oletustyyli (esim. keltainen)
"ready" – päivitetty tyyli (esim. sininen)
"delivered" – lopullinen tyyli (esim. vihreä)


Toteutus:

Tilaukset talennettiin taulukkoon
Orders-taulukko luotiin tilausten tallentamiseen.

Kun käyttäjä vahvistaa tilauksen:

On luottu yksilöllinen ID (esim. Date.now()).
On luottu olio, joka sisältää tilauksen tiedot.
On lisätty olio orders-taulukkoon.
Tallennettiin orders localStorageen, jotta tiedot säilyvät sivun päivityksen jälkeen.
Tilaukset näyttää "Kaikki tilaukset" -sivulla
Haettiin tilaukset localStoragesta ja näytättiin ne sivulla.

Jokaisesta tilauksesta näykyy:

Tilausnumero (ID)
Asiakkaan nimi
Letun tyyppi
Täytteet ja lisätuotteet
Toimitustapa
Kokonaishinta
Tila (valikko tai napit tilan vaihtamiseen)
Päivitä tilauksen tila
Lisää valikko (dropdown) tai nappeja, joiden avulla kokki voi päivittää tilauksen tilan.

Kun tila muuttuu:

Päivitettiin oikea olio.
Tallennettiin muutokset localStorageen.
Eri värejä on käytetty tilan mukaan:

"waiting" → 🟡 Keltainen
"ready" → 🔵 Sininen
"delivered" → 🟢 Vihreä

Säilytettiin tiedot localStorage:n avulla
Tallennettiin tilaukset localStorageen.
Kun "Kaikki tilaukset" -sivu avataan,  kaikki tilaukset lataavat ja näyttävät.
Esimerkki tilaus-oliosta
{
  id: 1700000001234,
  customerName: "Alviina",
  selectedPancake: "Chocolate",
  toppings: ["Nuts", "Syrup"],
  extras: ["Whipped Cream"],
  deliveryMethod: "Delivery",
  totalPrice: 15,
  status: "waiting"
}

Lisäominaisuudet:
 
On lisätty haku, jolla voi etsiä tilauksia asiakkaan nimen tai ID:n eli tilausnumeron perusteella.
On lisätty lajittelu (esim. "waiting"-tilaukset ensin).
On sallittu tilausten poistaminen, kun ne on toimitettu.
On lisätty sisäänkirjautuminen eli "Kaikki tilaukset" sivulle pääsee vain oikealla salasanalla. Salasana on "pannukakku123"

Tässä  projectissä sain harjoittella kaikki mitä olemme oppineet kävään opetuksesta Business colegessä. Se oli monipuolinen, haastava ja mielenkiitoinen projekti. Olen käyttännyt aika paljontekoälyä saamaan vastauksia asijoista mitä en ymmärrä vielä ja erityisesti javascriptissä. Html ja CSS käytin enämmäm itsenäisesti. 


Linkki "Kaikki tilaukset" -sivulle
"Pannukakkusuvu3" sivun alalaitaan lisäsin linkin josta pääsee "Kaikki tilaukset" -sivulle:  <p><a href="orders.html">Kaikki tilaukset</a></p>
    
Kaikki tilauksien avaamiseen tarvitaan salasana "pannukakku123".

