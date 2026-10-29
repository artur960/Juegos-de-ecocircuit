// ======================================
// ECOQUIZ
// ======================================


// Preguntas del juego

const preguntas = [

    {
        emoji: "📱",

        pregunta:
            "¿Qué debemos hacer con un celular viejo que ya no utilizamos?",

        respuestas: [

            "Tirarlo a la basura común",

            "Reciclarlo en un centro autorizado",

            "Dejarlo en la calle",

            "Quemarlo"

        ],

        correcta: 1,

        explicacion:
            "Los celulares contienen materiales que pueden recuperarse y también componentes que pueden contaminar el ambiente. Lo correcto es llevarlos a un punto de reciclaje autorizado."
    },


    {
        emoji: "🔋",

        pregunta:
            "¿Por qué debemos tener cuidado con las baterías?",

        respuestas: [

            "Porque pueden contaminar y ser peligrosas",

            "Porque son de papel",

            "Porque no pesan nada",

            "Porque desaparecen solas"

        ],

        correcta: 0,

        explicacion:
            "Las baterías pueden contener sustancias contaminantes y deben manejarse correctamente. Nunca deben tirarse junto con la basura común."
    },


    {
        emoji: "💻",

        pregunta:
            "¿Qué podemos hacer con una computadora que ya no funciona?",

        respuestas: [

            "Tirarla al río",

            "Quemarla",

            "Llevarla a reciclaje electrónico",

            "Dejarla en la calle"

        ],

        correcta: 2,

        explicacion:
            "Las computadoras contienen materiales que pueden reutilizarse o recuperarse. Los centros especializados pueden separar estos materiales correctamente."
    },


    {
        emoji: "♻️",

        pregunta:
            "¿Qué significa reciclar?",

        respuestas: [

            "Convertir residuos en materiales que pueden aprovecharse",

            "Tirar todo a la basura",

            "Quemar los residuos",

            "Esconder los residuos"

        ],

        correcta: 0,

        explicacion:
            "Reciclar significa recuperar materiales de los residuos para que puedan ser aprovechados nuevamente."
    },


    {
        emoji: "🌎",

        pregunta:
            "¿Qué puede ocurrir si tiramos basura electrónica incorrectamente?",

        respuestas: [

            "Ayudamos al planeta",

            "Puede contaminar el ambiente",

            "Desaparece inmediatamente",

            "Se convierte automáticamente en agua"

        ],

        correcta: 1,

        explicacion:
            "La basura electrónica puede liberar sustancias contaminantes si no se maneja correctamente."
    },


    {
        emoji: "🖥️",

        pregunta:
            "¿Cuál de estos objetos es un residuo electrónico?",

        respuestas: [

            "Una computadora",

            "Una hoja de papel",

            "Una botella de agua",

            "Una caja de cartón"

        ],

        correcta: 0,

        explicacion:
            "Las computadoras son aparatos eléctricos y electrónicos. Cuando dejan de utilizarse correctamente, pueden convertirse en residuos electrónicos."
    },


    {
        emoji: "🔌",

        pregunta:
            "¿Qué deberíamos hacer con los cables que ya no utilizamos?",

        respuestas: [

            "Tirarlos al río",

            "Quemarlos",

            "Llevarlos a un punto de reciclaje",

            "Enterrarlos"

        ],

        correcta: 2,

        explicacion:
            "Los cables contienen materiales que pueden recuperarse. Lo recomendable es entregarlos en un lugar que gestione residuos electrónicos."
    },


    {
        emoji: "🌱",

        pregunta:
            "¿Cuál es uno de los beneficios del reciclaje electrónico?",

        respuestas: [

            "Aumentar la contaminación",

            "Recuperar materiales y reducir residuos",

            "Contaminar los ríos",

            "Generar más basura"

        ],

        correcta: 1,

        explicacion:
            "El reciclaje electrónico permite recuperar materiales y ayuda a disminuir la cantidad de residuos que terminan en lugares inadecuados."
    },


    {
        emoji: "📷",

        pregunta:
            "¿Una cámara digital vieja puede considerarse residuo electrónico?",

        respuestas: [

            "Sí",

            "No",

            "Solo si es nueva",

            "Solo si tiene batería"

        ],

        correcta: 0,

        explicacion:
            "Sí. Una cámara digital es un aparato electrónico y, cuando deja de utilizarse, debe gestionarse adecuadamente."
    },


    {
        emoji: "🌎",

        pregunta:
            "¿Cuál es la mejor actitud frente a la basura electrónica?",

        respuestas: [

            "Ignorarla",

            "Tirarla donde sea",

            "Reducir, reutilizar y reciclar correctamente",

            "Quemarla"

        ],

        correcta: 2,

        explicacion:
            "Una buena práctica es reducir el consumo innecesario, reutilizar los dispositivos cuando sea posible y reciclarlos correctamente cuando ya no puedan utilizarse."
    }

];


