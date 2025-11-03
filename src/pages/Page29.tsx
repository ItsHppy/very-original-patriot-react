import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Package, Plane, Box, Shield } from "lucide-react";
import supplyDropImg from "@/assets/supply-drop.jpg";

const cargoTypes = [
  {
    icon: Shield,
    title: "Оружие",
    items: [
      "Винтовки и автоматы",
      "Пулемёты ДП и Максим",
      "Противотанковые ружья",
      "Гранаты Ф-1 и РГД-33"
    ],
    weight: "4 500 тонн",
    percentage: 30
  },
  {
    icon: Box,
    title: "Боеприпасы",
    items: [
      "Патроны для винтовок",
      "Патроны для автоматов",
      "Взрывчатка (тол, аммонал)",
      "Детонаторы и запалы"
    ],
    weight: "3 200 тонн",
    percentage: 21
  },
  {
    icon: Package,
    title: "Медикаменты",
    items: [
      "Бинты и перевязочные материалы",
      "Обезболивающие препараты",
      "Антисептики и йод",
      "Хирургические инструменты"
    ],
    weight: "1 800 тонн",
    percentage: 12
  },
  {
    icon: Package,
    title: "Продовольствие",
    items: [
      "Консервы мясные",
      "Сухари и галеты",
      "Сахар и соль",
      "Концентраты"
    ],
    weight: "2 500 тонн",
    percentage: 17
  },
  {
    icon: Package,
    title: "Снаряжение",
    items: [
      "Радиостанции",
      "Типографское оборудование",
      "Обмундирование",
      "Газеты и листовки"
    ],
    weight: "3 000 тонн",
    percentage: 20
  }
];

const supplyRoute = [
  {
    stage: "Москва",
    description: "Центральный штаб партизанского движения формирует грузы",
    icon: "🏛️"
  },
  {
    stage: "Аэродром вылета",
    description: "Упаковка в контейнеры, прикрепление парашютов",
    icon: "✈️"
  },
  {
    stage: "Полёт",
    description: "Ночной полёт через линию фронта, высота 2-3 км",
    icon: "🌙"
  },
  {
    stage: "Сброс",
    description: "По сигналу костров партизан сбрасывают груз",
    icon: "📦"
  },
  {
    stage: "Партизанский лагерь",
    description: "Партизаны собирают контейнеры и распределяют грузы",
    icon: "🎯"
  }
];

const pilots = [
  {
    name: "Александр Мамкин",
    achievement: "Спас 90 детей из Полоцкого детдома",
    fate: "Погиб при посадке горящего самолёта, Герой СССР"
  },
  {
    name: "Иван Зайцев",
    achievement: "Более 200 вылетов к партизанам",
    fate: "Дожил до победы, награждён орденами"
  },
  {
    name: "Василий Карпов",
    achievement: "Доставил 300+ тонн грузов",
    fate: "Сбит в 1943, посмертно Герой СССР"
  }
];

const Page29 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <BookNavigation currentPage={29} />
      
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="outline" className="mb-4">
                Страница 29
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Снабжение с Большой земли
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                15 000 тонн грузов доставлено партизанам по воздуху - от Москвы до леса
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={supplyDropImg}
                alt="Сброс грузов партизанам"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  Парашюты над партизанским лагерем
                </p>
              </div>
            </div>

            {/* Total Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15 000</div>
                  <div className="text-muted-foreground">тонн грузов</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2 000+</div>
                  <div className="text-muted-foreground">вылетов</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1941-1944</div>
                  <div className="text-muted-foreground">годы поставок</div>
                </CardContent>
              </Card>
            </div>

            {/* Cargo Types */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Package className="w-8 h-8 text-primary" />
                  Что сбрасывали партизанам
                </h2>
                <div className="space-y-6">
                  {cargoTypes.map((cargo, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <cargo.icon className="w-8 h-8 text-primary" />
                          <div>
                            <h3 className="text-xl font-semibold">{cargo.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {cargo.weight} ({cargo.percentage}% от общего веса)
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="w-full bg-background/50 rounded-full h-2 mb-4">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${cargo.percentage}%` }}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-2">
                        {cargo.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Supply Route */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Plane className="w-8 h-8 text-primary" />
                  Путь груза: от Москвы до партизан
                </h2>
                <div className="relative">
                  {/* Route line */}
                  <div className="absolute left-12 top-0 bottom-0 w-1 bg-primary/20 hidden md:block" />

                  <div className="space-y-8">
                    {supplyRoute.map((stage, idx) => (
                      <div key={idx} className="flex gap-6">
                        <div className="flex-shrink-0 w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center border-4 border-background text-4xl z-10">
                          {stage.icon}
                        </div>
                        <div className="flex-1 pt-4">
                          <div className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-colors">
                            <h3 className="text-xl font-semibold mb-2">{stage.stage}</h3>
                            <p className="text-muted-foreground">{stage.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pilots */}
            <Card className="mb-12 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Легендарные лётчики</h2>
                <p className="text-muted-foreground mb-8">
                  Они летали ночью, без истребительного прикрытия, рискуя быть сбитыми
                </p>
                <div className="space-y-4">
                  {pilots.map((pilot, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg bg-background/50 border-2 border-primary/20 hover:border-primary/40 transition-colors"
                    >
                      <h3 className="text-xl font-semibold mb-2">{pilot.name}</h3>
                      <div className="space-y-1">
                        <div>
                          <span className="text-sm text-muted-foreground">Подвиг: </span>
                          <span className="text-primary font-medium">{pilot.achievement}</span>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Судьба: </span>
                          <span>{pilot.fate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How it worked */}
            <Card className="mb-12 border-primary/20 bg-muted/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Как происходил сброс грузов</h2>
                <div className="space-y-4 text-foreground/90">
                  <p>
                    <strong className="text-primary">Партизаны разжигали костры</strong> на поляне в форме буквы «Т».
                    Это был сигнал лётчику: здесь можно сбрасывать груз.
                  </p>
                  <p>
                    <strong className="text-primary">Самолёт заходил на малой высоте</strong> - 100-200 метров.
                    Из люка выталкивали контейнеры и мешки с парашютами. Каждый контейнер весил 50-100 кг.
                  </p>
                  <p>
                    <strong className="text-primary">Партизаны собирали грузы</strong> сразу после сброса.
                    Всё нужно было быстро спрятать - немцы могли заметить парашюты и устроить облаву.
                  </p>
                  <p>
                    <strong className="text-primary">Иногда сбрасывали без парашютов</strong> - мешки с зерном или мукой
                    падали прямо на снег. Они не разбивались благодаря мягкой «подушке».
                  </p>
                  <p className="text-primary font-semibold">
                    За одну ночь партизанский отряд мог получить тонну оружия, боеприпасов и продовольствия.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg text-center text-foreground/80">
                  <strong className="text-primary">Снабжение с Большой земли</strong> было жизненно важным для партизан.
                  Без оружия, боеприпасов и медикаментов они не смогли бы вести борьбу.{" "}
                  <strong className="text-primary">15 000 тонн грузов</strong> - это результат героизма лётчиков,
                  которые рисковали жизнью каждый полёт.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Page29;