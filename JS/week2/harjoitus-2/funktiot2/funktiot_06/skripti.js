/* Luo funktio nimeltä replaceWord, joka:
Ottaa kolme parametria, sentence, oldWord ja newWord.
Palauttaa lauseen, jossa oldWord on korvattu newWordilla.
Kutsu funktiota lauseella "I like apples.", oldWord: "apples" ja newWord: "bananas".
Tulosta tulos käyttäen console.log().
*/
function replaceWord (sentence, oldWord, newWord){
    return (sentence.replace (oldWord, newWord));
}
console.log(replaceWord("I like apples.", "apples", "bananas")); 

const replaceWordArrow = (sentence, oldWord, newWord) =>
    sentence.replace(oldWord, newWord);

console.log(replaceWordArrow("I like apples.", "apples", "bananas"));