"use strict";
function leftArrowPressed() {
    let element = document.getElementById("image1");
    element.style.left = parseInt(element.style.left) - 40 + 'px';
}
function rightArrowPressed() {
    let element = document.getElementById("image1");
    element.style.left = parseInt(element.style.left) + 40 + 'px';
}
function upArrowPressed() {
    let element = document.getElementById("image1");
    element.style.top = parseInt(element.style.top) - 40 + 'px';
}
function downArrowPressed() {
    let element = document.getElementById("image1");
    element.style.top = parseInt(element.style.top) + 40 + 'px';
}
function moveSelection(event) {
    switch (event.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
;
function gameLoop() {
    moveSelection();
}
//# sourceMappingURL=app.js.map