// Variables

let preguntaActual = 0;

let puntos = 0;


// Elementos HTML

const inicio =
    document.getElementById("inicio");

const juego =
    document.getElementById("juego");

const final =
    document.getElementById("final");

const botonComenzar =
    document.getElementById("botonComenzar");

const botonSiguiente =
    document.getElementById("siguiente");

const botonNuevamente =
    document.getElementById("jugarNuevamente");

const textoPregunta =
    document.getElementById("textoPregunta");

const emojiPregunta =
    document.getElementById("emojiPregunta");

const respuestas =
    document.getElementById("respuestas");

const explicacion =
    document.getElementById("explicacion");

const puntosTexto =
    document.getElementById("puntos");

const numeroPregunta =
    document.getElementById("numeroPregunta");

const puntuacionFinal =
    document.getElementById("puntuacionFinal");

const mensajeFinal =
    document.getElementById("mensajeFinal");


// ======================================
// COMENZAR
// ======================================

botonComenzar.addEventListener(
    "click",
    comenzarJuego
);


function comenzarJuego() {

    preguntaActual = 0;

    puntos = 0;

    puntosTexto.textContent = puntos;

    inicio.classList.add("oculto");

    final.classList.add("oculto");

    juego.classList.remove("oculto");

    mostrarPregunta();

}


// ======================================
// MOSTRAR PREGUNTA
// ======================================

function mostrarPregunta() {

    const pregunta =
        preguntas[preguntaActual];


    numeroPregunta.textContent =
        preguntaActual + 1;


    emojiPregunta.textContent =
        pregunta.emoji;


    textoPregunta.textContent =
        pregunta.pregunta;


    respuestas.innerHTML = "";


    explicacion.classList.add(
        "oculto"
    );


    botonSiguiente.classList.add(
        "oculto"
    );


    pregunta.respuestas.forEach(
        function(texto, indice) {

            const boton =
                document.createElement("button");


            boton.textContent =
                texto;


            boton.classList.add(
                "respuesta"
            );


            boton.addEventListener(
                "click",
                function() {

                    seleccionarRespuesta(
                        indice,
                        boton
                    );

                }
            );


            respuestas.appendChild(
                boton
            );

        }
    );

}


// ======================================
// SELECCIONAR RESPUESTA
// ======================================

function seleccionarRespuesta(
    indice,
    botonSeleccionado
) {

    const pregunta =
        preguntas[preguntaActual];


    const botones =
        document.querySelectorAll(
            ".respuesta"
        );


    // Evitar responder varias veces

    botones.forEach(
        function(boton) {

            boton.disabled = true;

        }
    );


    if (
        indice ===
        pregunta.correcta
    ) {

        puntos += 10;

        puntosTexto.textContent =
            puntos;

        botonSeleccionado.classList.add(
            "correcta"
        );

    }

    else {

        botonSeleccionado.classList.add(
            "incorrecta"
        );


        botones[
            pregunta.correcta
        ].classList.add(
            "correcta"
        );

    }


    explicacion.textContent =
        "💡 " + pregunta.explicacion;


    explicacion.classList.remove(
        "oculto"
    );


    botonSiguiente.classList.remove(
        "oculto"
    );

}


// ======================================
// SIGUIENTE PREGUNTA
// ======================================

botonSiguiente.addEventListener(
    "click",
    siguientePregunta
);


function siguientePregunta() {

    preguntaActual++;


    if (
        preguntaActual >=
        preguntas.length
    ) {

        mostrarResultado();

    }

    else {

        mostrarPregunta();

    }

}


// ======================================
// RESULTADO FINAL
// ======================================

function mostrarResultado() {

    juego.classList.add(
        "oculto"
    );

    final.classList.remove(
        "oculto"
    );


    puntuacionFinal.textContent =
        puntos + " / 100";


    if (puntos === 100) {

        mensajeFinal.textContent =
            "🏆 ¡Excelente! Eres un experto en reciclaje electrónico.";

    }

    else if (puntos >= 70) {

        mensajeFinal.textContent =
            "🌱 ¡Muy bien! Tienes buenos conocimientos sobre reciclaje.";

    }

    else if (puntos >= 50) {

        mensajeFinal.textContent =
            "👍 ¡Buen trabajo! Sigue aprendiendo.";

    }

    else {

        mensajeFinal.textContent =
            "📚 ¡No te rindas! Ahora conoces cosas nuevas sobre reciclaje.";

    }

}


// ======================================
// JUGAR NUEVAMENTE
// ======================================

botonNuevamente.addEventListener(
    "click",
    comenzarJuego
);