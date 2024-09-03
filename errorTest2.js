function afficher2(){
    var lastName = document.getElementById("lastName").value;
    var firstName = document.getElementById("firstName").value;
    var age = document.getElementById("age").value;
    var error = document.getElementById("error");

    var ageNumb = Number(age); 

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
    //age.trim() === "" è una condizione che verifica se il campo age è vuoto o contiene solo spazi bianchi.
    if(age < 1 || isNaN(ageNumb))
    {
        error.innerHTML = "Put a number";
        
        return;
    }
    error.innerHTML = "";
    
    alert("Welcome " + lastName + " " + firstName+" "+age);
}
