
function showResult() {
   var shoes=document.getElementById('shoeSize').value;
   var birth=document.getElementById('yearOfBirth').value;
   var shoes=parseInt(shoes);
   var birth=parseInt(birth);
   
   var result= ((((shoes* 2 + 5) * 50) - birth) + 1766);
   alert(result);
}
document.getElementById("submit").addEventListener("click",showResult);

