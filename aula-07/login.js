window.onload = function (e) {

    var btnEntrar = document.getElementById("btnEntrar");

    var txtEmail = document.getElementById("txtEmail");

    var txtSenha = document.getElementById("txtSenha");

    txtEmail.focus();

    btnEntrar.onclick = function (e) {

        e.preventDefault();

        var Email = txtEmail.value;

        var Senha = txtSenha.value;

        if (Email == "") {
            exibirMensagemErro("Informe o Email.");
        }
        else if (Senha == "") {
            exibirMensagemErro("Informe a Senha.");
        }

        else {
            realizarLogin(Email, Senha);
        }


        function exibirMensagemErro(mensagem) {

            var spnErro = document.getElementById("spnErro");

            spnErro.style.display = "block";

            setTimeout(function () {
                spnErro.style.display = "none";
            }, 5000);

        }

        function realizarLogin(Email, Senha) {
            alert("O login foi realizado para o usuario " + Email);
        }


    }

}


