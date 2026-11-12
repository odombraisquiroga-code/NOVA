// ==========================================
// NOVA — ASISTENTE VIRTUAL
// ==========================================

// Conexión con la base de conocimiento
import { novaKnowledgeAnswer } from "./nova_knowledge.js";

// ==========================================
// CONFIGURACIÓN DE SUPABASE
// ==========================================

const SUPABASE_URL = "https://kxfwropbftermtlbxrxe.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_n4heHy0vMAWmmZevlnF7yw_hrr8jzUg";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

let currentUser = null;
let guestMode = false;


// ==========================================
// ELEMENTOS HTML
// ==========================================

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

const guestButton = document.getElementById("guestButton");
const userLabel = document.getElementById("userLabel");

const signUpButton = document.getElementById("signUpButton");
const signInButton = document.getElementById("signInButton");
const logoutButton = document.getElementById("logoutButton");


// ==========================================
// MOSTRAR PANTALLAS
// ==========================================

function showApp() {
  if (authPanel) authPanel.style.display = "none";
  if (appPanel) appPanel.style.display = "block";
}

function showLogin() {
  if (authPanel) authPanel.style.display = "block";
  if (appPanel) appPanel.style.display = "none";
}


// ==========================================
// MENSAJES DEL CHAT
// ==========================================

function addMessage(author, message) {
  if (!chat) return;

  const messageElement = document.createElement("div");
  messageElement.className = "message";

  const authorElement = document.createElement("strong");
  authorElement.textContent = author + ": ";

  const textElement = document.createElement("span");
  textElement.textContent = message;

  messageElement.appendChild(authorElement);
  messageElement.appendChild(textElement);

  chat.appendChild(messageElement);
  chat.scrollTop = chat.scrollHeight;
}


// ==========================================
// RESPUESTAS DE NOVA
// ==========================================

function respondNOVA(text) {
  const question = text.toLowerCase().trim();

  // Consultar la base de conocimiento de Potato Club 2
  const knowledge = novaKnowledgeAnswer(question);

  // Si encuentra información, la devuelve
  if (!knowledge.startsWith("No encuentro esa información")) {
    return knowledge;
  }

  // Respuestas generales
  if (
    question.includes("hola") ||
    question.includes("buenas") ||
    question.includes("hey")
  ) {
    return "¡Hola! Soy NOVA. ¿Qué quieres saber?";
  }

  if (
    question.includes("cómo te llamas") ||
    question.includes("como te llamas")
  ) {
    return "Me llamo NOVA.";
  }

  if (
    question.includes("quién eres") ||
    question.includes("quien eres")
  ) {
    return "Soy NOVA, una asistente virtual.";
  }

  if (
    question.includes("qué puedes hacer") ||
    question.includes("que puedes hacer")
  ) {
    return "Puedo responder preguntas y consultar la información que tengo guardada sobre Potato Club 2.";
  }

  if (question.includes("gracias")) {
    return "¡De nada!";
  }

  if (
    question.includes("adiós") ||
    question.includes("adios") ||
    question.includes("hasta luego")
  ) {
    return "¡Hasta luego!";
  }

  return knowledge;
}


// ==========================================
// REGISTRO DE USUARIO
// ==========================================

if (signUpButton) {
  signUpButton.addEventListener("click", async () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
      authMessage.textContent = "Escribe tu correo y contraseña.";
      return;
    }

    authMessage.textContent = "Creando cuenta...";

    const { error } = await supabaseClient.auth.signUp({
      email,
      password
    });

    if (error) {
      authMessage.textContent = error.message;
      return;
    }

    authMessage.textContent =
      "Cuenta creada. Si recibes un correo de confirmación, sigue sus instrucciones.";
  });
}


// ==========================================
// INICIAR SESIÓN
// ==========================================

if (signInButton) {
  signInButton.addEventListener("click", async () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
      authMessage.textContent = "Escribe tu correo y contraseña.";
      return;
    }

    authMessage.textContent = "Iniciando sesión...";

    const { data, error } =
      await supabaseClient.auth.signInWithPassword({
        email,
        password
      });

    if (error) {
      authMessage.textContent = error.message;
      return;
    }

    currentUser = data.user;
    guestMode = false;

    await startNOVA();
  });
}


// ==========================================
// ENTRAR COMO INVITADO
// ==========================================

if (guestButton) {
  guestButton.addEventListener("click", async () => {
    currentUser = null;
    guestMode = true;

    await startNOVA();
  });
}


// ==========================================
// INICIAR NOVA
// ==========================================

