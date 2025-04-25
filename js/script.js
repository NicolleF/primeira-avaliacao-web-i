function createFooter() {
    return `<footer>
                <p>Integrantes do projeto: Ana Caroline Henschel, Christian Alves dos Santos e Nicolle Formigari Poncio</p>
            </footer>`
}

function createHeader() {
    const login = localStorage.getItem("login") || "Usuário não autenticado";
    const autenticado = localStorage.getItem("autenticado") || "false";
    return `<header>
                <a href="index.html"><img src="images/logo petshop.png" alt="Logo" class="logo"></a>
                <a href=${autenticado == "true" ? "cadastro.html" : ""}><img src="images/perfil-vazio.jpg" alt="Usuario" class="user-profile">
                    <p class="user-name">${login}</p>
                </a>
            </header>`
}

function createNav() {
    return `<nav class="nav-principal">
                <ul class="menu">
                    <li>Serviços
                        <ul>
                            <li><a href="">Banho</a></li>
                            <li><a href="">Tosa</a></li>
                        </ul>
                    </li>
                    <li>Produtos
                        <ul>
                            <li><a href="">Rações</a></li>
                            <li><a href="">Brinquedos</a></li>
                        </ul>
                    </li>
                    <li><a href="login.html">Login</a></li>
                </ul>
            </nav>`
}

function changeStyle(value) {
    const form = document.getElementById("updateForm");
    document.getElementById("footer").innerHTML = createFooter();

    if (form) {
        if (value === 'custom') {
            form.classList.add("custom-style-update-form");
        } else {
            form.classList.remove("custom-style-update-form");
        }
    }
}


window.onload = function () {
    const form = document.querySelector(".login-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); 
        
        const login = document.getElementById("login").value.trim();
        const senha = document.getElementById("senha").value.trim();
        
        localStorage.setItem("login", login);
        localStorage.setItem("senha", senha);
        localStorage.setItem("autenticado", true);
        window.location.href = "./index.html";
    });
};

document.getElementById("footer").innerHTML = createFooter();
document.getElementById("header").innerHTML = createHeader();
document.getElementById("nav").innerHTML = createNav();
