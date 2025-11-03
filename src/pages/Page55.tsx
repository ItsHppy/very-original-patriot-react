import React, { useState } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Skull, Quote, Calendar } from "lucide-react";

const Page55 = () => {
  const [selectedPoint, setSelectedPoint] = useState<number>(0);
  const [selectedTestimony, setSelectedTestimony] = useState<number>(0);

  const campPoints = [
    {
      id: 0,
      name: "Железнодорожная платформа",
      description: "Место прибытия эшелонов с жертвами. Здесь происходила селекция - кого отправить на работы, кого сразу уничтожить.",
      victims: "Ежедневно прибывало 500-1000 человек",
      coordinates: { x: 20, y: 30 }
    },
    {
      id: 1,
      name: "Административные бараки",
      description: "Здания СС и администрации лагеря. Отсюда руководили массовыми убийствами.",
      victims: "Штаб-квартира зла",
      coordinates: { x: 40, y: 20 }
    },
    {
      id: 2,
      name: "Рабочие бараки",
      description: "Временное содержание работоспособных узников перед отправкой на принудительные работы.",
      victims: "200-300 узников одновременно",
      coordinates: { x: 60, y: 35 }
    },
    {
      id: 3,
      name: "Место массовых расстрелов",
      description: "Лес Благовщина - основное место уничтожения. Здесь были вырыты огромные рвы для захоронений.",
      victims: "Более 150 000 жертв",
      coordinates: { x: 30, y: 70 }
    },
    {
      id: 4,
      name: "Крематорий",
      description: "Построен в 1943 году для сокрытия следов преступлений. Сжигали тела и останки из захоронений.",
      victims: "Уничтожение улик",
      coordinates: { x: 70, y: 60 }
    },
    {
      id: 5,
      name: "Современный мемориал",
      description: "Место памяти, открытое в 2015 году. Символизирует вечную память о жертвах лагеря смерти.",
      victims: "Память на века",
      coordinates: { x: 50, y: 50 }
    }
  ];

  const testimonies = [
    {
      name: "Анна Дворжецкая",
      age: "На момент событий 16 лет",
      story: "Меня привезли из Минского гетто в феврале 1942. Видела, как расстреливали людей в лесу. Спаслась, потому что притворилась мертвой и лежала под телами до ночи.",
      escape: "Бежала через лес, три дня голодала"
    },
    {
      name: "Семен Островский",
      age: "На момент событий 24 года",
      story: "Работал в команде по захоронению тел. Каждый день хоронили сотни людей. В октябре 1943 нас заставили сжигать старые захоронения - немцы хотели скрыть следы.",
      escape: "Сбежал во время восстания узников"
    },
    {
      name: "Мира Берман",
      age: "На момент событий 12 лет",
      story: "Была с мамой. Нас разлучили на платформе - детей отправляли сразу на расстрел. Спряталась в вагоне и так избежала смерти. Маму больше не видела.",
      escape: "Помогли белорусские партизаны"
    },
    {
      name: "Владимир Иванов",
      age: "На момент событий 22 года",
      story: "Охранник из местных. Вначале думал, что это трудовой лагерь. Когда понял правду, начал помогать узникам бежать. Передавал информацию партизанам.",
      escape: "Ушел к партизанам в 1943 году"
    },
    {
      name: "Роза Шульман",
      age: "На момент событий 19 лет",
      story: "Привезли из Австрии в 1942. Работала в прачечной. Видела, как привозили детские вещи после расстрелов. Этот ужас помню до сих пор.",
      escape: "Освобождена Красной Армией в 1944"
    }
  ];

  const statistics = [
    {
      number: "4-й",
      label: "по величине лагерь смерти",
      description: "в Европе после Освенцима",
      color: "destructive"
    },
    {
      number: "206 500",
      label: "человек убито",
      description: "подтвержденные данные",
      color: "destructive"
    },
    {
      number: "34",
      label: "месяца работы",
      description: "с мая 1942 по сентябрь 1944",
      color: "muted"
    },
    {
      number: "5",
      label: "выживших свидетелей",
      description: "из сотен тысяч жертв",
      color: "primary"
    }
  ];

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-destructive/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-destructive tracking-wider">
                  СТРАНИЦА 55 • ЛАГЕРЬ СМЕРТИ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Малый Тростенец
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                4-й по величине лагерь смерти в нацистской Европе
              </p>
              
              <div className="flex items-center justify-center gap-4 text-lg text-muted-foreground">
                <Calendar className="w-5 h-5" />
                <span>Май 1942 - Сентябрь 1944</span>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {statistics.map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className={`text-3xl font-bold mb-2 ${
                    stat.color === 'destructive' ? 'text-destructive' : 
                    stat.color === 'primary' ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {stat.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </Card>
              ))}
            </div>

            {/* Interactive Camp Map */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-8 h-8 text-destructive" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  План лагеря - интерактивная карта
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {campPoints.map((point, index) => (
                  <Button
                    key={index}
                    variant={selectedPoint === index ? "default" : "outline"}
                    className="h-auto p-4 flex flex-col items-start text-left"
                    onClick={() => setSelectedPoint(index)}
                  >
                    <span className="font-semibold text-sm">{point.name}</span>
                  </Button>
                ))}
              </div>
              
              {/* Map visualization */}
              <div className="relative bg-muted rounded-lg h-80 mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200">
                  {/* Map points */}
                  {campPoints.map((point, index) => (
                    <button
                      key={index}
                      className={`absolute w-4 h-4 rounded-full transform -translate-x-2 -translate-y-2 transition-all ${
                        selectedPoint === index 
                          ? 'bg-destructive scale-150 shadow-lg' 
                          : 'bg-primary hover:bg-primary/80'
                      }`}
                      style={{ 
                        left: `${point.coordinates.x}%`, 
                        top: `${point.coordinates.y}%` 
                      }}
                      onClick={() => setSelectedPoint(index)}
                    />
                  ))}
                  
                  {/* Legend */}
                  <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-lg">
                    <div className="text-sm font-semibold mb-2">Легенда</div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span>Точки лагеря</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <div className="w-3 h-3 bg-destructive rounded-full"></div>
                      <span>Выбранная точка</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-destructive pl-6 py-4">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  {campPoints[selectedPoint].name}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {campPoints[selectedPoint].description}
                </p>
                <Badge variant="secondary" className="bg-destructive/10 text-destructive">
                  {campPoints[selectedPoint].victims}
                </Badge>
              </div>
            </Card>

            {/* Testimonies of Survivors */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Quote className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Свидетельства выживших
                </h2>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {testimonies.map((testimony, index) => (
                  <Button
                    key={index}
                    variant={selectedTestimony === index ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTestimony(index)}
                  >
                    {testimony.name}
                  </Button>
                ))}
              </div>
              
              <div className="border-l-4 border-primary pl-6 py-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{testimonies[selectedTestimony].name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonies[selectedTestimony].age}</p>
                  </div>
                </div>
                
                <blockquote className="text-lg text-muted-foreground mb-4 italic">
                  "{testimonies[selectedTestimony].story}"
                </blockquote>
                
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Как удалось спастись:</h4>
                  <p className="text-sm text-muted-foreground">{testimonies[selectedTestimony].escape}</p>
                </div>
              </div>
            </Card>

            {/* Modern Memorial */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Современный мемориал
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-muted rounded-lg h-64 mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Мемориальный комплекс "Тростенец"</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3">Открытие мемориала</h3>
                    <p className="text-muted-foreground">
                      В 2015 году открыт новый мемориальный комплекс. 
                      Архитектурное решение символизирует разорванную жизнь 
                      и память о жертвах.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-3">Стена памяти</h3>
                    <p className="text-muted-foreground">
                      На черных гранитных плитах высечены имена известных жертв. 
                      Однако большинство погибших остаются безымянными.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-3">Музей истории</h3>
                    <p className="text-muted-foreground">
                      Экспозиция рассказывает об истории лагеря, судьбах жертв 
                      и процессе послевоенного расследования преступлений.
                    </p>
                  </div>
                  
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Важность памяти</h4>
                    <p className="text-sm text-muted-foreground">
                      Мемориал служит напоминанием о том, к чему приводят 
                      ненависть и безразличие. Место скорби стало местом обучения.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Memorial Quote */}
            <Card className="bg-gradient-to-br from-destructive/10 to-muted/10 border-l-4 border-destructive p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "Малый Тростенец должен стать символом памяти не только о жертвах Холокоста, 
                но и о всех невинных людях, погибших от рук нацистов на белорусской земле."
              </blockquote>
              <cite className="text-muted-foreground">— Из концепции мемориального комплекса</cite>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={55} />
    </>
  );
};

export default Page55;