async function startNOVA() {
  showApp();

  if (userLabel) {
    userLabel.textContent = guestMode
      ? "Modo invitado"
      : "Sesión iniciada";
  }

  if (memorySection) {
    memorySection.style.display = guestMode ? "none" : "block";
  }

  if (guestMode) {
    addMessage("NOVA", "¡Hola! Estás usando NOVA como invitado.");
  } else {
    addMessage("NOVA", "¡Hola! Tu sesión está iniciada.");
    await loadMemories();
  }
}


// ==========================================
// CERRAR SESIÓN
// ==========================================

if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    if (!guestMode) {
      const { error } = await supabaseClient.auth.signOut();

      if (error) {
        authMessage.textContent = error.message;
        return;
      }
    }

    currentUser = null;
    guestMode = false;

    showLogin();

    if (authMessage) {
      authMessage.textContent = "Has cerrado sesión.";
    }
  });
}


// ==========================================
// CHAT
// ==========================================

if (chatForm) {
  chatForm.addEventListener("submit", event => {
    event.preventDefault();

    const text = userInput.value.trim();

    if (!text) return;

    addMessage("Tú", text);

    userInput.value = "";

    const answer = respondNOVA(text);

    addMessage("NOVA", answer);
  });
}


// ==========================================
// GUARDAR RECUERDOS
// ==========================================

if (memoryForm) {
  memoryForm.addEventListener("submit", async event => {
    event.preventDefault();

    if (!currentUser) {
      memoryMessage.textContent =
        "Inicia sesión para guardar recuerdos.";
      return;
    }

    const content = memoryInput.value.trim();

    if (!content) {
      memoryMessage.textContent =
        "Escribe algo antes de guardarlo.";
      return;
    }

    memoryMessage.textContent = "Guardando...";

    const { error } = await supabaseClient
      .from("nova_memories")
      .insert([
        {
          user_id: currentUser.id,
          content
        }
      ]);

    if (error) {
      memoryMessage.textContent =
        "No se pudo guardar: " + error.message;
      return;
    }

    memoryInput.value = "";
    memoryMessage.textContent = "Recuerdo guardado.";

    await loadMemories();
  });
}


// ==========================================
// CARGAR RECUERDOS
// ==========================================

async function loadMemories() {
  if (!currentUser || !memoryList) return;

  memoryList.textContent = "Cargando recuerdos...";

  const { data, error } = await supabaseClient
    .from("nova_memories")
    .select("id, content, created_at")
    .eq("user_id", currentUser.id)
    .order("created_at", { ascending: false });

  if (error) {
    memoryList.textContent =
      "No se pudieron cargar los recuerdos: " + error.message;
    return;
  }

  memoryList.innerHTML = "";

  if (!data || data.length === 0) {
    memoryList.textContent =
      "Todavía no tienes recuerdos guardados.";
    return;
  }

  data.forEach(memory => {
    const memoryElement = document.createElement("div");
    memoryElement.className = "memory-item";

    const contentElement = document.createElement("span");
    contentElement.textContent = memory.content;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";

    deleteButton.addEventListener("click", async () => {
      await deleteMemory(memory.id);
    });

    memoryElement.appendChild(contentElement);
    memoryElement.appendChild(deleteButton);

    memoryList.appendChild(memoryElement);
  });
}


// ==========================================
// ELIMINAR RECUERDOS
// ==========================================

async function deleteMemory(memoryId) {
  if (!currentUser) return;

  const { error } = await supabaseClient
    .from("nova_memories")
    .delete()
    .eq("id", memoryId)
    .eq("user_id", currentUser.id);

  if (error) {
    memoryMessage.textContent =
      "No se pudo eliminar: " + error.message;
    return;
  }

  memoryMessage.textContent = "Recuerdo eliminado.";

  await loadMemories();
}


// ==========================================
// COMPROBAR SESIÓN
// ==========================================

async function checkSession() {
  const { data, error } =
    await supabaseClient.auth.getSession();

  if (error) {
    showLogin();
    return;
  }

  if (data.session) {
    currentUser = data.session.user;
    guestMode = false;

    await startNOVA();
  } else {
    showLogin();
  }
}


// ==========================================
// CAMBIOS DE SESIÓN
// ==========================================

supabaseClient.auth.onAuthStateChange(
  (event, session) => {
    if (event === "SIGNED_OUT") {
      currentUser = null;
      guestMode = false;
      showLogin();
    }

    if (event === "SIGNED_IN" && session) {
      currentUser = session.user;
    }
  }
);


// ==========================================
// ARRANCAR NOVA
// ==========================================

checkSession();
