/* tulosta luvut 1-10*/
let laskuri = 1
while(laskuri >= 10) {
    console.log(laskuri)
    laskuri++ //sama kuin laskuri = laskuri + 1
}
for (let laskuri = 1 ; laskuri <=10; laskuri++){
    console.log(laskuri)
}


while(true){
    //pyydä kyttäjältä salasana("Anna salasana.")
    let salasana = prompt ("Anna salasana.")
    if(salasana == "sala"){
        alert("Oikein!")
        //break "rikkoo" eli lopettaa silmukan
        break
    }
}