/* 
Kirjoita funktio nimeltä buildGroceryList:
- Pyydä käyttäjää syöttämään ruokakauppaostoksia yksi kerrallaan.
- Lopeta, kun käyttäjä kirjoittaa "valmis".
Tulosta koko ostoslista konsoliin.
*/
function buildGroceryList(){
    let list = 1
    
    while (list <= 10){
        console.log(list)
        list +=1
    }
    console.log("Valmis!")
}

buildGroceryList()