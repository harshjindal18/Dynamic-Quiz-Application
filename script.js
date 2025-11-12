// Quiz Data Structure
const quizCategories = {
  science: {
    name: "Science",
    icon: "🔬",
    questions: {
      easy: [
        {
          question: "What is the chemical symbol for gold?",
          options: ["Au", "Ag", "Fe", "Cu"],
          correct: 0,
        },
        {
          question: "How many bones are in the human body?",
          options: ["186", "206", "226", "246"],
          correct: 1,
        },
        {
          question: "What is the largest planet in our solar system?",
          options: ["Saturn", "Neptune", "Jupiter", "Uranus"],
          correct: 2,
        },
      ],
      medium: [
        {
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Body"],
          correct: 1,
        },
        {
          question: "Which gas do plants absorb for photosynthesis?",
          options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          correct: 2,
        },
        {
          question: "What is the speed of light?",
          options: ["300,000 km/s", "150,000 km/s", "200,000 km/s", "100,000 km/s"],
          correct: 0,
        },
      ],
      hard: [
        {
          question: "What is the only letter that does not appear in the periodic table?",
          options: ["J", "Q", "X", "Z"],
          correct: 0,
        },
        {
          question: "Which scientist proposed the theory of general relativity?",
          options: ["Newton", "Einstein", "Hawking", "Bohr"],
          correct: 1,
        },
        {
          question: "What is the most abundant element in the universe?",
          options: ["Oxygen", "Helium", "Hydrogen", "Carbon"],
          correct: 2,
        },
      ],
    },
  },
  history: {
    name: "History",
    icon: "📚",
    questions: {
      easy: [
        {
          question: "In what year did World War II end?",
          options: ["1943", "1944", "1945", "1946"],
          correct: 2,
        },
        {
          question: "Who was the first President of the United States?",
          options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
          correct: 1,
        },
        {
          question: "What ancient wonder is also known as the Colossus?",
          options: ["Lighthouse of Alexandria", "Statue of Zeus", "Great Pyramid", "Hanging Gardens"],
          correct: 0,
        },
      ],
      medium: [
        {
          question: "In which year did the Berlin Wall fall?",
          options: ["1988", "1989", "1990", "1991"],
          correct: 1,
        },
        {
          question: "Who discovered America in 1492?",
          options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "John Cabot"],
          correct: 1,
        },
        {
          question: "The Renaissance began in which country?",
          options: ["France", "Spain", "Italy", "Germany"],
          correct: 2,
        },
      ],
      hard: [
        {
          question: "Who was the first Roman Emperor?",
          options: ["Julius Caesar", "Augustus", "Nero", "Tiberius"],
          correct: 1,
        },
        {
          question: "In what year did the Titanic sink?",
          options: ["1910", "1911", "1912", "1913"],
          correct: 2,
        },
        {
          question: "Which empire built the Great Wall of China?",
          options: ["Han Dynasty", "Ming Dynasty", "Tang Dynasty", "Qin Dynasty"],
          correct: 1,
        },
      ],
    },
  },
  geography: {
    name: "Geography",
    icon: "🌍",
    questions: {
      easy: [
        {
          question: "What is the capital of France?",
          options: ["Lyon", "Marseille", "Paris", "Nice"],
          correct: 2,
        },
        {
          question: "Which is the largest country by area?",
          options: ["Canada", "China", "Russia", "United States"],
          correct: 2,
        },
        {
          question: "What is the smallest country in the world?",
          options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
          correct: 2,
        },
      ],
      medium: [
        {
          question: "What is the capital of Australia?",
          options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
          correct: 2,
        },
        {
          question: "Which river is the longest in the world?",
          options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
          correct: 2,
        },
        {
          question: "How many continents are there?",
          options: ["5", "6", "7", "8"],
          correct: 2,
        },
      ],
      hard: [
        {
          question: "What is the capital of Kazakhstan?",
          options: ["Almaty", "Karaganda", "Nur-Sultan", "Aktobe"],
          correct: 2,
        },
        {
          question: "Which is the deepest ocean trench?",
          options: ["Mariana Trench", "Tonga Trench", "Kuril Trench", "Philippine Trench"],
          correct: 0,
        },
        {
          question: "What is the highest mountain in Africa?",
          options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Stanley", "Mount Speke"],
          correct: 1,
        },
      ],
    },
  },
  technology: {
    name: "Technology",
    icon: "💻",
    questions: {
      easy: [
        {
          question: "What does CPU stand for?",
          options: [
            "Central Process Unit",
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
          ],
          correct: 1,
        },
        {
          question: "What year was the internet invented?",
          options: ["1969", "1975", "1985", "1995"],
          correct: 0,
        },
        {
          question: "What company developed Python?",
          options: ["Google", "Microsoft", "Guido van Rossum", "Apple"],
          correct: 2,
        },
      ],
      medium: [
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
          ],
          correct: 0,
        },
        {
          question: "What is the most popular programming language as of 2024?",
          options: ["Java", "Python", "JavaScript", "C++"],
          correct: 1,
        },
        {
          question: "Who is known as the founder of Microsoft?",
          options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
          correct: 1,
        },
      ],
      hard: [
        {
          question: "What does API stand for?",
          options: [
            "Application Programming Interface",
            "Advanced Programming Integration",
            "Application Process Integration",
            "Automated Programming Interface",
          ],
          correct: 0,
        },
        {
          question: "What is the time complexity of binary search?",
          options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
          correct: 2,
        },
        {
          question: "What year was the first iPhone released?",
          options: ["2005", "2006", "2007", "2008"],
          correct: 2,
        },
      ],
    },
  },
}

