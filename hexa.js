function DecToOther(x){
    x = Number(x)
    let numhex=document.getElementById('txtnum2')
    let numbin=document.getElementById('txtnum3')
    let numoct=document.getElementById('txtnum5')
    let numexp=document.getElementById('txtexp')
    let numbas=Number(document.getElementById('txtbase').value)
    numhex.value=x.toString(16).toUpperCase()
    numbin.value=x.toString(2)
    numoct.value=x.toString(8)
    numexp.value=x.toString(numbas).toUpperCase()
}

function distrib(y,base){
    base = Number(base)
    if (base==5){
        base=Number(document.getElementById('txtbase').value)
    }
    let num = document.querySelector('#txtnum')
    num.value=parseInt(y, base)
    DecToOther(num.value)
}

function partial(base){
    let expo=document.getElementById('txtexp').value
    distrib(expo, base)

}





