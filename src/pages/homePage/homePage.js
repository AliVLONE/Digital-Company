import WhyUsReason from "./components/WhyUsReason";
import ServiceBox from "./components/ServiceBox";

// why us reason data
const whyUsReasonData = [
    {icon: "star", title: "Expertise That Drives Results", text: "Our team of seasoned professionals brings years of experience and expertise to the table."},
    {icon: "layout", title: "Tailored Business Solutions ", text: "We understand that every business is unique. That's why our solutions are customized."},
    {icon: "clickEffect", title: "Cutting-Edge Web Design", text: "Leave a lasting impression on your audience with our top-notch web design services."},
    {icon: "thunder", title: "Mobile-First Approach", text: "In today's mobile-centric world, we prioritize mobile-first design to ensure your website.", className: "hidden sm:block"},
    {icon: "lamp", title: "Marketing Strategies", text: "Our data-driven marketing strategies allow us to target the right audience with precision", className: "hidden sm:block"},
    {icon: "phone", title: "Search Engine Optimization", text: "(SEO) Mastery Boost your online visibility with our expert SEO techniques.", className: "hidden sm:block"}
];

// services box data
const servicesBoxData = [
    {icon: "code", title: "Web Development", description: "Unlock Your Online Potential In today's digital age, a powerful web presence is essential for any business."},
    {icon: "phone", title: "Mobile App Development", description: "Embrace Mobility with Confidence Mobile devices have revolutionized the way we interact with the world."},
    {icon: "clickEffect", title: "Web Design", description: "Elevate Your Brand Aesthetics Your website's design is a reflection of your brand's identity and values."},
    {icon: "thunder", title: "Digital Marketing", description: "Drive Your Business Forward In the vast digital landscape, standing out from the competition is crucial."},
];

export const init = () => {
    // home page variables
    const whyUsReasonElem = document.getElementById("why-us-reason");
    const servicesBoxElem = document.getElementById("services-box");

    // create whyUsReason template in wrapper
    const whyUsReasonWrapper = whyUsReasonData.map(data => {
        return (
            WhyUsReason({...data})
        )
    });

    // create servicesBox template in wrapper
    const servicesBoxWrapper = servicesBoxData.map(data => {
        return (
            ServiceBox({...data})
        )
    });

    whyUsReasonElem.insertAdjacentHTML("beforeend", whyUsReasonWrapper.join(""));
    servicesBoxElem.insertAdjacentHTML("beforeend", servicesBoxWrapper.join(""));
};