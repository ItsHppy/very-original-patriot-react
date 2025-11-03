import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, Star, Trophy, Shield, Heart, Flame, Users, MapPin } from "lucide-react";

// Move static data outside component to prevent re-creation on every render
const heroCities = [
    {
      name: "Минск",
      title: "Город-герой",
      awarded: "26 июня 1974",
      population_1941: 270000,
      population_1944: 95000,
      destruction: 80,
      heroic_deeds: [
        "Героическая оборона в первые дни войны",
        "Массовое партизанское движение",
        "Подпольная борьба в условиях оккупации",
        "Саботаж на предприятиях и железных дорогах"
      ],
      symbols: [
        "Обелиск на площади Победы",
        "Монумент Победы высотой 38 метров",
        "Вечный огонь у памятника",
        "Музей истории Великой Отечественной войны"
      ],
      memory_places: [
        "Мемориальный комплекс «Хатынь»",
        "Парк Победы",
        "Аллея городов-героев",
        "Площадь Независимости"
      ],
      special_significance: "Столица Беларуси, символ стойкости народа",
      liberation_date: "3 июля 1944",
      resistance_period: "1100 дней"
    },
    {
      name: "Брестская крепость",
      title: "Крепость-герой",
      awarded: "8 мая 1965",
      population_1941: 3500,
      population_1944: 0,
      destruction: 85,
      heroic_deeds: [
        "32 дня героической обороны",
        "Первый удар врага принят на себя",
        "Символ несгибаемой воли",
        "Легендарные защитники: Гаврилов, Зубачев, Фомин"
      ],
      symbols: [
        "Монумент «Мужество» высотой 33.5 метра",
        "Вечный огонь в память о защитниках",
        "Музей обороны Брестской крепости",
        "Руины казарм и укреплений"
      ],
      memory_places: [
        "Холмские ворота с пробоинами",
        "Белый дворец",
        "Свято-Николаевский гарнизонный собор",
        "Казармы 333-го полка"
      ],
      special_significance: "Первый рубеж обороны, символ начала войны",
      liberation_date: "28 июля 1944",
      resistance_period: "32 дня обороны + 1133 дня в памяти"
    }
  ];

const otherHeroCities = [
    {
      name: "Могилёв",
      status: "Претендент на звание города-героя",
      heroism: "23 дня героической обороны в 1941 году",
      significance: "Важный узел сопротивления",
      liberation: "28 июня 1944"
    },
    {
      name: "Витебск",
      status: "Город воинской славы (предлагается)",
      heroism: "Партизанский край, первый освобожденный город",
      significance: "Символ начала освобождения",
      liberation: "26 июня 1944"
    },
    {
      name: "Гомель",
      status: "Город с богатой военной историей",
      heroism: "Крупный центр партизанского движения",
      significance: "Важный железнодорожный узел",
      liberation: "26 ноября 1943"
    },
    {
      name: "Гродно",
      status: "Древний город-воин",
      heroism: "800 лет военной истории, стойкость в ВОВ",
      significance: "Культурный центр, пограничный город",
      liberation: "16 июля 1944"
    }
  ];

const heroStatistics = {
    total_heroes: 446,
    posthumous: 299,
    during_liberation: 147,
    partisans: 87,
    underground: 34,
    civilians: 26,
    medals_awarded: 234000,
    orders_awarded: 89000
  };

const memorialComplexes = [
    {
      name: "Хатынь",
      type: "Мемориальный комплекс",
      significance: "Символ трагедии белорусских деревень",
      victims: 149,
      destroyed_villages: 628,
      message: "Память о сожженных деревнях"
    },
    {
      name: "Тростенец",
      type: "Мемориал жертвам геноцида",
      significance: "Место массового уничтожения",
      victims: 206500,
      destroyed_villages: 0,
      message: "Память о жертвах Холокоста"
    },
    {
      name: "Курган Славы",
      type: "Монумент воинской славы",
      significance: "Символ освобождения Беларуси",
      victims: 0,
      destroyed_villages: 0,
      message: "Слава освободителям"
    },
    {
      name: "Памятник Победы",
      type: "Обелиск в Минске",
      significance: "Центральный памятник столицы",
      victims: 0,
      destroyed_villages: 0,
      message: "Никто не забыт, ничто не забыто"
    }
  ];

const modernHonors = {
    schools_named: 1247,
    streets_named: 892,
    monuments_erected: 2340,
    museums_created: 156,
    books_written: 3400,
    films_made: 89,
    annual_ceremonies: 365,
    veterans_alive: 1200
  };

