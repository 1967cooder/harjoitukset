/* Tee funktio askToContinue, joka 
1. Kysyy käyttäjältä yhtä numeroa. 
2. Tämän jälkeen ohjelma kysyy: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
3. Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. 
4. Jos vastaus on 'e', ohjelma lopettaa. 
5. Lopetettuaan ohjelma laskee ja näyttää konsolissa kaikkien syötettyjen numeroiden keskiarvon.*/

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
function askToContinue (){
    const numbers = []  
     while (true){
        const input = prompt ("Anna numero:")
        const num = Number (input)

 //ei ole luku tai on negatiivinen
if (!isNaN(num)){
   numbers.push(num)
} else {
alert ("Syöte ei ollut kelvollinen numero. Yritä uudelleen.")
//pala silmukan alkuun
continue
}
//ohjelma pitää lopettaa jos vastaus on "k"
const continueAnswer = prompt ("Haluatko jatkaa numeroiden antamista? (k/e)")
if (continueAnswer.toLowerCase() !== "k") {
    break
}
     }
     if (numbers.length > 0) {
        const sum = numbers.reduce ((a, b) => a + b, 0)
        const average = sum / numbers.length
        console.log ("Syötettyjen numeroiden keskiarvo:", average)
     } else {
        console.log ("Et syöttänyt yhtään numeroa.")
     }
    }