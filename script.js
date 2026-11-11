
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

  if (question.includes("hola")) {
    return "¡Holaaa! ✨ ¿Qué tal estás?";
  }

  if (question.includes("como estas")) {
    return "¡Estoy genial! Gracias por preguntar 💙";
  }

  if (question.includes("quien eres")) {
    return "Soy NOVA, tu asistente virtual. 🌟";
  }

  if (question.includes("que haces")) {
    return "Estoy aquí para charlar y ayudarte.";
  }

  if (question.includes("chiste")) {
    return "¿Qué hace una abeja en el gimnasio? ¡Zum-ba! 😂";
  }

  if (question.includes("estudiar")) {
    return "¡Vamos poco a poco! Podemos organizar tus estudios. 📚";
  }

  if (question.includes("musica")) {
    return "¡La música puede cambiar el día! ¿Qué tipo te gusta?";
  }

  if (question.includes("videojuegos")) {
    return "¡Los videojuegos son geniales! ¿Cuál estás jugando?";
  }

  if (question.includes("gracias")) {
    return "¡De nada! 💙";
  }

  if (question.includes("adios")) {
    return "¡Hasta pronto! ✨";
  }

  return "Todavía estoy aprendiendo. ¡Cuéntame más! 💙";
}

// REGISTRO
document.getElementById("signUpButton").addEventListener("click", async () => {
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
    return;
  }

  if (data.session) {
    authMessage.textContent = "¡Cuenta creada!";
  } else {
    authMessage.textContent =
      "Revisa tu correo para confirmar la cuenta antes de iniciar sesión.";
  }
});

// INICIAR SESIÓN
document.getElementById("signInButton").addEventListener("click", async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  authMessage.textContent = "Iniciando sesión...";

  const { error } = await db.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    authMessage.textContent = error.message;
  }
});

// CERRAR SESIÓN
document.getElementById("logoutButton").addEventListener("click", async () => {
  await db.auth.signOut();
});

// MOSTRAR APLICACIÓN
async function showApp(user) {
  currentUser = user;

  authPanel.hidden = true;
  appPanel.hidden = false;

  document.getElementById("userLabel").textContent =
    "Sesión iniciada: " + user.email;

  await loadMemories();
}

// MOSTRAR LOGIN
function showLogin() {
  currentUser = null;
  authPanel.hidden = false;
  appPanel.hidden = true;
  memoryList.replaceChildren();
}

// DETECTAR SESIÓN
db.auth.onAuthStateChange((event, session) => {
  if (session?.user) {
    showApp(session.user);
  } else {
    showLogin();
  }
});

// RECUPERAR RECUERDOS
async function loadMemories() {
  if (!currentUser) return;

  memoryMessage.textContent = "Cargando recuerdos...";

  const { data, error } = await db
    .from("nova_memories")
    .select("id, content, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    memoryMessage.textContent = "No se pudieron cargar los recuerdos.";
    return;
  }

  memoryList.replaceChildren();

  data.forEach((memory) => {
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

  memoryMessage.textContent =
    data.length + " recuerdo(s) guardado(s).";
}

// GUARDAR RECUERDO
memoryForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!currentUser) return;

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

// CHAT
chatForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");

  setTimeout(() => {
    addMessage(respondNOVA(text), "bot");
  }, 400);

  userInput.value = "";
});

// RECUPERAR SESIÓN AL ABRIR
async function initializeNOVA() {
  const { data, error } = await db.auth.getSession();

  if (error) {
    authMessage.textContent = "No se pudo comprobar la sesión.";
    return;
  }

  if (data.session?.user) {
    showApp(data.session.user);
  } else {
    showLogin();
  }
}

initializeNOVA();
