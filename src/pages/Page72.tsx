import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Castle, Sword, Shield, MapPin, Crown, Flame, Users } from "lucide-react";

const Page72 = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [animateProgress, setAnimateProgress] = useState<boolean>(false);
  const [battleIntensity, setBattleIntensity] = useState<number>(0);

  const battlePhases = [
    {
      date: "13 июля 1944",
      phase: "Подступы к древнему городу",
      description: "Советские войска подходят к историческому Гродно",
      details: [
        "3-й Белорусский фронт форсирует Неман",
        "Разведка изучает укрепления города",
        "Немцы готовят оборону в каменных зданиях",
        "Жители прячутся в подвалах старого города"
      ],
      germanDefense: "Организованная оборона в исторических зданиях",
      significance: "Начало боев за один из древнейших городов Беларуси",
      intensity: 3,
      historicalNote: "Гродно — город XIII века, свидетель многих войн"
    },
    {
      date: "14 июля 1944",
      phase: "Штурм предмостных укреплений",
      description: "Бои за переправы через Неман и Городничанку",
      details: [
        "Ожесточенные бои за мосты",
        "Штурм Старого замка немцами",
        "Артиллерийская дуэль в центре города",
        "Уличные бои в районе синагог"
      ],
      germanDefense: "Упорное сопротивление в каменных постройках",
      significance: "Борьба за ключевые точки города",
      intensity: 7,
      historicalNote: "Замки Гродно веками защищали город от врагов"
    },
    {
      date: "15 июля 1944",
      phase: "Бои в старом городе",
      description: "Уличные бои среди древних стен",
      details: [
        "Борьба за каждую улицу старого города",
        "Немцы укрепились в Коложской церкви",
        "Танки с трудом проходят по узким улицам",
        "Снайперская война на крышах"
      ],
      germanDefense: "Отчаянное сопротивление в исторических зданиях",
      significance: "Тяжелые бои среди архитектурных памятников",
      intensity: 9,
      historicalNote: "Каждый камень помнит века истории"
    },
    {
      date: "16 июля 1944",
      phase: "Освобождение города",
      description: "Красное знамя над древним Гродно",
      details: [
        "Последние немецкие группы капитулируют",
        "Красное знамя над Новым замком",
        "Жители выходят из подвалов и руин",
        "Начинается оценка ущерба древним памятникам"
      ],
      germanDefense: "Остатки гарнизона сдаются",
      significance: "Древний город возвращен Родине",
      intensity: 2,
      historicalNote: "Гродно снова свободен после 3 лет оккупации"
    }
  ];

  const historicalSites = [
    {
      name: "Коложская церковь",
      century: "XII век",
      condition: "Серьезно повреждена",
      damage: 60,
      description: "Древнейший храм Беларуси пострадал от артобстрелов",
      restoration: "Требует немедленного укрепления стен",
      significance: "Памятник древнерусского зодчества"
    },
    {
      name: "Старый замок",
      century: "XIV век",
      condition: "Частично разрушен",
      damage: 45,
      description: "Крепостные стены выдержали бомбардировки",
      restoration: "Восстановление крыши и внутренних помещений",
      significance: "Резиденция литовских князей"
    },
    {
      name: "Новый замок",
      century: "XVIII век",
      condition: "Умеренные повреждения",
      damage: 30,
      description: "Барочный дворец использовался немцами как штаб",
      restoration: "Ремонт фасада и интерьеров",
      significance: "Шедевр барочной архитектуры"
    },
    {
      name: "Большая синагога",
      century: "XVI век",
      condition: "Сильно повреждена", 
      damage: 80,
      description: "Немцы устроили здесь склад боеприпасов",
      restoration: "Под вопросом из-за серьезных разрушений",
      significance: "Центр еврейской общины"
    },
    {
      name: "Фарный костел",
      century: "XVII век",
      condition: "Незначительные повреждения",
      damage: 20,
      description: "Барочный храм почти не пострадал",
      restoration: "Косметический ремонт",
      significance: "Главный католический храм города"
    }
  ];

  const cityDistricts = [
    {
      district: "Старый город",
      liberation_time: "15 июля, 14:30",
      resistance: "Ожесточенное",
      casualties: "Высокие",
      damage: 70,
      population: {
        before: 15000,
        survived: 4000
      },
      notable: "Древние стены защищали жителей"
    },
    {
      district: "Новый город",
      liberation_time: "16 июля, 09:00", 
      resistance: "Умеренное",
      casualties: "Средние",
      damage: 45,
      population: {
        before: 25000,
        survived: 12000
      },
      notable: "Административный центр"
    },
    {
      district: "Форштадт",
      liberation_time: "15 июля, 11:00",
      resistance: "Слабое", 
      casualties: "Низкие",
      damage: 35,
      population: {
        before: 20000,
        survived: 15000
      },
      notable: "Пригородные районы"
    },
    {
      district: "Еврейский квартал",
      liberation_time: "15 июля, 16:00",
      resistance: "Отсутствует",
      casualties: "Минимальные",
      damage: 90,
      population: {
        before: 8000,
        survived: 200
      },
      notable: "Почти полностью уничтожен нацистами"
    }
  ];

  const battleStats = {
    duration: "4 дня",
    soviet_forces: "31-я армия, части 5-й гвардейской танковой армии",
    casualties: {
      soviet: {
        killed: 2200,
        wounded: 6800
      },
      german: {
        killed: 4500,
        prisoners: 8000,
        escaped: 2000
      }
    },
    civilians: {
      total_population: 68000,
      survivors: 31200,
      losses: 36800
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimateProgress(true), 1000);
    const intensityTimer = setInterval(() => {
      setBattleIntensity(battlePhases[selectedPhase].intensity);
    }, 500);
    
    return () => {
      clearTimeout(timer);
      clearInterval(intensityTimer);
    };
  }, [selectedPhase]);

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-gray-900 rounded-full mb-4">
                <span className="text-sm font-semibold text-red-300 tracking-wider">
                  СТРАНИЦА 72 • ДРЕВНИЙ ГОРОД
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Гродно — бои за древний город
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                13-16 июля 1944 — освобождение одного из древнейших городов Беларуси
              </p>
            </div>

            {/* Battle Intensity Display */}
            <Card className="bg-gray-900 border-gray-700 p-6 mb-12 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Sword className="w-8 h-8 text-purple-600" />
                <div className="text-4xl font-bold text-purple-600">
                  {battleIntensity}/10
                </div>
                <div className="text-2xl text-gray-300">интенсивность боев</div>
              </div>
              <div className="text-lg text-gray-300 mb-4">
                {battlePhases[selectedPhase].phase}
              </div>
              
              <div className="max-w-md mx-auto">
                <div className="w-full bg-muted rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-purple-400 to-red-500 h-4 rounded-full  "
                    style={{ width: `${battleIntensity * 10}%` }}
                  ></div>
                </div>
              </div>
            </Card>

            {/* Battle Timeline */}
            <Card className="bg-gray-900 border-gray-700 p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-red-400">
                Хроника боев за Гродно
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {battlePhases.map((phase, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPhase(index)}
                    className={`p-4 rounded-lg border-2  ${
                      selectedPhase === index
                        ? 'border-red-500 bg-gray-900 text-red-400'
                        : 'border-gray-600 hover:border-purple-300'
                    }`}
                  >
                    <Clock className="w-5 h-5 mx-auto mb-2" />
                    <div className="text-xs font-semibold mb-1">{phase.date.split(' ')[0]}</div>
                    <div className="text-xs">{phase.date.split(' ')[1]} {phase.date.split(' ')[2]}</div>
                  </button>
                ))}
              </div>

              <Card className="p-6 bg-gray-900 border-gray-700">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-red-400 mb-2">
                    {battlePhases[selectedPhase].phase}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="default" className="bg-purple-600">
                      {battlePhases[selectedPhase].date}
                    </Badge>
                    <Badge variant="outline">
                      Интенсивность: {battlePhases[selectedPhase].intensity}/10
                    </Badge>
                  </div>
                  <p className="text-lg text-gray-300 mb-4">
                    {battlePhases[selectedPhase].description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-400">Ход боевых действий:</h4>
                    <ul className="space-y-2">
                      {battlePhases[selectedPhase].details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Sword className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-800 border-gray-700 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-800">Немецкая оборона:</div>
                      <div className="text-sm text-red-700">{battlePhases[selectedPhase].germanDefense}</div>
                    </div>
                    
                    <div className="bg-gray-800 border-gray-700 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Значение:</div>
                      <div className="text-sm text-red-300">{battlePhases[selectedPhase].significance}</div>
                    </div>
                    
                    <div className="bg-gray-800 border-gray-700 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Историческая справка:</div>
                      <div className="text-sm text-red-300">{battlePhases[selectedPhase].historicalNote}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </Card>

            {/* Historical Sites Damage */}
            <Card className="bg-gray-900 border-gray-700 p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Castle className="w-8 h-8 text-yellow-600" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Судьба исторических памятников
                </h2>
              </div>
              
              <div className="space-y-6">
                {historicalSites.map((site, index) => (
                  <Card key={index} className="p-6  ">
                    <div className="grid md:grid-cols-4 gap-6">
                      <div>
                        <h3 className="font-bold text-lg mb-2">{site.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Crown className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm text-gray-300">{site.century}</span>
                        </div>
                        <Badge variant={
                          site.condition.includes('Серьезно') || site.condition.includes('Сильно') ? 'destructive' :
                          site.condition.includes('Частично') ? 'secondary' : 'default'
                        } className={
                          site.condition.includes('Незначительные') ? 'bg-red-600' : ''
                        }>
                          {site.condition}
                        </Badge>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Ущерб:</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex-1 bg-muted rounded-full h-3">
                            <div 
                              className={`h-3 rounded-full   ${
                                site.damage > 60 ? 'bg-red-400' :
                                site.damage > 30 ? 'bg-orange-500' : 'bg-green-500'
                              }`}
                              style={{ width: animateProgress ? `${site.damage}%` : '0%' }}
                            ></div>
                          </div>
                          <span className="text-sm font-bold">{site.damage}%</span>
                        </div>
                        <p className="text-xs text-gray-300">{site.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Восстановление:</h4>
                        <p className="text-sm text-gray-300">{site.restoration}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Значение:</h4>
                        <p className="text-sm text-red-300">{site.significance}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 bg-gray-800 border-gray-700 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="font-bold text-red-400 mb-3">Культурные потери</h3>
                <p className="text-red-300 mb-4">
                  Гродно потерял значительную часть своего исторического наследия. 
                  Многие памятники архитектуры, переживавшие века, пострадали за 4 дня боев 
                  больше, чем за всю свою историю.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">800+</div>
                    <div className="text-sm text-red-300">лет истории</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">50%</div>
                    <div className="text-sm text-red-700">памятников повреждено</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-400">Все</div>
                    <div className="text-sm text-red-300">будет восстановлено</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Districts Liberation */}
            <Card className="bg-gray-900 border-gray-700 p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Освобождение районов города
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {cityDistricts.map((district, index) => (
                  <Card key={index} className="p-6 bg-gray-800 border-blue-200">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-2">{district.district}</h3>
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="default" className="bg-gray-600">
                          {district.liberation_time}
                        </Badge>
                        <Badge variant={
                          district.resistance === 'Ожесточенное' ? 'destructive' :
                          district.resistance === 'Умеренное' ? 'secondary' : 
                          district.resistance === 'Слабое' ? 'default' : 'outline'
                        } className={
                          district.resistance === 'Слабое' ? 'bg-red-600' : ''
                        }>
                          {district.resistance} сопротивление
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="font-semibold text-gray-300">Потери:</div>
                        <div className="text-sm">{district.casualties}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-300">Разрушения:</div>
                        <div className="text-sm">{district.damage}%</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="font-semibold mb-2">Население:</div>
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div>
                          <div className="text-lg font-bold text-red-400">
                            {district.population.before.toLocaleString()}
                          </div>
                          <div className="text-xs text-red-300">до войны</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-red-400">
                            {district.population.survived.toLocaleString()}
                          </div>
                          <div className="text-xs text-red-300">выжили</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 border-gray-700 p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Особенность:</div>
                      <div className="text-sm text-red-300">{district.notable}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Battle Statistics */}
            <Card className="bg-gray-900 border-gray-700 p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Итоги боев за Гродно
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 bg-green-50 border-green-200">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Советские войска</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">
                        {battleStats.duration}
                      </div>
                      <div className="text-sm text-red-300">длительность боев</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div>
                        <div className="text-lg font-bold text-red-600">
                          {battleStats.casualties.soviet.killed.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-700">погибших</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-400">
                          {battleStats.casualties.soviet.wounded.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-300">раненых</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 border-gray-700 p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Силы:</div>
                      <div className="text-xs text-red-300">{battleStats.soviet_forces}</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gray-900 border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-red-800">Немецкие потери</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-lg font-bold text-red-600">
                          {battleStats.casualties.german.killed.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-700">убитых</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-300">
                          {battleStats.casualties.german.prisoners.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-300">пленных</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-yellow-600">
                          {battleStats.casualties.german.escaped.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-300">спаслись</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-1">85%</div>
                      <div className="text-xs text-red-700">гарнизона уничтожено</div>
                    </div>
                    
                    <div className="bg-gray-800 border-gray-700 p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-800">Итого потерь:</div>
                      <div className="text-sm text-red-700">
                        {(battleStats.casualties.german.killed + battleStats.casualties.german.prisoners).toLocaleString()} человек
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gray-900 border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Мирное население</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div>
                        <div className="text-lg font-bold text-red-400">
                          {battleStats.civilians.total_population.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-300">до войны</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-400">
                          {battleStats.civilians.survivors.toLocaleString()}
                        </div>
                        <div className="text-xs text-red-300">выжили</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-1">54%</div>
                      <div className="text-xs text-red-700">потери населения</div>
                    </div>
                    
                    <div className="bg-gray-800 border-gray-700 p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Трагедия:</div>
                      <div className="text-sm text-red-300">
                        {battleStats.civilians.losses.toLocaleString()} жителей погибли за годы оккупации
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Liberation Success */}
            <Card className="bg-gray-900 border-gray-700 p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-red-400">
                Древний Гродно снова свободен
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Castle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Историческое значение</h3>
                  <p className="text-sm text-gray-300">
                    Город с 800-летней историей возвращен под защиту Родины
                  </p>
                </div>
                
                <div className="text-center">
                  <Crown className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Культурное наследие</h3>
                  <p className="text-sm text-gray-300">
                    Древние замки и храмы будут восстановлены в полном объеме
                  </p>
                </div>
                
                <div className="text-center">
                  <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Спасенные жители</h3>
                  <p className="text-sm text-gray-300">
                    31 200 человек встретили освобождение родного города
                  </p>
                </div>
              </div>
              
              <blockquote className="text-xl font-serif italic text-center text-red-400 leading-relaxed">
                «Древние стены Гродно видели много войн, но никогда еще 
                освобождение не было столь долгожданным. Каждый камень 
                древнего города радуется возвращению мира.»
              </blockquote>
              <cite className="block text-center text-gray-300 mt-4">
                — Из донесения политотдела 31-й армии, 16 июля 1944
              </cite>
              
              <div className="mt-8 text-center">
                <div className="text-4xl mb-4">🏰👑🎭</div>
                <div className="text-2xl font-bold text-red-400">
                  Культурная столица снова с нами!
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={72} />
    </>
  );
};

export default Page72;