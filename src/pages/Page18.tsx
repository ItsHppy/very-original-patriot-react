import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import partisanHospital from "@/assets/partisan-hospital.jpg";
import { Heart, Pill, Syringe, TrendingUp } from "lucide-react";

const Page18 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 18 • МЕДИЦИНА
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Партизанская медицина
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Спасая жизни в лесных госпиталях — 72% раненых вернулись в строй
              </p>
            </div>

            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={partisanHospital}
                alt="Партизанский госпиталь"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-vintage-paper/80 font-serif italic">
                  Операция в лесном госпитале
                </p>
              </div>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent text-center">
                Достижения партизанской медицины
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">290</div>
                  <div className="text-sm text-muted-foreground">госпиталей в лесах</div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">72%</div>
                  <div className="text-sm text-muted-foreground">раненых вернулись в строй</div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Syringe className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">40,000</div>
                  <div className="text-sm text-muted-foreground">спасено раненых</div>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Устройство лесного госпиталя
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h3 className="font-semibold text-foreground mb-2">Операционная землянка</h3>
                  <p className="text-sm text-muted-foreground">
                    Самая чистая и светлая. Импровизированный стол из досок. 
                    Коптилки, а если повезёт — немецкий фонарь на батарейках. 
                    Операции проводились даже под обстрелом.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-accent">
                  <h3 className="font-semibold text-foreground mb-2">Палаты для раненых</h3>
                  <p className="text-sm text-muted-foreground">
                    Нары в 2-3 яруса. 20-30 человек в одной землянке. Тяжелораненые — 
                    на нижних ярусах. Дежурные медсёстры круглосуточно.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h3 className="font-semibold text-foreground mb-2">Перевязочная</h3>
                  <p className="text-sm text-muted-foreground">
                    Смена повязок, обработка ран. Бинты стирали и кипятили для повторного 
                    использования. Йод и спирт — на вес золота.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-accent">
                  <h3 className="font-semibold text-foreground mb-2">Аптека</h3>
                  <p className="text-sm text-muted-foreground">
                    Склад медикаментов. Трофейные немецкие лекарства, советские из сбросов, 
                    народные средства: травы, настойки, мази.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card/60 backdrop-blur-sm border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Pill className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-serif font-bold text-accent">
                    Чем лечили
                  </h2>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Трофейные медикаменты</div>
                    <p className="text-xs text-muted-foreground">
                      Немецкие бинты, сульфаниламид, морфий. После каждой засады — 
                      первым делом забирали аптечки.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Сброшенные с самолётов</div>
                    <p className="text-xs text-muted-foreground">
                      Советские лекарства доставлялись на парашютах. Хирургические 
                      инструменты, наркоз, антибиотики.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Народная медицина</div>
                    <p className="text-xs text-muted-foreground">
                      Мох-сфагнум вместо бинтов (природный антисептик), отвары трав, 
                      берёзовый дёготь, хвойные настойки.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Импровизация</div>
                    <p className="text-xs text-muted-foreground">
                      Водка как дезинфектор, самогон — для наркоза. Нити от парашютов — 
                      для швов. Консервные банки — вместо медицинских инструментов.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/60 backdrop-blur-sm border-border p-8">
                <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                  Медперсонал
                </h2>
                
                <p className="text-muted-foreground mb-4">
                  Врачи и медсёстры — герои без громких подвигов.
                </p>

                <div className="space-y-3">
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Врачи</div>
                    <p className="text-xs text-muted-foreground">
                      Часто — единственный хирург на всю бригаду (2000+ человек). 
                      Проводили по 5-10 операций в день.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Медсёстры</div>
                    <p className="text-xs text-muted-foreground">
                      Перевязки, уход, кормление. Часто сами уходили в рейды, 
                      чтобы оказать помощь прямо на поле боя.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Санитары</div>
                    <p className="text-xs text-muted-foreground">
                      Выносили раненых под огнём. Первая помощь, транспортировка. 
                      Самая опасная работа.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Обучение</div>
                    <p className="text-xs text-muted-foreground">
                      В отрядах проводились курсы для санитаров. Учили накладывать 
                      жгуты, делать уколы, останавливать кровь.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Типы ранений
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Огнестрельные</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Самые частые. Пулевые и осколочные ранения. 
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Лечение: извлечение пули, обработка раны, швы. Главная проблема — 
                    инфекция и гангрена.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Обморожения</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Зимой — массовое явление.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Лечение: постепенное отогревание, растирания. В тяжёлых случаях — 
                    ампутация.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Инфекции</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Тиф, дизентерия, малярия.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Лечение: изоляция больных, дезинфекция, травяные отвары. 
                    Антибиотики — роскошь.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Контузии</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    От взрывов и артобстрелов.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Лечение: покой, тишина. Восстановление слуха и координации 
                    могло занять месяцы.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Эвакуация тяжелораненых
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Тех, кого нельзя было вылечить в лесу, вывозили на Большую землю.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Самолётом</h3>
                  <p className="text-sm text-muted-foreground">
                    По-2 и Ли-2 садились на лесные аэродромы ночью. Забирали 5-10 раненых за рейс. 
                    За войну эвакуировано более 15,000 человек.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Через линию фронта</h3>
                  <p className="text-sm text-muted-foreground">
                    Когда фронт близко — раненых переправляли пешком или на повозках. 
                    Опасный путь через заминированные поля и вражеские посты.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">В деревни</h3>
                  <p className="text-sm text-muted-foreground">
                    Раненых прятали у надёжных крестьян. Рискованно — если немцы найдут, 
                    расстреляют и партизана, и всю семью.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                История одной операции
              </h2>
              
              <div className="p-6 bg-primary/5 rounded-lg font-serif text-sm">
                <p className="text-muted-foreground mb-3">
                  Командир отряда Пётр Кузьмич получил пулю в живот во время засады. 
                  Его донесли до госпиталя за 15 км.
                </p>
                <p className="text-muted-foreground mb-3">
                  Врач Мария Осипова оперировала при свете трёх коптилок. Хлороформа не было — 
                  использовали самогон. Ассистировала медсестра Катя, 19 лет.
                </p>
                <p className="text-muted-foreground mb-3">
                  Операция длилась 4 часа. Пуля прошла навылет, не задев органы. 
                  Рану промыли спиртом, зашили нитями от парашюта. Перевязки — мхом-сфагнумом.
                </p>
                <p className="text-muted-foreground">
                  Через 3 недели Пётр Кузьмич вернулся в строй. Воевал до конца войны, 
                  дошёл до Кёнигсберга. Умер в 1987 году в возрасте 74 лет.
                </p>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "Партизанские врачи творили чудеса. Без оборудования, без лекарств, 
                в землянках — они возвращали людей к жизни. Это был подвиг каждый день."
              </blockquote>
              <div className="text-sm text-muted-foreground">
                — Генерал Платонов, начальник медслужбы партизанского движения
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={18} />
    </>
  );
};

export default Page18;