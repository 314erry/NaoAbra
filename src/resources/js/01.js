function exitTab() {
    document.getElementById("message").style.display = "none"; 
    document.getElementById("textOption").style.display = "flex";
    document.getElementById("yes").style.display = "flex";
    document.getElementById("no").style.display = "flex";
}

function Yes() {
    document.getElementById("textOption").style.display = "none";
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";
    document.getElementById("mail").style.display = "flex";
    document.getElementById("key").style.display = "flex"; 
}


function No() {
    close();
}

function ClickKey() {
    alert("A chave se encontra em uma Carta");
}
   