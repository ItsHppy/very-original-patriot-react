import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, Flag, Shield, MapPin, Star, Flame, ArrowRight } from "lucide-react";

const Page73 = () => {
  const [selectedMoment, setSelectedMoment] = useState<number>(0);
  const [animateCircle, setAnimateCircle] = useState<boolean>(false);
  const [showSymbolism, setShowSymbolism] = useState<boolean>(false);

  const liberationMoments = [
    {
      date: "22 июня 1944",
      time: "05:00",
      title: "Третья годовщина",
      description: "Три года назад здесь началась война...",
      details: [
        "22 июня 1941 — первые бомбы упали на Брест",
        "Защитники крепости держались 32 дня",
        "Символ начала Великой Отечественной",
        "Теперь здесь должна закончиться оккупация"
      ],
      significance: "Символическая дата начала освобождения",
      emotion: "Память о подвиге",
      progress: 0
    },
    {
      date: "26 июля 1944",
      time: "14:00",
      title: "Советские разведчики в городе",
      description: "Первые советские солдаты возвращаются в Брест",
      details: [
        "Разведгруппы проникают в пригороды",
        "Немцы готовятся к эвакуации",
        "Жители с надеждой смотрят на восток",
        "В крепости остается символический гарнизон"
      ],
      significance: "Начало финальной операции",
      emotion: "Осторожная надежда",
      progress: 25
    },
    {
      date: "27 июля 1944",
      time: "18:30",
      title: "Бои на подступах",
      description: "Последние бои за символический город",
      details: [
        "28-я армия штурмует восточные кварталы",
        "Немцы оказывают слабое сопротивление",
        "Основные силы уже отступили к границе",
        "Жители готовятся встречать освободителей"
      ],
      significance: "Финальный штурм",
      emotion: "Ожидание освобождения",
      progress: 75
    },
    {
      date: "28 июля 1944",
      time: "10:00",
      title: "Красное знамя над крепостью",
      description: "Символическое завершение войны в том месте, где она началась",
      details: [
        "Красное знамя водружено над Брестской крепостью",
        "Последние немецкие группы сдаются",
        "Жители плачут от радости",
        "Круг замкнулся — война вернулась туда, где началась"
      ],
      significance: "Символическое завершение освобождения Беларуси",
      emotion: "Торжество справедливости",
      progress: 100
    }
  ];

  const warCircle = {
    start: {
      date: "22 июня 1941",
      place: "Брестская крепость",
      event: "Первые бомбы войны",
      defenders: "Майор Гаврилов, капитан Зубачев, комиссар Фомин",
      duration: "32 дня героической обороны",
      symbol: "Начало Великой Отечественной войны"
    },
    end: {
      date: "28 июля 1944",
      place: "Брестская крепость", 
      event: "Красное знамя освобождения",
      liberators: "28-я армия 1-го Белорусского фронта",
      duration: "1133 дня оккупации закончены",
      symbol: "Символическое завершение освобождения Беларуси"
    },
    journey: {
      cities_liberated: [
        "Сталинград", "Курск", "Киев", "Витебск", 
        "Бобруйск", "Могилёв", "Минск", "Гродно"
      ],
      distance: "1400 км от Волги до Буга",
      time: "2 года наступления",
      cost: "Миллионы жизней"
    }
  };

  const brestStats = {
    population: {
      before: 50000,
      during: 20000,
      liberated: 12000
    },
    damage: {
      fortress: 85,
      city: 70,
      infrastructure: 90
    },
    casualties: {
      soviet: {
        killed: 450,
        wounded: 1200
      },
      german: {
        killed: 800,
        prisoners: 2500,
        escaped: 1500
      }
    }
  };

  const symbolism = [
    {
      symbol: "Брестская крепость",
      meaning: "Несгибаемая воля народа",
      description: "Там, где началось сопротивление, закончилось освобождение",
      icon: <Shield className="w-8 h-8" />
    },
    {
      symbol: "Замкнутый круг",
      meaning: "Справедливость истории",
      description: "Враг изгнан туда, откуда пришел",
      icon: <Target className="w-8 h-8" />
    },
    {
      symbol: "1133 дня",
      meaning: "Путь от трагедии к победе",
      description: "От первого взрыва до последнего выстрела",
      icon: <Clock className="w-8 h-8" />
    },
    {
      symbol: "Красное знамя",
      meaning: "Торжество справедливости",
      description: "Символ победы там, где была первая боль",
      icon: <Flag className="w-8 h-8" />
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCircle(true);
      setTimeout(() => setShowSymbolism(true), 2000);
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
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-red-700 tracking-wider">
                  СТРАНИЦА 73 • СИМВОЛИЧЕСКОЕ ЗАВЕРШЕНИЕ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Брест — замыкая круг
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                28 июля 1944 — там, где началась война, она символически завершилась
              </p>
            </div>

            {/* War Circle Visualization */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-red-800">
                Круг истории замкнулся
              </h2>
              
              <div className="relative">
                {/* Circle Visualization */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-80 h-80">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      {/* Background Circle */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="4"
                      />
                      
                      {/* Animated Progress Circle */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 80}`}
                        strokeDashoffset={animateCircle ? 0 : `${2 * Math.PI * 80}`}
                        transform="rotate(-90 100 100)"
                        className=" duration-3000"
                      />
                      
                      {/* Gradient Definition */}
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#dc2626" />
                          <stop offset="50%" stopColor="#f59e0b" />
                          <stop offset="100%" stopColor="#059669" />
                        </linearGradient>
                      </defs>
                      
                      {/* Start Point */}
                      <circle cx="100" cy="20" r="8" fill="#dc2626" />
                      <text x="100" y="15" textAnchor="middle" className="text-xs font-bold fill-red-800">
                        НАЧАЛО
                      </text>
                      
                      {/* End Point */}
                      <circle cx="100" cy="20" r="6" fill="#059669" className={animateCircle ? 'opacity-100' : 'opacity-0'} />
                      <text x="100" y="185" textAnchor="middle" className="text-xs font-bold fill-green-800">
                        КОНЕЦ
                      </text>
                    </svg>
                    
                    {/* Center Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-red-600 mb-2">1133</div>
                        <div className="text-sm text-muted-foreground">дня войны</div>
                        <div className="text-xs text-muted-foreground">в Бресте</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Start and End Information */}
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                      <h3 className="text-xl font-bold text-red-800">Начало трагедии</h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <Badge variant="destructive" className="mb-2">{warCircle.start.date}</Badge>
                        <p className="font-semibold">{warCircle.start.event}</p>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-red-800">Место:</div>
                        <div className="text-sm text-red-700">{warCircle.start.place}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-red-800">Герои:</div>
                        <div className="text-sm text-red-700">{warCircle.start.defenders}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-red-800">Подвиг:</div>
                        <div className="text-sm text-red-700">{warCircle.start.duration}</div>
                      </div>
                      
                      <div className="bg-card border-border p-3 rounded border-l-4 border-red-500">
                        <div className="text-sm text-red-700">{warCircle.start.symbol}</div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                      <h3 className="text-xl font-bold text-red-400">Конец оккупации</h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <Badge variant="default" className="bg-red-600 mb-2">{warCircle.end.date}</Badge>
                        <p className="font-semibold">{warCircle.end.event}</p>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-red-400">Место:</div>
                        <div className="text-sm text-red-300">{warCircle.end.place}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-red-400">Освободители:</div>
                        <div className="text-sm text-red-300">{warCircle.end.liberators}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-red-400">Итог:</div>
                        <div className="text-sm text-red-300">{warCircle.end.duration}</div>
                      </div>
                      
                      <div className="bg-card border-border p-3 rounded border-l-4 border-red-500">
                        <div className="text-sm text-red-300">{warCircle.end.symbol}</div>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* Journey Information */}
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-border mt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <ArrowRight className="w-6 h-6 text-yellow-600" />
                    <h3 className="text-xl font-bold text-red-400">Путь от поражения к победе</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="font-semibold text-red-400 mb-2">Освобожденные города:</div>
                      <div className="flex flex-wrap gap-1">
                        {warCircle.journey.cities_liberated.map((city, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {city}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="font-semibold text-red-400 mb-2">Расстояние:</div>
                      <div className="text-sm text-muted-foreground">{warCircle.journey.distance}</div>
                      <div className="font-semibold text-red-400 mb-2 mt-3">Время:</div>
                      <div className="text-sm text-muted-foreground">{warCircle.journey.time}</div>
                    </div>
                    
                    <div>
                      <div className="font-semibold text-red-400 mb-2">Цена победы:</div>
                      <div className="text-sm text-muted-foreground">{warCircle.journey.cost}</div>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Liberation Timeline */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-red-400">
                Последние дни оккупации Бреста
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {liberationMoments.map((moment, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMoment(index)}
                    className={`p-4 rounded-lg border-2  ${
                      selectedMoment === index
                        ? 'border-red-500 bg-card/80 backdrop-blur-sm text-red-800'
                        : 'border-gray-600 hover:border-red-300'
                    }`}
                  >
                    <Clock className="w-5 h-5 mx-auto mb-2" />
                    <div className="text-xs font-semibold mb-1">{moment.date.split(' ')[0]}</div>
                    <div className="text-xs">{moment.date.split(' ')[1]} {moment.date.split(' ')[2]}</div>
                  </button>
                ))}
              </div>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-red-800 mb-2">
                    {liberationMoments[selectedMoment].title}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="default" className="bg-red-600">
                      {liberationMoments[selectedMoment].date} • {liberationMoments[selectedMoment].time}
                    </Badge>
                    <Badge variant="outline">{liberationMoments[selectedMoment].progress}% завершено</Badge>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    {liberationMoments[selectedMoment].description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-800">События:</h4>
                    <ul className="space-y-2">
                      {liberationMoments[selectedMoment].details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-card border-border p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Значение:</div>
                      <div className="text-sm text-red-300">{liberationMoments[selectedMoment].significance}</div>
                    </div>
                    
                    <div className="bg-card border-border p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Настроение:</div>
                      <div className="text-sm text-red-300">{liberationMoments[selectedMoment].emotion}</div>
                    </div>
                    
                    <div className="bg-card border-border p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Прогресс освобождения:</div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex-1 bg-muted rounded-full h-3">
                          <div 
                            className="bg-green-500 h-3 rounded-full  "
                            style={{ width: `${liberationMoments[selectedMoment].progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-red-400">
                          {liberationMoments[selectedMoment].progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Card>

            {/* Liberation Statistics */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Итоги освобождения Бреста
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Население города</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {brestStats.population.before.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-300">до войны</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {brestStats.population.during.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-300">в оккупации</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {brestStats.population.liberated.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-300">освобождено</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-1">76%</div>
                      <div className="text-xs text-red-700">потери населения</div>
                    </div>
                    
                    <div className="bg-card border-border p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Трагедия:</div>
                      <div className="text-sm text-red-300">
                        38 000 жителей не дожили до освобождения
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border border-border">
                  <h3 className="text-xl font-bold mb-4 text-red-800">Боевые потери</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-red-400">Советские войска:</h4>
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div>
                          <div className="text-lg font-bold text-red-600">
                            {brestStats.casualties.soviet.killed}
                          </div>
                          <div className="text-xs text-red-700">погибших</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-red-400">
                            {brestStats.casualties.soviet.wounded}
                          </div>
                          <div className="text-xs text-red-300">раненых</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-red-800">Немецкие потери:</h4>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-lg font-bold text-red-600">
                            {brestStats.casualties.german.killed}
                          </div>
                          <div className="text-xs text-red-700">убитых</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-muted-foreground">
                            {brestStats.casualties.german.prisoners}
                          </div>
                          <div className="text-xs text-muted-foreground">пленных</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-yellow-600">
                            {brestStats.casualties.german.escaped}
                          </div>
                          <div className="text-xs text-red-300">спаслись</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-card border-border p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-800">Соотношение:</div>
                      <div className="text-sm text-red-700">
                        Потери врага в 2 раза выше
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Разрушения</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Брестская крепость:</span>
                        <span className="font-bold">{brestStats.damage.fortress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-red-400 h-3 rounded-full" style={{ width: `${brestStats.damage.fortress}%` }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Городская застройка:</span>
                        <span className="font-bold">{brestStats.damage.city}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-orange-500 h-3 rounded-full" style={{ width: `${brestStats.damage.city}%` }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Инфраструктура:</span>
                        <span className="font-bold">{brestStats.damage.infrastructure}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-red-400 h-3 rounded-full" style={{ width: `${brestStats.damage.infrastructure}%` }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-card border-border p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Восстановление:</div>
                      <div className="text-sm text-red-300">
                        Крепость станет памятником героизму
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Symbolism */}
            {showSymbolism && (
              <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <Star className="w-8 h-8 text-red-400" />
                  <h2 className="text-3xl font-serif font-bold text-red-400">
                    Символизм освобождения Бреста
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {symbolism.map((item, index) => (
                    <Card key={index} className="p-6 bg-gradient-to-r bg-card/60 backdrop-blur-sm border-border">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-red-400">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{item.symbol}</h3>
                          <p className="text-red-300 font-semibold">{item.meaning}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  ))}
                </div>
              </Card>
            )}

            {/* Historical Conclusion */}
            <Card className="bg-gradient-to-br bg-card/80 backdrop-blur-sm border-border p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-red-800">
                Круг истории замкнулся
              </h2>
              
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🔄⚔️🏆</div>
                <div className="text-2xl font-bold text-red-400 mb-4">
                  28 июля 1944 года
                </div>
                <p className="text-lg text-muted-foreground">
                  Там, где началась трагедия, завершилось торжество справедливости
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-card border-border p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-bold text-red-800 mb-3">22 июня 1941 года</h3>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>• Первые бомбы войны упали на Брест</li>
                    <li>• Началась героическая оборона крепости</li>
                    <li>• Символ начала Великой Отечественной</li>
                    <li>• 32 дня несгибаемого сопротивления</li>
                  </ul>
                </div>
                
                <div className="bg-card border-border p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-bold text-red-400 mb-3">28 июля 1944 года</h3>
                  <ul className="space-y-2 text-sm text-red-300">
                    <li>• Красное знамя над освобожденной крепостью</li>
                    <li>• Символическое завершение освобождения</li>
                    <li>• Враг изгнан туда, откуда пришел</li>
                    <li>• Справедливость истории восторжествовала</li>
                  </ul>
                </div>
              </div>
              
              <blockquote className="text-2xl font-serif italic text-center text-red-400 leading-relaxed">
                «История любит симметрию. Там, где фашисты начали свою агрессию против 
                советского народа, там они и получили первый сокрушительный ответ. 
                Брестская крепость — символ того, что зло будет наказано.»
              </blockquote>
              <cite className="block text-center text-muted-foreground mt-4">
                — Из сводки Совинформбюро, 28 июля 1944
              </cite>
              
              <div className="mt-8 text-center">
                <div className="text-2xl font-bold text-red-400">
                  БЕЛАРУСЬ ПОЛНОСТЬЮ ОСВОБОЖДЕНА!
                </div>
                <div className="text-lg text-muted-foreground mt-2">
                  Операция «Багратион» завершена с полным успехом
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={73} />
    </>
  );
};

export default Page73;