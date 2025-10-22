export default function ServiceBox({icon, title, description}) {
    return `
<div class="relative space-y-6 text-center px-6 pt-12 pb-6 border border-grey-50 rounded-5">
    <img class="-z-10 absolute inset-0 size-full opacity-20" src="/src/assets/img/home/Vector.webp" alt="vector">

    <div class="relative"> 
        <!-- icon and cricle borders -->
        <div class="max-w-max mx-auto bg-grey-12/40 border border-grey-50 rounded-full p-2">
            <div class="border border-grey-50 rounded-full p-2">
                <div class="border border-grey-50 rounded-full p-2">
                    <svg class="size-5">
                        <use href="#${icon}-icon"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    
    <div>
        <h3>${title}</h3>
        <p class="sub-text">${description}</p>
       
        <div class="px-5 py-3.5 flex flex-row items-center gap-2 border border-grey-15 bg-grey-10 rounded-full text-sm">
            Learn More
            <div>
                <svg class="size-3">
                    <use href="#smallRight-icon"></use>
                </svg>
            </div>
        </div>
    </div>
</div>`
};