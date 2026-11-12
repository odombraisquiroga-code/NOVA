
/**
 * NOVA — Base de conocimiento local
 * Fuente: PDF "Potato club 2" (307 páginas).
 *
 * No necesita servidor, API ni base de datos para consultar este conocimiento.
 * Usa novaKnowledgeAnswer(pregunta) para obtener respuestas locales.
 * Usa novaBuildKnowledgeContext(pregunta) para dar contexto a un modelo de IA.
 */

export const NOVA_KNOWLEDGE = {
  metadata: {
    title: "Potato Club 2",
    language: "es",
    source: "PDF proporcionado por el creador: POTATO CLUB PT.2",
    pages: 307,
    type: "Historia de ficción / universo narrativo",
    reliabilityNote:
      "La información procede del texto extraído del PDF. Los detalles que solo aparecen en dibujos o que no se leen con claridad se marcan como desconocidos."
  },

  universe: {
    name: "Isla Lenteja",
    description:
      "La historia ocurre principalmente en la Isla Lenteja, donde conviven distintas especies o pueblos: potatos, bananas, naranjas, mangos, tomatos y lechugas, entre otros.",
    nations: [
      { name: "Potitola", people: "Potatos", certainty: "Nombre legible en el mapa; grafía OCR aproximada" },
      { name: "Bananaland", people: "Bananas", certainty: "Nombre legible en el mapa; grafía OCR aproximada" },
      { name: "Simburbia", people: "Tomatos", certainty: "Confirmado por el diálogo y la historia" },
      { name: "Mangaland", people: "Mangos", certainty: "Nombre legible en el mapa; grafía OCR aproximada" },
      { name: "Naranjin", people: "Naranjas", certainty: "Nombre legible en el mapa; grafía OCR aproximada" }
    ],
    historicalConflict: [
      "Hace cientos de años, todos convivían en paz en la Isla Lenteja.",
      "Los potatos querían apoderarse de Pacopepo, una zona de la isla que todavía no tenía dueño.",
      "Las naranjas y los mangos se aliaron para luchar por esa zona.",
      "Los potatos se aliaron con los tomatos y ganaron aquella guerra.",
      "Después de los conflictos, la isla quedó separada en naciones."
    ],
    currentConflict:
      "En Potato Club 2 continúa el conflicto entre naranjas y mangos contra potatos y sus aliados. La historia incluye secuestros, espionaje, planes de guerra, intentos de conseguir ADN y la creación de robots."
  },

  species: [
    { name: "Potatos", description: "Uno de los pueblos principales de la Isla Lenteja. Tienen el Potato Club y aparecen como protagonistas de la historia." },
    { name: "Bananas", description: "Pueblo aliado y cercano a los potatos. Algunos personajes bananas participan en el rescate de Pepe." },
    { name: "Tomatos", description: "Pueblo de Simburbia. En el pasado se alió con los potatos para vencer a naranjas y mangos." },
    { name: "Naranjas", description: "Pueblo enfrentado a los potatos y tomatos. El rey Naranja dirige planes y soldados." },
    { name: "Mangos", description: "Pueblo que se alió con las naranjas y participa en el conflicto contra los potatos." },
    { name: "Lechugas", description: "Especie con la que las naranjas y los mangos planean aliarse, según la confesión de una naranja." }
  ],

  characters: [
    {
      name: "Pepe",
      species: "Potato",
      role: "Personaje central de la historia.",
      facts: [
        "Sobrevive a una explosión, pero queda en coma.",
        "Despierta después de un tiempo y vuelve con sus amigos.",
        "Recibe un mensaje anónimo que le cita en la calle Kuikily23 a las 3 pm.",
        "Acude solo y es secuestrado por una naranja.",
        "Sus amigos descubren el secuestro por las noticias y van a rescatarlo.",
        "Más adelante participa en la defensa y en los planes del grupo."
      ]
    },
    {
      name: "Kevin",
      species: "Potato (por contexto)",
      role: "Amigo de Pepe y miembro del grupo.",
      facts: [
        "Aparece con los potatos durante la historia.",
        "Se le ordena activar el protocolo de defensa durante la invasión naranja.",
        "Más adelante una naranja intenta llevárselo por la fuerza."
      ]
    },
    {
      name: "Popo",
      species: "Potato (por contexto)",
      role: "Personaje del grupo de potatos.",
      facts: [
        "Aparece con Pepe y los demás en la etapa de Simburbia."
      ]
    },
    {
      name: "Pacotico",
      species: "No especificada claramente",
      role: "Amigo de los protagonistas.",
      facts: [
        "Se marcha de viaje a Bananas junto con Rodolfo.",
        "Ambos dejan una carta explicando que se van de vacaciones.",
        "Durante el viaje visitan un museo."
      ]
    },
    {
      name: "Rodolfo",
      species: "No especificada claramente",
      role: "Amigo de los protagonistas.",
      facts: [
        "Viaja a Bananas con Pacotico.",
        "Más adelante aparece en el museo y es atacado durante el plan de las naranjas.",
        "En el accidente del avión utiliza un paracaídas diferente porque no quedaban más del mismo tipo.",
        "Su paracaídas empieza a romperse y cae; sus amigos salen a buscarlo."
      ]
    },
    {
      name: "Rovi",
      species: "No especificada claramente",
      role: "Personaje que cae del avión.",
      facts: [
        "Su paracaídas se está rompiendo.",
        "Cae y sus compañeros van a buscarlo."
      ]
    },
    {
      name: "Doctor",
      species: "No especificada",
      role: "Médico que atiende a Pepe.",
      facts: [
        "Confirma que Pepe está vivo, aunque inconsciente.",
        "Pepe le ofrece quedarse a dormir.",
        "Más adelante le proponen unirse al Potato Club porque necesitan un médico; acepta."
      ]
    },
    {
      name: "Naranja / secuestrador de Pepe",
      species: "Naranja",
      role: "Antagonista.",
      facts: [
        "Envía o participa en la cita anónima para atraer a Pepe a la calle Kuikily23.",
        "Secuestra a Pepe y lo lleva ante otra naranja.",
        "Lo amenaza y ordena a los guardias vigilarlo."
      ]
    },
    {
      name: "Rey Naranja",
      species: "Naranja",
      role: "Líder de las naranjas.",
      facts: [
        "Recibe información sobre Pacotico y Rodolfo.",
        "Ordena preparar soldados y un plan.",
        "Está relacionado con los planes de invasión y guerra."
      ]
    },
    {
      name: "Manguin Suprín",
      species: "Mango (por contexto)",
      role: "Aliado/contacto de los antagonistas.",
      facts: [
        "Recibe una llamada del secuestrador de Pepe.",
        "Pregunta si Pepe está capturado y confirma que el plan sigue en pie.",
        "Dice que preparará el armamento."
      ]
    },
    {
      name: "Goyo",
      species: "Tomato",
      role: "Dueño de Azúcar.",
      facts: [
        "Tiene un robot llamado Azúcar.",
        "Su casa está en la Avenida Papo33.",
        "Ayuda a los potatos y bananas cuando buscan un robot más fuerte para defenderse."
      ]
    },
    {
      name: "Profesor X",
      species: "Tomato (por contexto)",
      role: "Científico.",
      facts: [
        "Es el científico de los tomatos que creó a Azúcar.",
        "Goyo dice que sabe con quién empezar para conseguir un robot más fuerte: el Profesor X."
      ]
    },
    {
      name: "Popodox",
      species: "No especificada",
      role: "Personaje que reaparece.",
      facts: [
        "Se presenta ante Pacotico y Rodolfo.",
        "Ellos no lo reconocen y él se pregunta por qué nadie se acuerda de él."
      ]
    },
    {
      name: "Roboti91",
      species: "Robot",
      role: "Proyecto relacionado con la recolección de ADN.",
      facts: [
        "Un personaje científico explica que necesita el ADN de todas las especies de la isla para completar el proyecto.",
        "En una escena aparece el indicador 'ADN encontrados 2/5'.",
        "El plan escrito indica que primero necesitan el ADN de todas las especies para crear a ROBOT91."
      ]
    },
    {
      name: "Azúcar",
      species: "Robot",
      role: "Mascota/robot de Goyo.",
      facts: [
        "Es la mascota de un tomato llamado Goyo.",
        "Se menciona en un libro de historia del Tomato Club.",
        "Fue creado por el Profesor X.",
        "Los protagonistas quieren encontrarlo y al científico que lo fabricó para conseguir un robot más fuerte."
      ]
    }
  ],

  places: [
    { name: "Isla Lenteja", description: "Isla donde se desarrolla la historia y donde conviven las distintas especies." },
    { name: "Pacopepo", description: "Zona de la Isla Lenteja que no tenía dueño y que los potatos querían ocupar; desencadenó el conflicto histórico." },
    { name: "Potitola", description: "Nombre de una nación que aparece en el mapa de la isla; asociada a los potatos." },
    { name: "Bananaland", description: "Nombre de una nación que aparece en el mapa; asociada a las bananas." },
    { name: "Simburbia", description: "Lugar de los tomatos. Ayudan a los potatos y bananas a encontrar una casa después de que la suya queda destruida." },
    { name: "Mangaland", description: "Nombre de una nación que aparece en el mapa; asociada a los mangos." },
    { name: "Naranjin", description: "Nombre de una nación que aparece en el mapa; asociada a las naranjas." },
    { name: "Calle Kuikily23", description: "Lugar al que Pepe recibe la orden de acudir a las 3 pm. Allí lo secuestran." },
    { name: "Avenida Papo33", description: "Dirección de la casa de Goyo." },
    { name: "Bananas", description: "Lugar al que Pacotico y Rodolfo viajan de vacaciones; también se describe como la tierra de las bananas." },
    { name: "Museo", description: "Lugar que visitan Pacotico y Rodolfo durante sus vacaciones en Bananas." }
  ],

  story: [
    {
      chapter: "1. La explosión y el despertar de Pepe",
      events: [
        "Pepe queda muy mal después de una explosión, pero no muere: entra en coma.",
        "El médico confirma que sigue vivo, aunque inconsciente.",
        "Tras un salto temporal, Pepe despierta y sus amigos lo reciben.",
        "Vuelve a casa y le enseñan su habitación."
      ]
    },
    {
      chapter: "2. El mensaje y el secuestro",
      events: [
        "Mientras los amigos están en casa, Pepe recibe un mensaje de una persona anónima.",
        "El mensaje le ordena ir a la calle Kuikily23 a las 3 pm y le amenaza si no va.",
        "Pepe decide no avisar a los demás y acude solo.",
        "Una naranja lo captura y lo lleva como rehén.",
        "Los secuestradores dejan a guardias vigilándolo."
      ]
    },
    {
      chapter: "3. El rescate y la historia de la isla",
      events: [
        "Los potatos y bananas descubren por televisión que Pepe ha sido secuestrado.",
        "Van a la calle Kuikily23 para rescatarlo.",
        "Durante el enfrentamiento, los bananas muestran determinación y ayudan en el rescate.",
        "Después se explica la historia antigua de la Isla Lenteja y la guerra por Pacopepo.",
        "Se cuenta cómo las naranjas y los mangos se aliaron, y cómo los potatos y tomatos terminaron ganando aquella guerra."
      ]
    },
    {
      chapter: "4. La invasión y la huida",
      events: [
        "Se produce una invasión naranja.",
        "Kevin recibe la orden de activar el protocolo de defensa.",
        "Se activa una autodestrucción con cuenta atrás de 20 segundos y los personajes salen del lugar.",
        "Pepe se queda atrás durante un momento, pero logra continuar con el grupo.",
        "El doctor recibe la invitación para unirse al Potato Club como médico y acepta."
      ]
    },
    {
      chapter: "5. Viaje a Simburbia",
      events: [
        "El grupo decide ir con los tomatos para pedir ayuda y construir una casa nueva, porque la anterior ha quedado destruida.",
        "Pacotico y Rodolfo no están con ellos: se habían ido de viaje a Bananas y dejaron una carta.",
        "Durante el vuelo, el capitán avisa de que un motor echa humo.",
        "El avión sufre un accidente y los pasajeros usan paracaídas.",
        "Rovi cae porque su paracaídas, que era diferente al de los demás, empieza a romperse.",
        "Los compañeros van a buscarlo.",
        "En Simburbia, los tomatos aceptan ayudar y mandan trabajadores para construir una casa.",
        "También encuentran una casa que los potatos pueden utilizar."
      ]
    },
    {
      chapter: "6. El plan de las naranjas y los mangos",
      events: [
        "Mientras Pacotico y Rodolfo están de vacaciones, una naranja informa al Rey Naranja de que van a visitar el museo.",
        "El Rey Naranja ordena preparar soldados y un plan.",
        "En otra parte de la isla, un científico trabaja en un proyecto que necesita ADN de todas las especies.",
        "Se muestra el progreso 'ADN encontrados 2/5'.",
        "Una naranja aparece en el museo y ataca a personajes.",
        "Más adelante una naranja es interrogada y admite que el plan de naranjas y mangos incluye aliarse con las lechugas."
      ]
    },
    {
      chapter: "7. ROBOT91 y la defensa",
      events: [
        "Los protagonistas descubren un plan escrito: reunir ADN de todas las especies para crear a ROBOT91.",
        "Después, los mangos ayudarían a atacar a los potatos cuando estén en una casa de Simburbia.",
        "La declaración de guerra se planea para mitad de la noche, para sorprenderlos.",
        "Los potatos deciden preparar un plan de defensa.",
        "Según un libro del Tomato Club, los tomatos tienen un robot llamado Azúcar, mascota de Goyo.",
        "El grupo decide encontrar a Goyo y al Profesor X, creador de Azúcar, para conseguir un robot más fuerte.",
        "Encuentran a Goyo en la Avenida Papo33 y le piden ayuda.",
        "Goyo acepta colaborar y explica que puede hacer un robot más fuerte, pero necesita que le dejen a Azúcar."
      ]
    }
  ],

  plans: {
    enemyPlan: [
      "Aliarse con las lechugas.",
      "Conseguir el ADN de todas las especies de la isla.",
      "Crear a ROBOT91.",
      "Contar con la ayuda de los mangos para atacar a los potatos en su casa de Simburbia.",
      "Declarar la guerra en mitad de la noche para que los potatos no estén preparados."
    ],
    protagonistsPlan: [
      "Preparar un plan de defensa.",
      "Encontrar a Goyo y a Azúcar.",
      "Localizar al Profesor X, científico que creó a Azúcar.",
      "Conseguir ayuda para crear un robot más fuerte."
    ]
  },

  relationships: [
    "Pepe forma parte del grupo protagonista de los potatos.",
    "Kevin y Popo aparecen entre los compañeros de Pepe.",
    "Pacotico y Rodolfo son amigos del grupo y viajan juntos a Bananas.",
    "Goyo es el dueño de Azúcar.",
    "El Profesor X creó a Azúcar.",
    "El doctor atiende a Pepe y después se une al Potato Club.",
    "Las naranjas y los mangos cooperan en los planes contra los potatos.",
    "Los potatos y los tomatos fueron aliados en la guerra histórica contra naranjas y mangos.",
    "Las bananas ayudan a los potatos."
  ],

  unanswered: [
    "El PDF no explica con claridad el origen exacto de cada personaje.",
    "No se detallan todas las cinco especies cuyo ADN necesita ROBOT91.",
    "No se confirma en el texto extraído si ROBOT91 llega a completarse.",
    "No se confirma el resultado final de la guerra ni el destino definitivo de todos los personajes.",
    "Algunos nombres de naciones y calles pueden tener grafías aproximadas por el OCR."
  ]
};

