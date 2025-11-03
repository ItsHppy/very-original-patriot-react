import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { MapPin, Flag, Calendar, Users } from "lucide-react";
import liberatedTownImg from "@/assets/liberated-town.jpg";

const liberatedCities = [
  {
    name: "Мозырь",
    date: "14 января 1944",
    population: "12 000 человек",
    story: "Партизаны бригады Чернышёва штурмовали город 3 дня. Немецкий гарнизон (500 солдат) был разгромлен. Город удерживали 2 недели до прихода Красной Армии.",
    garrison: "500 немецких солдат",
    partisans: "2 500 партизан",
    control: "2 недели"
  },
  {
    name: "Юровичи",
    date: "6 января 1944",
    population: "4 000 человек",
    story: "Ночной штурм. Партизаны проникли в город с трёх сторон. За 4 часа гарнизон был уничтожен. Освобождено 300 военнопленных.",
    garrison: "200 немецких солдат",
    partisans: "800 партизан",
    control: "10 дней"
  },
  {
    name: "Ельск",
    date: "9 января 1944",
    population: "5 000 человек",
    story: "Внезапная атака на рассвете. Немцы не ожидали удара. Город взят за 6 часов. Захвачены склады с продовольствием.",
    garrison: "300 немецких солдат",
    partisans: "1 200 партисан",
    control: "1 неделя"
  },
  {
    name: "Октябрьский (Калинковичский район)",
    date: "12 января 1944",
    population: "3 000 человек",
    story: "Координированная атака трёх партизанских бригад. Немцы отступили без боя, оставив город.",
    garrison: "150 немецких солдат",
    partisans: "1 500 партизан",
    control: "1 неделя"
  }
];

const stormTactics = [
  {
    phase: "Блокада города",
    description: "Окружение со всех сторон, чтобы немцы не могли получить подкрепление",
    duration: "1-2 дня"
  },
  {
    phase: "Ночная атака",
    description: "Штурм начинался ночью или на рассвете - внезапность давала преимущество",
    duration: "2-6 часов"
  },
  {
    phase: "Уличные бои",
    description: "Дом за домом, улица за улицей - партизаны знали местность лучше немцев",
    duration: "4-12 часов"
  },
  {
    phase: "Захват ключевых точек",
    description: "Штаб, склады, мосты - их захват решал исход боя",
    duration: "1-3 часа"
  }
];

const cityManagement = [
  "Восстановление советской власти - назначение временного исполкома",
  "Организация обороны - патрули, дозоры, укрепления",
  "Распределение продовольствия из немецких складов",
  "Помощь населению - медицина, продукты, безопасность",
  "Связь с Красной Армией - координаты, карты, разведданные",
  "Эвакуация мирных жителей при угрозе контратаки"
];

const Page34 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <BookNavigation currentPage={34} />
      
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="outline" className="mb-4">
                Страница 34
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Освобождённые партизанами города
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Партизаны не только воевали в лесах - они штурмовали города и держали их до прихода Красной Армии
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={liberatedTownImg}
                alt="Освобождённый город"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  Партизаны на площади освобождённого города
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">городов освобождено</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Январь 1944</div>
                  <div className="text-muted-foreground">пик освобождений</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1-2 недели</div>
                  <div className="text-muted-foreground">удерживали города</div>
                </CardContent>
              </Card>
            </div>

            {/* Liberated Cities */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Flag className="w-8 h-8 text-primary" />
                  Города, освобождённые партизанами
                </h2>
                <div className="space-y-6">
                  {liberatedCities.map((city, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{city.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{city.population}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="default">{city.control} контроля</Badge>
                      </div>

                      <p className="text-foreground/90 mb-4 leading-relaxed">{city.story}</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                          <div className="text-sm text-muted-foreground mb-1">Гарнизон противника</div>
                          <div className="font-semibold">{city.garrison}</div>
                        </div>
                        <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                          <div className="text-sm text-muted-foreground mb-1">Силы партизан</div>
                          <div className="font-semibold text-primary">{city.partisans}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Storm Tactics */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary" />
                  Как партизаны штурмовали города
                </h2>
                <div className="space-y-4">
                  {stormTactics.map((tactic, idx) => (
                    <div
                      key={idx}
                      className="relative p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all"
                    >
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                          <span className="text-xl font-bold text-primary">{idx + 1}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-semibold">{tactic.phase}</h3>
                            <Badge variant="outline">{tactic.duration}</Badge>
                          </div>
                          <p className="text-muted-foreground">{tactic.description}</p>
                        </div>
                      </div>
                      {idx < stormTactics.length - 1 && (
                        <div className="absolute -bottom-4 left-6 w-1 h-4 bg-primary/30" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* City Management */}
            <Card className="mb-12 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Управление городом до прихода фронта</h2>
                <p className="text-muted-foreground mb-8">
                  После освобождения партизаны не просто удерживали город - они восстанавливали в нём жизнь
                </p>
                <div className="grid gap-4">
                  {cityManagement.map((task, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-5 rounded-lg bg-background/50 border-2 border-primary/20 hover:bg-background transition-colors"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                        <span className="text-sm font-bold text-primary">{idx + 1}</span>
                      </div>
                      <span className="pt-1">{task}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mozyr Story */}
            <Card className="mb-12 border-primary/20 bg-muted/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">История освобождения Мозыря</h2>
                <div className="space-y-4 text-foreground/90">
                  <p>
                    <strong className="text-primary">Мозырь</strong> был важным транспортным узлом на юге Беларуси.
                    Немецкий гарнизон насчитывал 500 солдат с артиллерией.
                  </p>
                  <p>
                    <strong className="text-primary">Командир Василий Чернышёв</strong> собрал 2 500 партизан из нескольких бригад.
                    План: окружить город, а затем атаковать одновременно с трёх сторон.
                  </p>
                  <p>
                    <strong className="text-primary">Ночью 14 января 1944</strong> началась атака. Немцы оказали ожесточённое сопротивление.
                    Бои шли 3 дня, улица за улицей.
                  </p>
                  <p>
                    <strong className="text-primary">17 января город был взят</strong>. Немцы потеряли убитыми более 300 человек,
                    остальные бежали. Партизаны захватили склады с оружием и продовольствием.
                  </p>
                  <p>
                    <strong className="text-primary">2 недели партизаны держали Мозырь</strong>, пока подходила Красная Армия.
                    В городе восстановили советскую власть, организовали медпункты, раздали продукты населению.
                  </p>
                  <p className="text-primary font-semibold">
                    Когда пришли войска, они увидели красный флаг над городом - партизаны встречали их как хозяева.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg text-center text-foreground/80">
                  <strong className="text-primary">Освобождение городов</strong> партизанами показало, что они способны не только на диверсии.
                  Они могли штурмовать укреплённые гарнизоны, держать оборону и управлять территориями.{" "}
                  <strong className="text-primary">Это была настоящая армия</strong>, действовавшая в тылу врага.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Page34;