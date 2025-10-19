import WhyUsReason from "@components/homePageComponents/WhyUsReason"

export const init = () => {
    const whyUsReasonElem = document.getElementById("why-us-reason");

    const whyUsReasonData = [
        {icon: "star", title: "Expertise That Drives Results", text: "Our team of seasoned professionals brings years of experience and expertise to the table."}
    ]

    const wrapper = whyUsReasonData.map(data => {
        return (
            WhyUsReason({...data})
        )
    })

    whyUsReasonElem.insertAdjacentHTML("beforeend", wrapper.join(""));
}