function getConfig() {
    fetch("assets/php/getconfig.php")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar o arquivo: " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            for (var i = 0; i < data.length; i++) {
                document.documentElement.style.setProperty("--color-primary", data[i].cor_fundo);
                document.documentElement.style.setProperty("--color-fonte", data[i].cor_fonte);
            }})
        .catch(error => {
            console.log(error)
        });


}

getConfig();
