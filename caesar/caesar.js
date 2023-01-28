let str = "Аве, Цезарь"
let num = 5
let alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"

function getAlphabetMatrix(str) {
    var arr = []
    for (var i = 0; i < str.length; i++) {
        arr.push(str.charAt(i))
    }
    return arr
}

let alphaArray = getAlphabetMatrix(alphabet)

function getNumFromArray(char) {
    for (var i = 0; i < alphaArray.length; i++) {
        if (char.toUpperCase() === alphaArray[i])
            return i
    }
    return -1
}

function getCaesarStr(message, num) {
    let str = ""
    for (var i = 0; i < message.length; i++) {
        let char
        let index = getNumFromArray(message.charAt(i))
        
        if (index < 0) {
            char = message.charAt(i)
        } else if ((index + num) >= alphaArray.length){
            char = alphaArray[index + num - alphaArray.length]
        }
         else {
            char = alphaArray[index + num]
        }
        str += char
    }
    return str
}

console.log(getCaesarStr(str, num))