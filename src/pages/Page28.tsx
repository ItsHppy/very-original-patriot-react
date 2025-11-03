import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Plane, MapPin, Package, Activity } from "lucide-react";
import partisanAirfieldImg from "@/assets/partisan-airfield.jpg";

const airfields = [
  {
    name: "Бегомль",
    region: "Витебская область",
    brigades: ["Бригада имени Чкалова", "Бригада имени Фрунзе"],
    flights: 180,
    status: "Действовал 1942-1944"
  },
  {
    name: "Озаричи",
    region: "Полесье",
    brigades: ["Бригада Василия Чернышёва"],
    flights: 150,
    status: "Действовал 1943-1944"
  },
  {
    name: "Красное",
    region: "Минская область",
    brigades: ["Соединение Минай Шмырёва"],
    flights: 120,
    status: "Действовал 1943-1944"
  },
  {
    name: "Лисичицы",
    region: "Витебская область",
    brigades: ["Бригада имени Дзержинского"],
    flights: 95,
    status: "Действовал 1942-1944"
  }
];

const aircraftTypes = [
  {
    name: "По-2 (У-2)",
    role: "Лёгкий самолёт связи",
    capacity: "200-300 кг груза",
    features: "Мог садиться на короткие полосы",
    image: "✈️"
  },
  {
    name: "Р-5",
    role: "Разведчик-бомбардировщик",
    capacity: "До 500 кг груза",
    features: "Использовался для сброса",
    image: "✈️"
  },
  {
    name: "Ли-2",
    role: "Транспортный самолёт",
    capacity: "До 2 тонн груза",
    features: "Эвакуация раненых и детей",
    image: "✈️"
  }
];

const buildingProcess = [
  {
    step: "Выбор места",
    description: "Ровная поляна в лесу, скрытая от авиации противника",
    duration: "1-2 дня"
  },
  {
    step: "Расчистка",
    description: "Вырубка деревьев, удаление пней вручную",
    duration: "1-2 недели"
  },
  {
    step: "Выравнивание",
    description: "Выравнивание грунта лопатами, утрамбовка",
    duration: "1 неделя"
  },
  {
    step: "Маскировка",
    description: "Днём полосу маскировали ветками, ночью убирали",
    duration: "Постоянно"
  }
];

const cargoStats = {
  weapons: "4 500 тонн",
  ammo: "3 200 тонн",
  medicine: "1 800 тонн",
  food: "2 500 тонн",
  other: "3 000 тонн"
};

