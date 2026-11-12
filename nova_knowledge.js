/*
  NOVA — Base de conocimientos de POTATO CLUB PT.2
  Archivo: nova_knowledge.js

  Este archivo contiene una guía detallada y parafraseada de la historia,
  organizada por acontecimientos, personajes, lugares y páginas.
  No es una transcripción literal del PDF.

  Para cargarlo en index.html, añade ANTES de script.js:
  <script src="nova_knowledge.js" defer></script>
*/
window.NOVA_KNOWLEDGE = {
  title: "Potato Club 2",
  language: "es",
  sourcePages: 307,
  note: "Base elaborada a partir de la historia y sus viñetas. Cuando algo no queda confirmado, se indica expresamente.",
  characters: [
    {
      name: "Pepe",
      aliases: ["Pepe"],
      role: "Protagonista potato.",
      facts: [
        "Al comienzo está en el hospital después de una explosión anterior. Está vivo, pero en coma.",
        "Despierta más tarde y vuelve a casa con sus amigos.",
        "Recibe un mensaje anónimo que le exige acudir a la calle Kuikily23 a las 3 de la tarde y le amenaza si no va.",
        "Decide no contar el mensaje a los demás y sale cuando todos duermen.",
        "Una naranja lo captura usando un tranquilizante y lo retiene como rehén.",
        "Sus amigos van a rescatarlo. Más adelante participa en la búsqueda de una forma de defenderse de los planes enemigos.",
        "En Simburbia, Pepe y Kevin se quedan pensando en un plan de defensa mientras otros quieren ir a la piscina."
      ],
      pages: "2-5, 8-12, 14-31, 34-60, 92-122, 200-218, 238-278"
    },
    {
      name: "Kevin",
      aliases: ["Kevin"],
      role: "Miembro del grupo potato y participante en la defensa.",
      facts: [
        "Durante la invasión naranja recibe la orden de activar el protocolo de defensa.",
        "Ayuda a poner en marcha el sistema de autodestrucción de la casa para que el grupo pueda salir.",
        "Más adelante aparece en un enfrentamiento en el desierto con una naranja. La escena termina con la naranja imponiéndose y llevándoselo; los detalles exactos de lo ocurrido no quedan explicados por completo en los textos."
      ],
      pages: "100-112, 220-236, 243-259"
    },
    {
      name: "El doctor",
      aliases: ["doctor", "médico"],
      role: "Médico que atiende a Pepe.",
      facts: [
        "Informa de que Pepe sigue vivo, aunque permanece inconsciente.",
        "Acompaña al grupo cuando Pepe despierta y vuelve a casa.",
        "Se queda a dormir en la casa a petición del grupo.",
        "Los potatos le ofrecen unirse al PotatoClub porque necesitan un médico; acepta."
      ],
      pages: "3-5, 8-12, 25, 114-117"
    },
    {
      name: "La naranja secuestradora",
      aliases: ["naranja", "Naranja"],
      role: "Antagonista que captura a Pepe y participa en el plan contra los potatos.",
      facts: [
        "Envía o utiliza una cita amenazante para atraer a Pepe a la calle Kuikily23.",
        "Lo duerme con un tranquilizante y se lo lleva en una furgoneta.",
        "Le dice que lo tendrán como rehén y amenaza con dispararle.",
        "Se comunica con Manguin Suprín y confirma que tiene a Pepe.",
        "Explica que prepara armamento y participa en el plan territorial junto con los mangos.",
        "Más adelante, una naranja es interrogada por el grupo y se revela un plan relacionado con las lechugas y con conseguir ADN de las especies de la isla. La historia no deja completamente claro si todas las apariciones de naranjas corresponden al mismo individuo."
      ],
      pages: "27-51, 70-80, 87-92, 135-138, 243-254"
    },
    {
      name: "Manguin Suprín",
      aliases: ["Suprín", "Manguin Suprin", "Manguin Suprín"],
      role: "Contacto de la naranja secuestradora.",
      facts: [
        "Recibe una llamada de la naranja.",
        "Pregunta si Pepe está en su poder.",
        "La naranja responde que sí y Suprín le ordena continuar con el plan."
      ],
      pages: "71-80"
    },
    {
      name: "Jimy",
      aliases: ["Jimmy", "Jimy"],
      role: "Personaje que aparece cuando el grupo intenta no despertar a los demás.",
      facts: [
        "Aparece junto a otro personaje en la escena en la que intentan no despertar a los potatos."
      ],
      pages: "53"
    },
    {
      name: "Rovi",
      aliases: ["Rovi"],
      role: "Miembro del grupo que cae al mar durante el escape del avión.",
      facts: [
        "Salta del avión con un paracaídas distinto porque no quedaban más del mismo tipo.",
        "Su paracaídas está algo roto y Rovi acaba cayendo al agua.",
        "Sus compañeros lo buscan y tratan de alcanzarlo mientras hay un tiburón cerca.",
        "El grupo consigue llegar hasta él y ayudarlo."
      ],
      pages: "144-156, 166-181"
    },
    {
      name: "Juan",
      aliases: ["Juan"],
      role: "Compañero que ayuda a rescatar a Rovi.",
      facts: [
        "En el rescate acuático, otro personaje le pide que lo agarre para poder ayudar a Rovi."
      ],
      pages: "172-173"
    },
    {
      name: "Pacotico",
      aliases: ["Pacotico"],
      role: "Personaje que viaja a Bananas con Rodolfo.",
      facts: [
        "Se marcha de viaje a Bananas junto con Rodolfo y deja una carta explicándolo.",
        "Durante las vacaciones visitan el museo Bananín.",
        "Más adelante aparece en una escena en la que una naranja habría usado una jeringuilla contra ellos; la información se menciona durante una conversación posterior.",
        "Al final de la historia sigue de vacaciones con Rodolfo y se encuentra con Popodox, a quien no reconoce."
      ],
      pages: "125-129, 157-162, 240-244, 280-289"
    },
    {
      name: "Rodolfo",
      aliases: ["Rodolfo"],
      role: "Compañero de viaje de Pacotico.",
      facts: [
        "Se va de vacaciones a Bananas con Pacotico y ambos dejan una carta.",
        "Visita el museo Bananín.",
        "En la parte final conversa con Pacotico y se encuentra con Popodox, pero no lo reconoce."
      ],
      pages: "125-129, 157-162, 280-289"
    },
    {
      name: "Popodox",
      aliases: ["Popodox"],
      role: "Personaje que reaparece durante las vacaciones de Pacotico y Rodolfo.",
      facts: [
        "Se acerca a Pacotico y Rodolfo y les pregunta si se acuerdan de él.",
        "Se presenta como Popodox.",
        "Ellos no lo reconocen y se marchan; Popodox se queda triste porque nadie parece acordarse de él."
      ],
      pages: "282-289"
    },
    {
      name: "Naranjito",
      aliases: ["Naranjito"],
      role: "Personaje que informa al rey Naranja sobre Pacotico y Rodolfo.",
      facts: [
        "Avisa al rey Naranja de que Pacotico y Rodolfo van a ir al museo.",
        "El rey Naranja responde que preparará a los soldados y el plan."
      ],
      pages: "162-164"
    },
    {
      name: "Rey Naranja",
      aliases: ["rey Naranja", "Rey Naranja"],
      role: "Líder naranja.",
      facts: [
        "Recibe información de Naranjito sobre la visita de Pacotico y Rodolfo al museo.",
        "Ordena preparar soldados y un plan."
      ],
      pages: "162-164"
    },
    {
      name: "Goyo",
      aliases: ["Goyo"],
      role: "Tomato relacionado con el robot Azúcar.",
      facts: [
        "Un libro indica que Azúcar es la mascota de un tomato llamado Goyo.",
        "El grupo busca a Goyo en la avenida Papo33 para pedir ayuda.",
        "Goyo recibe al grupo y parece conocer el motivo de su visita.",
        "Ofrece fabricar un robot muy poderoso, pero pide que le dejen a Azúcar para trabajar.",
        "La historia no aclara de forma inequívoca si Goyo y el Profesor X son la misma persona."
      ],
      pages: "264-276, 291-306"
    },
    {
      name: "Azúcar",
      aliases: ["Azucar", "Azúcar", "robot Azúcar"],
      role: "Robot que sirve de mascota a Goyo.",
      facts: [
        "El libro que consulta el grupo dice que Azúcar es la mascota de Goyo.",
        "El grupo cree que encontrar a Azúcar y al científico que lo creó puede ayudarles a construir un robot más fuerte que Roboti91.",
        "Goyo pide que le dejen a Azúcar para poder fabricar el nuevo robot."
      ],
      pages: "264-266, 273-276, 297-306"
    },
    {
      name: "Profesor X",
      aliases: ["Profesor X", "profesor"],
      role: "Científico mencionado como creador de Azúcar.",
      facts: [
        "El grupo identifica al Profesor X como el científico tomato que creó a Azúcar.",
        "Dicen que vive lejos y deciden ir en coche.",
        "En la secuencia final llegan a una casa donde los recibe Goyo. El PDF no confirma claramente si Goyo es el Profesor X o si son personas distintas."
      ],
      pages: "274-279, 291-306"
    },
    {
      name: "Roboti91",
      aliases: ["Robot 91", "Roboti91", "Roboti 91"],
      role: "Robot asociado al plan enemigo.",
      facts: [
        "El plan escrito de los antagonistas consiste en reunir ADN de todas las especies de la isla para crear a ROBOT91.",
        "El grupo busca construir un robot más fuerte que Roboti91.",
        "Al final aparece un robot nuevo, pero el episodio termina antes de explicar sus capacidades."
      ],
      pages: "181-186, 250-254, 262-307"
    }
  ],
    places: [
    {
      name: "Isla Lenteja",
      facts: [
        "Es la isla donde convivían las especies antes de los conflictos narrados.",
        "La historia antigua cuenta que los mangos atacaron a los tomatos para intentar extinguirlos, aunque se dice que los primeros en atacar fueron los potatos al intentar apoderarse de Pacopepo.",
        "Después de las guerras, la isla quedó dividida en varias naciones."
      ],
      pages: "86-91, 165"
    },
    {
      name: "Pacopepo",
      facts: [
        "Es una zona de la isla que todavía no tenía dueño.",
        "Los potatos querían apoderarse de ella.",
        "La llegada de naranjas y mangos aliados desencadenó una guerra por el territorio."
      ],
      pages: "88-90"
    },
    {
      name: "Potitoland",
      facts: ["Una de las naciones en las que se dividió la isla tras los conflictos."],
      pages: "91"
    },
    {
      name: "Simburbia",
      facts: [
        "Una de las naciones de la isla.",
        "Los potatos y sus compañeros llegan allí para pedir ayuda después de que su casa queda destruida.",
        "Los tomatos les ofrecen ayuda, mandan trabajadores para construir una casa y buscan una vivienda provisional.",
        "El plan enemigo menciona atacar a los potatos cuando estén alojados en una casa de Simburbia."
      ],
      pages: "91, 200-218, 254"
    },
    {
      name: "Bananaland",
      aliases: ["Bananaland", "Bananalan"],
      facts: ["Una de las naciones mencionadas en el mapa de la isla."],
      pages: "91"
    },
    {
      name: "Mangaland",
      facts: ["Una de las naciones mencionadas en el mapa de la isla."],
      pages: "91"
    },
    {
      name: "Naranjinpín",
      aliases: ["Naranjinpin"],
      facts: ["Una de las naciones mencionadas en el mapa de la isla."],
      pages: "91"
    },
    {
      name: "Bananas",
      facts: [
        "Es el lugar al que viajan Pacotico y Rodolfo de vacaciones.",
        "Allí visitan el museo Bananín."
      ],
      pages: "127, 157-162, 280-289"
    },
    {
      name: "Museo Bananín",
      aliases: ["museo Bananin"],
      facts: [
        "Es un museo de Bananas que visitan Pacotico y Rodolfo.",
        "El grupo encuentra una puerta misteriosa y espera a que se vaya la gente para abrirla.",
        "Una naranja aparece dentro y se enfrenta a los potatos; después desaparece, dejando al grupo desconcertado."
      ],
      pages: "160-199"
    },
    {
      name: "Calle Kuikily23",
      aliases: ["calle quikli23", "Kuikily23", "quikli23"],
      facts: [
        "Es la dirección a la que una persona anónima cita a Pepe a las tres de la tarde.",
        "La noticia de su desaparición indica que fue visto por última vez allí."
      ],
      pages: "27, 55-56"
    },
    {
      name: "Avenida Papo33",
      aliases: ["Avd. Papo33", "Avenida Papo 33"],
      facts: [
        "Es la dirección que el grupo encuentra en el libro para localizar la casa de Goyo."
      ],
      pages: "267-272"
    }
  ],
  story: [
    {
      title: "1. Pepe sigue vivo y despierta",
      pages: "1-25",
      summary: "La segunda parte comienza recordando que Pepe ha sufrido una explosión. Está ingresado en el Hospital Potato, vivo pero en coma. Sus amigos esperan noticias y el médico confirma que sigue vivo, aunque inconsciente. Más adelante Pepe despierta, lo llevan a casa y se reúne con los potatos y las bananas. Le enseñan su habitación. El grupo ve PotatoTV y prepara comida; el doctor se queda a dormir.",
      facts: [
        "Pepe no ha muerto por la explosión anterior.",
        "Al principio está en coma y después despierta.",
        "Sus amigos lo reciben en casa.",
        "El doctor permanece con el grupo y acaba siendo invitado a unirse al PotatoClub."
      ]
    },
    {
      title: "2. El mensaje anónimo y el secuestro",
      pages: "26-52",
      summary: "Pepe recibe un mensaje de una persona anónima que le ordena ir a la calle Kuikily23 a las 3 pm y amenaza con que ocurrirán cosas malas si no va. Pepe se plantea avisar a los potatos, pero decide que es asunto suyo. Consulta la ubicación y espera a que todos se duerman. Sale de noche y llega a un lugar oscuro donde una figura le dice que espere. Pepe no entiende qué ocurre. Una naranja lo duerme con un tranquilizante y se lo lleva en una furgoneta. Cuando despierta, está retenido. La naranja le anuncia que será rehén y lo amenaza.",
      facts: [
        "La cita es en la calle Kuikily23 a las 3 de la tarde.",
        "Pepe no informa a sus amigos.",
        "La captura ocurre mientras los demás duermen.",
        "Se utiliza un tranquilizante.",
        "La naranja se lleva a Pepe en una furgoneta."
      ]
    },
    {
      title: "3. Rescate y revelación de la historia de la isla",
      pages: "53-99",
      summary: "Mientras Pepe está desaparecido, algunos personajes ven en la televisión una noticia que dice que ha sido secuestrado y que fue visto por última vez en la calle Kuikily23. Los amigos deciden ir a buscarlo. Tras un salto temporal, llegan y se enfrentan a los captores. Los bananos luchan con determinación y el grupo consigue liberar a Pepe. Después, la naranja habla por teléfono con Manguin Suprín: confirma que ha tenido a Pepe y recibe la orden de seguir con el plan. La naranja dice que preparará armamento. Reúne a sus aliados y explica el origen del conflicto en Isla Lenteja: hace cientos de años convivían en paz; los potatos querían ocupar Pacopepo, territorio sin dueño; naranjas y mangos se aliaron para luchar por la zona; los potatos se aliaron con los tomatos y ganaron aquella guerra. Tras los conflictos la isla quedó dividida en naciones. Las naranjas quieren recuperar el territorio junto con los mangos.",
      facts: [
        "La desaparición de Pepe se conoce por una noticia de televisión.",
        "Los amigos acuden a rescatarlo.",
        "La historia presenta a los bananos como luchadores que no se rinden.",
        "Manguin Suprín está al tanto del plan de la naranja.",
        "El conflicto territorial gira alrededor de Pacopepo y de las alianzas entre potatos, tomatos, naranjas y mangos."
      ]
    },
    {
      title: "4. Invasión naranja y destrucción de la casa",
      pages: "93-117",
      summary: "La casa de los potatos sufre una invasión naranja. Kevin activa el protocolo de defensa. El sistema inicia una autodestrucción con cuenta atrás y los personajes intentan salir. Durante la evacuación se dan cuenta de que Pepe podría seguir dentro y lo llaman mientras la cuenta llega a cero. La casa explota. Después, el doctor comenta que quizá debe marcharse, pero los potatos le ofrecen unirse al PotatoClub porque necesitan un médico. El doctor acepta.",
      facts: [
        "Kevin activa el protocolo de defensa.",
        "La casa tiene un sistema de autodestrucción.",
        "La cuenta atrás llega a cero y la casa explota.",
        "El doctor acepta unirse al PotatoClub."
      ]
    },
