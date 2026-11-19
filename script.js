"use strict";
const questions = [
  { topic: "Основы циклов", text: "Что называют экономическим циклом?", options: ["Регулярное чередование подъёмов и спадов деловой активности", "Ежегодное изменение налоговых ставок", "Постоянное увеличение выпуска товаров"], correct: 0 },
  { topic: "Основы циклов", text: "Какие фазы обычно выделяют в классическом деловом цикле?", options: ["Накопление, распределение, обмен и потребление", "Подъём, пик, спад и дно", "Инфляция, дефляция, стагнация и экспорт"], correct: 1 },
  { topic: "Основы циклов", text: "Как называется фаза, когда выпуск и занятость устойчиво растут?", options: ["Подъём (экспансия)", "Спад (рецессия)", "Дно цикла"], correct: 0 },
  { topic: "Основы циклов", text: "Что характеризует пик экономического цикла?", options: ["Минимальный уровень производства и занятости", "Наивысший уровень деловой активности перед спадом", "Период, когда цены перестают меняться"], correct: 1 },
  { topic: "Основы циклов", text: "Что обычно происходит в фазе спада?", options: ["Снижаются выпуск и деловая активность", "Производительность обязательно становится нулевой", "Все цены и доходы одновременно растут"], correct: 0 },
  { topic: "Показатели", text: "Какой показатель чаще всего используют для оценки общего выпуска в экономике?", options: ["Валовой внутренний продукт (ВВП)", "Ключевая ставка", "Индекс потребительского доверия"], correct: 0 },
  { topic: "Показатели", text: "Как обычно ведёт себя безработица во время спада?", options: ["Снижается быстрее, чем в период подъёма", "Как правило, увеличивается", "Не зависит от экономической активности"], correct: 1 },
  { topic: "Показатели", text: "Что означает разрыв выпуска (output gap)?", options: ["Разницу между фактическим и потенциальным выпуском", "Разницу между импортом и экспортом", "Разницу между зарплатой и прибылью"], correct: 0 },
  { topic: "Показатели", text: "Какой показатель часто служит опережающим сигналом будущей активности?", options: ["Число заключённых долгосрочных заказов", "Уже опубликованный ВВП прошлого года", "Сумма выплаченных пенсий"], correct: 0 },
  { topic: "Причины и типы", text: "Какой фактор может запустить экономический спад?", options: ["Резкое падение спроса или крупный финансовый шок", "Сам факт существования денег", "Увеличение продолжительности календарного года"], correct: 0 },
  { topic: "Причины и типы", text: "Что отличает циклическую безработицу от структурной?", options: ["Она связана с изменениями совокупной деловой активности", "Она возникает исключительно из-за смены профессии", "Она всегда длится ровно один месяц"], correct: 0 },
  { topic: "Причины и типы", text: "Какой цикл обычно связывают с колебаниями запасов и называют краткосрочным?", options: ["Цикл Китчина", "Цикл Кондратьева", "Демографический переход"], correct: 0 },
  { topic: "Причины и типы", text: "С какими колебаниями чаще связывают цикл Жюгляра?", options: ["Инвестициями в основной капитал и кредитом", "Только сезонными изменениями погоды", "Изменением численности населения за столетия"], correct: 0 },
  { topic: "Причины и типы", text: "Что обычно понимают под долгими волнами Кондратьева?", options: ["Продолжительные колебания экономической конъюнктуры, связанные в том числе с крупными инновациями", "Повторяющиеся каждую неделю изменения цен", "Ежегодные бюджетные циклы одного предприятия"], correct: 0 },
  { topic: "Политика и развитие", text: "Какую роль играют автоматические стабилизаторы бюджета?", options: ["Смягчают колебания без принятия новых решений каждый раз", "Полностью предотвращают любые кризисы", "Заменяют национальную статистику"], correct: 0 },
  { topic: "Политика и развитие", text: "Какое действие относится к стимулирующей бюджетной политике во время спада?", options: ["Увеличение государственных расходов или временное снижение налогов", "Одновременное сокращение расходов и повышение налогов", "Запрет на все частные инвестиции"], correct: 0 },
  { topic: "Политика и развитие", text: "Как центральный банк может поддержать спрос при замедлении экономики?", options: ["Снизить процентные ставки, если это допускают условия", "Запретить коммерческим банкам выдавать кредиты", "Установить одинаковую зарплату во всех отраслях"], correct: 0 },
  { topic: "Политика и развитие", text: "Почему инвестиции иногда усиливают колебания экономики?", options: ["Компании могут резко менять планы вложений в ответ на ожидания и спрос", "Инвестиции никак не связаны с производством", "Любые инвестиции автоматически уменьшают занятость"], correct: 0 },
  { topic: "Политика и развитие", text: "Что помогает повысить устойчивость национального хозяйства в долгосрочной перспективе?", options: ["Диверсификация экономики, продуктивные инвестиции и развитие навыков", "Зависимость от одного товара и отказ от образования", "Полная отмена сбора экономических данных"], correct: 0 },
  { topic: "Политика и развитие", text: "Почему экономический цикл нельзя надёжно предсказать по одному показателю?", options: ["На экономику одновременно влияют множество факторов и шоков", "Все показатели публикуются только раз в столетие", "Экономические данные никогда не меняются"], correct: 0 }
];

