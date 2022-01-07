"use strict";
let element = document.getElementById("image1");
function leftArrowPressed() {
    element.style.left = parseInt(element.style.left) - 40 + 'px';
}
function rightArrowPressed() {
    element.style.left = parseInt(element.style.left) + 40 + 'px';
}
function upArrowPressed() {
    element.style.top = parseInt(element.style.top) - 40 + 'px';
}
function downArrowPressed() {
    element.style.top = parseInt(element.style.top) + 40 + 'px';
}
function moveSelection(e) {
    switch (e.key) {
        case "ArrowLeft":
            leftArrowPressed();
            break;
        case "ArrowRight":
            rightArrowPressed();
            break;
        case "ArrowUp":
            upArrowPressed();
            break;
        case "ArrowDown":
            downArrowPressed();
            break;
    }
}
window.onload = function () {
    moveSelection();
};
//# sourceMappingURL=app.js.map