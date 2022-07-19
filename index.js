function calcular(numero , divisor){
    var numero = parseFloat(document.getElementById("number").value)
    var tabuada = document.getElementById("tabuada")

    var divisor = 1

    if(Number.isNaN(numero)){
        window.alert("Não foi possível gerar tabuada ! Favor inserir números válidos")
    }else{
        tabuada.innerHTML=''
    }

    while (divisor <= 10){
        var item = document.createElement("option")
        item.text = `${numero} X ${divisor} = ${numero*divisor}`
        tabuada.appendChild(item)
        divisor++
    }
}    
    














/*for(c = 1; c<=19;c++){
    console.log(`Repetição nº ${c}`)
}
var c = 1
while (c <= 300){
    console.log(c)
    c ++
}*/

/*var c = 1
do {console.log(c)
c ++ }
while(c <= 100)*/