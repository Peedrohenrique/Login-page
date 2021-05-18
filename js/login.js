function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    if(email.value == "hendrio" || "paulo" && senha.value == "34970994" || "@123"){
        localStorage.setItem("acesso", true);
        alert("usuário autenticado!")
        window.location.href = "https://www.google.com/";
    } else{
        alert("Usuário ou senha inválidos!")
    }
}