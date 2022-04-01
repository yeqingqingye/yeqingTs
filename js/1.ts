const input = document.querySelectorAll('input');
const button = document.querySelector('button');
const span = document.querySelector('span');

button.onclick = function () {
    const result: number = parseInt(input[0].value) + parseInt(input[1].value);
    span.innerHTML = result + '';
}

function fn(x: number, y: number): number {
    return x + y;
}

fn(1, 2);
