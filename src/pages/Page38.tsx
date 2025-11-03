import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { AlertTriangle, Skull, MapPin, Shield } from "lucide-react";
import partisanMemorialImg from "@/assets/partisan-memorial.jpg";

const germanMethods = [
  {
    method: "Облавы в лесах",
    description: "Прочёсывание лесов цепью солдат с собаками. Партизаны уходили в болота или глубже в чащу.",
    frequency: "Постоянно"
  },
  {
    method: "Блокады лагерей",
    description: "Окружение партизанских баз войсками. Пытались взять измором или штурмом.",
    frequency: "10-15 крупных операций"
  },
  {
    method: "Сжигание деревень",
    description: "Карательные отряды сжигали деревни, подозреваемые в помощи партизанам. Жителей убивали или угоняли.",
    frequency: "9 200+ деревень сожжено"
  },
  {
    method: "Пытки пленных",
    description: "Пойманных партизан пытали, чтобы выведать местонахождение отрядов. Затем казнили.",
    frequency: "Тысячи случаев"
  }
];

const traitors = [
  "Местные полицаи - служили немцам за еду",
  "Предатели из населения - выдавали партизан за деньги",
  "Бывшие партизаны - сломленные пытками, шли на предательство",
  "Агенты-провокаторы - внедрялись в отряды под видом своих"
];

const executionPlaces = [
  {
    place: "Тростенец (под Минском)",
    victims: "50 000+ человек",
    description: "Один из крупнейших лагерей смерти в Беларуси. Здесь расстреливали партизан, подпольщиков, евреев."
  },
  {
    place: "Яма (Минск)",
    victims: "100 000+ человек",
    description: "Массовые расстрелы в центре Минска. Многие партизаны и подпольщики погибли здесь."
  },
  {
    place: "Лесные массовые захоронения",
    victims: "Тысячи",
    description: "Расстрелянных партизан хоронили в лесах. Многие могилы найдены только после войны."
  },
  {
    place: "Публичные казни",
    victims: "Сотни",
    description: "Партизан вешали на площадях городов и деревень - \"как предупреждение\" населению."
  }
];

const tortures = [
  "Избиения и пытки в гестапо",
  "Лишение сна и еды",
  "Пытки холодом зимой",
  "Угрозы расправой над семьёй",
  "Публичные казни перед казнью"
];

const losses = {
  killed: "45 000 партизан",
  civilian: "209 деревень сожжено вместе с жителями (Хатынь и другие)",
  total: "2.2 миллиона мирных жителей Беларуси погибло"
};

const Page38 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <BookNavigation currentPage={38} />
      
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="destructive" className="mb-4">
                Страница 38 - Тяжёлая тема
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Предательство и расстрелы
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Тёмная сторона войны - пытки, казни, предательство. 45 000 партизан погибло в борьбе.
              </p>
            </div>

            {/* Warning */}
            <Card className="mb-12 border-2 border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Важно знать правду</h3>
                    <p className="text-foreground/90">
                      Эта страница рассказывает о трагических событиях. Мы помним об этом, чтобы такое никогда не повторилось.
                      История требует говорить правду - даже о самом страшном.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={partisanMemorialImg}
                alt="Памятник погибшим партизанам"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  Мы помним каждого
                </p>
              </div>
            </div>

            {/* Losses */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Skull className="w-8 h-8 text-primary" />
                  Потери партизанского движения
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-8 rounded-lg border-2 border-primary/20 bg-muted/30">
                    <div className="text-5xl font-bold text-primary mb-3">{losses.killed}</div>
                    <div className="text-sm text-muted-foreground">партизан погибло</div>
                  </div>
                  <div className="text-center p-8 rounded-lg border-2 border-primary/20 bg-muted/30">
                    <div className="text-5xl font-bold text-primary mb-3">209</div>
                    <div className="text-sm text-muted-foreground">деревень сожжено с жителями</div>
                  </div>
                  <div className="text-center p-8 rounded-lg border-2 border-primary/20 bg-muted/30">
                    <div className="text-5xl font-bold text-primary mb-3">2.2 млн</div>
                    <div className="text-sm text-muted-foreground">мирных жителей погибло</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* German Methods */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  Как немцы боролись с партизанами
                </h2>
                <div className="space-y-4">
                  {germanMethods.map((method, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold">{method.method}</h3>
                        <Badge variant="outline">{method.frequency}</Badge>
                      </div>
                      <p className="text-foreground/90">{method.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Traitors */}
            <Card className="mb-12 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Предатели</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Не все были героями. Некоторые предавали партизан из страха, за деньги или после пыток.
                </p>
                <div className="grid gap-3">
                  {traitors.map((traitor, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-primary/20"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{traitor}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-lg bg-background/30 border border-primary/20">
                  <p className="text-sm">
                    <strong className="text-primary">Партизаны боролись с предательством жёстко</strong>.
                    Пойманных предателей судили партизанским судом и казнили. Это было необходимо для выживания отрядов.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Execution Places */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary" />
                  Места казней
                </h2>
                <div className="space-y-6">
                  {executionPlaces.map((place, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30"
                    >
                      <h3 className="text-2xl font-bold mb-2">{place.place}</h3>
                      <div className="text-primary font-semibold mb-3">
                        Жертв: {place.victims}
                      </div>
                      <p className="text-foreground/90">{place.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tortures */}
            <Card className="mb-12 border-primary/20 bg-muted/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Пытки пленных партизан</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Немцы пытали пленных, чтобы выведать расположение отрядов. Большинство партизан не выдавали товарищей.
                </p>
                <div className="grid gap-3 mb-6">
                  {tortures.map((torture, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-lg bg-background/50"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{torture}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm">
                    <strong className="text-primary">Многие партизаны предпочитали смерть предательству</strong>.
                    Они знали: если выдадут товарищей, погибнут сотни других. Их стойкость спасала отряды.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* One Story */}
            <Card className="mb-12 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">История одного расстрела</h2>
                <div className="space-y-4 text-foreground/90">
                  <p>
                    <strong className="text-primary">Октябрь 1943 года</strong>. Немцы схватили группу из 12 партизан
                    после неудачной засады. Среди них был 16-летний Иван.
                  </p>
                  <p>
                    <strong className="text-primary">Три дня пыток</strong>. Немцы требовали назвать расположение лагеря.
                    Ни один не сказал ни слова. Даже мальчик.
                  </p>
                  <p>
                    <strong className="text-primary">На четвёртый день</strong> их привели на площадь деревни.
                    Согнали всех жителей - «для устрашения». Публичный расстрел.
                  </p>
                  <p>
                    <strong className="text-primary">Перед казнью</strong> командир группы крикнул: «Партизаны не сдаются!
                    Мы победим!». Все 12 погибли, но отряд остался невредим.
                  </p>
                  <p className="text-primary font-semibold">
                    Их имена записаны на мемориале. Мы помним.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg text-center text-foreground/80">
                  <strong className="text-primary">45 000 партизан отдали свои жизни</strong> за свободу Беларуси.
                  Они не сдались, не предали, боролись до конца. Их подвиг и жертвы{" "}
                  <strong className="text-primary">мы обязаны помнить</strong>, чтобы такое никогда не повторилось.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Page38;