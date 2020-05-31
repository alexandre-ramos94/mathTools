/*function qlq(x){
    var octal = x.toString(10)
    return octal
    
}
console.log(qlq(99))*/



/*function inversor(x){
    let base = 16;
    let result = 0;
    let cont = 0
    for(c=x.length-1; c>=0; c--){
        result += x[cont] * base**c
        cont++
    }
    console.log(result)
}
inversor('80')*/

function repetido(msg){
    var repeta = 0
    for(let c=0; c<msg.length-1;c++){
        if (msg[c]!= msg[c+1]){
            repeta += 1
        }
    }
    if (repeta!=0){
        console.log(repeta)
        return false
    }
    else{
        console.log(repeta)    
        return true}
        

}
let teste = repetido('9999999999919')
console.log(teste)



