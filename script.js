
window.addEventListener("load", (event) => {
    const button = document.getElementById("btn");
    button.addEventListener('mouseover', function () {
        button.style.position = 'absolute';
        const l = Math.ceil(Math.random() * 90)
        const t = Math.ceil(Math.random() * 90)
        console.log(l, t)
        button.style.left = `${l}%`;
        button.style.top = `${t}%`;
    });

    button.addEventListener('click', function () {
        const currentHeight = parseInt(button.style.height) || 40;
        const currentWidth = parseInt(button.style.width) || 150;
        button.style.height = `${currentHeight - 10}px`;
        button.style.width = `${currentWidth - 10}px`;
        console.log('Nouvelle taille:', button.style.height, button.style.width);
    });
});