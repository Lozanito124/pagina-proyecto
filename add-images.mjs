import fetch from "node-fetch";

const BASE  = "http://127.0.0.1:1337";
const TOKEN = "c08aa74136eaf10d3ca85d6168aea2a11f2c5b715783aea21882f4b75682eca4ee25cc7c1d6c059937d2896e2def93d70b6a5c68d76da9969ab0bb7f6e31d2cf74f2e289a04d7268b39602acfb6aae722f4aeb321cdc473deddedc0ccdac91af7186d02fe223cd7e2c2ba39a773cc2f640d8decf043f8884e5f44710740a869f";

async function api(method, path, body) {
  const opts = {
    method,
    headers: { "Content-Type": "application/json", "Authorization": "Bearer " + TOKEN },
  };
  if (body) opts.body = JSON.stringify({ data: body });
  const res  = await fetch(`${BASE}${path}`, opts);
  const json = await res.json();
  if (!res.ok) { console.error(`✗ ${method} ${path}`, json?.error?.message ?? json); return null; }
  return json;
}

const ARTICLES = [
  {
    documentId: "n5ueak9qgzayjnd0dbxyf8ox",
    title: "Los mejores RPGs de la última década",
    readingTime: 12,
    excerpt: "La última década ha sido la época dorada de los juegos de rol. Títulos como The Witcher 3, Persona 5 Royal, Elden Ring o Baldur's Gate 3 han redefinido lo que un RPG puede ser. Repasamos los juegos que marcaron generación y por qué siguen siendo insuperables.",
    content: `La última década ha sido, sin ninguna duda, la más rica en la historia del género RPG. Nunca antes habíamos tenido acceso simultáneo a propuestas tan variadas, tan ambiciosas y tan bien ejecutadas. Desde los mundos abiertos de escala épica hasta los JRPGs más íntimos y personales, el catálogo de esta década es una celebración de todo lo que los juegos de rol pueden ofrecer.

THE WITCHER 3: EL ESTÁNDAR QUE NADIE HA SUPERADO

Cuando CD Projekt RED lanzó The Witcher 3: Wild Hunt en 2015, nadie esperaba que fuera a redefinir lo que un RPG de mundo abierto podía ser. No solo en términos de escala, sino en la calidad de cada fragmento de contenido. Las misiones secundarias de The Witcher 3 tienen más peso dramático y mejor escritura que las misiones principales de la mayoría de juegos. Los Barón de Velen, la caza del Genio, la historia de Duny y Pavetta... cada una de estas historias podría ser el capítulo principal de otro juego.

El mundo de The Witcher 3 está construido con una coherencia interna que pocos mundos abiertos igualan. Velen es un pantano de guerra donde la gente pasa hambre y los cadáveres se pudren en los campos. Novigrad es una ciudad viva con sus propias tensiones políticas, religiosas y económicas. Skellige es un archipiélago nórdico con una cultura de clan que tiene sentido histórico propio. Ninguna zona se siente como un parque de atracciones: todas se sienten como lugares reales con consecuencias reales.

Las expansiones Hearts of Stone y Blood and Wine son tan buenas como el juego base. Blood and Wine en particular es una obra maestra ambientada en la región de Toussaint, una tierra de cuento de hadas con una oscuridad subyacente que contrasta deliberadamente con su paleta pastel. Toussaint es quizás la mejor zona que CD Projekt RED ha diseñado, y eso ya es decir mucho.

ELDEN RING: FROMSOFT CONQUISTA EL MUNDO

Que Elden Ring ganara el GOTY de 2022 con tanta unanimidad no fue una sorpresa para nadie que hubiera prestado atención a FromSoftware en la última década. Fue el momento en que el estudio dejó de ser una referencia de culto para convertirse en un nombre conocido por cualquier jugador.

La apertura al mundo abierto fue arriesgada. Los Souls siempre habían sido juegos lineales con una ilusión de apertura. Las Tierras Intermedias rompieron esa fórmula y demostraron que la filosofía de diseño de Miyazaki, basada en la exploración sin guía y el descubrimiento orgánico, funcionaba incluso mejor con libertad real de movimiento.

Los jefes de Elden Ring incluyen algunos de los mejores diseñados por FromSoftware: Margit con su bastón dorado inesperado, Radahn el conquistador de estrellas que cae desde el cielo al segundo encuentro, Malenia con su recuperación de vida con cada golpe. Y luego está Rennala, una batalla de dos fases que no tiene precedente en la saga por su belleza visual y su peso emocional.

El lore construido con George R.R. Martin es el más accesible que ha escrito FromSoftware sin perder su tendencia a esconder las respuestas. La historia de Marika y Godfrey, de Ranni y su conspiración, de los hijos de Marika y su caída... es una tragedia épica contada en fragmentos que el jugador ensambla libremente.

PERSONA 5 ROYAL: EL JRPG MÁS ESTILOSO DE LA HISTORIA

Persona 5 Royal es imposible de describir sin hablar primero de su diseño visual. Nada en los videojuegos se parece a Persona 5: la paleta de rojo y negro, los menús que explotan en animaciones, las transiciones que parecen cortes de cómic, la manera en que hasta el texto de las opciones de diálogo tiene personalidad propia. Es un juego que entiende la identidad visual como comunicación narrativa.

Pero debajo de la superficie hay un sistema de profundidad considerable. El calendario limita tus acciones diarias y te obliga a priorizar: ¿dedicas la tarde a avanzar en el Palacio o a construir relación con Ann para desbloquear nuevas habilidades de Pantera? Cada decisión tiene coste de oportunidad y eso crea una tensión de gestión constante que hace que el tiempo dentro del juego valga de verdad.

Los Palacios son mazmorgas temáticas que reflejan la psicología de su dueño. El castillo de Kamoshida como reflejo de su mentalidad feudal sobre los estudiantes. La pirámide de Madarame como representación de la apropiación del trabajo ajeno. El banco de Kaneshiro como encarnación de su visión de las personas como recursos financieros. Cada Palacio es una crítica social disfrazada de dungeon.

BALDUR'S GATE 3: EL RPG MÁS AMBICIOSO JAMÁS CREADO

Larian Studios tardó seis años en hacer Baldur's Gate 3 y se nota en cada detalle. Es el RPG con más horas de diálogo grabado de la historia, con más de 170 horas de actuación capturada. Es el juego donde puedes literalmente matar a cualquier personaje sin que la historia se rompa. Es el juego donde puedes resolver el mismo encuentro de docenas de maneras completamente distintas.

La adaptación de D&D 5ª Edición es extraordinariamente fiel al sistema de tabletop sin sacrificar la jugabilidad en pantalla. Las tiradas de dados son visibles, las ventajas y desventajas funcionan como en la mesa, las clases tienen todas sus subclases del manual del jugador. Pero la interfaz lo presenta de manera que nunca necesitas saber de D&D para entender qué está pasando.

Los compañeros son el alma del juego. Astarion, el vampiro elfo con su cinismo y su trauma. Shadowheart, la clérigo con secretos que van revelándose. Gale, el mago arrogante con una bomba mágica en el pecho. Cada uno tiene un arco de más de 60 horas que se desarrolla en función de tus decisiones. La primera vez que terminas el juego casi con certeza habrás perdido a alguno.

DIVINITY: ORIGINAL SIN 2 Y EL RPG POR TURNOS OCCIDENTAL

Antes de Baldur's Gate 3, Larian Studios había demostrado su capacidad con Divinity: Original Sin 2, que durante años fue considerado el mejor RPG por turnos occidental disponible. Su sistema de combate con elementos interactuantes, su libertad narrativa casi ilimitada y su campaña cooperativa para cuatro jugadores establecieron el estándar que el propio Larian superaría después.

La saga RPG sigue creciendo. Con Avowed de Obsidian, el prometedor Exodus y el continuo de FromSoftware con sus nuevos proyectos, la próxima década promete ser igual de rica que la que acabamos de dejar atrás.`,
  },

  {
    documentId: "s3liffpwizcv0li6n2qczm3r",
    title: "Guía para empezar en los roguelikes",
    readingTime: 10,
    excerpt: "Los roguelikes pueden parecer un muro de frustración al principio. Morir, perder todo y empezar de cero no suena apetecible. Pero hay una razón por la que este género ha conquistado a millones de jugadores. Esta guía te explica cómo entrar y por qué merece la pena.",
    content: `Los roguelikes son el género más incomprendido de los videojuegos modernos. De lejos. Cuando le explicas a alguien que el juego se reinicia completamente cada vez que mueres, la reacción habitual es un rechazo instintivo. ¿Para qué invertir tiempo en algo que vas a perder? La respuesta a esa pregunta es la filosofía completa del género.

QUÉ ES UN ROGUELIKE Y QUÉ ES UN ROGUELITE

Antes de empezar, una distinción que los fans del género toman muy en serio: roguelike clásico y roguelite moderno no son lo mismo, aunque el término se use indistintamente en el mercado.

Un roguelike clásico, en la tradición de Rogue (1980) y sus herederos, tiene muerte permanente total, generación procedural de niveles, sin progresión permanente entre partidas y turnos. NetHack, Caves of Qud y Tome 4 siguen esta filosofía pura.

Un roguelite moderno, que es lo que la mayoría de jugadores conoce con el término "roguelike", mantiene la muerte permanente y los niveles procedurales pero añade algún tipo de progresión entre partidas. Hades, Dead Cells, Slay the Spire. La muerte no te quita todo: hay algo que permanece.

Esta distinción importa porque determina cómo debes relacionarte con el fracaso en cada juego.

LA FILOSOFÍA DEL FRACASO PRODUCTIVO

El error mental más común al empezar en el género es tratar la muerte como un fracaso. No lo es. En un roguelike bien diseñado, cada muerte es información. Moriste en el tercer nivel por una trampa de gas que no viste. Ahora sabes que ese tipo de sala tiene trampas de gas. La próxima vez pasas más despacio, o rodeas la sala, o llevas el objeto que las neutraliza.

Este ciclo de aprendizaje es la estructura emocional del género. La satisfacción no viene de llegar al final en la primera partida, sino de ver cómo cada run llega un poco más lejos que la anterior. Cuando después de veinte intentos finalmente derrotas al jefe del segundo acto, la victoria tiene un peso que ningún juego de progresión lineal puede replicar.

HADES: EL PUNTO DE ENTRADA PERFECTO

Si nunca has jugado un roguelite y quieres empezar, Hades de Supergiant Games es la respuesta correcta. Sin discusión. El juego tiene una curva de aprendizaje calibrada con una precisión que pocos juegos del género igualan.

Lo primero que hace bien Hades es que el fracaso avanza la historia. Cuando mueres y vuelves al palacio del inframundo, ocurre algo nuevo: una conversación con Zagreus y Nyx, un fragmento de la historia de Hypnos, una interacción con Thanatos. El juego progresa narrativamente con cada muerte, así que nunca sientes que perdiste el tiempo.

Lo segundo que hace bien es el sistema de boons. Los dioses olímpicos te ofrecen mejoras para tus habilidades en cada sala. La variedad de combinaciones posibles hace que cada run sea distinta. Las sinergias entre boons de distintos dioses crean builds que pueden ser absurdamente poderosas y descubrirlas es parte de la diversión.

SLAY THE SPIRE: LA PROFUNDIDAD TÁCTICA DEL DECKBUILDER

Slay the Spire creó un subgénero completo. El deckbuilder roguelite es hoy uno de los más prolíficos del mercado y prácticamente todo juego del tipo debe algo a lo que Mega Crit diseñó en 2019.

El concepto es sencillo: subes una torre de enemigos y eventos construyendo un mazo de cartas en el proceso. Pero la profundidad que emerge de ese concepto es enorme. ¿Cuántas cartas añades al mazo? Un mazo más pequeño es más consistente pero más frágil. Uno más grande tiene más opciones pero llega antes a las cartas que necesitas con menos frecuencia.

Las reliquias son el otro eje del juego. Objetos pasivos que modifican las reglas: uno que te da energía extra pero te daña al principio del turno, otro que hace que todas tus cartas de ataque cuesten un maná menos, otro que multiplica el daño cuando tu vida está baja. Las combinaciones de reliquias y cartas son el puzzle central de cada run.

THE BINDING OF ISAAC: EL CAOS CONTROLADO

Isaac es el roguelite con más variedad disponible. Con cientos de objetos, docenas de personajes y sus propias interacciones e incompatibilidades, ninguna partida de Isaac se parece exactamente a otra. Llevas décadas jugando y todavía hay combinaciones que nunca has visto.

El juego tiene una estética perturbadora y un humor negro constante que no es para todo el mundo. Pero si conectas con su tono, ofrece una profundidad de sistemas que pocos juegos del género igualan. Las Repentance y sus expansiones previas han añadido tanto contenido al juego original que hoy es uno de los títulos más completos del género.

DEAD CELLS: CUANDO EL MOVIMIENTO ES LA RECOMPENSA

Dead Cells es el roguelite más satisfactorio en términos de sensación de movimiento. La animación del personaje es extraordinariamente fluida, los ataques tienen peso visual, el roll de esquive tiene un frame de invulnerabilidad preciso. Moverse por los niveles de Dead Cells tiene valor propio antes de añadir la complejidad de las armas.

El sistema de sinergias entre ítems está diseñado para descubrir combinaciones que multiplican el poder de manera exponencial: el sangrado que activa el veneno, el veneno que activa la ralentización, la ralentización que activa el daño crítico. Cada run es una búsqueda de la sinergia perfecta.

RISK OF RAIN 2: EL ESCALADO DE PODER GLORIOSO

Risk of Rain 2 es el roguelite de acción en tercera persona que mejor ejecuta la fantasía de volverse imparable. El sistema de objetos que se acumulan run tras run puede crear situaciones donde literalmente cada paso que das genera explosiones o cada disparo genera doce misiles adicionales.

El reloj de la dificultad que escala en tiempo real es un diseño brillante: te premia por moverte rápido pero también te tienta con más objetos si te quedas más tiempo. La tensión entre eficiencia y codicia es el corazón de cada decisión.

CONSEJOS PARA NUEVOS JUGADORES

Uno: acepta las muertes. Son parte del diseño, no fallos del juego.
Dos: lee los objetos. En la mayoría de roguelites, el conocimiento de qué hace cada cosa es la verdadera curva de aprendizaje.
Tres: no intentes ganar en las primeras partidas. Explora, experimenta, descubre los sistemas.
Cuatro: empieza con Hades si quieres accesibilidad, con Slay the Spire si quieres profundidad táctica, con Dead Cells si quieres acción rápida.`,
  },

  {
    documentId: "r3nju47jx51td6zbu1l8zjhv",
    title: "Juegos indie que cambiaron la industria",
    readingTime: 11,
    excerpt: "Los estudios independientes llevan décadas demostrando que las mejores ideas no necesitan presupuestos millonarios. Pero algunos juegos indie han ido más lejos: han cambiado lo que la industria entera consideraba posible. Estos son los títulos que lo lograron.",
    content: `Hay una narrativa equivocada que persiste en la industria: que los juegos importantes son los que tienen mayor presupuesto. Los últimos veinte años han desmentido esa idea con una consistencia que ya no deja lugar a dudas. Algunos de los juegos más influyentes, más queridos y más estudiados de la historia reciente del medio han salido de cuartos de estudio pequeños, de equipos de dos personas, de desarrolladores solos con una idea que no podían quitarse de la cabeza.

MINECRAFT: EL JUEGO QUE LO CAMBIÓ TODO

Markus Persson creó Minecraft prácticamente solo. Lo que empezó como un experimento con generación procedural de terreno en 2009 se convirtió en el juego más vendido de la historia con más de 238 millones de copias. Ese número no es solo un récord comercial: es la evidencia de que Minecraft tocó algo en la psique humana que los diseñadores de juegos todavía intentan comprender completamente.

La influencia de Minecraft en la industria es incalculable. Popularizó la construcción libre en 3D como mecánica central. Demostró que los gráficos simples no impedían el éxito masivo. Creó el concepto moderno de juego de supervivencia. Estableció el modelo de acceso anticipado como método de lanzamiento viable. Inspiró directamente decenas de géneros: survival, crafting, voxel art, sandbox abierto.

Pero la influencia más profunda de Minecraft es cultural. Una generación entera de jugadores creció construyendo mundos en él. Ese impacto formativo en cómo esos jugadores piensan sobre los espacios virtuales, sobre la creatividad y sobre la colaboración es algo que todavía no medimos bien.

UNDERTALE: CUANDO EL JUEGO CONOCE AL JUGADOR

Toby Fox creó Undertale solo, en RPG Maker, en menos de tres años, con unos gráficos que deliberadamente parecen un juego de SNES. Y creó uno de los juegos más subversivos y emocionalmente inteligentes que el medio ha producido.

Lo que hace único a Undertale no es su historia, aunque está bien escrita. Es que entiende que estás jugando un videojuego y usa ese entendimiento como herramienta narrativa. Te pregunta qué significa matar enemigos en un RPG. Te enfrenta con las convenciones del género que das por sentadas. Y cuando crees que lo has entendido todo, cambia las reglas de maneras que solo funcionan porque es un videojuego y porque llevas décadas condicionado por las convenciones del medio.

Undertale fue la demostración más clara de que la metaficción funciona en videojuegos de una manera que no funciona en ningún otro medio. Su influencia se ve en juegos como Deltarune, Omori, Inscryption y docenas de títulos que intentan usar las convenciones del juego como material narrativo.

CELESTE: EL PLATAFORMAS QUE HABLA DE SALUD MENTAL

Maddy Thorson y Noel Berry crearon Celeste en menos de un año para un game jam y luego lo expandieron en un proyecto completo. El resultado fue uno de los mejores plataformas de precisión de la última generación y una de las representaciones más honestas de la ansiedad en cualquier medio.

La influencia de Celeste en la conversación sobre salud mental en videojuegos es enorme. Demostró que un juego de plataformas podía hablar de temas serios sin perder su identidad como juego. La mecánica de la Sombra de Madeline, la parte oscura que te persigue y que al final tienes que abrazar en lugar de derrotar, es una de las más inteligentes que el género ha producido.

El Modo Asistente de Celeste también marcó un precedente: opciones de accesibilidad presentadas sin vergüenza, como herramientas para que más gente pudiera disfrutar la experiencia. No como una manera de "hacer trampa" sino como reconocimiento de que los juegos deben ser accesibles a jugadores con distintas capacidades y disponibilidad de tiempo.

HOLLOW KNIGHT: TRES PERSONAS Y UN MUNDO COMPLETO

Team Cherry es un equipo de tres personas en Adelaida, Australia. Con Hollow Knight crearon uno de los mundos más detallados, más coherentes y más ricos en lore de cualquier juego independientemente de su presupuesto. El reino de Hallownest, con su historia de civilización insecto en declive, su geografía que tiene sentido interno y sus decenas de personajes con historias propias, es un logro de diseño que avergüenza a estudios con presupuestos cien veces mayores.

La influencia de Hollow Knight en el metroidvania moderno es directa. Cualquier juego del género lanzado después de 2017 se compara inevitablemente con él. Su mapa laberíntico que se revela orgánicamente, su sistema de amuletos para personalizar el build, sus jefes con patrones elaborados y su lore ambiental contado sin exposición directa son el estándar.

STARDEW VALLEY: UNO VS UNA INDUSTRIA

Eric Barone, ConcernedApe, dedicó cuatro años a desarrollar Stardew Valley solo. Un solo programador, artista, compositor y diseñador. El resultado vendió más de 20 millones de copias y se convirtió en el simulador de granja más querido del mercado, superando a la propia saga Harvest Moon que lo inspiró.

Stardew Valley demostró que el valor percibido de un juego no tiene relación con el número de personas que lo hicieron. Y que los jugadores tienen hambre de experiencias tranquilas, amables y sin presión en un mercado donde la mayoría de juegos grandes compiten por la adrenalina.

HADES, DISCO ELYSIUM Y EL FUTURO

El indie moderno ha producido Hades, que redefinió el roguelite y ganó prácticamente todos los premios de 2020. Disco Elysium, que reinventó el RPG de texto y la escritura en videojuegos. Return of the Obra Dinn, que demostró que los puzzles de deducción podían ser tan emocionantes como cualquier acción. Outer Wilds, que creó un tipo de exploración y narrativa que no existía antes.

El espacio indie sigue siendo donde los experimentos más interesantes ocurren. Porque cuando no tienes que justificar un presupuesto de cien millones de dólares ante un consejo de accionistas, puedes hacer juegos raros, personales y arriesgados. Y a veces esos juegos cambian todo lo que viene después.`,
  },

  {
    documentId: "mr1ylj3n2j4t4kh5watvtqvf",
    title: "Por qué los juegos de terror funcionan",
    readingTime: 9,
    excerpt: "El terror es el género más difícil de ejecutar en videojuegos. A diferencia del cine, el jugador tiene control, lo que transforma radicalmente cómo se genera el miedo. Analizamos qué separa el terror que funciona del que no, y por qué algunos juegos te persiguen mucho después de apagarlos.",
    content: `El terror en videojuegos debería ser imposible. O al menos mucho más difícil de lograr que en cine. En una película de terror, el director controla exactamente lo que ves, cuándo lo ves y a qué velocidad se desarrolla la amenaza. El espectador es pasivo, indefenso. En un videojuego, el jugador tiene agencia. Puede girar la cámara. Puede parar. Puede mirar hacia otro lado. Y sin embargo, los mejores juegos de terror consiguen algo que el cine raramente alcanza: convertir el miedo en algo que el jugador construye activamente, lo que lo hace más personal y más duradero.

EL MIEDO VIENE DE LA ANTICIPACIÓN, NO DEL SUSTO

La distinción más importante del diseño de terror es la diferencia entre el susto y el miedo. Un susto es un estímulo de alta intensidad y corta duración: un ruido fuerte, algo que salta a la pantalla. Produce adrenalina pero no terror real. El miedo es una emoción sostenida que requiere anticipación, contexto y la posibilidad de consecuencias.

Los mejores juegos de terror casi no usan jump scares. SOMA, que es posiblemente el juego de terror más efectivo de la última década, tiene apenas dos o tres momentos de susto convencional. Lo que tiene en cambio es una atmósfera de angustia existencial constante construida sobre preguntas filosóficas que no tienen respuesta tranquilizadora. ¿Qué queda de ti cuando tu conciencia se copia a una máquina? ¿La copia eres tú? ¿Qué le ocurre al original?

Esas preguntas no tienen respuesta. Y la imposibilidad de resolverlas crea una tensión que permanece mucho después de cerrar el juego.

LA IMPOTENCIA COMO HERRAMIENTA DE DISEÑO

El survival horror moderno comprendió algo que Resident Evil tardó en entender: quitarle al jugador la capacidad de defenderse es la herramienta de terror más poderosa disponible.

En Amnesia: The Dark Descent y en Outlast, no tienes armas. Cuando aparece un enemigo, solo puedes correr y esconderte. Esa impotencia total convierte cada encuentro en una crisis real. La respuesta de estrés que genera no es la del combate donde puedes ganar, es la del peligro donde la única opción es la huida.

Amnesia: The Bunker refinó esta fórmula añadiendo una capa sistémica. El generador de luz que hace ruido. La linterna que consume combustible. Las ratas que destruyen objetos. Todos estos sistemas crean una economía de recursos que convierte la supervivencia en un problema de gestión bajo presión extrema. No solo tienes miedo de la criatura: tienes miedo de quedarte sin luz, de hacer demasiado ruido, de encontrar que el pasillo que necesitas está bloqueado.

EL DISEÑO DE SONIDO ES EL 50% DEL TERROR

No hay buen juego de terror con mal diseño de sonido. Es una regla sin excepciones. El audio en el terror no es solo ambiental: es el sistema de información principal que el jugador usa para evaluar el peligro.

Alien: Isolation entiende esto mejor que ningún otro juego. El Xenomorfo no siempre es visible, pero siempre es audible si sabes escuchar. Los pasos metálicos en los conductos por encima de ti. El siseo de los sistemas de ventilación. Las alarmas distantes que cambian de tono cuando la criatura está cerca. Aprendes a interpretar el sonido como información de supervivencia, lo que significa que el juego te tiene alerta y procesando datos constantemente, incluso cuando no está ocurriendo nada visible.

El diseño de audio de Amnesia: The Bunker lleva esto más lejos. En un juego donde el ruido que produces determina si la criatura te encuentra, el sonido de tus propios pasos se convierte en una fuente de ansiedad. Cada crujido del suelo. Cada puerta que golpea al abrirse. Tu propia respiración. El juego convierte el acto de moverte en algo que evalúas constantemente.

RESIDENT EVIL: LA EVOLUCIÓN DEL TERROR DE SUPERVIVENCIA

Resident Evil 7 fue el regreso más inesperado de la historia de la franquicia. Después de años de action horror con RE5 y RE6, Capcom cambió completamente de dirección con una primera persona claustrofóbica ambientada en una casa de Louisiana. La familia Baker, con Jack como patriarca inmortal e impredecible, creó el primer Resident Evil que daba genuinamente miedo desde los años 90.

Resident Evil 2 Remake y RE4 Remake demostraron que la fórmula clásica podía actualizarse sin perder lo que la hacía especial. El uso del espacio, la gestión de recursos limitados y la tensión de los encuentros con enemigos perseguidos por mantiene el espíritu del survival horror mientras moderniza los controles.

Silent Hill 2 sigue siendo la cima del terror psicológico en videojuegos. No porque sus monstruos sean aterradores, sino porque son manifestaciones del estado mental de James Sunderland. El juego usa el lenguaje del terror para explorar la culpa, el duelo y la represión de una manera que ningún otro género podría hacer de la misma forma.

POR QUÉ EL TERROR EN VIDEOJUEGOS ES ÚNICO

Hay una dimensión del terror en videojuegos que no tiene equivalente en otros medios: la responsabilidad del jugador. En una película de terror, el protagonista toma decisiones y el espectador las observa. En un juego, tú tomas esas decisiones. Cuando abres la puerta sabiendo que algo está al otro lado, la adrenalina que sientes es tuya. Cuando te escondes debajo de una cama y escuchas los pasos acercarse, estás cognitivamente presente en esa situación de una manera que el cine no puede replicar.

Los mejores juegos de terror entienden que esa participación activa es su mayor ventaja y la explotan completamente.`,
  },

  {
    documentId: "wiof3k69xbp9mj29m4jtow1a",
    title: "Los shooters que definieron una generación",
    readingTime: 11,
    excerpt: "El shooter es el género más jugado de la historia de los videojuegos. Pero entre los cientos de títulos que han llegado al mercado, algunos pocos han dejado una huella permanente en cómo entendemos el género. Estos son los shooters que cambiaron las reglas y por qué siguen siendo relevantes.",
    content: `El shooter en primera persona es el género que más ha definido la cultura gaming de las últimas tres décadas. Desde Doom en 1993 hasta Valorant en 2020, los FPS han sido el tipo de juego que más jugadores ha congregado, más horas ha consumido y más debates ha generado. Pero no todos los shooters son iguales. Algunos son entretenimiento desechable. Otros cambian cómo todo el mundo hace shooters durante los siguientes diez años.

HALO: COMBAT EVOLVED — EL SHOOTER QUE SALVÓ EL MANDO

Antes de Halo, el consenso general era que los shooters en primera persona no podían funcionar bien con un mando de consola. Eran juegos de PC: necesitaban la precisión del ratón. Bungie y Microsoft demostraron en 2001 que ese consenso era simplemente falta de imaginación.

Halo: Combat Evolved diseñó un sistema de apuntado con asistencia que se sentía natural, implementó el sistema de dos armas simultáneas que obligaba a la gestión táctica, y creó una IA para los Covenant que todavía hoy se estudia en diseño de juegos. Los Grunts que huyen en pánico cuando pierden a su Elite líder. Los Elites que flanquean, buscan cobertura y responden a tus tácticas. El Jackal que sujeta el escudo solo en el costado donde estás apuntando.

El nivel The Silent Cartographer es aún hoy uno de los mejores diseños de nivel en shooters: abierto, con múltiples rutas, con objetivos claros y una música que escala con la intensidad del combate. La revelación de qué es realmente el Anillo Sagrado a mitad del juego cambia completamente el tono de todo lo que sigue.

HALF-LIFE 2: EL SHOOTER COMO NARRATIVA INMERSIVA

Valve revolucionó el FPS con Half-Life en 1998 al eliminar las cinemáticas y contar la historia completamente desde la primera persona sin interrumpir el control del jugador. Half-Life 2 en 2004 llevó esa filosofía más lejos con el motor Source y su simulación de física.

El Gravity Gun es el gadget de shooter más inteligente diseñado. No solo es una herramienta de combate: es una herramienta de interacción con el mundo que hace que cada entorno sea un campo de posibilidades. Y el nivel Ravenholm, sin armas convencionales útiles y con el Gravity Gun lleno de sierras circulares, sigue siendo una de las secciones más icónicas de cualquier FPS.

La narrativa de Half-Life 2 no se explica: se vive. Ciudad 17, el Combine, el doctor Breen en los monitores, la resistencia humana. Todo se comunica a través del entorno y la observación sin una sola escena de exposición. Es el shooter más imitado de la historia.

COUNTER-STRIKE: EL PADRE DE LOS SHOOTERS TÁCTICOS

Counter-Strike empezó como un mod de Half-Life en 1999 y se convirtió en la franquicia de FPS competitivo más longeva de la historia. CS2, la versión actual, lleva esencialmente la misma filosofía de diseño que el mod original: dos equipos, dinero que gestionar, armas con patrones de spray a memorizar, mapas con geometría que favorece el conocimiento táctico.

La economía de CS es el sistema más elegante del shooter competitivo. Perder te da dinero de consolación. Ganar demasiado puede dejarte sin fondos si no lo gestionas. Comprar el arma equivocada en el momento equivocado puede arruinar tres rondas seguidas. La gestión del presupuesto es tan importante como el aim.

Los mapas de CS clásicos, Dust2, Mirage, Inferno, son obras de ingeniería de diseño de niveles. Cada ángulo de Dust2 tiene nombre porque la comunidad lleva veinte años nombrándolos para comunicarse tácticamente. Esa riqueza de vocabulario compartido es la señal de cuánto conocimiento se ha acumulado sobre esos espacios.

TITANFALL 2: EL SHOOTER MÁS INFRAVALORADO

Titanfall 2 tiene la mejor campaña de shooter de la última década. Lanzado en el peor momento posible, entre Battlefield 1 y Call of Duty: IW, fue invisible comercialmente. Pero su campaña es un ejercicio de diseño de niveles que ningún otro shooter ha igualado.

Cada nivel de la campaña introduce una mecánica nueva y única que no vuelve a aparecer. Effect and Cause, donde alternas entre el pasado y el presente pulsando un botón, es uno de los mejores niveles de cualquier shooter jamás diseñado. El nivel con el fabricante de robots, el clímax en caída libre... Titanfall 2 tiene seis horas de campaña y más ideas originales que la mayoría de shooters con el triple de duración.

La relación entre el Piloto y BT-7274, el Titán, es el corazón emocional del juego. BT es literal, no entiende la ironía, y eso lo hace genuinamente encantador cuando la historia explota su ingenuidad en el clímax.

VALORANT: EL EQUILIBRIO IMPOSIBLE

Valorant resolvió un problema que el mercado consideraba irresoluble: cómo hacer que los shooters de habilidades especiales al estilo de Overwatch fueran competitivamente viables al nivel de CS. El truco es que las habilidades de los agentes no reemplazan el aim, lo complementan.

La firma de Sage crea cobertura o ralentiza al enemigo pero no hace daño. El ash de Sova revela posiciones pero no elimina al oponente. Las habilidades de Jett le dan movilidad pero no la hacen invulnerable. En la mayoría de encuentros directos, el jugador con mejor aim gana independientemente de las habilidades. Las habilidades crean las situaciones, el aim las resuelve.

El diseño de mapas de Valorant es extraordinariamente preciso. Cada ángulo, cada esquina, cada point de entrada tiene cálculo detrás. Ascent y Bind son dos de los mapas competitivos más bien diseñados del mercado, cada uno con mecánicas de mapa únicas que crean estrategias propias.

APEX LEGENDS Y EL BATTLE ROYALE EVOLUCIONADO

Respawn tomó todo lo que había aprendido con Titanfall 2 sobre movimiento fluido y lo integró en un battle royale. El resultado es el battle royale con mejor sensación de movimiento del mercado. El bunny hop, el slide jump, el rapelling de Pathfinder, el sistema de cuerda de Loba.

Pero la innovación más importante de Apex Legends es el sistema de ping. Con un solo botón, puedes señalar enemigos, recursos, rutas y puntos de interés de maneras que hacen innecesario el micrófono para comunicarse eficientemente. Fue tan bueno que prácticamente todos los juegos de equipo lanzados desde 2019 lo han copiado en alguna forma.`,
  },

  {
    documentId: "m1ym4j39618bdla1xm6m8efq",
    title: "Estrategia en videojuegos: cómo empezar",
    readingTime: 10,
    excerpt: "Los juegos de estrategia tienen fama de ser complejos, lentos y difíciles de aprender. Esa fama está en parte justificada pero también oculta una verdad: hay estrategia para todos los niveles, y los puntos de entrada correctos hacen que el género sea tan satisfactorio como cualquier otro. Esta es tu guía.",
    content: `La estrategia tiene un problema de marketing. Cuando alguien que no conoce el género piensa en un juego de estrategia, imagina interfaces llenas de números, curvas de aprendizaje empinadas, partidas que duran seis horas y la necesidad de memorizar árboles tecnológicos completos antes de empezar. Esa imagen no es completamente incorrecta para algunos títulos. Pero oculta una verdad fundamental: la satisfacción de ejecutar un plan que funciona, de construir un ejército desde cero o de manejar una civilización desde la Edad de Piedra hasta el espacio es una sensación que ningún otro género replica.

QUÉ ES LA ESTRATEGIA Y POR QUÉ IMPORTA

Los juegos de estrategia son, en su esencia, sistemas de toma de decisiones con consecuencias diferidas. No reaccionas a un estímulo inmediato como en un shooter: planificas, asignas recursos, anticipas las acciones del oponente y construyes estructuras que funcionarán dentro de diez minutos o diez turnos. La satisfacción viene de ver cómo tus decisiones pasadas producen resultados en el presente.

Hay dos categorías principales que responden a temperamentos de jugador distintos:

La estrategia en tiempo real (RTS) ocurre simultáneamente para todos los jugadores. Tomas decisiones mientras el oponente también actúa. La presión del tiempo es parte del diseño y la velocidad de ejecución (medida en acciones por minuto) es tan importante como la calidad de las decisiones. StarCraft II, Age of Empires IV, Company of Heroes.

La estrategia por turnos elimina la presión del tiempo. Cada jugador actúa cuando le corresponde y puede pensar tanto como quiera. La profundidad táctica puede ser mayor porque no hay límite de tiempo para analizar. Civilization VI, XCOM 2, Into the Breach, Crusader Kings III.

INTO THE BREACH: EL PUNTO DE ENTRADA PERFECTO

Si nunca has jugado un juego de estrategia y quieres empezar, Into the Breach es la respuesta. El juego de Subset Games tiene el diseño más elegante del género: cada turno, toda la información relevante está visible en la pantalla. Los ataques enemigos se telegrafían completamente antes de que ocurran. No hay incertidumbre, no hay niebla de guerra, no hay azar oculto. Solo el puzzle de cómo usar tus tres mecas para evitar el máximo daño con los recursos disponibles.

Puedes aprender Into the Breach en quince minutos y pasarte cien horas encontrando nuevas maneras de resolver sus situaciones. Esa relación entre accesibilidad y profundidad es el estándar de diseño que todo juego de estrategia debería aspirar a conseguir.

AGE OF EMPIRES IV: LA PUERTA DE ENTRADA AL RTS

Age of Empires IV es el RTS más accesible del mercado para nuevos jugadores sin ser condescendiente con los veteranos. Las campañas históricas enseñan las mecánicas progresivamente y están presentadas con documentales reales grabados en las localizaciones históricas que contextualizan cada batalla.

El concepto central del RTS es la gestión simultánea de múltiples sistemas: economía de recursos, producción de unidades, gestión del mapa y control de ejércitos en combate. Al principio esto parece imposible de hacer todo a la vez. La habilidad clave no es hacerlo todo perfectamente: es saber qué ignorar momentáneamente para concentrarte en lo urgente.

Las ocho civilizaciones de AoE IV tienen suficiente diferenciación para que elegir una tenga impacto real en tu estrategia. Los mongoles pueden mover su sede permanentemente, los ingleses tienen defensas de granjas únicas, los chinos desbloquean tecnologías más rápido. Cada civilización sugiere un estilo de juego diferente que puedes explorar progresivamente.

CIVILIZATION VI: LA HISTORIA EN TUS MANOS

Sid Meier definió el 4X (explorar, expandir, explotar, exterminar) y Civilization es su expresión más completa. En Civilization VI, cada partida es una historia diferente: la primera en llegar al espacio, el imperio que casi gana pero fue destruido por la plaga del año 1200, la civilización que dominó culturalmente el mundo sin librar una sola guerra.

El sistema de distritos de Civ VI es su innovación más importante: los edificios ya no se apilan en la ciudad sino que ocupan casillas del mapa. Planificar dónde colocar el Campus de investigación, el Puerto y la Zona Industrial convirtió la construcción de ciudades en un puzzle estratégico.

La curva de aprendizaje de Civilization es real pero manageable. La primera partida en dificultad Príncipe es esencialmente tutorial. Con cada partida adicional ves un sistema que no habías explorado, una victoria alternativa que no habías intentado, una civilización con mecánicas que no conocías.

XCOM 2: ESTRATEGIA CON PESO EMOCIONAL

XCOM 2 es único en el género porque sus unidades tienen nombres, caras y historia. Cuando el soldado que llevas veinticinco misiones muere en un emboscado por no revisar el ángulo de flanqueo, esa pérdida tiene un peso emocional que ningún otro juego de estrategia replica.

La permadeath, la muerte permanente de unidades, es la mecánica que crea ese peso. Saber que una decisión equivocada puede significar la pérdida de tu mejor francotirador te hace evaluar cada movimiento con una atención que los juegos sin consecuencias reales no consiguen generar.

CRUSADER KINGS III: LA ESTRATEGIA COMO NARRATIVA

Crusader Kings III no te vende como un juego de estrategia: te vende como un generador de historias. Y es verdad. Una partida típica de CK3 produce situaciones que ningún escritor hubiera inventado: el rey piadoso que por un accidente genético hereda el rasgo de vampirismo de un antepasado lejano y tiene que decidir si abrazar esa naturaleza, la reina que conspira contra su propio hijo porque su nieto promete ser mejor heredero, el duque que acumula tanta riqueza a través del comercio que puede comprar la lealtad de nobles más poderosos que él.

Es el juego de estrategia más adecuado para jugadores que disfrutan más de la narrativa que del cálculo militar. La complejidad está ahí, pero el juego te invita a habitarla como una historia en lugar de resolverla como un problema.

EL ERROR MÁS COMÚN: QUERER OPTIMIZARLO TODO

El mayor obstáculo para los nuevos jugadores de estrategia es la parálisis de análisis. La necesidad de tomar la decisión óptima en cada momento. La estrategia no funciona así. Los expertos en estrategia cometen errores constantemente: la diferencia es que han jugado suficiente como para saber cuándo un error es recuperable y cuándo no.

La única manera de mejorar en estrategia es jugar, perder, entender por qué perdiste y jugar de nuevo. No hay tutorial que reemplace esa experiencia. No hay guía que sustituya las horas de partida. El género recompensa la experiencia acumulada más que cualquier otro, lo que significa que cada derrota es inversión.`,
  },
];

async function main() {
  console.log("Actualizando artículos con contenido largo...\n");
  let ok = 0;
  for (const article of ARTICLES) {
    const result = await api("PUT", `/api/articles/${article.documentId}`, {
      excerpt:      article.excerpt,
      content:      article.content,
      readingTime:  article.readingTime,
      publishedAt:  new Date().toISOString(),
    });
    if (result) {
      console.log(`  ✓ ${article.title}`);
      ok++;
    } else {
      console.log(`  ✗ ${article.title}`);
    }
  }
  console.log(`\n✓ ${ok}/${ARTICLES.length} artículos actualizados`);
}

main().catch(console.error);
