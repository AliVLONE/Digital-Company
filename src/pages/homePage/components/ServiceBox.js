export default function ServiceBox({icon, title, description}) {
    return `
<div class="relative space-y-5 text-center px-6 pt-12 pb-6 border border-grey-50/20 rounded-5 rounded-2xl overflow-hidden">
    <img class="-z-10 absolute inset-0 -top-20 rotate-45 size-full opacity-10" src="/src/assets/img/home/Vector.webp" alt="vector">

    <div class="relative"> 
        <!-- icon and cricle borders -->
        <div class="max-w-max mx-auto bg-grey-12/40 border border-violet-500 dark:border-grey-50 rounded-full p-2">
            <div class="border border-violet-500 dark:border-grey-50 rounded-full p-2">
                <div class="border border-violet-500 dark:border-grey-50 rounded-full p-2">
                    <svg class="text-violet-500 size-5 dark:text-txt-primary">
                        <use href="#${icon}-icon"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    
    <div class="space-y-6">
        <h3>${title}</h3>
        <p class="sub-text">${description}</p>
       
        <div class="px-5 py-3.5 max-w-max mx-auto flex flex-row justify-center items-center gap-2 bg-black/20 dark:bg-grey-10 border border-transparent dark:border-grey-15 rounded-full text-sm">
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