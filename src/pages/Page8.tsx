import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import childrenWar from "@/assets/children-war.jpg";
import { Heart } from "lucide-react";

const Page8 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-accent tracking-wider">
                  СТРАНИЦА 8 • УКРАДЕННОЕ ДЕТСТВО
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Дети войны
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Их детство закончилось 22 июня 1941 года. Истории юных героев.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={childrenWar}
                alt="Дети войны"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-vintage-paper/80 font-serif italic">
                  Эвакуация детей — последнее прощание с родным домом
                </p>
              </div>
            </div>

            {/* Statistics */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Цифры трагедии
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-accent/5 rounded-lg">
                  <div className="text-4xl font-bold text-accent mb-2">27%</div>
                  <div className="text-sm text-muted-foreground">
                    населения Беларуси составляли дети до 16 лет
                  </div>
                </div>
                <div className="text-center p-6 bg-accent/5 rounded-lg">
                  <div className="text-4xl font-bold text-accent mb-2">750 000</div>
                  <div className="text-sm text-muted-foreground">
                    детей погибло за годы войны
                  </div>
                </div>
                <div className="text-center p-6 bg-accent/5 rounded-lg">
                  <div className="text-4xl font-bold text-accent mb-2">1.5 млн</div>
                  <div className="text-sm text-muted-foreground">
                    детей остались сиротами
                  </div>
                </div>
              </div>
            </Card>

            {/* Three Paths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Три судьбы
              </h2>

              <div className="space-y-6">
                <Card className="bg-card/60 backdrop-blur-sm border-border p-8">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">
                      1. Эвакуация
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Тысячи детей были эвакуированы в глубокий тыл — на Урал, в Сибирь, 
                      Среднюю Азию. Долгий путь в товарных вагонах, голод, болезни. 
                      Многие ехали без родителей, только с учителями или вовсе одни.
                    </p>
                    <div className="bg-primary/5 p-4 rounded">
                      <p className="text-sm italic text-muted-foreground">
                        "Мне было 8 лет. Помню вокзал, толпу, крики. Мама посадила меня 
                        в вагон и сказала: 'Береги братишку'. Больше я её не видела..."
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">— Из воспоминаний Зинаиды К.</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/60 backdrop-blur-sm border-border p-8">
                  <div className="border-l-4 border-destructive pl-6">
                    <h3 className="text-2xl font-serif font-semibold mb-4 text-destructive">
                      2. Оккупация
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Дети, оставшиеся в оккупации, видели расстрелы, сожжения деревень, голод. 
                      Многие потеряли родителей. Старшие дети помогали партизанам — 
                      носили разведданные, прятали оружие, были связными.
                    </p>
                    <div className="bg-destructive/5 p-4 rounded">
                      <p className="text-sm italic text-muted-foreground">
                        "В 12 лет я уже была связной у партизан. Немцы не обращали внимания 
                        на девочку с корзинкой грибов. А в корзинке — патроны и листовки."
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">— Из воспоминаний Марии Б.</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/60 backdrop-blur-sm border-border p-8">
                  <div className="border-l-4 border-honor-gold pl-6">
                    <h3 className="text-2xl font-serif font-semibold mb-4 text-honor-gold">
                      3. Партизанские отряды
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Тысячи подростков воевали в партизанских отрядах. Были разведчиками, 
                      подрывниками, санитарами. Многие погибли, не дожив до 16 лет. 
                      Но их помнят как героев.
                    </p>
                    <div className="bg-honor-gold/5 p-4 rounded">
                      <p className="text-sm italic text-muted-foreground">
                        "Марат Казей стал партизаном в 13 лет после гибели матери. 
                        Погиб в бою в 14 лет, подорвав себя и окруживших его немцев гранатой. 
                        Герой Советского Союза (посмертно)."
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Young Heroes */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Юные герои Беларуси
              </h2>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-honor-gold/10 rounded">
                  <div className="text-honor-gold mb-2">★</div>
                  <h4 className="font-semibold text-sm mb-1">Марат Казей</h4>
                  <p className="text-xs text-muted-foreground">1929-1944</p>
                  <p className="text-xs text-muted-foreground mt-2">Партизан-разведчик</p>
                </div>

                <div className="text-center p-4 bg-honor-gold/10 rounded">
                  <div className="text-honor-gold mb-2">★</div>
                  <h4 className="font-semibold text-sm mb-1">Зина Портнова</h4>
                  <p className="text-xs text-muted-foreground">1926-1944</p>
                  <p className="text-xs text-muted-foreground mt-2">Подпольщица</p>
                </div>

                <div className="text-center p-4 bg-honor-gold/10 rounded">
                  <div className="text-honor-gold mb-2">★</div>
                  <h4 className="font-semibold text-sm mb-1">Лёня Голиков</h4>
                  <p className="text-xs text-muted-foreground">1926-1943</p>
                  <p className="text-xs text-muted-foreground mt-2">Партизан-подрывник</p>
                </div>

                <div className="text-center p-4 bg-honor-gold/10 rounded">
                  <div className="text-honor-gold mb-2">★</div>
                  <h4 className="font-semibold text-sm mb-1">Валя Котик</h4>
                  <p className="text-xs text-muted-foreground">1930-1944</p>
                  <p className="text-xs text-muted-foreground mt-2">Партизан</p>
                </div>
              </div>
            </Card>

            {/* Memorial */}
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-l-4 border-accent p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4 text-center">
                "У детства не было брони. Но у детства была отвага."
              </blockquote>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                Память о детях войны — это память о невинных жертвах и юных героях, 
                которые заплатили самую высокую цену за нашу свободу.
              </p>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={8} />
    </>
  );
};

export default Page8;
