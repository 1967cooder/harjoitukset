// Harjoitus 5: Etsi yleiset eläinlajit elainvarasto1 ja elainvarasto2 taulukoista
let elainvarasto1 = ["Kettu", "Peura", "Pöllö", "Karhu"];
let elainvarasto2 = ["Karhu", "Susi", "Kotka", "Kettu"];

/*
Tunnista ja tulosta eläinlajit, jotka löytyvät molemmista taulukoista.
Odotettu tulos:
"Yhteinen laji: Kettu"
"Yhteinen laji: Karhu"
*/
// Kirjoita koodisi tähän

elainvarasto1.forEach((elain) => {// forEach menee kaiki eleimien  läpi elainvarasto1:ssa
    if (elainvarasto2.includes(elain)){//includes tarkistaa onko elain elainvarasto2:ssa. Jos on --> tulosta consolista
        console.log("Yhteinen  laji:" + elain)
    }
})