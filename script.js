
window.addEventListener("load", (event) => {
    const button = document.getElementById("btn");
    button.addEventListener('mouseover', function () {
        const l = Math.ceil(Math.random() * 90)
        const t = Math.ceil(Math.random() * 90)
        console.log(l, t)
        button.style.left = `${l}%`;
        button.style.top = `${t}%`;
    });
});