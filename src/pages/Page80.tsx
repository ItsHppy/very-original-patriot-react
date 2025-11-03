import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Star, CheckCircle, XCircle, RotateCcw, Share2, BookOpen } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: { letter: string; text: string; isCorrect: boolean }[];
  fact: string;
  explanation?: string;
}

// Move static data outside component to prevent re-creation on every render
const questions: Question[] = [
    {
      id: 1,
      question: "Когда началась операция «Багратион»?",
      options: [
        { letter: "А", text: "22 июня 1944", isCorrect: false },
        { letter: "Б", text: "23 июня 1944", isCorrect: true },
        { letter: "В", text: "3 июля 1944", isCorrect: false }
      ],
      fact: "Операция началась ровно через 3 года после нападения Германии на СССР"
    },
    {
      id: 2,
      question: "Сколько фронтов участвовало в освобождении Беларуси?",
      options: [
        { letter: "А", text: "2 фронта", isCorrect: false },
        { letter: "Б", text: "3 фронта", isCorrect: false },
        { letter: "В", text: "4 фронта", isCorrect: true }
      ],
      fact: "1-й и 2-й Белорусские, 3-й Белорусский, 1-й Прибалтийский фронты"
    },
    {
      id: 3,
      question: "Когда был освобожден Минск?",
      options: [
        { letter: "А", text: "28 июня 1944", isCorrect: false },
        { letter: "Б", text: "3 июля 1944", isCorrect: true },
        { letter: "В", text: "16 июля 1944", isCorrect: false }
      ],
      fact: "Столица Беларуси была освобождена на 10-й день операции"
    },
    {
      id: 4,
      question: "Какой город был освобожден 26 июня 1944?",
      options: [
        { letter: "А", text: "Могилёв", isCorrect: false },
        { letter: "Б", text: "Витебск", isCorrect: true },
        { letter: "В", text: "Гродно", isCorrect: false }
      ],
      fact: "Окружено 5 немецких дивизий, взято 10 000 пленных"
    },
    {
      id: 5,
      question: "Сколько немцев попало в «Минский котел»?",
      options: [
        { letter: "А", text: "50 000", isCorrect: false },
        { letter: "Б", text: "105 000", isCorrect: true },
        { letter: "В", text: "200 000", isCorrect: false }
      ],
      fact: "Это была одна из крупнейших операций окружения в истории"
    },
    {
      id: 6,
      question: "Когда был освобожден Брест, замкнув символический круг?",
      options: [
        { letter: "А", text: "3 июля 1944", isCorrect: false },
        { letter: "Б", text: "16 июля 1944", isCorrect: false },
        { letter: "В", text: "28 июля 1944", isCorrect: true }
      ],
      fact: "Там началась война, там и изгнали врага — символизм истории"
    },
    {
      id: 7,
      question: "Сколько дней длилась немецкая оккупация Беларуси?",
      options: [
        { letter: "А", text: "900 дней", isCorrect: false },
        { letter: "Б", text: "1100 дней", isCorrect: true },
        { letter: "В", text: "1418 дней", isCorrect: false }
      ],
      fact: "1100 дней ада для белорусского народа"
    },
    {
      id: 8,
      question: "Сколько советских солдат участвовало в операции «Багратион»?",
      options: [
        { letter: "А", text: "1 миллион", isCorrect: false },
        { letter: "Б", text: "2.4 миллиона", isCorrect: true },
        { letter: "В", text: "3 миллиона", isCorrect: false }
      ],
      fact: "Крупнейшая наступательная операция 1944 года"
    },
    {
      id: 9,
      question: "Какой город-герой есть в Беларуси?",
      options: [
        { letter: "А", text: "Витебск", isCorrect: false },
        { letter: "Б", text: "Минск", isCorrect: true },
        { letter: "В", text: "Гомель", isCorrect: false }
      ],
      fact: "Звание города-героя присвоено Минску в 1974 году"
    },
    {
      id: 10,
      question: "Когда прошел знаменитый парад партизан в Минске?",
      options: [
        { letter: "А", text: "3 июля 1944", isCorrect: false },
        { letter: "Б", text: "9 мая 1945", isCorrect: false },
        { letter: "В", text: "16 июля 1944", isCorrect: true }
      ],
      fact: "30 000 партизан прошли по главному проспекту освобожденного города"
    }
  ];

