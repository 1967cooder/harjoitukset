// Tee funktio calculateAverageUntilZero, joka pyytää käyttäjää syöttämään numeroita,
// kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää konsolissa kaikkien syötettyjen
// numeroiden keskiarvo.

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

function calculateAverageUntilZero (){
    let number = 0
    let count = 0

while (true){
    let input = prompt ("Syötä numero (0 lopettaa):")
    let number = parseFloat(input)

    if (isNaN(number)) {
        alert("Syötä kelvollinen numero.")
        continue
    }
        if (number === 0) {
            break
          }   
    if (count > 0) {
    let average = sum / count
    
    console.log(`Syötettyjen numeroiden keskiarvo on ${average}`)
      } else {
        console.log("Et syöttänyt yhtään numeroa.")
      }
    }
}
calculateAverageUntilZero ()