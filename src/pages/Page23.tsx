import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Newspaper, BookOpen, Printer, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import partisanPressImg from "@/assets/partisan-press.jpg";

const newspapers = [
  {
    title: "Звязда",
    subtitle: "Звезда - главная партизанская газета",
    frequency: "2 раза в неделю",
    circulation: "10 000 экземпляров",
    language: "Белорусский, русский",
    topics: [
      "Сводки с фронтов",
      "Партизанские операции",
      "Призывы к борьбе",
      "Разоблачение предателей"
    ],
    established: "1942 год"
  },
  {
    title: "Раздавім фашысцкую гадзіну",
    subtitle: "Раздавим фашистскую гадину",
    frequency: "Еженедельно",
    circulation: "5 000 экземпляров",
    language: "Белорусский",
    topics: [
      "Агитация населения",
      "Инструкции для диверсий",
      "Немецкие злодеяния",
      "Героические подвиги"
    ],
    established: "1942 год"
  },
  {
    title: "Партызанская помста",
    subtitle: "Партизанская месть",
    frequency: "2 раза в месяц",
    circulation: "3 000 экземпляров",
    language: "Белорусский",
    topics: [
      "Планы мести оккупантам",
      "Сожженные деревни",
      "Списки предателей",
      "Тактика партизанской войны"
    ],
    established: "1943 год"
  },
  {
    title: "За Радзіму",
    subtitle: "За Родину",
    frequency: "Еженедельно",
    circulation: "7 000 экземпляров",
    language: "Белорусский, русский",
    topics: [
      "Новости от Красной армии",
      "Письма партизан",
      "Стихи и песни",
      "Обращения командования"
    ],
    established: "1942 год"
  }
];

const printingProcess = [
  {
    step: 1,
    title: "Доставка бумаги",
    description: "Бумагу добывали при сбросах с самолетов или забирали из разрушенных складов",
    icon: FileText
  },
  {
    step: 2,
    title: "Типография в землянке",
    description: "Печатные станки прятали в специальных подземных бункерах",
    icon: Printer
  },
  {
    step: 3,
    title: "Ночная работа",
    description: "Печатали только ночью, чтобы дым не заметили немецкие самолеты",
    icon: BookOpen
  },
  {
    step: 4,
    title: "Распространение",
    description: "Газеты доставляли связные в отряды и деревни, часто под риском жизни",
    icon: Newspaper
  }
];

const Page23 = () => {
  const [currentNewspaper, setCurrentNewspaper] = useState(0);

  const nextNewspaper = () => {
    setCurrentNewspaper((prev) => (prev + 1) % newspapers.length);
  };

  const prevNewspaper = () => {
    setCurrentNewspaper((prev) => (prev - 1 + newspapers.length) % newspapers.length);
  };

  const newspaper = newspapers[currentNewspaper];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <BookNavigation currentPage={23} />
      
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="outline" className="mb-4">
                Страница 23
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Партизанская печать
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                В лесных типографиях печатали газеты и листовки, которые вдохновляли на борьбу
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={partisanPressImg}
                alt="Партизанская печать и типографии"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  Слово как оружие борьбы
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-muted-foreground">партизанских изданий</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">30+</div>
                  <div className="text-muted-foreground">типографий в лесах</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">млн.</div>
                  <div className="text-muted-foreground">экземпляров напечатано</div>
                </CardContent>
              </Card>
            </div>

            {/* Newspaper Browser */}
            <Card className="mb-12 border-2 border-primary/20 bg-card/50 backdrop-blur overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Newspaper className="w-8 h-8 text-primary" />
                  Главные партизанские газеты
                </h2>

                {/* Navigation dots */}
                <div className="flex justify-center gap-2 mb-8">
                  {newspapers.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentNewspaper(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentNewspaper
                          ? "w-8 bg-primary"
                          : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                {/* Newspaper Card */}
                <div className="animate-fade-in">
                  <div className="p-8 rounded-xl bg-gradient-to-br from-background to-muted border-2 border-primary/30 mb-6">
                    <div className="text-center mb-6">
                      <h3 className="text-4xl font-bold mb-2">{newspaper.title}</h3>
                      <p className="text-xl text-muted-foreground mb-4">{newspaper.subtitle}</p>
                      <Badge variant="outline" className="text-sm">
                        {newspaper.established}
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="text-sm text-muted-foreground mb-1">Периодичность</div>
                        <div className="font-semibold">{newspaper.frequency}</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="text-sm text-muted-foreground mb-1">Тираж</div>
                        <div className="font-semibold">{newspaper.circulation}</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="text-sm text-muted-foreground mb-1">Язык</div>
                        <div className="font-semibold">{newspaper.language}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Основные темы:</h4>
                      <div className="grid gap-2">
                        {newspaper.topics.map((topic, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between">
                    <button
                      onClick={prevNewspaper}
                      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span>Предыдущая</span>
                    </button>
                    <button
                      onClick={nextNewspaper}
                      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-colors"
                    >
                      <span>Следующая</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Printing Process */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Как печатали газеты в лесу
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {printingProcess.map((item) => (
                    <div
                      key={item.step}
                      className="p-6 rounded-lg border-2 border-primary/20 bg-muted/30 hover:bg-muted/50 transition-all hover:scale-105"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                            <span className="text-xl font-bold text-primary">{item.step}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <item.icon className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Leaflets Section */}
            <Card className="mb-12 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Листовки для немецких солдат</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  Партизаны печатали листовки на немецком языке, призывая солдат сдаваться.
                  В них рассказывали о поражениях вермахта, о бессмысленности войны, гарантировали жизнь пленным.
                </p>
                <div className="grid gap-3">
                  <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                    <p className="italic text-foreground/90">
                      «Солдат! Твоя семья ждёт тебя дома. Война для Германии проиграна. Сдавайся в плен - останешься жив!»
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                    <p className="italic text-foreground/90">
                      «Зачем тебе умирать за Гитлера? Красная Армия наступает. Конец близок. Переходи на нашу сторону!»
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  Тысячи таких листовок разбрасывались в немецких гарнизонах. Многие солдаты действительно сдавались.
                </p>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg text-center text-foreground/80">
                  <strong className="text-primary">Партизанская печать</strong> была мощным оружием.
                  Газеты поднимали боевой дух, листовки разлагали врага.{" "}
                  <strong className="text-primary">150 изданий в лесных типографиях</strong> -
                  это настоящий подвиг журналистов, печатников и связных.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Page23;