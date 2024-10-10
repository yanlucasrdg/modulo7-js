const alerta = document.querySelector(".msg-alert");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const button = document.querySelector("#Buttom");

button.addEventListener("click", function (e) {
    e.preventDefault();

    const num1 = parseInt(document.querySelector("#num-1").value);
    const num2 = parseInt(document.querySelector("#num-2").value);

    if (num1 < num2) {
        alerta.classList.remove("msg-alert-red");
        alerta.classList.add("msg-alert-green");
        alerta.innerHTML = "Tudo OK! O número 2 é maior!";
    } 
    else {
    alerta.classList.add("msg-alert-red");

    alerta.innerHTML = "Tente novamente! O número 1 é maior!";
    }
});