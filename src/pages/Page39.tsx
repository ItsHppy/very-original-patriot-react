import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Flame, Skull, AlertTriangle, Shield } from "lucide-react";
import punitiveForcesImg from "@/assets/punitive-forces.jpg";

const punishers = [
  {
    unit: "СС и полиция безопасности",
    strength: "Десятки тысяч",
    methods: "Массовые расстрелы, сжигание деревень, пытки",
    notorious: "Дирлевангер, Каминский"
  },
  {
    unit: "Коллаборационисты",
    strength: "Местные полицейские батальоны",
    methods: "Облавы, выявление партизан, карательные рейды",
    notorious: "Предатели из местных"
  },
  {
    unit: "Венгерские части",
    strength: "Несколько дивизий",
    methods: "Прочёсывание лесов, блокады",
    notorious: "Особая жестокость"
  },
  {
    unit: "Власовцы (РОА)",
    strength: "Отдельные батальоны",
    methods: "Борьба с партизанами под немецким командованием",
    notorious: "Бывшие советские солдаты"
  }
];

const majorOperations = [
  {
    name: "Операция «Котбус»",
    date: "Май-июнь 1943",
    region: "Витебская и Минская области",
    forces: "17 000 немецких солдат",
    goal: "Уничтожение Лепельской партизанской зоны",
    result: "Партизаны отступили в болота, сохранив силы. Немцы сожгли 200+ деревень."
  },
  {
    name: "Операция «Болотная лихорадка»",
    date: "Август-сентябрь 1942",
    region: "Полесье",
    forces: "10 000 солдат + авиация",
    goal: "Прочёсывание болот, уничтожение отрядов Чернышёва",
    result: "Партизаны ушли глубже в болота. Немцы потеряли сотни солдат, увязнув в топях."
  },
  {
    name: "Операция «Зимнее волшебство»",
    date: "Февраль-март 1943",
    region: "Ушачско-Лепельская зона",
    forces: "15 000 солдат",
    goal: "Окружение и уничтожение партизанских бригад",
    result: "Партизаны прорвали блокаду, эвакуировали мирных. Немцы не достигли цели."
  }
];

const germanMethods = [
  {
    method: "Сжигание деревень",
    description: "Деревни, подозреваемые в помощи партизанам, сжигались дотла. Жителей убивали или угоняли в Германию.",
    scale: "9 200+ деревень"
  },
  {
    method: "Заложники",
    description: "Брали заложников из деревень. Если партизаны совершали диверсию, заложников расстреливали.",
    scale: "Тысячи убитых"
  },
  {
    method: "Блокады и прочёсывания",
    description: "Окружали леса цепью солдат, прочёсывали территорию. Всех найденных подозреваемых убивали на месте.",
    scale: "Десятки операций"
  },
  {
    method: "Минирование лесов",
    description: "Минировали тропы и поляны, чтобы подорвать партизан. Гибли и мирные жители.",
    scale: "Тысячи мин"
  }
];

const partisanResistance = [
  {
    tactic: "Маневр и уход",
    description: "При окружении партизаны быстро отступали в болота или глубже в леса, где немцы не могли их найти"
  },
  {
    tactic: "Контратаки на фланги",
    description: "Атаковали немецкие колонны с флангов, нарушая блокады"
  },
  {
    tactic: "Диверсии в тылу",
    description: "Пока немцы искали их в лесу, партизаны взрывали дороги и склады в тылу"
  },
  {
    tactic: "Эвакуация мирных",
    description: "Первым делом эвакуировали женщин, детей и стариков из зоны операции"
  },
  {
    tactic: "Партизанская разведка",
    description: "Знали о планах немцев заранее через разведчиков и подпольщиков"
  }
];

const burnedVillages = [
  "Хатынь - 149 жителей сожжено в сарае",
  "Дальва - 329 человек сожжено заживо",
  "Борки - вся деревня уничтожена",
  "Ола - 1 758 человек убито",
  "Всего 209 деревень сожжено вместе с жителями"
];

