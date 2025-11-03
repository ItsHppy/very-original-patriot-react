import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Map, Users, Building2, School, Heart } from "lucide-react";
import partisanZoneImg from "@/assets/partisan-zone.jpg";

const zoneFeatures = [
  {
    icon: Users,
    title: "18 партизанских бригад",
    description: "17 000 вооруженных бойцов",
    color: "text-primary"
  },
  {
    icon: Building2,
    title: "Советская власть",
    description: "Сельсоветы, исполкомы, милиция",
    color: "text-accent"
  },
  {
    icon: School,
    title: "Школы и больницы",
    description: "Работали прямо в лесу",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "Мирная жизнь",
    description: "Посевные работы, сбор налогов",
    color: "text-accent"
  }
];

const infrastructure = [
  {
    category: "Медицина",
    items: [
      "12 госпиталей на 500 коек",
      "30+ врачей и фельдшеров",
      "Операционные в землянках",
      "Аптеки с трофейными медикаментами"
    ]
  },
  {
    category: "Образование",
    items: [
      "15 школ для детей беженцев",
      "Курсы минёров и радистов",
      "Библиотеки с книгами",
      "Обучение грамоте взрослых"
    ]
  },
  {
    category: "Производство",
    items: [
      "Мастерские по ремонту оружия",
      "Пошивочные мастерские",
      "Кузницы и столярные цеха",
      "Производство мин и гранат"
    ]
  },
  {
    category: "Управление",
    items: [
      "Райисполкомы и сельсоветы",
      "Партизанская милиция",
      "Почта и телеграф",
      "Суды и прокуратура"
    ]
  }
];

const timeline = [
  { date: "Лето 1942", event: "Начало формирования зоны", brigades: 8 },
  { date: "Осень 1942", event: "Объединение нескольких районов", brigades: 12 },
  { date: "Весна 1943", event: "Пик контроля территории", brigades: 18 },
  { date: "1943-1944", event: "Отражение карательных операций", brigades: 18 }
];

const Page27 = () => {
  const [selectedInfra, setSelectedInfra] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <BookNavigation currentPage={27} />
      
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="outline" className="mb-4">
                Страница 27
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Полоцко-Лепельская партизанская зона
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Крупнейшая свободная территория в тылу врага - 3000 км² под контролем партизан
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={partisanZoneImg}
                alt="Полоцко-Лепельская партизанская зона"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  Настоящее государство в тылу врага
                </p>
              </div>
            </div>

            {/* Territory Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3000 км²</div>
                  <div className="text-muted-foreground">площадь зоны</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">17 000</div>
                  <div className="text-muted-foreground">партизан</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">40 000+</div>
                  <div className="text-muted-foreground">мирных жителей</div>
                </CardContent>
              </Card>
            </div>

            {/* Zone Features */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Map className="w-8 h-8 text-primary" />
                  Что было в партизанской зоне
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {zoneFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all hover:scale-105"
                    >
                      <feature.icon className={`w-12 h-12 mb-4 ${feature.color}`} />
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Развитие партизанской зоны
                </h2>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 hidden md:block" />
                  
                  <div className="space-y-8">
                    {timeline.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-6 ${
                          idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                      >
                        <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                          <div className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-colors">
                            <Badge variant="outline" className="mb-2">
                              {item.date}
                            </Badge>
                            <h3 className="text-xl font-semibold mb-2">{item.event}</h3>
                            <p className="text-primary font-medium">{item.brigades} бригад</p>
                          </div>
                        </div>
                        
                        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10 hidden md:block flex-shrink-0" />
                        
                        <div className="flex-1 hidden md:block" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Infrastructure */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">
                  Инфраструктура партизанской зоны
                </h2>
                <p className="text-muted-foreground mb-8">
                  Нажмите на категорию, чтобы увидеть детали
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {infrastructure.map((infra, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedInfra(idx)}
                      className={`p-6 rounded-lg border-2 text-left transition-all hover:scale-105 ${
                        selectedInfra === idx
                          ? "border-primary bg-primary/10 shadow-lg"
                          : "border-primary/20 bg-muted/30 hover:bg-muted/50"
                      }`}
                    >
                      <h3 className="text-xl font-semibold">{infra.category}</h3>
                    </button>
                  ))}
                </div>

                {selectedInfra !== null && (
                  <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 animate-fade-in">
                    <h3 className="text-2xl font-bold mb-4">{infrastructure[selectedInfra].category}</h3>
                    <div className="grid gap-3">
                      {infrastructure[selectedInfra].items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-lg bg-background/50"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Daily Life */}
            <Card className="mb-12 border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Мирная жизнь в зоне</h2>
                <div className="space-y-4 text-foreground/90">
                  <p>
                    В партизанской зоне жизнь шла почти как в мирное время. <strong className="text-primary">Работали школы</strong> -
                    дети беженцев учились читать и писать прямо в лесных землянках.
                  </p>
                  <p>
                    <strong className="text-primary">Больницы принимали</strong> не только раненых партизан, но и мирных жителей.
                    Врачи делали сложные операции с трофейными инструментами.
                  </p>
                  <p>
                    <strong className="text-primary">Работали сельсоветы</strong> - собирали налоги продуктами для партизан,
                    организовывали посевные работы. Действовала милиция, которая следила за порядком.
                  </p>
                  <p>
                    <strong className="text-primary">Даже почта работала</strong> - письма доставлялись между отрядами и деревнями.
                    В типографиях печатали газеты. Мастерские чинили оружие и шили одежду.
                  </p>
                  <p className="text-primary font-semibold">
                    Это было настоящее государство в тылу врага - советская власть, которую немцы не смогли уничтожить.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg text-center text-foreground/80">
                  <strong className="text-primary">Полоцко-Лепельская зона</strong> стала символом партизанского сопротивления.
                  На территории размером с небольшую страну{" "}
                  <strong className="text-primary">действовала советская власть</strong>, работали школы и больницы,
                  а 17 000 партизан держали оборону против немецких карательных операций.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Page27;