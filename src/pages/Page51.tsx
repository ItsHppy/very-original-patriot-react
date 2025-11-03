import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Crosshair, MapPin, FileText } from "lucide-react";

const Page51 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-destructive/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-destructive tracking-wider">
                  СТРАНИЦА 51 • КАРАТЕЛЬНЫЕ ОПЕРАЦИИ
                </span>
              </div>
              
              <div className="flex justify-center mb-6">
                <Crosshair className="h-16 w-16 text-destructive" />
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Карательные операции нацистов
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Систематическое уничтожение партизан и мирного населения
              </p>
            </div>

            <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-8 md:p-12 text-center mb-12">
              <div className="text-6xl md:text-7xl font-bold text-destructive mb-4">345</div>
              <p className="text-xl text-muted-foreground">деревень уничтожено в ходе карательных операций</p>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">Крупнейшие операции</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-destructive pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-destructive">Операция "Котбус" — март 1943</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Масштабная операция против партизан в районе между Лепелем, Ушачами и Полоцком. 17 000 немецких солдат окружили партизанские зоны. Уничтожено более 70 деревень, погибло около 10 000 мирных жителей.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-destructive">Операция "Болотная лихорадка" — 1942</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Попытка очистить Полесские болота от партизан. Немцы применяли артиллерию, авиацию, огнемёты. Сожжено более 100 деревень. Тысячи мирных жителей убиты или угнаны в Германию.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-destructive">Операция "Зимнее волшебство" — зима 1942-43</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Карательная операция в районе Освейского озера. Немцы блокировали партизанские отряды. Сожжено 158 деревень, расстреляно более 3000 человек.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">Методы карателей</h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>Карательные операции велись с особой жестокостью. Цель была не только уничтожить партизан, но и запугать население, лишить партизан поддержки.</p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3">Окружение</h4>
                    <p className="text-sm">Войска окружали партизанские зоны кольцом, затем сжимали его, зачищая территорию.</p>
                  </div>
                  
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3">Сожжение деревень</h4>
                    <p className="text-sm">Все деревни в зоне операции сжигались дотла вместе с жителями.</p>
                  </div>
                  
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3">Массовые расстрелы</h4>
                    <p className="text-sm">Всех подозреваемых в связях с партизанами расстреливали без суда.</p>
                  </div>
                  
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3">Угон населения</h4>
                    <p className="text-sm">Молодёжь угоняли на работы в Германию, детей отправляли в лагеря.</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-destructive/10 to-muted/10 border-l-4 border-destructive p-8">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">Результат операций</h2>
              <p className="text-muted-foreground">
                Несмотря на масштабы карательных операций, сломить партизанское движение не удалось. Население продолжало поддерживать партизан, а сами отряды восстанавливали силы и продолжали борьбу.
              </p>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={51} />
    </>
  );
};

export default Page51;