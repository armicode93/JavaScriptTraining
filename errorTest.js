
function afficher (){

    var lastName = document.getElementById("lastName").value;
    var firstName = document.getElementById("firstName").value;

    if(lastName.length <=0)
    {

        var error = "Write your lastname";
        alert(error);
        return;

    }
    if (firstName.length <=0)
    {

        var error = "Write your firstname ";
        alert(error);
        return;
    }
    
    alert ("Welcome "+lastName+ " " +firstName);

}