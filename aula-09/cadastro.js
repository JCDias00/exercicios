window.onload = function (e) {

    

    var btnCadastrar = document.getElementById("btnCadastrar");

    var txtnome = document.getElementById("txtnome");

    var txtSobrenome = document.getElementById("txtSobrenome");

    var txtEmail = document.getElementById("txtEmail");

    var txtTelefone = document.getElementById("txtTelefone");

    var slcGenero = document.getElementById("slcGenero");

    var txtSenha = document.getElementById("txtSenha");

    

    txtnome.focus();


    btnCadastrar.onclick = function (e) {

        e.preventDefault();

        var nome = txtnome.value;

        var Sobrenome = txtSobrenome.value;

        var Email = txtEmail.value;

        var telefone = txtTelefone.value;

        var Genero = slcGenero.value;

        var Senha = txtSenha.value;

        if (nome == "") {
            exibirMensagemErro("Informe o nome.");


        }

        else if (Sobrenome == "") {
            exibirMensagemErro("Informe o Sobrenome.");
        }

        else if (Email == "") {
            exibirMensagemErro("Informe o Email.");

        }

        else if (telefone == "") {

            exibirMensagemErro("Informe o telefone.");
        }

        else if (Senha == "") {

            exibirMensagemErro("Informe a Senha.");
        }

        else {
           cadastrar(nome, Sobrenome, Email, telefone, Genero, Senha);
        }
    };

    function exibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);

        
    }

    function cadastrar(nome, Sobrenome, Email, telefone, Genero, Senha) {

        alert("O cadastro para o usuario " + Email + " foi realizado com sucesso");
    };








   
}