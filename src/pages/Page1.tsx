import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";

const Page1 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 1 • НАЧАЛО ВОЙНЫ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                22 июня 1941
              </h1>
              
              <p className="text-2xl md:text-3xl text-primary font-serif">
                3:15 утра
              </p>
            </div>

            {/* Timeline */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="text-sm text-primary font-semibold mb-2">3:15</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Начало бомбардировок
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Без объявления войны немецкая авиация начала массированные бомбардировки городов Беларуси. Первые удары обрушились на Брест, Гродно, Минск и другие приграничные города.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="text-sm text-primary font-semibold mb-2">4:00</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Наступление на границе
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    190 дивизий вермахта перешли западную границу СССР. Группа армий "Центр" начала наступление на территории Беларуси. Началась героическая оборона Брестской крепости.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="text-sm text-primary font-semibold mb-2">12:00</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Обращение к народу
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    По радио прозвучало обращение Молотова о начале войны. Слова "Наше дело правое. Враг будет разбит. Победа будет за нами!" стали символом несгибаемой воли советского народа.
                  </p>
                </div>
              </div>
            </Card>

            {/* Historical Context */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/60 backdrop-blur-sm border-border p-6">
                <h3 className="text-xl font-serif font-semibold mb-4 text-accent">
                  Силы противника
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>190 дивизий вермахта</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>3,5 миллиона солдат</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>4 тысячи танков</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>5 тысяч самолётов</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-card/60 backdrop-blur-sm border-border p-6">
                <h3 className="text-xl font-serif font-semibold mb-4 text-accent">
                  Первые часы войны
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  За первые часы войны были разрушены десятки городов и сёл. Погибли тысячи мирных жителей. Но с первых минут войны советский народ начал героическую борьбу против захватчиков.
                </p>
              </Card>
            </div>

            {/* Quote */}
            <Card className="mt-12 bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif italic text-foreground">
                "Наше дело правое. Враг будет разбит. Победа будет за нами!"
              </blockquote>
              <p className="text-right text-muted-foreground mt-4">
                — Из обращения В.М. Молотова, 22 июня 1941 г.
              </p>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={1} />
    </>
  );
};

export default Page1;
