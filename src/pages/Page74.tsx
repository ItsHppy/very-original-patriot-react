import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Crosshair, Flag, Trophy, Clock, Zap, Users } from "lucide-react";

const Page74 = () => {
  const [selectedOperation, setSelectedOperation] = useState<number>(0);
  const [animateProgress, setAnimateProgress] = useState<boolean>(false);
  const [completionPercentage, setCompletionPercentage] = useState<number>(0);

  const finalOperations = [
    {
      name: "Очистка Полесья",
      period: "1-15 августа 1944",
      description: "Ликвидация остатков немецких войск в болотах",
      forces: "61-я армия, партизанские бригады",
      objectives: [
        "Зачистка болотистых районов",
        "Ликвидация диверсионных групп",
        "Контроль над переправами",
        "Соединение с польскими партизанами"
      ],
      challenges: [
        "Труднопроходимая местность",
        "Разбросанные немецкие группы",
        "Минные поля в болотах",
        "Отсутствие дорог"
      ],
      results: {
        enemy_eliminated: 5000,
        prisoners: 2000,
        weapons_captured: 1200,
        territory_cleared: 15000
      },
      significance: "Полная зачистка территории Беларуси",
      difficulty: 6
    },
    {
      name: "Прижатие к границе",
      period: "16-25 августа 1944",
      description: "Преследование отступающих немецких группировок",
      forces: "3-й Белорусский фронт, авиация",
      objectives: [
        "Преследование отступающего противника",
        "Недопущение организованного отхода",
        "Захват переправ через Неман",
        "Выход к границе Восточной Пруссии"
      ],
      challenges: [
        "Быстрое отступление немцев",
        "Разрушенные коммуникации",
        "Растянутые тылы",
        "Сопротивление на границе"
      ],
      results: {
        enemy_eliminated: 8000,
        prisoners: 12000,
        weapons_captured: 3000,
        territory_cleared: 25000
      },
      significance: "Враг полностью изгнан с территории БССР",
      difficulty: 7
    },
    {
      name: "Форсирование Немана",
      period: "26-31 августа 1944",
      description: "Переход границы и начало боев в Восточной Пруссии",
      forces: "28-я, 31-я армии",
      objectives: [
        "Форсирование реки Неман",
        "Захват плацдармов в Восточной Пруссии",
        "Разрушение пограничных укреплений",
        "Создание базы для дальнейшего наступления"
      ],
      challenges: [
        "Мощные пограничные укрепления",
        "Ожесточенное сопротивление",
        "Водная преграда",
        "Контратаки резервов"
      ],
      results: {
        enemy_eliminated: 6000,
        prisoners: 3000,
        weapons_captured: 800,
        territory_cleared: 2000
      },
      significance: "Война перенесена на территорию агрессора",
      difficulty: 9
    }
  ];

  const libretationStats = {
    total_duration: "68 дней",
    total_territory: "208000 км²",
    cities_liberated: 450,
    towns_liberated: 2000,
    villages_liberated: 15000,
    enemy_losses: {
      killed: 450000,
      prisoners: 158000,
      weapons: 95000,
      tanks: 2500,
      aircraft: 1300
    },
    soviet_losses: {
      killed: 178000,
      wounded: 587000,
      total: 765000
    },
    civilian_casualties: {
      killed_during_occupation: 2200000,
      liberated: 1500000,
      displaced: 800000
    }
  };

  const lastBattles = [
    {
      location: "Лида",
      date: "8 августа",
      type: "Городской бой",
      duration: "6 часов",
      outcome: "Полное освобождение",
      casualties: "Минимальные"
    },
    {
      location: "Новогрудок",
      date: "12 августа",
      type: "Штурм укреплений",
      duration: "2 дня",
      outcome: "Захват города",
      casualties: "Умеренные"
    },
    {
      location: "Волковыск",
      date: "18 августа",
      type: "Преследование",
      duration: "1 день",
      outcome: "Быстрое освобождение",
      casualties: "Легкие"
    },
    {
      location: "Гродненский укрепрайон",
      date: "22 августа",
      type: "Прорыв обороны",
      duration: "4 дня",
      outcome: "Разрушение укреплений",
      casualties: "Высокие"
    },
    {
      location: "Переправы через Неман",
      date: "28 августа",
      type: "Форсирование",
      duration: "3 дня",
      outcome: "Захват плацдармов",
      casualties: "Значительные"
    }
  ];

  const warConsequences = {
    demographic: {
      population_loss: 25,
      children_orphaned: 300000,
      families_destroyed: 600000,
      refugees: 800000
    },
    economic: {
      industry_destroyed: 85,
      agriculture_damaged: 60,
      cities_ruined: 450,
      villages_burned: 9200
    },
    cultural: {
      schools_destroyed: 5295,
      hospitals_destroyed: 620,
      libraries_burned: 155,
      monuments_damaged: 200
    },
    reconstruction: {
      estimated_time: "15-20 лет",
      priority_areas: ["Промышленность", "Жилье", "Инфраструктура", "Образование"],
      immediate_needs: ["Разминирование", "Медпомощь", "Питание", "Жилье"]
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateProgress(true);
      let progress = 0;
      const progressTimer = setInterval(() => {
        progress += 2;
        setCompletionPercentage(progress);
        if (progress >= 100) {
          clearInterval(progressTimer);
        }
      }, 50);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-card/80 backdrop-blur-sm border-border900 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 74 • ФИНАЛ ОПЕРАЦИИ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Последние бои — август 1944
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Завершение операции «Багратион» и изгнание врага с территории Беларуси
              </p>
            </div>

            {/* Liberation Progress */}
            <Card className="bg-card/80 backdrop-blur-sm border-border900 border-gray-700 p-6 mb-12 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Trophy className="w-8 h-8 text-red-400" />
                <div className="text-4xl font-bold text-red-400">{completionPercentage}%</div>
                <div className="text-2xl text-muted-foreground">Беларуси освобождено</div>
              </div>
              <div className="text-lg text-muted-foreground mb-4">
                Операция «Багратион» близится к завершению
              </div>
              
              <div className="max-w-md mx-auto">
                <div className="w-full bg-muted rounded-full h-6">
                  <div 
                    className="bg-gradient-to-r bg-primary/60 h-6 rounded-full  duration-3000"
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>
              </div>
            </Card>

            {/* Final Operations */}
            <Card className="bg-card/80 backdrop-blur-sm border-border900 border-gray-700 p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-red-400">
                Заключительные операции августа 1944
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {finalOperations.map((operation, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedOperation(index)}
                    className={`p-4 rounded-lg border-2  ${
                      selectedOperation === index
                        ? 'border-red-500 bg-card/80 backdrop-blur-sm border-border900 text-accent'
                        : 'border-gray-600 hover:border-red-400'
                    }`}
                  >
                    <Crosshair className="w-5 h-5 mx-auto mb-2" />
                    <div className="text-sm font-semibold mb-1">{operation.name}</div>
                    <div className="text-xs">{operation.period}</div>
                  </button>
                ))}
              </div>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border900 border-gray-700">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-accent mb-2">
                    {finalOperations[selectedOperation].name}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="default" className="bg-red-600">
                      {finalOperations[selectedOperation].period}
                    </Badge>
                    <Badge variant="outline">
                      Сложность: {finalOperations[selectedOperation].difficulty}/10
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    {finalOperations[selectedOperation].description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Задачи:</h4>
                    <ul className="space-y-2">
                      {finalOperations[selectedOperation].objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-red-800">Трудности:</h4>
                    <ul className="space-y-2">
                      {finalOperations[selectedOperation].challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-red-400">Результаты:</h4>
                    <div className="space-y-2">
                      <div className="bg-card/80 backdrop-blur-sm border-border800 border-gray-700 p-3 rounded border-l-4 border-red-500">
                        <div className="text-xs text-red-400">Враг уничтожен:</div>
                        <div className="font-bold text-red-400">
                          {finalOperations[selectedOperation].results.enemy_eliminated.toLocaleString()}
                        </div>
                      </div>
                      
                      <div className="bg-card/80 backdrop-blur-sm border-border800 border-gray-700 p-3 rounded border-l-4 border-red-500">
                        <div className="text-xs text-red-400">Пленных:</div>
                        <div className="font-bold text-red-400">
                          {finalOperations[selectedOperation].results.prisoners.toLocaleString()}
                        </div>
                      </div>
                      
                      <div className="bg-card/80 backdrop-blur-sm border-border800 border-gray-700 p-3 rounded border-l-4 border-red-500">
                        <div className="text-xs text-red-400">Территория (км²):</div>
                        <div className="font-bold text-purple-600">
                          {finalOperations[selectedOperation].results.territory_cleared.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-card/80 backdrop-blur-sm border-border800 border-gray-700 p-4 rounded border-l-4 border-red-500">
                    <div className="font-semibold text-red-400">Силы:</div>
                    <div className="text-sm text-primary">{finalOperations[selectedOperation].forces}</div>
                  </div>
                  
                  <div className="bg-card/80 backdrop-blur-sm border-border800 border-gray-700 p-4 rounded border-l-4 border-red-500">
                    <div className="font-semibold text-red-400">Значение:</div>
                    <div className="text-sm text-primary">{finalOperations[selectedOperation].significance}</div>
                  </div>
                </div>
              </Card>
            </Card>

            {/* Last Battles */}
            <Card className="bg-card/80 backdrop-blur-sm border-border900 border-gray-700 p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Последние сражения на территории Беларуси
                </h2>
              </div>
              
              <div className="space-y-4">
                {lastBattles.map((battle, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-r bg-card/60 backdrop-blur-sm border-gray-200">
                    <div className="grid md:grid-cols-6 gap-4 items-center">
                      <div>
                        <h3 className="font-bold text-lg">{battle.location}</h3>
                        <Badge variant="outline" className="mt-1">{battle.date}</Badge>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-muted-foreground">Тип боя:</div>
                        <div className="text-sm">{battle.type}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-muted-foreground">Длительность:</div>
                        <div className="text-sm">{battle.duration}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-muted-foreground">Исход:</div>
                        <div className="text-sm text-primary">{battle.outcome}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-muted-foreground">Потери:</div>
                        <Badge variant={
                          battle.casualties === 'Минимальные' || battle.casualties === 'Легкие' ? 'default' :
                          battle.casualties === 'Умеренные' ? 'secondary' : 'destructive'
                        } className={
                          battle.casualties === 'Минимальные' || battle.casualties === 'Легкие' ? 'bg-red-600' :
                          battle.casualties === 'Умеренные' ? 'bg-red-600' : ''
                        }>
                          {battle.casualties}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          battle.casualties === 'Минимальные' || battle.casualties === 'Легкие' ? 'bg-card/80 backdrop-blur-sm border-border900 text-red-400' :
                          battle.casualties === 'Умеренные' ? 'bg-card/80 backdrop-blur-sm border-border900 text-yellow-600' : 'bg-card text-red-600'
                        }`}>
                          <Flag className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Operation Statistics */}
            <Card className="bg-card/80 backdrop-blur-sm border-border800 border-blue-200 p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Trophy className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Итоги операции «Багратион»
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Масштаб операции</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">
                        {libretationStats.total_duration}
                      </div>
                      <div className="text-sm text-primary">длительность</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div>
                        <div className="text-lg font-bold text-red-400">
                          {libretationStats.cities_liberated}
                        </div>
                        <div className="text-xs text-primary">городов</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-400">
                          {libretationStats.towns_liberated.toLocaleString()}
                        </div>
                        <div className="text-xs text-primary">поселков</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400 mb-1">
                        {libretationStats.villages_liberated.toLocaleString()}
                      </div>
                      <div className="text-xs text-primary">деревень освобождено</div>
                    </div>
                    
                    <div className="bg-card p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Территория:</div>
                      <div className="text-sm text-primary">
                        {libretationStats.total_territory.toLocaleString()} км² (вся БССР)
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
                  <h3 className="text-xl font-bold mb-4 text-red-800">Потери противника</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div>
                        <div className="text-lg font-bold text-red-600">
                          {libretationStats.enemy_losses.killed.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-700">убитых</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-muted-foreground">
                          {libretationStats.enemy_losses.prisoners.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">пленных</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-lg font-bold text-red-400">
                          {libretationStats.enemy_losses.weapons.toLocaleString()}
                        </div>
                        <div className="text-xs text-primary">орудий</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-400">
                          {libretationStats.enemy_losses.tanks.toLocaleString()}
                        </div>
                        <div className="text-xs text-primary">танков</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-400">
                          {libretationStats.enemy_losses.aircraft.toLocaleString()}
                        </div>
                        <div className="text-xs text-primary">самолетов</div>
                      </div>
                    </div>
                    
                    <div className="bg-card/80 backdrop-blur-sm border-border900 p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-800">Группа армий «Центр»:</div>
                      <div className="text-sm text-red-700">
                        Полностью уничтожена как боевая единица
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Наши потери</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div>
                        <div className="text-lg font-bold text-red-600">
                          {libretationStats.soviet_losses.killed.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-700">погибших</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-400">
                          {libretationStats.soviet_losses.wounded.toLocaleString()}
                        </div>
                        <div className="text-xs text-primary">раненых</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-muted-foreground mb-1">
                        {libretationStats.soviet_losses.total.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">общие потери</div>
                    </div>
                    
                    <div className="bg-card p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Соотношение потерь:</div>
                      <div className="text-sm text-primary">
                        1:1.3 в пользу противника (исключительно низкое для наступления)
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* War Consequences */}
            <Card className="bg-card/80 backdrop-blur-sm border-border900 border-gray-700 p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Последствия войны для Беларуси
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-800">Демографические потери</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">25%</div>
                      <div className="text-sm text-red-700">населения погибло</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {warConsequences.demographic.children_orphaned.toLocaleString()}
                        </div>
                        <div className="text-xs text-primary">детей-сирот</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {warConsequences.demographic.families_destroyed.toLocaleString()}
                        </div>
                        <div className="text-xs text-primary">семей разрушено</div>
                      </div>
                    </div>
                    
                    <div className="bg-card/80 backdrop-blur-sm border-border900 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-800">Трагедия народа:</div>
                      <div className="text-sm text-red-700">
                        Беларусь понесла одни из самых тяжелых относительных потерь 
                        среди всех стран во Второй мировой войне
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-400">Экономические разрушения</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Промышленность:</span>
                        <span className="font-bold">{warConsequences.economic.industry_destroyed}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-red-400 h-3 rounded-full" style={{ width: `${warConsequences.economic.industry_destroyed}%` }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Сельское хозяйство:</span>
                        <span className="font-bold">{warConsequences.economic.agriculture_damaged}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-red-400 h-3 rounded-full" style={{ width: `${warConsequences.economic.agriculture_damaged}%` }}></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-red-600">
                          {warConsequences.economic.cities_ruined}
                        </div>
                        <div className="text-xs text-red-700">городов разрушено</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600">
                          {warConsequences.economic.villages_burned.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-700">деревень сожжено</div>
                      </div>
                    </div>
                    
                    <div className="bg-card p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Восстановление:</div>
                      <div className="text-sm text-primary">
                        Потребуется {warConsequences.reconstruction.estimated_time} 
                        для полного восстановления республики
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Operation Conclusion */}
            <Card className="bg-gradient-to-br bg-card/80 backdrop-blur-sm border-border p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-accent">
                Операция «Багратион» завершена
              </h2>
              
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🏆⚔️🇧🇾</div>
                <div className="text-2xl font-bold text-red-400 mb-4">
                  31 августа 1944 года
                </div>
                <p className="text-lg text-muted-foreground">
                  Беларусь полностью освобождена от немецко-фашистских захватчиков
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Flag className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Полное освобождение</h3>
                  <p className="text-sm text-muted-foreground">
                    Вся территория БССР возвращена под советскую власть
                  </p>
                </div>
                
                <div className="text-center">
                  <Trophy className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Стратегический успех</h3>
                  <p className="text-sm text-muted-foreground">
                    Группа армий «Центр» уничтожена, путь на Берлин открыт
                  </p>
                </div>
                
                <div className="text-center">
                  <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Народ освобожден</h3>
                  <p className="text-sm text-muted-foreground">
                    1.5 миллиона белорусов встретили долгожданную свободу
                  </p>
                </div>
              </div>
              
              <blockquote className="text-xl font-serif italic text-center text-red-400 leading-relaxed">
                «Операция «Багратион» войдет в историю как образец военного искусства. 
                За 68 дней советские войска освободили всю Беларусь и открыли путь 
                к границам Германии. Подвиг освободителей будет жить в веках.»
              </blockquote>
              <cite className="block text-center text-muted-foreground mt-4">
                — Из итогового донесения Ставки ВГК, 31 августа 1944
              </cite>
              
              <div className="mt-8 text-center">
                <div className="text-2xl font-bold text-red-400">
                  БЕЛАРУСЬ СВОБОДНА!
                </div>
                <div className="text-lg text-muted-foreground mt-2">
                  Дорога домой ведет через Берлин
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={74} />
    </>
  );
};

export default Page74;