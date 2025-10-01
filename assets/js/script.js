function getLinks() {
    fetch("assets/php/getlink.php")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar o arquivo: " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            usuario = document.getElementById("profile");
            for (var i = 0; i < data.usuarios.length; i++) {
                usuario.innerHTML = usuario.innerHTML
                    + "<div class='info-profile'>"
                    + "<span id='nome-user'>" + data.usuarios[i].nome + "</span>"
                    + "<img id='imagem-user' src='data:imagem/png;base64," + data.usuarios[i].foto + "' alt=''>"
                    + "<span id='frase-user'>" + data.usuarios[i].frase + "</span>"
                    + "<button id='button-insta' onClick=goToLink('" + data.usuarios[i].instagram + "')>"
                    + "<i class='fa-brands fa-instagram'></i>"
                    + "</button>"
                    + "</div>";
            }

            links = document.getElementById("container-links");
            for (var i = 0; i < data.links.length; i++) {
                links.innerHTML = links.innerHTML
                    + "<div class='link' onClick=goToLink('" + data.links[i].link + "')>"
                    + "<span class='links'>" + data.links[i].nome + "</span>"
                    + "</div>";
            }
        })
        .catch(error => {
            console.log(error)
        });
}

getLinks();

function goToLink(link) {
    window.location.href = link;
}