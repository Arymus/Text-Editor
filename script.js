const input = document.getElementById("textInput");
const content = document.querySelector(".content");
let output = document.createElement("p");

function focusOnLoad() {
    input.focus();
    input.select();
}
focusOnLoad();

function replaceText() {
    if (input.value.length == 0) {
        output.innerText = "No input >:(";
    } else {
        output.innerText = input.value;
    };

    console.log(input.value);

    input.remove();
    content.appendChild(output);
};

output.addEventListener("contextmenu", () => {

    if (input.value.length !== 0) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    content.appendChild(popup);

    const bold = document.createElement("p");
    const italic = document.createElement("p");
    const underline = document.createElement("p");
    const strikethrough = document.createElement("p");

    const buttons = ["bold", "italic", "underline", "strikethrough"];
    const buttonElements = [bold, italic, underline, strikethrough];
    const words = output.innerText.split(" ");

    for (let i = 0; i <= buttons.length; i++) {
        const word = buttons[i];
        const firstLetter = word[0];

        console.log(firstLetter);

        buttonElements[i].innerHTML = `<${firstLetter}>${firstLetter.toUpperCase()}</${firstLetter}>`;
        buttonElements[i].className += "popupButton";
        popup.append(buttonElements[i]);

        console.log(words[i]);

        buttonElements[i].addEventListener("click", () => {
            output.innerHTML = `<${firstLetter}>${output.innerText}</${firstLetter}>`;
        });

        words[i].addEventListener("click", () => {

        });
    };
}
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        replaceText();
    }
});