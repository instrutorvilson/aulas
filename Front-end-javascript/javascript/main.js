

function getAllLocal() {
    fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(dados => showInTable(dados))
        .catch((error) =>
            console.log("Não foi possivel consultar. Erro: " + error.message)
        )
}

function showInTable(content) {
    var root = document.getElementById("root");
    for (var product of content) {
        let linha = document.createElement("tr");
        linha.appendChild(document.createElement("td")).innerHTML = product.id;
        linha.appendChild(document.createElement("td")).innerHTML = product.description;
        linha.appendChild(document.createElement("td")).innerHTML = product.price;
        linha.appendChild(document.createElement("td")).innerHTML = product.inventory;
        root.appendChild(linha);        
    }
}
