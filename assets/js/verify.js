const nomeuser = document.getElementById("name-user");
const senhauser = document.getElementById("senha-user");
const nomeerror = document.getElementById("nome-error");
const senhaerror = document.getElementById("senha-error");
const formlogin = document.getElementById("forms-login");


formlogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const validar = true;

    nomeerror.textContent = "";
    senhaerror.textContent = "";
    nomeerror.classList.remove();
    senhaerror.classList.remove();

    

});

