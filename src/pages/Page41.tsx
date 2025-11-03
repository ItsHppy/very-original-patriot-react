import React, { useState } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Page41 = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<number>(0);
  const [selectedRegion, setSelectedRegion] = useState<number | null>(null);

  const occupationPeriods = [
    {
      title: "Начало оккупации",
      period: "Июнь - август 1941",
      description: "Стремительное наступление вермахта и установление оккупационного режима",
      events: [
        "22 июня - нападение на СССР",
        "28 июня - захват Минска",
        "16 июля - захват Смоленска",
        "Август - завершение оккупации территории"
      ],
      casualties: "350 000 военнопленных",
      impact: "Коллапс советской власти, начало Холокоста"
    },
    {
      title: "Установление режима",
      period: "Сентябрь 1941 - весна 1942",
      description: "Создание административной системы и начало массовых репрессий",
      events: [
        "Создание гетто в крупных городах",
        "Формирование местной администрации",
        "Первые массовые расстрелы",
        "Организация принудительного труда"
      ],
      casualties: "200 000 мирных жителей",
      impact: "Уничтожение еврейского населения городов"
    },
    {
      title: "Пик террора",
      period: "1942 - начало 1943",
      description: "Массовые карательные операции и депортации",
      events: [
        "Операции против партизан",
        "Сожжение деревень",
        "Массовые депортации в Германию",
        "Ликвидация гетто"
      ],
      casualties: "450 000 мирных жителей",
      impact: "Уничтожение 628 деревень"
    },
    {
      title: "Отступление",
      period: "1943 - июль 1944",
      description: "Усиление партизанского движения и подготовка к отступлению",
      events: [
        "Рост партизанского движения",
        "Операция 'Рельсовая война'",
        "Эвакуация награбленного",
        "Уничтожение следов преступлений"
      ],
      casualties: "300 000 депортированных",
      impact: "Разрушение инфраструктуры"
    }
  ];

  const regionalData = [
    {
      name: "Минская область",
      population: "2 100 000",
      losses: "700 000",
      percentage: "33%",
      deportations: "120 000",
      villages: "243 сожженные деревни"
    },
    {
      name: "Витебская область", 
      population: "1 400 000",
      losses: "450 000", 
      percentage: "32%",
      deportations: "95 000",
      villages: "185 сожженных деревень"
    },
    {
      name: "Гомельская область",
      population: "1 200 000", 
      losses: "380 000",
      percentage: "32%", 
      deportations: "78 000",
      villages: "109 сожженных деревень"
    },
    {
      name: "Гродненская область",
      population: "1 000 000",
      losses: "320 000", 
      percentage: "32%",
      deportations: "65 000", 
      villages: "67 сожженных деревень"
    },
    {
      name: "Брестская область",
      population: "900 000",
      losses: "290 000",
      percentage: "32%", 
      deportations: "52 000",
      villages: "89 сожженных деревень"
    },
    {
      name: "Могилевская область",
      population: "1 100 000",
      losses: "350 000", 
      percentage: "32%",
      deportations: "70 000",
      villages: "135 сожженных деревень"
    }
  ];

  const overallStats = [
    {
      label: "Общие потери населения",
      value: "2.2 - 3 млн",
      description: "От 25% до 33% довоенного населения"
    },
    {
      label: "Продолжительность оккупации", 
      value: "1134 дня",
      description: "С 22 июня 1941 по 3 июля 1944"
    },
    {
      label: "Уничтожено евреев",
      value: "800 000",
      description: "90% довоенного еврейского населения"
    },
    {
      label: "Угнано в Германию",
      value: "380 000",
      description: "Остарбайтеры - подневольные рабочие"
    },
    {
      label: "Сожжено деревень",
      value: "628",
      description: "186 из них так и не восстановились"
    },
    {
      label: "Разрушено городов",
      value: "209",
      description: "Полностью или частично разрушены"
    }
  ];


  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 41 • ОККУПАЦИЯ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Беларусь под оккупацией
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                1134 дня террора, геноцида и сопротивления
              </p>
            </div>

            {/* Timeline Header */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">22 июня 1941</div>
                  <div className="text-sm text-muted-foreground">Начало вторжения</div>
                </div>
                <div className="flex-1 h-2 bg-gradient-to-r from-primary to-destructive rounded-full mx-4"></div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">3 июля 1944</div>
                  <div className="text-sm text-muted-foreground">Освобождение Минска</div>
                </div>
              </div>
            </Card>

            {/* Периоды оккупации */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Периоды оккупации
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {occupationPeriods.map((period, index) => (
                  <Button
                    key={index}
                    variant={selectedPeriod === index ? "default" : "outline"}
                    className="h-auto p-4 flex flex-col items-start"
                    onClick={() => setSelectedPeriod(index)}
                  >
                    <span className="font-semibold text-sm">{period.title}</span>
                    <span className="text-xs text-muted-foreground mt-1">{period.period}</span>
                  </Button>
                ))}
              </div>
              
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-2xl font-serif font-bold mb-2">{occupationPeriods[selectedPeriod].title}</h3>
                <div className="text-sm text-primary font-semibold mb-4">{occupationPeriods[selectedPeriod].period}</div>
                <p className="text-muted-foreground mb-6">{occupationPeriods[selectedPeriod].description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Основные события:</h4>
                    <ul className="space-y-2">
                      {occupationPeriods[selectedPeriod].events.map((event, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Потери:</h4>
                      <div className="text-lg font-bold text-destructive">{occupationPeriods[selectedPeriod].casualties}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Последствия:</h4>
                      <p className="text-sm text-muted-foreground">{occupationPeriods[selectedPeriod].impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Общая статистика */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Цена оккупации
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {overallStats.map((stat, index) => (
                  <Card 
                    key={index} 
                    className="p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="font-semibold text-foreground mb-2">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Memorial Quote */}
            <Card className="bg-gradient-to-br from-primary/10 to-destructive/10 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "История не прощает забвения. Каждое имя, каждая судьба, каждая слеза - 
                это наша память, наша боль, наша ответственность перед будущим."
              </blockquote>
              <cite className="text-muted-foreground">— Из книги памяти жертв геноцида в Беларуси</cite>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={41} />
    </>
  );
};

export default Page41;