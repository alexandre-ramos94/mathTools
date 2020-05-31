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
    base()
    DecToOct()
}

// função para fazer o inverso


function HexToDec(){
        var y= document.getElementById('txtnum2').value.toUpperCase();   
        var h = document.getElementById('txtnum')
        h.value=parseInt(y,16)
        decToHexa()

        
}

//Função binário para decimal
function bina(){
 
    var num3 = document.getElementById('txtnum3').value;
    let jdec = document.getElementById('txtnum')
    jdec.value = parseInt(num3,2)
    decToHexa()
}

//Função decimal para binário
function decBina(){
    let num4 = Number(document.getElementById('txtnum').value)

    let kbin = document.getElementById('txtnum3')
    kbin.value = num4.toString(2)

    
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

//Função para base qualquer//
function base(){
    let num = Number(document.getElementById('txtnum').value)
    let bas = Number(document.getElementById('txtbase').value)
    let result = document.getElementById('txtexp')
    totf = num.toString(bas)
    result.value = totf 
}

//Função para fazer o inverso//
function decBase(){
    
}





