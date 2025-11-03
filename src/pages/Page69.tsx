import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation, MapPin, Clock, Zap, Target, TrendingUp, AlertTriangle, Users } from "lucide-react";

const Page69 = () => {
  const [selectedRoute, setSelectedRoute] = useState<number>(0);
  const [animateProgress, setAnimateProgress] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(72);

  const advanceRoutes = [
    {
      route: "Северный маршрут",
      description: "3-й Белорусский фронт через Борисов",
      commander: "Черняховский И.Д.",
      distance: "100 км до Минска",
      obstacles: [
        "Переправы через реки Березина и Свислочь",
        "Укрепрайон Борисова",
        "Болотистая местность",
        "Минные поля и завалы"
      ],
      progress: 65,
      status: "Активное наступление",
      eta: "2 июля, вечер",
      keyPoints: [
        { point: "Борисов", status: "в бою", distance: "40 км" },
        { point: "Смолевичи", status: "освобожден", distance: "15 км" },
        { point: "Логойск", status: "блокирован", distance: "25 км" }
      ],
      challenges: "Сильное сопротивление в Борисове",
      advantages: "Кратчайший путь к столице"
    },
    {
      route: "Центральный маршрут",
      description: "1-й Белорусский фронт через Червень",
      commander: "Рокоссовский К.К.",
      distance: "80 км до Минска",
      obstacles: [
        "Укрепления в районе Червеня",
        "Танковые засады немцев",
        "Разрушенные мосты",
        "Контратаки резервов"
      ],
      progress: 75,
      status: "Успешное продвижение",
      eta: "3 июля, утро",
      keyPoints: [
        { point: "Червень", status: "освобожден", distance: "35 км" },
        { point: "Смиловичи", status: "в бою", distance: "20 км" },
        { point: "Дзержинск", status: "блокирован", distance: "25 км" }
      ],
      challenges: "Немецкие танковые контратаки",
      advantages: "Хорошие дороги, поддержка артиллерии"
    },
    {
      route: "Южный маршрут",
      description: "2-й Белорусский фронт через Слуцк",
      commander: "Захаров Г.Ф.",
      distance: "120 км до Минска",
      obstacles: [
        "Слуцкий укрепрайон",
        "Лесисто-болотистая местность",
        "Недостаток дорог",
        "Оборонительные позиции у Марьиной Горки"
      ],
      progress: 55,
      status: "Медленное продвижение",
      eta: "3 июля, день",
      keyPoints: [
        { point: "Слуцк", status: "в бою", distance: "50 км" },
        { point: "Марьина Горка", status: "блокирован", distance: "35 км" },
        { point: "Узда", status: "не достигнут", distance: "35 км" }
      ],
      challenges: "Труднопроходимая местность",
      advantages: "Обход основных сил противника"
    }
  ];

  const encirclementPlan = {
    objective: "Окружение Минской группировки",
    forces: {
      north: "3-й Белорусский фронт",
      south: "1-й Белорусский фронт", 
      center: "2-й Белорусский фронт"
    },
    timeline: [
      { date: "30 июня", goal: "Выход к внешним укреплениям Минска" },
      { date: "1 июля", goal: "Начало окружения немецких войск" },
      { date: "2 июля", goal: "Замыкание кольца окружения" },
      { date: "3 июля", goal: "Штурм и освобождение Минска" }
    ],
    germanGrouping: {
      strength: "Около 100 000 солдат",
      divisions: [
        "12-я пехотная дивизия",
        "31-я пехотная дивизия", 
        "57-я пехотная дивизия",
        "Остатки 4-й армии"
      ],
      commander: "Генерал Типпельскирх",
      status: "Подготовка к обороне столицы"
    }
  };

  const obstacles = [
    {
      type: "Река Березина",
      location: "40 км севернее Минска",
      difficulty: "Высокая",
      solution: "Форсирование с понтонами",
      time: "6-8 часов",
      status: "В процессе"
    },
    {
      type: "Борисовский укрепрайон",
      location: "Северные подступы",
      difficulty: "Критическая",
      solution: "Штурм с артподготовкой",
      time: "12-24 часа",
      status: "Штурм начат"
    },
    {
      type: "Минские укрепления",
      location: "Внешнее кольцо города",
      difficulty: "Очень высокая",
      solution: "Координированная атака 3 фронтов",
      time: "24-48 часов",
      status: "Разведка"
    },
    {
      type: "Немецкие резервы",
      location: "Подвижные группы",
      difficulty: "Высокая",
      solution: "Авиация и танковые клинья",
      time: "Постоянно",
      status: "Контроль"
    }
  ];

  const raceProgress = {
    sovietAdvance: {
      speed: "15-20 км в день",
      momentum: "Высокий",
      morale: "Отличный",
      supply: "Стабильное"
    },
    germanRetreat: {
      speed: "10-15 км в день",
      momentum: "Низкий",
      morale: "Падающий",
      supply: "Нарушено"
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimateProgress(true), 1000);
    const countdown = setInterval(() => {
      setTimeRemaining(prev => Math.max(0, prev - 1));
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
    };
  }, []);

  const formatTime = (hours: number) => {
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    return days > 0 ? `${days} д. ${remainingHours} ч.` : `${remainingHours} ч.`;
  };

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-red-400 tracking-wider">
                  СТРАНИЦА 69 • ГОНКА К СТОЛИЦЕ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                На подступах к Минску
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                30 июня - 2 июля 1944 — три фронта сходятся к столице Беларуси
              </p>
            </div>

            {/* Countdown Timer */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-6 mb-12 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-red-400" />
                <div className="text-4xl font-bold text-red-400">{formatTime(timeRemaining)}</div>
                <div className="text-2xl text-muted-foreground">до штурма Минска</div>
              </div>
              <div className="text-lg text-muted-foreground">
                Время решающей операции на освобождение столицы Беларуси
              </div>
            </Card>

            {/* Route Selection */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Три маршрута к Минску
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {advanceRoutes.map((route, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedRoute(index)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedRoute === index
                        ? 'border-red-500 bg-card/60 text-red-400'
                        : 'border-border hover:border-red-400'
                    }`}
                  >
                    <Navigation className="w-5 h-5 mx-auto mb-2" />
                    <div className="text-sm font-semibold mb-1">{route.route}</div>
                    <div className="text-xs">{route.commander}</div>
                    <div className="text-xs text-muted-foreground">{route.distance}</div>
                  </button>
                ))}
              </div>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-red-400 mb-2">
                    {advanceRoutes[selectedRoute].route}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="default" className="bg-red-600">
                      {advanceRoutes[selectedRoute].commander}
                    </Badge>
                    <Badge variant="outline">{advanceRoutes[selectedRoute].distance}</Badge>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    {advanceRoutes[selectedRoute].description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-400">Препятствия на пути:</h4>
                    <ul className="space-y-2">
                      {advanceRoutes[selectedRoute].obstacles.map((obstacle, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{obstacle}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2 text-red-400">Ключевые пункты:</h4>
                      <div className="space-y-2">
                        {advanceRoutes[selectedRoute].keyPoints.map((point, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-card/60 p-2 rounded border">
                            <span className="font-medium">{point.point}</span>
                            <div className="flex items-center gap-2">
                              <Badge 
                                variant={
                                  point.status === 'освобожден' ? 'default' :
                                  point.status === 'в бою' ? 'secondary' : 'destructive'
                                }
                                className={
                                  point.status === 'освобожден' ? 'bg-red-600' :
                                  point.status === 'в бою' ? 'bg-red-600' : ''
                                }
                              >
                                {point.status}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{point.distance}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Прогресс:</div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex-1 bg-muted rounded-full h-3">
                          <div 
                            className="bg-red-400 h-3 rounded-full transition-all duration-1000"
                            style={{ width: animateProgress ? `${advanceRoutes[selectedRoute].progress}%` : '0%' }}
                          ></div>
                        </div>
                        <span className="text-red-400 font-bold">{advanceRoutes[selectedRoute].progress}%</span>
                      </div>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Статус:</div>
                      <div className="text-sm text-red-300">{advanceRoutes[selectedRoute].status}</div>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Ожидаемое прибытие:</div>
                      <div className="text-sm text-red-300">{advanceRoutes[selectedRoute].eta}</div>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Главная проблема:</div>
                      <div className="text-sm text-red-300">{advanceRoutes[selectedRoute].challenges}</div>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Преимущество:</div>
                      <div className="text-sm text-red-300">{advanceRoutes[selectedRoute].advantages}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </Card>

            {/* Encirclement Plan */}
            <Card className="bg-gradient-to-r bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  План окружения Минской группировки
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Задачи фронтов</h3>
                  <div className="space-y-4">
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <h4 className="font-semibold text-red-400">Северный удар</h4>
                      <p className="text-sm text-red-300 mb-2">{encirclementPlan.forces.north}</p>
                      <p className="text-xs text-muted-foreground">
                        Обход Минска с севера через Борисов, замыкание кольца с юго-востока
                      </p>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <h4 className="font-semibold text-red-400">Центральный удар</h4>
                      <p className="text-sm text-red-300 mb-2">{encirclementPlan.forces.center}</p>
                      <p className="text-xs text-muted-foreground">
                        Фронтальный штурм восточных подступов к городу
                      </p>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <h4 className="font-semibold text-red-400">Южный удар</h4>
                      <p className="text-sm text-red-300 mb-2">{encirclementPlan.forces.south}</p>
                      <p className="text-xs text-muted-foreground">
                        Обход с юга, соединение с северной группировкой западнее города
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-card p-4 rounded border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-400 mb-2">Цель операции:</h4>
                    <p className="text-sm text-red-300">{encirclementPlan.objective}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Временной план</h3>
                  <div className="space-y-3">
                    {encirclementPlan.timeline.map((phase, idx) => (
                      <div key={idx} className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="default" className="bg-red-600">{phase.date}</Badge>
                          <div className="text-right">
                            <div className="text-xs text-muted-foreground">
                              Через {idx + 1} {idx === 0 ? 'день' : idx < 3 ? 'дня' : 'дней'}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{phase.goal}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Немецкая группировка в Минске:</h4>
                    <div className="bg-card p-4 rounded border-l-4 border-red-500">
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <div className="font-semibold text-red-400">Силы:</div>
                          <div className="text-sm text-red-300">{encirclementPlan.germanGrouping.strength}</div>
                        </div>
                        <div>
                          <div className="font-semibold text-red-400">Командующий:</div>
                          <div className="text-sm text-red-300">{encirclementPlan.germanGrouping.commander}</div>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="font-semibold text-red-400">Основные соединения:</div>
                        <ul className="text-xs text-red-300 mt-1">
                          {encirclementPlan.germanGrouping.divisions.map((div, idx) => (
                            <li key={idx}>• {div}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        {encirclementPlan.germanGrouping.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Major Obstacles */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Основные препятствия на пути к Минску
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {obstacles.map((obstacle, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        obstacle.difficulty === 'Критическая' ? 'bg-card text-red-600' :
                        obstacle.difficulty === 'Очень высокая' ? 'bg-card text-red-400' :
                        'bg-card text-red-400'
                      }`}>
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{obstacle.type}</h3>
                        <p className="text-sm text-muted-foreground">{obstacle.location}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Сложность:</span>
                        <Badge variant={
                          obstacle.difficulty === 'Критическая' ? 'destructive' :
                          obstacle.difficulty === 'Очень высокая' ? 'secondary' : 'default'
                        }>
                          {obstacle.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Решение:</span>
                        <span className="font-semibold text-sm">{obstacle.solution}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Время:</span>
                        <span className="font-semibold text-sm">{obstacle.time}</span>
                      </div>
                      
                      <div className="bg-muted/50 p-3 rounded border-l-4 border-red-500">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-red-400" />
                          <span className="font-semibold text-red-400">Статус:</span>
                        </div>
                        <div className="text-sm text-red-300">{obstacle.status}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Race to Minsk */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Гонка времени: наступление vs отступление
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Советское наступление</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Скорость продвижения:</span>
                      <Badge variant="default" className="bg-red-600">
                        {raceProgress.sovietAdvance.speed}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Темп операции:</span>
                      <Badge variant="default" className="bg-red-600">
                        {raceProgress.sovietAdvance.momentum}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Моральный дух:</span>
                      <Badge variant="default" className="bg-red-600">
                        {raceProgress.sovietAdvance.morale}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Снабжение:</span>
                      <Badge variant="default" className="bg-red-600">
                        {raceProgress.sovietAdvance.supply}
                      </Badge>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <h4 className="font-semibold text-red-400 mb-2">Преимущества:</h4>
                      <ul className="space-y-1 text-sm text-red-300">
                        <li>• Численное превосходство 3:1</li>
                        <li>• Господство в воздухе</li>
                        <li>• Высокий боевой дух</li>
                        <li>• Хорошее взаимодействие фронтов</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Немецкое отступление</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Скорость отхода:</span>
                      <Badge variant="destructive">
                        {raceProgress.germanRetreat.speed}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Темп операции:</span>
                      <Badge variant="destructive">
                        {raceProgress.germanRetreat.momentum}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Моральный дух:</span>
                      <Badge variant="destructive">
                        {raceProgress.germanRetreat.morale}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Снабжение:</span>
                      <Badge variant="destructive">
                        {raceProgress.germanRetreat.supply}
                      </Badge>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <h4 className="font-semibold text-red-400 mb-2">Проблемы:</h4>
                      <ul className="space-y-1 text-sm text-red-300">
                        <li>• Потеря связи между частями</li>
                        <li>• Нехватка топлива и боеприпасов</li>
                        <li>• Панические настроения</li>
                        <li>• Разрушенные коммуникации</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Countdown to Minsk */}
            <Card className="bg-gradient-to-br bg-card/80 backdrop-blur-sm border-border p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-red-400">
                До штурма Минска остается
              </h2>
              
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-red-400 mb-4">
                  {Math.floor(timeRemaining / 24)}
                </div>
                <div className="text-2xl text-muted-foreground mb-6">дня</div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg">
                    <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Силы сторон</h3>
                    <p className="text-sm text-muted-foreground">
                      700 000 советских солдат против 100 000 немецких
                    </p>
                  </div>
                  
                  <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg">
                    <Target className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Цель операции</h3>
                    <p className="text-sm text-muted-foreground">
                      Окружение и уничтожение Минской группировки
                    </p>
                  </div>
                  
                  <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg">
                    <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Решающий момент</h3>
                    <p className="text-sm text-muted-foreground">
                      3 июля 1944 года — день освобождения столицы
                    </p>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-xl font-serif italic text-center text-red-400 leading-relaxed">
                «Минск — ключ ко всей операции. Его падение означает полный крах 
                группы армий «Центр» и освобождение всей Беларуси.»
              </blockquote>
              <cite className="block text-center text-muted-foreground mt-4">
                — Из директивы Ставки ВГК, 1 июля 1944
              </cite>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={69} />
    </>
  );
};

export default Page69;