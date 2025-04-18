function createFooter() {
    return `<footer>
        <p>Integrantes do projeto: Ana Caroline Henschel, Christian Alves dos Santos e Nicolle Formigari Poncio</p>
    </footer>`
}

function changeStyle(value) {
    const form = document.getElementById("updateForm");

    if (form) {
        if (value === 'custom') {
            form.classList.add("custom-style");
        } else {
            form.classList.remove("custom-style");
        }
    }
}

document.getElementById("footer").innerHTML = createFooter();