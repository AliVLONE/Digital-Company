export default function ServiceBox({icon, title, description}) {
    return `
<div class="px-6 pt-12 pb-6 border border-grey-50 rounded-5">

    <div class="relative">
        <img class="-z-10 absolute inset-0 size-full" src="/src/assets/img/home/Vector.webp" alt="vector">
        
        <!-- icon and cricle borders -->
        <span class="border border-grey-50 rounded-full p-1.5">
            <span class="border border-grey-50 rounded-full p-1.5">
                <span class="border border-grey-50 rounded-full p-1.5">
                    <svg class="size-5">
                        <use id="#${icon}-icon"></use>
                    </svg>
                </span>
            </span>
        </span>
    </div>
    
    <div>
        <h3>${title}</h3>
        <p>${description}</p>
       
        <div class="flex flex-row items-center gap-2 border border-grey-15 bg-grey-10 rounded-full">
            Learn More
            <span>
                <svg>
                    <use id="#smallRight-icon"></use>
                </svg>
            </span>
        </div>
    </div>
</div>`
}