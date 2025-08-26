function getLinks() {
    fetch("assets/php/getlink.php")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar o arquivo: " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            links = document.getElementById("container-links");
            for (var i = 0; i < data.length; i++) {
                links.innerHTML = links.innerHTML
                    + "<div class='link' onClick=goToLink('" + data[i].link + "')>"
                    + "<span class='nome'>" + data[i].nome + "</span>"
                    + "<span class='links'>" + data[i].link + "</span>"
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