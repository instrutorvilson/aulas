//const baseUrl = "https://management-inventory.herokuapp.com/products";
//const baseUrl = "http://localhost:8080/products";
const baseUrl = "http://localhost:3000/products"

function inserir() {
    var description = document.getElementsByName("description")[0].value;
    var price = document.getElementsByName("price")[0].value;
    var inventory = document.getElementsByName("inventory")[0].value;

    var product = {
        description: description,
        price: price,
        inventory: inventory
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(baseUrl, options)
        .then(response => response.text())
        .catch((error) => {
            console.log("Não foi possivel consultar. Erro: " + error.message);
            return false;
        }

        )
    return true;
}

function alterar() {
    var idproduct = document.getElementsByName("idproduct")[0].value; 
    var description = document.getElementsByName("description")[0].value;
    var price = document.getElementsByName("price")[0].value;
    var inventory = document.getElementsByName("inventory")[0].value;

    var product = {
        id: idproduct,
        description: description,
        price: price,
        inventory: inventory
    }

    const options = {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(baseUrl+"/"+idproduct, options)
        .then(response => response.text())
        .then( data => window.location.href = "consulta.html")
        .catch((error) => {
            console.log("Não foi possivel consultar. Erro: " + error.message);
            return false;
        }

        )
    return true;
}

function getAllLocal() {
    fetch(baseUrl)
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
        linha.appendChild(document.createElement("td")).innerHTML = "<a href='edita.html?id="+product.id+"'>Editar</a>";
       
        root.appendChild(linha);
    }
}

function getProductById(id){
    fetch(baseUrl+"/"+id)
    .then(response => response.json())
    .then(dados => showInForm(dados))
    .catch((error) =>
        console.log("Não foi possivel consultar. Erro: " + error.message)
    ) 
}

function showInForm(content){
    document.getElementsByName("idproduct")[0].value = content.id;
    document.getElementsByName("description")[0].value = content.description;
    document.getElementsByName("price")[0].value = content.price;
    document.getElementsByName("inventory")[0].value = content.inventory;
} 

function limparCampos(){
    document.getElementsByName("description")[0].value = "";
    document.getElementsByName("price")[0].value = "";
    document.getElementsByName("inventory")[0].value = "";
}