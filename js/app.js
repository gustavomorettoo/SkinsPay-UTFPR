import { componenteHeader } from "../componentes/header.js";
import { componenteFooter } from "../componentes/footer.js";

window.onload = function() {
    const header = document.getElementById("header");
    header.innerHTML = componenteHeader();

    const footer = document.getElementById("footer");
    footer.innerHTML = componenteFooter();
};