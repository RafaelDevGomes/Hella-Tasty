function modoNoturno() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
}

window.onload = function () {
    if (localStorage.getItem("tema") === "escuro") {
        document.body.classList.add("dark-mode");
    }
}