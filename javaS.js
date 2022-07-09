function changeFoto(n) {
    let allElementImages = document.querySelectorAll(".smallImage > img");
    for (let n = 0; n < allElementImages.length; n++) {
        const elementImage = allElementImages[n];
        elementImage.style.opacity = '100%';
    }
    document.querySelector('.bigSlider').style.backgroundImage = `url(images/${n}.jpg)`;
    document.querySelector('.img' + n).style.opacity = '50%';
}
let fotoCounter = 0;
const MAX_FOTO = 5;
document.querySelector('.next').addEventListener('click', () => {
    window.event.preventDefault();
    if (fotoCounter >= MAX_FOTO) {
        fotoCounter = 1;
    } else {
        fotoCounter++
    }
    let allElementImages = document.querySelectorAll(".smallImage > img");
    for (let fotoCounter = 0; fotoCounter < allElementImages.length; fotoCounter++) {
        const elementImage = allElementImages[fotoCounter];
        elementImage.style.opacity = '100%';
    }
    document.querySelector('.bigSlider').style.backgroundImage = `url(images/${fotoCounter}.jpg)`;
    document.querySelector('.img' + fotoCounter).style.opacity = '50%';
});
document.querySelector('.prev').addEventListener('click', () => {
    window.event.preventDefault();
    if (fotoCounter <= 1) {
        fotoCounter = MAX_FOTO;
    } else {
        fotoCounter--
    }
    let allElementImages = document.querySelectorAll(".smallImage > img");
    for (let fotoCounter = 0; fotoCounter < allElementImages.length; fotoCounter++) {
        const elementImage = allElementImages[fotoCounter];
        elementImage.style.opacity = '100%';
    }
    document.querySelector('.bigSlider').style.backgroundImage = `url(images/${fotoCounter}.jpg)`;
    document.querySelector('.img' + fotoCounter).style.opacity = '50%';
});
let timeout1 = setTimeout(displayAside, 2000);
function displayAside() {
    document.querySelector("#left1").style.width = "284px";
    document.querySelector("#btn1").style.right = "-219px";

}
