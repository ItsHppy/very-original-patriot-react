import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flag, Clock, Flame, Users, MapPin, Trophy, Star, Zap } from "lucide-react";

const Page68 = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [animateCounters, setAnimateCounters] = useState<boolean>(false);
  const [liberationComplete, setLiberationComplete] = useState<boolean>(false);

  const battlePhases = [
    {
      time: "26 июня, вечер",
      phase: "Подготовка штурма",
      description: "Советские войска подходят к Могилёву",
      details: [
        "49-я армия завершает окружение города",
        "Разведка изучает немецкие укрепления",
        "Подтягивается артиллерия и боеприпасы",
        "Планируется координированный штурм"
      ],
      sovietForces: "49-я армия, 33-я армия",
      germanStatus: "Подготовка к обороне в городе",
      result: "Город блокирован с трех сторон",
      significance: "Начало осады"
    },
    {
      time: "27 июня, утро",
      phase: "Первые атаки",
      description: "Начало штурма городских укреплений",
      details: [
        "Артиллерийская подготовка по кварталам",
        "Штурмовые группы атакуют окраины",
        "Первые уличные бои на предмостных укреплениях",
        "Танки поддерживают пехоту"
      ],
      sovietForces: "Усиление 81-м стрелковым корпусом",
      germanStatus: "Упорное сопротивление в зданиях",
      result: "Прорыв внешнего кольца обороны",
      significance: "Бои переносятся в город"
    },
    {
      time: "27 июня, день",
      phase: "Уличные бои",
      description: "Ожесточенные бои в городских кварталах",
      details: [
        "Борьба за каждый дом и улицу",
        "Штурмовые группы очищают здания",
        "Снайперская дуэль на крышах",
        "Саперы разминируют дороги"
      ],
      sovietForces: "Специальные штурмовые группы",
      germanStatus: "Отступление к центру города",
      result: "Захват половины городской территории",
      significance: "Немецкая оборона трещит"
    },
    {
      time: "28 июня, утро",
      phase: "Решающий штурм",
      description: "Финальная атака на центр Могилёва",
      details: [
        "Мощная артиллерийская подготовка по центру",
        "Танки прорываются к площадям",
        "Штурм административных зданий",
        "Немецкий гарнизон деморализован"
      ],
      sovietForces: "Все силы армии брошены в бой",
      germanStatus: "Хаотичное отступление к Днепру",
      result: "Прорыв к центральной площади",
      significance: "Падение города неизбежно"
    },
    {
      time: "28 июня, день",
      phase: "Освобождение",
      description: "Красное знамя над Могилёвом",
      details: [
        "Красное знамя водружено над горсоветом",
        "Последние очаги сопротивления подавлены",
        "Жители выходят встречать освободителей",
        "Начинается разминирование города"
      ],
      sovietForces: "Парадные части вступают в город",
      germanStatus: "Остатки гарнизона бегут к Днепру",
      result: "Могилёв полностью освобожден",
      significance: "Важный железнодорожный узел взят"
    }
  ];

  const cityDefenses = {
    fortifications: [
      {
        type: "Укрепленные кварталы",
        description: "3 линии баррикад и огневых точек",
        strength: "Сильные",
        status: "Прорваны"
      },
      {
        type: "Мостовые укрепления",
        description: "Укрепления на мостах через Днепр",
        strength: "Очень сильные",
        status: "Захвачены"
      },
      {
        type: "Промышленная зона",
        description: "Заводы превращены в крепости",
        strength: "Сильные",
        status: "Очищены"
      },
      {
        type: "Центральная цитадель",
        description: "Административные здания-крепости",
        strength: "Умеренные",
        status: "Взяты"
      }
    ],
    garrison: {
      initial: 12000,
      escaped: 3000,
      prisoners: 4000,
      killed: 5000
    }
  };

  const liberationStories = [
    {
      title: "Танкист Иван Петров",
      story: "Первым ворвался на центральную площадь Могилёва. Его Т-34 был подбит, но экипаж продолжал бой из пулемета до подхода пехоты.",
      heroism: "Орден Красного Знамени",
      outcome: "Выжил, вернулся домой"
    },
    {
      title: "Медсестра Анна Сидорова",
      story: "Под огнем вынесла с поля боя 23 раненых бойца. Была ранена осколком, но продолжала работать до конца боя.",
      heroism: "Орден Красной Звезды",
      outcome: "Лечилась в госпитале"
    },
    {
      title: "Жители города",
      story: "Семья Коваленко три дня прятала советских разведчиков в подвале. Передавали информацию о немецких позициях.",
      heroism: "Благодарность командования",
      outcome: "Выжили, встретили освобождение"
    }
  ];

  const cityCondition = {
    destruction: 60,
    population: {
      before: 100000,
      during: 40000,
      survivors: 25000
    },
    infrastructure: [
      { item: "Жилые дома", destroyed: 70, priority: "Высокая" },
      { item: "Промышленность", destroyed: 85, priority: "Критическая" },
      { item: "Мосты", destroyed: 100, priority: "Критическая" },
      { item: "Электростанция", destroyed: 90, priority: "Высокая" }
    ],
    immediate_actions: [
      "Разминирование центра города",
      "Восстановление моста через Днепр", 
      "Организация питания для жителей",
      "Медицинская помощь пострадавшим"
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCounters(true);
      setTimeout(() => setLiberationComplete(true), 2000);
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
                <span className="text-sm font-semibold text-red-400 tracking-wider">
                  СТРАНИЦА 68 • ОСВОБОЖДЕНИЕ ГОРОДА
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Могилёв свободен
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                28 июня 1944 года — важный железнодорожный узел возвращен Родине
              </p>
            </div>

            {/* Liberation Timeline */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Хроника освобождения Могилёва
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                {battlePhases.map((phase, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPhase(index)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedPhase === index
                        ? 'border-red-500 bg-card/60 text-red-400'
                        : 'border-border hover:border-red-400'
                    }`}
                  >
                    <Clock className="w-5 h-5 mx-auto mb-2" />
                    <div className="text-xs font-semibold mb-1">{phase.time}</div>
                    <div className="text-xs">{phase.phase}</div>
                  </button>
                ))}
              </div>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-red-400 mb-2">
                    {battlePhases[selectedPhase].phase}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="default" className="bg-red-600">
                      {battlePhases[selectedPhase].time}
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    {battlePhases[selectedPhase].description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-400">Ход боевых действий:</h4>
                    <ul className="space-y-2">
                      {battlePhases[selectedPhase].details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Flame className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Советские силы:</div>
                      <div className="text-sm text-red-300">{battlePhases[selectedPhase].sovietForces}</div>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-800">Статус противника:</div>
                      <div className="text-sm text-red-700">{battlePhases[selectedPhase].germanStatus}</div>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Результат:</div>
                      <div className="text-sm text-red-300">{battlePhases[selectedPhase].result}</div>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Значение:</div>
                      <div className="text-sm text-red-300">{battlePhases[selectedPhase].significance}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </Card>

            {/* City Defenses */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Прорыв городских укреплений
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Система обороны города</h3>
                  <div className="space-y-4">
                    {cityDefenses.fortifications.map((fort, idx) => (
                      <div key={idx} className="bg-card/60 p-4 rounded-lg border-l-4 border-red-500">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-red-400">{fort.type}</h4>
                          <Badge 
                            variant={fort.status === 'Прорваны' || fort.status === 'Захвачены' || fort.status === 'Очищены' || fort.status === 'Взяты' ? 'default' : 'destructive'}
                            className="bg-red-600"
                          >
                            {fort.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{fort.description}</p>
                        <div className="text-xs text-red-400">Укрепления: {fort.strength}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Судьба немецкого гарнизона</h3>
                  <div className="space-y-4">
                    <div className="text-center bg-card/60 p-6 rounded-lg">
                      <div className="text-4xl font-bold text-red-400 mb-2">
                        {animateCounters ? cityDefenses.garrison.initial.toLocaleString() : '0'}
                      </div>
                      <div className="text-sm text-muted-foreground">первоначальный гарнизон</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {animateCounters ? cityDefenses.garrison.killed.toLocaleString() : '0'}
                        </div>
                        <div className="text-xs text-muted-foreground">убитых</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-muted-foreground">
                          {animateCounters ? cityDefenses.garrison.prisoners.toLocaleString() : '0'}
                        </div>
                        <div className="text-xs text-muted-foreground">пленных</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {animateCounters ? cityDefenses.garrison.escaped.toLocaleString() : '0'}
                        </div>
                        <div className="text-xs text-muted-foreground">спаслись</div>
                      </div>
                    </div>
                    
                    <div className="bg-card p-4 rounded border-l-4 border-red-500">
                      <h4 className="font-semibold text-red-400 mb-2">Тактическое значение:</h4>
                      <ul className="space-y-1 text-sm text-red-300">
                        <li>• Контроль над железнодорожным узлом</li>
                        <li>• Переправы через Днепр захвачены</li>
                        <li>• Путь на Минск открыт</li>
                        <li>• Фланг группы армий обеспечен</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Heroes of Liberation */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Star className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Герои освобождения Могилёва
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {liberationStories.map((story, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-br bg-card/60 backdrop-blur-sm border-border">
                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-2">{story.title}</h3>
                      <Badge variant="outline" className="mb-3">{story.heroism}</Badge>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {story.story}
                    </p>
                    
                    <div className="bg-card p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Исход:</div>
                      <div className="text-sm text-red-300">{story.outcome}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* City Condition */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Состояние города после освобождения
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Разрушения и потери</h3>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span>Общий уровень разрушений</span>
                      <Badge variant="destructive">{cityCondition.destruction}%</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-4">
                      <div 
                        className="bg-red-400 h-4 rounded-full transition-all duration-1000"
                        style={{ width: animateCounters ? `${cityCondition.destruction}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold">Население:</h4>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-lg font-bold text-red-400">
                          {cityCondition.population.before.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">до войны</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-400">
                          {cityCondition.population.during.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">в оккупации</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-400">
                          {cityCondition.population.survivors.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">выжили</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Инфраструктура:</h4>
                    <div className="space-y-3">
                      {cityCondition.infrastructure.map((item, idx) => (
                        <div key={idx} className="bg-card p-3 rounded border-l-4 border-red-500">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">{item.item}</span>
                            <div className="text-right">
                              <div className="text-red-600 font-bold">{item.destroyed}%</div>
                              <Badge 
                                variant={item.priority === 'Критическая' ? 'destructive' : 'secondary'}
                                className="text-xs"
                              >
                                {item.priority}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Первоочередные меры</h3>
                  
                  <div className="space-y-4">
                    {cityCondition.immediate_actions.map((action, idx) => (
                      <div key={idx} className="bg-card p-4 rounded border-l-4 border-red-500">
                        <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-red-400" />
                          <span className="font-semibold text-red-400">{action}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 bg-card p-6 rounded-lg">
                    <h4 className="font-bold text-red-400 mb-3">Помощь армии:</h4>
                    <ul className="space-y-2 text-sm text-red-300">
                      <li>• Полевые кухни кормят жителей</li>
                      <li>• Военные врачи лечат раненых</li>
                      <li>• Саперы разминируют дороги</li>
                      <li>• Понтонеры строят временные мосты</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 bg-card p-6 rounded-lg">
                    <h4 className="font-bold text-red-400 mb-3">Восстановление:</h4>
                    <p className="text-sm text-red-300">
                      Могилёв как важный железнодорожный узел получит приоритет 
                      в восстановлении. Планируется восстановить движение поездов 
                      в течение месяца.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Liberation Success */}
            <Card className="bg-gradient-to-br bg-card/80 backdrop-blur-sm border-border p-8">
              <div className="text-center mb-8">
                <Flag className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h2 className="text-3xl font-serif font-bold text-red-400 mb-4">
                  {liberationComplete ? "Могилёв свободен!" : "Освобождение..."}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Trophy className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Стратегический успех</h3>
                  <p className="text-sm text-muted-foreground">
                    Важный железнодорожный узел под контролем Красной Армии
                  </p>
                </div>
                
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Путь на Минск</h3>
                  <p className="text-sm text-muted-foreground">
                    Освобождение Могилёва открывает дорогу к столице Беларуси
                  </p>
                </div>
                
                <div className="text-center">
                  <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Спасенные жители</h3>
                  <p className="text-sm text-muted-foreground">
                    25 000 жителей освобождены от нацистской оккупации
                  </p>
                </div>
              </div>
              
              <blockquote className="text-xl font-serif italic text-center text-red-400 leading-relaxed">
                «Могилёв пал! Важнейший узел коммуникаций группы армий «Центр» 
                в наших руках. Дорога на Минск свободна. Операция «Багратион» 
                развивается с невиданной скоростью.»
              </blockquote>
              <cite className="block text-center text-muted-foreground mt-4">
                — Из донесения командующего 2-м Белорусским фронтом, 28 июня 1944
              </cite>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={68} />
    </>
  );
};

export default Page68;