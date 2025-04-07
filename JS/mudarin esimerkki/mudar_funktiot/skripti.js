!

console.log("Tämä on Javascript-testi.");


const muuttuja = "Hello world";
// ei pysty muttamaan arvoa myöhemmin

function funktio() {
let x, y, z;
(x = 5), (y=2)
z = x + y

console.log("This is z:", z);

}

//Kutsu funktio näin:
funktio();

//Step 1:
function summa(x, y){
    return x + y;
}
let arvo = (5, 6);
console.log(arvo)

//step 2 
let num1 = 5
let num2 = 6

//Tapa 1
console.log("Arvojen", num1, " + ", num2, " summa on ", arvo);
// Tapa 2
console.log('Arvojen ${num1} + ${num2} = ${num1 + num2}')


function greeting(name = "Gest", name2){
    return 'Hello ${name} and $(name2)';
}

const greeting2 = (name = "Gest") =>{
    return 'Hello' + (name) ;
};

console.log(greeting("Leevi", "Toinen"));
console.log(greeting2("Leevi"));


//1 Maili on 1.609344 Kilometriä
function milesToKilometers(miles ){
let km = miles * 1.609344;
console.log(km);
return km.toFixed(1)
}
console.log("Pyöristetty tulos", milesToKilometers(8))

function multiply(a,b){
    let a = 2;// ei toimi
    let b = 3// ei toimi
console.log
}
const multiply = (a,b) =>
    fetch(.catch());

    return a * b// ei toimi
console.log(multiply(5,7));


const multiply = (a = 2,b = 2) =>{
return a * b
}
console.log(multiply(6, 7));



function greeting(name = "Gest"){
    return `Hello ${name}!`
}

console.log(greeting());

const trimTex = str => str.trim()
// Yhdistäteen metodit
const makeItSmaller = str => str.toLowerCase()
//("Javascript   ").trim( )--> " Javaskript"



const cleanText = (text) => {
    return makeItSmaller(trim(text));
}
 const input = "    turHan Iso texti   ";
 console.log(input);
 console.log(makeItSmaller(trimTex()))


