import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Sword, Users, Trophy, Clock, Target, Zap } from "lucide-react";

const Page66 = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [animateCasualties, setAnimateCasualties] = useState<boolean>(false);

  const battlePhases = [
    {
      time: "26 июня, 05:00",
      phase: "Начало штурма",
      description: "Советские войска начинают атаку на Витебск",
      details: [
        "39-я армия атакует с севера",
        "43-я армия наступает с востока", 
        "Танковые части прорывают оборону",
        "Артиллерия подавляет узлы сопротивления"
      ],
      germanStatus: "Сопротивление организованное",
      result: "Прорыв внешнего кольца обороны",
      significance: "Начало окружения города"
    },
    {
      time: "26 июня, 12:00",
      phase: "Окружение завершено",
      description: "Немецкие войска полностью окружены",
      details: [
        "Кольцо окружения сомкнулось",
        "5 немецких дивизий в котле",
        "Попытки прорыва отбиты",
        "Связь с группой армий потеряна"
      ],
      germanStatus: "Паника в окруженных частях",
      result: "53 000 немецких солдат в котле",
      significance: "Vitебская группировка обречена"
    },
    {
      time: "26 июня, 16:00", 
      phase: "Бои в городе",
      description: "Уличные бои за центр Витебска",
      details: [
        "Штурмовые группы атакуют кварталы",
        "Танки поддерживают пехоту",
        "Сопротивление немцев ослабевает",
        "Жители прячутся в подвалах"
      ],
      germanStatus: "Отступление к центру",
      result: "Захват большей части города",
      significance: "Конец обороны Витебска"
    },
    {
      time: "26 июня, 20:00",
      phase: "Освобождение",
      description: "Красное знамя над Витебском",
      details: [
        "Красное знамя водружено над ратушей",
        "Последние очаги сопротивления подавлены",
        "Жители выходят встречать освободителей",
        "Начинается разминирование города"
      ],
      germanStatus: "Остатки гарнизона сдаются",
      result: "Витебск полностью освобожден",
      significance: "Первый крупный успех Багратиона"
    }
  ];

  const encirclementData = {
    encircled: {
      divisions: 5,
      soldiers: 53000,
      equipment: ["120 танков", "300 орудий", "2500 автомашин"],
      commanders: ["53-й армейский корпус", "9-я армия (части)"]
    },
    soviet: {
      participating: ["39-я армия", "43-я армия", "1-й танковый корпус"],
      losses: {
        killed: 2100,
        wounded: 7800,
        total: 9900
      }
    },
    results: {
      killed: 20000,
      prisoners: 10000,
      escaped: 23000,
      equipment_destroyed: 80
    }
  };

  const liberationStories = [
    {
      title: "Первые жители на улицах",
      time: "26 июня, 21:00",
      story: "Когда стрельба стихла, первыми на улицы вышли дети. Они осторожно выглядывали из подвалов, где прятались трое суток. Увидев красные звезды на касках, закричали: «Наши пришли!» Солдаты делились с ними хлебом и сахаром.",
      witnesses: "Мария Петровна, 8 лет во время освобождения",
      photo: "/images/vitebsk-children.jpg"
    },
    {
      title: "Встреча у древнего храма",
      time: "27 июня, утро",
      story: "У руин Благовещенской церкви XII века собрались десятки жителей. Они плакали, обнимали солдат, крестились. Старый священник отец Михаил вышел из укрытия с иконой. «Бог услышал наши молитвы», — сказал он.",
      witnesses: "Протоиерей Михаил Лебедев",
      photo: "/images/vitebsk-church.jpg"
    },
    {
      title: "Слезы радости матери",
      time: "27 июня, день",
      story: "Анна Ивановна узнала среди освободителей своего сына Петра. Он ушел в армию в 1941-м под Витебском, а вернулся освободителем родного города. Мать упала на колени прямо посреди улицы. «Сынок, ты жив!» — кричала она.",
      witnesses: "Петр Васильев, сержант 39-й армии",
      photo: "/images/vitebsk-reunion.jpg"
    }
  ];

  const cityCondition = {
    destroyed: 85,
    population: {
      before: 167000,
      during: 50000,
      survivors: 35000
    },
    damage: [
      "90% жилых домов разрушено",
      "Все мосты через Двину взорваны",
      "Железнодорожный узел уничтожен",
      "Промышленность полностью разрушена"
    ],
    immediate_needs: [
      "Разминирование улиц",
      "Восстановление водопровода",
      "Организация питания для жителей",
      "Медицинская помощь"
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCasualties(true), 1000);
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
                <span className="text-sm font-semibold text-red-300 tracking-wider">
                  СТРАНИЦА 66 • ПЕРВАЯ ПОБЕДА
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Освобождение Витебска
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                26 июня 1944 года — первый крупный успех операции «Багратион»
              </p>
            </div>

            {/* Battle Timeline */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Хроника освобождения города
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {battlePhases.map((phase, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPhase(index)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedPhase === index
                        ? 'border-red-500 bg-accent/20 text-red-400'
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
                    <h4 className="font-semibold mb-3 text-red-400">Действия советских войск:</h4>
                    <ul className="space-y-2">
                      {battlePhases[selectedPhase].details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Target className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-800">Статус немецких войск:</div>
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

            {/* Encirclement Statistics */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Sword className="w-8 h-8 text-red-600" />
                <h2 className="text-3xl font-serif font-bold text-red-800">
                  Окружение 5 немецких дивизий
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Encircled Forces */}
                <Card className="p-6 bg-accent/20">
                  <h3 className="text-xl font-bold mb-4 text-red-800">В окружении</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">
                        {animateCasualties ? encirclementData.encircled.soldiers.toLocaleString() : '0'}
                      </div>
                      <div className="text-sm text-red-700">немецких солдат</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        {encirclementData.encircled.divisions}
                      </div>
                      <div className="text-sm text-red-700">дивизий</div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-red-800">Техника:</h4>
                      <ul className="space-y-1">
                        {encirclementData.encircled.equipment.map((item, idx) => (
                          <li key={idx} className="text-sm text-red-700">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Soviet Forces */}
                <Card className="p-6 bg-accent/20">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Советские войска</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-red-400">Участвующие части:</h4>
                      <ul className="space-y-1">
                        {encirclementData.soviet.participating.map((unit, idx) => (
                          <li key={idx} className="text-sm text-red-300">• {unit}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-red-400">Потери:</h4>
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div>
                          <div className="text-lg font-bold text-red-400">
                            {animateCasualties ? encirclementData.soviet.losses.killed.toLocaleString() : '0'}
                          </div>
                          <div className="text-xs text-red-300">убитых</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-red-400">
                            {animateCasualties ? encirclementData.soviet.losses.wounded.toLocaleString() : '0'}
                          </div>
                          <div className="text-xs text-red-300">раненых</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Results */}
                <Card className="p-6 bg-accent/20">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Итоги боев</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {animateCasualties ? encirclementData.results.killed.toLocaleString() : '0'}
                        </div>
                        <div className="text-xs text-red-300">убитых немцев</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-400">
                          {animateCasualties ? encirclementData.results.prisoners.toLocaleString() : '0'}
                        </div>
                        <div className="text-xs text-red-300">пленных</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400 mb-1">
                        {encirclementData.results.equipment_destroyed}%
                      </div>
                      <div className="text-xs text-red-300">техники уничтожено</div>
                    </div>
                    
                    <div className="bg-card/60 p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Значение:</div>
                      <div className="text-sm text-red-300">Открыт путь на Минск</div>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Liberation Stories */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Радость освобождения
                </h2>
              </div>
              
              <div className="space-y-8">
                {liberationStories.map((story, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-r bg-card/80 backdrop-blur-sm border-border">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="default" className="bg-red-600">
                            {story.time}
                          </Badge>
                          <h3 className="text-xl font-bold">{story.title}</h3>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {story.story}
                        </p>
                        
                        <div className="bg-card/60 p-3 rounded border-l-4 border-red-500">
                          <div className="font-semibold text-red-400">Свидетель:</div>
                          <div className="text-sm text-red-300">{story.witnesses}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                          <img 
                            src={story.photo}
                            alt={story.title}
                            className="w-full h-full object-cover rounded-lg"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement!.innerHTML = `
                                <div class="text-center">
                                  <Users class="w-12 h-12 text-red-400 mx-auto mb-2" />
                                  <div class="text-sm text-muted-foreground">Историческое фото<br/>${story.title}</div>
                                </div>
                              `;
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* City Condition */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Состояние города после освобождения
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Масштаб разрушений</h3>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span>Уровень разрушений</span>
                      <Badge variant="destructive">{cityCondition.destroyed}%</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-4">
                      <div 
                        className="bg-red-500 h-4 rounded-full transition-all duration-1000"
                        style={{ width: animateCasualties ? `${cityCondition.destroyed}%` : '0%' }}
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
                    <h4 className="font-semibold mb-3">Разрушения:</h4>
                    <ul className="space-y-2">
                      {cityCondition.damage.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Первоочередные задачи</h3>
                  
                  <div className="space-y-4">
                    {cityCondition.immediate_needs.map((need, idx) => (
                      <div key={idx} className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                        <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-red-400" />
                          <span className="font-semibold text-red-400">{need}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 bg-card/60 p-6 rounded-lg">
                    <h4 className="font-bold text-red-400 mb-3">Первые меры помощи:</h4>
                    <ul className="space-y-2 text-sm text-red-300">
                      <li>• Полевые кухни армии кормят жителей</li>
                      <li>• Саперы разминируют улицы</li>
                      <li>• Медсанбаты оказывают помощь</li>
                      <li>• Восстанавливается водоснабжение</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Historical Significance */}
            <Card className="bg-gradient-to-br bg-card/80 backdrop-blur-sm border-border p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-red-400">
                Историческое значение освобождения Витебска
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Trophy className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Первый крупный успех</h3>
                  <p className="text-sm text-muted-foreground">
                    Витебск стал первым крупным городом, освобожденным в ходе операции «Багратион»
                  </p>
                </div>
                
                <div className="text-center">
                  <Target className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Стратегическое значение</h3>
                  <p className="text-sm text-muted-foreground">
                    Освобождение открыло путь на Минск и деморализовало немецкие войска
                  </p>
                </div>
                
                <div className="text-center">
                  <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Символ надежды</h3>
                  <p className="text-sm text-muted-foreground">
                    Показал жителям других городов, что освобождение близко
                  </p>
                </div>
              </div>
              
              <blockquote className="text-xl font-serif italic text-center text-red-400 leading-relaxed">
                «Витебск свободен! Эти слова прозвучали как гром среди ясного неба 
                для немецкого командования. Первый удар «Багратиона» достиг цели — 
                дорога на Минск открыта.»
              </blockquote>
              <cite className="block text-center text-muted-foreground mt-4">
                — Из сводки Генерального штаба, 26 июня 1944
              </cite>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={66} />
    </>
  );
};

export default Page66;