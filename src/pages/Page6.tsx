import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import occupation from "@/assets/occupation.jpg";
import { useEffect, useState } from "react";

const Page6 = () => {
  const [occupiedPercent, setOccupiedPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setOccupiedPercent(prev => {
        if (prev >= 80) {
          clearInterval(timer);
          return 80;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const cities = [
    { name: "Минск", date: "28 июня 1941", days: 6 },
    { name: "Витебск", date: "11 июля 1941", days: 19 },
    { name: "Могилёв", date: "27 июля 1941", days: 35 },
    { name: "Гомель", date: "19 августа 1941", days: 58 },
    { name: "Полоцк", date: "16 июля 1941", days: 24 },
    { name: "Бобруйск", date: "28 июня 1941", days: 6 }
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
                  СТРАНИЦА 6 • ТЕМНЫЕ ДНИ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Оккупация
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Беларусь под властью захватчиков. Три года ужаса и сопротивления.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={occupation}
                alt="Оккупированный город"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-vintage-paper/80 font-serif italic">
                  Оккупированная Беларусь — время испытаний для народа
                </p>
              </div>
            </div>

            {/* Occupation Progress */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Захват территории
              </h2>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-muted-foreground">
                    Территория Беларуси под оккупацией
                  </span>
                  <span className="text-2xl font-bold text-destructive">{occupiedPercent}%</span>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-destructive to-destructive/60 transition-all duration-500"
                    style={{ width: `${occupiedPercent}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  К концу августа 1941 года практически вся территория Беларуси была оккупирована
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {cities.map((city, index) => (
                  <div 
                    key={city.name}
                    className="border-l-4 border-destructive pl-4 py-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="font-serif font-semibold text-lg">{city.name}</h3>
                    <p className="text-sm text-destructive">{city.date}</p>
                    <p className="text-xs text-muted-foreground">
                      Оккупирован на {city.days}-й день войны
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Occupation Regime */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                "Новый порядок"
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card/60 backdrop-blur-sm border-border p-6">
                  <h3 className="text-lg font-serif font-semibold mb-3 text-destructive">
                    Геноцид
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Массовые расстрелы мирного населения. Создание гетто для евреев. 
                    План "Ост" предусматривал уничтожение или выселение 75% белорусов.
                  </p>
                </Card>

                <Card className="bg-card/60 backdrop-blur-sm border-border p-6">
                  <h3 className="text-lg font-serif font-semibold mb-3 text-destructive">
                    Принудительный труд
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Более 380 000 человек угнаны в Германию на рабские работы. 
                    Каторжный труд на заводах и фермах рейха. Многие не вернулись.
                  </p>
                </Card>

                <Card className="bg-card/60 backdrop-blur-sm border-border p-6">
                  <h3 className="text-lg font-serif font-semibold mb-3 text-destructive">
                    Террор и репрессии
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    За малейшее сопротивление — расстрел. Публичные казни. 
                    Коллективная ответственность — за одного партизана сжигалась целая деревня.
                  </p>
                </Card>
              </div>
            </div>

            {/* Statistics */}
            <Card className="bg-gradient-to-br from-destructive/10 to-primary/10 border-l-4 border-destructive p-8 mb-12">
              <h3 className="text-2xl font-serif font-bold mb-6 text-accent">
                Цифры оккупации
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-destructive mb-2">1 100 дней</div>
                  <div className="text-sm text-muted-foreground">длилась оккупация</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-destructive mb-2">209</div>
                  <div className="text-sm text-muted-foreground">лагерей смерти</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-destructive mb-2">5 295</div>
                  <div className="text-sm text-muted-foreground">населенных пунктов уничтожено</div>
                </div>
              </div>
            </Card>

            {/* Hope */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "Но даже в самые темные дни оккупации белорусский народ не сломился. 
                В лесах уже формировались партизанские отряды..."
              </blockquote>
              <p className="text-sm text-muted-foreground">
                Продолжение на следующей странице →
              </p>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={6} />
    </>
  );
};

export default Page6;
