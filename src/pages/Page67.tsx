import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crosshair, MapPin, Clock, Zap, AlertTriangle, TrendingDown, Users } from "lucide-react";

const Page67 = () => {
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [animateEncirclement, setAnimateEncirclement] = useState<boolean>(false);

  const encirclementDays = [
    {
      date: "27 июня 1944",
      phase: "Начало окружения",
      description: "Танковые клинья сходятся у Бобруйска",
      details: [
        "9-й танковый корпус атакует с севера",
        "1-й гвардейский танковый корпус наступает с юга",
        "Пехотные дивизии блокируют отходные пути",
        "Первые попытки немцев прорваться отбиты"
      ],
      encircled: 40000,
      sovietForces: "65-я армия и 9-й танковый корпус",
      germanReaction: "Паника, хаотичные попытки прорыва",
      significance: "Кольцо сжимается",
      timeline: [
        { time: "06:00", event: "Начало наступления танков" },
        { time: "12:00", event: "Первое соприкосновение клиньев" },
        { time: "18:00", event: "Кольцо почти замкнуто" },
        { time: "23:00", event: "Бобруйск блокирован" }
      ]
    },
    {
      date: "28 июня 1944",
      phase: "Кольцо замкнуто",
      description: "Бобруйская группировка полностью окружена",
      details: [
        "Танковые корпуса соединились восточнее города",
        "70 000 немецких солдат в котле",
        "Все пути отступления перерезаны",
        "Начинается методическое уничтожение котла"
      ],
      encircled: 70000,
      sovietForces: "4 армии участвуют в ликвидации",
      germanReaction: "Отчаянные попытки прорыва на запад",
      significance: "Крупнейший котел начала Багратиона",
      timeline: [
        { time: "03:00", event: "Соединение танковых клиньев" },
        { time: "08:00", event: "Окружение завершено" },
        { time: "14:00", event: "Первые массовые сдачи" },
        { time: "20:00", event: "Немцы готовят прорыв" }
      ]
    },
    {
      date: "29 июня 1944",
      phase: "Ликвидация котла",
      description: "Уничтожение окруженной группировки",
      details: [
        "Систематическое сжатие кольца окружения",
        "Артиллерия и авиация уничтожают скопления",
        "Массовая сдача немецких солдат",
        "Освобождение Бобруйска"
      ],
      encircled: 20000,
      sovietForces: "Все 4 армии фронта",
      germanReaction: "Капитуляция основных сил",
      significance: "Группа армий «Центр» понесла катастрофические потери",
      timeline: [
        { time: "05:00", event: "Финальное наступление" },
        { time: "11:00", event: "Падение Бобруйска" },
        { time: "16:00", event: "Массовые сдачи" },
        { time: "22:00", event: "Котел ликвидирован" }
      ]
    }
  ];

  const encirclementData = {
    initial: {
      troops: 70000,
      divisions: [
        "35-й армейский корпус",
        "41-й танковый корпус (части)",
        "383-я пехотная дивизия",
        "707-я охранная дивизия"
      ],
      equipment: {
        tanks: 120,
        artillery: 380,
        vehicles: 2800
      }
    },
    casualties: {
      killed: 50000,
      prisoners: 18000,
      escaped: 2000
    },
    soviet: {
      losses: {
        killed: 3200,
        wounded: 9800
      },
      participating: [
        "65-я армия (Батов)",
        "28-я армия (Лучинский)",
        "9-й танковый корпус",
        "1-й гвардейский танковый корпус"
      ]
    }
  };

  const breakoutAttempts = [
    {
      time: "28 июня, ночь",
      direction: "Западное направление",
      force: "15 000 солдат",
      result: "Отбита с большими потерями",
      details: "Попытка прорыва через позиции 28-й армии",
      casualties: "8 000 убитых и раненых"
    },
    {
      time: "29 июня, утро",
      direction: "Северо-западное направление",
      force: "8 000 солдат",
      result: "Частично успешна",
      details: "Небольшие группы прорвались к своим",
      casualties: "Около 2 000 спаслись"
    },
    {
      time: "29 июня, день",
      direction: "Южное направление",
      force: "12 000 солдат",
      result: "Полностью провалена",
      details: "Встречена огнем танков и артиллерии",
      casualties: "10 000 убитых и пленных"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimateEncirclement(true), 1000);
    return () => clearTimeout(timer);
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
                  СТРАНИЦА 67 • ОПЕРАЦИЯ ОКРУЖЕНИЯ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Бобруйский котел
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                27-29 июня 1944 — классическая операция окружения и уничтожения
              </p>
            </div>

            {/* Day Selector */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Три дня окружения и уничтожения
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {encirclementDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDay(index)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedDay === index
                        ? 'border-red-500 bg-accent/20 text-red-400'
                        : 'border-border hover:border-red-400'
                    }`}
                  >
                    <Clock className="w-5 h-5 mx-auto mb-2" />
                    <div className="text-sm font-semibold mb-1">{day.date}</div>
                    <div className="text-xs">{day.phase}</div>
                  </button>
                ))}
              </div>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-red-400 mb-2">
                    {encirclementDays[selectedDay].phase}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="default" className="bg-red-600">
                      {encirclementDays[selectedDay].date}
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    {encirclementDays[selectedDay].description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-400">Ход операции:</h4>
                    <ul className="space-y-2">
                      {encirclementDays[selectedDay].details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Crosshair className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2 text-red-800">Хронология дня:</h4>
                      <div className="space-y-2">
                        {encirclementDays[selectedDay].timeline.map((event, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm">
                            <Badge variant="outline" className="text-xs">{event.time}</Badge>
                            <span className="text-muted-foreground">{event.event}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">В окружении:</div>
                      <div className="text-2xl font-bold text-red-400">
                        {animateEncirclement ? encirclementDays[selectedDay].encircled.toLocaleString() : '0'}
                      </div>
                      <div className="text-sm text-red-300">немецких солдат</div>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Советские силы:</div>
                      <div className="text-sm text-red-300">{encirclementDays[selectedDay].sovietForces}</div>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Реакция немцев:</div>
                      <div className="text-sm text-red-300">{encirclementDays[selectedDay].germanReaction}</div>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Значение:</div>
                      <div className="text-sm text-red-300">{encirclementDays[selectedDay].significance}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </Card>

            {/* Encircled Forces */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Окруженные силы противника
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Troops */}
                <Card className="p-6 bg-card/60">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Войска в котле</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-400 mb-2">
                        {animateEncirclement ? encirclementData.initial.troops.toLocaleString() : '0'}
                      </div>
                      <div className="text-sm text-red-300">солдат и офицеров</div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-red-400">Соединения:</h4>
                      <ul className="space-y-1">
                        {encirclementData.initial.divisions.map((div, idx) => (
                          <li key={idx} className="text-sm text-red-300">• {div}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Equipment */}
                <Card className="p-6 bg-card/60">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Техника</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {encirclementData.initial.equipment.tanks}
                        </div>
                        <div className="text-xs text-red-300">танков</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {encirclementData.initial.equipment.artillery}
                        </div>
                        <div className="text-xs text-red-300">орудий</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {encirclementData.initial.equipment.vehicles}
                        </div>
                        <div className="text-xs text-red-300">машин</div>
                      </div>
                    </div>
                    
                    <div className="bg-card/60 p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Проблема снабжения:</div>
                      <div className="text-sm text-red-300">
                        Запасы на 2-3 дня, авиация заблокирована
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Results */}
                <Card className="p-6 bg-card/80">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Итоги операции</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {animateEncirclement ? encirclementData.casualties.killed.toLocaleString() : '0'}
                        </div>
                        <div className="text-xs text-red-300">убитых</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {animateEncirclement ? encirclementData.casualties.prisoners.toLocaleString() : '0'}
                        </div>
                        <div className="text-xs text-red-300">пленных</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400 mb-1">
                        {animateEncirclement ? '97%' : '0%'}
                      </div>
                      <div className="text-xs text-red-300">группировки уничтожено</div>
                    </div>
                    
                    <div className="bg-card/60 p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Спаслись:</div>
                      <div className="text-sm text-red-300">
                        Только {encirclementData.casualties.escaped.toLocaleString()} человек
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Breakout Attempts */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <TrendingDown className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Попытки прорыва из котла
                </h2>
              </div>
              
              <div className="space-y-6">
                {breakoutAttempts.map((attempt, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-r bg-card/80 backdrop-blur-sm border-border">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="default" className="bg-red-600">
                            {attempt.time}
                          </Badge>
                          <h3 className="font-bold text-lg">{attempt.direction}</h3>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Силы:</span>
                            <span className="font-semibold">{attempt.force}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Результат:</span>
                            <Badge variant={
                              attempt.result.includes('Отбита') ? 'destructive' :
                              attempt.result.includes('Частично') ? 'secondary' : 'default'
                            }>
                              {attempt.result}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Детали операции:</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {attempt.details}
                        </p>
                        
                        <div className="bg-card/60 p-3 rounded border-l-4 border-red-500">
                          <div className="font-semibold text-red-400">Потери:</div>
                          <div className="text-sm text-red-300">{attempt.casualties}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="w-12 h-12 text-red-400 mx-auto mb-2" />
                          <div className="text-sm text-muted-foreground">
                            Направление<br/>прорыва
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Soviet Forces */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Советские силы в операции
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Участвующие соединения</h3>
                  <div className="space-y-4">
                    {encirclementData.soviet.participating.map((unit, idx) => (
                      <div key={idx} className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                        <div className="font-semibold text-red-400">{unit}</div>
                        <div className="text-sm text-red-300">
                          {idx === 0 && "Основные силы окружения с севера"}
                          {idx === 1 && "Основные силы окружения с юга"}
                          {idx === 2 && "Подвижная группа, замыкающая кольцо"}
                          {idx === 3 && "Танковый резерв и поддержка"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Потери и достижения</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-red-600">
                          {animateEncirclement ? encirclementData.soviet.losses.killed.toLocaleString() : '0'}
                        </div>
                        <div className="text-sm text-muted-foreground">убитых</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-red-400">
                          {animateEncirclement ? encirclementData.soviet.losses.wounded.toLocaleString() : '0'}
                        </div>
                        <div className="text-sm text-muted-foreground">раненых</div>
                      </div>
                    </div>
                    
                    <div className="bg-card p-4 rounded border-l-4 border-red-500">
                      <h4 className="font-semibold text-red-400 mb-2">Тактические достижения:</h4>
                      <ul className="space-y-1 text-sm text-red-300">
                        <li>• Классическое двойное окружение</li>
                        <li>• Координация танков и пехоты</li>
                        <li>• Блокирование всех путей отхода</li>
                        <li>• Минимальные собственные потери</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <h4 className="font-semibold text-red-400 mb-2">Стратегическое значение:</h4>
                      <p className="text-sm text-red-300">
                        Уничтожение 35-го армейского корпуса открыло путь к Минску 
                        и обеспечило успех всей операции «Багратион»
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Historical Assessment */}
            <Card className="bg-gradient-to-br bg-card/80 backdrop-blur-sm border-border p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-red-400">
                Историческая оценка Бобруйского котла
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Zap className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Образцовая операция</h3>
                  <p className="text-sm text-muted-foreground">
                    Классический пример танкового окружения с минимальными потерями
                  </p>
                </div>
                
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Стратегический успех</h3>
                  <p className="text-sm text-muted-foreground">
                    Открыл путь к Минску и обеспечил развитие наступления
                  </p>
                </div>
                
                <div className="text-center">
                  <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Координация войск</h3>
                  <p className="text-sm text-muted-foreground">
                    Блестящее взаимодействие танков, пехоты и авиации
                  </p>
                </div>
              </div>
              
              <blockquote className="text-xl font-serif italic text-center text-red-400 leading-relaxed">
                «Бобруйский котел стал школой военного искусства. 
                Советские генералы показали, что умеют не только обороняться, 
                но и проводить сложнейшие операции на окружение.»
              </blockquote>
              <cite className="block text-center text-muted-foreground mt-4">
                — Из мемуаров маршала К.К. Рокоссовского
              </cite>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={67} />
    </>
  );
};

export default Page67;