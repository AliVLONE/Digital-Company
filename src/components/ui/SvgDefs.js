// Header icons
const HeaderIcons = () => {
    return `
<!-- logo -->
<symbol id="logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 55" fill="none">
    <path d="M10.5189 54.5V43.3351H20.4535C22.9371 43.3351 25.1772 42.9703 27.1739 42.2405C29.1705 41.4622 30.875 40.3919 32.2873 39.0297C33.6995 37.6189 34.7709 35.9405 35.5014 33.9946C36.2318 32 36.5971 29.8108 36.5971 27.427C36.5971 24.9459 36.2318 22.7324 35.5014 20.7865C34.7709 18.8405 33.6995 17.1865 32.2873 15.8243C30.875 14.4622 29.1705 13.4405 27.1739 12.7595C25.1772 12.0297 22.9371 11.6649 20.4535 11.6649H10.5189V0.5H19.796C24.6172 0.5 28.8296 1.20541 32.4333 2.61622C36.0371 4.02703 39.0564 5.94865 41.4913 8.38108C43.9262 10.8135 45.7281 13.6108 46.8969 16.773C48.1143 19.8865 48.7231 23.1703 48.7231 26.6243V28.2297C48.7231 31.4405 48.1143 34.627 46.8969 37.7892C45.7281 40.9027 43.9262 43.7243 41.4913 46.2541C39.0564 48.7351 36.0371 50.7297 32.4333 52.2378C28.8296 53.7459 24.6172 54.5 19.796 54.5H10.5189ZM0 54.5V0.5H11.9799V54.5H0Z" fill="var(--color-logo-fill)"/>
    <path d="M23.8865 54.2081L42.0754 25.8216L42.2215 27.0622L25.4205 0.937866H38.5691L48.942 17.5757H50.6221L60.8488 0.937866H73.6322L56.7581 27.2081L56.539 26.0406L75.3123 54.2081H62.0906L49.9646 35.3811H48.2115L36.6699 54.2081H23.8865Z" fill="var(--color-logo-stroke)"/>
</symbol>
<!-- sun -->
<symbol id="sun-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</symbol>
<!-- moon -->
<symbol id="moon-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</symbol>
<!-- bars -->
<symbol id="bars-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</symbol>
`
}

const HomeIcons = () => {
    return `
<!-- smallRight -->
<symbol id="smallRight-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</symbol>`
}

export default function SvgDefs() {
    const headerIcon = HeaderIcons()
    const homeIcons = HomeIcons()

    return headerIcon + homeIcons
}