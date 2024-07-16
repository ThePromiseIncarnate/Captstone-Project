function passwordInput() {
    let input
    input = prompt("Enter the password.");
    if (input == "p1n34pp13") {
        introNav.class = "nav-link";
        eidolonNav.class = "nav-link";
        undertowNav.class = "nav-link";
        passwordButton.class = "btn btn-outline-success disabled";
        hiddenTitle.style.visibility = "visible";
        hiddenText.style.visibility = "visible";
    } else {
        introNav.class = "nav-link disabled";
        eidolonNav.class = "nav-link disabled";
        undertowNav.class = "nav-link disabled";
        passwordButton.class = "btn btn-outline-success";
        hiddenTitle.style.visibility = "hidden";
        hiddenText.style.visibility = "hidden";
    }
}

passwordButton.onclick = passwordInput; 