const SIZE = 8

function display(code) {
    code = code.replaceAll(/[^01]/g, '').trim()
    for (let i = 0; i < SIZE * SIZE; i++) {
        document.querySelector(`#c${i}`).classList.remove('on')
    }
    for (let i = 0; i < code.length; i++) {
        if (parseInt(code[i])) {
            document.querySelector(`#c${i}`).classList.add('on')
        }
    }
}

function initTable(table) {
    let content = '';
    for (let r = 0; r < SIZE; r++) {
        content += '<tr>'
        for (let c = 0; c < SIZE; c++) {
            const i = r * SIZE + c
            content += `<td id="c${i}"></td>`
        }
        content += '</tr>'
    }
    table.innerHTML = content
}

const displayDiv = document.querySelector('#display')
const codeInput = document.querySelector('#code')
document.querySelector('#displayButton').addEventListener('click', () => {
    const s = codeInput.value
    console.log(`Displaying "${s}"...`)
    display(s)
})
codeInput.addEventListener('keyup', () => {
    
})
let keydown_last = -1;
codeInput.addEventListener('keydown', e => {
    const l = codeInput.value.replaceAll(/[^01]/g, '').length
    if (l !== keydown_last && l > 0 && l % SIZE == 0) {
        codeInput.value += '\n'
    }
    keydown_last = l
})


initTable(document.querySelector('table'))

document.querySelector('form').addEventListener('submit', e => e.preventDefault())

// A
// 00000000
// 00111100
// 01100110
// 01100110
// 01111110
// 01100110
// 01100110
// 01100110
