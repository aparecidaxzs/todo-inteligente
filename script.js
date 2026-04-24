function adicionarTarefa() {
    const input = document.getElementById("tarefa");
    const lista = document.getElementById("lista")

    if (input.value === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    li.onclick = () => {
        li.style.textDecoration = "line-through";
    };

    lista.appendChild(li);
    input.value = "";

    pegarFrase();
}

async function pegarFrase() {
    const resposta = await fetch("https://api.quotable.io/random")
    const dados = await resposta.json();

    document.getElementById("frase").textContent = "💡 " + dados.content;
}