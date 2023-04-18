var table = new Map();
table.set('0', '00000000')
table.set('1', '00000001')
table.set('2', '00000010')
table.set('3', '00000011')
table.set('4', '00000100')
table.set('5', '00000101')
table.set('6', '00000110')
table.set('7', '00000111')
table.set('8', '00001000')
table.set('9', '00001001')
table.set('A', '00001010')
table.set('B', '00001011')
table.set('C', '00001100')
table.set('D', '00001101')
table.set('E', '00001110')
table.set('F', '00001111')
table.set('G', '00010000')
table.set('H', '00010001')
table.set('I', '00010010')
table.set('J', '00010011')
table.set('K', '00010100')
table.set('L', '00010101')
table.set('M', '00010110')
table.set('N', '00010111')
table.set('O', '00011000')
table.set('P', '00011001')
table.set('Q', '00011010')
table.set('R', '00011011')
table.set('S', '00011100')
table.set('T', '00011101')
table.set('U', '00011110')
table.set('V', '00011111')
table.set('W', '00100000')
table.set('X', '00100001')
table.set('Y', '00100010')
table.set('Z', '00100011')

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
    const l = 8
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