/** Normaliza texto español para facilitar búsquedas sin tildes. */
export function novaNormalize(value = "") {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿?¡!,.;:()[\]{}"'`]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Convierte la base de conocimiento en documentos buscables. */
function flattenKnowledge() {
  const docs = [];

  const add = (title, content, keywords = []) => {
    if (!content) return;

    docs.push({
      title,
      content: Array.isArray(content) ? content.join(" ") : String(content),
      keywords: [title, ...keywords].join(" ")
    });
  };

  add("Universo", NOVA_KNOWLEDGE.universe.description, [
    "isla", "lenteja", "mundo", "universo"
  ]);

  add("Historia antigua", NOVA_KNOWLEDGE.universe.historicalConflict, [
    "guerra", "historia", "pacopepo", "naciones"
  ]);

  add("Conflicto actual", NOVA_KNOWLEDGE.universe.currentConflict, [
    "guerra", "naranjas", "mangos", "potatos"
  ]);

  NOVA_KNOWLEDGE.species.forEach(x =>
    add(x.name, x.description, ["especie", "pueblo", "raza"])
  );

  NOVA_KNOWLEDGE.characters.forEach(x =>
    add(
      x.name,
      [x.role, ...(x.facts || [])],
      [x.species || "", "personaje", "quien", "quién"]
    )
  );

  NOVA_KNOWLEDGE.places.forEach(x =>
    add(x.name, x.description, [
      "lugar", "donde", "dirección", "direccion"
    ])
  );

  NOVA_KNOWLEDGE.story.forEach(x =>
    add(x.chapter, x.events, ["historia", "resumen", "trama", "que pasa"])
  );

  add("Plan enemigo", NOVA_KNOWLEDGE.plans.enemyPlan, [
    "plan", "robot91", "adn", "ataque"
  ]);

  add("Plan de los protagonistas", NOVA_KNOWLEDGE.plans.protagonistsPlan, [
    "plan", "defensa", "azucar", "goyo", "profesor x"
  ]);

  add("Relaciones", NOVA_KNOWLEDGE.relationships, [
    "amigo", "aliado", "familia", "relacion"
  ]);

  return docs;
}

const DOCUMENTS = flattenKnowledge();

/**
 * Busca conocimiento relevante en el archivo local.
 * Devuelve resultados con puntuación; no llama a ningún servidor.
 */
export function novaSearchKnowledge(question, limit = 5) {
  const q = novaNormalize(question);
  if (!q) return [];

  const terms = q.split(" ").filter(w => w.length > 2);

  return DOCUMENTS.map(doc => {
    const haystack = novaNormalize(
      doc.title + " " + doc.content + " " + doc.keywords
    );

    let score = 0;

    for (const term of terms) {
      if (haystack.includes(term)) {
        score += term.length > 5 ? 3 : 1;
      }
    }

    if (novaNormalize(doc.title) === q) {
      score += 10;
    }

    return { ...doc, score };
  })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

/**
 * Genera contexto para pasárselo al modelo de IA como conocimiento recuperado.
 * Úsalo en el prompt de tu chat si NOVA también tiene un modelo de lenguaje.
 */
export function novaBuildKnowledgeContext(question, limit = 5) {
  const results = novaSearchKnowledge(question, limit);

  if (!results.length) {
    return "No se ha encontrado información sobre esa pregunta en la base de conocimiento local de Potato Club 2.";
  }

  return [
    "CONOCIMIENTO LOCAL DE NOVA — POTATO CLUB 2",
    "Responde en español usando solo estos datos. No inventes hechos.",
    ...results.map(
      (r, i) => `${i + 1}. ${r.title}: ${r.content}`
    )
  ].join("\n\n");
}

/**
 * Respuesta local sencilla, sin modelo de IA ni servidor.
 * Para respuestas conversacionales más naturales, usa
 * novaBuildKnowledgeContext() junto con el modelo de IA de tu aplicación.
 */
export function novaKnowledgeAnswer(question) {
  const results = novaSearchKnowledge(question, 4);

  if (!results.length) {
    return "No encuentro esa información en mi conocimiento local de Potato Club 2. Si me das más contexto o añades esa información a nova_knowledge.js, podré responder.";
  }

  return results
    .slice(0, 3)
    .map(r => `${r.title}: ${r.content}`)
    .join("\n\n");
}

export default NOVA_KNOWLEDGE;
