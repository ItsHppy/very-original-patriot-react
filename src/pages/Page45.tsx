import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Users, Baby, Calendar, Volume2 } from "lucide-react";

const Page45 = () => {
  const [selectedTourPoint, setSelectedTourPoint] = useState<number>(0);
  const [bellSound, setBellSound] = useState<boolean>(false);
  const [currentBell, setCurrentBell] = useState<number>(0);

  // Звук колоколов каждые 30 секунд
  useEffect(() => {
    const bellTimer = setInterval(() => {
      setBellSound(true);
      setCurrentBell(prev => (prev + 1) % 3);
      setTimeout(() => setBellSound(false), 3000);
    }, 30000);

    return () => clearInterval(bellTimer);
  }, []);

  const tourPoints = [
    {
      id: 0,
      name: "Входная арка",
      description: "Символические ворота в память о погибших. Здесь начинается путь скорби и памяти.",
      image: "/images/khatyn-entrance.jpg"
    },
    {
      id: 1,
      name: "Скульптура «Непокоренный человек»",
      description: "Иосиф Каминский с телом погибшего сына. Единственный выживший в трагедии.",
      image: "/images/khatyn-monument.jpg"
    },
    {
      id: 2,
      name: "Место сожженной деревни",
      description: "26 дворов превращены в мемориальные комплексы. Каждый рассказывает свою историю.",
      image: "/images/khatyn-houses.jpg"
    },
    {
      id: 3,
      name: "Вечный огонь",
      description: "Огонь памяти, который никогда не угасает. Символ вечной памяти о погибших.",
      image: "/images/khatyn-flame.jpg"
    },
    {
      id: 4,
      name: "Кладбище деревень",
      description: "185 могил деревень, которые так и не возродились после войны.",
      image: "/images/khatyn-cemetery.jpg"
    },
    {
      id: 5,
      name: "Колокола памяти",
      description: "Звон колоколов напоминает о трагедии каждые 30 секунд.",
      image: "/images/khatyn-bells.jpg"
    }
  ];

  const victims = [
    { name: "Анна Барановская", age: "29 лет", status: "мать" },
    { name: "Вера Барановская", age: "7 лет", status: "ребенок" },
    { name: "Саша Барановский", age: "9 лет", status: "ребенок" },
    { name: "Николай Иванович", age: "67 лет", status: "дед" },
    { name: "Мария Федотова", age: "3 года", status: "ребенок" },
    { name: "Степан Каминский", age: "12 лет", status: "сын Иосифа" },
    // Можно добавить больше имен...
  ];

  const statistics = [
    {
      number: "149",
      label: "человек сожжено",
      description: "Все жители деревни",
      icon: <Users className="w-8 h-8" />
    },
    {
      number: "75",
      label: "детей погибло",
      description: "Половина жертв - дети",
      icon: <Baby className="w-8 h-8" />
    },
    {
      number: "26",
      label: "дворов сожжено",
      description: "Вся деревня уничтожена",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      number: "1",
      label: "выживший",
      description: "Иосиф Каминский",
      icon: <Bell className="w-8 h-8" />
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
                  СТРАНИЦА 45 • ТРАГЕДИЯ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Хатынь
              </h1>
              
              <div className="flex items-center justify-center gap-4 text-xl text-muted-foreground">
                <Calendar className="w-6 h-6" />
                <span>22 марта 1943 года</span>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                День, который стал символом трагедии белорусского народа
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {statistics.map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="text-destructive mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-destructive mb-2">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </Card>
              ))}
            </div>

            {/* Virtual Tour */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Виртуальный тур по мемориалу
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {tourPoints.map((point, index) => (
                  <Button
                    key={index}
                    variant={selectedTourPoint === index ? "default" : "outline"}
                    className="h-auto p-4 flex flex-col items-start text-left"
                    onClick={() => setSelectedTourPoint(index)}
                  >
                    <span className="font-semibold text-sm">{point.name}</span>
                  </Button>
                ))}
              </div>
              
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  {tourPoints[selectedTourPoint].name}
                </h3>
                <div className="bg-muted rounded-lg h-64 mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">360° Панорама места</span>
                </div>
                <p className="text-muted-foreground">
                  {tourPoints[selectedTourPoint].description}
                </p>
              </div>
            </Card>

            {/* Иосиф Каминский */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                История Иосифа Каминского
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-muted rounded-lg h-64 mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Скульптура "Непокоренный человек"</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-destructive pl-4">
                    <h3 className="font-bold text-lg mb-2">Единственный выживший</h3>
                    <p className="text-muted-foreground">
                      56-летний кузнец Иосиф Каминский потерял сознание от ран и был засыпан 
                      телами односельчан. Очнувшись ночью, он нашел своего раненого сына Адама.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-destructive pl-4">
                    <h3 className="font-bold text-lg mb-2">Последние минуты сына</h3>
                    <p className="text-muted-foreground">
                      Мальчик умер на руках у отца. Эта сцена запечатлена в знаменитой 
                      скульптуре Селиханова, ставшей символом горя всех матерей и отцов войны.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-destructive pl-4">
                    <h3 className="font-bold text-lg mb-2">Свидетель трагедии</h3>
                    <p className="text-muted-foreground">
                      Иосиф Каминский стал живым свидетелем зверства. Его показания 
                      легли в основу судебного процесса над военными преступниками.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Колокола памяти */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Bell className={`w-8 h-8 ${bellSound ? 'text-primary animate-pulse' : 'text-muted-foreground'}`} />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Колокола памяти
                </h2>
                {bellSound && (
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-primary animate-pulse" />
                    <span className="text-sm text-primary animate-pulse">Звон колоколов</span>
                  </div>
                )}
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[0, 1, 2].map((bell, index) => (
                  <div 
                    key={index}
                    className={`text-center p-6 rounded-lg transition-all duration-300 ${
                      bellSound && currentBell === index 
                        ? 'bg-primary/10 border-2 border-primary' 
                        : 'bg-muted/50'
                    }`}
                  >
                    <Bell className={`w-12 h-12 mx-auto mb-4 ${
                      bellSound && currentBell === index 
                        ? 'text-primary animate-swing' 
                        : 'text-muted-foreground'
                    }`} />
                    <h3 className="font-bold mb-2">Колокол {index + 1}</h3>
                    <p className="text-sm text-muted-foreground">
                      {index === 0 && "Скорбь матерей"}
                      {index === 1 && "Память детей"}
                      {index === 2 && "Вечная память"}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground">
                  Каждые 30 секунд звучит колокольный звон - 
                  напоминание о 149 жизнях, оборвавшихся в этот страшный день
                </p>
              </div>
            </Card>

            {/* Список погибших */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Они не должны быть забыты
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {victims.map((victim, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-destructive rounded-full flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold">{victim.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {victim.age} • {victim.status}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Badge variant="secondary" className="mb-4">
                  Показано 6 из 149 имен
                </Badge>
                <p className="text-muted-foreground">
                  Каждое имя - целая жизнь, мечты, надежды. 
                  Полный список всех 149 погибших высечен на мемориальных плитах.
                </p>
              </div>
            </Card>

            {/* Memorial Quote */}
            <Card className="bg-gradient-to-br from-destructive/10 to-muted/10 border-l-4 border-destructive p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "Люди добрые, помните: любили мы жизнь, и Родину нашу, и вас, дорогие. 
                Мы сгорели живыми в огне. Наша просьба ко всем: пусть скорбь и печаль 
                обернутся в мужество ваше и силу, чтобы смогли вы утвердить навечно мир и покой на земле."
              </blockquote>
              <cite className="text-muted-foreground">— Надпись на мемориальной плите в Хатыни</cite>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={45} />
    </>
  );
};

export default Page45;