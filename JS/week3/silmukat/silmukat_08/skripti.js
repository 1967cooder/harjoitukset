/* 
Kirjota funktio nimeltä findMinMax:
- Kysy käyttäjältä kuinka monta numeroa he haluavat antaa. 
- Sen jälkeen pyydä käyttäjältä heidän haluamansa määrä numeroita. 
- Kun numerot on syötetty päättele ja tulosta konsoliin:
    - Pienin numero.
    - Suurin numero. 
*/
function findMinMax(){
    let numeroita = parseFloat(prompt("Monta numeroa haluat?"))
    console.log(input)
    let min = 100000
    let max = 0
    
    //Kysytää (numeroita) verran kertoja

    for(let i = 0; i < numeroita; i++ ){
        let newValue = parseFloat(priomt("Anna uusi arvo"))
    if (i == 0){
    min = newValue
    max = newValue

    }

    if(newValue > max){
     max = newValue
    }
    if (newValue < min) {
        min = newValue

    }

}

console.log("Min is:", min)
console.log("Max is:", max)

}
findMinMax()