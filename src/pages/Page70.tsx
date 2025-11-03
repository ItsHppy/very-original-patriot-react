import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flag, Clock, Flame, Users, MapPin, Trophy, Star, Heart, Zap } from "lucide-react";

const Page70 = () => {
  const [selectedHour, setSelectedHour] = useState<number>(0);
  const [liberationProgress, setLiberationProgress] = useState<number>(0);
  const [showFireworks, setShowFireworks] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>('05:00');

  const liberationTimeline = [
    {
      time: '05:00',
      title: 'Начало финального штурма',
      description: 'Артиллерийская подготовка по последним немецким позициям',
      details: [
        'Мощнейшая артподготовка по центру города',
        '3-й Белорусский фронт атакует с севера',
        '1-й Белорусский фронт наступает с востока',
        'Танки прорывают последние баррикады'
      ],
      germanResistance: 'Последние очаги сопротивления',
      significance: 'Решающий штурм начался',
      progress: 10
    },
    {
      time: '08:00',
      title: 'Прорыв к центру',
      description: 'Советские войска врываются в центральные кварталы',
      details: [
        'Танки на центральных площадях',
        'Штурмовые группы очищают здания',
        'Немецкое сопротивление слабеет',
        'Жители начинают выходить из укрытий'
      ],
      germanResistance: 'Хаотичное отступление к центру',
      significance: 'Кольцо сжимается',
      progress: 35
    },
    {
      time: '10:30',
      title: 'Бои за правительственный квартал',
      description: 'Штурм последних укрепленных позиций немцев',
      details: [
        'Бои за здание областного комитета',
        'Зачистка административных зданий',
        'Захват немецких складов и узлов связи',
        'Пленение остатков гарнизона'
      ],
      germanResistance: 'Последние попытки организованной обороны',
      significance: 'Падение последних укреплений',
      progress: 60
    },
    {
      time: '12:00',
      title: 'Водружение красного знамени',
      description: 'Красное знамя над центром Минска',
      details: [
        'Знамя водружено над зданием горсовета',
        'Последние немецкие группы сдаются',
        'Жители массово выходят на улицы',
        'Начинается торжественная встреча освободителей'
      ],
      germanResistance: 'Капитуляция остатков гарнизона',
      significance: 'Минск освобожден!',
      progress: 85
    },
    {
      time: '14:00',
      title: 'Полное освобождение',
      description: 'Минск полностью свободен от захватчиков',
      details: [
        'Все районы города под контролем',
        'Разминирование ключевых объектов',
        'Восстановление порядка в городе',
        'Праздничные митинги жителей'
      ],
      germanResistance: 'Сопротивление полностью подавлено',
      significance: 'Столица Беларуси свободна',
      progress: 100
    }
  ];

  const liberationStats = {
    duration: '9 часов',
    casualties: {
      soviet: {
        killed: 3200,
        wounded: 8900
      },
      german: {
        killed: 8000,
        prisoners: 35000,
        escaped: 5000
      }
    },
    civilian: {
      population_before: 270000,
      population_during: 120000,
      survivors: 95000,
      hidden: 15000,
      evacuated: 10000
    },
    destruction: {
      residential: 75,
      industrial: 90,
      infrastructure: 85,
      cultural: 60
    }
  };

  const liberationMoments = [
    {
      time: '12:15',
      title: 'Первые жители на улицах',
      story: 'Когда стихла стрельба, люди осторожно выходили из подвалов. Увидев красные звезды на танках, они плакали от радости. Дети бежали к солдатам с цветами.',
      witness: 'Мария Петровна, жительница Минска',
      emotion: 'радость'
    },
    {
      time: '12:30',
      title: 'Встреча у оперного театра',
      story: 'У полуразрушенного театра собралась толпа. Старик-дирижер начал петь «Катюшу», к нему присоединились солдаты и жители. Пели со слезами на глазах.',
      witness: 'Капитан Иванов, 3-й Белорусский фронт',
      emotion: 'торжество'
    },
    {
      time: '13:00',
      title: 'Возвращение к жизни',
      story: 'В центре города открылась полевая кухня. Армейские повара кормили истощенных жителей. Многие не ели горячей пищи три года.',
      witness: 'Старшина Сидоров, полевая кухня',
      emotion: 'забота'
    }
  ];

  const prisoners = [
    {
      rank: 'Генерал-майор',
      name: 'Эрнст Кениг',
      position: 'Комендант Минска',
      captured: 'У здания комендатуры',
      fate: 'Военный трибунал'
    },
    {
      rank: 'Оберст',
      name: 'Вильгельм Мюллер',
      position: 'Командир гарнизона',
      captured: 'В подвале ратуши',
      fate: 'Лагерь для военнопленных'
    },
    {
      rank: 'Штурмбаннфюрер СС',
      name: 'Курт Шмидт',
      position: 'Начальник тайной полиции',
      captured: 'При попытке бегства',
      fate: 'Казнен по приговору суда'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(prev => {
        const currentIndex = liberationTimeline.findIndex(t => t.time === prev);
        if (currentIndex < liberationTimeline.length - 1) {
          const nextIndex = currentIndex + 1;
          setSelectedHour(nextIndex);
          setLiberationProgress(liberationTimeline[nextIndex].progress);
          
          if (nextIndex === liberationTimeline.length - 1) {
            setTimeout(() => setShowFireworks(true), 2000);
          }
          
          return liberationTimeline[nextIndex].time;
        }
        return prev;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-red-400 tracking-wider">
                  СТРАНИЦА 70 • ВЕЛИКИЙ ДЕНЬ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                3 июля — Минск свободен
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                День освобождения столицы Беларуси — венец операции «Багратион»
              </p>
            </div>

            {/* Current Time Display */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-6 mb-12 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-red-400" />
                <div className="text-4xl font-bold text-red-400">{currentTime}</div>
                <div className="text-2xl text-muted-foreground">3 июля 1944</div>
              </div>
              <div className="text-lg text-muted-foreground mb-4">
                {liberationTimeline[selectedHour].title}
              </div>
              
              {/* Progress Bar */}
              <div className="max-w-md mx-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold">Освобождение города:</span>
                  <span className="text-sm font-bold text-red-400">{liberationProgress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-red-600 to-red-400 h-4 rounded-full"
                    style={{ width: `${liberationProgress}%` }}
                  ></div>
                </div>
              </div>
            </Card>

            {/* Liberation Timeline */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-red-400">
                Хронология освобождения
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                {liberationTimeline.map((event, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedHour(index);
                      setCurrentTime(event.time);
                      setLiberationProgress(event.progress);
                    }}
                    className={`p-4 rounded-lg border-2 ${
                      selectedHour === index
                        ? 'border-red-500 bg-card text-red-300'
                        : 'border-border hover:border-red-400'
                    }`}
                  >
                    <Clock className="w-5 h-5 mx-auto mb-2" />
                    <div className="text-xs font-semibold mb-1">{event.time}</div>
                    <div className="text-xs">{event.progress}%</div>
                  </button>
                ))}
              </div>

              <Card className="p-6 bg-card border-border">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-red-300 mb-2">
                    {liberationTimeline[selectedHour].title}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="default" className="bg-red-600 text-primary">
                      {liberationTimeline[selectedHour].time}
                    </Badge>
                    <Badge variant="outline" className="border-red-400 text-red-300">{liberationTimeline[selectedHour].progress}% освобождено</Badge>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    {liberationTimeline[selectedHour].description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-300">Ход операции:</h4>
                    <ul className="space-y-2">
                      {liberationTimeline[selectedHour].details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Flag className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-card border-border p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Немецкое сопротивление:</div>
                      <div className="text-sm text-red-300">{liberationTimeline[selectedHour].germanResistance}</div>
                    </div>
                    
                    <div className="bg-card border-border p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Значение момента:</div>
                      <div className="text-sm text-red-300">{liberationTimeline[selectedHour].significance}</div>
                    </div>
                    
                    {liberationProgress === 100 && showFireworks && (
                      <div className="bg-card/80 backdrop-blur-sm p-4 rounded border-2 border-red-400">
                        <div className="text-center">
                          <div className="text-4xl mb-2">🎆🎉🎆</div>
                          <div className="font-bold text-red-400">МИНСК СВОБОДЕН!</div>
                          <div className="text-sm text-red-300">Столица Беларуси освобождена!</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </Card>

            {/* Liberation Statistics */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Trophy className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Итоги освобождения Минска
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Duration and Casualties */}
                <Card className="p-6 bg-card border-border">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Ход операции</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">
                        {liberationStats.duration}
                      </div>
                      <div className="text-sm text-red-300">длительность боев</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div>
                        <div className="text-lg font-bold text-red-400">
                          {liberationStats.casualties.soviet.killed.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-300">погибших</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-400">
                          {liberationStats.casualties.soviet.wounded.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-300">раненых</div>
                      </div>
                    </div>
                    
                    <div className="bg-card/80 backdrop-blur-sm p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Советские потери:</div>
                      <div className="text-sm text-red-300">
                        {(liberationStats.casualties.soviet.killed + liberationStats.casualties.soviet.wounded).toLocaleString()} человек
                      </div>
                    </div>
                  </div>
                </Card>

                {/* German Losses */}
                <Card className="p-6 bg-card border-border">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Потери немцев</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-lg font-bold text-red-400">
                          {liberationStats.casualties.german.killed.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-300">убитых</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-muted-foreground">
                          {liberationStats.casualties.german.prisoners.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">пленных</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-300">
                          {liberationStats.casualties.german.escaped.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-300">спаслись</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-1">90%</div>
                      <div className="text-xs text-red-300">гарнизона уничтожено</div>
                    </div>
                    
                    <div className="bg-card/80 backdrop-blur-sm p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Итого потерь:</div>
                      <div className="text-sm text-red-300">
                        {(liberationStats.casualties.german.killed + liberationStats.casualties.german.prisoners).toLocaleString()} человек
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Civilian Population */}
                <Card className="p-6 bg-card border-border">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Мирное население</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-lg font-bold text-muted-foreground">
                          {liberationStats.civilian.population_before.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">до войны</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-muted-foreground">
                          {liberationStats.civilian.population_during.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">в оккупации</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-400">
                          {liberationStats.civilian.survivors.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-300">освобождено</div>
                      </div>
                    </div>
                    
                    <div className="bg-card/80 backdrop-blur-sm p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Выжившие:</div>
                      <div className="text-sm text-red-300">
                        {(liberationStats.civilian.survivors + liberationStats.civilian.hidden + liberationStats.civilian.evacuated).toLocaleString()} жителей спасено
                      </div>
                    </div>
                    
                    <div className="bg-card/80 backdrop-blur-sm p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Потери:</div>
                      <div className="text-sm text-red-300">
                        {(liberationStats.civilian.population_before - liberationStats.civilian.survivors - liberationStats.civilian.hidden - liberationStats.civilian.evacuated).toLocaleString()} погибших за 3 года
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Liberation Moments */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Heart className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Моменты радости освобождения
                </h2>
              </div>
              
              <div className="space-y-6">
                {liberationMoments.map((moment, index) => (
                  <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm border-border">
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="md:col-span-3">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="default" className="bg-red-600">
                            {moment.time}
                          </Badge>
                          <h3 className="text-xl font-bold">{moment.title}</h3>
                          <div className="text-2xl">
                            {moment.emotion === 'радость' && '😊'}
                            {moment.emotion === 'торжество' && '🎵'}
                            {moment.emotion === 'забота' && '🤝'}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {moment.story}
                        </p>
                        
                        <div className="bg-card border-border p-3 rounded border-l-4 border-red-500">
                          <div className="font-semibold text-red-400">Свидетель:</div>
                          <div className="text-sm text-red-300">{moment.witness}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <Users className="w-12 h-12 text-red-400 mx-auto mb-2" />
                          <div className="text-sm text-muted-foreground">
                            Свидетели<br/>освобождения
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Captured Nazis */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Захваченные нацистские преступники
                </h2>
              </div>
              
              <div className="space-y-4">
                {prisoners.map((prisoner, index) => (
                  <Card key={index} className="p-6 bg-card border-border">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div>
                        <h3 className="font-bold text-lg mb-1">{prisoner.rank}</h3>
                        <p className="text-lg font-semibold">{prisoner.name}</p>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-muted-foreground">Должность:</div>
                        <div className="text-sm">{prisoner.position}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-muted-foreground">Место пленения:</div>
                        <div className="text-sm">{prisoner.captured}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-muted-foreground">Судьба:</div>
                        <Badge variant={
                          prisoner.fate.includes('Казнен') ? 'destructive' :
                          prisoner.fate.includes('трибунал') ? 'secondary' : 'default'
                        }>
                          {prisoner.fate}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 bg-card/80 backdrop-blur-sm border-border p-6 rounded-lg">
                <h3 className="font-bold text-red-400 mb-3">Правосудие свершилось</h3>
                <p className="text-red-300">
                  Захваченные военные преступники предстали перед судом за зверства, 
                  совершенные против мирного населения Минска и Беларуси. 
                  Многие получили высшую меру наказания.
                </p>
              </div>
            </Card>

            {/* Liberation Success */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8">
              <div className="text-center mb-8">
                <Flag className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h2 className="text-4xl font-serif font-bold text-red-400 mb-4">
                  Минск свободен!
                </h2>
                <p className="text-xl text-muted-foreground">
                  3 июля 1944 года — великий день в истории Беларуси
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Trophy className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Венец операции</h3>
                  <p className="text-sm text-muted-foreground">
                    Освобождение Минска — кульминация операции «Багратион»
                  </p>
                </div>
                
                <div className="text-center">
                  <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Радость народа</h3>
                  <p className="text-sm text-muted-foreground">
                    95 000 жителей встретили своих освободителей
                  </p>
                </div>
                
                <div className="text-center">
                  <Star className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Символ победы</h3>
                  <p className="text-sm text-muted-foreground">
                    Падение Минска означало крах группы армий «Центр»
                  </p>
                </div>
              </div>
              
              <blockquote className="text-2xl font-serif italic text-center text-red-400 leading-relaxed">
                «3 июля 1944 года войдет в историю как день великой радости. 
                Столица советской Беларуси свободна! Враг изгнан с нашей земли!»
              </blockquote>
              <cite className="block text-center text-muted-foreground mt-4">
                — Из сводки Совинформбюро, 3 июля 1944
              </cite>
              
              <div className="mt-8 text-center">
                <div className="text-6xl mb-4">🎆🏆🎉</div>
                <div className="text-2xl font-bold text-red-400">
                  СЛАВА ОСВОБОДИТЕЛЯМ!
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={70} />
    </>
  );
};

export default Page70;