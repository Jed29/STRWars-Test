function palindrome(input){
    let change= input.split(' ',input.length)
    let result =''
    let angka = 0
    let asique=[]
    let asiqueWords=[]
    let tidakAsique = []
    for(let i = 1 ; i <= input.length ;i++){
        result+= input[input.length-i]
    }
    let hasil = result.split(' ', result.length)
    for (let j = 0; j < hasil.length;j++){
        for(let k = 0; k < change.length;k++){
            if(change[k] == hasil[j]){
                angka++
                asiqueWords.push(hasil[j])
                asique.push(j)
            }else if(change[k] !== hasil[j]){
                tidakAsique.push()
            }
        }
    }
    return `Total Detected Palindrome: ${angka}
Palindrome Words: ${asiqueWords}
Palindrome Index: ${asique}
Invalid Palindrome Index: ${tidakAsique}`

}


// console.log(palindrome("kakak menjual katak dengan harga 12021"))
console.log(palindrome("kasur ke 616 sedang rusak"))