function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    if(email.value == "admin" && senha.value == "admin"){
        localStorage.setItem("acesso",true);
        alert("usuário autenticado!")
        window.location.href = "pagina1.html"
    } else{
        alert("Usuário ou senha inválidos!")
    }
}