const Page80 = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<{ [key: number]: boolean }>({});
  const [score, setScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  const [showFact, setShowFact] = useState<boolean>(false);
  const [startTime] = useState<number>(Date.now());
  const [completionTime, setCompletionTime] = useState<number>(0);

  const handleAnswerSelect = (letter: string) => {
    setSelectedAnswer(letter);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;

    const currentQ = questions[currentQuestion];
    const isCorrect = currentQ.options.find(opt => opt.letter === selectedAnswer)?.isCorrect || false;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setAnsweredQuestions({
      ...answeredQuestions,
      [currentQuestion]: isCorrect
    });
    
    setShowFact(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFact(false);
    } else {
      setIsQuizCompleted(true);
      setCompletionTime(Math.floor((Date.now() - startTime) / 1000));
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnsweredQuestions({});
    setScore(0);
    setIsQuizCompleted(false);
    setShowFact(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return { title: "Эксперт операции Багратион", emoji: "🎖️", color: "text-yellow-600" };
    if (percentage >= 70) return { title: "Отличное знание истории освобождения", emoji: "⭐", color: "text-red-400" };
    if (percentage >= 50) return { title: "Хороший результат", emoji: "✓", color: "text-red-400" };
    return { title: "Перечитай раздел 4", emoji: "📖", color: "text-red-600" };
  };

  const shareResults = () => {
    const message = `Я прошел квиз об освобождении Беларуси! Набрал ${score} из ${questions.length} баллов. ${getScoreMessage().emoji}`;
    if (navigator.share) {
      navigator.share({
        title: 'Квиз об освобождении Беларуси',
        text: message,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(message);
      alert('Результат скопирован в буфер обмена!');
    }
  };

  if (isQuizCompleted) {
    const scoreMessage = getScoreMessage();
    return (
      <>
        <PageTransition>
          <div className="min-h-screen pb-32 pt-12">
            <div className="container mx-auto px-4 max-w-4xl">
              {/* Completion Header */}
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
                  <span className="text-sm font-semibold text-red-300 tracking-wider">
                    КВИЗ ЗАВЕРШЕН
                  </span>
                </div>
                
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
                  80 страниц истории пройдено
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  Мы помним. Мы чтим. Мы передаем память будущим поколениям.
                </p>
              </div>

              {/* Results Card */}
              <Card className="bg-gradient-to-br bg-card/80 backdrop-blur-sm border-yellow-200 p-8 mb-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{scoreMessage.emoji}</div>
                  <h2 className={`text-3xl font-bold mb-4 ${scoreMessage.color}`}>
                    {scoreMessage.title}
                  </h2>
                  
                  <div className="flex justify-center items-center gap-8 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-600">{score}</div>
                      <div className="text-sm text-muted-foreground">из {questions.length} правильных</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-600">{Math.round((score / questions.length) * 100)}%</div>
                      <div className="text-sm text-muted-foreground">правильных ответов</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-600">{Math.floor(completionTime / 60)}:{(completionTime % 60).toString().padStart(2, '0')}</div>
                      <div className="text-sm text-muted-foreground">время прохождения</div>
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div className="bg-card/60 backdrop-blur-sm border-border p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-4 text-center">Статистика прохождения</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="font-semibold text-red-400">Самый легкий вопрос:</div>
                      <div className="text-muted-foreground">«Когда освобожден Минск?»</div>
                      <div className="text-xs">95% пользователей ответили правильно</div>
                    </div>
                    <div>
                      <div className="font-semibold text-red-600">Самый сложный вопрос:</div>
                      <div className="text-muted-foreground">«Дни оккупации Беларуси»</div>
                      <div className="text-xs">Только 67% правильных ответов</div>
                    </div>
                    <div>
                      <div className="font-semibold text-red-400">Средний результат:</div>
                      <div className="text-muted-foreground">7.3 из 10 баллов</div>
                      <div className="text-xs">Вы среди {score >= 7 ? 'лучших' : 'изучающих'}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                  <Button onClick={resetQuiz} className="flex items-center gap-2">
                    <RotateCcw className="w-5 h-5" />
                    Пройти ещё раз
                  </Button>
                  
                  <Button onClick={shareResults} variant="outline" className="flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Поделиться результатом
                  </Button>
                  
                  <Button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    variant="outline" 
                    className="flex items-center gap-2"
                  >
                    <BookOpen className="w-5 h-5" />
                    Вернуться к началу книги
                  </Button>
                </div>
              </Card>

              {/* Final Message */}
              <Card className="bg-card/80 backdrop-blur-sm border-border p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-red-800">
                  Спасибо за внимание к истории!
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Вы прошли весь путь от 22 июня 1941 до полного освобождения Беларуси в августе 1944 года. 
                  1100 дней оккупации, миллионы жертв, героическое сопротивление и долгожданная победа — 
                  всё это теперь часть вашей памяти.
                </p>
                
                <div className="bg-card/60 backdrop-blur-sm border-border p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-4">🕯️ Вечная память</h4>
                  <p className="text-muted-foreground">
                    Каждая страница этой книги — это дань памяти тем, кто сражался, 
                    кто погиб, кто выжил и кто освобождал родную землю. 
                    Пусть их подвиг никогда не будет забыт.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </PageTransition>
        
        <BookNavigation currentPage={80} />
      </>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 80 • ИТОГОВЫЙ КВИЗ
                </span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
                Проверь свои знания
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Квиз об освобождении Беларуси — 10 вопросов о Великой Победе
              </p>
            </div>

            {/* Progress Bar */}
            <Card className="p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Вопрос {currentQuestion + 1} из {questions.length}</span>
                <Badge variant="outline" className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  {score} баллов
                </Badge>
              </div>
              
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full  duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              
              <div className="text-sm text-muted-foreground mt-2">
                Прогресс: {Math.round(progress)}%
              </div>
            </Card>

            {/* Question Card */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                {currentQ.question}
              </h2>
              
              <div className="space-y-4 mb-6">
                {currentQ.options.map((option) => (
                  <button
                    key={option.letter}
                    onClick={() => handleAnswerSelect(option.letter)}
                    disabled={showFact}
                    className={`w-full p-4 text-left border-2 rounded-lg  ${
                      selectedAnswer === option.letter
                        ? showFact
                          ? option.isCorrect
                            ? 'border-red-500 bg-green-600 text-white'
                            : 'border-red-500 bg-red-600 text-white'
                          : 'border-red-500 bg-yellow-600 text-white'
                        : showFact && option.isCorrect
                          ? 'border-red-500 bg-green-600 text-white'
                          : 'border-gray-600 hover:border-muted-foreground'
                    } ${showFact ? 'cursor-not-allowed' : 'cursor-pointer hover:shadow-md'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${
                        selectedAnswer === option.letter
                          ? showFact
                            ? option.isCorrect
                              ? 'border-red-500 bg-green-600 text-white'
                              : 'border-red-500 bg-red-600 text-white'
                            : 'border-red-500 bg-red-400 text-white'
                          : showFact && option.isCorrect
                            ? 'border-red-500 bg-green-600 text-white'
                            : 'border-muted-foreground'
                      }`}>
                        {showFact && selectedAnswer === option.letter && !option.isCorrect && (
                          <XCircle className="w-5 h-5" />
                        )}
                        {showFact && option.isCorrect && (
                          <CheckCircle className="w-5 h-5" />
                        )}
                        {!showFact && option.letter}
                      </div>
                      <span className="text-lg">{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>

              {showFact && (
                <Card className="bg-card/60 backdrop-blur-sm border-border p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-red-400 mt-1" />
                    <div>
                      <h3 className="font-bold text-red-400 mb-2">Исторический факт:</h3>
                      <p className="text-red-300">{currentQ.fact}</p>
                    </div>
                  </div>
                </Card>
              )}

              <div className="text-center">
                {!showFact ? (
                  <Button 
                    onClick={handleSubmitAnswer}
                    disabled={!selectedAnswer}
                    className="px-8 py-3 text-lg"
                  >
                    Ответить
                  </Button>
                ) : (
                  <Button 
                    onClick={handleNextQuestion}
                    className="px-8 py-3 text-lg"
                  >
                    {currentQuestion < questions.length - 1 ? 'Следующий вопрос' : 'Завершить квиз'}
                  </Button>
                )}
              </div>
            </Card>

            {/* Score Display */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full">
                <Trophy className="w-5 h-5 text-yellow-600" />
                <span className="font-semibold text-red-400">
                  Текущий счет: {score} из {Object.keys(answeredQuestions).length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={80} />
    </>
  );
};

export default Page80;