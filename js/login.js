function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    if(email.value == "admin@admin.com" && senha.value == "pedro123"){
        localStorage.setItem("acesso", true);
        alert("usuário autenticado!")
        window.location.href = "index.html";
    } else{
        alert("Usuário ou senha inválidos!")
    }
}