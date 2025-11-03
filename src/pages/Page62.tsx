import React, { useState } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Zap, Star, Target, ArrowRight } from "lucide-react";

const Page62 = () => {
  const [selectedFront, setSelectedFront] = useState<number>(0);
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  const fronts = [
    {
      id: 1,
      name: "1-й Прибалтийский фронт",
      commander: "Иван Христофорович Баграмян",
      commanderPhoto: "/images/bagramyan.jpg",
      commanderRank: "Генерал армии",
      commanderBio: "Армянин по национальности, один из выдающихся полководцев ВОВ. С 1943 года командует фронтом.",
      position: "Север",
      mainTask: "Прорыв к Балтийскому морю",
      forces: {
        divisions: 43,
        soldiers: 359000,
        tanks: 587,
        artillery: 4700
      },
      directions: [
        "Витебск - главный удар",
        "Полоцк - вспомогательный удар",
        "Выход к морю у Риги"
      ],
      keyGoals: [
        "Окружение витебской группировки противника",
        "Освобождение Витебска", 
        "Выход к Балтийскому морю",
        "Изоляция группы армий \"Север\""
      ],
      results: [
        "Витебск освобожден 26 июня",
        "Уничтожено 5 немецких дивизий",
        "Взято 10 000 пленных"
      ],
      color: "bg-red-500"
    },
    {
      id: 2,
      name: "3-й Белорусский фронт",
      commander: "Иван Данилович Черняховский",
      commanderPhoto: "/images/chernyakhovsky.jpg",
      commanderRank: "Генерал армии",
      commanderBio: "Самый молодой командующий фронтом (38 лет). Блестящий тактик, любимец солдат.",
      position: "Центр-Север",
      mainTask: "Главный удар на Минск",
      forces: {
        divisions: 54,
        soldiers: 450000,
        tanks: 1355,
        artillery: 6200
      },
      directions: [
        "Витебск - Орша - совместно с 1-м Прибалтийским",
        "Богушевск - Сенно - главный удар",
        "Минск - конечная цель"
      ],
      keyGoals: [
        "Прорыв обороны севернее Орши",
        "Окружение витебской группировки",
        "Стремительное наступление на Минск",
        "Не дать немцам закрепиться на рубежах"
      ],
      results: [
        "Прорыв обороны на 25-30 км в первый день",
        "Освобождение Орши 27 июня",
        "Участие в освобождении Минска"
      ],
      color: "bg-red-500"
    },
    {
      id: 3,
      name: "2-й Белорусский фронт",
      commander: "Георгий Федорович Захаров",
      commanderPhoto: "/images/zakharov.jpg",
      commanderRank: "Генерал-полковник",
      commanderBio: "Опытный командир, участник Первой мировой. Специалист по прорыву укрепленных районов.",
      position: "Центр",
      mainTask: "Могилёвское направление",
      forces: {
        divisions: 33,
        soldiers: 319000,
        tanks: 892,
        artillery: 4600
      },
      directions: [
        "Могилёв - главный удар",
        "Быхов - вспомогательный",
        "Минск с востока"
      ],
      keyGoals: [
        "Прорыв мощной обороны под Могилёвом",
        "Освобождение Могилёва",
        "Выход к Березине",
        "Наступление на Минск с востока"
      ],
      results: [
        "Могилёв освобожден 28 июня",
        "Прорвана «линия Вотана»",
        "Уничтожена могилёвская группировка"
      ],
      color: "bg-red-500"
    },
    {
      id: 4,
      name: "1-й Белорусский фронт",
      commander: "Константин Константинович Рокоссовский",
      commanderPhoto: "/images/rokossovsky.jpg",
      commanderRank: "Генерал армии",
      commanderBio: "«Рыцарь войны», поляк по происхождению. Мастер окружения противника и танковых операций.",
      position: "Юг",
      mainTask: "Бобруйское направление",
      forces: {
        divisions: 63,
        soldiers: 815000,
        tanks: 1741,
        artillery: 8800
      },
      directions: [
        "Рогачёв - Бобруйск - главный удар правым крылом",
        "Паричи - Осиповичи - удар левым крылом",
        "Минск с юга - финальная цель"
      ],
      keyGoals: [
        "Окружение бобруйской группировки",
        "Освобождение Бобруйска",
        "Стремительный выход к Минску",
        "Окружение минской группировки с юга"
      ],
      results: [
        "Бобруйский котел - 74 000 немцев окружено",
        "Бобруйск освобожден 29 июня",
        "24 000 пленных",
        "Путь на Минск открыт"
      ],
      color: "bg-red-500"
    }
  ];

  const overallStats = {
    soldiers: 2400000,
    artillery: 36000,
    tanks: 5200,
    aircraft: 5300,
    divisions: 193
  };

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-red-700 tracking-wider">
                  СТРАНИЦА 62 • ОПЕРАЦИЯ БАГРАТИОН
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Четыре фронта — четыре удара
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                2.4 миллиона советских солдат готовятся нанести сокрушительный удар по группе армий «Центр»
              </p>
            </div>

            {/* Overall Statistics */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-red-800">
                Силы сторон в операции «Багратион»
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {overallStats.soldiers.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">солдат</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {overallStats.artillery.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">орудий</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {overallStats.tanks.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">танков</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {overallStats.aircraft.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">самолетов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {overallStats.divisions}
                  </div>
                  <div className="text-sm text-muted-foreground">дивизий</div>
                </div>
              </div>
              
              <div className="text-center">
                <Badge variant="default" className="text-lg px-6 py-2 bg-red-600 text-white">
                  Соотношение сил: 4:1 в пользу СССР
                </Badge>
              </div>
            </Card>

            {/* Interactive Front Selection */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Четыре фронта — четыре направления
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {fronts.map((front, index) => (
                  <div
                    key={front.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      selectedFront === index 
                        ? `border-red-500 ${front.color} text-white shadow-lg` 
                        : 'border-border hover:border-red-300 bg-background'
                    }`}
                    onClick={() => setSelectedFront(index)}
                  >
                    <div className="text-center">
                      <MapPin className="w-8 h-8 mx-auto mb-2" />
                      <h3 className="font-bold text-sm mb-1">{front.name}</h3>
                      <p className="text-xs opacity-90">{front.commander.split(' ').slice(-1)[0]}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated Strike Directions */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Направления главных ударов</h3>
                  <button
                    onClick={() => setShowAnimation(!showAnimation)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    {showAnimation ? 'Остановить' : 'Показать'} анимацию
                  </button>
                </div>
                
                <div className="relative bg-muted/30 rounded-lg p-6 h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-20"></div>
                  
                  {/* Animated arrows */}
                  {showAnimation && (
                    <div className="absolute inset-0">
                      {fronts.map((front, index) => (
                        <div
                          key={front.id}
                          className={`absolute flex items-center animate-pulse`}
                          style={{
                            top: `${20 + index * 15}%`,
                            left: '10%',
                            color: front.color.replace('bg-', '').replace('-500', '')
                          }}
                        >
                          <ArrowRight className="w-6 h-6 mr-2" />
                          <span className="font-semibold text-sm">{front.name}</span>
                          <div 
                            className={`ml-4 h-2 ${front.color} rounded animate-pulse`}
                            style={{ 
                              width: `${200 + index * 50}px`,
                              animationDelay: `${index * 0.5}s`
                            }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="text-center text-muted-foreground text-sm mt-20">
                    Схематическое изображение направлений наступления четырех фронтов
                  </div>
                </div>
              </div>
            </Card>

            {/* Detailed Front Information */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Commander Portrait */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    <img 
                      src={fronts[selectedFront].commanderPhoto}
                      alt={fronts[selectedFront].commander}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<Star className="w-16 h-16 text-red-400" />`;
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{fronts[selectedFront].commander}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {fronts[selectedFront].commanderRank}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {fronts[selectedFront].commanderBio}
                  </p>
                </div>

                {/* Front Details */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-4 text-accent">
                    {fronts[selectedFront].name}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Главная задача:
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        {fronts[selectedFront].mainTask}
                      </p>
                      
                      <h4 className="font-semibold mb-3">Направления ударов:</h4>
                      <ul className="space-y-1">
                        {fronts[selectedFront].directions.map((direction, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{direction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Силы фронта:
                      </h4>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="text-center p-3 bg-muted/50 rounded">
                          <div className="text-lg font-bold text-red-600">
                            {fronts[selectedFront].forces.soldiers.toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">солдат</div>
                        </div>
                        <div className="text-center p-3 bg-muted/50 rounded">
                          <div className="text-lg font-bold text-red-600">
                            {fronts[selectedFront].forces.tanks}
                          </div>
                          <div className="text-xs text-muted-foreground">танков</div>
                        </div>
                        <div className="text-center p-3 bg-muted/50 rounded">
                          <div className="text-lg font-bold text-red-600">
                            {fronts[selectedFront].forces.artillery}
                          </div>
                          <div className="text-xs text-muted-foreground">орудий</div>
                        </div>
                        <div className="text-center p-3 bg-muted/50 rounded">
                          <div className="text-lg font-bold text-red-600">
                            {fronts[selectedFront].forces.divisions}
                          </div>
                          <div className="text-xs text-muted-foreground">дивизий</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Ключевые цели:</h4>
                      <ul className="space-y-2">
                        {fronts[selectedFront].keyGoals.map((goal, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Zap className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-red-600">Достигнутые результаты:</h4>
                      <ul className="space-y-2">
                        {fronts[selectedFront].results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Strategic Concept */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-red-800">
                Стратегический замысел операции
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Основная идея:</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Одновременными ударами четырех фронтов разгромить группу армий «Центр», 
                    освободить Беларусь и создать условия для наступления на Польшу и Прибалтику.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-4">Этапы операции:</h3>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1">1</Badge>
                      <div>
                        <div className="font-semibold">Прорыв обороны (23-26 июня)</div>
                        <div className="text-sm text-muted-foreground">
                          Взлом немецких позиций на всех направлениях
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1">2</Badge>
                      <div>
                        <div className="font-semibold">Окружение группировок (27 июня - 3 июля)</div>
                        <div className="text-sm text-muted-foreground">
                          Витебский, Бобруйский и Минский «котлы»
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1">3</Badge>
                      <div>
                        <div className="font-semibold">Развитие успеха (июль-август)</div>
                        <div className="text-sm text-muted-foreground">
                          Освобождение всей Беларуси и выход к границам
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Факторы успеха:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Численное превосходство</div>
                        <div className="text-sm text-muted-foreground">
                          4:1 в живой силе, 5:1 в артиллерии
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Внезапность удара</div>
                        <div className="text-sm text-muted-foreground">
                          Немцы ожидали наступления на Украине
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Партизанская поддержка</div>
                        <div className="text-sm text-muted-foreground">
                          40 000 взрывов в тылу немцев за одну ночь
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Мастерство командиров</div>
                        <div className="text-sm text-muted-foreground">
                          Талантливые полководцы и опытные войска
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={62} />
    </>
  );
};

export default Page62;