const Page39 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <BookNavigation currentPage={39} />
      
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="destructive" className="mb-4">
                Страница 39 - Тяжёлая тема
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Каратели против партизан
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Немцы бросили против партизан десятки тысяч карателей, но сломить сопротивление не смогли
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={punitiveForcesImg}
                alt="Карательные операции"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  Партизаны выдержали самые жестокие операции
                </p>
              </div>
            </div>

            {/* Warning */}
            <Card className="mb-12 border-2 border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Важно помнить</h3>
                    <p className="text-foreground/90">
                      Немецкие карательные операции были направлены не только против партизан, но и против мирного населения.
                      Тысячи деревень сожжены, сотни тысяч людей убиты. Это была политика террора.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Punishers */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Skull className="w-8 h-8 text-primary" />
                  Кто воевал с партизанами
                </h2>
                <div className="space-y-4">
                  {punishers.map((punisher, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30"
                    >
                      <h3 className="text-2xl font-semibold mb-3">{punisher.unit}</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <span className="text-sm text-muted-foreground">Численность: </span>
                          <span className="font-semibold">{punisher.strength}</span>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Известны: </span>
                          <span className="text-primary font-semibold">{punisher.notorious}</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Методы: </span>
                        <span>{punisher.methods}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Major Operations */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Flame className="w-8 h-8 text-primary" />
                  Крупнейшие карательные операции
                </h2>
                <div className="space-y-6">
                  {majorOperations.map((operation, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{operation.name}</h3>
                          <Badge variant="outline">{operation.date}</Badge>
                        </div>
                      </div>
                      
                      <div className="grid gap-3 mb-4">
                        <div>
                          <span className="text-sm text-muted-foreground">Регион: </span>
                          <span>{operation.region}</span>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Силы немцев: </span>
                          <span className="font-semibold text-primary">{operation.forces}</span>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Цель: </span>
                          <span>{operation.goal}</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                        <div className="text-sm text-muted-foreground mb-1">Результат:</div>
                        <p className="font-semibold">{operation.result}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* German Methods */}
            <Card className="mb-12 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Методы карателей</h2>
                <div className="space-y-4">
                  {germanMethods.map((method, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg bg-background/50 border-2 border-primary/20"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold">{method.method}</h3>
                        <Badge variant="destructive">{method.scale}</Badge>
                      </div>
                      <p className="text-foreground/90">{method.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Partisan Resistance */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  Сопротивление партизан
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Партизаны не сдавались. Они разработали тактику противодействия карателям:
                </p>
                <div className="grid gap-4">
                  {partisanResistance.map((tactic, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-5 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                        <span className="text-sm font-bold text-primary">{idx + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{tactic.tactic}</h3>
                        <p className="text-sm text-muted-foreground">{tactic.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Burned Villages */}
            <Card className="mb-12 border-primary/20 bg-muted/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Сожжённые деревни</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Немцы мстили мирному населению за помощь партизанам. Деревни сжигались вместе с жителями.
                </p>
                <div className="grid gap-3 mb-6">
                  {burnedVillages.map((village, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-primary/20"
                    >
                      <Flame className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>{village}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 rounded-lg bg-primary/5 border-2 border-primary/20">
                  <p className="text-center font-semibold">
                    <strong className="text-primary">9 200 деревень</strong> было сожжено в Беларуси за годы войны.
                    Из них <strong className="text-primary">209 деревень сожжены вместе с жителями</strong>.
                    Это была политика геноцида.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Partisan Endurance */}
            <Card className="mb-12 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Стойкость и маневр</h2>
                <div className="space-y-4 text-foreground/90">
                  <p>
                    <strong className="text-primary">Немцы бросили против партизан десятки тысяч солдат</strong>,
                    провели сотни карательных операций, но сломить сопротивление не смогли.
                  </p>
                  <p>
                    <strong className="text-primary">Партизаны знали местность</strong> лучше любого немецкого солдата.
                    Они уходили в болота, где техника увязала, в глухие леса, где немцы терялись.
                  </p>
                  <p>
                    <strong className="text-primary">При окружении партизаны не паниковали</strong> - они прорывались
                    через слабые места, отступали организованно, эвакуировали раненых и мирных.
                  </p>
                  <p>
                    <strong className="text-primary">Народная поддержка</strong> была ключом к выживанию.
                    Мирные жители, несмотря на террор, продолжали помогать партизанам - предупреждали об облавах,
                    прятали раненых, делились последним.
                  </p>
                  <p className="text-primary font-semibold">
                    Немцы проиграли войну с партизанами, потому что воевали не только с бойцами - против них был весь народ.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg text-center text-foreground/80">
                  <strong className="text-primary">Карательные операции</strong> были самым жестоким испытанием для партизан.
                  Но они выдержали. Их стойкость, маневр и поддержка народа{" "}
                  <strong className="text-primary">сломили планы оккупантов</strong>. Партизанское движение не было уничтожено -
                  оно только крепло.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Page39;