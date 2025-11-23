function enviar() {
    const nomeInput = document.getElementById("nome");
    const nome = nomeInput.value.trim();
    const msg = document.getElementById("msg");

    if (nome === "") {
        msg.innerHTML = "Digite seu nome!";
        msg.style.color = "red";
        return;
    }

    msg.innerHTML = "Confirmando presença";
    msg.style.color = "black";

    const url = "https://script.google.com/macros/s/AKfycbwQfCaLwni1_-o3o_cKrHckZQTE7pmjPzt2b9CHcKicqKK7zuuvxnn4HGqOUeQEjKxT/exec";

    fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            data: new Date().toLocaleString("pt-BR")
        })
    });

    // Espera 1 segundo e limpa tudo
    setTimeout(() => {
        nomeInput.value = "";  // 🔥 limpa o campo
        msg.innerHTML = "";    // 🔥 tira qualquer mensagem
    }, 800);
}
