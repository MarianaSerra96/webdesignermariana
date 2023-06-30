function validar() {
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var mensagem = document.getElementById("mensagem").value
    if (nome == "") {
        alert(`O campo Nome está vazio`);
        return false; //Impede o envio do formulário sem nome//
    }
    if (email == "") {
        alert(`O campo Email está vazio`);
        return false; //Impede o envio do formulário sem email//
    }
    if (mensagem == "") {
        alert(`O campo Mensagem está vazio`);
        return false; //Impede o envio do formulário sem mensagem//
    }
    //Gravar os cookies codificados(nomes com acentos)//
    document.cookie = `nome=${encodeURIComponent(nome)}`;
    document.cookie = `email=${encodeURIComponent(email)}`;
    document.cookie = `mensagem=${encodeURIComponent(mensagem)}`;

    return true;
}