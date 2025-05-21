const riddles = [
  {
    question: "Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera.",
    answer: "pera"
  },
  {
    question: "Tiene agujas pero no pincha.",
    answer: "reloj"
  },
  {
    question: "Vuelo de noche, duermo en el día y nunca verás plumas en ala mía.",
    answer: "murciélago"
  }
];

let currentRiddleIndex = 0;

function showRiddle() {
  const riddleElement = document.getElementById("riddle");
  const feedback = document.getElementById("feedback");
  const input = document.getElementById("answer");

  riddleElement.textContent = riddles[currentRiddleIndex].question;
  feedback.textContent = "";
  input.value = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const correctAnswer = riddles[currentRiddleIndex].answer.toLowerCase();
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "¡Correcto! 🎉";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Intenta de nuevo 😕";
    feedback.style.color = "red";
  }
}

function nextRiddle() {
  currentRiddleIndex = (currentRiddleIndex + 1) % riddles.length;
  showRiddle();
}

// Mostrar la primera adivinanza al cargar la página
window.onload = showRiddle;
