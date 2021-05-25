
function showResult() {
   let shoes = document.getElementById('shoeSize').value;
   let birth = document.getElementById('yearOfBirth').value;
   shoes = parseInt(shoes);
   birth = parseInt(birth);
   
   let result= ((((shoes* 2 + 5) * 50) - birth) + 1766);
   alert(result);
}
document.getElementById("submit").addEventListener("click",showResult);

