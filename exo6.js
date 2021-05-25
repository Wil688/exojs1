function restOfTwoNumber() {
    alert(parseInt(firstNumber.value) % parseInt(secondNumber.value)) ;
    
}

document.getElementById("submit").addEventListener("click",restOfTwoNumber);

/* 
 function resultat(x,y) {
    if (((x - ((x/y) * y)) == 0)) {
        console.log("yes")
    }
}
console.log(parseInt(resultat(30,5)));   */

/* function submitInfo() {

    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    const numberRegex = /^[0-9]+(\.[0-9]+)?$/; //  --> / regex /
   
    if (numberRegex.test(firstNumber) && numberRegex.test(secondNumber) ) {
        //  il fait la division 
        document.getElementById("message").innerText=`Premier nombre = ${firstNumber} Deuxième nombre = ${secondNumber} Afficher le reste de la division de deux nombres. ${firstNumber} / ${secondNumber} = ${firstNumber%secondNumber} `;
       
    }
    else {
        alert ("C'est pas bon")
    }



    
} */