const Page28 = () => {
  const [selectedAirfield, setSelectedAirfield] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <BookNavigation currentPage={28} />
      
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="outline" className="mb-4">
                Страница 28
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Партизанские аэродромы
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                60+ посадочных площадок в лесах - воздушный мост между партизанами и Большой землёй
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={partisanAirfieldImg}
                alt="Партизанские аэродромы"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  Ночные полёты в тыл врага
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">60+</div>
                  <div className="text-sm text-muted-foreground">аэродромов</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                  <div className="text-sm text-muted-foreground">вылетов</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15 000</div>
                  <div className="text-sm text-muted-foreground">тонн груза</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">7 000+</div>
                  <div className="text-sm text-muted-foreground">эвакуировано</div>
                </CardContent>
              </Card>
            </div>

            {/* Airfields Map */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary" />
                  Крупнейшие партизанские аэродромы
                </h2>
                <p className="text-muted-foreground mb-8">
                  Нажмите на аэродром, чтобы узнать подробности
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {airfields.map((airfield, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedAirfield(idx)}
                      className={`p-6 rounded-lg border-2 text-left transition-all hover:scale-105 ${
                        selectedAirfield === idx
                          ? "border-primary bg-primary/10 shadow-lg"
                          : "border-primary/20 bg-muted/30 hover:bg-muted/50"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold">{airfield.name}</h3>
                        <Plane className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">{airfield.region}</p>
                      <p className="text-sm text-primary font-medium mt-2">
                        {airfield.flights} вылетов
                      </p>
                    </button>
                  ))}
                </div>

                {selectedAirfield !== null && (
                  <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 animate-fade-in">
                    <h3 className="text-2xl font-bold mb-4">{airfields[selectedAirfield].name}</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-muted-foreground">Регион: </span>
                        <span className="font-semibold">{airfields[selectedAirfield].region}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Обслуживал бригады: </span>
                        <div className="mt-2 space-y-1">
                          {airfields[selectedAirfield].brigades.map((brigade, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary" />
                              <span className="text-sm">{brigade}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Совершено вылетов: </span>
                        <span className="font-semibold text-primary">{airfields[selectedAirfield].flights}</span>
                      </div>
                      <div>
                        <Badge variant="outline">{airfields[selectedAirfield].status}</Badge>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Aircraft Types */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Plane className="w-8 h-8 text-primary" />
                  Типы самолётов
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {aircraftTypes.map((aircraft, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all hover:scale-105"
                    >
                      <div className="text-5xl mb-4 text-center">{aircraft.image}</div>
                      <h3 className="text-xl font-semibold mb-2 text-center">{aircraft.name}</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Роль: </span>
                          <span>{aircraft.role}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Грузоподъёмность: </span>
                          <span className="text-primary font-medium">{aircraft.capacity}</span>
                        </div>
                        <div className="text-muted-foreground">{aircraft.features}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Building Process */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Как строили аэродромы в лесу</h2>
                <div className="space-y-4">
                  {buildingProcess.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex gap-6 p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                        <span className="text-xl font-bold text-primary">{idx + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                        <p className="text-muted-foreground mb-2">{step.description}</p>
                        <Badge variant="outline">{step.duration}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm text-foreground/90">
                    <strong className="text-primary">Всё делалось вручную!</strong> Сотни партизан работали неделями,
                    чтобы создать ровную полосу длиной 400-600 метров. Днём аэродром маскировали ветками,
                    чтобы немецкие самолёты не заметили.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cargo Statistics */}
            <Card className="mb-12 border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Package className="w-8 h-8 text-primary" />
                  Что доставляли и вывозили
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Привозили:</h3>
                    <div className="space-y-3">
                      <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                        <div className="flex justify-between items-center">
                          <span>Оружие и боеприпасы</span>
                          <span className="font-bold text-primary">{cargoStats.weapons}</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                        <div className="flex justify-between items-center">
                          <span>Медикаменты</span>
                          <span className="font-bold text-primary">{cargoStats.medicine}</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                        <div className="flex justify-between items-center">
                          <span>Продовольствие</span>
                          <span className="font-bold text-primary">{cargoStats.food}</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                        <div className="flex justify-between items-center">
                          <span>Газеты, листовки</span>
                          <span className="font-bold text-primary">{cargoStats.other}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Увозили:</h3>
                    <div className="space-y-3">
                      <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                        <div className="flex items-center gap-3">
                          <Activity className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-semibold">Раненых партизан</div>
                            <div className="text-sm text-muted-foreground">Более 3 500 человек</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                        <div className="flex items-center gap-3">
                          <Activity className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-semibold">Детей беженцев</div>
                            <div className="text-sm text-muted-foreground">Более 2 000 детей</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                        <div className="flex items-center gap-3">
                          <Activity className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-semibold">Командиров на учёбу</div>
                            <div className="text-sm text-muted-foreground">В Москву и обратно</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                        <div className="flex items-center gap-3">
                          <Activity className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-semibold">Разведданные</div>
                            <div className="text-sm text-muted-foreground">Карты, документы</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-background/30 border border-primary/20">
                  <p className="text-sm text-center">
                    <strong className="text-primary">Всего за войну</strong> на партизанские аэродромы совершено более{" "}
                    <strong className="text-primary">2000 вылетов</strong>. Это была настоящая воздушная линия жизни.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg text-center text-foreground/80">
                  <strong className="text-primary">Партизанские аэродромы</strong> стали символом связи с Большой землёй.
                  Лётчики рисковали жизнью, садясь ночью на короткие лесные полосы.{" "}
                  <strong className="text-primary">15 000 тонн груза</strong> и{" "}
                  <strong className="text-primary">7 000 эвакуированных</strong> - это результат их героизма.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Page28;