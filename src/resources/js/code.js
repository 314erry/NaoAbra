document.getElementById("password").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        unlockLogin();
    }
});

function lockedDoor() {
    document.getElementById("lockedDoor").style.display = "none";
    document.getElementById("login").style.display = "flex";
}

function unlockedDoor() {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("foldersContainer").style.display = "flex";
}

function unlockLogin() {
    var password = document.getElementById("password").value;

    if (password == "coração" || password == "Coração") {
        document.getElementById("login").style.display = "none";
        document.getElementById("unlockedDoor").style.display = "flex";
        document.getElementById("hint").style.display = "none";
        document.getElementById("hint2").style.display = "none";
    } else if (password == "eusouachave") { 
        document.getElementById("hint2").style.display = "flex"; 
    } else { 
        document.getElementById("hint").style.display = "flex"; 
    }

    document.getElementById("password").value = "";
}

function unlock2(file2) {

    var passwordPrompt = prompt("Onde se esconde a chave.");

    if (passwordPrompt == "carta" || passwordPrompt == "Carta") {

        document.getElementById("file2").style = document.querySelector(file2);
        document.getElementById("file2").innerHTML =
            `<a target="_blank" href=\"02.html\" style="cursor: pointer" onclick="files2()">
        <img src=\"resources/img/pasta.png\" style="width: 150px; height: 110px; margin-bottom: 5px;">
        <figcaption>Carta fechada</figcaption>
        <figcaption></figcaption>
        </a>`;
    }
}

function unlock3(file3) {

    var passwordPrompt = prompt("");

    if (passwordPrompt == "") {

        document.getElementById("file3").style = document.querySelector(file3);
        document.getElementById("file3").innerHTML =
            `<a target="_blank" href=\"03.html\" style="cursor: pointer" onclick="files3()">
        <img src=\"resources/img/pasta.png\" style="width: 150px; height: 110px;">
        <figcaption>08/06/2019</figcaption>
        <figcaption>15:30 PM</figcaption>
        </a>`;
    }
}

function unlock4(file4) {

    var passwordPrompt = prompt("");

    if (passwordPrompt == "") {

        document.getElementById("file4").style = document.querySelector(file4);
        document.getElementById("file4").innerHTML =
            `<a target="_blank" href=\"04.html\" style="cursor: pointer" onclick="files4()">
        <img src=\"resources/img/pasta.png\" style="width: 150px; height: 110px;">
        <figcaption>08/06/2019</figcaption>
        <figcaption>17:49 PM</figcaption>
        </a>`;
    }
}