// Global State
const quizState = {
  currentScreen: "home", // 'home', 'quiz', 'results'
  selectedCategory: null,
  selectedDifficulty: "easy",
  currentQuestionIndex: 0,
  questions: [],
  answers: [],
  timers: [], // Track time spent on each question
  startTime: null,
  questionStartTime: null,
}

const timerDurations = {
  easy: 30,
  medium: 45,
  hard: 60,
}

let currentTimer = null

// Initialize App
function init() {
  renderScreen()
}

// Main Render Function
function renderScreen() {
  const app = document.getElementById("app")
  app.innerHTML = ""

  switch (quizState.currentScreen) {
    case "home":
      renderHomeScreen()
      break
    case "quiz":
      renderQuizScreen()
      break
    case "results":
      renderResultsScreen()
      break
  }
}

// Home Screen
function renderHomeScreen() {
  const app = document.getElementById("app")
  const html = `
    <div class="container">
      <div class="header">
        <h1>Quiz Master</h1>
        <p>Test your knowledge across different categories and difficulty levels</p>
      </div>

      <div class="home-screen">
        <div class="categories-grid">
          ${Object.entries(quizCategories)
            .map(
              ([key, category]) => `
            <div class="category-card">
              <div class="category-header">
                <div class="category-icon">${category.icon}</div>
                <div>
                  <div class="category-name">${category.name}</div>
                  <div class="category-questions">${getTotalQuestions(key)} questions</div>
                </div>
              </div>
              <div class="difficulty-selector">
                <button class="difficulty-btn easy" onclick="selectQuiz('${key}', 'easy')">Easy</button>
                <button class="difficulty-btn medium" onclick="selectQuiz('${key}', 'medium')">Medium</button>
                <button class="difficulty-btn hard" onclick="selectQuiz('${key}', 'hard')">Hard</button>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </div>
  `

  app.innerHTML = html
}

function getTotalQuestions(category) {
  const cat = quizCategories[category]
  return cat.questions.easy.length + cat.questions.medium.length + cat.questions.hard.length
}

function selectQuiz(category, difficulty) {
  quizState.selectedCategory = category
  quizState.selectedDifficulty = difficulty
  quizState.currentQuestionIndex = 0
  quizState.questions = [...quizCategories[category].questions[difficulty]]
  quizState.answers = new Array(quizState.questions.length).fill(-1)
  quizState.timers = new Array(quizState.questions.length).fill(0)
  quizState.startTime = Date.now()
  quizState.currentScreen = "quiz"

  renderScreen()
  startQuestionTimer()
}

// Quiz Screen
function renderQuizScreen() {
  const app = document.getElementById("app")
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
  const categoryName = quizCategories[quizState.selectedCategory].name
  const progressPercent = ((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100

  const html = `
    <div class="container">
      <div class="quiz-header">
        <div class="quiz-info">
          <div class="quiz-category">${categoryName}</div>
          <div class="quiz-difficulty difficulty-${quizState.selectedDifficulty}">
            ${quizState.selectedDifficulty.charAt(0).toUpperCase() + quizState.selectedDifficulty.slice(1)}
          </div>
        </div>
        <div class="timer" id="timer">${timerDurations[quizState.selectedDifficulty]}s</div>
      </div>

      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progressPercent}%"></div>
      </div>

      <div class="quiz-screen">
        <div class="question-card">
          <div class="question-number">Question ${quizState.currentQuestionIndex + 1} of ${quizState.questions.length}</div>
          <div class="question-text">${currentQuestion.question}</div>

          <div class="options-container">
            ${currentQuestion.options
              .map(
                (option, index) => `
              <button
                class="option ${quizState.answers[quizState.currentQuestionIndex] === index ? "selected" : ""}"
                onclick="selectAnswer(${index})"
              >
                ${option}
              </button>
            `,
              )
              .join("")}
          </div>
        </div>

        <div class="quiz-controls">
          <button class="btn btn-secondary" onclick="previousQuestion()" ${quizState.currentQuestionIndex === 0 ? "disabled" : ""}>
            ← Previous
          </button>
          ${
            quizState.currentQuestionIndex < quizState.questions.length - 1
              ? `
            <button class="btn btn-primary" onclick="nextQuestion()">
              Next →
            </button>
          `
              : `
            <button class="btn btn-success" onclick="submitQuiz()">
              Submit Quiz
            </button>
          `
          }
        </div>
      </div>
    </div>
  `

  app.innerHTML = html
}

function selectAnswer(index) {
  quizState.answers[quizState.currentQuestionIndex] = index
  renderScreen()
}

function nextQuestion() {
  if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
    recordQuestionTime()
    quizState.currentQuestionIndex++
    quizState.questionStartTime = Date.now()
    clearTimeout(currentTimer)
    renderScreen()
    startQuestionTimer()
  }
}

function previousQuestion() {
  if (quizState.currentQuestionIndex > 0) {
    recordQuestionTime()
    quizState.currentQuestionIndex--
    quizState.questionStartTime = Date.now()
    clearTimeout(currentTimer)
    renderScreen()
    startQuestionTimer()
  }
}

function startQuestionTimer() {
  let timeLeft = timerDurations[quizState.selectedDifficulty]
  quizState.questionStartTime = Date.now()

  const updateTimer = () => {
    const timerElement = document.getElementById("timer")
    if (timerElement) {
      timerElement.textContent = `${timeLeft}s`

      if (timeLeft <= 10) {
        timerElement.classList.add("warning")
      }
      if (timeLeft <= 5) {
        timerElement.classList.add("danger")
      }

      if (timeLeft > 0) {
        timeLeft--
        currentTimer = setTimeout(updateTimer, 1000)
      } else {
        recordQuestionTime()
        if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
          quizState.currentQuestionIndex++
          renderScreen()
          startQuestionTimer()
        } else {
          submitQuiz()
        }
      }
    }
  }

  updateTimer()
}

function recordQuestionTime() {
  if (quizState.questionStartTime) {
    const timeSpent = (Date.now() - quizState.questionStartTime) / 1000
    quizState.timers[quizState.currentQuestionIndex] = Math.round(timeSpent)
  }
}

function submitQuiz() {
  clearTimeout(currentTimer)
  recordQuestionTime()
  quizState.currentScreen = "results"
  renderScreen()
}

// Results Screen
function renderResultsScreen() {
  const app = document.getElementById("app")

  const { correct, incorrect, accuracy, totalTime, averageTime } = calculateResults()
  const categoryName = quizCategories[quizState.selectedCategory].name

  const html = `
    <div class="container">
      <div class="results-screen">
        <div class="results-header">
          <div class="score-display">${correct}/${quizState.questions.length}</div>
          <div class="results-title">Quiz Complete!</div>
          <p>You scored ${accuracy.toFixed(1)}% on the ${categoryName} quiz (${quizState.selectedDifficulty} level)</p>
        </div>

        <div class="results-grid">
          <div class="stat-card correct">
            <div class="stat-value">${correct}</div>
            <div class="stat-label">Correct Answers</div>
          </div>
          <div class="stat-card incorrect">
            <div class="stat-value">${incorrect}</div>
            <div class="stat-label">Incorrect Answers</div>
          </div>
          <div class="stat-card accuracy">
            <div class="stat-value">${accuracy.toFixed(1)}%</div>
            <div class="stat-label">Accuracy</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${totalTime}s</div>
            <div class="stat-label">Total Time</div>
          </div>
        </div>

        <div class="charts-container">
          <div class="chart-card">
            <div class="chart-title">Answer Distribution</div>
            <div class="chart-canvas">
              <canvas id="answerChart"></canvas>
            </div>
          </div>
          <div class="chart-card">
            <div class="chart-title">Time per Question</div>
            <div class="chart-canvas">
              <canvas id="timeChart"></canvas>
            </div>
          </div>
        </div>

        <div class="table-container">
          <div class="table-title">Detailed Results</div>
          <table>
            <thead>
              <tr>
                <th>Question</th>
                <th>Your Answer</th>
                <th>Correct Answer</th>
                <th>Time Spent</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${quizState.questions
                .map((q, index) => {
                  const isCorrect = quizState.answers[index] === q.correct
                  return `
                  <tr>
                    <td>${index + 1}. ${q.question.substring(0, 50)}...</td>
                    <td>${quizState.answers[index] !== -1 ? q.options[quizState.answers[index]] : "Not answered"}</td>
                    <td>${q.options[q.correct]}</td>
                    <td>${quizState.timers[index]}s</td>
                    <td><span style="color: ${isCorrect ? "#10b981" : "#ef4444"}; font-weight: 600;">${isCorrect ? "✓ Correct" : "✗ Incorrect"}</span></td>
                  </tr>
                `
                })
                .join("")}
            </tbody>
          </table>
        </div>

        <div class="action-buttons">
          <button class="btn btn-primary" onclick="init()">Take Another Quiz</button>
          <button class="btn btn-secondary" onclick="location.reload()">Start Over</button>
        </div>
      </div>
    </div>
  `

  app.innerHTML = html

  // Render Charts after DOM is ready
  setTimeout(() => {
    renderCharts()
  }, 0)
}

function calculateResults() {
  let correct = 0
  let totalTime = 0

  quizState.questions.forEach((q, index) => {
    if (quizState.answers[index] === q.correct) {
      correct++
    }
    totalTime += quizState.timers[index]
  })

  const incorrect = quizState.questions.length - correct
  const accuracy = (correct / quizState.questions.length) * 100
  const averageTime = Math.round(totalTime / quizState.questions.length)

  return { correct, incorrect, accuracy, totalTime, averageTime }
}

function renderCharts() {
  // Answer Distribution Pie Chart
  const { correct, incorrect } = calculateResults()

  const answerCtx = document.getElementById("answerChart")
  if (answerCtx) {
    new Chart(answerCtx, {
      type: "doughnut",
      data: {
        labels: ["Correct", "Incorrect"],
        datasets: [
          {
            data: [correct, incorrect],
            backgroundColor: ["#10b981", "#ef4444"],
            borderColor: ["#059669", "#dc2626"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: "#f1f5f9",
              font: {
                size: 12,
              },
            },
          },
        },
      },
    })
  }

  // Time per Question Bar Chart
  const timeCtx = document.getElementById("timeChart")
  if (timeCtx) {
    new Chart(timeCtx, {
      type: "bar",
      data: {
        labels: quizState.questions.map((_, i) => `Q${i + 1}`),
        datasets: [
          {
            label: "Time (seconds)",
            data: quizState.timers,
            backgroundColor: "#3b82f6",
            borderColor: "#1e40af",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "x",
        plugins: {
          legend: {
            labels: {
              color: "#f1f5f9",
            },
          },
        },
        scales: {
          y: {
            ticks: {
              color: "#cbd5e1",
            },
            grid: {
              color: "#334155",
            },
          },
          x: {
            ticks: {
              color: "#cbd5e1",
            },
            grid: {
              color: "#334155",
            },
          },
        },
      },
    })
  }
}

// Initialize the app when DOM is ready
document.addEventListener("DOMContentLoaded", init)
