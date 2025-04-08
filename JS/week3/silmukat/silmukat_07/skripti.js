/* 
Kirjoita funktio nimeltä sumAndAverage:
- Pyydä käyttäjältä 10 numeroa
- Laske ja lokita konsoliin: 
    - Kaikkien numeroiden summa.
    - Annettujen numeroiden keskiarvo.
    - Suurin ja pienin numero
*/

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
function sumAndAverage () {
    const numbers = []
    let sum = 0
 
     for (let i = 0; i < 10; i++) {
 
         const input = prompt(`Anna numero ${i + 1}/10:`)
         const num = parseFloat(input)
 
     if (isNaN(number)) {
         alert("Et antanut kelvollista numeroa. Yritä uudelleen")
         i--
         continue
     }
 
     numbers.push(number)
     sum += num
 
     }
 }
 
 
 const average = sum / numbers.length
 const max = Math.max(...numbers)
 const min = Math.min(...numbers)
 
 console.log(`Summa: ${sum}`)
 console.log(`Keskiarvo: ${average}`)
 console.log(`Suurin numero: ${max}`)
 console.log(`Penin numero: ${min}`)
    
 
