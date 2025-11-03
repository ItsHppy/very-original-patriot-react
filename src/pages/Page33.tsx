import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { MapPin, Target, Eye, Crosshair } from "lucide-react";
import roadAmbushImg from "@/assets/road-ambush.jpg";

const ambushLocations = [
  "Лесные дороги с густой растительностью по обочинам",
  "Крутые повороты, где машины замедляются",
  "Овраги и низины, где трудно развернуться",
  "Узкие мосты и переправы",
  "Места с ограниченной видимостью"
];

const ambushPhases = [
  {
    phase: "Разведка",
    description: "Наблюдение за дорогой, изучение маршрутов колонн",
    duration: "1-3 дня",
    participants: "2-5 разведчиков"
  },
  {
    phase: "Подготовка позиций",
    description: "Окапывание, установка пулемётов, минирование",
    duration: "Ночь перед засадой",
    participants: "Весь отряд (30-100 человек)"
  },
  {
    phase: "Ожидание",
    description: "Скрытое ожидание колонны, полная тишина",
    duration: "От часов до суток",
    participants: "Весь отряд в позициях"
  },
  {
    phase: "Атака",
    description: "Первый выстрел - по головной машине, последняя - замыкающая",
    duration: "10-30 минут",
    participants: "Одновременная стрельба всех групп"
  },
  {
    phase: "Отход",
    description: "Быстрое отступление в лес, разделение на группы",
    duration: "30-60 минут",
    participants: "Организованное отступление"
  }
];

const tactics = [
  {
    title: "Блокировка колонны",
    description: "Первыми выстрелами уничтожить головную и хвостовую машины - колонна заблокирована",
    effectiveness: "95%"
  },
  {
    title: "Огонь по топливным бакам",
    description: "Поджечь машины - создать панику и хаос",
    effectiveness: "80%"
  },
  {
    title: "Минирование дороги",
    description: "Заранее заложенные мины подрывают первые машины",
    effectiveness: "90%"
  },
  {
    title: "Перекрёстный огонь",
    description: "Стрельба с обеих сторон дороги - немцы не знают, откуда бить",
    effectiveness: "85%"
  }
];

const famousAmbushes = [
  {
    location: "Деревня Плещеницы",
    date: "Август 1943",
    target: "Колонна из 40 машин",
    result: "35 машин сожжено, 150+ солдат убито",
    trophy: "20 пулемётов, боеприпасы"
  },
  {
    location: "Трасса Минск-Слуцк",
    date: "Июнь 1942",
    target: "Штабная колонна",
    result: "12 офицеров убито, документы захвачены",
    trophy: "Карты, шифры, радиостанция"
  },
  {
    location: "Лепельский тракт",
    date: "Сентябрь 1943",
    target: "Обоз с продовольствием",
    result: "25 машин захвачено",
    trophy: "15 тонн продуктов, обмундирование"
  }
];

