import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Navigation, Clock, Users, Heart, Star, Flame } from "lucide-react";

// Move static data outside component to prevent re-creation on every render
const memorialComplexes = [
    {
      name: "Брестская крепость-герой",
      location: "г. Брест",
      established: "1965",
      area: "4 км²",
      visitors_yearly: 350000,
      significance: "Место первого сражения Великой Отечественной войны",
      monuments: [
        "Монумент «Мужество» (33.5 м)",
        "Вечный огонь",
        "Музей обороны",
        "Руины казарм",
        "Холмские ворота"
      ],
      virtual_tour: "https://fortress-hero.by/360tour",
      coordinates: "52.0827, 23.6560",
      transport: [
        "Автобус: №5, 17, 20 до ост. «Крепость»",
        "Троллейбус: №1 до центра, затем пешком 15 мин",
        "Такси: из центра Бреста 10 мин",
        "Парковка: бесплатная на 200 мест"
      ],
      schedule: "9:00-18:00 (май-сентябрь), 9:00-17:00 (октябрь-апрель)",
      entrance_fee: "Взрослые - 5 руб., школьники - 2 руб.",
      special_features: [
        "Церемония развода караула",
        "Экскурсии на русском и белорусском",
        "Аудиогид на 6 языках",
        "Доступность для маломобильных"
      ]
    },
    {
      name: "Мемориальный комплекс «Хатынь»",
      location: "Логойский район",
      established: "1969",
      area: "50 га",
      visitors_yearly: 200000,
      significance: "Символ трагедии белорусских деревень",
      monuments: [
        "Скульптура «Непокоренный человек»",
        "Единственная уцелевшая хата",
        "Братская могила",
        "Стена памяти",
        "Кладбище деревень"
      ],
      virtual_tour: "https://khatyn.by/virtual",
      coordinates: "54.0397, 28.0567",
      transport: [
        "Автобус: маршрут Минск-Плещеницы",
        "Экскурсионные автобусы из Минска",
        "Личный автомобиль: 60 км от Минска",
        "Парковка: бесплатная на 150 мест"
      ],
      schedule: "10:00-17:00 (ежедневно)",
      entrance_fee: "Бесплатно",
      special_features: [
        "Колокола скорби звонят каждый час",
        "Экскурсии-реквиемы",
        "Возложение венков и цветов",
        "Музей истории деревни"
      ]
    },
    {
      name: "Курган Славы",
      location: "Смолевичский район",
      established: "1969",
      area: "15 га",
      visitors_yearly: 120000,
      significance: "Символ освобождения Беларуси в операции «Багратион»",
      monuments: [
        "Курган высотой 35 метров",
        "Четыре штыка по 35.6 м",
        "Вечный огонь",
        "Барельефы воинов",
        "Музей боевой славы"
      ],
      virtual_tour: "https://kurgan-slavy.by/tour",
      coordinates: "53.9897, 28.7854",
      transport: [
        "Электричка: до ст. Смолевичи, далее автобус",
        "Автобус: маршрут Минск-Борисов",
        "Личный автомобиль: 25 км от Минска",
        "Парковка: бесплатная на 100 мест"
      ],
      schedule: "9:00-18:00 (май-сентябрь), 10:00-16:00 (октябрь-апрель)",
      entrance_fee: "Взрослые - 3 руб., школьники - 1 руб.",
      special_features: [
        "Подъем на смотровую площадку",
        "Реконструкции сражений",
        "Молодежные патриотические акции",
        "Свадебные церемонии памяти"
      ]
    },
    {
      name: "Тростенец",
      location: "Минский район",
      established: "2015",
      area: "25 га",
      visitors_yearly: 80000,
      significance: "Мемориал жертвам нацистского геноцида",
      monuments: [
        "Монумент «Врата памяти»",
        "Стена памяти с именами",
        "Символические могилы",
        "Мемориальная аллея",
        "Музей истории Холокоста"
      ],
      virtual_tour: "https://trostenets.by/memorial",
      coordinates: "53.8169, 27.7736",
      transport: [
        "Автобус: №146э от ст.м. «Восток»",
        "Маршрутка: от ст.м. «Восток»",
        "Личный автомобиль: 15 км от Минска",
        "Парковка: бесплатная на 80 мест"
      ],
      schedule: "10:00-17:00 (кроме понедельника)",
      entrance_fee: "Бесплатно",
      special_features: [
        "Международный день памяти жертв Холокоста",
        "Церемонии поминовения",
        "Образовательные программы",
        "Исследовательский центр"
      ]
    },
    {
      name: "Музей истории Великой Отечественной войны",
      location: "г. Минск, парк Победы",
      established: "1944 (новое здание 2014)",
      area: "15.6 тыс. м²",
      visitors_yearly: 400000,
      significance: "Главный музей военной истории Беларуси",
      monuments: [
        "Монумент Победы (38 м)",
        "Вечный огонь",
        "Аллея городов-героев",
        "Стела «Минск — город-герой»",
        "Площадь Победы"
      ],
      virtual_tour: "https://warmuseum.by/virtual-tour",
      coordinates: "53.9203, 27.5856",
      transport: [
        "Метро: ст. «Площадь Победы»",
        "Автобус: множество маршрутов",
        "Троллейбус: №12, 35, 46",
        "Парковка: платная, 50 мест"
      ],
      schedule: "10:00-18:00 (вт-вс), выходной понедельник",
      entrance_fee: "Взрослые - 7 руб., школьники - 3 руб.",
      special_features: [
        "Диорамы крупных сражений",
        "Интерактивные экспозиции",
        "Кинозал с военной хроникой",
        "Выставки военной техники"
      ]
    }
  ];

