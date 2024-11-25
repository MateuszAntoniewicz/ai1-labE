/*
const msg: string = "Hello!";
alert(msg);
*/

function loadCSS(filePath: string): void {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = filePath;
    document.head.appendChild(link);
}

function createButtonStyle(containerID: string, link: string, name: string): void {
    const button = document.createElement("a");
    button.type = "button";
    button.textContent = name;
    button.className = "przycisk";

    button.addEventListener("click", () => {
        loadCSS(link);
    });

    let container = document.getElementById(containerID);
    if (container){
        container.appendChild(button);
    }
}

loadCSS("style/style.css");
createButtonStyle("menu", "style/style.css", "Klasa 1");
createButtonStyle("menu", "style/style2.css", "Klasa 2");
createButtonStyle("menu", "style/zmiana.css", "Zmiana tła");