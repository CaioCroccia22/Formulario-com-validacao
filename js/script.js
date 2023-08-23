const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");


//Função de validação
form.addEventListener("submit", (e)=> {
    //Validar antes de enviar
    e.preventDefault();

    //Verifica se o nome esta vazio 
    if(nameInput.value === ""){
        alert("Porfavor, preencha o seu nome");
        return;
    }

    //Verificar se o e-mail está preenchido e se é válido
    if (emailInput === "" || !isEmailValid(emailInput.value)){
        alert("Porfavor, preencha o seu E-mail");
        return;
    }


    //Verifica se a senha esta preenchida
    if (!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa ser no minimo 8 digitos");
        return;
    }


    //Verifica se a situação foi selecionada
    if (jobSelect.value === "") {
        alert("Porfavor, preencha sua situação de trabalho");
        return;
    }

    //Verificar se a mensagem está preenchida
    if(messageTextarea.value === ""){
        alert("Porfavor, preencha a area de mensagem");
        return;
    }
    //Se todos os campos estiverem preenchidos envie o form
    form.submit();

})


//Função que válida o E-mail
function isEmailValid(email) {
    //Cria uma regex para validar o E-mail
    const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]{2,}$/
    )

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}


//Função senha inválida

function validatePassword(password, minDigits){
    if(password.length >= minDigits) {
        return true;
    }

    return false;
}