const tourismInfo = {
    popular_routes: [
      {
        name: "Маршрут памяти (1 день)",
        places: ["Хатынь", "Курган Славы", "Минск (Музей ВОВ)"],
        duration: "8 часов",
        transport: "Автобус",
        cost: "35 руб./чел"
      },
      {
        name: "Брестская крепость (2 дня)",
        places: ["Брестская крепость", "Беловежская пуща", "Музей железнодорожной техники"],
        duration: "2 дня/1 ночь",
        transport: "Автобус + проживание",
        cost: "85 руб./чел"
      },
      {
        name: "Мемориалы Минщины",
        places: ["Тростенец", "Хатынь", "Курган Славы", "Музей ВОВ"],
        duration: "2 дня",
        transport: "Автобус",
        cost: "55 руб./чел"
      }
    ],
    accommodation: [
      {
        city: "Минск",
        options: "Отели 3-5*, хостелы, апартаменты",
        price_range: "30-150 руб./ночь"
      },
      {
        city: "Брест",
        options: "Отели 3-4*, гостевые дома",
        price_range: "25-80 руб./ночь"
      }
    ],
    best_time: "Май-сентябрь (комфортная погода), 9 мая (торжественные мероприятия)",
    duration_recommendations: "Минимум 2-3 дня для основных мемориалов"
  };

const memorialStats = {
    total_memorials: 2340,
    major_complexes: 15,
    annual_visitors: 1200000,
    international_visitors: 180000,
    school_groups: 15000,
    ceremonies_yearly: 365,
    volunteer_guides: 450,
    languages_available: 8
  };

