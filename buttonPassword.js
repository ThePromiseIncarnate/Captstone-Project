function passwordInput(){
    let input = "";
    input.password = prompt("Enter the password."); 
    if (input.password = "p1n34pp13") {
        introNav.class = "nav-link";
        eidolonNav.class = "nav-link";
        undertowNav.class = "nav-link";
        passwordButton.class = "btn btn-outline-success disabled"; 
        hiddenTitle.style.visibility = "visible";
        hiddenText.style.visibility = "visible";
   } else {

   }
}

passwordButton.onclick = passwordInput; 