const Page33 = () => {
  const [selectedAmbush, setSelectedAmbush] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <BookNavigation currentPage={33} />
      
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="outline" className="mb-4">
                Страница 33
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Засады на дорогах
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                17 000+ машин уничтожено в засадах - ни одна колонна не чувствовала себя в безопасности
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={roadAmbushImg}
                alt="Засада на дороге"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  Каждая дорога могла стать ловушкой
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">17 000+</div>
                  <div className="text-muted-foreground">машин уничтожено</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground">засад за войну</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10-30 мин</div>
                  <div className="text-muted-foreground">длительность боя</div>
                </CardContent>
              </Card>
            </div>

            {/* Ideal Locations */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary" />
                  Выбор места для засады
                </h2>
                <p className="text-muted-foreground mb-8">
                  Партизаны тщательно выбирали место - от этого зависел успех операции
                </p>
                <div className="grid gap-4">
                  {ambushLocations.map((location, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                        <Eye className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-lg pt-2">{location}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Ambush Phases */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  Организация засады: шаг за шагом
                </h2>
                <div className="space-y-6">
                  {ambushPhases.map((phase, idx) => (
                    <div
                      key={idx}
                      className="relative p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all"
                    >
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center border-3 border-primary">
                          <span className="text-2xl font-bold text-primary">{idx + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold mb-2">{phase.phase}</h3>
                          <p className="text-muted-foreground mb-4">{phase.description}</p>
                          <div className="flex flex-wrap gap-4">
                            <Badge variant="outline">
                              Длительность: {phase.duration}
                            </Badge>
                            <Badge variant="outline">
                              {phase.participants}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {idx < ambushPhases.length - 1 && (
                        <div className="absolute -bottom-6 left-7 w-1 h-6 bg-primary/30" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tactics */}
            <Card className="mb-12 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Crosshair className="w-8 h-8 text-primary" />
                  Тактика партизанских засад
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {tactics.map((tactic, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg bg-background/50 border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-105"
                    >
                      <h3 className="text-xl font-semibold mb-3">{tactic.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{tactic.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Эффективность:</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-background/50 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: tactic.effectiveness }}
                            />
                          </div>
                          <span className="text-sm font-bold text-primary">{tactic.effectiveness}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Famous Ambushes */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Знаменитые засады</h2>
                <p className="text-muted-foreground mb-8">
                  Нажмите на засаду, чтобы узнать подробности
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {famousAmbushes.map((ambush, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedAmbush(idx)}
                      className={`p-6 rounded-lg border-2 text-left transition-all hover:scale-105 ${
                        selectedAmbush === idx
                          ? "border-primary bg-primary/10 shadow-lg"
                          : "border-primary/20 bg-muted/30 hover:bg-muted/50"
                      }`}
                    >
                      <Badge variant="outline" className="mb-2">
                        {ambush.date}
                      </Badge>
                      <h3 className="text-lg font-semibold">{ambush.location}</h3>
                    </button>
                  ))}
                </div>

                {selectedAmbush !== null && (
                  <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 animate-fade-in">
                    <Badge variant="outline" className="mb-3">
                      {famousAmbushes[selectedAmbush].date}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">{famousAmbushes[selectedAmbush].location}</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-muted-foreground">Цель: </span>
                        <span className="font-semibold">{famousAmbushes[selectedAmbush].target}</span>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Результат: </span>
                        <span className="text-primary font-semibold">{famousAmbushes[selectedAmbush].result}</span>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Трофеи: </span>
                        <span>{famousAmbushes[selectedAmbush].trophy}</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Real Story */}
            <Card className="mb-12 border-primary/20 bg-muted/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Засада у деревни Плещеницы - август 1943</h2>
                <div className="space-y-4 text-foreground/90">
                  <p>
                    <strong className="text-primary">Разведка донесла</strong>: по дороге Минск-Борисов утром
                    пройдёт колонна из 40 грузовиков с боеприпасами и продовольствием.
                  </p>
                  <p>
                    <strong className="text-primary">Командир бригады выбрал место</strong>: лесной участок дороги
                    с крутым поворотом. Партизаны (80 человек) заняли позиции с обеих сторон.
                  </p>
                  <p>
                    <strong className="text-primary">В 8 утра колонна вошла в зону засады</strong>. Первый выстрел -
                    по головной машине. Водитель убит, машина встала. Последняя машина подорвана на мине.
                  </p>
                  <p>
                    <strong className="text-primary">Бой длился 25 минут</strong>. Немцы пытались выбраться из колонны,
                    но перекрёстный огонь не давал шансов. 35 машин сожжено, более 150 солдат убито.
                  </p>
                  <p className="text-primary font-semibold">
                    Партизаны захватили 20 пулемётов, тысячи патронов и отступили без потерь.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg text-center text-foreground/80">
                  <strong className="text-primary">Засады на дорогах</strong> были одной из самых результативных тактик партизан.
                  Короткий бой, быстрый отход - и колонна врага уничтожена.{" "}
                  <strong className="text-primary">17 000 машин</strong> не дошли до фронта благодаря этой тактике.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Page33;