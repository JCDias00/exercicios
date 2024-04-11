window.onload = function (e) {

    var txtEmail = document.getElementById("txtEmail");

    var btnEsqueceuSenha = document.getElementById("btnEsqueceu-Senha");

    txtEmail.focus();

    btnEsqueceuSenha.onclick = function (e) {

        e.preventDefault();

        var Email = txtEmail.value;


        

        if (Email == "") {

            exibirMensagemErro("Por favor, informe o seu e-mail");
        }

        else {

            enviarEmail(Email);
        }

        function exibirMensagemErro(mensagem) {

            var spnErro = document.getElementById("spnErro");

            spnErro.innerText = mensagem;

            spnErro.style.display = "block";

            setTimeout(function () {

                spnErro.style.display = "none";
            }, 5000);
        }
    }

    function enviarEmail(Email) {

        alert("O e-mail foi enviado com sucesso!");
    }
}