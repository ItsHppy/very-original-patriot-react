import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Flame, Users, Home, TrendingDown, Clock } from "lucide-react";

// Move static data outside component to prevent re-creation on every render
const casualties = {
    bagration: {
      soviet: {
        killed: 180000,
        wounded: 590000,
        total: 770000,
        description: "Потери Красной Армии в операции Багратион"
      },
      german: {
        killed: 200000,
        wounded: 50000,
        prisoners: 150000,
        total: 400000,
        description: "Потери группы армий «Центр»"
      }
    },
    occupation: {
      civilian: 2200000,
      destroyed_settlements: 9200,
      burned_villages: 628,
      families_affected: 600000,
      description: "Общие потери за годы оккупации"
    }
  };

const destroyedInfrastructure = [
    {
      category: "Промышленность",
      icon: <Flame className="w-6 h-6" />,
      destroyed: 85,
      items: [
        "10 700 промышленных предприятий",
        "1570 городов и поселков",
        "90% энергетических мощностей",
        "Практически вся тяжелая промышленность"
      ],
      recoveryTime: "15-20 лет",
      color: "red"
    },
    {
      category: "Сельское хозяйство", 
      icon: <Home className="w-6 h-6" />,
      destroyed: 70,
      items: [
        "628 деревень сожжено дотла",
        "2.2 млн голов скота уничтожено",
        "40% посевных площадей выведено из оборота",
        "Тысячи сельхозорудий вывезено"
      ],
      recoveryTime: "10-12 лет",
      color: "orange"
    },
    {
      category: "Транспорт",
      icon: <TrendingDown className="w-6 h-6" />,
      destroyed: 95,
      items: [
        "7200 км железных дорог",
        "15 000 мостов всех типов",
        "90% подвижного состава",
        "Все крупные транспортные узлы"
      ],
      recoveryTime: "8-10 лет", 
      color: "blue"
    },
    {
      category: "Культура и образование",
      icon: <Users className="w-6 h-6" />,
      destroyed: 80,
      items: [
        "5295 школ",
        "620 лечебных учреждений", 
        "155 театров и клубов",
        "Сотни памятников архитектуры"
      ],
      recoveryTime: "12-15 лет",
      color: "purple"
    }
  ];

const personalStories = [
    {
      title: "Семья Ковалевых из Минска",
      story: "Из семьи в 7 человек выжили только мать и младший сын. Отец погиб на фронте, старший сын — в партизанах, дочь угнана в Германию. Двое детей умерли от голода в гетто.",
      losses: "5 из 7 членов семьи",
      category: "Семейные потери"
    },
    {
      title: "Деревня Хатынь",
      story: "149 жителей сожжены заживо. Выжил только Иосиф Каминский, укрывший своего сына. Мальчик умер на руках отца от ожогов. Деревня была стерта с лица земли.",
      losses: "149 из 149 жителей",
      category: "Карательные операции"
    },
    {
      title: "Учительница Мария Семеновна",
      story: "Потеряла мужа в первые дни войны, троих сыновей — в разное время оккупации. Одного расстреляли за связь с партизанами, двоих угнали в Германию. Сама выжила чудом.",
      losses: "Вся семья",
      category: "Педагогические потери"
    },
    {
      title: "Рабочий завода Петр Николаевич",
      story: "Остался инвалидом после освобождения Минска. Потерял ногу при разминировании завода. Жена погибла от голода, двое детей умерли от болезней. Восстанавливал завод один.",
      losses: "Семья и здоровье",
      category: "Трудовые потери"
    }
  ];

const recoveryStats = [
    {
      period: "1944-1950",
      description: "Первое послевоенное восстановление",
      achievements: [
        "Восстановлено 40% промышленности",
        "Отстроено 1200 школ",
        "Возвращено к жизни 2000 деревень",
        "Восстановлено 3000 км железных дорог"
      ],
      challenges: [
        "Нехватка рабочих рук",
        "Отсутствие техники",
        "Разрушенная инфраструктура", 
        "Минные поля"
      ]
    },
    {
      period: "1950-1960",
      description: "Период активного строительства",
      achievements: [
        "Восстановлено 80% довоенного уровня",
        "Построены новые заводы",
        "Полностью восстановлено сельское хозяйство",
        "Открыто 3000 новых школ"
      ],
      challenges: [
        "Модернизация оборудования",
        "Подготовка кадров",
        "Урбанизация",
        "Демографические проблемы"
      ]
    }
  ];

