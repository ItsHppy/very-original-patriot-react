import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Calendar, Target, Map, TrendingUp } from "lucide-react";
import operationConcertImg from "@/assets/operation-concert.jpg";

const operationPhases = [
  {
    date: "19 сентября 1943",
    title: "Начало операции",
    description: "Одновременный подрыв рельсов на всей территории Беларуси",
    rails: "40 000 рельсов",
    brigades: 193
  },
  {
    date: "25 сентября 1943",
    title: "Пик активности",
    description: "Массовые подрывы на ключевых магистралях",
    rails: "25 000 рельсов",
    brigades: 193
  },
  {
    date: "Октябрь 1943",
    title: "Продолжение ударов",
    description: "Повторные подрывы на восстановленных участках",
    rails: "15 000 рельсов",
    brigades: 193
  },
  {
    date: "Ноябрь 1943",
    title: "Завершение",
    description: "Последние крупные диверсии",
    rails: "10 000 рельсов",
    brigades: 193
  }
];

const regions = [
  {
    name: "Витебская область",
    rails: 28000,
    brigades: 52,
    effect: "Парализованы пути на север"
  },
  {
    name: "Минская область",
    rails: 25000,
    brigades: 48,
    effect: "Остановлено движение к Москве"
  },
  {
    name: "Гомельская область",
    rails: 20000,
    brigades: 42,
    effect: "Блокирован юг Беларуси"
  },
  {
    name: "Брестская область",
    rails: 17000,
    brigades: 51,
    effect: "Нарушены пути на Украину"
  }
];

const impact = [
  {
    category: "Военный эффект",
    results: [
      "Задержка переброски 9 немецких дивизий",
      "Срыв планов наступления группы армий «Центр»",
      "Нехватка боеприпасов на фронте",
      "Невозможность эвакуации раненых"
    ]
  },
  {
    category: "Экономический ущерб",
    results: [
      "90 000 подорванных рельсов",
      "Тысячи часов простоя поездов",
      "Миллионы марок на восстановление",
      "Отвлечение сил с фронта на охрану путей"
    ]
  },
  {
    category: "Моральный эффект",
    results: [
      "Паника в немецком тылу",
      "Подъём духа партизан",
      "Уверенность в победе",
      "Признание силы партизанского движения"
    ]
  }
];

const Page31 = () => {
  const [selectedRegion, setSelectedRegion] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <BookNavigation currentPage={31} />
      
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="outline" className="mb-4">
                Страница 31
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Операция «Концерт»
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Сентябрь-ноябрь 1943 года. Продолжение Рельсовой войны - 90 000 рельсов подорвано одновременно
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={operationConcertImg}
                alt="Операция Концерт 1943"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  Грандиозная диверсия, парализовавшая тыл врага
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">90 000</div>
                  <div className="text-sm text-muted-foreground">рельсов подорвано</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">193</div>
                  <div className="text-sm text-muted-foreground">партизанские бригады</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2 месяца</div>
                  <div className="text-sm text-muted-foreground">длительность операции</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">9</div>
                  <div className="text-sm text-muted-foreground">дивизий задержано</div>
                </CardContent>
              </Card>
            </div>

            {/* Timeline */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-primary" />
                  Хронология операции «Концерт»
                </h2>
                <div className="space-y-6">
                  {operationPhases.map((phase, idx) => (
                    <div
                      key={idx}
                      className="relative p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all hover:scale-[1.02]"
                    >
                      <Badge variant="outline" className="mb-3">
                        {phase.date}
                      </Badge>
                      <h3 className="text-2xl font-semibold mb-3">{phase.title}</h3>
                      <p className="text-muted-foreground mb-4">{phase.description}</p>
                      <div className="flex flex-wrap gap-4">
                        <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                          <span className="text-sm text-muted-foreground">Подорвано: </span>
                          <span className="font-bold text-primary">{phase.rails}</span>
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                          <span className="text-sm text-muted-foreground">Бригад: </span>
                          <span className="font-bold text-primary">{phase.brigades}</span>
                        </div>
                      </div>

                      {/* Progress indicator */}
                      {idx < operationPhases.length - 1 && (
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-primary/30" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Regional Map */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Map className="w-8 h-8 text-primary" />
                  Операция по регионам
                </h2>
                <p className="text-muted-foreground mb-8">
                  Нажмите на регион, чтобы увидеть результаты
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {regions.map((region, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedRegion(idx)}
                      className={`p-6 rounded-lg border-2 text-left transition-all hover:scale-105 ${
                        selectedRegion === idx
                          ? "border-primary bg-primary/10 shadow-lg"
                          : "border-primary/20 bg-muted/30 hover:bg-muted/50"
                      }`}
                    >
                      <h3 className="text-xl font-semibold mb-2">{region.name}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-primary font-bold">{region.rails.toLocaleString()} рельсов</span>
                        <span className="text-muted-foreground">{region.brigades} бригад</span>
                      </div>
                    </button>
                  ))}
                </div>

                {selectedRegion !== null && (
                  <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 animate-fade-in">
                    <h3 className="text-2xl font-bold mb-4">{regions[selectedRegion].name}</h3>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-4 rounded-lg bg-background/50">
                        <div className="text-3xl font-bold text-primary mb-1">
                          {regions[selectedRegion].rails.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">рельсов</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background/50">
                        <div className="text-3xl font-bold text-primary mb-1">
                          {regions[selectedRegion].brigades}
                        </div>
                        <div className="text-sm text-muted-foreground">бригад</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background/50">
                        <div className="text-sm text-muted-foreground mb-1">Эффект</div>
                        <div className="text-sm font-semibold">{regions[selectedRegion].effect}</div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Impact */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  Результаты операции
                </h2>
                <div className="space-y-6">
                  {impact.map((category, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30"
                    >
                      <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                      <div className="grid gap-3">
                        {category.results.map((result, resultIdx) => (
                          <div
                            key={resultIdx}
                            className="flex items-start gap-3 p-3 rounded-lg bg-background/50"
                          >
                            <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Coordination */}
            <Card className="mb-12 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Координация удара</h2>
                <div className="space-y-4 text-foreground/90">
                  <p>
                    <strong className="text-primary">Впервые в истории</strong> 193 партизанские бригады действовали
                    как единый организм. Операцию координировал Центральный штаб партизанского движения в Москве.
                  </p>
                  <p>
                    <strong className="text-primary">За месяц до начала</strong> партизаны получили приказ:
                    разведать все железнодорожные участки, подготовить взрывчатку, выбрать места подрывов.
                  </p>
                  <p>
                    <strong className="text-primary">19 сентября в 0:00</strong> по радио передали кодовое слово «Концерт».
                    В эту ночь по всей Беларуси одновременно прогремели тысячи взрывов.
                  </p>
                  <p>
                    <strong className="text-primary">Немцы были в шоке</strong>. Восстанавливать пути начали немедленно,
                    но партизаны подрывали уже отремонтированные участки снова и снова.
                  </p>
                  <p className="text-primary font-semibold">
                    Операция «Концерт» парализовала тыл группы армий «Центр» на два месяца.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg text-center text-foreground/80">
                  <strong className="text-primary">Операция «Концерт»</strong> стала кульминацией Рельсовой войны.
                  Координация 193 бригад и одновременный подрыв{" "}
                  <strong className="text-primary">90 000 рельсов</strong> показали мощь партизанского движения.
                  Немецкий тыл был парализован именно тогда, когда это было нужно Красной Армии.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Page31;