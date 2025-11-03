import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import retreatMap from "@/assets/retreat-map.jpg";

const Page4 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-destructive/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-destructive tracking-wider">
                  СТРАНИЦА 4 • ТРАГИЧЕСКИЕ ЦИФРЫ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Первые потери
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Цена внезапного удара. Статистика первой недели войны.
              </p>
            </div>

            {/* Hero Image - Map */}
            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={retreatMap}
                alt="Карта отступления"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-vintage-paper/80 font-serif italic">
                  Карта отступления советских войск в первые дни войны
                </p>
              </div>
            </div>

            {/* First Week Statistics */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Первая неделя войны (22-28 июня 1941)
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-destructive pl-6 py-2">
                    <div className="text-4xl font-bold text-destructive mb-2">1200+</div>
                    <h3 className="text-lg font-serif font-semibold mb-2">
                      Самолетов уничтожено
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Более 1200 советских самолетов было уничтожено на аэродромах в первый день войны
                    </p>
                  </div>

                  <div className="border-l-4 border-destructive pl-6 py-2">
                    <div className="text-4xl font-bold text-destructive mb-2">300 000+</div>
                    <h3 className="text-lg font-serif font-semibold mb-2">
                      Военнопленных
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      За первую неделю в плен попало более 300 000 советских солдат и офицеров
                    </p>
                  </div>

                  <div className="border-l-4 border-destructive pl-6 py-2">
                    <div className="text-4xl font-bold text-destructive mb-2">600 км</div>
                    <h3 className="text-lg font-serif font-semibold mb-2">
                      Глубина прорыва
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      На некоторых участках фронта враг продвинулся на глубину до 600 километров
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-honor-gold pl-6 py-2">
                    <div className="text-4xl font-bold text-honor-gold mb-2">100 000+</div>
                    <h3 className="text-lg font-serif font-semibold mb-2">
                      Защитников Родины
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Десятки тысяч советских солдат погибли, защищая каждый метр родной земли
                    </p>
                  </div>

                  <div className="border-l-4 border-honor-gold pl-6 py-2">
                    <div className="text-4xl font-bold text-honor-gold mb-2">1.5 млн</div>
                    <h3 className="text-lg font-serif font-semibold mb-2">
                      Мобилизовано
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      За первую неделю было мобилизовано около 1.5 миллиона человек
                    </p>
                  </div>

                  <div className="border-l-4 border-honor-gold pl-6 py-2">
                    <div className="text-4xl font-bold text-honor-gold mb-2">2 млн</div>
                    <h3 className="text-lg font-serif font-semibold mb-2">
                      Беженцев
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Около 2 миллионов мирных жителей были вынуждены покинуть свои дома
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Human Stories */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                За цифрами — люди
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card/60 backdrop-blur-sm border-border p-6">
                  <h3 className="text-lg font-serif font-semibold mb-3 text-primary">
                    Семья Ковалевых
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Трое сыновей ушли на фронт в первую неделю войны. Отец, Петр Ковалев, 
                    записался в народное ополчение. Мать с дочерьми эвакуировались в Сибирь. 
                    Домой вернулся только один сын — в 1946 году.
                  </p>
                </Card>

                <Card className="bg-card/60 backdrop-blur-sm border-border p-6">
                  <h3 className="text-lg font-serif font-semibold mb-3 text-primary">
                    Деревня Заречье
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Из маленькой деревни в 150 человек на фронт ушли 47 мужчин. 
                    В живых осталось только 12. Женщины и дети пережили три года оккупации, 
                    прятали партизан и передавали разведданные.
                  </p>
                </Card>
              </div>
            </div>

            {/* Quote */}
            <Card className="bg-gradient-to-br from-primary/10 to-destructive/10 border-l-4 border-destructive p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "Отступая, мы оставляли не просто территорию. Мы оставляли дома, семьи, целые жизни..."
              </blockquote>
              <cite className="text-sm text-muted-foreground">
                — Из воспоминаний ветерана Великой Отечественной войны
              </cite>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={4} />
    </>
  );
};

export default Page4;
