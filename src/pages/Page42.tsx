import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { MapPin, Users, Calendar, AlertTriangle } from "lucide-react";

const Page42 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-destructive/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-destructive tracking-wider">
                  СТРАНИЦА 42 • МИНСКОЕ ГЕТТО
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                За колючей проволокой
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Минское гетто - одно из крупнейших в оккупированной Европе
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-6 text-center">
                <Users className="h-10 w-10 text-destructive mx-auto mb-3" />
                <div className="text-4xl font-bold text-destructive mb-2">100 000</div>
                <p className="text-sm text-muted-foreground">человек на 0,5 км²</p>
              </Card>

              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-6 text-center">
                <AlertTriangle className="h-10 w-10 text-destructive mx-auto mb-3" />
                <div className="text-4xl font-bold text-destructive mb-2">7-8</div>
                <p className="text-sm text-muted-foreground">человек в одной комнате</p>
              </Card>

              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-6 text-center">
                <Calendar className="h-10 w-10 text-destructive mx-auto mb-3" />
                <div className="text-4xl font-bold text-destructive mb-2">1941-1943</div>
                <p className="text-sm text-muted-foreground">июль - октябрь</p>
              </Card>
            </div>

            {/* Territory */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Территория гетто
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Минское гетто было создано 20 июля 1941 года на территории северо-западной части города. Границы проходили по Юбилейной площади, улицам Обувной и Шорной.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="border-l-4 border-destructive pl-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                      Размеры
                    </h3>
                    <p>На площади всего 0,5 квадратных километра были заключены около 100 тысяч человек. Плотность населения в 50 раз превышала нормальную.</p>
                  </div>
                  
                  <div className="border-l-4 border-destructive pl-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                      Ограждение
                    </h3>
                    <p>Гетто было окружено колючей проволокой в несколько рядов. Охрана велась немецкими солдатами и полицаями. За попытку выхода - расстрел.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Living Conditions */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Условия жизни
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Размещение
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    В одной комнате размещалось от 7 до 8 человек. Семьи жили в страшной тесноте. Не хватало воды, отопления, элементарных бытовых условий.
                  </p>
                </div>

                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Питание
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Мизерные пайки не могли обеспечить выживание. Люди голодали, умирали от истощения и болезней. Эпидемии тифа и дизентерии косили узников ежедневно.
                  </p>
                </div>

                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Принудительный труд
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Узники ежедневно выводились на работы - строительство, уборка, тяжелый физический труд. Охрана жестоко избивала и убивала тех, кто не мог работать.
                  </p>
                </div>
              </div>
            </Card>

            {/* Judenrat */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Юденрат - еврейский совет
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Немцы создали Юденрат - еврейский совет из 12 человек, который должен был выполнять приказы оккупантов. Это была страшная моральная дилемма.
                </p>
                
                <p>
                  Члены Юденрата должны были составлять списки на отправку в лагеря смерти, организовывать работы, распределять пайки. Они пытались спасти хоть кого-то, но часто вынуждены были жертвовать одними ради других.
                </p>
                
                <p>
                  Многие члены Юденрата сами были убиты нацистами. Их роль остается одной из самых трагических и противоречивых страниц истории гетто.
                </p>
              </div>
            </Card>

            {/* Timeline */}
            <Card className="bg-gradient-to-br from-destructive/10 to-muted/10 border-l-4 border-destructive p-8">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">
                Хронология трагедии
              </h2>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-destructive font-bold whitespace-nowrap">20 июля 1941</div>
                  <div className="text-muted-foreground">Создание гетто</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-destructive font-bold whitespace-nowrap">7 ноября 1941</div>
                  <div className="text-muted-foreground">Первая массовая акция - 12 000 убитых</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-destructive font-bold whitespace-nowrap">2 марта 1942</div>
                  <div className="text-muted-foreground">Расстрел на Яме - 5 000 человек</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-destructive font-bold whitespace-nowrap">28-29 июля 1942</div>
                  <div className="text-muted-foreground">Ликвидация части гетто - 10 000 убитых</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-destructive font-bold whitespace-nowrap">21 октября 1943</div>
                  <div className="text-muted-foreground">Окончательная ликвидация гетто</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={42} />
    </>
  );
};

export default Page42;