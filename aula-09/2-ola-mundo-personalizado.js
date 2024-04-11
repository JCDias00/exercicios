window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var txt1 = document.getElementById("txtnome");

    btn1.onclick = function (e) {

        var nome = txtnome.value;

        olaMundoPersonalizado(nome);

        

    }

    function olaMundoPersonalizado(nome) {

        // WARNING: For GET requests, body is set to null by browsers.

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44348/api/aula8/olaMundoPersonalizado?nome="+ nome);

        xhr.send();

    }

}