

let one = 1;
let tow = "tow";
const test = "value";

console.log(
    `hallo Number : ${one} and hier is number: ${tow} `,
    "and her is the",
    test
);

function neu(){
    console.log("-------------insede Block inseide--------------");
    console.log("let tow", tow);
    let three = "Three Block";
    console.log(three);
  
}
neu()
console.log("-------------insede Block outsede--------------");
let three = "Three auser Block";
console.log(three);

let n = "Imad" + " Omer";
console.log(`Name: ${ n }`)

let x = -"10 " + " test"; console.log("string + number "+ x);

// local operator-------------------------->
let set = "Imad";
let  unset = 2;

// Logical OR (logisches oder); findet den ersten gültigen wert.------------->
let or = set|| unset;    //console.log(`or :`, or);
if(set || unset ){
    console.log(`or :`, or);
}

// // locical  and &&  nimmt den lesten gültigen: (&&)---------------------_>

const and = set && unset; console.log(`and`, and)


// logical not -----------------------------> (!);
const not = !true; 
 console.log(`not`, not)

// !! Umwandlung  in einem bool ----->
let bool = !!or;
console.log(`bool`, bool);


// ternary operator assignment --->  () ?  :  ;
const ternary = ( 1 <= 0) ?" eine" : 0;
console.log(`ternary is :` , ternary);

const auto = ("bwm" !== "ww")? true: false;console.log(`result is ${auto}`);
// ------------------------------------------------------

console.log("//padEnd()------------->")
const pad = 'Email ';
console.log('padStart:',pad.padStart(8 , '.'))
console.log('padEnd',pad.padEnd(10,'.'));



const op = 'Kaugummiautomat';//--------------------------------------------------
//.length > 16?  "größer als 16 ist":" Kaugummiautomat hat Ist winger als 16";

if(op.length > 16){
    console.log("größer als 16 ist")
}else{
    console.log(" Kaugummiautomat hat Ist winger als 16")
}

const OneTest = "Ein toller neuer Song von Moderat";
const twoTest = "uer S";
const resultTest = OneTest.includes(twoTest) ? "Hab 'use S' gefunden":"Leider nicht enthalten";
console.log(resultTest);



const mitte = "Holla die Waldfee"; 
console.log(mitte.charAt(7));


let sum = mitte.charAt(7);
let resultSum = op.includes(sum)? sum  +"ist in Kaugummiautomat enthalten": sum + " ist NICHT in Kaugummiautomat enthalten";
console.log(resultSum);
 