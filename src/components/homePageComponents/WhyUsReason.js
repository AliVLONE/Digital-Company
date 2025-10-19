export default function WhyUsReason({icon, title, text}) {
    return `
<div>
    <!-- icon wrapper -->
    <div class="p-3.5 rounded-full border-1 border-grey-30">
        <svg>
            <use id="#${icon}-icon"></use>
        </svg>
    </div>
</div>
`
}