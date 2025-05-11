document.addEventListener("DOMContentLoaded", () => {
    const mensajes = [
"Sé que no siempre coincidimos en lo que pensamos o sentimos, y que a veces nuestras diferencias parecen más grandes de lo que en verdad son ",
"Pero eso nunca ha cambiado lo mucho que me importa lo que te sucede ",
"Que no pensemos igual no significa que no deseemos lo mejor el uno para el otro ",
"A veces, en medio de todo, se escapan palabras que duelen…",
"Pero incluso en esos momentos, sigo estando dispuesto a escuchar, a conversar, y a buscar la manera de entendernos y sanar lo que haga falta ",
"Porque más allá de todo, sigue habiendo un cariño genuino y un deseo sincero de estar bien contigo ",
"Feliz día, madre!!!"
    ];
  
    const mensajeContenedor = document.getElementById("mensaje");
    let indice = 0;
  
    function mostrarMensaje() {
      mensajeContenedor.innerText = mensajes[indice];
      mensajeContenedor.style.opacity = 1;
  
      setTimeout(() => {
        mensajeContenedor.style.opacity = 0;
        indice++;
        if (indice < mensajes.length) {
          setTimeout(mostrarMensaje, 1000);
        }
      }, 5000);
    }
  
    mostrarMensaje();
  
    // 🌸 Generar pétalos cayendo
    function crearPetalo() {
      const petalo = document.createElement("div");
      petalo.classList.add("petalo");
  
      // Posición aleatoria horizontal
      petalo.style.left = Math.random() * 100 + "vw";
  
      // Tamaño y color opcional aleatorio
      const colores = ["#f9b3d1", "#f48fb1", "#e91e63", "#ff80ab"];
      petalo.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
      petalo.style.animationDuration = 5 + Math.random() * 3 + "s";
      petalo.style.opacity = 0.7 + Math.random() * 0.3;
  
      document.querySelector(".cielo").appendChild(petalo);
  
      // Quitar el pétalo después de caer
      setTimeout(() => petalo.remove(), 8000);
    }
  
    // 🌸 Crear pétalos de forma continua
    setInterval(crearPetalo, 300);
  });
  