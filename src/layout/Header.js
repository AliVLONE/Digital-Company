function bindEvents() {
    let theme = null;
    const localTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const themeBtn = document.getElementById("change-theme")

    theme = localTheme === "dark" || (!localTheme && prefersDark) ? "dark" : "light";

    const changeTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        theme = newTheme;
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    }

    themeBtn.addEventListener("click", changeTheme);
}

export default function Header() {
    return `
<div>
<span id="change-theme" class="cursor-pointer">
    <svg class="size-8 hidden dark:inline-block">
        <use href="#sun-icon"></use>
    </svg>
    <svg class="size-8 dark:hidden">
        <use href="#moon-icon"></use>
    </svg>
</span>
    
    <h1 class="">Header</h1>
</div>`
};

export {bindEvents}