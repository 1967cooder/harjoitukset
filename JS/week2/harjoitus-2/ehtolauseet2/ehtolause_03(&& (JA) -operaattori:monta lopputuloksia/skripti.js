/* 
Kirjoita funktio nimeltä getGrade:
Ota pistemäärä parametrina.
Jos pistemäärä on 90 tai enemmän, palauta "Arvosana Kiitettävä".
Jos pistemäärä on välillä 80–89, palauta "Arvosana Hyvä".
Kaikilla muilla pistemäärillä palauta "Avosana Tyydyttävä".
Kutsu funktiota pisteillä kuten 85 ja 75 ja tulosta tulos.
*/
function getGrade(pistemäärä){
    if(pistemäärä >= 90){
        console.log("Arvosana Kiitettävä")
    }else if (pistemäärä >= 80 && pistemäärä <= 89 ){
        console.log("Arvosana Hyvä")
    }else{
            console.log("Avosana Tyydyttävä")
        }
    }


    getGrade(85)
    getGrade(75)
    getGrade(90)