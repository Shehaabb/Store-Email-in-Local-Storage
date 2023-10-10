let emailValue = localStorage.getItem('email');
document.getElementById("email-output").innerHTML="Hi, "+emailValue+"!";

function removeEmail(){
    localStorage.removeItem('email');
    
    if(localStorage.getItem('email') === null) 
    {
        window.location.href = "./index.html";
    }
}