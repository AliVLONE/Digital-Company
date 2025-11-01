import "@/styles/global.css";
import Header, {bindEventsHeader} from "@layout/Header.js";
import SvgDefs from "@components/ui/SvgDefs.js";

const initLayout = () => {
    document.body.insertAdjacentHTML("afterbegin", `<svg class="hidden" id="svg-defs"></svg>`);
    document.getElementById("header").innerHTML = Header();
    document.getElementById("svg-defs").innerHTML = SvgDefs();

    // biding events
    bindEventsHeader();
};

window.addEventListener("DOMContentLoaded", initLayout);