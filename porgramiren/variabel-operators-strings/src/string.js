console.log("-------------String-------------");

// Single quotes--------------------------------------------->
let single = '<a href = "#" >Submit `s</a>';
console.log(`single`, single);
const test = 'hallo welt in  "ist" Berlin';
console.log(test);

//
console.log(" Concatenation--------------------------------------------->")
const n = "Alisawi";
const verbinde = " hallo" + " mr. " + n;
console.log(verbinde);

let temStr = `
<h1>hallo welt</h1>
<p>lorrem ih wdds edvdv dsc</p>
\${n}
welkommen mr. ${n} in \n Berlin
<buttom>submit</buttom>
`;
console.log(temStr);


// ``Pictic,
// '' singlkurs,
// "" ,
// \n zeilebruch,
// \r löscht das vorherge wort,

let m = `hallo welt \n in  \r Spandau`; 
console.log(m);


console.log("------------- String Properties - Eigenschaften --------------->")
const length = "Alisawi";
console.log(length.length); // 7
console.log('FistName',length.toString()); // Alisawi


console.log("//  String Methode -------[0]---------->")
console.log("// CahrAt sucht die bestimmt Position -------[0]---------->")
const name = "Almansuri".charAt(0); // A .
const toName = ""
console.log(name)

const FBStaben = "Omer";
if(FBStaben.charAt(0) === "0"){
    console.log("hallo Omer");
}else{
    console.log("hallo Imad");
}

// subString _ Extrahirere einen Teil einer Zeichenkette

const subStrings = "hallo mr Imad, ich sind breit für Sie".substring(0,9);
console.log('substr',subStrings.toLocaleLowerCase())

const subStr = "hallo mr Imad, ich sind breit für Sie".substring(20);
console.log('substr',subStr.toUpperCase());



// trim schniedet alle leezeichen am anfang und  Ende weg (trimStart / trimEnd)
const trim = "       Test vom  Heute     ";
console.log(trim.trim());
console.log(trim.trimStart());
console.log(trim.trimEnd());


// includes Findet einen  Zeichenkette inner Zeichenkette---->

const includes = "Satz";
console.log('result :', includes.toLowerCase().includes("satz"));
console.log( 'result :',includes.toUpperCase().includes("Satz"));


//padEnd()
console.log("//padEnd()------------->")
const pad = 'Email ';
console.log('padStart:',pad.padStart(8 , '.'))
console.log('padEnd',pad.padEnd(10,'.'));



const op = 'Kaugummiautomat';
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

const test2 = "Holla die Waldfee" === 8? "BONUS":"NICHT" ;
console.log(`${test2}`)

const mitte = "Holla die Waldfee"; 
console.log(mitte.charAt(8));


let sum = mitte.charAt(8);
let resultSum = op.includes(sum)? sum  +"ist in Kaugummiautomat enthalten": sum + " ist NICHT in Kaugummiautomat enthalten";
console.log(resultSum);



