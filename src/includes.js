import "@/styles/global.css";
import Header, {bindEventsHeader} from "@layout/Header.js";
import SvgDefs from "@components/ui/SvgDefs.js";

// include header
document.getElementById("header").innerHTML = Header();
bindEventsHeader();

// include svg icons symbol
document.getElementById("svg-defs").innerHTML = SvgDefs();
