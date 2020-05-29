function verifica(){
    let num=document.getElementById('txtnum').value
    let aux = []
    //Primeiro vamos colocar o numero recebido dentro de um array auxiliar, separado digito por digito
    for (c in num){
        aux.push(num[c])
    }
    //Agora vamos testar o primeiro digito verificador//
    let x = num[9] //Esta é a posição do primeiro digito verificador
    let sub = 0
    let dec = 10
    let result= 0
    for (sub; sub<9; sub++){
        result += dec*aux[sub]
        dec--
    }
    result = result%11;
    
    //Agora vamos verificar o segundo digito verificador
    let y = num[10] //Esta é a posição do segundo dígitor verificador
    dec = 11
    result2 = 0
    for(let c=0; c<10; c++){
        result2 += dec*aux[c]
        dec--
    }
    result2 = result2%11;
    //Agora vamos testar os resultados
    if(x==11-result && y==11-result2){
        let res = document.getElementById('res')
        res.innerHTML='Resultado'
        res.innerHTML+=' CPF VÁLIDO'
    }
    else{res.innerHTML='Resultado: '; res.innerHTML+= ' CPF Inválido'}
}

function limpa(){
    let num = document.getElementById('txtnum')
    num.value = num.value.replace('-', '', '.', '')
    if (num.value.length==11){
        verifica()       
    }
    else{
        let res = document.getElementById('res')
        res.innerHTML='O cpf deve conter 11 Dígitos e somente numeros'
    }
}