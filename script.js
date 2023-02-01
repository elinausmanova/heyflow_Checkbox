let checkbox = document.getElementById('svg');
let nativeinput = document.getElementById('cb');

function onOutFocus() {
    checkbox.style.outline = '';
}

function onClickCheckbox() {
    if (nativeinput.checked) {
        checkbox.style.backgroundColor = 'black';
    } else {
        checkbox.style.backgroundColor = 'white';
    }
}

nativeinput.addEventListener('keyup', (e) => {
    if (e.key === "Tab") {
        checkbox.style.outline = '2px solid black';
    }
})