//numerot_5
/** Tehtävä: Ostoskori
 * Kuvitellaan, että olet kehittämässä yksinkertaista verkkokauppasovellusta. Sinun tehtäväsi on luoda ohjelma, joka laskee ostoskorissa olevien tuotteiden yhteishinnan ja tulostaa sen.
 * - Määrittele muuttujat kullekin ostoskorissa olevalle tuotteelle ja niiden hinnoille.
 * - Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.
 * - Tulosta yhteishinta konsoliin.
 */

let tuote1 = 15.99; // Tuotteen 1 hinta
let tuote2 = 23.50; // Tuotteen 2 hinta
let tuote3 = 9.99;  // Tuotteen 3 hinta
let tuote4 = 12.30; // Tuotteen 4 hinta

let yhteishinta = tuote1 + tuote2 + tuote3 + tuote4

console.log('ostoskori yhteishinta on: ' + yhteishinta.toFixed(2) + '€');
