function createFooter() {
    return `<footer>
        <p>Integrantes do projeto: Ana Caroline Henschel, Christian Alves dos Santos e Nicolle Formigari Poncio</p>
    </footer>`
}

document.getElementById("footer").innerHTML = createFooter();

window.onload = function () {
    const form = document.querySelector(".login-form");
        form.addEventListener("submit", function (e) {
            e.preventDefault(); 

            const login = document.getElementById("login").value.trim();
            const senha = document.getElementById("senha").value.trim();
           
            localStorage.setItem("login", login);
            localStorage.setItem("autenticado", "true");
            window.location.href = "./index.html";
        });
};