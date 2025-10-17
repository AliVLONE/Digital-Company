const bindEventsHeader = () => {
    const navMenuBtn = document.getElementById("nav-menu-btn");
    const themeBtn = document.getElementById("change-theme");
    const navMenu = document.getElementById("nav-menu");
    const overlay = document.getElementById("overlay");

    // links and pathname for active classes in nav menu
    const links = document.querySelectorAll("#nav-menu a");
    const pathname = window.location.pathname;

    // theme login and variables
    const resolveTheme = () => {
        const local = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return local === "dark" || (!local && prefersDark) ? "dark" : "light";
    };

    let theme = resolveTheme();

    // change theme handler
    const changeTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        theme = newTheme;
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    }

    // add and remove active classes
    for (const link of links) link.classList.toggle("text-violet-500", link.getAttribute("href") === pathname);

    // toggle menu in mobile size
    const toggleNavMenu = (flag) => {
        navMenu.style.left = flag ? "0" : "-240px"
        navMenu.dataset.openMenu = flag ? "open" : "close"
        overlay.classList.toggle("hidden");
    }

    themeBtn.addEventListener("click", changeTheme); // change theme event
    navMenuBtn.addEventListener("click", toggleNavMenu.bind(null, true)); // open nav menu
    overlay.addEventListener("click", toggleNavMenu.bind(null, false)); // close nav menu
}

function Header() {
    return `
<div id="overlay" class="hidden z-10 fixed inset-0 w-full h-screen bg-black/70"></div>
<nav class="container flex flex-row items-center justify-between">
    <!-- logo wrapper -->
    <a href="/" class="max-w-max hover:opacity-100">
        <svg class="size-10">
            <use href="#logo-icon"></use>
        </svg>
    </a>
    
    <!-- navigation and theme wrapper -->
    <ul data-open-menu="close" id="nav-menu" class="flex max-md:mobile-nav md:flex-row md:gap-6 md:items-center">
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/services">Services</a>
        </li>
        <li>
            <a href="/projects">Projects</a>
        </li>
        <li>
            <a href="/about-us">About Us</a>
        </li>
        
        <!-- theme button -->
        <li class="max-w-max bg-grey-10 p-1.5 border border-grey-12 rounded-full">
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
    <span id="nav-menu-btn" class="md:hidden cursor-pointer bg-grey-10 p-3 border border-grey-12 rounded-full">
        <svg class="size-5.5 text-txt-primary">
            <use href="#bars-icon"></use>
        </svg>
    </span>
</nav>`
}

export default Header;
export {bindEventsHeader};