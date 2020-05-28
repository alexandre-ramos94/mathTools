function decToHexa(){
    var result = []
    var fin = ''
    var x = Number(document.getElementById('txtnum').value)
    x= parseInt(x)
    while(x>15){
        result.unshift(x%16)
        x=parseInt(x/16)
      
    }
    result.unshift(x)
    for(var c=0;c<result.length;c++)
    switch(result[c]){
        case 10: result[c] = 'A';
        break;

        case 11: result[c] = 'B';
        break;

        case 12: result[c] = 'C';
        break;

        case 13: result[c] = 'D';
        break;

        case 14: result[c] = 'E';
        break;

        case 15: result[c] = 'F';
        break;
        
    }

    for (c in result){
        fin += result[c]
    }
    var g = document.getElementById('txtnum2')
    g.value = fin
    decBina()
    DecToOct()
}

// função para fazer o inverso


function HexToDec(){
        var y= document.getElementById('txtnum2').value;
        y = y.toUpperCase();
        var resultado = 0
        var aux = []
        let contador = 0
        var resp2 = document.getElementById('res2')

        for(var c=y.length-1;c>=0;c--){
            aux.push(y[contador])
            if(aux[contador]=='A'){aux[contador]='10'}
            else if(aux[contador]=='B'){aux[contador]='11'}
            else if(aux[contador]=='C'){aux[contador]='12'}
            else if(aux[contador]=='D'){aux[contador]='13'}
            else if(aux[contador]=='E'){aux[contador]='14'}
            else if(aux[contador]=='F'){aux[contador]='15'}
            resultado += Number(aux[contador])*16**c
            contador++
        }
        if(isNaN(resultado)){
            resp2.innerHTML='Houve algum erro com os dados'
        }
        else{resp2.innerHTML=resultado}
        var h = document.getElementById('txtnum')
        h.value=resultado
        decToHexa()

        
}

//Função binário para decimal
function bina(){
    let rst = 0
    var num3 = document.getElementById('txtnum3').value;
    let co = 0;
    for(c=num3.length-1; c>=0; c--){
        rst += num3[co] * 2**c
        co++
    }
    let jdec = document.getElementById('txtnum')
    jdec.value = rst
    decToHexa()
}

//Função decimal para binário
function decBina(){
    let aux=[]
    final = ''
    let num4 = Number(document.getElementById('txtnum').value)

    while(num4>1){
        aux.unshift(num4%2)
        num4=parseInt(num4/2)        
    }
    aux.unshift(num4)
    for(let c in aux){
        final += aux[c]
    }
    let kbin = document.getElementById('txtnum3')
    kbin.value = Number(final)

    
}

//Função para nummeros octais
function octToDec(){
    let num5 = Number(document.getElementById('txtnum5').value)
    let lbin = document.getElementById('txtnum')
    let txtoc = parseInt(num5,8)
    lbin.value = txtoc
    decToHexa()
}

//Função decimal para octal
function DecToOct(){
    let num6 = Number(document.getElementById('txtnum').value)
    let lbin = document.getElementById('txtnum5')
    let txtoc = num6.toString(8)
    lbin.value = txtoc
    decToHexa()}







