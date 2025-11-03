import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import quizBg from "@/assets/quiz-bg.jpg";
import { CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    q: "Кто создал первый партизанский отряд в Беларуси?",
    options: ["Минай Шмырёв", "Василий Корж", "Сидор Ковпак"],
    correct: 1,
    fact: "28 июня 1941, через 6 дней после начала войны"
  },
  {
    q: "Сколько процентов территории Беларуси контролировали партизаны?",
    options: ["25%", "59%", "80%"],
    correct: 1,
    fact: "Это больше половины страны — целые районы!"
  },
  {
    q: "Как называлась операция по подрыву железных дорог?",
    options: ["Рельсовая война", "Багратион", "Война мостов"],
    correct: 0,
    fact: "Парализовала немецкие перевозки на месяцы"
  },
  {
    q: "Сколько рельсов подорвано в операции 'Концерт' (1943)?",
    options: ["10 000", "50 000", "90 000"],
    correct: 2,
    fact: "Одновременно по всей Беларуси!"
  },
  {
    q: "Кто убил гауляйтера Беларуси Вильгельма Кубе?",
    options: ["Елена Мазаник", "Зоя Космодемьянская", "Вера Хоружая"],
    correct: 0,
    fact: "22 сентября 1943, граната-грелка под кроватью"
  },
  {
    q: "Сколько партизанских аэродромов действовало в лесах?",
    options: ["5-10", "20-30", "60+"],
    correct: 2,
    fact: "Связь с Большой землёй по воздуху"
  },
  {
    q: "Сколько поездов пустили под откос партизаны?",
    options: ["1 000", "5 000", "11 000+"],
    correct: 2,
    fact: "Огромный урон немецкой логистике"
  },
  {
    q: "Что такое 'Витебские ворота'?",
    options: ["Городские ворота", "Коридор для эвакуации", "Военная операция"],
    correct: 1,
    fact: "Спасено 35 000 мирных жителей"
  },
  {
    q: "Сколько партизан воевало в Беларуси к 1944 году?",
    options: ["50 000", "150 000", "370 000+"],
    correct: 2,
    fact: "Самое массовое партизанское движение в Европе"
  },
  {
    q: "В каком году Минск был освобождён?",
    options: ["1943", "1944", "1945"],
    correct: 1,
    fact: "3 июля 1944 — День Независимости Беларуси"
  }
];

const Page40 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(10).fill(false));

  const handleAnswer = (index: number) => {
    if (answeredQuestions[currentQuestion]) return;
    
    setSelectedAnswer(index);
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnsweredQuestions(new Array(10).fill(false));
  };

  const getResultMessage = () => {
    if (score === 10) return { title: "Эксперт партизанской войны! 🏆", desc: "Вы знаете историю на отлично!" };
    if (score >= 7) return { title: "Отлично знаете историю! ⭐", desc: "Вы настоящий знаток!" };
    if (score >= 5) return { title: "Хороший результат! ✓", desc: "Неплохо, но есть куда расти" };
    return { title: "Перечитайте страницы ещё раз 📖", desc: "История требует внимания" };
  };

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12 relative">
          <div className="absolute inset-0 opacity-10">
            <img src={quizBg} alt="" className="w-full h-full object-cover" />
          </div>
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 40 • ПРОВЕРЬ СЕБЯ
                </span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">
                Партизанский квиз
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Проверьте свои знания о партизанском движении
              </p>
            </div>

            {!showResult ? (
              <Card className="bg-card/95 backdrop-blur-sm border-border p-8">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">
                      Вопрос {currentQuestion + 1} из {questions.length}
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      Счёт: {score}/{questions.length}
                    </span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  {questions[currentQuestion].q}
                </h2>

                <div className="space-y-3 mb-6">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={answeredQuestions[currentQuestion]}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        selectedAnswer === null
                          ? "border-border hover:border-primary/50 bg-card"
                          : selectedAnswer === index
                          ? index === questions[currentQuestion].correct
                            ? "border-green-500 bg-green-500/10"
                            : "border-red-500 bg-red-500/10"
                          : index === questions[currentQuestion].correct
                          ? "border-green-500 bg-green-500/10"
                          : "border-border bg-card/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option}</span>
                        {selectedAnswer !== null && (
                          index === questions[currentQuestion].correct ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          ) : selectedAnswer === index ? (
                            <XCircle className="w-5 h-5 text-red-500" />
                          ) : null
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {selectedAnswer !== null && (
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary animate-fade-in">
                    <p className="text-sm text-muted-foreground">
                      💡 {questions[currentQuestion].fact}
                    </p>
                  </div>
                )}

                {answeredQuestions[currentQuestion] && (
                  <Button onClick={nextQuestion} className="w-full" size="lg">
                    {currentQuestion < questions.length - 1 ? "Следующий вопрос" : "Показать результат"}
                  </Button>
                )}
              </Card>
            ) : (
              <Card className="bg-card/95 backdrop-blur-sm border-border p-8 text-center">
                <div className="mb-6">
                  <div className="text-6xl font-bold text-primary mb-2">{score}/{questions.length}</div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
                    {getResultMessage().title}
                  </h2>
                  <p className="text-muted-foreground">{getResultMessage().desc}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <Button onClick={restart} className="w-full" size="lg">
                    Пройти ещё раз
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => window.location.href = '/page/11'}
                    className="w-full"
                  >
                    Вернуться к странице 11
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  Изучите страницы 11-39 подробнее, чтобы узнать больше о партизанской борьбе
                </p>
              </Card>
            )}
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={40} />
    </>
  );
};

export default Page40;
