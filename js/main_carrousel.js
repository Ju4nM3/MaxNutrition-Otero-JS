const images = ["images/nutricion.jpg", "images/gym.jpg", "images/gym-1.jpg", "images/JustDoIt.jpg"];
let cont = 0;

function carrousel(contenedor) {
  contenedor.addEventListener("click", (e) => {
    let atras = contenedor.querySelector("#imageReverseArrow");
    let continuar = contenedor.querySelector("#imageContinueArrow");
    let img = contenedor.querySelector("#img");
    tgt = e.target;

    if (tgt == atras) {
      if (cont > 0) {
        img.src = images[cont - 1];
        cont--;
      } else {
        img.src = images[images.length - 1];
        cont = images.length - 1;
      }
    } else if (tgt == continuar) {
      if (cont < images.length - 1) {
        img.src = images[cont + 1];
        cont++;
      } else {
        img.src = images[0];
        cont = 0;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let contenedor = document.querySelector("#imgContainer");
  carrousel(contenedor);
});
