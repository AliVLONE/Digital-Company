export default function WhyUsReason({icon, title, text}) {
    return `
<div class="space-y-5 text-center *:mx-auto">
    <!-- icon wrapper -->
    <div class="max-w-max relative rounded-full border-4 border-grey-30 overflow-hidden">
        <img class="absolute -z-10 inset-0 min-w-70 h-65 opacity-8"
         src="/src/assets/img/home/Vector.webp" alt="vector">
         
         <div class="bg-white/5 size-full p-3.5">
            <svg class="size-6">
                <use href="#${icon}-icon"></use>
            </svg>
        </div>
    </div>
    
    <!-- info wrapper -->
    <div>
        <h3>${title}</h3>
        <p class="sub-text">${text}</p>
    </div>
    
    <!-- link wrapper -->
    <div class="max-w-max border border-grey-12 rounded-full pl-4 py-2.5 pr-2.5 text-sm flex flex-row justify-between items-center gap-5">
        Learn More
        <div class="max-w-max bg-grey-10 rounded-full px-3.5 py-1.5">
            <svg class="size-4">
                <use href="#smallRight-icon"></use>
            </svg>
        </div>
    </div>
</div>`
}