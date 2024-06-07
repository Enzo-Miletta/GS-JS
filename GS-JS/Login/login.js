function customAlert(msg) {

    var alertBox = document.createElement("div");


    alertBox.style.position = "fixed";
    alertBox.style.left = "50%";
    alertBox.style.top = "50%";
    alertBox.style.transform = "translate(-50%, -50%)";
    alertBox.style.backgroundColor = "pink";
    alertBox.style.padding = "20px";
    alertBox.style.zIndex = "1000";
    alertBox.style.borderRadius = "8px";
    alertBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";


    alertBox.textContent = msg;


    document.body.appendChild(alertBox);

    setTimeout(function() {
        document.body.removeChild(alertBox);
    }, 3000);
}


customAlert("Bem vindo! Insira seu Usuário e Senha.");




document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;

    var password = document.getElementById("password").value;

    if (username === "1234" && password === "1234") {

        function customAlert(msg) {

            var alertBox = document.createElement("div");


            alertBox.style.position = "fixed";
            alertBox.style.left = "50%";
            alertBox.style.top = "50%";
            alertBox.style.transform = "translate(-50%, -50%)";
            alertBox.style.backgroundColor = "pink";
            alertBox.style.padding = "20px";
            alertBox.style.zIndex = "1000";
            alertBox.style.borderRadius = "8px";
            alertBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";


            alertBox.textContent = msg;


            document.body.appendChild(alertBox);

            setTimeout(function() {
                document.body.removeChild(alertBox);
            }, 3000);
        }


        customAlert("Usuário 01 Entrou!");

    } else if (username === "" && password === "") {
        function customAlert(msg) {

            var alertBox = document.createElement("div");


            alertBox.style.position = "fixed";
            alertBox.style.left = "50%";
            alertBox.style.top = "50%";
            alertBox.style.transform = "translate(-50%, -50%)";
            alertBox.style.backgroundColor = "pink";
            alertBox.style.padding = "20px";
            alertBox.style.zIndex = "1000";
            alertBox.style.borderRadius = "8px";
            alertBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";


            alertBox.textContent = msg;


            document.body.appendChild(alertBox);

            setTimeout(function() {
                document.body.removeChild(alertBox);
            }, 3000);
        }


        customAlert("Campos Vazios. Insira um Usuário e Senha.");
    } else {

        function customAlert(msg) {

            var alertBox = document.createElement("div");


            alertBox.style.position = "fixed";
            alertBox.style.left = "50%";
            alertBox.style.top = "50%";
            alertBox.style.transform = "translate(-50%, -50%)";
            alertBox.style.backgroundColor = "pink";
            alertBox.style.padding = "20px";
            alertBox.style.zIndex = "1000";
            alertBox.style.borderRadius = "8px";
            alertBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";


            alertBox.textContent = msg;


            document.body.appendChild(alertBox);

            setTimeout(function() {
                document.body.removeChild(alertBox);
            }, 3000);
        }


        customAlert("Usuário ou Senha Incorretos.");
    }

});