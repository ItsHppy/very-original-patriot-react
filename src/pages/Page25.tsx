import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import partisans from "@/assets/partisans.jpg";

const Page25 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 25 • ПАРТИЗАНСКОЕ ДВИЖЕНИЕ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Народная война
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Партизанское движение в Беларуси стало мощной силой сопротивления
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={partisans}
                alt="Белорусские партизаны"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-lg text-vintage-paper font-serif">
                  "Леса стали непреступными для врага"
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/50 p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">374,000</div>
                <p className="text-sm text-muted-foreground">партизан и подпольщиков</p>
              </Card>

              <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/50 p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">1,100+</div>
                <p className="text-sm text-muted-foreground">партизанских отрядов</p>
              </Card>

              <Card className="bg-gradient-to-br from-honor-gold/20 to-honor-gold/5 border-honor-gold/50 p-6 text-center">
                <div className="text-4xl font-bold text-honor-gold mb-2">60%</div>
                <p className="text-sm text-muted-foreground">территории под контролем</p>
              </Card>

              <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/50 p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">11,000+</div>
                <p className="text-sm text-muted-foreground">боевых операций</p>
              </Card>
            </div>

            {/* Partisan Activities */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Деятельность партизан
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary">
                    Рельсовая война
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Массовое разрушение железнодорожных коммуникаций противника. Только во время операции "Рельсовая война" летом 1943 года было подорвано более 200 тысяч рельсов, парализовав снабжение немецких войск.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-accent">
                    Партизанские зоны
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    К 1943 году около 60% территории Беларуси находилось под контролем партизан. В партизанских зонах действовали школы, больницы, издавались газеты. Создавались целые партизанские края, недоступные для оккупантов.
                  </p>
                </div>

                <div className="border-l-4 border-honor-gold pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-honor-gold">
                    Разведка и диверсии
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Партизаны вели активную разведывательную деятельность, передавая ценные сведения в Москву. Проводились диверсии на военных объектах, уничтожались склады боеприпасов, выводились из строя линии связи.
                  </p>
                </div>
              </div>
            </Card>

            {/* Famous Commanders */}
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">
              Легендарные командиры
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-card/60 backdrop-blur-sm border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-full bg-primary rounded-full" />
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-2 text-primary">
                      Сидор Ковпак
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Дважды Герой Советского Союза
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Командир знаменитого партизанского соединения. Его отряды совершили рейды на тысячи километров по тылам врага, нанося сокрушительные удары по коммуникациям противника.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/60 backdrop-blur-sm border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-full bg-primary rounded-full" />
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-2 text-primary">
                      Василий Корж
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Герой Советского Союза
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Один из первых организаторов партизанского движения в Беларуси. Уже 26 июня 1941 года его отряд провёл первую боевую операцию против оккупантов.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quote */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif italic text-foreground mb-4">
                "Белорусские партизаны сковали 10% всех немецких войск, действовавших на восточном фронте"
              </blockquote>
              <p className="text-muted-foreground">
                Партизанское движение в Беларуси внесло неоценимый вклад в победу над фашизмом. Народная война показала, что захватчики не смогут сломить волю белорусского народа к свободе и независимости.
              </p>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={25} />
    </>
  );
};

export default Page25;
