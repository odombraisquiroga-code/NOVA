import { novaKnowledgeAnswer } from "./nova_knowledge.js";
const SUPABASE_URL = "https://kxfwropbftermtlbxrxe.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_n4heHy0vMAWmmZevlnF7yw_hrr8jzUg";

let db = null;
let currentUser = null;
let guestMode = false;

const authPanel = document.getElementById("authPanel");
const appPanel = document.getElementById("appPanel");
const authMessage = document.getElementById("authMessage");
const memoryMessage = document.getElementById("memoryMessage");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const chat = document.getElementById("chat");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");

const memoryForm = document.getElementById("memoryForm");
const memoryInput = document.getElementById("memoryInput");
const memoryList = document.getElementById("memoryList");

const memorySection = document.getElementById("memorySection");

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = "message " + type;
  message.textContent = text;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}

function resetChat() {
  chat.replaceChildren();
  addMessage("¡Hola! Soy NOVA. 💙 ¿En qué puedo ayudarte?", "bot");
}

function respondNOVA(text) {

function respondNOVA(text) {
  const q = text.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  // Respuestas básicas
  if (q.includes("hola")) return "¡Holaaa! ✨ ¿Qué tal estás?";
  if (q.includes("como estas")) return "¡Estoy genial! Gracias por preguntar 💙";
  if (q.includes("quien eres")) return "Soy NOVA, tu asistente virtual. 🌟";
  if (q.includes("que haces")) return "Estoy aquí para charlar y ayudarte.";
  if (q.includes("chiste")) return "¿Qué hace una abeja en el gimnasio? ¡Zum-ba! 😂";
  if (q.includes("estudiar")) return "¡Vamos poco a poco! Podemos organizar tus estudios. 📚";
  if (q.includes("musica")) return "¡La música puede cambiar el día! ¿Qué tipo te gusta?";
  if (q.includes("videojuegos")) return "¡Los videojuegos son geniales! ¿Cuál estás jugando?";
  if (q.includes("triste")) return "Siento que estés teniendo un día difícil. ¿Quieres contarme?";
  if (q.includes("gracias")) return "¡De nada! 💙";
  if (q.includes("adios")) return "¡Hasta pronto! ✨";

  // CONSULTAR EL CONOCIMIENTO DE NOVA
  const knowledge = novaKnowledgeAnswer(text);

  if (
    knowledge &&
    !knowledge.startsWith("No encuentro esa información")
  ) {
    return knowledge;
  }

  return "Todavía no tengo información sobre eso. ¡Pero puedes enseñármelo! 💙";
}
  

  

// CONEXIÓN CON SUPABASE
try {
  if (
    SUPABASE_URL !== "TU_API_URL" &&
    SUPABASE_KEY !== "TU_PUBLISHABLE_KEY" &&
    window.supabase
  ) {
    db = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_KEY
    );
  }
} catch (error) {
  console.error("Error de Supabase:", error);
}

// MODO INVITADO
document.getElementById("guestButton").addEventListener("click", function() {
  guestMode = true;
  currentUser = null;

  authPanel.hidden = true;
  appPanel.hidden = false;
  memorySection.hidden = true;

  document.getElementById("userLabel").textContent =
    "✨ Estás en modo invitado. No se guardan tus conversaciones.";

  memoryList.replaceChildren();
  resetChat();
});

// VOLVER AL INICIO
function showLogin() {
  guestMode = false;
  currentUser = null;

  authPanel.hidden = false;
  appPanel.hidden = true;

  memoryList.replaceChildren();
  resetChat();
}

// MODO PERSONAL
async function enterPersonalMode(user) {
  guestMode = false;
  currentUser = user;

  authPanel.hidden = true;
  appPanel.hidden = false;
  memorySection.hidden = false;

  document.getElementById("userLabel").textContent =
    "💙 Modo personal: " + user.email;

  resetChat();
  await loadMemories();
}

