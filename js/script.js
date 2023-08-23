const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
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
    if(emailInput === ""){
        alert("Porfavor, preencha o seu E-mail");
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