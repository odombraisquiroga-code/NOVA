
const SUPABASE_URL = "https://kxfwropbftermtlbxrxe.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_n4heHy0vMAWmmZevlnF7yw_hrr8jzUg";

const db = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

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

let currentUser = null;
let guestMode = false;

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = "message " + type;
  message.textContent = text;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}

function respondNOVA(text) {
  const question = text.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  if (question.includes("hola")) return "¡Holaaa! ✨ ¿Qué tal estás?";
  if (question.includes("como estas")) return "¡Estoy genial! Gracias por preguntar 💙";
  if (question.includes("quien eres")) return "Soy NOVA, tu asistente virtual. 🌟";
  if (question.includes("que haces")) return "Estoy aquí para charlar y ayudarte.";
  if (question.includes("chiste")) return "¿Qué hace una abeja en el gimnasio? ¡Zum-ba! 😂";
  if (question.includes("estudiar")) return "¡Vamos poco a poco! Podemos organizar tus estudios. 📚";
  if (question.includes("musica")) return "¡La música puede cambiar el día! ¿Qué tipo te gusta?";
  if (question.includes("videojuegos")) return "¡Los videojuegos son geniales! ¿Cuál estás jugando?";
  if (question.includes("gracias")) return "¡De nada! 💙";
  if (question.includes("adios")) return "¡Hasta pronto! ✨";

  return "Todavía estoy aprendiendo. ¡Cuéntame más! 💙";
}

function resetChat() {
  chat.replaceChildren();
  addMessage("¡Hola! Soy NOVA. 💙 ¿En qué puedo ayudarte?", "bot");
}

function enterGuestMode() {
  guestMode = true;
  currentUser = null;

  authPanel.hidden = true;
  appPanel.hidden = false;

  document.getElementById("userLabel").textContent =
    "Modo invitado: no se guardan tus conversaciones.";

  document.getElementById("memorySection").hidden = true;
  resetChat();
}

async function enterPersonalMode(user) {
  guestMode = false;
  currentUser = user;

  authPanel.hidden = true;
  appPanel.hidden = false;

  document.getElementById("userLabel").textContent =
    "Modo personal: " + user.email;

  document.getElementById("memorySection").hidden = false;
  resetChat();
  await loadMemories();
}

function showLogin() {
  guestMode = false;
  currentUser = null;

  authPanel.hidden = false;
  appPanel.hidden = true;
  memoryList.replaceChildren();
  memoryMessage.textContent = "";
}

document.getElementById("guestButton").addEventListener("click", enterGuestMode);

document.getElementById("signUpButton").addEventListener("click", async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || password.length < 8) {
    authMessage.textContent = "Introduce un correo y una contraseña de al menos 8 caracteres.";
    return;
  }

  authMessage.textContent = "Creando cuenta...";

  const { data, error } = await db.auth.signUp({ email, password });

  if (error) {
    authMessage.textContent = error.message;
  } else if (data.session) {
    await enterPersonalMode(data.user);
  } else {
    authMessage.textContent = "Revisa tu correo para confirmar tu cuenta.";
  }
});

document.getElementById("signInButton").addEventListener("click", async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  authMessage.textContent = "Iniciando sesión...";

  const { data, error } = await db.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    authMessage.textContent = error.message;
  } else {
    await enterPersonalMode(data.user);
  }
});

document.getElementById("logoutButton").addEventListener("click", async () => {
  if (guestMode) {
    showLogin();
    return;
  }

  await db.auth.signOut();
  showLogin();
});

async function loadMemories() {
  if (!currentUser || guestMode) return;

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

  data.forEach(memory => {
    const item = document.createElement("li");
    const content = document.createElement("span");
    const deleteButton = document.createElement("button");

    content.textContent = memory.content;
    deleteButton.textContent = "Eliminar";

    deleteButton.addEventListener("click", async () => {
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

memoryForm.addEventListener("submit", async event => {
  event.preventDefault();

  if (!currentUser || guestMode) return;

  const content = memoryInput.value.trim();
  if (!content) return;

  memoryMessage.textContent = "Guardando...";

  const { error } = await db
    .from("nova_memories")
    .insert({ content });

  if (error) {
    memoryMessage.textContent = "Error al guardar el recuerdo.";
    return;
  }

  memoryInput.value = "";
  await loadMemories();
});

chatForm.addEventListener("submit", event => {
  event.preventDefault();

  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");

  setTimeout(() => {
    addMessage(respondNOVA(text), "bot");
  }, 400);

  userInput.value = "";
});

async function initializeNOVA() {
  const { data, error } = await db.auth.getSession();

  if (error) {
    authMessage.textContent = "No se pudo comprobar la sesión.";
    return;
  }

  if (data.session?.user) {
    await enterPersonalMode(data.session.user);
  } else {
    showLogin();
  }
}

db.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_OUT") {
    showLogin();
  }
});

initializeNOVA();
