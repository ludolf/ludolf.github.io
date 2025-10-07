var table = new Map();
table.set('A', '00000')
table.set('B', '00001')
table.set('C', '00010')
table.set('D', '00011')
table.set('E', '00100')
table.set('F', '00101')
table.set('G', '00110')
table.set('H', '00111')
table.set('I', '01000')
table.set('J', '01001')
table.set('K', '01010')
table.set('L', '01011')
table.set('M', '01100')
table.set('N', '01101')
table.set('O', '01110')
table.set('P', '01111')
table.set('Q', '10000')
table.set('R', '10001')
table.set('S', '10010')
table.set('T', '10011')
table.set('U', '10100')
table.set('V', '10101')
table.set('W', '10110')
table.set('X', '10111')
table.set('Y', '11000')
table.set('Z', '11001')

function decode(text) {
    text = text.toUpperCase().replaceAll(/\s+/g, ' ').trim()
    let decoded = ''
    for (let i = 0; i < text.length; i++) {
        const idx = text[i]
        if (table.has(idx)) {
            decoded += table.get(idx) + '\n'
        } else if (idx === ' ') {
            decoded += '\n'
        }
    }
    return decoded
}

function encode(code) {
    code = code.replaceAll(/[^01\s]/g, '').replaceAll(/\s+/g, ' ').trim()
    const l = 5
    let encoded = ''
    let next = 0
    while (next < code.length + l) {
        if (code[next] === ' ') {
            encoded += ' '
            next++;
        }
        const b = code.substr(next, l)
        table.forEach((v, k) => {
            if (v === b) {
                encoded += k    
            }
        })
        next += l
    }
    return encoded
}

const resultDiv = document.querySelector('#result')
const toDecodeInput = document.querySelector('#toDecodeInput')
document.querySelector('#toDecodeButton').addEventListener('click', () => {
    const s = toDecodeInput.value
    console.log(`Decoding "${s}"...`)
    resultDiv.innerHTML = decode(s)
})
const toEncodeInput = document.querySelector('#toEncodeInput')
document.querySelector('#toEncodeButton').addEventListener('click', () => {
    const s = toEncodeInput.value
    console.log(`Encoding "${s}"...`)
    resultDiv.innerHTML = encode(s)
})

document.querySelector('form').addEventListener('submit', e => e.preventDefault())