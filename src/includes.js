import "@/styles/global.css";
import Header, {bindEventsHeader} from "@layout/Header.js";
import SvgDefs from "@components/ui/SvgDefs.js";

window.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML("afterbegin", `<svg class="hidden" id="svg-defs"></svg>`)
    // include header
    document.getElementById("header").innerHTML = Header();
    bindEventsHeader();

    // include svg icons symbol
    document.getElementById("svg-defs").innerHTML = SvgDefs();
});
