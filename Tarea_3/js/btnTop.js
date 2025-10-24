// Mostrar botón al hacer scroll
const btnTop = document.getElementById("btnTop");
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
};

// Volver arriba suavemente
btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});