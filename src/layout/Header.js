
const bindEventsHeader = () => {
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
<nav class="container flex flex-row items-center justify-between">
    <!-- logo wrapper -->
    <a href="/" class="max-w-max">
        <svg class="size-10">
            <use href="#logo-icon"></use>
        </svg>
    </a>
    
    <!-- navigation and theme wrapper -->
    <ul class="flex max-md:mobile-nav md:flex-row md:gap-6 md:items-center">
        <li>
            <a href="">Home</a>
        </li>
        <li>
            <a href="">Services</a>
        </li>
        <li>
            <a href="">Projects</a>
        </li>
        <li>
            <a href="">About Us</a>
        </li>
        <li>
            <span id="change-theme" class="cursor-pointer">
                <svg class="size-6 hidden dark:inline-block">
                    <use href="#sun-icon"></use>
                </svg>
                <svg class="size-6 dark:hidden">
                    <use href="#moon-icon"></use>
                </svg>
            </span>
        </li>
    </ul>
    
    <!-- bars icon -->
    <span class="md:hidden cursor-pointer bg-grey-10 p-3 border border-grey-12 rounded-full">
        <svg class="size-5 text-txt-primary">
            <use href="#bars-icon"></use>
        </svg>
    </span>
</nav>`
};

export {bindEventsHeader};