import "./includes.js"

window.addEventListener("DOMContentLoaded", () => {
    const dataPage = document.body.dataset.page;

    if (dataPage) {
        import(`@/pages/${dataPage}.js`)
            .then(mod => {
                if (mod) mod.init()
            })
            .catch(err => console.log(err));
    }
})
