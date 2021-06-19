function entrar(){
    var email = document.getElementById("login");
    var senha = document.getElementById("password");
    
    if(email.value == "admin" && senha.value == "admin"){
        localStorage.setItem("acesso",true);
        alert("usuário autenticado!")
        window.location.href = "pagina1.html"
    } else{
        alert("Usuário ou senha inválidos!")
    }
}
