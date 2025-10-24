export default function OurWorksBox({icon, title, description, category, date}) {
    return `
<div class="p-6 border border-grey-40/40 rounded-2xl space-y-10">
    <div class="relative flex items-center justify-center px-5 py-15 rounded-2xl border border-grey-12/50">
        <img class="absolute inset-0 size-full opacity-10" src="/src/assets/img/home/Vector.webp" alt="vector svg">
        
        <svg class="size-20 opacity-20">
            <use href="#${icon}-icon"></use>
        </svg>
        
        <button class="absolute -bottom-[10%] flex flex-row gap-4 items-center text-xs px-5 py-3.5 rounded-full bg-white/10 backdrop-blur-xs border border-grey-12" type="button">
            View Projects Details
            
            <svg class="size-4">
                <use href="#smallRight-icon"></use>
            </svg>
        </button>
    </div>

    <!-- info and details -->
    <div class="space-y-4">
        <h3 class=" font-medium xs:text-lg">${title}</h3>
        <div class="flex flex-col gap-2 xs:flex-row xs:justify-between">
            <span class="text-sm font-light">Category: ${category}</span>
            <span class="text-sm fonl-light">${date}</span>
        </div>  
        <p class="sub-text">
            ${description}
        </p>
    </div>
</div>`
}
