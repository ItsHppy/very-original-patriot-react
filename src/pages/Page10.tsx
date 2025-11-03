import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import quizBg from "@/assets/quiz-bg.jpg";
import { CheckCircle2, XCircle, Award } from "lucide-react";
import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const Page10 = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Когда началась Великая Отечественная война?",
      options: [
        "21 июня 1941, 3:15",
        "22 июня 1941, 4:00",
        "22 июня 1941, 3:15",
        "23 июня 1941, 5:00"
      ],
      correctAnswer: 2,
      explanation: "Война началась 22 июня 1941 года в 3:15 утра массированным артиллерийским обстрелом."
    },
    {
      id: 2,
      question: "Сколько дней длилась оборона Брестской крепости?",
      options: [
        "7 дней",
        "14 дней",
        "Около 30 дней",
        "2 месяца"
      ],
      correctAnswer: 2,
      explanation: "Организованная оборона длилась около месяца, отдельные группы сражались до конца июля."
    },
    {
      id: 3,
      question: "Кто совершил первый огненный таран 26 июня 1941?",
      options: [
        "Александр Матросов",
        "Николай Гастелло",
        "Виктор Талалихин",
        "Алексей Маресьев"
      ],
      correctAnswer: 1,
      explanation: "Николай Гастелло направил горящий самолет на колонну вражеских машин 26 июня 1941 года."
    },
    {
      id: 4,
      question: "Кто создал первый партизанский отряд в Беларуси?",
      options: [
        "Константин Заслонов",
        "Сидор Ковпак",
        "Василий Корж",
        "Петр Машеров"
      ],
      correctAnswer: 2,
      explanation: "Василий Корж создал первый партизанский отряд 26 июня 1941 года, первый бой провел 28 июня."
    },
    {
      id: 5,
      question: "Когда был оккупирован Минск?",
      options: [
        "24 июня 1941",
        "26 июня 1941",
        "28 июня 1941",
        "1 июля 1941"
      ],
      correctAnswer: 2,
      explanation: "Минск был оккупирован 28 июня 1941 года, на шестой день войны."
    }
  ];

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    if (!showResults) {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionId]: answerIndex
      });
    }
  };

  const handleSubmit = () => {
    if (Object.keys(selectedAnswers).length === questions.length) {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-honor-gold/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-honor-gold tracking-wider">
                  СТРАНИЦА 10 • ПРОВЕРКА ЗНАНИЙ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Итоги первого месяца
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Проверьте, что вы запомнили о первых днях Великой Отечественной войны
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={quizBg}
                alt="Викторина"
                className="w-full h-[300px] object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Award className="h-16 w-16 text-honor-gold mx-auto mb-4" />
                  <p className="text-2xl font-serif font-bold text-foreground">
                    Викторина: Начало войны
                  </p>
                </div>
              </div>
            </div>

            {/* Quiz Questions */}
            <div className="space-y-6 mb-12">
              {questions.map((q, index) => (
                <Card key={q.id} className="bg-card/80 backdrop-blur-sm border-border p-6">
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-primary">
                      Вопрос {index + 1} из {questions.length}
                    </span>
                    <h3 className="text-xl font-serif font-semibold mt-2">
                      {q.question}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {q.options.map((option, optionIndex) => {
                      const isSelected = selectedAnswers[q.id] === optionIndex;
                      const isCorrect = optionIndex === q.correctAnswer;
                      const showCorrect = showResults && isCorrect;
                      const showWrong = showResults && isSelected && !isCorrect;

                      return (
                        <button
                          key={optionIndex}
                          onClick={() => handleAnswerSelect(q.id, optionIndex)}
                          disabled={showResults}
                          className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                            showCorrect
                              ? 'border-primary bg-primary/10'
                              : showWrong
                              ? 'border-destructive bg-destructive/10'
                              : isSelected
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          } ${showResults ? 'cursor-default' : 'cursor-pointer'}`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm">{option}</span>
                            {showResults && (
                              <>
                                {isCorrect && <CheckCircle2 className="h-5 w-5 text-primary" />}
                                {showWrong && <XCircle className="h-5 w-5 text-destructive" />}
                              </>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {showResults && (
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">Объяснение: </span>
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Submit/Results */}
            {!showResults ? (
              <div className="text-center">
                <Button
                  size="lg"
                  onClick={handleSubmit}
                  disabled={Object.keys(selectedAnswers).length !== questions.length}
                  className="px-8"
                >
                  Проверить ответы
                </Button>
                {Object.keys(selectedAnswers).length !== questions.length && (
                  <p className="text-sm text-muted-foreground mt-4">
                    Ответьте на все вопросы, чтобы увидеть результаты
                  </p>
                )}
              </div>
            ) : (
              <Card className="bg-gradient-to-br from-primary/10 to-honor-gold/10 border-l-4 border-honor-gold p-8">
                <div className="text-center">
                  <Award className="h-16 w-16 text-honor-gold mx-auto mb-4" />
                  <h3 className="text-3xl font-serif font-bold mb-4">
                    Ваш результат: {score} из {questions.length}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {score === 5 && "Отлично! Вы прекрасно знаете историю первых дней войны!"}
                    {score === 4 && "Очень хорошо! Вы хорошо усвоили материал!"}
                    {score === 3 && "Неплохо! Рекомендуем перечитать страницы 1-9."}
                    {score < 3 && "Стоит освежить знания. Вернитесь к предыдущим страницам."}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="p-4 bg-card/60 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2">{score}/5</div>
                      <div className="text-sm text-muted-foreground">правильных ответов</div>
                    </div>
                    <div className="p-4 bg-card/60 rounded-lg">
                      <div className="text-3xl font-bold text-accent mb-2">9</div>
                      <div className="text-sm text-muted-foreground">страниц изучено</div>
                    </div>
                    <div className="p-4 bg-card/60 rounded-lg">
                      <div className="text-3xl font-bold text-honor-gold mb-2">71</div>
                      <div className="text-sm text-muted-foreground">страница впереди</div>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* What's Next */}
            <Card className="mt-12 bg-card/80 backdrop-blur-sm border-border p-8">
              <h3 className="text-2xl font-serif font-bold mb-4 text-accent">
                Что дальше?
              </h3>
              <p className="text-muted-foreground mb-6">
                Первый месяц войны показал масштаб трагедии, но и силу сопротивления белорусского народа. 
                В следующих разделах вы узнаете о партизанском движении, геноциде и освобождении Беларуси.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-primary/5 rounded">
                  <div className="font-semibold mb-2">📖 Страницы 11-40</div>
                  <div className="text-muted-foreground">Партизанская борьба</div>
                </div>
                <div className="p-4 bg-primary/5 rounded">
                  <div className="font-semibold mb-2">📖 Страницы 41-60</div>
                  <div className="text-muted-foreground">Геноцид и оккупация</div>
                </div>
                <div className="p-4 bg-primary/5 rounded">
                  <div className="font-semibold mb-2">📖 Страницы 61-80</div>
                  <div className="text-muted-foreground">Освобождение и память</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={10} />
    </>
  );
};

export default Page10;
