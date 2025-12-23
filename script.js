function insert(num){
    let numero = document.querySelector("#result").value;
    document.querySelector("#result").value = numero + num;
}
function clean(){
    document.querySelector("#result").value = "";
}

/*function back(){
    let resultado = document.querySelector("#result").value
    document.querySelector("#result").value = resultado.substring(0,resultado.length -1);
}*/

//Forma mais moderna de chamar esse tipo de função:

function back(){
    const input = document.querySelector("#result");
    input.value = input.value.substring(0, input.value.length -1);
}

function calcular(){
    const input = document.querySelector("#result").value
    if(input){
        document.querySelector("#result").value = eval(input)
    }
}