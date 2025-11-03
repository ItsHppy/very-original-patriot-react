import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sword, Clock, Users, MapPin, Target, Star, Zap, TrendingUp } from "lucide-react";

const Page61 = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [animateStats, setAnimateStats] = useState<boolean>(false);
  const [operationProgress, setOperationProgress] = useState<number>(0);

  const operationPhases = [
    {
      phase: "Подготовительный этап",
      period: "10-22 июня 1944",
      description: "Сосредоточение сил и средств для решающего удара",
      details: [
        "Скрытное сосредоточение 2.4 млн солдат",
        "Переброска 5200 танков и САУ",
        "Накопление 36000 орудий и минометов",
        "Подготовка 5300 боевых самолетов"
      ],
      objectives: [
        "Достижение тройного превосходства в силах",
        "Обеспечение внезапности удара",
        "Координация действий 4 фронтов",
        "Подготовка партизанских ударов"
      ],
      challenges: [
        "Сохранение секретности",
        "Логистическое обеспечение",
        "Погодные условия",
        "Дезинформация противника"
      ],
      outcome: "Создание мощной ударной группировки"
    },
    {
      phase: "Прорыв обороны",
      period: "23-26 июня 1944",
      description: "Разгром первой линии немецких укреплений",
      details: [
        "Артиллерийская подготовка невиданной мощности",
        "Прорыв на фронте 450 км",
        "Ввод танковых корпусов в прорыв",
        "Начало окружения витебской группировки"
      ],
      objectives: [
        "Прорыв главной полосы обороны",
        "Уничтожение узлов сопротивления",
        "Развитие тактического успеха",
        "Захват переправ через реки"
      ],
      challenges: [
        "Сильные немецкие укрепления",
        "Контратаки резервов",
        "Болотистая местность",
        "Минные поля"
      ],
      outcome: "Линия фронта прорвана на всех направлениях"
    },
    {
      phase: "Развитие наступления",
      period: "27 июня - 3 июля 1944",
      description: "Окружение и уничтожение крупных группировок противника",
      details: [
        "Витебский котел: окружено 5 дивизий",
        "Бобруйский котел: 70000 немцев в окружении",
        "Освобождение Могилёва и других городов",
        "Стремительное продвижение к Минску"
      ],
      objectives: [
        "Окружение и уничтожение немецких группировок",
        "Освобождение крупных городов",
        "Недопущение планомерного отхода врага",
        "Создание условий для освобождения Минска"
      ],
      challenges: [
        "Растянутые коммуникации",
        "Сопротивление в укрепленных городах",
        "Попытки прорыва из котлов",
        "Контрудары немецких резервов"
      ],
      outcome: "Группа армий 'Центр' понесла катастрофические потери"
    },
    {
      phase: "Освобождение столицы",
      period: "3-4 июля 1944",
      description: "Триумфальное освобождение Минска",
      details: [
        "Красное знамя над столицей Беларуси",
        "105000 немцев в минском котле",
        "Ликование освобожденного населения",
        "Символическая победа советского оружия"
      ],
      objectives: [
        "Освобождение столицы БССР",
        "Окружение минской группировки",
        "Восстановление советской власти",
        "Создание базы для дальнейшего наступления"
      ],
      challenges: [
        "Уличные бои в городе",
        "Попытки немцев удержать столицу",
        "Разминирование города",
        "Организация помощи населению"
      ],
      outcome: "Минск освобожден, путь на запад открыт"
    }
  ];

  const operationStats = {
    forces: {
      soviet: {
        personnel: 2400000,
        tanks: 5200,
        artillery: 36000,
        aircraft: 5300,
        fronts: 4
      },
      german: {
        personnel: 800000,
        tanks: 900,
        artillery: 9500,
        aircraft: 775,
        divisions: 63
      }
    },
    results: {
      territory_liberated: 450000,
      cities_freed: 450,
      german_losses: {
        killed: 289000,
        prisoners: 158000,
        total: 447000
      },
      soviet_losses: {
        killed: 178000,
        wounded: 587000,
        total: 765000
      }
    },
    strategic_impact: {
      army_group_center_destroyed: true,
      path_to_germany_opened: true,
      partisan_zones_liberated: true,
      baltic_states_isolated: true
    }
  };

  const fronts = [
    {
      name: "1-й Прибалтийский фронт",
      commander: "Баграмян И.Х.",
      sector: "Витебское направление",
      objective: "Прорыв к Двине, окружение Витебска",
      strength: "6 армий, 360000 человек",
      success: "Витебская группировка окружена",
      advance: "120 км за 6 дней",
      color: "bg-card/600"
    },
    {
      name: "3-й Белорусский фронт",
      commander: "Черняховский И.Д.",
      sector: "Богушевско-Оршанское направление",
      objective: "Прорыв к Минску с севера",
      strength: "5 армий, 450000 человек",
      success: "Орша освобождена, путь к Минску открыт",
      advance: "200 км за 10 дней",
      color: "bg-card/600"
    },
    {
      name: "2-й Белорусский фронт",
      commander: "Захаров Г.Ф.",
      sector: "Могилевское направление",
      objective: "Разгром могилевской группировки",
      strength: "4 армии, 320000 человек",
      success: "Могилев освобожден, немцы разгромлены",
      advance: "150 км за 8 дней",
      color: "bg-red-500"
    },
    {
      name: "1-й Белорусский фронт",
      commander: "Рокоссовский К.К.",
      sector: "Бобруйское направление",
      objective: "Окружение бобруйской группировки",
      strength: "6 армий, 500000 человек",
      success: "Бобруйский котел ликвидирован",
      advance: "180 км за 8 дней",
      color: "bg-card/600"
    }
  ];

  const innovations = [
    {
      innovation: "Массированные артиллерийские удары",
      description: "Плотность огня 200 стволов на км фронта",
      impact: "Подавление немецкой обороны на глубину 8-10 км",
      significance: "Новый уровень огневой мощи"
    },
    {
      innovation: "Координация четырех фронтов",
      description: "Единое управление гигантской операцией",
      impact: "Синхронные удары по всему фронту",
      significance: "Образец полководческого искусства"
    },
    {
      innovation: "Взаимодействие с партизанами",
      description: "Координация армии и партизанского движения",
      impact: "Уничтожение коммуникаций противника",
      significance: "Новая форма ведения войны"
    },
    {
      innovation: "Операции на окружение",
      description: "Множественные котлы одновременно",
      impact: "Уничтожение целых армейских корпусов",
      significance: "Развитие тактики глубоких операций"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateStats(true);
      let progress = 0;
      const progressTimer = setInterval(() => {
        progress += 5;
        setOperationProgress(progress);
        if (progress >= 100) {
          clearInterval(progressTimer);
        }
      }, 100);
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
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-red-700 tracking-wider">
                  СТРАНИЦА 61 • ВЕЛИКАЯ ОПЕРАЦИЯ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Операция Багратион
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                23 июня — 29 августа 1944 года — величайшая наступательная операция Красной Армии
              </p>
            </div>

            {/* Operation Progress */}
            <Card className="bg-gradient-to-r bg-card/80 backdrop-blur-sm border-border p-6 mb-12 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Sword className="w-8 h-8 text-red-600" />
                <div className="text-4xl font-bold text-red-600">{operationProgress}%</div>
                <div className="text-2xl text-muted-foreground">операции выполнено</div>
              </div>
              <div className="text-lg text-muted-foreground mb-4">
                Самая успешная операция 1944 года
              </div>
              
              <div className="max-w-md mx-auto">
                <div className="w-full bg-muted rounded-full h-6">
                  <div 
                    className="bg-gradient-to-r from-red-400 to-green-500 h-6 rounded-full transition-all duration-3000"
                    style={{ width: `${operationProgress}%` }}
                  ></div>
                </div>
              </div>
            </Card>

            {/* Operation Phases */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Этапы операции «Багратион»
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {operationPhases.map((phase, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPhase(index)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedPhase === index
                        ? 'border-primary bg-primary/20 text-primary'
                        : 'border-border hover:border-red-300'
                    }`}
                  >
                    <Clock className="w-5 h-5 mx-auto mb-2" />
                    <div className="text-xs font-semibold mb-1">Этап {index + 1}</div>
                    <div className="text-xs">{phase.phase}</div>
                  </button>
                ))}
              </div>

              <Card className="p-6 bg-gradient-to-r bg-card/80 backdrop-blur-sm border-border">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-red-800 mb-2">
                    {operationPhases[selectedPhase].phase}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="default" className="bg-red-600">
                      {operationPhases[selectedPhase].period}
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    {operationPhases[selectedPhase].description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-800">Ход операции:</h4>
                    <ul className="space-y-2">
                      {operationPhases[selectedPhase].details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-card/600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-red-400">Задачи:</h4>
                    <ul className="space-y-2">
                      {operationPhases[selectedPhase].objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Target className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-red-400">Трудности:</h4>
                    <ul className="space-y-2">
                      {operationPhases[selectedPhase].challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-card/60 p-4 rounded border-l-4 border-red-500">
                  <div className="font-semibold text-red-400">Результат этапа:</div>
                  <div className="text-sm text-red-300">{operationPhases[selectedPhase].outcome}</div>
                </div>
              </Card>
            </Card>

            {/* Four Fronts */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Четыре фронта — четыре удара
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {fronts.map((front, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-4 h-4 ${front.color} rounded-full`}></div>
                      <h3 className="font-bold text-lg">{front.name}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold text-muted-foreground">Командующий:</div>
                        <div className="text-sm font-semibold">{front.commander}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-muted-foreground">Направление:</div>
                        <div className="text-sm">{front.sector}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-muted-foreground">Задача:</div>
                        <div className="text-sm">{front.objective}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-muted-foreground">Силы:</div>
                        <div className="text-sm">{front.strength}</div>
                      </div>
                      
                      <div className="bg-card/60 p-3 rounded border-l-4 border-red-500">
                        <div className="font-semibold text-red-400">Успех:</div>
                        <div className="text-sm text-red-300">{front.success}</div>
                      </div>
                      
                      <div className="bg-card/60 p-3 rounded border-l-4 border-red-500">
                        <div className="font-semibold text-red-400">Продвижение:</div>
                        <div className="text-sm text-red-300">{front.advance}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Operation Statistics */}
            <Card className="bg-gradient-to-r bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Масштаб операции в цифрах
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 bg-card/60">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Советские силы</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {animateStats ? (operationStats.forces.soviet.personnel / 1000000).toFixed(1) : '0'}М
                        </div>
                        <div className="text-xs text-red-300">солдат</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {animateStats ? operationStats.forces.soviet.tanks.toLocaleString() : '0'}
                        </div>
                        <div className="text-xs text-red-300">танков</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {animateStats ? operationStats.forces.soviet.artillery.toLocaleString() : '0'}
                        </div>
                        <div className="text-xs text-red-300">орудий</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {animateStats ? operationStats.forces.soviet.aircraft.toLocaleString() : '0'}
                        </div>
                        <div className="text-xs text-red-300">самолетов</div>
                      </div>
                    </div>
                    
                    <div className="bg-card/60 p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Превосходство:</div>
                      <div className="text-sm text-red-300">
                        3:1 в живой силе, 6:1 в танках, 4:1 в артиллерии
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/60">
                  <h3 className="text-xl font-bold mb-4 text-red-800">Немецкие силы</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div>
                        <div className="text-2xl font-bold text-red-600">
                          {animateStats ? (operationStats.forces.german.personnel / 1000).toFixed(0) : '0'}К
                        </div>
                        <div className="text-xs text-red-700">солдат</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600">
                          {animateStats ? operationStats.forces.german.tanks.toLocaleString() : '0'}
                        </div>
                        <div className="text-xs text-red-700">танков</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600">
                          {animateStats ? operationStats.forces.german.artillery.toLocaleString() : '0'}
                        </div>
                        <div className="text-xs text-red-700">орудий</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600">
                          {animateStats ? operationStats.forces.german.aircraft.toLocaleString() : '0'}
                        </div>
                        <div className="text-xs text-red-700">самолетов</div>
                      </div>
                    </div>
                    
                    <div className="bg-card/60 p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-800">Группа армий «Центр»:</div>
                      <div className="text-sm text-red-700">
                        {operationStats.forces.german.divisions} дивизии обречены на уничтожение
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/60">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Результаты</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">
                        {animateStats ? operationStats.results.cities_freed : '0'}
                      </div>
                      <div className="text-sm text-red-300">городов освобождено</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div>
                        <div className="text-lg font-bold text-red-600">
                          {animateStats ? operationStats.results.german_losses.killed.toLocaleString() : '0'}
                        </div>
                        <div className="text-xs text-red-700">немцев убито</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-muted-foreground">
                          {animateStats ? operationStats.results.german_losses.prisoners.toLocaleString() : '0'}
                        </div>
                        <div className="text-xs text-muted-foreground">пленных</div>
                      </div>
                    </div>
                    
                    <div className="bg-card/60 p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Территория:</div>
                      <div className="text-sm text-red-300">
                        {animateStats ? operationStats.results.territory_liberated.toLocaleString() : '0'} км² освобождено
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Military Innovations */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Star className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Новаторство операции «Багратион»
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {innovations.map((innovation, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-r bg-card/80 backdrop-blur-sm border-border">
                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-2">{innovation.innovation}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{innovation.description}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-card/60 p-3 rounded border-l-4 border-red-500">
                        <div className="font-semibold text-red-400">Воздействие:</div>
                        <div className="text-sm text-red-300">{innovation.impact}</div>
                      </div>
                      
                      <div className="bg-card/60 p-3 rounded border-l-4 border-red-500">
                        <div className="font-semibold text-red-400">Значение:</div>
                        <div className="text-sm text-red-300">{innovation.significance}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Strategic Impact */}
            <Card className="bg-gradient-to-br bg-card/80 backdrop-blur-sm border-border p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-red-800">
                Стратегическое значение операции «Багратион»
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-800">Военные результаты</h3>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>• Группа армий «Центр» полностью уничтожена</li>
                    <li>• Освобождена вся территория БССР</li>
                    <li>• Открыт путь к границам Германии</li>
                    <li>• Изолированы немецкие войска в Прибалтике</li>
                    <li>• Создана база для наступления на Берлин</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-400">Политические последствия</h3>
                  <ul className="space-y-2 text-sm text-red-300">
                    <li>• Восстановлена советская власть в БССР</li>
                    <li>• Освобождено 1.5 миллиона мирных жителей</li>
                    <li>• Доказана неизбежность поражения фашизма</li>
                    <li>• Укреплен престиж СССР в мире</li>
                    <li>• Приближена капитуляция Германии</li>
                  </ul>
                </div>
              </div>
              
              <blockquote className="text-xl font-serif italic text-center text-red-400 leading-relaxed">
                «Операция «Багратион» стала переломным моментом 1944 года. 
                Блестящее планирование, безупречное исполнение и героизм советских воинов 
                привели к полному разгрому одной из сильнейших группировок вермахта.»
              </blockquote>
              <cite className="block text-center text-muted-foreground mt-4">
                — Маршал Советского Союза А.М. Василевский
              </cite>
              
              <div className="mt-8 text-center">
                <div className="text-4xl mb-4">⚔️🏆🇧🇾</div>
                <div className="text-2xl font-bold text-red-400">
                  БЕЛАРУСЬ БУДЕТ СВОБОДНОЙ!
                </div>
                <div className="text-lg text-muted-foreground mt-2">
                  Операция «Багратион» началась — враг обречен
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={61} />
    </>
  );
};

export default Page61;