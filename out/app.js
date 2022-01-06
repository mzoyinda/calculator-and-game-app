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
function moveSelection(evt) {
    switch (evt.keyCode) {
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
window.onload = function () {
    moveSelection();
};
//# sourceMappingURL=app.js.map