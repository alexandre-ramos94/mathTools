function decToHexa(){

    var x = Number(document.getElementById('txtnum').value)
    var g = document.getElementById('txtnum2')
    g.value = x.toString(16).toUpperCase()
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
    let txtbase = document.getElementById('txtbase').value
    let txtexp = document.getElementById('txtexp').value
    let num = document.getElementById('txtnum')
    num.value = parseInt(txtexp, txtbase)
    decToHexa().toUpperCase()
}





