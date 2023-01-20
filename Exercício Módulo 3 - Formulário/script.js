document.getElementById("formulario-02").addEventListener("submit", function( evento ){

    evento.preventDefault();
    evento.stopPropagation();

    if( this.getAttribute("class")){
        return false;
    };

    let texto = "Formulário enviado!"

    document.getElementById("resultado").innerHTML = texto;
});

function validaCampo(elemento){

    elemento.addEventListener("focusout", function(event) {

        event.preventDefault();

        //para checar o valor que esta dentro do elemento 
        if(this.value == ""){
        document.querySelector(".mensagem").innerHTML = "verifique o preenchimento dos campos em vermelho";
        this.classList.add("erro");
        this.parentNode.classList.add("erro");
        return false;
    } else {
        document.querySelector(".mensagem").innerHTML = "";
        this.classList.remove("erro");
        this.parentNode.classList.remove("erro");
    }
});
}

function validaCampoNumerico(elemento){

    elemento.addEventListener("focusout", function(event) {

        event.preventDefault();

        //para checar o valor que esta dentro do elemento
        let numero = this.value.match(/^[\d]5-[\d]/) ? this.value.replace(/-/,"") : this.value;
        
        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
        document.querySelector(".mensagem").innerHTML = "";
        this.classList.remove("erro");
        this.parentNode.classList.remove("erro");
    } else {
        document.querySelector(".mensagem").innerHTML = "verifique o preenchimento dos campos em vermelho";
        this.classList.add("erro");
        this.parentNode.classList.add("erro");
        return false;
    }
});
}

function validaEmail(elemento){
    elemento.addEventListener("focusout", function(event) {

        event.preventDefault();

        //confere se o email foi corretamente escrito através de um regex
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z])?$/i;

        if(this.value.match(emailValido)) {
        document.querySelector(".mensagem").innerHTML = "";
        this.classList.remove("erro");
        this.parentNode.classList.remove("erro");
    } else {
        document.querySelector(".mensagem").innerHTML = "verifique o preenchimento dos campos em vermelho";
        this.classList.add("erro");
        this.parentNode.classList.add("erro");
        return false;
    }
});
};

function validaUf(elemento){
    elemento.addEventListener("focusout", function(event) {

        event.preventDefault();

        const ufValido = /^[AC|AL|AP|AM|BA|CE|DF|ES|GO|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO]/i;

        if(this.value.match(ufValido)) {
        document.querySelector(".mensagem").innerHTML = "";
        this.classList.remove("erro");
        this.parentNode.classList.remove("erro");
    } else {
        document.querySelector(".mensagem").innerHTML = "verifique o preenchimento dos campos em vermelho";
        this.classList.add("erro");
        this.parentNode.classList.add("erro");
        return false;
    }
});
}

let camposObrigatorios = document.querySelectorAll("input.obrigatorio");
let camposNumericos = document.querySelectorAll("input.numero");
let camposEmail = document.querySelectorAll("input.email");
let camposUf = document.querySelectorAll("input.uf");

for(let emFoco of camposObrigatorios){
    validaCampo(emFoco);
};

for(let emFoco of camposNumericos){
    validaCampoNumerico(emFoco);
};

for(let emFoco of camposEmail){
    validaEmail(emFoco);
};

for(let emFoco of camposUf){
    validaUf(emFoco);
};