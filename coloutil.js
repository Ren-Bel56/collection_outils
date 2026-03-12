const menuibut = document.querySelector('#menuiserie');
menuibut.addEventListener('click', () => {
    const disp = document.createElement("div");
    disp.classList.add("dispo");
    disp.style.display = "flex";
    disp.style.position = "absolute";
    disp.style.top = "400px";
    disp.style.left = "78px";
    disp.style.width = "400px";
    disp.style.height = "400px";
    disp.innerHTML= "<h2>Menuiserie</h2><br><ul></ul><img src='images/outils 41 à 49.jpg' alt='outils de menuiserie'>";
    document.querySelector(".body").appendChild(disp);
});