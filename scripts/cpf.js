function verifica(){
    let num=document.getElementById('txtnum').value
    let aux = []
    //Primeiro vamos colocar o numero recebido dentro de um array auxiliar, separado digito por digito
    for (c in num){
        if (num[c]!= '.' && num[c] != '-'){
        aux.push(num[c])
    }}
    //Agora vamos testar o primeiro digito verificador//
    let x = aux[9] //Esta é a posição do primeiro digito verificador
    let sub = 0
    let dec = 10
    let result= 0
    for (sub; sub<9; sub++){
        result += dec*aux[sub]
        dec--
    }
    result = result%11;
    
    //Agora vamos verificar o segundo digito verificador
    let y = aux[10] //Esta é a posição do segundo dígitor verificador
    dec = 11
    result2 = 0
    for(let c=0; c<10; c++){
        result2 += dec*aux[c]
        dec--
    }
    result2 = result2%11;
    //Agora vamos testar os resultados
    if(((result == 1 || result == 0 && x==0) || x==11-result) && ((result2 == 1 || result2 ==0 && y==0)|| y==11-result2) && (aux.length==11)){
        let res = document.getElementById('res')
        res.innerHTML='Resultado'
        res.innerHTML+=' CPF VÁLIDO'
    }
    else{res.innerHTML='Resultado: '; res.innerHTML+= ' CPF Inválido'}

}

function limpa(){
    let num = document.getElementById('txtnum')
    if (num.value.length==11 || num.value.length==14){
        verifica()       
    }
    else{
        let res = document.getElementById('res')
        res.innerHTML='Formato apenas números ou <br> formato: 123.456.789-00'
    }
}

//Função para gerar cpf aleatório
function geraCpf(){
    let aux=[]
    let x = parseInt((Math.random())*10)
    for(let c =0; c<9; c++){
        aux.push(parseInt((Math.random())*10))
    }
    //Adicionando o primeiro digito verificador
    let sub = 0
    let dec = 10
    let result= 0
    for (sub; sub<9; sub++){
        result += dec*aux[sub]
        dec--
    }
    result = result%11;
    if(result==0 ||result==1){
        aux.push(0)
    }
    else{
        aux.push(11-result)
    }
    // Adicionando o segundo digito
    dec = 11
    result2 = 0
    for(let c=0; c<10; c++){
        result2 += dec*aux[c]
        dec--
    }
    result2 = result2%11;
    if(result2 == 0 || result2 == 1){
        aux.push(0)
    }
    else{
        aux.push(11-result2)
    }
    //Devolvendo o resultado para o html
    let fn = ''
    for (let k in aux){
        if(k==2 || k==5){fn += aux[k] + '.'}
        else if(k==8){fn += aux[k] + '-'}
        else{
            fn += aux[k]
        }
       
    }
    let incpf = document.getElementById('rescpf')
    incpf.value = ''
    incpf.value += fn




   
}