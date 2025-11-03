import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Heart, Users, Baby, Home } from "lucide-react";
import partisanFamiliesImg from "@/assets/partisan-families.jpg";

const familyStories = [
  {
    family: "Семья Шмырёвых",
    members: "Жена и 4 детей Миная Шмырёва",
    fate: "Сожжены немцами в сентябре 1942",
    story: "Немцы пытались заставить Миная Шмырёва сдаться, угрожая его семье. Минай не сдался. Семью сожгли заживо в их доме."
  },
  {
    family: "Семья Коржей",
    members: "Жена и двое детей Василия Коржа",
    fate: "Ушли в партизаны вместе с отцом",
    story: "Вся семья воевала в отряде. Жена была медсестрой, старший сын - разведчиком, младшая дочь - связной."
  },
  {
    family: "Семья Бумажковых",
    members: "Жена и сын командира Бумажкова",
    fate: "Расстреляны в 1942 году",
    story: "После гибели Бумажкова немцы нашли его семью. Публичный расстрел как «предупреждение» партизанам."
  },
  {
    family: "Семья Петровских",
    members: "Муж, жена и трое детей",
    fate: "Пережили войну в партизанском отряде",
    story: "Ушли в лес всей семьёй после облавы в деревне. Дети выросли в партизанском лагере, помогали чем могли."
  }
];

const childrenBorn = [
  {
    name: "Валентина",
    birthPlace: "Землянка в Налибокской пуще",
    year: "1942",
    story: "Родилась в партизанском госпитале. Мать - медсестра, отец - командир отряда. Выжила."
  },
  {
    name: "Николай",
    birthPlace: "Партизанский лагерь в Полесье",
    year: "1943",
    story: "Роды принимала врач-партизанка. Ребёнок родился здоровым, вырос среди партизан."
  },
  {
    name: "Анна",
    birthPlace: "Лесной блиндаж",
    year: "1944",
    story: "Родилась за месяц до освобождения. Мать успела эвакуироваться с ребёнком к Красной Армии."
  }
];

const refugeeChildren = {
  saved: "7 000+ детей",
  actions: [
    "Эвакуация из зон карательных операций",
    "Создание детских лагерей в партизанских зонах",
    "Вывоз на Большую землю через «Витебские ворота»",
    "Передача через линию фронта Красной Армии",
    "Усыновление партизанскими семьями сирот"
  ]
};

const childrenCamp = [
  "Лесные школы - обучение грамоте и счёту",
  "Детские землянки - отдельно от взрослых",
  "Питание - лучшее из того, что было",
  "Игры и занятия - пытались сохранить детство",
  "Защита - охрана и маскировка от немецких облав"
];

const Page36 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <BookNavigation currentPage={36} />
      
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="outline" className="mb-4">
                Страница 36
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Партизанские семьи
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Целые семьи уходили в лес - воевали вместе, растили детей, спасали других
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={partisanFamiliesImg}
                alt="Партизанские семьи"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  Семьи, которые выбрали борьбу
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground">семей в отрядах</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">7 000+</div>
                  <div className="text-muted-foreground">детей спасено</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-muted-foreground">детей родилось в лесу</div>
                </CardContent>
              </Card>
            </div>

            {/* Family Stories */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-primary" />
                  Истории партизанских семей
                </h2>
                <div className="space-y-6">
                  {familyStories.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{item.family}</h3>
                          <p className="text-sm text-muted-foreground">{item.members}</p>
                        </div>
                        <Badge variant={item.fate.includes("Пережили") ? "default" : "destructive"}>
                          {item.fate.includes("Пережили") ? "Выжили" : "Погибли"}
                        </Badge>
                      </div>
                      <div className="mb-3">
                        <span className="text-sm text-muted-foreground">Судьба: </span>
                        <span className="font-semibold">{item.fate}</span>
                      </div>
                      <p className="text-foreground/90 leading-relaxed">{item.story}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Children Born */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Baby className="w-8 h-8 text-primary" />
                  Дети, рождённые в партизанских отрядах
                </h2>
                <p className="text-muted-foreground mb-8">
                  В лесных госпиталях и землянках рождались дети - символ надежды и веры в будущее
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {childrenBorn.map((child, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all hover:scale-105"
                    >
                      <Badge variant="outline" className="mb-3">{child.year}</Badge>
                      <h3 className="text-xl font-semibold mb-2">{child.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Место рождения: {child.birthPlace}
                      </p>
                      <p className="text-sm">{child.story}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-center">
                    <strong className="text-primary">Более 200 детей</strong> родились в партизанских отрядах за годы войны.
                    Роды принимали врачи-партизаны в тяжелейших условиях. Большинство детей выжили.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Refugee Children */}
            <Card className="mb-12 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  Спасение детей-беженцев
                </h2>
                <p className="text-lg mb-6">
                  Партизаны спасали детей из деревень, попавших под карательные операции.{" "}
                  <strong className="text-primary">{refugeeChildren.saved} детей</strong> было эвакуировано в безопасные места.
                </p>
                <div className="grid gap-4">
                  {refugeeChildren.actions.map((action, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-5 rounded-lg bg-background/50 border-2 border-primary/20"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                        <span className="text-sm font-bold text-primary">{idx + 1}</span>
                      </div>
                      <span className="pt-1">{action}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Children's Camp */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Home className="w-8 h-8 text-primary" />
                  Семейные лагеря
                </h2>
                <p className="text-muted-foreground mb-8">
                  В партизанских зонах создавались специальные лагеря для семей и детей беженцев
                </p>
                <div className="grid gap-3">
                  {childrenCamp.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Post-war */}
            <Card className="mb-12 border-primary/20 bg-muted/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Судьбы партизанских детей после войны</h2>
                <div className="space-y-4 text-foreground/90">
                  <p>
                    <strong className="text-primary">Многие дети, выросшие в партизанских отрядах</strong>, стали
                    известными людьми. Они помнили лес, землянки, звуки боя.
                  </p>
                  <p>
                    <strong className="text-primary">Дети, спасённые партизанами</strong>, всю жизнь были благодарны
                    тем, кто рисковал жизнью, чтобы их вывезти.
                  </p>
                  <p>
                    <strong className="text-primary">Сироты находили новые семьи</strong> среди партизан.
                    Многие были усыновлены бойцами после войны.
                  </p>
                  <p>
                    <strong className="text-primary">Партизанское детство</strong> оставило глубокий след.
                    Эти люди стали учителями, врачами, инженерами - но всегда помнили лес.
                  </p>
                  <p className="text-primary font-semibold">
                    Спасение детей было не менее важной миссией партизан, чем борьба с врагом.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg text-center text-foreground/80">
                  <strong className="text-primary">Партизанские семьи</strong> доказали, что даже в условиях войны люди
                  сохраняли человечность. Они растили детей в лесу, спасали чужих детей, рожали в землянках.{" "}
                  <strong className="text-primary">Это был подвиг не только боевой, но и человеческий</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Page36;