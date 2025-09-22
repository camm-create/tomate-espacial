// game.js
let currentLevel = 0;

const container = document.getElementById('game-container');

function startGame() {
  showIntro();
}

function showIntro() {
  container.innerHTML = `
    <h1>La misión ha comenzado</h1>
    <p>Estudiando los efectos de la baja gravedad en el crecimiento de algunas plantas, el astronauta Frank Rubio ha perdido un tomate en la Estación Espacial Internacional. Para ayudarlo a recuperar el tomate perdido y completar la misión, deberás superar algunos retos...</p>
    <button onclick="startLevel(1)">¡Empezar!</button>
  `;
}

function startLevel(level) {
  currentLevel = level;
  switch(level) {
    case 1:
      showLevel1Intro();
      break;
    case 2:
      showLevel2Intro();
      break;
    case 3:
      showLevel3Intro();
      break;
    default:
      showWinScreen();
  }
}

function showLevel1Intro() {
  container.innerHTML = `
    <h2>Nivel 1</h2>
    <p>Respondé las siguientes preguntas.</p>
    <button onclick="loadLevel1()">Comenzar Nivel 1</button>
  `;
}

function loadLevel1() {
  [
  {
    "pregunta": "¿Qué es un tomate?",
    "opciones": ["Una fruta", "Una verdura", "Un animal"],
    "respuesta": 0
  },
  {
    "pregunta": "¿Cuál es el planeta más cercano al Sol?",
    "opciones": ["Venus", "Mercurio", "Marte"],
    "respuesta": 1
  }
    {
    "pregunta": "En la estación Espacial Internacional, la gravedad es...",
    "opciones": ["Muy alta", "Normal, como en La Tierra", "Muy baja, casi cero"],
    "respuesta": 2
  }
]

}

function checkAnswer(question, isCorrect) {
  if (isCorrect) {
    alert("¡Correcto!");
    startLevel(2);
  } else {
    alert("Incorrecto. Intenta de nuevo.");
    loadLevel1();
  }
}

function showLevel2Intro() {
  container.innerHTML = `
    <h2>Nivel 2</h2>
    <p>Ordena las imágenes en el orden correcto.</p>
    <button onclick="loadLevel2()">Comenzar Nivel 2</button>
  `;
}

function loadLevel2() {
  container.innerHTML = `
    <p>Aquí iría el juego de ordenar imágenes (usando drag & drop)</p>
    <button onclick="startLevel(3)">Siguiente Nivel</button>
  `;
}

function showLevel3Intro() {
  container.innerHTML = `
    <h2>Nivel 3</h2>
    <p>Recorre el laberinto para encontrar la salida.</p>
    <button onclick="loadLevel3()">Comenzar Nivel 3</button>
  `;
}

function loadLevel3() {
  container.innerHTML = `
    <p>Aquí iría el mini-laberinto (podemos usar un grid o canvas)</p>
    <button onclick="startLevel(4)">Finalizar</button>
  `;
}

function showWinScreen() {
  container.innerHTML = `
    <h1>¡Felicidades!</h1>
    <p>Completaste los 3 niveles 🎉</p>
  `;
}

startGame();
