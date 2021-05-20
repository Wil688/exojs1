function control() {
    if (age.value > 18) {
        alert("Vous êtes majeur");
    } else {
        alert("Vous êtes mineur");
    }
}

document.getElementById("submit").addEventListener("click",control);