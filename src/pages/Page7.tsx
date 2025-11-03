import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import firstPartisans from "@/assets/first-partisans.jpg";
import { Flame } from "lucide-react";

const Page7 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 7 • РОЖДЕНИЕ СОПРОТИВЛЕНИЯ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Первые партизаны
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                28 июня 1941 года. Первый бой партизанского отряда Василия Коржа.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={firstPartisans}
                alt="Первые партизаны"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-vintage-paper/80 font-serif italic">
                  Партизаны в белорусских лесах — начало народной войны
                </p>
              </div>
            </div>

            {/* First Partisan */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Flame className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Василий Корж
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Председатель Пинковичского сельсовета Василий Захарович Корж 
                    создал первый партизанский отряд уже 26 июня 1941 года — всего через 
                    4 дня после начала войны.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    В отряд вошли учителя, колхозники, рабочие местного завода — 
                    всего 60 человек. Вооружение — охотничьи ружья, несколько винтовок, 
                    гранаты, собранные на полях сражений.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4 py-2">
                    <div className="text-sm text-primary font-semibold mb-1">26 июня 1941</div>
                    <p className="text-sm text-muted-foreground">
                      Создание отряда в деревне Пинковичи Октябрьского района
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 py-2">
                    <div className="text-sm text-accent font-semibold mb-1">28 июня 1941</div>
                    <p className="text-sm text-muted-foreground">
                      Первый бой — засада на колонну немецких войск у деревни Руда
                    </p>
                  </div>

                  <div className="border-l-4 border-honor-gold pl-4 py-2">
                    <div className="text-sm text-honor-gold font-semibold mb-1">Результат</div>
                    <p className="text-sm text-muted-foreground">
                      Уничтожено 27 солдат противника, 3 грузовика с боеприпасами
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* First Battle Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Первая партизанская операция
              </h2>

              <Card className="bg-card/60 backdrop-blur-sm border-border p-6 mb-6">
                <h3 className="text-xl font-serif font-semibold mb-4 text-primary">
                  План засады
                </h3>
                <p className="text-muted-foreground mb-4">
                  Партизаны заняли позиции в лесу у дороги Пинск-Логишин. 
                  Цель — немецкая автоколонна с боеприпасами, следующая на восток.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="text-center p-4 bg-primary/5 rounded">
                    <div className="text-2xl font-bold text-primary mb-1">60</div>
                    <div className="text-xs text-muted-foreground">партизан</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded">
                    <div className="text-2xl font-bold text-primary mb-1">15 мин</div>
                    <div className="text-xs text-muted-foreground">длился бой</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded">
                    <div className="text-2xl font-bold text-primary mb-1">0</div>
                    <div className="text-xs text-muted-foreground">потерь у партизан</div>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/60 backdrop-blur-sm border-border p-6">
                <h3 className="text-xl font-serif font-semibold mb-4 text-primary">
                  Значение боя
                </h3>
                <p className="text-muted-foreground">
                  Эта первая партизанская операция показала: сопротивление возможно. 
                  Новость о победе разнеслась по окрестным деревням. 
                  К отряду Коржа начали присоединяться новые бойцы. 
                  Это был старт партизанского движения в Беларуси.
                </p>
              </Card>
            </div>

            {/* Tactics */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Тактика лесной войны
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Внезапность</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Быстрые налеты из леса, уничтожение целей и немедленный отход. 
                    Враг не успевает организовать преследование.
                  </p>

                  <h3 className="font-semibold mb-2 text-primary">Знание местности</h3>
                  <p className="text-sm text-muted-foreground">
                    Партизаны знают каждую тропинку, каждое болото. 
                    Для немцев белорусские леса — чужая и враждебная территория.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-primary">Поддержка населения</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Крестьяне снабжают партизан едой, передают разведданные, 
                    прячут раненых. Без народа партизанская война невозможна.
                  </p>

                  <h3 className="font-semibold mb-2 text-primary">Трофейное оружие</h3>
                  <p className="text-sm text-muted-foreground">
                    Каждый бой — возможность захватить оружие, боеприпасы, продовольствие. 
                    Партизаны воюют оружием врага.
                  </p>
                </div>
              </div>
            </Card>

            {/* Legacy */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "Партизанское движение началось с малого — с группы смельчаков, 
                решивших не сдаваться. К концу войны это была целая армия — 
                374 000 белорусских партизан."
              </blockquote>
              <div className="mt-6 p-4 bg-honor-gold/10 rounded">
                <p className="text-sm font-semibold text-honor-gold mb-1">
                  ★ Василий Корж
                </p>
                <p className="text-xs text-muted-foreground">
                  Дважды Герой Советского Союза. Его отряд провел более 160 боевых операций, 
                  уничтожил более 2000 солдат противника
                </p>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={7} />
    </>
  );
};

export default Page7;
