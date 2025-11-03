import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Flame, Calendar, MapPin } from "lucide-react";

const Page43 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-destructive/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-destructive tracking-wider">
                  СТРАНИЦА 43 • МАССОВЫЙ РАССТРЕЛ
                </span>
              </div>
              
              <div className="flex justify-center mb-6">
                <Flame className="h-16 w-16 text-memorial-flame animate-flicker" />
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Яма
              </h1>
              
              <div className="flex items-center justify-center gap-2 text-2xl text-destructive font-bold mb-4">
                <Calendar className="h-6 w-6" />
                <span>2 марта 1942 года</span>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                День, когда 5000 человек были расстреляны за несколько часов
              </p>
            </div>

            {/* Main Statistics */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-8 text-center">
                <div className="text-6xl font-bold text-destructive mb-3">5000</div>
                <p className="text-lg text-muted-foreground">человек расстреляно за один день</p>
              </Card>

              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-8 text-center">
                <div className="text-6xl font-bold text-destructive mb-3">Единицы</div>
                <p className="text-lg text-muted-foreground">выживших свидетелей</p>
              </Card>
            </div>

            {/* The Place */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Место трагедии
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Яма - это место в районе улиц Мельникайте и Сухой в Минске, где до войны добывали песок. Образовался большой котлован, который нацисты превратили в место массовых казней.
                </p>
                
                <p>
                  2 марта 1942 года сюда пригнали около 5000 евреев из Минского гетто. Это была одна из самых массовых и жестоких акций уничтожения в истории города.
                </p>
              </div>
            </Card>

            {/* The Tragedy */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Как это происходило
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Рано утром из гетто были выведены тысячи людей - мужчины, женщины, дети, старики. Им сказали, что ведут на работы. Но колонна направилась к Яме.
                </p>
                
                <p>
                  У края ямы людей заставляли раздеваться и становиться на краю. Затем звучали выстрелы, и тела падали в котлован. Расстрел шел почти весь день. Крики, плач детей, выстрелы...
                </p>
                
                <p>
                  Некоторых закапывали живыми. Единицы пытались бежать - их расстреливали на месте. К вечеру яма была заполнена телами и присыпана землей.
                </p>
                
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 my-8">
                  <p className="font-semibold text-foreground italic">
                    Из воспоминаний свидетеля: "Крики были слышны по всему району. Земля двигалась ещё несколько дней - там оставались живые..."
                  </p>
                </div>
              </div>
            </Card>

            {/* Survivors */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Свидетельства выживших
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Чудесное спасение
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Единицы людей смогли выжить. Некоторые притворились мертвыми и лежали под трупами, дождавшись темноты. Другие были ранены, но смогли выбраться и уползти.
                  </p>
                </div>

                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Свидетели рассказали
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Именно благодаря свидетельствам выживших мы знаем, что произошло в тот день. Их показания на суде над военными преступниками стали доказательством геноцида.
                  </p>
                </div>
              </div>
            </Card>

            {/* Memorial */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Мемориальный комплекс
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  В 2000 году на месте расстрела был открыт мемориальный комплекс "Яма". В центре композиции - скульптурная группа из бронзовых фигур, спускающихся в яму. 
                </p>
                
                <p>
                  27 фигур людей - старики, женщины, дети - символизируют последний путь жертв. Это один из самых пронзительных памятников Холокоста в мире.
                </p>
                
                <p>
                  На гранитной стеле высечены имена погибших - те, что удалось установить. Большинство имен так и остались неизвестными.
                </p>
              </div>
            </Card>

            {/* Memory Quote */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif italic text-foreground mb-4">
                "Помните! Через века, через года, — помните! О тех, кто уже не придёт никогда, — помните!"
              </blockquote>
              <p className="text-right text-muted-foreground mt-4">
                — Роберт Рождественский
              </p>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={43} />
    </>
  );
};

export default Page43;