/* 
Kirjoita funktio nimeltä createWordPyramid:
- Ota syötteenä sana (esim. "koodi").
- Käytä silmukkaa rakentaaksesi pyramidityylisen kuvion:
    Esimerkki sanalle "koodi":
    k
    ko
    koo
    kood
    koodi
*/
function createWordPyramid (){
    let word = "koodi"
    for (let i = 1; i <= word.length; i++){
        console.log(word.substring(0, i));
    }
        
}
    
       
        
    

createWordPyramid("koodi") 


