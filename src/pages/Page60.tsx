import { useState } from "react";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Trophy } from "lucide-react";

const questions = [
  {
    question: "Сколько евреев было убито на территории Беларуси во время Холокоста?",
    answers: ["200 000", "500 000", "800 000"],
    correct: 2,
    fact: "Это 90% еврейского населения Беларуси"
  },
  {
    question: "Когда произошла трагедия в Хатыни?",
    answers: ["22 марта 1943", "22 июня 1941", "3 июля 1944"],
    correct: 0,
    fact: "149 жителей, из них 75 детей, были сожжены заживо"
  },
  {
    question: "Сколько деревень было сожжено в Беларуси вместе с жителями?",
    answers: ["150", "350", "628"],
    correct: 2,
    fact: "186 из них так и не были восстановлены после войны"
  },
  {
    question: "Какой лагерь смерти был 4-м по величине в Европе?",
    answers: ["Освенцим", "Малый Тростенец", "Колдычево"],
    correct: 1,
    fact: "Малый Тростенец находился под Минском"
  },
  {
    question: "Сколько человек было убито в Малом Тростенце?",
    answers: ["50 000", "100 000", "206 500"],
    correct: 2,
    fact: "Выжило только 5 человек"
  },
  {
    question: "Где 2 марта 1942 года было расстреляно 5000 евреев за один день?",
    answers: ["Яма (Минск)", "Бабий Яр", "Понары"],
    correct: 0,
    fact: "На месте трагедии сегодня стоит мемориал"
  },
  {
    question: "Сколько белорусов было угнано на принудительные работы в Германию?",
    answers: ["100 000", "380 000", "500 000"],
    correct: 1,
    fact: "Их называли остарбайтерами - восточными рабочими"
  },
  {
    question: 'Сколько белорусов получили звание "Праведник народов мира" за спасение евреев?',
    answers: ["150", "641", "1000"],
    correct: 1,
    fact: "Они рисковали жизнью своей семьи, спасая других"
  },
  {
    question: "Какой процент довоенного населения Беларуси погиб?",
    answers: ["Каждый пятый", "Каждый четвёртый", "Каждый третий"],
    correct: 2,
    fact: "2.2-3 миллиона человек погибло за годы войны"
  },
  {
    question: "Сколько деревень из сожжённых не было восстановлено после войны?",
    answers: ["50", "100", "186"],
    correct: 2,
    fact: 'Эти места называют "кладбищем деревень"'
  }
];

const Page60 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFact, setShowFact] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowFact(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFact(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFact(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    if (score === 10) return "Ты помнишь эту трагедию 🕯️";
    if (score >= 7) return "Хорошее знание истории";
    if (score >= 5) return "Есть что изучить подробнее";
    return "Перечитай страницы раздела";
  };

  if (quizCompleted) {
    return (
      <>
        <PageTransition>
          <div className="min-h-screen pb-32 pt-12 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 max-w-3xl">
              <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 text-center">
                <Trophy className="h-24 w-24 text-primary mx-auto mb-6" />
                <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
                  Квиз завершён
                </h1>
                <div className="text-6xl font-bold text-primary mb-4">{score}/10</div>
                <p className="text-2xl text-muted-foreground mb-8">{getScoreMessage()}</p>
                
                <div className="space-y-4">
                  <p className="text-xl font-serif italic text-foreground">
                    "Мы помним. Мы не забудем."
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button onClick={handleRestart} size="lg">
                      Пройти ещё раз
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </PageTransition>
        <BookNavigation currentPage={60} />
      </>
    );
  }

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-muted rounded-full mb-4">
                <span className="text-sm font-semibold text-foreground tracking-wider">
                  СТРАНИЦА 60 • ПРОВЕРКА ЗНАНИЙ
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Квиз о трагедии оккупации
              </h1>
              <div className="text-sm text-muted-foreground">
                Вопрос {currentQuestion + 1} из {questions.length}
              </div>
              <div className="w-full bg-muted h-2 rounded-full mt-4">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-4">
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      selectedAnswer === null
                        ? "border-border hover:border-primary hover:bg-primary/5 cursor-pointer"
                        : selectedAnswer === index
                        ? index === questions[currentQuestion].correct
                          ? "border-primary bg-primary/10"
                          : "border-destructive bg-destructive/10"
                        : index === questions[currentQuestion].correct
                        ? "border-primary bg-primary/10"
                        : "border-border opacity-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-medium">{answer}</span>
                      {selectedAnswer !== null && (
                        <>
                          {index === questions[currentQuestion].correct && (
                            <CheckCircle2 className="h-6 w-6 text-primary" />
                          )}
                          {selectedAnswer === index && index !== questions[currentQuestion].correct && (
                            <XCircle className="h-6 w-6 text-destructive" />
                          )}
                        </>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {showFact && (
                <div className="mt-8 p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-semibold text-primary mb-2">Факт:</p>
                  <p className="text-muted-foreground">{questions[currentQuestion].fact}</p>
                </div>
              )}

              {showFact && (
                <div className="mt-8 text-center">
                  <Button onClick={handleNext} size="lg">
                    {currentQuestion < questions.length - 1 ? "Следующий вопрос" : "Показать результат"}
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={60} />
    </>
  );
};

export default Page60;