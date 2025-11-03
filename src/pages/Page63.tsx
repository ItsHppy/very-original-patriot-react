import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Radio, Bomb, MapPin, Users, Calendar, Zap, HandHeart } from "lucide-react";

const Page63 = () => {
  const [selectedRadiogram, setSelectedRadiogram] = useState<number>(0);

  const radiograms = [
    {
      id: 1,
      date: "19 июня 1944, 23:45",
      from: "Штаб партизанского движения",
      to: "Всем отрядам и бригадам",
      cipher: "МОЛНИЯ-1",
      text: "Товарищи партизаны! В ночь с 19 на 20 июня провести операцию «Рельсовая война». Взорвать все мосты, переправы и железнодорожные пути в тылу противника. Операция начинается в 00:00. Да здравствует освобождение Беларуси!",
      priority: "ВЫСШАЯ",
      status: "ВЫПОЛНЕНО"
    },
    {
      id: 2,
      date: "20 июня 1944, 02:30",
      from: "Бригада им. Чапаева",
      to: "Штаб партизанского движения",
      cipher: "ВЗРЫВ-12",
      text: "Мост через Березину у д. Свислочь уничтожен. Взорваны 3 км железной дороги Минск-Орша. Немецкий гарнизон в панике. Потерь среди партизан нет. Готовы к дальнейшим действиям.",
      priority: "СРОЧНАЯ",
      status: "ПОЛУЧЕНО"
    },
    {
      id: 3,
      date: "21 июня 1944, 15:20",
      from: "Отряд «Мститель»",
      to: "3-й Белорусский фронт",
      cipher: "ПРОВОДНИК-7",
      text: "Готовы встретить наступающие части. Знаем все тропы в Оршанских лесах. Захватили переправу у Толочина. Противник отступает в панике. Местное население всячески помогает.",
      priority: "ОБЫЧНАЯ",
      status: "ПЕРЕДАНО"
    },
    {
      id: 4,
      date: "23 июня 1944, 06:00",
      from: "Соединение Машерова",
      to: "Штаб 1-го Белорусского фронта",
      cipher: "ВСТРЕЧА-1",
      text: "Первый контакт с передовыми частями 1-го Белорусского фронта у д. Парычи. Передали карты минных полей. Указали обходные пути. Да здравствует встреча партизан с Красной Армией!",
      priority: "ВЫСШАЯ",
      status: "ИСТОРИЧЕСКИЙ"
    }
  ];

  const partisanTasks = [
    {
      task: "Взрыв железных дорог",
      description: "40 000 взрывов за одну ночь",
      icon: <Bomb className="w-6 h-6" />,
      details: [
        "1200 км путей выведено из строя",
        "Парализована связь между группировками",
        "Сорвана переброска резервов"
      ],
      timeframe: "19-20 июня 1944",
      participants: "Все партизанские отряды Беларуси",
      result: "Немецкие войска лишены маневренности"
    },
    {
      task: "Захват переправ и мостов",
      description: "Блокирование отступления противника",
      icon: <MapPin className="w-6 h-6" />,
      details: [
        "Захвачено 15 крупных переправ",
        "Уничтожено 87 мостов",
        "Заблокированы основные дороги отступления"
      ],
      timeframe: "20-25 июня 1944",
      participants: "Партизанские бригады",
      result: "Немецкие войска попали в «котлы»"
    },
    {
      task: "Проводники для армии",
      description: "Помощь в ориентировании",
      icon: <Users className="w-6 h-6" />,
      details: [
        "2000 партизан стали проводниками",
        "Переданы карты минных полей",
        "Указаны обходные пути и броды"
      ],
      timeframe: "23 июня - 3 июля 1944",
      participants: "Лучшие знатоки местности",
      result: "Армия избежала потерь на минах"
    },
    {
      task: "Диверсии в тылу",
      description: "Удары по коммуникациям",
      icon: <Zap className="w-6 h-6" />,
      details: [
        "Взорваны склады боеприпасов",
        "Уничтожены линии связи",
        "Атакованы штабы и узлы управления"
      ],
      timeframe: "19-30 июня 1944",
      participants: "Диверсионные группы",
      result: "Нарушено управление войсками"
    }
  ];

  const meetingStories = [
    {
      id: 1,
      title: "Встреча у Борисова",
      date: "24 июня 1944",
      participants: "Бригада им. Фрунзе и 3-я танковая армия",
      story: "Когда советские танки подошли к окраине Борисова, их встретили партизаны с красными флагами. Командир бригады Петр Машеров лично встречал танкистов. Слезы радости смешались с пылью дорог.",
      photo: "/images/meeting-borisov.jpg",
      significance: "Первая официальная встреча партизан с регулярной армией"
    },
    {
      id: 2,
      title: "Соединение у Глуска",
      date: "26 июня 1944",
      participants: "Отряд «Смерть фашизму» и 65-я армия",
      story: "В лесу у Глуска 200 партизан ждали наших солдат. Когда увидели красные звезды на касках, запели «Катюшу». Командир отряда доложил: «Товарищ генерал, партизанский отряд готов влиться в ряды Красной Армии!»",
      photo: "/images/meeting-glusk.jpg",
      significance: "Символ единства народа и армии"
    },
    {
      id: 3,
      title: "Парад в Минске",
      date: "16 июля 1944",
      participants: "30 000 партизан со всей Беларуси",
      story: "По главной улице освобожденного Минска прошли колонны партизан. Впереди шли командиры: Машеров, Калинин, Заслонов. Народ плакал от радости. Война для Беларуси закончилась.",
      photo: "/images/parade-minsk.jpg",
      significance: "Триумф партизанского движения"
    }
  ];


  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-red-700 tracking-wider">
                  СТРАНИЦА 63 • ПАРТИЗАНСКАЯ ПОДДЕРЖКА
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Роль партизан в Багратионе
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                «Рельсовая война» — 40 000 взрывов за одну ночь накануне наступления
              </p>
            </div>

            {/* Explosion Counter */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12 text-center">
              <h2 className="text-3xl font-serif font-bold mb-6 text-red-800">
                Операция «Рельсовая война»
              </h2>
              
              <div className="mb-6">
                <div className="text-6xl font-bold text-red-600 mb-2">
                  40,000
                </div>
                <div className="text-lg text-muted-foreground mb-4">
                  взрывов в ночь с 19 на 20 июня 1944 года
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">1200 км</div>
                  <div className="text-sm text-muted-foreground">железных дорог выведено из строя</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">87</div>
                  <div className="text-sm text-muted-foreground">мостов уничтожено</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">связь противника нарушена</div>
                </div>
              </div>
            </Card>

            {/* Radio Communications */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Radio className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Радиограммы: связь партизан с фронтом
                </h2>
              </div>
              
              <div className="grid md:grid-cols-4 gap-3 mb-6">
                {radiograms.map((radiogram, index) => (
                  <button
                    key={radiogram.id}
                    onClick={() => setSelectedRadiogram(index)}
                    className={`p-3 rounded-lg border-2 text-left transition-all ${
                      selectedRadiogram === index
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4" />
                      <Badge 
                        variant={
                          radiogram.priority === 'ВЫСШАЯ' ? 'destructive' :
                          radiogram.priority === 'СРОЧНАЯ' ? 'secondary' : 'default'
                        }
                        className="text-xs"
                      >
                        {radiogram.priority}
                      </Badge>
                    </div>
                    <div className="text-sm font-semibold mb-1">{radiogram.cipher}</div>
                    <div className="text-xs text-muted-foreground">{radiogram.date}</div>
                  </button>
                ))}
              </div>
              
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{radiograms[selectedRadiogram].cipher}</h3>
                    <p className="text-sm text-muted-foreground">
                      {radiograms[selectedRadiogram].date}
                    </p>
                  </div>
                  <Badge 
                    variant={radiograms[selectedRadiogram].status === 'ИСТОРИЧЕСКИЙ' ? 'default' : 'secondary'}
                  >
                    {radiograms[selectedRadiogram].status}
                  </Badge>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-2">
                    <strong>От:</strong> {radiograms[selectedRadiogram].from}<br/>
                    <strong>Кому:</strong> {radiograms[selectedRadiogram].to}
                  </div>
                </div>
                
                <div className="bg-card/60 p-4 rounded border-l-4 border-amber-500">
                  <p className="text-foreground leading-relaxed font-mono text-sm">
                    {radiograms[selectedRadiogram].text}
                  </p>
                </div>
              </Card>
            </Card>

            {/* Partisan Tasks */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Задачи партизан в операции
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {partisanTasks.map((task, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-red-600">
                        {task.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{task.task}</h3>
                        <p className="text-sm text-muted-foreground">{task.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Сроки:</span>
                        <Badge variant="outline">{task.timeframe}</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Исполнители:</span>
                        <span className="text-right text-xs">{task.participants}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Достижения:</h4>
                      <ul className="space-y-1">
                        {task.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-accent/20 p-3 rounded border-l-4 border-red-500">
                      <div className="text-sm font-semibold text-red-400">Результат:</div>
                      <div className="text-sm text-red-300">{task.result}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Meeting Stories */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <HandHeart className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Встреча партизан с Красной Армией
                </h2>
              </div>
              
              <div className="space-y-8">
                {meetingStories.map((story, index) => (
                  <Card key={story.id} className="p-6 bg-card/80 backdrop-blur-sm border-border">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="default" className="bg-red-500">
                            {story.date}
                          </Badge>
                          <h3 className="text-xl font-bold">{story.title}</h3>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-sm text-muted-foreground mb-2">
                            <strong>Участники:</strong> {story.participants}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {story.story}
                        </p>
                        
                        <div className="bg-accent/20 p-3 rounded border-l-4 border-red-500">
                          <div className="text-sm font-semibold text-red-400">Историческое значение:</div>
                          <div className="text-sm text-red-300">{story.significance}</div>
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
                                  <HandHeart class="w-12 h-12 text-red-400 mx-auto mb-2" />
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

            {/* Coordination Success */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-red-400">
                Успех координации
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Факторы успеха:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <Radio className="w-4 h-4 text-red-400" />
                      </div>
                      <div>
                        <div className="font-semibold">Единое командование</div>
                        <div className="text-sm text-muted-foreground">
                          Центральный штаб партизанского движения координировал все действия
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-red-400" />
                      </div>
                      <div>
                        <div className="font-semibold">Массовость движения</div>
                        <div className="text-sm text-muted-foreground">
                          120 000 партизан в 1255 отрядах по всей Беларуси
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-red-400" />
                      </div>
                      <div>
                        <div className="font-semibold">Знание местности</div>
                        <div className="text-sm text-muted-foreground">
                          Партизаны знали каждую тропинку и каждый брод
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Итоги взаимодействия:</h3>
                  <div className="space-y-4">
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold">Стратегический эффект</div>
                      <div className="text-sm text-muted-foreground">
                        Немецкие войска лишились возможности маневра и организованного отступления
                      </div>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold">Тактическая поддержка</div>
                      <div className="text-sm text-muted-foreground">
                        Армия получила точные разведданные и надежных проводников
                      </div>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold">Моральный подъем</div>
                      <div className="text-sm text-muted-foreground">
                        Встреча партизан с армией показала единство народа в борьбе
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-xl font-serif italic text-center text-red-400 mt-8 border-t pt-6">
                «Партизаны стали глазами и ушами наступающей армии, 
                проводниками и разведчиками на пути к победе»
              </blockquote>
              <cite className="block text-center text-muted-foreground mt-2">
                — Из воспоминаний маршала Рокоссовского
              </cite>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={63} />
    </>
  );
};

export default Page63;