import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import gastelloPlane from "@/assets/gastello-plane.jpg";
import { Plane } from "lucide-react";

const Page5 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-honor-gold/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-honor-gold tracking-wider">
                  СТРАНИЦА 5 • ПЕРВЫЙ ПОДВИГ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Николай Гастелло
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                26 июня 1941 года. Первый огненный таран. Бессмертный подвиг.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={gastelloPlane}
                alt="Самолет ДБ-3"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-vintage-paper/80 font-serif italic">
                  Бомбардировщик ДБ-3 — на таком самолете летал экипаж Гастелло
                </p>
              </div>
            </div>

            {/* Story Timeline */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                26 июня 1941 года
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Plane className="h-5 w-5 text-primary" />
                    <div className="text-sm text-primary font-semibold">Утро</div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Боевое задание
                  </h3>
                  <p className="text-muted-foreground">
                    Экипаж капитана Николая Гастелло вылетает на бомбардировку скопления вражеской 
                    техники и войск на дороге Молодечно-Радошковичи в Белоруссии.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6 py-2">
                  <div className="text-sm text-accent font-semibold mb-2">Над целью</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Попадание
                  </h3>
                  <p className="text-muted-foreground">
                    Самолет попадает под плотный зенитный огонь. Снаряд пробивает топливный бак. 
                    Начинается пожар. Самолет объят пламенем. Путь назад отрезан.
                  </p>
                </div>

                <div className="border-l-4 border-honor-gold pl-6 py-2">
                  <div className="text-sm text-honor-gold font-semibold mb-2">Решающий момент</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Огненный таран
                  </h3>
                  <p className="text-muted-foreground">
                    Гастелло направляет горящий самолет на колонну вражеских машин с цистернами топлива. 
                    Мощный взрыв уничтожает десятки единиц техники и сотни солдат противника. 
                    Весь экипаж погибает смертью героев.
                  </p>
                </div>
              </div>
            </Card>

            {/* Crew Members */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Экипаж героев
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                <Card className="bg-card/60 backdrop-blur-sm border-border p-6 text-center">
                  <div className="inline-block px-4 py-2 bg-honor-gold/20 rounded-full mb-4">
                    <span className="text-honor-gold font-bold text-lg">★</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-2 text-primary">
                    Николай Гастелло
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Командир экипажа</p>
                  <p className="text-xs text-muted-foreground">26 лет</p>
                </Card>

                <Card className="bg-card/60 backdrop-blur-sm border-border p-6 text-center">
                  <div className="inline-block px-4 py-2 bg-honor-gold/20 rounded-full mb-4">
                    <span className="text-honor-gold font-bold text-lg">★</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-2 text-primary">
                    Анатолий Бурденюк
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Штурман</p>
                  <p className="text-xs text-muted-foreground">22 года</p>
                </Card>

                <Card className="bg-card/60 backdrop-blur-sm border-border p-6 text-center">
                  <div className="inline-block px-4 py-2 bg-honor-gold/20 rounded-full mb-4">
                    <span className="text-honor-gold font-bold text-lg">★</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-2 text-primary">
                    Алексей Калинин
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Стрелок-радист</p>
                  <p className="text-xs text-muted-foreground">20 лет</p>
                </Card>

                <Card className="bg-card/60 backdrop-blur-sm border-border p-6 text-center">
                  <div className="inline-block px-4 py-2 bg-honor-gold/20 rounded-full mb-4">
                    <span className="text-honor-gold font-bold text-lg">★</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-2 text-primary">
                    Григорий Скоробогатый
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Стрелок-бомбардир</p>
                  <p className="text-xs text-muted-foreground">21 год</p>
                </Card>
              </div>
            </div>

            {/* Legacy */}
            <Card className="bg-gradient-to-br from-primary/10 to-honor-gold/10 border-l-4 border-honor-gold p-8">
              <div className="text-center">
                <div className="inline-block px-6 py-3 bg-honor-gold/20 rounded-full mb-4">
                  <span className="text-honor-gold font-bold text-2xl">★</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">
                  Герой Советского Союза
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  26 июля 1941 года Николаю Францевичу Гастелло было присвоено звание 
                  Героя Советского Союза (посмертно). Его подвиг стал символом мужества 
                  и самопожертвования советских воинов.
                </p>
                <blockquote className="text-lg font-serif italic text-foreground border-l-4 border-honor-gold pl-4 mt-6">
                  "Подвиг Гастелло вошел в историю как образец бесстрашия и преданности Родине"
                </blockquote>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={5} />
    </>
  );
};

export default Page5;
