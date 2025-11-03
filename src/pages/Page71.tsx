import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Home, Wrench, Users, Truck, Calendar, Clock, AlertTriangle } from "lucide-react";

const Page71 = () => {
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [animateProgress, setAnimateProgress] = useState<boolean>(false);
  const [daysPassed, setDaysPassed] = useState<number>(1);

  const firstDays = [
    {
      date: "4 июля 1944",
      day: "День +1",
      title: "Слезы радости и первые заботы",
      description: "Первый день после освобождения столицы",
      events: [
        "Жители массово выходят на улицы",
        "Армейские кухни кормят голодающих",
        "Разминирование центральных улиц",
        "Поиск родственников и близких"
      ],
      challenges: [
        "Отсутствие электричества и воды",
        "Разрушенные мосты и дороги", 
        "Нехватка медикаментов",
        "Тысячи беженцев в городе"
      ],
      achievements: [
        "Восстановлена радиосвязь",
        "Открыты 3 полевых госпиталя",
        "Начала работу военная комендатура",
        "Эвакуированы тяжелораненые"
      ],
      mood: "Эйфория освобождения",
      priority: "Спасение людей"
    },
    {
      date: "5 июля 1944",
      day: "День +2", 
      title: "Учет потерь и организация помощи",
      description: "Осознание масштаба разрушений",
      events: [
        "Перепись выживших жителей",
        "Организация временного жилья",
        "Создание пунктов питания",
        "Розыск пропавших людей"
      ],
      challenges: [
        "Эпидемия тифа в районах",
        "Отсутствие крыши у 70% жителей",
        "Нехватка чистой воды",
        "Горы трупов под завалами"
      ],
      achievements: [
        "Открыто 15 столовых для населения",
        "Начато разминирование заводов",
        "Восстановлен водопровод в центре", 
        "Работают 5 медпунктов"
      ],
      mood: "Осознание трагедии",
      priority: "Предотвращение эпидемий"
    },
    {
      date: "6 июля 1944",
      day: "День +3",
      title: "Первые шаги восстановления",
      description: "Начало организованного возрождения",
      events: [
        "Расчистка главных улиц",
        "Ремонт важнейших мостов",
        "Открытие школ для детей",
        "Первые рынки и магазины"
      ],
      challenges: [
        "Нехватка строительных материалов",
        "Отсутствие транспорта",
        "Разрушенная канализация",
        "Психологические травмы у детей"
      ],
      achievements: [
        "Восстановлено движение по 3 мостам",
        "Работает 12 км дорог",
        "Открыты 8 начальных школ",
        "Налажено производство хлеба"
      ],
      mood: "Надежда на будущее",
      priority: "Восстановление инфраструктуры"
    },
    {
      date: "10 июля 1944",
      day: "Неделя",
      title: "Возвращение к жизни",
      description: "Первые признаки нормальной жизни",
      events: [
        "Возобновление работы заводов",
        "Открытие городского театра",
        "Первая почтовая связь",
        "Концерты для жителей"
      ],
      challenges: [
        "Нехватка квалифицированных кадров",
        "Отсутствие сырья для производства",
        "Проблемы с топливом",
        "Реинтеграция бывших пленных"
      ],
      achievements: [
        "Запущены 2 крупных завода",
        "Восстановлена телефонная связь",
        "Работают 25 магазинов",
        "Открыт роддом"
      ],
      mood: "Уверенность в восстановлении",
      priority: "Возрождение экономики"
    }
  ];

  const restorationPriorities = [
    {
      category: "Жизнеобеспечение",
      icon: <Heart className="w-6 h-6" />,
      tasks: [
        "Обеспечение питьевой водой",
        "Организация питания населения",
        "Медицинская помощь",
        "Временное жилье для бездомных"
      ],
      progress: 85,
      responsible: "Военная администрация",
      deadline: "Первая неделя",
      status: "Выполнено"
    },
    {
      category: "Безопасность",
      icon: <AlertTriangle className="w-6 h-6" />,
      tasks: [
        "Разминирование улиц и зданий",
        "Поддержание общественного порядка",
        "Борьба с мародерством",
        "Изоляция военных преступников"
      ],
      progress: 75,
      responsible: "Саперные части, НКВД",
      deadline: "Две недели",
      status: "В процессе"
    },
    {
      category: "Инфраструктура",
      icon: <Wrench className="w-6 h-6" />,
      tasks: [
        "Восстановление мостов",
        "Ремонт дорог",
        "Электроснабжение",
        "Водопровод и канализация"
      ],
      progress: 45,
      responsible: "Инженерные войска",
      deadline: "Месяц",
      status: "Начато"
    },
    {
      category: "Экономика",
      icon: <Truck className="w-6 h-6" />,
      tasks: [
        "Восстановление заводов",
        "Налаживание торговли",
        "Сельхозпроизводство",
        "Транспортное сообщение"
      ],
      progress: 25,
      responsible: "Гражданская администрация",
      deadline: "Три месяца",
      status: "Планирование"
    }
  ];

  const humanStories = [
    {
      name: "Анна Ивановна Петрова",
      age: 45,
      situation: "Мать троих детей, потеряла мужа и дом",
      story: "Три года прятались в подвале. Когда услышали русскую речь, не поверили. Плакали всей семьей. Солдаты дали нам хлеб и сахар — дети забыли вкус сладкого.",
      help_received: "Временное жилье в школе, питание в столовой",
      current_status: "Ищет работу, дети ходят в школу",
      hope: "Построить новый дом и найти могилу мужа"
    },
    {
      name: "Михаил Степанович Козлов",
      age: 38,
      situation: "Бывший учитель, работал на немцев под принуждением",
      story: "Немцы заставляли преподавать их пропаганду. Боялся отказаться — расстреляли бы. Теперь односельчане смотрят косо. Стыдно, но я спас детей от голодной смерти.",
      help_received: "Проверка в НКВД, разрешение работать",
      current_status: "Восстанавливает школу, преподает математику",
      hope: "Искупить вину честной работой"
    },
    {
      name: "Мария Сергеевна Волкова",
      age: 23,
      situation: "Медсестра, работала в подполье",
      story: "Лечила партизан в лесу. Немцы искали, но не нашли. Видела, как они издевались над ранеными. Теперь работаю в госпитале — лечу наших героев.",
      help_received: "Награждена медалью, получила квартиру",
      current_status: "Главная медсестра военного госпиталя",
      hope: "Выйти замуж за выздоровевшего солдата"
    }
  ];

  const cityServices = {
    healthcare: {
      hospitals: 3,
      clinics: 12,
      doctors: 45,
      beds: 850,
      operations_daily: 25
    },
    education: {
      schools: 15,
      students: 2800,
      teachers: 120,
      kindergartens: 5
    },
    utilities: {
      water_coverage: 60,
      electricity_coverage: 35,
      working_phones: 150,
      cleared_roads: 85
    },
    food: {
      bread_bakeries: 8,
      food_stores: 25,
      canteens: 18,
      daily_bread: 12000
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimateProgress(true), 1000);
    const dayCounter = setInterval(() => {
      setDaysPassed(prev => prev < 7 ? prev + 1 : 1);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(dayCounter);
    };
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
                  СТРАНИЦА 71 • ВОЗРОЖДЕНИЕ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Первые дни свободы
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                4-10 июля 1944 — как Минск возвращался к жизни после освобождения
              </p>
            </div>

            {/* Days Counter */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-6 mb-12 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Calendar className="w-8 h-8 text-red-400" />
                <div className="text-4xl font-bold text-red-400">{daysPassed}</div>
                <div className="text-2xl text-muted-foreground">
                  {daysPassed === 1 ? 'день' : daysPassed < 5 ? 'дня' : 'дней'} свободы
                </div>
              </div>
              <div className="text-lg text-muted-foreground">
                Минск медленно возвращается к жизни
              </div>
            </Card>

            {/* First Days Timeline */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-red-400">
                Первые дни после освобождения
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {firstDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDay(index)}
                    className={`p-4 rounded-lg border-2 ${
                      selectedDay === index
                        ? 'border-red-500 bg-card/80 backdrop-blur-sm text-red-300'
                        : 'border-border hover:border-red-400'
                    }`}
                  >
                    <Calendar className="w-5 h-5 mx-auto mb-2" />
                    <div className="text-xs font-semibold mb-1">{day.day}</div>
                    <div className="text-xs">{day.date.split(' ')[0]}</div>
                  </button>
                ))}
              </div>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-red-400 mb-2">
                    {firstDays[selectedDay].title}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="default" className="bg-red-600">
                      {firstDays[selectedDay].date}
                    </Badge>
                    <Badge variant="outline">{firstDays[selectedDay].day}</Badge>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    {firstDays[selectedDay].description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-400">События дня:</h4>
                    <ul className="space-y-2">
                      {firstDays[selectedDay].events.map((event, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-red-400">Проблемы:</h4>
                    <ul className="space-y-2">
                      {firstDays[selectedDay].challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-red-400">Достижения:</h4>
                    <ul className="space-y-2">
                      {firstDays[selectedDay].achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-card border-border p-4 rounded border-l-4 border-red-500">
                    <div className="font-semibold text-red-400">Настроение в городе:</div>
                    <div className="text-sm text-red-300">{firstDays[selectedDay].mood}</div>
                  </div>
                  
                  <div className="bg-card border-border p-4 rounded border-l-4 border-red-500">
                    <div className="font-semibold text-red-400">Главный приоритет:</div>
                    <div className="text-sm text-red-300">{firstDays[selectedDay].priority}</div>
                  </div>
                </div>
              </Card>
            </Card>

            {/* Restoration Priorities */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Wrench className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Приоритеты восстановления
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {restorationPriorities.map((priority, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-red-400">
                        {priority.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{priority.category}</h3>
                        <Badge variant={
                          priority.status === 'Выполнено' ? 'default' :
                          priority.status === 'В процессе' ? 'secondary' :
                          priority.status === 'Начато' ? 'outline' : 'destructive'
                        } className={
                          priority.status === 'Выполнено' ? 'bg-red-600' :
                          priority.status === 'В процессе' ? 'bg-red-400' :
                          priority.status === 'Начато' ? 'bg-gray-600' : ''
                        }>
                          {priority.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Задачи:</h4>
                        <ul className="space-y-1">
                          {priority.tasks.map((task, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold">Прогресс:</span>
                          <span className="text-sm font-bold text-red-400">{priority.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3">
                          <div 
                            className="bg-red-400 h-3 rounded-full"
                            style={{ width: animateProgress ? `${priority.progress}%` : '0%' }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-muted-foreground">Ответственные:</span>
                          <p className="text-muted-foreground">{priority.responsible}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-muted-foreground">Срок:</span>
                          <p className="text-muted-foreground">{priority.deadline}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Human Stories */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Судьбы людей в первые дни свободы
                </h2>
              </div>
              
              <div className="space-y-8">
                {humanStories.map((person, index) => (
                  <Card key={index} className="p-6 bg-card border-border">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="font-bold text-xl mb-2">{person.name}</h3>
                        <p className="text-muted-foreground mb-3">{person.age} лет</p>
                        <div className="bg-card/80 backdrop-blur-sm p-3 rounded border-l-4 border-red-500">
                          <div className="font-semibold text-red-400">Ситуация:</div>
                          <div className="text-sm text-red-300">{person.situation}</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">История:</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {person.story}
                        </p>
                        
                        <div className="bg-card/80 backdrop-blur-sm p-3 rounded border-l-4 border-red-500">
                          <div className="font-semibold text-red-400">Помощь:</div>
                          <div className="text-sm text-red-300">{person.help_received}</div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="bg-card/80 backdrop-blur-sm p-3 rounded border-l-4 border-red-500 mb-4">
                          <div className="font-semibold text-red-400">Сейчас:</div>
                          <div className="text-sm text-red-300">{person.current_status}</div>
                        </div>
                        
                        <div className="bg-card/80 backdrop-blur-sm p-3 rounded border-l-4 border-red-500">
                          <div className="font-semibold text-red-400">Надежда:</div>
                          <div className="text-sm text-red-300">{person.hope}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* City Services Recovery */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Home className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Восстановление городских служб
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Здравоохранение</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400">{cityServices.healthcare.hospitals}</div>
                      <div className="text-sm text-muted-foreground">больницы</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400">{cityServices.healthcare.clinics}</div>
                      <div className="text-sm text-muted-foreground">поликлиники</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400">{cityServices.healthcare.doctors}</div>
                      <div className="text-sm text-muted-foreground">врачей</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400">{cityServices.healthcare.beds}</div>
                      <div className="text-sm text-muted-foreground">коек</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 mt-6">Образование</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400">{cityServices.education.schools}</div>
                      <div className="text-sm text-muted-foreground">школ</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400">{cityServices.education.students}</div>
                      <div className="text-sm text-muted-foreground">учеников</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400">{cityServices.education.teachers}</div>
                      <div className="text-sm text-muted-foreground">учителей</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400">{cityServices.education.kindergartens}</div>
                      <div className="text-sm text-muted-foreground">детсадов</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Коммунальные услуги</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Водоснабжение:</span>
                        <span className="font-bold">{cityServices.utilities.water_coverage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-red-400 h-3 rounded-full" style={{ width: `${cityServices.utilities.water_coverage}%` }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Электричество:</span>
                        <span className="font-bold">{cityServices.utilities.electricity_coverage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-red-400 h-3 rounded-full" style={{ width: `${cityServices.utilities.electricity_coverage}%` }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Дороги:</span>
                        <span className="font-bold">{cityServices.utilities.cleared_roads}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-red-400 h-3 rounded-full" style={{ width: `${cityServices.utilities.cleared_roads}%` }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">Питание</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400">{cityServices.food.bread_bakeries}</div>
                      <div className="text-sm text-muted-foreground">пекарен</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400">{cityServices.food.food_stores}</div>
                      <div className="text-sm text-muted-foreground">магазинов</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400">{cityServices.food.canteens}</div>
                      <div className="text-sm text-muted-foreground">столовых</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400">{cityServices.food.daily_bread}</div>
                      <div className="text-sm text-muted-foreground">хлеба в день</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Hope and Recovery */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-red-400">
                Первые дни свободы: между болью и надеждой
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-400">Боль утрат</h3>
                  <ul className="space-y-2 text-sm text-red-300">
                    <li>• 150 000 жителей погибли за 3 года оккупации</li>
                    <li>• 75% жилого фонда разрушено</li>
                    <li>• Тысячи семей потеряли кормильцев</li>
                    <li>• Разрушены школы, больницы, заводы</li>
                    <li>• Психологические травмы у детей</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-400">Зерна надежды</h3>
                  <ul className="space-y-2 text-sm text-red-300">
                    <li>• 95 000 жителей встретили освобождение</li>
                    <li>• Армия помогает с питанием и лечением</li>
                    <li>• Дети снова идут в школы</li>
                    <li>• Начинают работать заводы</li>
                    <li>• Возвращается нормальная жизнь</li>
                  </ul>
                </div>
              </div>
              
              <blockquote className="text-xl font-serif italic text-center text-red-400 leading-relaxed">
                «Мы плакали от радости, когда увидели красные звезды. 
                Три года кошмара закончились. Теперь будем восстанавливать 
                родной город. Наши дети будут жить в свободном Минске.»
              </blockquote>
              <cite className="block text-center text-muted-foreground mt-4">
                — Из воспоминаний жительницы Минска, июль 1944
              </cite>
              
              <div className="mt-8 text-center">
                <div className="text-4xl mb-4">🏠💚🌅</div>
                <div className="text-2xl font-bold text-red-400">
                  Минск возрождается из пепла
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={71} />
    </>
  );
};

export default Page71;