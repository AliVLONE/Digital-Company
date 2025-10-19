import WhyUsReason from "@components/homePageComponents/WhyUsReason"

export const init = () => {
    const whyUsReasonElem = document.getElementById("why-us-reason");

    const whyUsReasonData = [
        {icon: "star", title: "Expertise That Drives Results", text: "Our team of seasoned professionals brings years of experience and expertise to the table."},
        {icon: "layout", title: "Tailored Business Solutions ", text: "We understand that every business is unique. That's why our solutions are customized."},
        {icon: "clickEffect", title: "Cutting-Edge Web Design", text: "Leave a lasting impression on your audience with our top-notch web design services."},
        {icon: "thunder", title: "Mobile-First Approach", text: "In today's mobile-centric world, we prioritize mobile-first design to ensure your website."},
        {icon: "lamp", title: "Marketing Strategies", text: "Our data-driven marketing strategies allow us to target the right audience with precision"},
        {icon: "phone", title: "Search Engine Optimization", text: "(SEO) Mastery Boost your online visibility with our expert SEO techniques."}
    ]

    const wrapper = whyUsReasonData.map(data => {
        return (
            WhyUsReason({...data})
        )
    })

    whyUsReasonElem.insertAdjacentHTML("beforeend", wrapper.join(""));
}