import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import railwayWar from "@/assets/railway-war.jpg";
import { Bomb, TrendingDown, Train, Zap } from "lucide-react";

const Page30 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 30 • ПАРТИЗАНСКИЙ САБОТАЖ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Рельсовая война
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Массовый саботаж железных дорог — удар по снабжению вермахта
              </p>
            </div>

            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={railwayWar}
                alt="Партизаны взрывают железную дорогу"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent text-center">
                Операция "Рельсовая война"
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Train className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">11,128</div>
                  <div className="text-sm text-muted-foreground">эшелонов под откос</div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Bomb className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">214,000</div>
                  <div className="text-sm text-muted-foreground">рельсов взорвано</div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <TrendingDown className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">-65%</div>
                  <div className="text-sm text-muted-foreground">снижение пропускной способности</div>
                </div>
              </div>

              <p className="text-muted-foreground text-center leading-relaxed">
                С июня по сентябрь 1943 года белорусские партизаны провели 
                крупнейшую диверсионную операцию в истории Второй мировой войны
              </p>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card/60 backdrop-blur-sm border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-serif font-bold text-accent">
                    Тактика диверсий
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">1. Подготовка</h3>
                    <p className="text-sm text-muted-foreground">
                      Разведка участка дороги, выбор места для мины. 
                      Лучшее время — ночь, ненастная погода.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 text-primary">2. Установка мины</h3>
                    <p className="text-sm text-muted-foreground">
                      Мина крепится под рельс. При проходе тяжелого состава — взрыв. 
                      Время установки — 15-20 минут.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 text-primary">3. Отход</h3>
                    <p className="text-sm text-muted-foreground">
                      Быстрый уход в лес. Немцы начинают охоту через 30-40 минут после взрыва.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/60 backdrop-blur-sm border-border p-8">
                <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                  Типы подрывов
                </h2>
                
                <div className="space-y-3">
                  <div className="p-4 bg-primary/5 rounded">
                    <div className="font-semibold text-foreground mb-1">Мина под рельс</div>
                    <p className="text-xs text-muted-foreground">
                      Самый распространенный способ. Взрывается под весом поезда.
                    </p>
                  </div>

                  <div className="p-4 bg-primary/5 rounded">
                    <div className="font-semibold text-foreground mb-1">Магнитная мина</div>
                    <p className="text-xs text-muted-foreground">
                      Крепится к днищу вагона. Срабатывает через заданное время.
                    </p>
                  </div>

                  <div className="p-4 bg-primary/5 rounded">
                    <div className="font-semibold text-foreground mb-1">Взрыв моста</div>
                    <p className="text-xs text-muted-foreground">
                      Самый эффективный. Восстановление занимает недели.
                    </p>
                  </div>

                  <div className="p-4 bg-primary/5 rounded">
                    <div className="font-semibold text-foreground mb-1">Обрыв связи</div>
                    <p className="text-xs text-muted-foreground">
                      Телеграфные провода режутся, нарушая коммуникацию.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Три этапа операции
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-semibold">
                      ЭТАП 1
                    </span>
                    <span className="text-sm text-muted-foreground">Июнь - август 1943</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    "Рельсовая война"
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Массированные удары по коммуникациям перед Курской битвой. 
                    Сорван подвоз резервов и техники к фронту.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6 py-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-accent/20 text-accent rounded text-xs font-semibold">
                      ЭТАП 2
                    </span>
                    <span className="text-sm text-muted-foreground">Сентябрь - октябрь 1943</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    "Концерт"
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Продолжение операции. Подорвано 148 000 рельсов, 
                    разрушены сотни мостов и станций.
                  </p>
                </div>

                <div className="border-l-4 border-honor-gold pl-6 py-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-honor-gold/20 text-honor-gold rounded text-xs font-semibold">
                      ЭТАП 3
                    </span>
                    <span className="text-sm text-muted-foreground">Июнь 1944</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    Перед операцией "Багратион"
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Подготовка к освобождению Беларуси. Уничтожены ключевые пути снабжения, 
                    германские войска оказались отрезаны.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "Белорусские партизаны своими действиями на железных дорогах 
                сделали невозможным нормальное снабжение группы армий 'Центр'. 
                Это стало одной из причин нашего поражения в операции 'Багратион'."
              </blockquote>
              <div className="text-sm text-muted-foreground">
                — Из мемуаров немецкого генерала Типпельскирха
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={30} />
    </>
  );
};

export default Page30;
