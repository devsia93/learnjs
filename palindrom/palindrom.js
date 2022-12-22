var ar = "strr1ts"
var hasPalindrom = true
for (var i = 0; i < ar.length / 2; i++){
    var j = ar.length - i - 1
    if (ar[i]!=ar[j]) {
        hasPalindrom = false
    }
}

if (hasPalindrom){
    console.log("palindrom")
} else {
    console.log("not palindrom")
}4