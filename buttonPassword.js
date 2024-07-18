let input = ""

function passwordStorage() {
    document.getElementById(input) == sessionStorage.input;
    if (sessionStorage.input == "p1n34pp13") {
        introNav.classList.remove("disabled");
        eidolonNav.classList.remove("disabled");
        undertowNav.classList.remove("disabled");
        passwordButton.classList.add("disabled");
        hiddenTitle.style.visibility = "visible";
        hiddenText.style.visibility = "visible";
    } else {
        hiddenTitle.style.visibility = "hidden";
        hiddenText.style.visibility = "hidden";
    }
}

function passwordInput() {
    sessionStorage.input = prompt("Enter the password.");
    passwordStorage();
}

document.body.onload = passwordStorage;
passwordButton.onclick = passwordInput; 