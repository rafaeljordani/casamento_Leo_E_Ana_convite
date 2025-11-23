function copiarTexto() {
    const endereco = document.getElementById("endereco").innerText;

    navigator.clipboard.writeText(endereco)
        .then(() => {
            alert("Endereço copiado! 📍");
        })
        .catch(() => {
            alert("Erro ao copiar 😞");
        });
}
