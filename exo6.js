function restOfTwoNumber(a,b) {
    alert(parseInt(firstNumber.value) % parseInt(secondNumber.value)) ;
    
}

document.getElementById("submit").addEventListener("click",restOfTwoNumber);

function resultat(x,y) {
    if (((x - ((x/y) * y)) == 0)) {
        console.log("yes")
    }
}
console.log(parseInt(resultat(30,5))); 
