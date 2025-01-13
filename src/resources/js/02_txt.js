let currentIndex = 0;
let typingDuration = 0;

function grow() {
    document.getElementById("grow").style.display = "block";
    document.getElementById("message").style.opacity = '1';

    window.setTimeout(function remove() {
        document.getElementById("message").style.transitionDelay = "5s";
        document.getElementById("message").style.display = 'none';
        document.getElementById("heart").style.display = 'none';
        document.getElementById("heartInvButton").style.display = 'none';
        document.getElementById("dialogue").style.display = 'block';
        document.getElementById("dialogue").style.animationDelay = '2s';
    }, 600);

    window.setTimeout(function buttonAdd() {
        var buttonContainer = document.querySelector(".buttonContainer");
        buttonContainer.style.display = 'flex';
        buttonContainer.style.opacity = '1';
    }, 5000);

    startTypingAnimation();
}

function resetDialogue() {
    var dialogue = document.getElementById("dialogue");
    dialogue.style.animation = 'none';
    dialogue.offsetHeight;
    dialogue.style.animation = null;
}

function startTypingAnimation() {
    var dialogue = document.getElementById("dialogue");
    var text = dialogue.innerHTML;
    var charCount = text.length;
    typingDuration = charCount * 0.05;

    dialogue.style.animation = `typing ${typingDuration}s steps(${charCount}, end) forwards, 
                                blink-caret 0.75s step-end infinite, 
                                fadeIn 0.5s ease forwards`;

    dialogue.style.display = 'block';

    document.getElementById("nextButton").style.pointerEvents = 'none';
    document.getElementById("nextButton").style.opacity = '0.5';
    setTimeout(function () {
        document.getElementById("nextButton").style.pointerEvents = 'auto';
        document.getElementById("nextButton").style.opacity = '1';
    }, typingDuration * 1000);
}

function next() {
    var dialogue = document.getElementById("dialogue");
    var dialogueText = [
        "Não por meio de um bloco de notas e nem nada do tipo.",
        "Assim é melhor, não acha?",
        "Não tenha medo, estou feliz que você tenha chegado até aqui.",
        "Eu também sou curioso, sabe.",
        "Talvez temos algo em comum, afinal.",
        "...",
        "Sabe, que bom que você se importa, a maioria poderia estar rindo de mim agora...",
        "Isso tudo é muito pessoal, e eu estou me expondo para qualquer um na internet assim, ha ha.",
        "Mas, não é isso o que todos fazem hoje em dia? Só estou sendo um pouco mais sofisticado, você não concorda?",
        "Opa, desculpa. Lá vou eu buscar por aprovação mais uma vez...",
        "Até por que você nem consegue me responder, por enquanto.",
        "...",
        "Aproveitando que você continua por aqui, eu te darei uma dica para a próxima pasta...",
        "Se você ainda tiver interesse.",
    ];

    if (currentIndex < dialogueText.length) {
        resetDialogue();
        dialogue.innerHTML = dialogueText[currentIndex];
        startTypingAnimation();
        currentIndex++;
    } else {
        currentIndex = 0;
    }
}

var mousePosition;
var offset = [0, 0];
var div = document.getElementById("message");
var isDown = false;

div.style.position = "absolute";

div.addEventListener('mousedown', function (e) {
    isDown = true;
    offset = [
        div.offsetLeft - e.clientX,
        div.offsetTop - e.clientY
    ];
    div.style.cursor = "grabbing";
}, true);

document.addEventListener('mouseup', function () {
    isDown = false;
    div.style.cursor = "grab";
}, true);

document.addEventListener('mousemove', function (event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
            x: event.clientX,
            y: event.clientY
        };
        div.style.left = (mousePosition.x + offset[0]) + 'px';
        div.style.top = (mousePosition.y + offset[1]) + 'px';
    }
}, true);
