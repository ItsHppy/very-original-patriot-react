import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Bomb, Building2, Clock, Target } from "lucide-react";
import destroyedBridgeImg from "@/assets/destroyed-bridge.jpg";

const bridgeTypes = [
  {
    type: "Деревянные мосты",
    quantity: "4 500+",
    method: "Поджог или подрыв опор",
    difficulty: "Лёгкая",
    restoration: "1-3 дня"
  },
  {
    type: "Каменные мосты",
    quantity: "1 800+",
    method: "Закладка взрывчатки в опоры",
    difficulty: "Средняя",
    restoration: "1-2 недели"
  },
  {
    type: "Железобетонные мосты",
    quantity: "500+",
    method: "Мощные заряды в несущие конструкции",
    difficulty: "Высокая",
    restoration: "Недели-месяцы"
  },
  {
    type: "Железнодорожные мосты",
    quantity: "200+",
    method: "Подрыв пролётов",
    difficulty: "Высокая",
    restoration: "Месяцы"
  }
];

const famousBridges = [
  {
    name: "Мост через Березину у Борисова",
    date: "Июль 1941",
    significance: "Задержал продвижение немцев на Москву",
    restored: "Через 3 месяца"
  },
  {
    name: "Мост через Припять у Мозыря",
    date: "Сентябрь 1943",
    significance: "Парализовал снабжение южного фланга",
    restored: "Через 6 недель"
  },
  {
    name: "Железнодорожный мост у Орши",
    date: "Август 1942",
    significance: "Остановил эшелоны с войсками",
    restored: "Через 4 месяца"
  },
  {
    name: "Мост через Западную Двину",
    date: "Май 1943",
    significance: "Изолировал группировку под Витебском",
    restored: "Через 2 месяца"
  }
];

const diversion = {
  preparation: [
    "Разведка: изучение конструкции моста, охраны",
    "Доставка взрывчатки: 50-200 кг в зависимости от размера",
    "Выбор точки подрыва: несущие опоры или пролёты",
    "Ночная установка зарядов скрытно от охраны"
  ],
  execution: [
    "Группа подрывников (5-10 человек)",
    "Группа прикрытия (20-30 человек)",
    "Установка зарядов за 30-60 минут",
    "Взрыв и быстрое отступление"
  ]
};

const germanLosses = [
  {
    category: "Задержки войск",
    impact: "Дивизии застревали на неделями",
    icon: Clock
  },
  {
    category: "Потери техники",
    impact: "17 000+ машин не дошли до фронта вовремя",
    icon: Target
  },
  {
    category: "Срыв планов",
    impact: "Операции откладывались или отменялись",
    icon: Building2
  },
  {
    category: "Ресурсы на восстановление",
    impact: "Тысячи сапёров отвлечены от фронта",
    icon: Bomb
  }
];

const Page32 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <BookNavigation currentPage={32} />
      
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="outline" className="mb-4">
                Страница 32
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Война мостов
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                7 000+ мостов уничтожено - без мостов армия не может двигаться
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={destroyedBridgeImg}
                alt="Взорванные мосты"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  Каждый взорванный мост - недели задержки для врага
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">7 000+</div>
                  <div className="text-muted-foreground">мостов уничтожено</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1941-1944</div>
                  <div className="text-muted-foreground">годы операций</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">17 000+</div>
                  <div className="text-muted-foreground">машин задержано</div>
                </CardContent>
              </Card>
            </div>

            {/* Bridge Types */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Building2 className="w-8 h-8 text-primary" />
                  Типы мостов и способы уничтожения
                </h2>
                <div className="space-y-4">
                  {bridgeTypes.map((bridge, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{bridge.type}</h3>
                          <p className="text-sm text-muted-foreground">
                            Уничтожено: <span className="text-primary font-bold">{bridge.quantity}</span>
                          </p>
                        </div>
                        <Badge variant={
                          bridge.difficulty === "Лёгкая" ? "outline" :
                          bridge.difficulty === "Средняя" ? "default" : "destructive"
                        }>
                          {bridge.difficulty}
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm text-muted-foreground">Метод: </span>
                          <span className="text-sm">{bridge.method}</span>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Восстановление: </span>
                          <span className="text-sm text-primary font-medium">{bridge.restoration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Famous Bridges */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Знаменитые мосты</h2>
                <p className="text-muted-foreground mb-8">
                  Подрыв этих мостов имел стратегическое значение
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {famousBridges.map((bridge, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all hover:scale-105"
                    >
                      <Badge variant="outline" className="mb-3">
                        {bridge.date}
                      </Badge>
                      <h3 className="text-lg font-semibold mb-3">{bridge.name}</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Значение: </span>
                          <span>{bridge.significance}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Восстановлен: </span>
                          <span className="text-primary font-medium">{bridge.restored}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Diversion Process */}
            <Card className="mb-12 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Bomb className="w-8 h-8 text-primary" />
                  Как подрывали мосты
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Подготовка</h3>
                    <div className="space-y-3">
                      {diversion.preparation.map((step, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-primary/20"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary">
                            <span className="text-xs font-bold text-primary">{idx + 1}</span>
                          </div>
                          <span className="text-sm pt-0.5">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Выполнение</h3>
                    <div className="space-y-3">
                      {diversion.execution.map((step, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-primary/20"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary">
                            <span className="text-xs font-bold text-primary">{idx + 1}</span>
                          </div>
                          <span className="text-sm pt-0.5">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* German Losses */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8">Потери немцев от войны мостов</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {germanLosses.map((loss, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all"
                    >
                      <loss.icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{loss.category}</h3>
                      <p className="text-muted-foreground">{loss.impact}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Real Case */}
            <Card className="mb-12 border-primary/20 bg-muted/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">История одного подрыва</h2>
                <div className="space-y-4 text-foreground/90">
                  <p>
                    <strong className="text-primary">Июль 1943 года</strong>. Партизаны бригады имени Чкалова
                    получили приказ взорвать железнодорожный мост через реку Западная Двина.
                  </p>
                  <p>
                    <strong className="text-primary">Разведка заняла неделю</strong>. Выяснили: мост охраняется
                    взводом немцев (30 человек), пулемётные точки на обоих берегах.
                  </p>
                  <p>
                    <strong className="text-primary">План</strong>: группа прикрытия отвлекает охрану атакой с одной стороны,
                    в это время подрывники проникают к опорам с другой.
                  </p>
                  <p>
                    <strong className="text-primary">Ночью 15 июля</strong> операция началась. Перестрелка длилась 40 минут.
                    Подрывники установили 150 кг взрывчатки под центральную опору.
                  </p>
                  <p className="text-primary font-semibold">
                    Взрыв разрушил 50-метровый пролёт. Движение поездов остановлено на 4 месяца.
                    Партизаны отступили без потерь.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg text-center text-foreground/80">
                  <strong className="text-primary">Война мостов</strong> была одной из самых эффективных форм партизанской борьбы.
                  Без мостов армия не может двигаться - колонны войск застревали на неделями.{" "}
                  <strong className="text-primary">7 000 уничтоженных мостов</strong> - это сотни сорванных немецких операций.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Page32;