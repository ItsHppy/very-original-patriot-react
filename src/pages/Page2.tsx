import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import brestFortress from "@/assets/brest-fortress.jpg";

const Page2 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 2 • ГЕРОИЧЕСКАЯ ОБОРОНА
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Брестская крепость
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Символ несгибаемого мужества и героизма советских воинов
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={brestFortress}
                alt="Брестская крепость"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-vintage-paper/80 font-serif italic">
                  Брестская крепость стала первым рубежом обороны на пути врага
                </p>
              </div>
            </div>

            {/* Defense Timeline */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Хронология обороны
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="text-sm text-primary font-semibold mb-2">22 июня 1941, 3:45</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Первый удар
                  </h3>
                  <p className="text-muted-foreground">
                    Массированный артиллерийский обстрел крепости. Первые жертвы среди мирного населения и военнослужащих. Начало героической обороны под командованием майора П.М. Гаврилова и капитана И.Н. Зубачёва.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6 py-2">
                  <div className="text-sm text-accent font-semibold mb-2">22-30 июня</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Организованная оборона
                  </h3>
                  <p className="text-muted-foreground">
                    Несмотря на численное превосходство противника, защитники крепости оказывали ожесточённое сопротивление. Были организованы три очага обороны: Волынское, Кобринское укрепления и Цитадель.
                  </p>
                </div>

                <div className="border-l-4 border-honor-gold pl-6 py-2">
                  <div className="text-sm text-honor-gold font-semibold mb-2">Июль 1941</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Последние защитники
                  </h3>
                  <p className="text-muted-foreground">
                    Отдельные группы защитников продолжали сражаться до конца июля. Последние бойцы держались до августа 1941 года, когда основные силы вермахта уже находились под Смоленском.
                  </p>
                </div>
              </div>
            </Card>

            {/* Heroes */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-card/60 backdrop-blur-sm border-border p-6">
                <h3 className="text-lg font-serif font-semibold mb-3 text-primary">
                  Майор П.М. Гаврилов
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Командир обороны Восточного форта. Взят в плен 23 июля в бессознательном состоянии. Герой Советского Союза (1957).
                </p>
              </Card>

              <Card className="bg-card/60 backdrop-blur-sm border-border p-6">
                <h3 className="text-lg font-serif font-semibold mb-3 text-primary">
                  Капитан И.Н. Зубачёв
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Командовал обороной Волынского укрепления. Погиб при прорыве из окружения в конце июня 1941 года.
                </p>
              </Card>

              <Card className="bg-card/60 backdrop-blur-sm border-border p-6">
                <h3 className="text-lg font-serif font-semibold mb-3 text-primary">
                  Лейтенант А.М. Кижеватов
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Возглавил оборону Кобринского укрепления. Пал смертью храбрых в первые дни обороны.
                </p>
              </Card>
            </div>

            {/* Famous Inscription */}
            <Card className="bg-gradient-to-br from-primary/10 to-destructive/10 border-l-4 border-primary p-8">
              <div className="mb-4">
                <h3 className="text-2xl font-serif font-bold text-accent mb-4">
                  Надпись на стене крепости
                </h3>
              </div>
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "Я умираю, но не сдаюсь! Прощай, Родина."
              </blockquote>
              <p className="text-muted-foreground">
                Эта надпись, найденная на стенах крепости, стала символом несгибаемой воли защитников. 
                Оборона Брестской крепости показала всему миру силу духа советского солдата и предопределила 
                будущую победу над фашизмом.
              </p>
            </Card>

            {/* Awards */}
            <Card className="mt-12 bg-card/80 backdrop-blur-sm border-border p-8">
              <div className="text-center">
                <div className="inline-block px-6 py-3 bg-honor-gold/20 rounded-full mb-4">
                  <span className="text-honor-gold font-bold text-lg">★</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">
                  Крепость-Герой
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  8 мая 1965 года Брестской крепости присвоено почётное звание "Крепость-Герой" 
                  с вручением ордена Ленина и медали "Золотая Звезда"
                </p>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={2} />
    </>
  );
};

export default Page2;
