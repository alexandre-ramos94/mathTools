/*function qlq(x){
    var octal = x.toString(10)
    return octal
    
}
console.log(qlq(99))*/



function inversor(x){
    let base = 16;
    let result = 0;
    let cont = 0
    for(c=x.length-1; c>=0; c--){
        result += x[cont] * base**c
        cont++
    }
    console.log(result)
}
inversor('80')


