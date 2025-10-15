const themeIcon = document.documentElement.classList.contains("dark")

function changeTheme() {
    const theme = localStorage.getItem("theme");
}

export default function Header() {
    return `
<div>
<span onclick="">
    <svg>
        <use href=#${themeIcon ? "sun" : "moon"}-icon></use>
    </svg>
</span>
    
    <h1 class="">Header</h1>
</div>`
};
