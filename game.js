// game.js
let currentLevel = 0;

const container = document.getElementById('game-container');

function startGame() {
  showIntro();
}

function showIntro() {
  container.innerHTML = `
    <h1>Bienvenido a mi juego</h1>
    <p>Supera los 3 niveles para ganar. ¿Listo?</p>
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
    <p>Responde las siguientes preguntas de opción múltiple.</p>
    <button onclick="loadLevel1()">Comenzar Nivel 1</button>
  `;
}

function loadLevel1() {
  container.innerHTML = `
    <h3>Pregunta 1</h3>
    <p>¿Cuál es la capital de Francia?</p>
    <button onclick="checkAnswer(1,true)">París</button>
    <button onclick="checkAnswer(1,false)">Roma</button>
  `;
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