const Page77 = () => {
  const [animateCounters, setAnimateCounters] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('total');

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCounters(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num: number, animate: boolean = true) => {
    if (!animate || !animateCounters) return '0';
    return num.toLocaleString();
  };

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 77 • ПАМЯТЬ О ЖЕРТВАХ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Цена победы
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                «Никто не забыт, ничто не забыто» — о тех, кто отдал жизнь за свободу Беларуси
              </p>
            </div>

            {/* Main Casualties Statistics */}
            <Card className="bg-gradient-to-r bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-accent">
                Потери в операции «Багратион»
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Soviet Losses */}
                <Card className="p-6 bg-card/60 backdrop-blur-sm border-border border-red-200">
                  <h3 className="text-xl font-bold mb-4 text-red-800 text-center">Красная Армия</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">
                        {formatNumber(casualties.bagration.soviet.killed)}
                      </div>
                      <div className="text-sm text-red-700">погибших</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-400 mb-2">
                        {formatNumber(casualties.bagration.soviet.wounded)}
                      </div>
                      <div className="text-sm text-red-300">раненых</div>
                    </div>
                    
                    <div className="bg-card/60 backdrop-blur-sm border-border p-4 rounded-lg border-l-4 border-red-500">
                      <div className="font-bold text-red-800">Общие потери:</div>
                      <div className="text-3xl font-bold text-red-600">
                        {formatNumber(casualties.bagration.soviet.total)}
                      </div>
                      <div className="text-sm text-red-700">человек за 2 месяца боев</div>
                    </div>
                  </div>
                </Card>

                {/* German Losses */}
                <Card className="p-6 bg-card/60 backdrop-blur-sm border-border border-gray-600">
                  <h3 className="text-xl font-bold mb-4 text-accent text-center">Группа армий «Центр»</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-2xl font-bold text-muted-foreground">
                          {formatNumber(casualties.bagration.german.killed)}
                        </div>
                        <div className="text-xs text-muted-foreground">убитых</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-muted-foreground">
                          {formatNumber(casualties.bagration.german.wounded)}
                        </div>
                        <div className="text-xs text-muted-foreground">раненых</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-muted-foreground">
                          {formatNumber(casualties.bagration.german.prisoners)}
                        </div>
                        <div className="text-xs text-muted-foreground">пленных</div>
                      </div>
                    </div>
                    
                    <div className="bg-card/60 backdrop-blur-sm border-border p-4 rounded-lg border-l-4 border-gray-500">
                      <div className="font-bold text-accent">Общие потери:</div>
                      <div className="text-3xl font-bold text-muted-foreground">
                        {formatNumber(casualties.bagration.german.total)}
                      </div>
                      <div className="text-sm text-muted-foreground">группа армий уничтожена</div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="text-center bg-card/60 backdrop-blur-sm border-border p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Соотношение потерь</h3>
                <div className="text-lg text-muted-foreground">
                  На каждого погибшего немецкого солдата приходилось 
                  <span className="font-bold text-red-600 mx-2">0.9</span> 
                  потерь среди советских войск — 
                  <span className="font-bold">исключительно низкое соотношение для наступательной операции</span>
                </div>
              </div>
            </Card>

            {/* Civilian Casualties */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Heart className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Потери мирного населения
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {formatNumber(casualties.occupation.civilian)}
                  </div>
                  <div className="text-sm text-muted-foreground">мирных жителей погибло</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">
                    {formatNumber(casualties.occupation.destroyed_settlements)}
                  </div>
                  <div className="text-sm text-muted-foreground">населенных пунктов разрушено</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {formatNumber(casualties.occupation.burned_villages)}
                  </div>
                  <div className="text-sm text-muted-foreground">деревень сожжено с людьми</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {formatNumber(casualties.occupation.families_affected)}
                  </div>
                  <div className="text-sm text-muted-foreground">семей потеряли кормильцев</div>
                </div>
              </div>
              
              <div className="bg-card/60 backdrop-blur-sm border-border p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="font-bold text-red-800 mb-3">Демографическая катастрофа</h3>
                <p className="text-red-700 leading-relaxed">
                  Беларусь потеряла каждого четвертого жителя. Довоенное население в 10.6 млн человек 
                  сократилось до 7.7 млн к 1945 году. Это одни из самых высоких относительных потерь 
                  среди всех стран во Второй мировой войне.
                </p>
              </div>
            </Card>

            {/* Destroyed Infrastructure */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Flame className="w-8 h-8 text-orange-500" />
                <h2 className="text-3xl font-serif font-bold text-red-400">
                  Разрушенная инфраструктура
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {destroyedInfrastructure.map((category, index) => (
                  <Card key={index} className="p-6  ">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-${category.color}-100 rounded-full flex items-center justify-center text-${category.color}-600`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{category.category}</h3>
                        <Badge variant="destructive" className="text-sm">
                          {category.destroyed}% уничтожено
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Масштаб разрушений:</h4>
                      <ul className="space-y-1">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className={`w-2 h-2 bg-${category.color}-500 rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-card p-3 rounded border-l-4 border-red-500">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-400" />
                        <span className="font-semibold text-red-400">Время восстановления:</span>
                      </div>
                      <div className="text-sm text-red-300">{category.recoveryTime}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Personal Stories */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-red-400">
                Личные истории потерь
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {personalStories.map((story, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-br bg-card/80 backdrop-blur-sm border-border">
                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-2">{story.title}</h3>
                      <Badge variant="outline" className="mb-3">{story.category}</Badge>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {story.story}
                    </p>
                    
                    <div className="bg-card p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-accent">Потери:</div>
                      <div className="text-muted-foreground">{story.losses}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Recovery Process */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-red-400">
                Долгий путь восстановления
              </h2>
              
              <div className="space-y-8">
                {recoveryStats.map((period, index) => (
                  <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="default" className="bg-red-600">{period.period}</Badge>
                      <h3 className="text-xl font-bold">{period.description}</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-red-400">Достижения:</h4>
                        <ul className="space-y-2">
                          {period.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-red-800">Трудности:</h4>
                        <ul className="space-y-2">
                          {period.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Memorial Message */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 text-center">
              <h2 className="text-3xl font-serif font-bold mb-6 text-accent">
                Вечная память
              </h2>
              
              <div className="max-w-4xl mx-auto">
                <blockquote className="text-2xl font-serif italic text-muted-foreground mb-6 leading-relaxed">
                  «Мы победили, но какой ценой... Каждая семья понесла потери. 
                  Каждый дом хранит память о погибших. Наш долг — помнить их имена, 
                  рассказывать их истории, хранить их подвиг.»
                </blockquote>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-card/60 backdrop-blur-sm border-border p-6 rounded-lg">
                    <div className="text-3xl mb-3">🕯️</div>
                    <div className="font-bold text-accent mb-2">Помним</div>
                    <div className="text-sm text-muted-foreground">
                      Каждого погибшего, каждую жертву, каждый подвиг
                    </div>
                  </div>
                  
                  <div className="bg-card/60 backdrop-blur-sm border-border p-6 rounded-lg">
                    <div className="text-3xl mb-3">📚</div>
                    <div className="font-bold text-accent mb-2">Изучаем</div>
                    <div className="text-sm text-muted-foreground">
                      Историю войны, чтобы она никогда не повторилась
                    </div>
                  </div>
                  
                  <div className="bg-card/60 backdrop-blur-sm border-border p-6 rounded-lg">
                    <div className="text-3xl mb-3">🌟</div>
                    <div className="font-bold text-accent mb-2">Передаем</div>
                    <div className="text-sm text-muted-foreground">
                      Память о войне будущим поколениям
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-xl font-bold text-accent">
                Никто не забыт, ничто не забыто
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={77} />
    </>
  );
};

export default Page77;