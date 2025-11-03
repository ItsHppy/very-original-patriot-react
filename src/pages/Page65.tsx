import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Flag, Users, Star, Zap, Trophy } from "lucide-react";

const Page65 = () => {
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [animateProgress, setAnimateProgress] = useState<boolean>(false);
  const [currentDay, setCurrentDay] = useState<number>(1);

  const liberationDays = [
    {
      date: "23 июня 1944",
      day: 1,
      title: "День начала",
      description: "Операция «Багратион» началась на рассвете",
      events: [
        "04:00 — Артиллерийская подготовка",
        "06:00 — Начало пехотных атак",
        "09:00 — Ввод танковых корпусов",
        "18:00 — Прорыв первой линии обороны"
      ],
      liberated: [
        "127 населенных пунктов",
        "Продвижение на 25-30 км",
        "Первые пленные и трофеи"
      ],
      significance: "Начало освобождения Беларуси",
      mood: "Боевой подъем",
      progress: 5
    },
    {
      date: "26 июня 1944",
      day: 4,
      title: "Первые крупные победы",
      description: "Освобождение Витебска — первый большой успех",
      events: [
        "10:00 — Окружение Витебска завершено",
        "16:00 — Красное знамя над городом",
        "20:00 — 53000 немцев в котле",
        "22:00 — Жители встречают освободителей"
      ],
      liberated: [
        "Витебск — древний город",
        "5 немецких дивизий окружены",
        "Первый крупный железнодорожный узел"
      ],
      significance: "Первая крупная победа операции",
      mood: "Торжество и надежда",
      progress: 15
    },
    {
      date: "28 июня 1944",
      day: 6,
      title: "Могилёв свободен",
      description: "Освобождение областного центра",
      events: [
        "12:00 — Штурм центра Могилёва",
        "16:00 — Красное знамя над горсоветом",
        "18:00 — Капитуляция остатков гарнизона",
        "20:00 — Восстановление мостов через Днепр"
      ],
      liberated: [
        "Могилёв — областной центр",
        "Важный узел коммуникаций",
        "8000 пленных немцев"
      ],
      significance: "Путь на Минск открыт",
      mood: "Уверенность в победе",
      progress: 25
    },
    {
      date: "29 июня 1944",
      day: 7,
      title: "Бобруйский котел",
      description: "Завершение окружения в Бобруйске",
      events: [
        "11:00 — Бобруйск полностью окружен",
        "14:00 — Массовые сдачи немцев в плен",
        "17:00 — Город освобожден",
        "20:00 — Подсчет трофеев и пленных"
      ],
      liberated: [
        "Бобруйск — крепость на Березине",
        "70000 немцев в котле",
        "Огромные склады боеприпасов"
      ],
      significance: "Классическая операция на окружение",
      mood: "Мастерство советского командования",
      progress: 35
    },
    {
      date: "3 июля 1944",
      day: 11,
      title: "Минск освобожден!",
      description: "Красное знамя над столицей Беларуси",
      events: [
        "10:00 — Красное знамя над горсоветом",
        "12:00 — Последние немцы капитулируют",
        "14:00 — Жители выходят на улицы",
        "18:00 — Торжественный митинг"
      ],
      liberated: [
        "Минск — столица БССР",
        "105000 немцев в котле",
        "95000 жителей встретили свободу"
      ],
      significance: "Символическая вершина операции",
      mood: "Ликование и слезы радости",
      progress: 60
    },
    {
      date: "13 июля 1944",
      day: 21,
      title: "Освобождение продолжается",
      description: "Наступление развивается по всем направлениям",
      events: [
        "Освобождение Вильнюса",
        "Бои за Гродно",
        "Продвижение к границе",
        "Очистка партизанских краев"
      ],
      liberated: [
        "Сотни городов и поселков",
        "Тысячи деревень",
        "Партизанские края соединились с фронтом"
      ],
      significance: "Освобождение набирает темп",
      mood: "Методичное наступление",
      progress: 80
    },
    {
      date: "28 июля 1944",
      day: 36,
      title: "Брест — круг замкнулся",
      description: "Символическое завершение в городе, где началась война",
      events: [
        "10:00 — Красное знамя над крепостью",
        "12:00 — Там, где началась война, она завершается",
        "15:00 — Последние бои на территории БССР",
        "18:00 — Враг изгнан с белорусской земли"
      ],
      liberated: [
        "Брест — символ стойкости",
        "Последние районы Беларуси",
        "Граница с Польшей достигнута"
      ],
      significance: "Символическое завершение",
      mood: "Справедливость восторжествовала",
      progress: 95
    },
    {
      date: "29 августа 1944",
      day: 68,
      title: "Операция завершена",
      description: "Последние бои — враг полностью изгнан",
      events: [
        "Последние немецкие группы уничтожены",
        "Граница Восточной Пруссии достигнута",
        "Операция «Багратион» завершена",
        "Беларусь полностью свободна"
      ],
      liberated: [
        "Вся территория БССР",
        "450 городов",
        "15000 деревень"
      ],
      significance: "Полная победа",
      mood: "Триумф советского оружия",
      progress: 100
    }
  ];

  const dailyStatistics = {
    average_advance: "12-15 км в день",
    cities_per_day: "6-8 городов",
    villages_per_day: "50-80 деревень",
    prisoners_per_day: "8000-12000 человек",
    territory_per_day: "6500 км²"
  };

  const keyBattles = [
    {
      location: "Витебск",
      date: "23-26 июня",
      type: "Окружение",
      result: "53000 пленных",
      significance: "Первый крупный успех"
    },
    {
      location: "Бобруйск", 
      date: "27-29 июня",
      type: "Котел",
      result: "70000 пленных",
      significance: "Образцовая операция"
    },
    {
      location: "Могилёв",
      date: "26-28 июня",
      type: "Штурм",
      result: "8000 пленных",
      significance: "Путь к Минску открыт"
    },
    {
      location: "Минск",
      date: "2-3 июля",
      type: "Освобождение столицы",
      result: "105000 пленных",
      significance: "Кульминация операции"
    },
    {
      location: "Гродно",
      date: "13-16 июля",
      type: "Городские бои",
      result: "12000 пленных",
      significance: "Древний город свободен"
    },
    {
      location: "Брест",
      date: "26-28 июля",
      type: "Символическое освобождение",
      result: "Круг замкнулся",
      significance: "Историческая справедливость"
    }
  ];

  const operationMilestones = [
    {
      milestone: "Прорыв обороны",
      achieved: "23-25 июня",
      description: "Немецкая оборона прорвана на фронте 450 км"
    },
    {
      milestone: "Первые котлы",
      achieved: "26-29 июня", 
      description: "Окружены и уничтожены крупные группировки"
    },
    {
      milestone: "Освобождение столицы",
      achieved: "3 июля",
      description: "Минск — символическая вершина операции"
    },
    {
      milestone: "Достижение границы",
      achieved: "28 июля",
      description: "Советские войска вышли к довоенным границам"
    },
    {
      milestone: "Полное освобождение",
      achieved: "29 августа",
      description: "Вся территория БССР свободна от захватчиков"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimateProgress(true), 1000);
    const dayTimer = setInterval(() => {
      setCurrentDay(prev => prev < 68 ? prev + 1 : 1);
    }, 200);
    
    return () => {
      clearTimeout(timer);
      clearInterval(dayTimer);
    };
  }, []);

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-red-400 tracking-wider">
                  СТРАНИЦА 65 • ХРОНИКА ПОБЕД
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                День за днем освобождения
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                68 дней триумфа — ежедневная хроника операции «Багратион»
              </p>
            </div>

            {/* Days Counter */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-6 mb-12 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Calendar className="w-8 h-8 text-red-400" />
                <div className="text-4xl font-bold text-red-400">День {currentDay}</div>
                <div className="text-2xl text-muted-foreground">операции «Багратион»</div>
              </div>
              <div className="text-lg text-muted-foreground">
                {currentDay === 1 && "Операция началась — артиллерийская подготовка"}
                {currentDay > 1 && currentDay <= 11 && "Прорыв обороны и первые котлы"}
                {currentDay > 11 && currentDay <= 36 && "Освобождение продолжается"}
                {currentDay > 36 && "Завершающий этап операции"}
              </div>
            </Card>

            {/* Key Days Timeline */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Ключевые дни освобождения
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {liberationDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDay(index)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedDay === index
                        ? 'border-red-500 bg-accent/20 text-red-400'
                        : 'border-border hover:border-red-400'
                    }`}
                  >
                    <Calendar className="w-5 h-5 mx-auto mb-2" />
                    <div className="text-xs font-semibold mb-1">День {day.day}</div>
                    <div className="text-xs">{day.date.split(' ')[0]} {day.date.split(' ')[1]}</div>
                  </button>
                ))}
              </div>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-red-400 mb-2">
                    {liberationDays[selectedDay].title}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="default" className="bg-red-500">
                      {liberationDays[selectedDay].date}
                    </Badge>
                    <Badge variant="outline">День {liberationDays[selectedDay].day}</Badge>
                    <Badge variant="secondary">{liberationDays[selectedDay].progress}% территории</Badge>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    {liberationDays[selectedDay].description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-400">События дня:</h4>
                    <ul className="space-y-2">
                      {liberationDays[selectedDay].events.map((event, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-red-400">Освобождено:</h4>
                    <ul className="space-y-2">
                      {liberationDays[selectedDay].liberated.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Flag className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Значение:</div>
                      <div className="text-sm text-red-300">{liberationDays[selectedDay].significance}</div>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Настроение:</div>
                      <div className="text-sm text-red-300">{liberationDays[selectedDay].mood}</div>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Прогресс:</div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex-1 bg-muted rounded-full h-3">
                          <div 
                            className="bg-red-500 h-3 rounded-full transition-all duration-1000"
                            style={{ width: `${liberationDays[selectedDay].progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-red-400">
                          {liberationDays[selectedDay].progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Card>

            {/* Daily Statistics */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Trophy className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Ежедневные достижения
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-400 mb-2">
                    {dailyStatistics.average_advance}
                  </div>
                  <div className="text-sm text-red-300">среднее продвижение</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-red-400 mb-2">
                    {dailyStatistics.cities_per_day}
                  </div>
                  <div className="text-sm text-red-400">городов в день</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-red-400 mb-2">
                    {dailyStatistics.villages_per_day}
                  </div>
                  <div className="text-sm text-red-300">деревень в день</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-red-400 mb-2">
                    {dailyStatistics.prisoners_per_day}
                  </div>
                  <div className="text-sm text-red-300">пленных в день</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {dailyStatistics.territory_per_day}
                  </div>
                  <div className="text-sm text-red-700">км² в день</div>
                </div>
              </div>
              
              <div className="mt-8 bg-card/60 p-6 rounded-lg">
                <h3 className="font-bold text-red-400 mb-3 text-center">Темп освобождения</h3>
                <p className="text-red-300 text-center">
                  За 68 дней операции советские войска освободили территорию площадью 450 000 км² — 
                  это больше территории Германии! Каждый день приносил свободу тысячам жителей.
                </p>
              </div>
            </Card>

            {/* Key Battles */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Ключевые сражения операции
                </h2>
              </div>
              
              <div className="space-y-4">
                {keyBattles.map((battle, index) => (
                  <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm border-border">
                    <div className="grid md:grid-cols-5 gap-4 items-center">
                      <div>
                        <h3 className="font-bold text-lg">{battle.location}</h3>
                        <Badge variant="outline" className="mt-1">{battle.date}</Badge>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-muted-foreground">Тип операции:</div>
                        <div className="text-sm">{battle.type}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-muted-foreground">Результат:</div>
                        <div className="text-sm font-bold text-red-300">{battle.result}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-muted-foreground">Значение:</div>
                        <div className="text-sm">{battle.significance}</div>
                      </div>
                      
                      <div className="flex justify-center">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-red-400">
                          <Star className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Operation Milestones */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Основные этапы операции
                </h2>
              </div>
              
              <div className="space-y-6">
                {operationMilestones.map((milestone, index) => (
                  <div key={index} className="relative">
                    {index < operationMilestones.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-blue-200"></div>
                    )}
                    
                    <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-xl">{milestone.milestone}</h3>
                            <Badge variant="default" className="bg-red-500">
                              {milestone.achieved}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                        
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-red-400">
                          <Trophy className="w-8 h-8" />
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </Card>

            {/* Daily Liberation Progress */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-red-400">
                68 дней торжества справедливости
              </h2>
              
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">📅⚔️🏆</div>
                <div className="text-2xl font-bold text-red-400 mb-4">
                  23 июня — 29 августа 1944
                </div>
                <p className="text-lg text-muted-foreground">
                  Каждый день операции «Багратион» приближал полную победу
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Ежедневные освобождения</h3>
                  <p className="text-sm text-muted-foreground">
                    Каждый день тысячи людей встречали свободу
                  </p>
                </div>
                
                <div className="text-center">
                  <Flag className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Неостановимое наступление</h3>
                  <p className="text-sm text-muted-foreground">
                    Ни одного дня без освобождения новых территорий
                  </p>
                </div>
                
                <div className="text-center">
                  <Star className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Растущий успех</h3>
                  <p className="text-sm text-muted-foreground">
                    С каждым днем операция набирала силу и размах
                  </p>
                </div>
              </div>
              
              <blockquote className="text-xl font-serif italic text-center text-red-400 leading-relaxed">
                «68 дней операции «Багратион» — это 68 дней непрерывных побед, 
                68 дней освобождения, 68 дней приближения к полной победе над фашизмом. 
                Каждый день был шагом к свободе.»
              </blockquote>
              <cite className="block text-center text-muted-foreground mt-4">
                — Из воспоминаний участника освобождения Беларуси
              </cite>
              
              <div className="mt-8 text-center">
                <div className="text-2xl font-bold text-red-400">
                  КАЖДЫЙ ДЕНЬ — НОВАЯ ПОБЕДА!
                </div>
                <div className="text-lg text-muted-foreground mt-2">
                  68 дней славы советского оружия
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={65} />
    </>
  );
};

export default Page65;