const letters = ["А", "Б", "В"];
const quizContent = document.getElementById("quizContent");
const questionArea = document.getElementById("questionArea");
const questionText = document.getElementById("questionText");
const answersElement = document.getElementById("answers");
const currentNumber = document.getElementById("currentNumber");
const topicTag = document.getElementById("topicTag");
const progressTrack = document.getElementById("progressTrack");
const progressBar = document.getElementById("progressBar");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const result = document.getElementById("result");
let currentIndex = 0;
let correctCount = 0;
let answered = false;

function renderQuestion() {
  const question = questions[currentIndex];
  currentNumber.textContent = String(currentIndex + 1);
  topicTag.textContent = question.topic;
  questionText.textContent = question.text;
  progressBar.style.width = `${(currentIndex / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(currentIndex));
  feedback.textContent = "";
  feedback.className = "feedback";
  nextButton.disabled = true;
  nextButton.innerHTML = currentIndex === questions.length - 1
    ? 'Показать результат <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    : 'Следующий вопрос <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  answersElement.replaceChildren();
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.innerHTML = `<span class="answer-letter">${letters[index]}</span><span class="answer-text"></span>`;
    button.querySelector(".answer-text").textContent = option;
    button.addEventListener("click", () => selectAnswer(index));
    answersElement.append(button);
  });
  questionArea.classList.remove("fade-in");
  void questionArea.offsetWidth;
  questionArea.classList.add("fade-in");
  answered = false;
}

function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;
  const question = questions[currentIndex];
  const answerButtons = Array.from(answersElement.querySelectorAll(".answer"));
  answerButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.correct) button.classList.add("is-correct");
    if (index === selectedIndex && index !== question.correct) button.classList.add("is-wrong");
  });
  if (selectedIndex === question.correct) {
    correctCount += 1;
    feedback.textContent = "Верно! Отличное знание темы.";
    feedback.classList.add("good");
  } else {
    feedback.textContent = `Неверно. Правильный ответ: ${question.options[question.correct]}`;
    feedback.classList.add("bad");
  }
  nextButton.disabled = false;
}

function showResult() {
  const wrongCount = questions.length - correctCount;
  const percent = Math.round((correctCount / questions.length) * 100);
  const title = percent >= 80 ? "Прекрасный результат!" : percent >= 50 ? "Хорошая работа!" : "Есть куда расти!";
  quizContent.classList.add("hide");
  result.innerHTML = `
    <div class="result-seal" aria-hidden="true">${percent >= 50 ? "✓" : "↻"}</div>
    <h2>${title}</h2>
    <p class="result-copy">Викторина завершена. Вот ваши результаты:</p>
    <div class="score-grid">
      <div class="score-box"><strong>${correctCount}</strong><span>правильных</span></div>
      <div class="score-box"><strong>${wrongCount}</strong><span>неправильных</span></div>
      <div class="score-box"><strong>${percent}%</strong><span>результат</span></div>
    </div>
    <button class="restart" id="restartButton" type="button">↻ &nbsp; Пройти заново</button>`;
  result.classList.add("show");
  document.getElementById("restartButton").addEventListener("click", restartQuiz);
}

function restartQuiz() {
  currentIndex = 0;
  correctCount = 0;
  result.classList.remove("show");
  result.replaceChildren();
  quizContent.classList.remove("hide");
  renderQuestion();
}

nextButton.addEventListener("click", () => {
  if (!answered) return;
  if (currentIndex === questions.length - 1) {
    progressBar.style.width = "100%";
    progressTrack.setAttribute("aria-valuenow", String(questions.length));
    showResult();
    return;
  }
  currentIndex += 1;
  renderQuestion();
});

renderQuestion();
