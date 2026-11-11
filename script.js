const chat = document.getElementById("chat");
const form = document.getElementById("chatForm");
const input = document.getElementById("userInput");

function agregarMensaje(texto, tipo) {
  const mensaje = document.createElement("div");
  mensaje.className = "message " + tipo;
  mensaje.textContent = texto;
  chat.appendChild(mensaje);
  chat.scrollTop = chat.scrollHeight;
}

function responderNOVA(texto) {
  const pregunta = texto.toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  if (pregunta.includes("hola")) {
    return "¡Holaaa! ✨ ¿Qué tal estás?";
  }

  if (pregunta.includes("como estas")) {
    return "¡Estoy genial! Gracias por preguntar 💙";
  }

  if (pregunta.includes("quien eres")) {
    return "Soy NOVA, tu asistente virtual. 🌟";
  }

  if (pregunta.includes("que haces")) {
    return "Estoy aquí para charlar, ayudarte y aprender contigo.";
  }

  if (pregunta.includes("chiste")) {
    return "¿Qué hace una abeja en el gimnasio? ¡Zum-ba! 😂";
  }

  if (pregunta.includes("triste")) {
    return "Siento que estés pasando por un momento difícil. ¿Quieres contarme qué ocurre?";
  }

  if (pregunta.includes("aburrido")) {
    return "¡Podemos jugar a adivinar palabras o inventar una historia! 🎮";
  }

  if (pregunta.includes("musica")) {
    return "¡La música puede cambiar el día! ¿Qué tipo te gusta?";
  }

  if (pregunta.includes("videojuegos")) {
    return "¡Los videojuegos son una pasada! ¿Cuál estás jugando?";
  }

  if (pregunta.includes("estudiar")) {
    return "¡Vamos poco a poco! Podemos organizar lo que tienes que estudiar. 📚";
  }

  if (pregunta.includes("gracias")) {
    return "¡De nada! 💙";
  }

  if (pregunta.includes("adios")) {
    return "¡Hasta pronto! Aquí estaré cuando vuelvas. ✨";
  }

  return "Todavía no sé responder a eso, pero podemos seguir charlando. 💙";
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const texto = input.value.trim();

  if (texto === "") return;

  agregarMensaje(texto, "user");

  const respuesta = responderNOVA(texto);

  setTimeout(function() {
    agregarMensaje(respuesta, "bot");
  }, 400);

  input.value = "";
  input.focus();
});
