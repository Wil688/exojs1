
function showResult(a,b) {
   return ((((parseInt(shoeSize.value * 2) + 5) * 50) - parseInt(yearOfBirth.value)) + 1766);; 
}
document.getElementById("submit").addEventListener("click",showResult);