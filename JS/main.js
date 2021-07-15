

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar</b>";

    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}
function redirecionar(){
    window.open("https://google.com/");
    //window.location.href= "https://google.com/";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML= "obriagado por passar o mouse";
    elemento.innerHTML= "obriagado por passar o mouse";
    //alert("Trocar texto");
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML= "passe o mouse aqui";
    elemento.innerHTML= "passe o mouse aqui";
}
function load(){
    alert("Página carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function soma(n1, n2){
    return n1+ n2;
}
function validaIdade(idade){
    var validar;
    if(idade >=18){
        validar= true
    }else{
        validar=false
    }
    return validar;
}
var idade= prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/*
var d= new Date();
alert(d.getDate());
alert(d.getDay());
*/
/*
alert(d.getFullYear());
*/
/*
var count=0;
for(count=0; count<=5; count++){
    alert(count);
};
*/
/*
var count=0
while(count<=5){
    console.log(count);
    alert(count);
    count++;
};
*/
/*
var idade=prompt("Qual sua idade?");
if(idade>=18){
    alert("Maior de idade");
}else{(idade<18)
    alert("Menor de idade")
}
*/
/*
var frutas=[{nome:"maça ", cor:" vermelha"}, {nome:"uva ", cor:" roxa"}];
console.log(frutas);
alert(frutas[0].cor);
*/
/*
var fruta={nome:"maça ", cor:" vermelha"}
console.log(fruta.nome);
alert(fruta.nome);
*/
/*
var lista=["maça", "pêra", "laranja"];
lista.push("uva");
lista.pop();

console.log(lista);
console.log(lista.toString());
console.log(lista.join("-"));
*/
/*
var nome = " Davi Eduardo";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert(nome+ " tem " + idade + " anos");
//alert(idade+ idade2);
console.log(nome);
console.log(n1*n2);
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
*/