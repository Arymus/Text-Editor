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
    }

    console.log(input.value);

    input.remove();
    content.appendChild(output);
}

output.addEventListener("contextmenu", () => {

    if (input.value.length !== 0) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    content.appendChild(popup);

    const boldButton = document.createElement("p");
    boldButton.innerHTML = "<b>B</b>";
    boldButton.classList.add("popupButton");
    popup.appendChild(boldButton);

    const italicButton = document.createElement("p");
    italicButton.innerHTML = "<i>I</i>";
    italicButton.classList.add("popupButton");
    popup.appendChild(italicButton);

    const underlineButton = document.createElement("p");
    underlineButton.innerHTML = "<u>U</u>";
    underlineButton.classList.add("popupButton");
    popup.appendChild(underlineButton);

    const strikethroughButton = document.createElement("p");
    strikethroughButton.innerHTML = "<s>S</s>";
    strikethroughButton.classList.add("popupButton");
    popup.appendChild(strikethroughButton);
}
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        replaceText();
    }
});