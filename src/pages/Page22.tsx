import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Users, MapPin, Bomb, Calendar, Target } from "lucide-react";
import minskUndergroundImg from "@/assets/minsk-underground.jpg";

const districts = [
  {
    name: "Центральный район",
    leader: "Исай Казинец",
    members: 150,
    operations: [
      "Сбор разведданных",
      "Печать и распространение листовок",
      "Саботаж на предприятиях"
    ]
  },
  {
    name: "Заводской район",
    leader: "Иван Кабушкин",
    members: 120,
    operations: [
      "Диверсии на заводах",
      "Вывод из строя техники",
      "Снабжение партизан"
    ]
  },
  {
    name: "Железнодорожный район",
    leader: "Кирилл Орловский",
    members: 85,
    operations: [
      "Взрывы эшелонов",
      "Порча локомотивов",
      "Передача графиков движения"
    ]
  },
  {
    name: "Комсомольское подполье",
    leader: "Нина Дрозд",
    members: 200,
    operations: [
      "Разведка",
      "Связь с партизанами",
      "Распространение газет"
    ]
  }
];

const mazanikOperation = {
  date: "22 сентября 1943 года",
  target: "Вильгельм Кубе",
  title: "Гауляйтер Беларуси",
  method: "Мина-грелка под матрасом",
  agent: "Елена Мазаник",
  cover: "Горничная в резиденции",
  result: "Ликвидирован",
  impact: "Шок для немецкого командования"
};

const Page22 = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <BookNavigation currentPage={22} />
      
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="outline" className="mb-4">
                Страница 22
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Минское подполье
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                В оккупированной столице действовала сеть подпольных организаций, рискуя жизнью каждый день
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={minskUndergroundImg}
                alt="Минское подполье"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  Война в самом сердце оккупированного города
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">9</div>
                  <div className="text-muted-foreground">подпольных организаций</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">подпольщиков</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1941-1944</div>
                  <div className="text-muted-foreground">годы борьбы</div>
                </CardContent>
              </Card>
            </div>

            {/* Districts Map */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary" />
                  Подпольные организации по районам
                </h2>
                <p className="text-muted-foreground mb-8">
                  Нажмите на район, чтобы узнать подробности
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {districts.map((district, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedDistrict(idx)}
                      className={`p-6 rounded-lg border-2 text-left transition-all hover:scale-105 ${
                        selectedDistrict === idx
                          ? "border-primary bg-primary/10 shadow-lg"
                          : "border-primary/20 bg-muted/30 hover:bg-muted/50"
                      }`}
                    >
                      <h3 className="text-xl font-semibold mb-2">{district.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Руководитель: <span className="text-primary font-medium">{district.leader}</span>
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{district.members} подпольщиков</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* District Details */}
                {selectedDistrict !== null && (
                  <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 animate-fade-in">
                    <h3 className="text-2xl font-bold mb-4">{districts[selectedDistrict].name}</h3>
                    <p className="mb-4">
                      <strong>Руководитель:</strong> {districts[selectedDistrict].leader}
                    </p>
                    <div>
                      <strong className="block mb-2">Операции:</strong>
                      <div className="space-y-2">
                        {districts[selectedDistrict].operations.map((op, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span>{op}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Mazanik Operation */}
            <Card className="mb-12 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Bomb className="w-10 h-10 text-primary" />
                  <h2 className="text-3xl font-bold">Операция «Мина-грелка»</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Дата</div>
                        <div className="font-semibold">{mazanikOperation.date}</div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Цель</div>
                      <div className="text-2xl font-bold text-primary mb-1">
                        {mazanikOperation.target}
                      </div>
                      <div className="text-muted-foreground">{mazanikOperation.title}</div>
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Исполнитель</div>
                      <div className="text-xl font-semibold">{mazanikOperation.agent}</div>
                      <div className="text-sm text-muted-foreground">{mazanikOperation.cover}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-2">Метод</div>
                      <p className="text-lg">{mazanikOperation.method}</p>
                    </div>

                    <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-2">Результат</div>
                      <p className="text-lg font-semibold text-primary">{mazanikOperation.result}</p>
                      <p className="text-sm mt-2">{mazanikOperation.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-background/30 border border-primary/20">
                  <p className="text-sm leading-relaxed">
                    <strong className="text-primary">Елена Мазаник</strong>, работая горничной в резиденции гауляйтера,
                    заложила мину, замаскированную под грелку, под матрас Кубе. Взрыв произошел ночью.
                    Эта операция стала одной из самых дерзких в истории минского подполья.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Connection with Partisans */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Связь с партизанами</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Минское подполье постоянно взаимодействовало с партизанскими отрядами в лесах:
                </p>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Передача разведданных о немецких гарнизонах и передвижениях войск</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Снабжение медикаментами, оружием и боеприпасами</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Помощь в эвакуации раненых партизан</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Координация диверсий в городе и на подступах</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg text-center text-foreground/80">
                  <strong className="text-primary">Минское подполье</strong> действовало в самых опасных условиях -
                  в городе, полном гестаповцев и предателей. <strong className="text-primary">Они рисковали каждый день</strong>,
                  зная, что раскрытие означает пытки и смерть. Но они не сдавались.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Page22;