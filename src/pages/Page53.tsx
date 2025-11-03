import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { MapPin, Users, Calendar, Skull, Heart, AlertTriangle } from "lucide-react";

const Page53 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-destructive/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-destructive tracking-wider">
                  СТРАНИЦА 53 • КОЛДЫЧЕВО
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Лагерь садистов
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Концлагерь в Барановичах - один из самых жестоких на территории Беларуси
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-6 text-center">
                <Skull className="h-10 w-10 text-destructive mx-auto mb-3" />
                <div className="text-4xl font-bold text-destructive mb-2">22 000</div>
                <p className="text-sm text-muted-foreground">человек убито</p>
              </Card>

              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-6 text-center">
                <Calendar className="h-10 w-10 text-destructive mx-auto mb-3" />
                <div className="text-4xl font-bold text-destructive mb-2">2 года</div>
                <p className="text-sm text-muted-foreground">июль 1942 - июль 1944</p>
              </Card>

              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-6 text-center">
                <Heart className="h-10 w-10 text-destructive mx-auto mb-3" />
                <div className="text-4xl font-bold text-destructive mb-2">50</div>
                <p className="text-sm text-muted-foreground">выживших свидетелей</p>
              </Card>
            </div>

            {/* Location and Creation */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Создание лагеря
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Концентрационный лагерь Колдычево был создан в июле 1942 года на территории бывшего пересыльного пункта в 3 км от Барановичей. Лагерь стал одним из самых жестоких на всей оккупированной территории.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="border-l-4 border-destructive pl-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                      Расположение
                    </h3>
                    <p>Деревня Колдычево, Барановичский район. Лагерь занимал территорию около 1 квадратного километра, окруженную колючей проволокой.</p>
                  </div>
                  
                  <div className="border-l-4 border-destructive pl-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                      Узники
                    </h3>
                    <p>Советские военнопленные, партизаны, подпольщики, евреи, польские граждане, белорусские крестьяне - все, кто попадал под подозрение.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Commandant Paul Fuchs */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Комендант Пауль Фукс - садист
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Комендантом лагеря был назначен штурмфюрер СС Пауль Фукс - один из самых жестоких нацистских преступников. Его садизм не знал границ.
                </p>
                
                <div className="bg-destructive/5 border-l-4 border-destructive p-6 my-6">
                  <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">
                    Методы Фукса
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Лично участвовал в пытках и убийствах</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Использовал собак для растерзания узников</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Изобретал изощренные способы издевательств</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Устраивал "развлечения" - заставлял узников драться насмерть</span>
                    </li>
                  </ul>
                </div>
                
                <p>
                  Фукс превратил лагерь в место невыразимых страданий. Выжившие свидетели рассказывали, что он получал удовольствие от мучений людей.
                </p>
              </div>
            </Card>

            {/* Conditions and Methods */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Условия содержания
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Бараки
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Узники содержались в переполненных бараках без отопления, вентиляции, элементарных удобств. В помещении размером 4x6 метров размещали до 80 человек.
                  </p>
                </div>

                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Питание
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    300 граммов хлеба с опилками и жидкая баланда раз в день. Многие умирали от истощения в течение недель.
                  </p>
                </div>

                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Собаки-убийцы
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Фукс содержал специально обученных собак, которые растерзывали узников. Овчарки были натасканы на убийство людей и нападали по команде.
                  </p>
                </div>

                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Массовые расстрелы
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ежедневно происходили расстрелы у специально вырытых рвов. Тела сбрасывали в ямы, часто хороня еще живых людей.
                  </p>
                </div>
              </div>
            </Card>

            {/* Survivors */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Свидетельства выживших
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Из десятков тысяч узников лагеря выжило около 50 человек. Их свидетельства стали основой для обвинений на Нюрнбергском процессе.
                </p>
                
                <div className="bg-muted/20 border-l-4 border-accent p-6 italic">
                  <p className="mb-4">
                    "Фукс лично убил сотни людей. Он получал удовольствие от пыток. Заставлял узников копать себе могилы, а потом расстреливал их."
                  </p>
                  <p className="text-sm text-accent font-semibold">
                    - Из показаний свидетеля на судебном процессе
                  </p>
                </div>
                
                <p>
                  Те немногие, кому удалось бежать или дожить до освобождения, рассказывали о нечеловеческой жестокости, которая творилась в Колдычево.
                </p>
              </div>
            </Card>

            {/* Liberation and Memorial */}
            <Card className="bg-gradient-to-br from-memorial-flame/10 to-muted/10 border-l-4 border-memorial-flame p-8">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">
                Освобождение и память
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div className="flex gap-4">
                  <div className="text-memorial-flame font-bold whitespace-nowrap">8 июля 1944</div>
                  <div>Лагерь освобожден Красной Армией</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-memorial-flame font-bold whitespace-nowrap">1967</div>
                  <div>Установлен мемориал на месте лагеря</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-memorial-flame font-bold whitespace-nowrap">1961</div>
                  <div>Пауль Фукс осужден судом ФРГ к пожизненному заключению</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-memorial-flame font-semibold">
                  "Память о жертвах Колдычево живет в сердцах потомков"
                </p>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={53} />
    </>
  );
};

export default Page53;