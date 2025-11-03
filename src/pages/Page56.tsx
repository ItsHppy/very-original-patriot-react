import React, { useState } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Bomb, Building, Camera, Skull, ArrowLeftRight } from "lucide-react";

const Page56 = () => {
  const [selectedCity, setSelectedCity] = useState<number>(0);

  const cities = [
    {
      name: "Минск",
      destruction: 80,
      population: {
        before: "270 000",
        after: "50 000"
      },
      description: "Столица БССР подверглась систематическим бомбардировкам и была почти полностью разрушена при отступлении немцев.",
      keyLosses: [
        "Центральная площадь и правительственные здания",
        "90% жилого фонда в центре города", 
        "Большинство промышленных предприятий",
        "Культурные и образовательные учреждения"
      ],
      image: "/assets/minsk-destruction.jpg"
    },
    {
      name: "Витебск",
      destruction: 93,
      population: {
        before: "167 000",
        after: "118 000"
      },
      description: "Древний белорусский город был практически стерт с лица земли. Уцелело менее 10% довоенной застройки.",
      keyLosses: [
        "Исторический центр города полностью уничтожен",
        "Собор Святого Духа и другие храмы",
        "Витебский железнодорожный узел",
        "Все мосты через Западную Двину"
      ],
      image: "/assets/vitebsk-destruction.jpg"
    },
    {
      name: "Полоцк",
      destruction: 96,
      population: {
        before: "35 000",
        after: "1 500"
      },
      description: "Один из древнейших городов Европы был почти полностью уничтожен. Остались только руины и пепел.",
      keyLosses: [
        "Софийский собор XI века - древнейший храм",
        "Спасо-Ефросиниевский монастырь",
        "Исторический центр с архитектурой XVI-XVIII веков",
        "Все промышленные объекты"
      ],
      image: "/assets/polotsk-destruction.jpg"
    },
    {
      name: "Гомель",
      destruction: 70,
      population: {
        before: "144 000",
        after: "65 000"
      },
      description: "Крупный промышленный центр серьезно пострадал от бомбардировок и методичного разрушения при отступлении.",
      keyLosses: [
        "Дворцово-парковый ансамбль Румянцевых-Паскевичей",
        "Железнодорожный вокзал и депо",
        "Большая часть жилых кварталов",
        "Промышленные предприятия"
      ],
      image: "/assets/gomel-destruction.jpg"
    }
  ];

  const destructionMethods = [
    {
      icon: <Bomb className="w-8 h-8" />,
      title: "Авиационные бомбардировки",
      description: "Массированные налеты люфтваффе с первых дней войны. Использовались фугасные и зажигательные бомбы.",
      impact: "Разрушение ключевых объектов инфраструктуры"
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Поджоги при отступлении",
      description: "Систематическое сжигание всего, что могло быть полезно наступающей Красной Армии.",
      impact: "Уничтожение жилого фонда и складов"
    },
    {
      icon: <Skull className="w-8 h-8" />,
      title: "Тактика «выжженной земли»",
      description: "Планомерное уничтожение всей инфраструктуры: мостов, дорог, заводов, школ, больниц.",
      impact: "Полная деиндустриализация региона"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Разрушение культурного наследия",
      description: "Целенаправленное уничтожение храмов, музеев, библиотек, памятников архитектуры.",
      impact: "Потеря исторической памяти народа"
    }
  ];

  const culturalLosses = [
    "500+ памятников архитектуры XV-XIX веков",
    "150 православных храмов и костелов",
    "300 тысяч книг и рукописей",
    "Тысячи произведений искусства",
    "Археологические коллекции",
    "Исторические архивы"
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
                  СТРАНИЦА 56 • РАЗРУШЕНИЯ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Уничтожение городов
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Систематическое разрушение белорусских городов
              </p>
            </div>

            {/* Cities Destruction Statistics */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Разрушения в цифрах
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-4 flex flex-col items-center text-center cursor-pointer transition-colors hover:bg-muted/50 ${
                      selectedCity === index ? 'bg-primary/10 border-primary' : 'border-border'
                    }`}
                    onClick={() => setSelectedCity(index)}
                  >
                    <span className="font-bold text-lg">{city.name}</span>
                    <span className="text-2xl font-bold text-destructive">{city.destruction}%</span>
                    <span className="text-xs text-muted-foreground">разрушено</span>
                  </div>
                ))}
              </div>
              
              <div className="border-l-4 border-destructive pl-6 py-4 transition-all duration-300">
                <h3 className="text-2xl font-serif font-bold mb-4">{cities[selectedCity].name}</h3>
                <p className="text-muted-foreground mb-6">{cities[selectedCity].description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Население:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>До войны:</span>
                        <Badge variant="secondary">{cities[selectedCity].population.before}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>После войны:</span>
                        <Badge variant="destructive">{cities[selectedCity].population.after}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Ключевые потери:</h4>
                    <ul className="space-y-1">
                      {cities[selectedCity].keyLosses.map((loss, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {loss}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Before/After Slider */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <ArrowLeftRight className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  До войны / После войны
                </h2>
              </div>
              
              <div className="relative mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <h3 className="font-bold mb-4">До войны - 1940 год</h3>
                    <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center">
                        <Building className="w-12 h-12 mx-auto mb-4 text-green-600" />
                        <p className="text-green-700 font-semibold">Процветающие города</p>
                        <p className="text-sm text-green-600">Промышленность, культура, жизнь</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <h3 className="font-bold mb-4">После войны - 1944 год</h3>
                    <div className="bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center">
                        <Skull className="w-12 h-12 mx-auto mb-4 text-gray-700" />
                        <p className="text-gray-700 font-semibold">Руины и пепел</p>
                        <p className="text-sm text-gray-600">Разрушение, смерть, запустение</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Destruction Methods */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Методы уничтожения
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {destructionMethods.map((method, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center text-destructive">
                        {method.icon}
                      </div>
                      <h3 className="font-bold text-lg">{method.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">{method.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {method.impact}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Cultural Heritage Loss */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Camera className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Потеря культурного наследия
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4">Безвозвратные потери:</h3>
                  <ul className="space-y-3">
                    {culturalLosses.map((loss, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-destructive rounded-full"></div>
                        <span className="text-muted-foreground">{loss}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-4">Примеры уничтоженного наследия:</h3>
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Софийский собор в Полоцке</h4>
                      <p className="text-sm text-muted-foreground">
                        Построен в XI веке, один из древнейших храмов Европы. 
                        Взорван немцами в 1944 году.
                      </p>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Минская ратуша</h4>
                      <p className="text-sm text-muted-foreground">
                        Символ городского самоуправления с XVI века. 
                        Разрушена во время боев за город.
                      </p>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Библиотеки и архивы</h4>
                      <p className="text-sm text-muted-foreground">
                        Утрачены уникальные документы по истории Беларуси, 
                        рукописи и книги на белорусском языке.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Memorial Quote */}
            <Card className="bg-gradient-to-br from-destructive/10 to-muted/10 border-l-4 border-destructive p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "Они уничтожали не только здания и дороги. Они пытались стереть саму память 
                о белорусском народе, его культуре и истории. Но память живет в людях."
              </blockquote>
              <cite className="text-muted-foreground">— Из послевоенных воспоминаний архитектора</cite>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={56} />
    </>
  );
};

export default Page56;