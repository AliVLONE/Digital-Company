import "@/styles/global.css";
import Header from "@layout/Header.js";
import SvgDefs from "@components/ui/SvgDefs.js";

document.getElementById("header").innerHTML = Header()
document.getElementById("svg-defs").innerHTML = SvgDefs()