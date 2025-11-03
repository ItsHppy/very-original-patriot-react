import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { ChevronLeft, ChevronRight, MapPin, Award, Flame } from "lucide-react";
import legendaryCommandersImg from "@/assets/legendary-commanders.jpg";

const commanders = [
  {
    name: "Василий Корж",
    title: "Первый партизан Беларуси",
    dates: "1899-1967",
    story: "28 июня 1941 года, через 6 дней после начала войны, создал первый партизанский отряд в Пинских болотах. Бывший пограничник, он знал местность как свои пять пальцев.",
    achievements: [
      "Первый партизанский отряд - 28 июня 1941",
      "Командир бригады имени Сталина",
      "Под его командованием уничтожено 30+ немецких гарнизонов",
      "Герой Советского Союза"
    ],
    stats: {
      trains: "45 поездов",
      bridges: "23 моста",
      enemies: "более 5000 солдат"
    },
    region: "Пинская область, Полесье"
  },
  {
    name: "Сидор Ковпак",
    title: "Легендарный рейдовый командир",
    dates: "1887-1967",
    story: "Прославился дерзкими рейдами по тылам противника. Его отряд прошел тысячи километров, наводя ужас на оккупантов от Брянских лесов до Карпат.",
    achievements: [
      "Рейд на 10 000 км через 5 областей",
      "Дважды Герой Советского Союза",
      "Командир Путивльского партизанского соединения",
      "Операции в Беларуси, Украине, Польше"
    ],
    stats: {
      trains: "62 поезда",
      bridges: "41 мост",
      enemies: "более 8000 солдат"
    },
    region: "Рейды через всю Беларусь"
  },
  {
    name: "Фёдор Дубровский",
    title: "«Дядя Фёдя» - народный командир",
    dates: "1895-1978",
    story: "Командир бригады в Лепельских лесах. Партизаны называли его «Дядя Фёдя». Под его командованием была создана целая партизанская республика с больницами и школами.",
    achievements: [
      "Командир бригады «Железняк»",
      "Создал Лепельскую партизанскую зону",
      "Герой Советского Союза",
      "3500 партизан под командованием"
    ],
    stats: {
      trains: "38 поездов",
      bridges: "19 мостов",
      enemies: "более 4000 солдат"
    },
    region: "Витебская область"
  },
  {
    name: "Василий Чернышёв",
    title: "«Хозяин Полесья»",
    dates: "1896-1945",
    story: "Контролировал огромную территорию в Полесье. Немцы называли его «призраком болот» - его отряд появлялся там, где его не ждали, и исчезал в непроходимых топях.",
    achievements: [
      "Командир Пинского партизанского соединения",
      "Контроль над районами общей площадью 2000 км²",
      "Герой Советского Союза",
      "Организовал эвакуацию 15 000 мирных жителей"
    ],
    stats: {
      trains: "51 поезд",
      bridges: "27 мостов",
      enemies: "более 6000 солдат"
    },
    region: "Пинское Полесье"
  },
  {
    name: "Алексей Данукалов",
    title: "Командир бригады имени Чкалова",
    dates: "1903-1944",
    story: "Погиб в бою в 1944 году, не дожив до победы несколько месяцев. Его бригада держала под контролем целый район, где действовали советские законы.",
    achievements: [
      "Командир бригады с августа 1942",
      "Освободил несколько деревень",
      "Погиб в бою у д. Заполье",
      "Посмертно - Герой Советского Союза"
    ],
    stats: {
      trains: "29 поездов",
      bridges: "14 мостов",
      enemies: "более 3000 солдат"
    },
    region: "Минская область"
  }
];

const Page21 = () => {
  const [currentCommander, setCurrentCommander] = useState(0);

  const nextCommander = () => {
    setCurrentCommander((prev) => (prev + 1) % commanders.length);
  };

  const prevCommander = () => {
    setCurrentCommander((prev) => (prev - 1 + commanders.length) % commanders.length);
  };

  const commander = commanders[currentCommander];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <BookNavigation currentPage={21} />
      
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="outline" className="mb-4">
                Страница 21
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Легендарные командиры
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Они создавали отряды с нуля, вели бойцов в бой и держали под контролем целые районы
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={legendaryCommandersImg}
                alt="Легендарные командиры партизанского движения"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  Они стали легендами при жизни
                </p>
              </div>
            </div>

            {/* Commander Carousel */}
            <div className="mb-12">
              <Card className="overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur">
                <CardContent className="p-8">
                  {/* Navigation dots */}
                  <div className="flex justify-center gap-2 mb-6">
                    {commanders.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentCommander(idx)}
                        className={`h-2 rounded-full transition-all ${
                          idx === currentCommander
                            ? "w-8 bg-primary"
                            : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Commander Info */}
                  <div className="animate-fade-in">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-4xl font-bold mb-2">{commander.name}</h2>
                        <p className="text-xl text-primary mb-1">{commander.title}</p>
                        <p className="text-muted-foreground">{commander.dates}</p>
                      </div>
                      <Award className="w-12 h-12 text-primary" />
                    </div>

                    <div className="flex items-center gap-2 mb-6 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{commander.region}</span>
                    </div>

                    <p className="text-lg leading-relaxed mb-8 text-foreground/90">
                      {commander.story}
                    </p>

                    {/* Achievements */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Flame className="w-5 h-5 text-primary" />
                        Достижения
                      </h3>
                      <div className="grid gap-3">
                        {commander.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-foreground/90">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="text-3xl font-bold text-primary mb-1">
                          {commander.stats.trains}
                        </div>
                        <div className="text-sm text-muted-foreground">пущено под откос</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="text-3xl font-bold text-primary mb-1">
                          {commander.stats.bridges}
                        </div>
                        <div className="text-sm text-muted-foreground">взорвано мостов</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="text-3xl font-bold text-primary mb-1">
                          {commander.stats.enemies}
                        </div>
                        <div className="text-sm text-muted-foreground">уничтожено врагов</div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    <button
                      onClick={prevCommander}
                      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span>Предыдущий</span>
                    </button>
                    <button
                      onClick={nextCommander}
                      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-colors"
                    >
                      <span>Следующий</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg text-center text-foreground/80">
                  <strong className="text-primary">Эти командиры</strong> создали партизанское движение с нуля и превратили его в силу,{" "}
                  <strong className="text-primary">с которой считался враг</strong>. Под их руководством действовали десятки тысяч партизан.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Page21;