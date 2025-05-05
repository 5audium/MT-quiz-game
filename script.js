let currentCategory = "";
let currentSet = [];
let currentIndex = 0;

let capitalSet = [];
let capitalIndex = 0;

let generalSet = [];
let generalIndex = 0;

let initialSet = [];
let initialIndex = 0;

function selectCategory(category) {
  currentCategory = category;
  document.getElementById("category-section").classList.add("hidden");
  document.getElementById("set-section").classList.remove("hidden");
}

function startGame(setNumber) {
  if (currentCategory === "capital") {
    startCapitalQuiz(setNumber);
  } else if (currentCategory === "general") {
    startGeneralQuiz(setNumber);
  } else if (currentCategory === "initial") {
    startInitialQuiz(setNumber);
  } else {
    currentSet = imageSets[currentCategory][setNumber];
    currentIndex = 0;
    document.getElementById("set-section").classList.add("hidden");
    document.getElementById("quiz-section").classList.remove("hidden");
    showImage();
  }
}

function showImage() {
  document.getElementById("logo").src = currentSet[currentIndex].file;
  document.getElementById("answerBox").style.display = "none";
}

function nextImage() {
  if (currentIndex + 1 >= currentSet.length) {
    alert("세트의 모든 문제가 끝났습니다. 다시 세트를 골라주세요!");
    document.getElementById("quiz-section").classList.add("hidden");
    document.getElementById("set-section").classList.remove("hidden");
    return;
  }
  currentIndex++;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentSet.length) % currentSet.length;
  showImage();
}

function revealAnswer() {
  document.getElementById("answerText").innerText = currentSet[currentIndex].answer;
  document.getElementById("answerBox").style.display = "block";
}

// 수도 퀴즈
function startCapitalQuiz(setNumber) {
  capitalSet = imageSets.capital[setNumber];
  capitalIndex = 0;
  document.getElementById("set-section").classList.add("hidden");
  document.getElementById("capital-quiz-section").classList.remove("hidden");
  showCapitalQuestion();
}

function showCapitalQuestion() {
  const q = capitalSet[capitalIndex];
  document.getElementById("capital-question").innerText = q.question;
  document.getElementById("capital-feedback").innerText = "";
  const choicesDiv = document.getElementById("capital-choices");
  choicesDiv.innerHTML = "";
  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice;
    btn.onclick = () => {
      document.getElementById("capital-feedback").innerText = (choice === q.answer) ? "정답입니다!" : "오답입니다.";
    };
    choicesDiv.appendChild(btn);
  });
}

function nextCapitalQuestion() {
  if (++capitalIndex >= capitalSet.length) {
    alert("세트의 모든 문제가 끝났습니다. 다시 세트를 골라주세요!");
    document.getElementById("capital-quiz-section").classList.add("hidden");
    document.getElementById("set-section").classList.remove("hidden");
    return;
  }
  showCapitalQuestion();
}

function prevCapitalQuestion() {
  capitalIndex = (capitalIndex - 1 + capitalSet.length) % capitalSet.length;
  showCapitalQuestion();
}

// 상식 퀴즈
function startGeneralQuiz(setNumber) {
  generalSet = imageSets.general[setNumber];
  generalIndex = 0;
  document.getElementById("set-section").classList.add("hidden");
  document.getElementById("general-quiz-section").classList.remove("hidden");
  showGeneralQuestion();
}

function showGeneralQuestion() {
  const q = generalSet[generalIndex];
  document.getElementById("general-question").innerText = q.question;
  document.getElementById("general-feedback").innerText = "";
  const choicesDiv = document.getElementById("general-choices");
  choicesDiv.innerHTML = "";
  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice;
    btn.onclick = () => {
      document.getElementById("general-feedback").innerText = (choice === q.answer) ? "정답입니다!" : "오답입니다.";
    };
    choicesDiv.appendChild(btn);
  });
}

function nextGeneralQuestion() {
  if (++generalIndex >= generalSet.length) {
    alert("세트의 모든 문제가 끝났습니다. 다시 세트를 골라주세요!");
    document.getElementById("general-quiz-section").classList.add("hidden");
    document.getElementById("set-section").classList.remove("hidden");
    return;
  }
  showGeneralQuestion();
}

function prevGeneralQuestion() {
  generalIndex = (generalIndex - 1 + generalSet.length) % generalSet.length;
  showGeneralQuestion();
}

// 초성 퀴즈
function startInitialQuiz(setNumber) {
  initialSet = imageSets.initial[setNumber];
  initialIndex = 0;
  document.getElementById("set-section").classList.add("hidden");
  document.getElementById("initial-quiz-section").classList.remove("hidden");
  showInitialQuestion();
}

function showInitialQuestion() {
  const q = initialSet[initialIndex];
  document.getElementById("initial-hint").innerText = q.hint;
}

function nextInitialQuestion() {
  if (++initialIndex >= initialSet.length) {
    alert("세트의 모든 문제가 끝났습니다. 다시 세트를 골라주세요!");
    document.getElementById("initial-quiz-section").classList.add("hidden");
    document.getElementById("set-section").classList.remove("hidden");
    return;
  }
  showInitialQuestion();
}

function prevInitialQuestion() {
  initialIndex = (initialIndex - 1 + initialSet.length) % initialSet.length;
  showInitialQuestion();
}
