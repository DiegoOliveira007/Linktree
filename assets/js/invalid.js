const forms = document.getElementById("forms-login");
const inputs = document.querySelectorAll(".input-user");
const errorbox = document.getElementById("error-box");
const buttonforms = document.querySelector(".button-login");

function erroinput() {
    for (let input of inputs) {
        input.classList.remove("correct-input");
        input.classList.add("error-input");
    }
};

function digitarvalid() {
    for (let input of inputs) {
        input.addEventListener("input", function () {
            errorbox.style.display = "none";
            if (input.value.trim() !== "") {
                input.classList.remove("error-input");
                input.classList.add("correct-input");
            }
            else {
                input.classList.remove("correct-input");
            }

            buttonverific();
        });
    }
};

function buttonverific() {
    var campovalido = true;

    for (let input of inputs) {
        if (input.value.trim() === "") {
            campovalido = false;
        }
    }

    buttonforms.disabled = !campovalido;

}

forms.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(forms);

    fetch('assets/php/login.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(resposta => {
            if (resposta.correto) {
                window.location.href = "profile.html";
            } else {
                errorbox.style.display = "block";
                errorbox.innerHTML =
                    "<p>" + resposta.error + "</p>"
                erroinput();
            }
        })
        .catch(error => {
            console.log("Ocorreu um erro:", error);
            errorbox.innerHTML = "<p>Ocorreu um erro em seu login</p>"
        })
});

digitarvalid();
buttonverific();