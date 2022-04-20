// a. Print the tag name of node with id ”content”.-> eli tulostaa DIV consolesse

let elem = document.getElementById("content");
elem = document.querySelector("#content");
console.log(elem.tagName); //tätä herjasi vaikka niinku opella, kunnes laitoin scriptin tunnukseen defer.
//vauhtoehto olis ollu siirtää js linkki sinne alas.

// b. Print the tag name of first node with class name ”basic” -> eli tulostaa P consolessa
elem = document.querySelector(".basic");
console.log(elem.tagName);

// c. Print text content of all li elements. -> consoleen kuukaudet
let liElems = document.querySelectorAll("li");
// tai vaihtoehto liElems = document.getElementsByTagName("li");
for (elem of liElems) {
    console.log(elem.textContent);
}

// d. Print all node names of body descendants -> eli kaikki bodyn jälkeläiset, tagit, tekstit jne consoleen.
let bodyDesc = document.querySelectorAll("body *"); //tässä tähti merkkaa jälkeläisiä
for (elem of bodyDesc) {   
console.log(elem.nodeName);//tää oli vähän epäselvä, yritin käyttää letissä eka tuota 
//nodenamea nimenä mutta ei toiminut. -> Ilmeisesti koska nodename täytyy olla tuossa 
// toisessa kohassa propertyna joten siksi?
}

// e. Print text content of all p elements that are descendants of article element.
// Eli tulostaa consoleen kaikkien articlen p-jälkeläisten tekstisisällöt.
let articlePDesc = document.querySelectorAll("article p"); //eli articlen p-jälkeläiset
for (elem of articlePDesc) {   
console.log(elem.textContent);
}

// f. Fill all list items with default text “John Doe” -> eli täyttää palvelimella 
//kuukausien tilalle Johnin nimen tai mitä muuta halutaan.
//liElems = document.getElementsByTagName("li");
// tai let liElems = document.querySelectorAll("li");
//tää hakuhan on jo oikeestaan tuolla ylempänä tehty c-kohdassa, eli haettiin li- elementit
for (elem of liElems) {
    elem.textContent = "John Doe";
}