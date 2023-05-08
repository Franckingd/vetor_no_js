var array = []

// console.log(array); -> Printar o array inteiro no console

function CadInicio(){
    array.unshift(document.getElementById('name').value)
    alert(array);

    // var input = document.getElementById('name')
    // input.value = "";


    // var valor = document.getElementById('name')
    // array.unshit(valor.value)
    // alert(array)

    // valor.value = "";
}

function CadFinal(){
    array.push(document.getElementById('name').value)
    alert(array);
}

function RemoveInicio(){
    array.shift(document.getElementById('name').value)
    alert(array);
}

function RemoveFinal(){
    array.pop(document.getElementById('name').value)
    alert(array);
}

function AlertAll(){
    alert(array);
}

// function SearchKey(){
//     var pos = document.getElementById('name-pesquisa').value 
//     alert(array[pos])
//     // alert(array[document.getElementById('name-pesquisa').value])
// }

function ListAll(){
    var list = document.getElementById('list')
    for(var c = 0; c < array.length; c++){
        list.innerHTML += "<h4> Código: "+c+" - Nome: "+array[c]+"</h4>";
    }
}

function ClearInput(){
    var input = document.getElementById('name')
    input.value = "";
}

//--------------------------------------------------------------------

function ExecutarFuncao(){
    var option = document.getElementById('options').value
    var msg = document.getElementById('msg')
    if(option == 0){
        msg.innerHTML = "Escolha uma das opções para executar!";
    }else{
        if(option == 1){
            CadInicio();
        }else if(option == 2){
            CadFinal();
        }else if(option == 3){
            RemoveInicio();
        }else if(option == 4){
            RemoveFinal();
        }else if(option == 5){
            AlertAll();
        }else if(option == 6){
            ListAll();
        }
    }
}

function PesquisarPosicao(){
    var pos = document.getElementById('pesquisar').value 
    alert(array[pos]);
}