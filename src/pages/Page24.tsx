import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { MapPin, AlertTriangle, Package, User } from "lucide-react";
import partisanCourierImg from "@/assets/partisan-courier.jpg";

const couriers = [
  {
    name: "Анна Морозова",
    age: 19,
    role: "Связная между Минском и лесом",
    routes: ["Минск → Налибокская пуща (80 км)", "Проходила блокпосты под видом крестьянки"],
    achievements: "Доставила 200+ донесений",
    fate: "Пережила войну, награждена медалью"
  },
  {
    name: "Мария Осипова",
    age: 23,
    role: "Курьер Центрального штаба",
    routes: ["Переходила линию фронта 15 раз", "Маршруты по 150-200 км"],
    achievements: "Прятала донесения в каблуках, хлебе",
    fate: "Герой Советского Союза (посмертно)"
  },
  {
    name: "Зина Портнова",
    age: 17,
    role: "Связная подполья в Витебске",
    routes: ["Витебск → партизанские отряды", "Доставляла оружие и медикаменты"],
    achievements: "Участвовала в отравлении немецких офицеров",
    fate: "Расстреляна в 1944, Герой СССР (посмертно)"
  },
  {
    name: "Надежда Троян",
    age: 21,
    role: "Радистка-связная",
    routes: ["Переносила рацию (15 кг) через болота", "Связь Москва → партизаны"],
    achievements: "Передала сотни шифровок",
    fate: "Пережила войну, награждена орденом"
  }
];

const dangers = [
  {
    title: "Блокпосты",
    description: "Немецкие патрули проверяли документы на дорогах",
    risk: "Высокий",
    solution: "Обходные тропы через леса и болота"
  },
  {
    title: "Облавы",
    description: "Внезапные проверки деревень и прочёсывание лесов",
    risk: "Критический",
    solution: "Передвижение только ночью, укрытия в схронах"
  },
  {
    title: "Предатели",
    description: "Местные полицаи могли узнать связную",
    risk: "Высокий",
    solution: "Легенды, фальшивые документы, конспирация"
  },
  {
    title: "Погода",
    description: "Морозы, дожди, весенняя распутица",
    risk: "Средний",
    solution: "Выносливость, знание местности"
  }
];

const hidingMethods = [
  "В двойном дне корзины под продуктами",
  "В каблуках сапог или в подкладке одежды",
  "В буханке хлеба или полой палке",
  "В женских прическах (длинные косы)",
  "В тайниках на теле (бинты, повязки)"
];

const Page24 = () => {
  const [selectedCourier, setSelectedCourier] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <BookNavigation currentPage={24} />
      
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="outline" className="mb-4">
                Страница 24
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Связные и курьеры
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Они проходили сотни километров, рискуя жизнью, чтобы доставить важное донесение
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={partisanCourierImg}
                alt="Партизанские связные и курьеры"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  Невидимые герои партизанской войны
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground">связных и курьеров</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">70%</div>
                  <div className="text-muted-foreground">были женщины</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100-300 км</div>
                  <div className="text-muted-foreground">типичный маршрут</div>
                </CardContent>
              </Card>
            </div>

            {/* Couriers Gallery */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <User className="w-8 h-8 text-primary" />
                  Героини-связные
                </h2>
                <p className="text-muted-foreground mb-8">
                  Нажмите на карточку, чтобы узнать историю
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {couriers.map((courier, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCourier(idx)}
                      className={`p-6 rounded-lg border-2 text-left transition-all hover:scale-105 ${
                        selectedCourier === idx
                          ? "border-primary bg-primary/10 shadow-lg"
                          : "border-primary/20 bg-muted/30 hover:bg-muted/50"
                      }`}
                    >
                      <h3 className="text-xl font-semibold mb-1">{courier.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{courier.age} лет</p>
                      <p className="text-sm text-primary font-medium">{courier.role}</p>
                    </button>
                  ))}
                </div>

                {/* Courier Details */}
                {selectedCourier !== null && (
                  <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 animate-fade-in">
                    <h3 className="text-2xl font-bold mb-4">{couriers[selectedCourier].name}</h3>
                    <div className="grid gap-4 mb-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Роль</div>
                        <div className="font-semibold">{couriers[selectedCourier].role}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">Маршруты</div>
                        <div className="space-y-2">
                          {couriers[selectedCourier].routes.map((route, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-sm">{route}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Достижения</div>
                        <div className="font-semibold text-primary">{couriers[selectedCourier].achievements}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Судьба</div>
                        <div>{couriers[selectedCourier].fate}</div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Dangers */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-primary" />
                  Опасности в пути
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {dangers.map((danger, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold">{danger.title}</h3>
                        <Badge
                          variant={
                            danger.risk === "Критический"
                              ? "destructive"
                              : danger.risk === "Высокий"
                              ? "default"
                              : "outline"
                          }
                        >
                          {danger.risk}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{danger.description}</p>
                      <div className="text-sm">
                        <span className="text-primary font-medium">Решение: </span>
                        {danger.solution}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hiding Methods */}
            <Card className="mb-12 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Package className="w-8 h-8 text-primary" />
                  Как прятали донесения
                </h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Связные изобретали десятки способов, чтобы спрятать важные документы и не выдать себя при обыске:
                </p>
                <div className="grid gap-3">
                  {hidingMethods.map((method, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-primary/20 hover:bg-background transition-colors"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                        <span className="text-sm font-bold text-primary">{idx + 1}</span>
                      </div>
                      <span className="pt-1">{method}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Real Story */}
            <Card className="mb-12 border-primary/20 bg-muted/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Реальный случай: Переход через линию фронта</h2>
                <div className="space-y-4 text-foreground/90">
                  <p>
                    <strong className="text-primary">Мария Осипова</strong>, 23 года, получила задание доставить важные
                    разведданные из партизанского отряда через линию фронта в штаб Красной Армии.
                  </p>
                  <p>
                    Маршрут: 180 километров через оккупированную территорию, затем через линию фронта. Документы
                    она спрятала в каблуке сапога, а сверху положила фальшивое письмо для родственников.
                  </p>
                  <p>
                    На третий день её остановил немецкий патруль. Проверяли документы 20 минут. Мария держалась
                    спокойно, играя роль крестьянки. Её отпустили.
                  </p>
                  <p>
                    Через неделю она дошла до линии фронта. Перешла ночью между двумя блиндажами, ползком по грязи.
                    Донесение доставлено. <strong className="text-primary">Миссия выполнена</strong>.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Через месяц Мария погибла, возвращаясь обратно. Посмертно награждена званием Героя Советского Союза.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg text-center text-foreground/80">
                  <strong className="text-primary">Связные и курьеры</strong> были невидимыми героями партизанской войны.
                  Без них не было бы координации, разведки, связи с Большой землёй.{" "}
                  <strong className="text-primary">Многие из них погибли</strong>, но их подвиг обеспечил победу.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Page24;