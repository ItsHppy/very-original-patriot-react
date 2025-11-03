import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Eye, Shield, Radio, Bomb } from "lucide-react";
import childScoutsImg from "@/assets/child-scouts.jpg";

const youngHeroes = [
  {
    name: "Марат Казей",
    age: "14 лет",
    role: "Разведчик",
    story: "Мать расстреляна немцами за связь с партизанами. Марат с сестрой ушёл в отряд. Участвовал в десятках операций. В мае 1944 попал в окружение - подорвал себя гранатой, чтобы не сдаться.",
    awards: "Герой Советского Союза (посмертно)",
    operations: "30+ разведывательных операций"
  },
  {
    name: "Валя Котик",
    age: "14 лет",
    role: "Подрывник, разведчик",
    story: "Самый молодой Герой СССР. Начал борьбу в 11 лет. Убил немецкого офицера, спас товарищей, подорвал 6 эшелонов. Погиб в бою в феврале 1944.",
    awards: "Герой Советского Союза (посмертно)",
    operations: "Уничтожил генерала фон Галля"
  },
  {
    name: "Надя Богданова",
    age: "10-14 лет",
    role: "Разведчица, связная",
    story: "Немцы казнили её 5 раз, но она выживала. Распространяла листовки, ходила в разведку. После второй «казни» была спасена партизанами. Дожила до глубокой старости.",
    awards: "Два ордена Боевого Красного Знамени",
    operations: "Более 100 разведывательных выходов"
  },
  {
    name: "Зина Портнова",
    age: "17 лет",
    role: "Связная подполья, разведчица",
    story: "Работала в немецкой столовой - отравила суп, погибло более 100 офицеров. Ходила в разведку. Схвачена в 1944, пытки не сломили. Расстреляна в январе 1944.",
    awards: "Герой Советского Союза (посмертно)",
    operations: "Отравление немецких офицеров"
  },
  {
    name: "Лёня Голиков",
    age: "16 лет",
    role: "Подрывник, разведчик",
    story: "Участвовал в 27 боевых операциях. Подорвал 78 немецких машин, 10 мостов. Захватил портфель с секретными документами генерала. Погиб в бою в декабре 1942.",
    awards: "Герой Советского Союза (посмертно)",
    operations: "27 боевых операций"
  }
];

const childrenTasks = [
  {
    icon: Eye,
    task: "Разведка",
    description: "Дети не вызывали подозрений - они могли ходить по деревням, рынкам, наблюдать за немцами",
    danger: "Высокая"
  },
  {
    icon: Radio,
    task: "Связь между отрядами",
    description: "Носили донесения, запоминали маршруты, передавали шифровки",
    danger: "Критическая"
  },
  {
    icon: Shield,
    task: "Распространение листовок",
    description: "Раскладывали антифашистские листовки, клеили плакаты",
    danger: "Высокая"
  },
  {
    icon: Bomb,
    task: "Диверсии",
    description: "Самые смелые участвовали в подрывах, помогали минировать дороги",
    danger: "Критическая"
  }
];

const whyChildren = [
  "Не вызывали подозрений у немцев",
  "Могли проходить блокпосты как «местные»",
  "Запоминали информацию наизусть",
  "Были смелыми и не боялись рисковать",
  "Хотели отомстить за погибших родителей"
];

const Page37 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <BookNavigation currentPage={37} />
      
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="outline" className="mb-4">
                Страница 37
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Дети-разведчики
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Юные герои партизанской войны - они шли в разведку, подрывали поезда, не сдавались врагу
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={childScoutsImg}
                alt="Дети-разведчики"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  Дети, которые воевали наравне со взрослыми
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3 000+</div>
                  <div className="text-muted-foreground">детей в партизанских отрядах</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10-16 лет</div>
                  <div className="text-muted-foreground">возраст юных героев</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">6</div>
                  <div className="text-muted-foreground">Героев СССР среди детей</div>
                </CardContent>
              </Card>
            </div>

            {/* Young Heroes */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8">Юные герои партизанской войны</h2>
                <div className="space-y-6">
                  {youngHeroes.map((hero, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{hero.name}</h3>
                          <div className="flex items-center gap-4 text-sm">
                            <Badge variant="outline">{hero.age}</Badge>
                            <span className="text-muted-foreground">{hero.role}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-foreground/90 leading-relaxed mb-4">{hero.story}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                          <div className="text-sm text-muted-foreground mb-1">Награды</div>
                          <div className="font-semibold text-primary">{hero.awards}</div>
                        </div>
                        <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                          <div className="text-sm text-muted-foreground mb-1">Операции</div>
                          <div className="font-semibold">{hero.operations}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Children's Tasks */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8">Задачи детей-партизан</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {childrenTasks.map((task, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all hover:scale-105"
                    >
                      <task.icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{task.task}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{task.description}</p>
                      <Badge variant={
                        task.danger === "Критическая" ? "destructive" : "default"
                      }>
                        Опасность: {task.danger}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Why Children */}
            <Card className="mb-12 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Почему дети были эффективны</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Дети имели преимущества, которых не было у взрослых партизан
                </p>
                <div className="grid gap-4">
                  {whyChildren.map((reason, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-5 rounded-lg bg-background/50 border-2 border-primary/20"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                        <span className="text-sm font-bold text-primary">{idx + 1}</span>
                      </div>
                      <span className="text-lg pt-1">{reason}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Marat Kazei Story */}
            <Card className="mb-12 border-primary/20 bg-muted/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Последний бой Марата Казея</h2>
                <div className="space-y-4 text-foreground/90">
                  <p>
                    <strong className="text-primary">11 мая 1944 года</strong>. Марат с командиром отряда
                    отправились в разведку в деревню Хоромицкие, Минская область.
                  </p>
                  <p>
                    <strong className="text-primary">Их обнаружил немецкий патруль</strong>. Началась погоня.
                    Командир был ранен и приказал Марату уходить. Марат отказался бросать раненого.
                  </p>
                  <p>
                    <strong className="text-primary">Немцы окружили их</strong>. У Марата кончились патроны.
                    Он притворился, что сдаётся, подпустил немцев ближе.
                  </p>
                  <p>
                    <strong className="text-primary">Когда они подошли</strong>, Марат выхватил последнюю гранату
                    и подорвал себя вместе с врагами. Ему было 14 лет.
                  </p>
                  <p className="text-primary font-semibold">
                    Посмертно удостоен звания Героя Советского Союза. Его имя навсегда в истории.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Memory */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Память о юных героях</h2>
                <p className="text-lg leading-relaxed mb-4">
                  После войны в честь детей-героев назвали школы, улицы, пионерские дружины.
                  Их портреты висели в каждом классе. Их подвиг учил новые поколения смелости и самоотверженности.
                </p>
                <p className="text-lg leading-relaxed">
                  Сегодня мы помним: эти дети отдали свои жизни, чтобы мы жили в мире.
                  Им не суждено было вырасти, создать семьи, увидеть победу.{" "}
                  <strong className="text-primary">Но их подвиг бессмертен</strong>.
                </p>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg text-center text-foreground/80">
                  <strong className="text-primary">Дети-разведчики</strong> доказали, что героизм не зависит от возраста.
                  Они шли в бой наравне со взрослыми, не сдавались, жертвовали собой ради Родины.{" "}
                  <strong className="text-primary">Их имена навсегда в истории</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Page37;