const Page76 = () => {
  const [selectedCity, setSelectedCity] = useState<number>(0);
  const [animateAwards, setAnimateAwards] = useState<boolean>(true);
  const [heroCount, setHeroCount] = useState<number>(446);

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 76 • ВЕЧНАЯ СЛАВА
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Города-герои Беларуси
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Звания и награды, увековечившие подвиг белорусского народа
              </p>
            </div>

            {/* Heroes Counter */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-6 mb-12 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Star className="w-8 h-8 text-primary" />
                <div className="text-4xl font-bold text-foreground">{heroCount}</div>
                <div className="text-2xl text-muted-foreground">Героев Советского Союза</div>
              </div>
              <div className="text-lg text-muted-foreground">
                Белорусы, удостоенные высшей награды Родины
              </div>
            </Card>

            {/* Main Hero Cities */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Города-герои и крепости-герои
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {heroCities.map((city, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCity(index)}
                    className={`p-4 rounded-lg border-2 ${
                      selectedCity === index
                        ? 'border-primary bg-card text-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    <Crown className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-semibold mb-1">{city.name}</div>
                    <div className="text-sm">{city.title}</div>
                    <div className="text-xs text-muted-foreground">{city.awarded}</div>
                  </button>
                ))}
              </div>

              <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {heroCities[selectedCity].name}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="default" className="bg-primary/20 text-primary">
                      {heroCities[selectedCity].title}
                    </Badge>
                    <Badge variant="outline">
                      Награжден: {heroCities[selectedCity].awarded}
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    {heroCities[selectedCity].special_significance}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Героические подвиги:</h4>
                    <ul className="space-y-2">
                      {heroCities[selectedCity].heroic_deeds.map((deed, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Trophy className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{deed}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Памятные места:</h4>
                    <ul className="space-y-2">
                      {heroCities[selectedCity].memory_places.map((place, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{place}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-card p-3 rounded border-l-4 border-primary">
                    <div className="font-semibold text-accent">Население 1941:</div>
                    <div className="text-sm text-muted-foreground">
                      {heroCities[selectedCity].population_1941.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="bg-card p-3 rounded border-l-4 border-primary">
                    <div className="font-semibold text-accent">Выжило 1944:</div>
                    <div className="text-sm text-muted-foreground">
                      {heroCities[selectedCity].population_1944.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="bg-card p-3 rounded border-l-4 border-primary">
                    <div className="font-semibold text-accent">Разрушения:</div>
                    <div className="text-sm text-muted-foreground">
                      {heroCities[selectedCity].destruction}%
                    </div>
                  </div>
                  
                  <div className="bg-card p-3 rounded border-l-4 border-primary">
                    <div className="font-semibold text-accent">Освобожден:</div>
                    <div className="text-sm text-muted-foreground">
                      {heroCities[selectedCity].liberation_date}
                    </div>
                  </div>
                </div>
              </Card>
            </Card>

            {/* Other Hero Cities */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Другие города воинской славы
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {otherHeroCities.map((city, index) => (
                  <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        <Star className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground">{city.name}</h3>
                        <Badge variant="outline" className="mt-1">{city.status}</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold text-accent">Героизм:</div>
                        <div className="text-sm text-muted-foreground">{city.heroism}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-accent">Значение:</div>
                        <div className="text-sm text-muted-foreground">{city.significance}</div>
                      </div>
                      
                      <div className="bg-card p-3 rounded border-l-4 border-primary">
                        <div className="font-semibold text-accent">Освобожден:</div>
                        <div className="text-sm text-muted-foreground">{city.liberation}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Hero Statistics */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Trophy className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Герои Беларуси в цифрах
                </h2>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {heroStatistics.total_heroes}
                  </div>
                  <div className="text-sm text-muted-foreground">Героев Советского Союза</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {heroStatistics.posthumous}
                  </div>
                  <div className="text-sm text-muted-foreground">посмертно</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {heroStatistics.during_liberation}
                  </div>
                  <div className="text-sm text-muted-foreground">за освобождение</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {heroStatistics.partisans}
                  </div>
                  <div className="text-sm text-muted-foreground">партизан</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-4 bg-card/60 backdrop-blur-sm border-border">
                  <h3 className="font-bold mb-3 text-accent">Ордена и медали</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ордена:</span>
                      <span className="font-bold text-accent">{heroStatistics.orders_awarded.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Медали:</span>
                      <span className="font-bold text-accent">{heroStatistics.medals_awarded.toLocaleString()}</span>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 bg-card/60 backdrop-blur-sm border-border">
                  <h3 className="font-bold mb-3 text-accent">Категории героев</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Партизаны:</span>
                      <span className="font-bold text-accent">{heroStatistics.partisans}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Подпольщики:</span>
                      <span className="font-bold text-accent">{heroStatistics.underground}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Мирные жители:</span>
                      <span className="font-bold text-accent">{heroStatistics.civilians}</span>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 bg-card/60 backdrop-blur-sm border-border">
                  <h3 className="font-bold mb-3 text-accent">Современность</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Живых ветеранов:</span>
                      <span className="font-bold text-accent">{modernHonors.veterans_alive}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Памятников:</span>
                      <span className="font-bold text-accent">{modernHonors.monuments_erected.toLocaleString()}</span>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Memorial Complexes */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Heart className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Мемориальные комплексы
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {memorialComplexes.map((memorial, index) => (
                  <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-muted-foreground">
                        <Flame className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{memorial.name}</h3>
                        <Badge variant="outline" className="border-gray-600 text-muted-foreground">{memorial.type}</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold text-muted-foreground">Значение:</div>
                        <div className="text-sm text-primary">{memorial.significance}</div>
                      </div>
                      
                      {memorial.victims > 0 && (
                        <div>
                          <div className="font-semibold text-muted-foreground">Жертвы:</div>
                          <div className="text-sm font-bold text-accent">
                            {memorial.victims.toLocaleString()} человек
                          </div>
                        </div>
                      )}
                      
                      {memorial.destroyed_villages > 0 && (
                        <div>
                          <div className="font-semibold text-muted-foreground">Деревни:</div>
                          <div className="text-sm font-bold text-accent">
                            {memorial.destroyed_villages} сожжено
                          </div>
                        </div>
                      )}
                      
                      <div className="bg-gray-700 p-3 rounded border-l-4 border-gray-500">
                        <div className="font-semibold text-accent">Послание:</div>
                        <div className="text-sm text-muted-foreground">{memorial.message}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Modern Honors */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Память в современности
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-muted-foreground mb-2">
                    {modernHonors.schools_named.toLocaleString()}
                  </div>
                  <div className="text-sm text-primary">школ носят имена героев</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-muted-foreground mb-2">
                    {modernHonors.streets_named.toLocaleString()}
                  </div>
                  <div className="text-sm text-primary">улиц названо в честь героев</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-muted-foreground mb-2">
                    {modernHonors.museums_created.toLocaleString()}
                  </div>
                  <div className="text-sm text-primary">музеев войны</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-muted-foreground mb-2">
                    {modernHonors.books_written.toLocaleString()}
                  </div>
                  <div className="text-sm text-primary">книг написано</div>
                </div>
              </div>
            </Card>

            {/* Eternal Glory */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-accent">
                Вечная слава героям Беларуси
              </h2>
              
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🏆⭐🎖️</div>
                <div className="text-2xl font-bold text-accent mb-4">
                  Героизм белорусского народа
                </div>
                <p className="text-lg text-primary">
                  Подвиг, который невозможно забыть и нельзя повторить
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Crown className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-accent">Города-герои</h3>
                  <p className="text-sm text-primary">
                    Минск и Брестская крепость — символы стойкости
                  </p>
                </div>
                
                <div className="text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-accent">446 Героев</h3>
                  <p className="text-sm text-primary">
                    Сыны и дочери Беларуси — Герои Советского Союза
                  </p>
                </div>
                
                <div className="text-center">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-accent">Вечная память</h3>
                  <p className="text-sm text-primary">
                    Их подвиг живет в сердцах потомков
                  </p>
                </div>
              </div>
              
              <blockquote className="text-xl font-serif italic text-center text-muted-foreground leading-relaxed">
                «Звания городов-героев и Героев Советского Союза — это не просто награды. 
                Это свидетельство того, что подвиг белорусского народа в Великой Отечественной войне 
                навсегда останется в памяти человечества.»
              </blockquote>
              <cite className="block text-center text-muted-foreground mt-4">
                — Из речи на торжественном собрании в честь Дня Победы
              </cite>
              
              <div className="mt-8 text-center">
                <div className="text-2xl font-bold text-accent">
                  СЛАВА ГЕРОЯМ! ПАМЯТЬ ВЕЧНА!
                </div>
                <div className="text-lg text-muted-foreground mt-2">
                  Их подвиг — наша гордость, их память — наш долг
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={76} />
    </>
  );
};

export default Page76;