function hash(s) {
    let h = 7
    const letters = "acdegilmnoprstuw"
    for(let i = 0; i < s.length; i++) {
        h = (h * 37 + letters.indexOf(s[i]))
    }
    return h
}

function unhash(n, letters, len) {

    const constant = 37
    let offsets = []
    let current = n
    
    for (let i = 0; i < len; i++) { 
        let dividedByConstant = Math.trunc(current / constant)
        let multByConstant = dividedByConstant * constant
        let res = current - multByConstant
        offsets.push(res)
        current = dividedByConstant
    }

    return offsets
        .reverse()
        .reduce((carry, current) =>
            carry += letters[current] || carry
        , '')
}

const agile = unhash(485617381, "acdegilmnoprstuw", 5)
const cameleon = unhash(24682779393128, "acdegilmnoprstuw", 8)