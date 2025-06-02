// Efecto máquina de escribir
const mensaje = `Para el amor de mi vida:\n\nSi pudiera elegir un lugar seguro, sería a tu lado. Cuanto más tiempo estoy contigo, más te amo.\nEste texto es solo un ejemplo de demostración y no refleja sentimientos reales.\n\n— ¡I Love You!`;

function escribirTexto(id, texto, velocidad = 40) {
  let i = 0;
  const destino = document.getElementById(id);
  const escribir = () => {
    if (i < texto.length) {
      destino.innerHTML += texto.charAt(i) === '\n' ? '<br>' : texto.charAt(i);
      i++;
      setTimeout(escribir, velocidad);
    }
  };
  escribir();
}

// Generar corazones luego de crecer el tronco
function generarCorazones() {
  const tree = document.getElementById('heartTree');
  for (let i = 0; i < 120; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}px`;
    heart.style.animationDuration = `${3 + Math.random() * 3}s`;
    heart.style.background = `hsl(${Math.random() * 360}, 100%, 80%)`;
    tree.appendChild(heart);
  }
}

// Espera a que el tronco crezca para iniciar corazones y texto
setTimeout(() => {
  generarCorazones();
  escribirTexto("texto", mensaje, 35);
}, 2000);

// Reloj romántico
const fechaInicio = new Date("2024-06-01T00:00:00");
function actualizarReloj() {
  const ahora = new Date();
  const diff = ahora - fechaInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("reloj").textContent =
    `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}
setInterval(actualizarReloj, 1000);