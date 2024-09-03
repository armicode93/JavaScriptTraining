function afficher2(){
    var lastName = document.getElementById("lastName").value;
    var firstName = document.getElementById("firstName").value;
    var error = document.getElementById("error");

    // Reset error message
    error.innerHTML = "";
   
    if(lastName.length < 1) {
        error.innerHTML = "Write your lastname";
        return;
    }

    if (firstName.length < 1) {
        error.innerHTML = "Write your firstname";
        return;
    }
    error.innerHTML = "";
    
    alert("Welcome " + lastName + " " + firstName);
}
