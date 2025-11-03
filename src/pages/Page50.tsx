import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Flame } from "lucide-react";
import memorialFlame from "@/assets/memorial-flame.jpg";

const Page50 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-destructive/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-destructive tracking-wider">
                  СТРАНИЦА 50 • ПАМЯТЬ О ТРАГЕДИИ
                </span>
              </div>
              
              <div className="flex justify-center mb-6">
                <Flame className="h-16 w-16 text-memorial-flame animate-flicker" />
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Хатынь
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Символ трагедии белорусского народа в годы оккупации
              </p>
            </div>

            {/* Memorial Image */}
            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={memorialFlame}
                alt="Мемориальный комплекс Хатынь"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-lg text-vintage-paper font-serif">
                  Вечная память жертвам фашистского геноцида
                </p>
              </div>
            </div>

            {/* Tragedy Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-6 text-center">
                <div className="text-4xl font-bold text-destructive mb-2">149</div>
                <p className="text-sm text-muted-foreground">человек погибло в Хатыни</p>
              </Card>

              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-6 text-center">
                <div className="text-4xl font-bold text-destructive mb-2">75</div>
                <p className="text-sm text-muted-foreground">из них дети</p>
              </Card>

              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-6 text-center">
                <div className="text-4xl font-bold text-destructive mb-2">628</div>
                <p className="text-sm text-muted-foreground">белорусских деревень разделили судьбу Хатыни</p>
              </Card>
            </div>

            {/* The Tragedy */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                22 марта 1943 года
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Деревня Хатынь Минской области. Обычный мирный день прервался звуком приближающихся машин. Карательный отряд фашистов окружил деревню.
                </p>
                
                <p>
                  Всех жителей согнали в колхозный сарай - стариков, женщин, детей. Затем сарай подожгли. Тех, кто пытался вырваться из огня, расстреливали из автоматов. Погибло 149 человек, из них 75 детей.
                </p>
                
                <p>
                  Чудом спасся лишь 56-летний деревенский кузнец Иосиф Каминский. Он был ранен и очнулся лишь поздно ночью среди трупов односельчан. Среди погибших он нашёл своего сына Адама. Мальчик был ещё жив, но вскоре умер на руках у отца.
                </p>
              </div>
            </Card>

            {/* Memorial Complex */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Мемориальный комплекс
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Непокорённый человек
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Центральная скульптура комплекса - фигура Иосифа Каминского с мёртвым сыном на руках. Это символ несгибаемой воли белорусского народа, который не сломили даже самые страшные испытания.
                  </p>
                </div>

                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Вечный огонь
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    В центре мемориала горит Вечный огонь - символ вечной памяти о погибших. Каждые 30 секунд звучат колокола - по числу белорусов, погибавших каждые 30 секунд во время войны.
                  </p>
                </div>

                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Кладбище деревень
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    185 символических могил - по числу уничтоженных деревень, которые так и не возродились. Ещё 433 деревни были восстановлены - их символизируют деревья с колоколами.
                  </p>
                </div>
              </div>
            </Card>

            {/* Statistics of Genocide */}
            <Card className="bg-gradient-to-br from-destructive/10 to-muted/10 border-l-4 border-destructive p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">
                Масштабы геноцида в Беларуси
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">2.2 млн</div>
                  <p className="text-muted-foreground">человек погибло - каждый третий житель</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">9,200</div>
                  <p className="text-muted-foreground">населённых пунктов уничтожено</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">628</div>
                  <p className="text-muted-foreground">деревень сожжено вместе с жителями</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">1.4 млн</div>
                  <p className="text-muted-foreground">человек угнано в рабство в Германию</p>
                </div>
              </div>
            </Card>

            {/* Memory Quote */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif italic text-foreground mb-4">
                "Люди добрые, помните: любили мы жизнь, и Родину нашу, и вас, дорогие. Мы сгорели живыми в огне. Наша просьба ко всем: пусть скорбь и печаль обернутся в мужество ваше и силу, чтобы смогли вы утвердить навечно мир и покой на земле. Чтобы отныне нигде и никогда в вихре пожаров жизнь не умирала!"
              </blockquote>
              <p className="text-right text-muted-foreground mt-4">
                — Надпись на венке "От Белорусского народа"
              </p>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={50} />
    </>
  );
};

export default Page50;