const Page78 = () => {
  const [selectedMemorial, setSelectedMemorial] = useState<number>(0);
  const [showVirtualTour, setShowVirtualTour] = useState<boolean>(false);
  const [animateStats, setAnimateStats] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateStats(true), 1000);
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
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 78 • СОВРЕМЕННЫЕ МЕМОРИАЛЫ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Современные мемориалы
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Места памяти, хранящие историю Великой Отечественной войны для будущих поколений
              </p>
            </div>

            {/* Statistics */}
            <Card className="bg-gradient-to-r bg-card/80 backdrop-blur-sm border-border p-6 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-center text-accent">
                Мемориалы Беларуси в цифрах
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">
                    {animateStats ? memorialStats.total_memorials.toLocaleString() : '0'}
                  </div>
                  <div className="text-sm text-primary">всего мемориалов</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">
                    {animateStats ? memorialStats.annual_visitors.toLocaleString() : '0'}
                  </div>
                  <div className="text-sm text-primary">посетителей в год</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {animateStats ? memorialStats.school_groups.toLocaleString() : '0'}
                  </div>
                  <div className="text-sm text-primary">школьных групп</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">
                    {animateStats ? memorialStats.languages_available : '0'}
                  </div>
                  <div className="text-sm text-primary">языков экскурсий</div>
                </div>
              </div>
            </Card>

            {/* Memorial Complexes */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Основные мемориальные комплексы
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {memorialComplexes.map((memorial, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMemorial(index)}
                    className={`p-4 rounded-lg border-2  text-left ${
                      selectedMemorial === index
                        ? 'border-red-500 bg-primary/20 text-accent'
                        : 'border-gray-600 hover:border-red-400'
                    }`}
                  >
                    <MapPin className="w-6 h-6 mb-2" />
                    <div className="font-semibold mb-1">{memorial.name}</div>
                    <div className="text-sm">{memorial.location}</div>
                    <div className="text-xs text-muted-foreground">
                      {memorial.visitors_yearly.toLocaleString()} посетителей/год
                    </div>
                  </button>
                ))}
              </div>

              <Card className="p-6 bg-gradient-to-r bg-card/80 backdrop-blur-sm border-border">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-accent mb-2">
                    {memorialComplexes[selectedMemorial].name}
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <Badge variant="default" className="bg-gray-600">
                      {memorialComplexes[selectedMemorial].location}
                    </Badge>
                    <Badge variant="outline">
                      Основан: {memorialComplexes[selectedMemorial].established}
                    </Badge>
                    <Badge variant="outline">
                      {memorialComplexes[selectedMemorial].area}
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    {memorialComplexes[selectedMemorial].significance}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-accent flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Основные объекты:
                    </h4>
                    <ul className="space-y-2">
                      {memorialComplexes[selectedMemorial].monuments.map((monument, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{monument}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-accent flex items-center gap-2">
                      <Navigation className="w-4 h-4" />
                      Как добраться:
                    </h4>
                    <ul className="space-y-2">
                      {memorialComplexes[selectedMemorial].transport.map((transport, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-card0 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{transport}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-card p-3 rounded border-l-4 border-red-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <div className="font-semibold text-accent">Режим работы:</div>
                    </div>
                    <div className="text-sm text-primary">
                      {memorialComplexes[selectedMemorial].schedule}
                    </div>
                  </div>
                  
                  <div className="bg-card p-3 rounded border-l-4 border-red-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-accent" />
                      <div className="font-semibold text-accent">Входная плата:</div>
                    </div>
                    <div className="text-sm text-primary">
                      {memorialComplexes[selectedMemorial].entrance_fee}
                    </div>
                  </div>
                  
                  <div className="bg-card p-3 rounded border-l-4 border-red-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="w-4 h-4 text-purple-600" />
                      <div className="font-semibold text-accent">Посетителей/год:</div>
                    </div>
                    <div className="text-sm text-primary">
                      {memorialComplexes[selectedMemorial].visitors_yearly.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-3 text-accent">Особенности посещения:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {memorialComplexes[selectedMemorial].special_features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    variant="default" 
                    className="flex items-center gap-2"
                    onClick={() => setShowVirtualTour(!showVirtualTour)}
                  >
                    <Camera className="w-4 h-4" />
                    Виртуальный тур
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    На карте
                  </Button>
                </div>
              </Card>
            </Card>

            {/* Virtual Tour Section */}
            {showVirtualTour && (
              <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
                <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                  Виртуальные туры 360°
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-gray-900 to-blue-900 p-6 rounded-lg text-white">
                    <h3 className="text-xl font-bold mb-4">
                      {memorialComplexes[selectedMemorial].name}
                    </h3>
                    <div className="aspect-video bg-gray-800 rounded mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                        <div className="text-muted-foreground">Панорама 360°</div>
                        <div className="text-sm text-gray-400">
                          Интерактивный виртуальный тур
                        </div>
                      </div>
                    </div>
                    <Button variant="secondary" className="w-full">
                      Открыть полноэкранный режим
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Возможности виртуального тура:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-accent">
                          <Camera className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold">Панорамы высокого разрешения</div>
                          <div className="text-sm text-muted-foreground">
                            Детальный осмотр всех объектов мемориала
                          </div>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-accent">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold">Аудиогид на 6 языках</div>
                          <div className="text-sm text-muted-foreground">
                            Профессиональное озвучивание экскурсии
                          </div>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-purple-600">
                          <Star className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold">Интерактивные точки</div>
                          <div className="text-sm text-muted-foreground">
                            Дополнительная информация и архивные материалы
                          </div>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-accent">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold">Интерактивная карта</div>
                          <div className="text-sm text-muted-foreground">
                            Навигация по территории мемориала
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            )}

            {/* Tourism Information */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Navigation className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Туристическая информация
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-accent">Популярные маршруты</h3>
                  <div className="space-y-4">
                    {tourismInfo.popular_routes.map((route, index) => (
                      <Card key={index} className="p-4 border-l-4 border-red-500">
                        <h4 className="font-semibold text-accent mb-2">{route.name}</h4>
                        <div className="text-sm text-muted-foreground mb-2">
                          {route.places.join(" → ")}
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <span className="font-semibold">Длительность:</span> {route.duration}
                          </div>
                          <div className="text-sm">
                            <span className="font-semibold">Стоимость:</span> {route.cost}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-accent">Практическая информация</h3>
                  <div className="space-y-4">
                    <div className="bg-card p-4 rounded border-l-4 border-red-500">
                      <h4 className="font-semibold text-accent mb-2">Лучшее время для посещения</h4>
                      <div className="text-sm text-primary">{tourismInfo.best_time}</div>
                    </div>
                    
                    <div className="bg-card/60 backdrop-blur-sm border-border p-4 rounded border-l-4 border-red-500">
                      <h4 className="font-semibold text-accent mb-2">Рекомендуемая продолжительность</h4>
                      <div className="text-sm text-primary">{tourismInfo.duration_recommendations}</div>
                    </div>
                    
                    <div className="bg-card p-4 rounded border-l-4 border-red-500">
                      <h4 className="font-semibold text-accent mb-2">Размещение</h4>
                      {tourismInfo.accommodation.map((acc, idx) => (
                        <div key={idx} className="text-sm text-primary mb-1">
                          <span className="font-semibold">{acc.city}:</span> {acc.options} ({acc.price_range})
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Memorial Map */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Карта мемориальных комплексов
              </h2>
              
              <div className="bg-gradient-to-r from-blue-900 to-green-900 p-6 rounded-lg text-white mb-6">
                <div className="aspect-video bg-gray-800 rounded mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <div className="text-xl text-muted-foreground">Интерактивная карта Беларуси</div>
                    <div className="text-gray-400">
                      Основные мемориальные комплексы и места памяти
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3">Легенда карты:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-primary/200 rounded-full"></div>
                      <span className="text-sm">Крупные мемориальные комплексы</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                      <span className="text-sm">Музеи военной истории</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-card0 rounded-full"></div>
                      <span className="text-sm">Памятники и обелиски</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-card0 rounded-full"></div>
                      <span className="text-sm">Братские могилы</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold mb-3">Функции карты:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Построение маршрутов между объектами</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Информация о режиме работы и ценах</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Контакты для заказа экскурсий</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Ближайшие отели и рестораны</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Educational Programs */}
            <Card className="bg-gradient-to-br bg-card/80 backdrop-blur-sm border-border p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-accent">
                Образовательные программы
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Школьные программы</h3>
                  <p className="text-sm text-muted-foreground">
                    Специальные экскурсии для учащихся с интерактивными элементами
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Патриотические акции</h3>
                  <p className="text-sm text-muted-foreground">
                    Церемонии возложения венков, уроки мужества, встречи с ветеранами
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Международные проекты</h3>
                  <p className="text-sm text-muted-foreground">
                    Обмен с музеями других стран, совместные исследования
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <blockquote className="text-xl font-serif italic text-accent mb-4">
                  «Мемориалы — это не просто памятники прошлого. Это мосты между поколениями, 
                  которые помогают современной молодежи понять цену мира и свободы»
                </blockquote>
                <div className="text-muted-foreground">
                  — Из концепции развития мемориальных комплексов Беларуси
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={78} />
    </>
  );
};

export default Page78;