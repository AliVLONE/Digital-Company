export default function WhyUsReason({icon, title, text}) {
    return `
<div class="space-y-5">
    <!-- icon wrapper -->
    <div class="p-3.5 rounded-full border-1 border-grey-30">
        <svg class="size-6">
            <use href="#${icon}-icon"></use>
        </svg>
    </div>
    
    <!-- info wrapper -->
    <div>
        <h3>${title}</h3>
        <p class="sub-text">${text}</p>
    </div>
    
    <!-- link wrapper -->
    <div class="border border-grey-12 rounded-full pl-4 py-2.5 pr-2.5">
        Learn More
        <span class="bg-grey-10">
            <svg class="size-4">
                <use href="#smallRight-icon"></use>
            </svg>
        </span>
    </div>
</div>`
}