// REGISTRARSE
document.getElementById("signUpButton").addEventListener("click", async function() {
  if (!db) {
    authMessage.textContent = "No se pudo conectar con Supabase. Comprueba la configuración.";
    return;
  }

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || password.length < 8) {
    authMessage.textContent = "Introduce un correo y una contraseña de al menos 8 caracteres.";
    return;
  }

  authMessage.textContent = "Creando cuenta...";

  const { data, error } = await db.auth.signUp({
    email,
    password
  });

  if (error) {
    authMessage.textContent = error.message;
  } else if (data.session) {
    await enterPersonalMode(data.user);
  } else {
    authMessage.textContent = "Revisa tu correo para confirmar tu cuenta.";
  }
});

// INICIAR SESIÓN
document.getElementById("signInButton").addEventListener("click", async function() {
  if (!db) {
    authMessage.textContent = "No se pudo conectar con Supabase. Comprueba la configuración.";
    return;
  }

  authMessage.textContent = "Iniciando sesión...";

  const { data, error } = await db.auth.signInWithPassword({
    email: emailInput.value.trim(),
    password: passwordInput.value
  });

  if (error) {
    authMessage.textContent = error.message;
  } else {
    await enterPersonalMode(data.user);
  }
});

// CERRAR SESIÓN O SALIR DE INVITADO
document.getElementById("logoutButton").addEventListener("click", async function() {
  if (guestMode) {
    showLogin();
    return;
  }

  if (db) {
    await db.auth.signOut();
  }

  showLogin();
});

// CARGAR RECUERDOS
async function loadMemories() {
  if (!db || !currentUser || guestMode) return;

  memoryMessage.textContent = "Cargando recuerdos...";

  const { data, error } = await db
    .from("nova_memories")
    .select("id, content")
    .order("created_at", { ascending: false });

  if (error) {
    memoryMessage.textContent = "No se pudieron cargar los recuerdos.";
    return;
  }

  memoryList.replaceChildren();

  data.forEach(function(memory) {
    const item = document.createElement("li");
    const content = document.createElement("span");
    const deleteButton = document.createElement("button");

    content.textContent = memory.content;
    deleteButton.textContent = "Eliminar";

    deleteButton.addEventListener("click", async function() {
      const { error } = await db
        .from("nova_memories")
        .delete()
        .eq("id", memory.id);

      if (error) {
        memoryMessage.textContent = "No se pudo eliminar.";
      } else {
        await loadMemories();
      }
    });

    item.append(content, " ", deleteButton);
    memoryList.appendChild(item);
  });

  memoryMessage.textContent = data.length + " recuerdo(s) guardado(s).";
}

// GUARDAR RECUERDOS
memoryForm.addEventListener("submit", async function(event) {
  event.preventDefault();

  if (!db || !currentUser || guestMode) return;

  const content = memoryInput.value.trim();
  if (!content) return;

  memoryMessage.textContent = "Guardando...";

  const { error } = await db
    .from("nova_memories")
    .insert({ content });

  if (error) {
    memoryMessage.textContent = "No se pudo guardar el recuerdo.";
    return;
  }

  memoryInput.value = "";
  await loadMemories();
});

// CHAT
chatForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");

  setTimeout(function() {
    addMessage(respondNOVA(text), "bot");
  }, 400);

  userInput.value = "";
});

// RECUPERAR SESIÓN
async function initializeNOVA() {
  if (!db) {
    showLogin();
    authMessage.textContent =
      "El modo invitado está disponible. Para usar el modo personal, revisa la conexión.";
    return;
  }

  const { data, error } = await db.auth.getSession();

  if (error) {
    showLogin();
    return;
  }

  if (data.session) {
    await enterPersonalMode(data.session.user);
  } else {
    showLogin();
  }
}

if (db) {
  db.auth.onAuthStateChange(function(event, session) {
    if (event === "SIGNED_OUT") {
      showLogin();
    }
  });
}

initializeNOVA();
