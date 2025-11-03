import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Truck, MapPin, Factory, FileText } from "lucide-react";

const Page47 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-destructive/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-destructive tracking-wider">
                  СТРАНИЦА 47 • ПРИНУДИТЕЛЬНЫЙ УГОН
                </span>
              </div>
              
              <div className="flex justify-center mb-6">
                <Truck className="h-16 w-16 text-destructive" />
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Остарбайтеры
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Угон белорусов на принудительные работы в Германию
              </p>
            </div>

            {/* Main Statistics */}
            <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-8 md:p-12 text-center mb-12">
              <div className="text-6xl md:text-7xl font-bold text-destructive mb-4">380 000</div>
              <p className="text-xl text-muted-foreground">
                белорусов было угнано на работы в Рейх
              </p>
            </Card>

            {/* What is Ostarbeiter */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Кто такие остарбайтеры
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Ostarbeiter (восточный рабочий) — так нацисты называли людей, угнанных на принудительные работы с оккупированных территорий СССР. Это была фактически рабская сила для немецкой экономики.
                </p>
                
                <p>
                  Из Беларуси было вывезено около 380 тысяч человек. Большинство — молодые люди в возрасте 15-35 лет. Их труд использовался на заводах, фермах, шахтах, строительстве.
                </p>
              </div>
            </Card>

            {/* How They Were Taken */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Как отбирали людей
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-destructive pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-destructive">
                    Облавы
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Немецкие патрули и полицаи окружали деревни или районы города, хватали всех подходящих по возрасту. Сопротивление каралось расстрелом. Людей грузили в грузовики и вагоны прямо в чём были.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-destructive">
                    Квоты по деревням
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Каждая деревня должна была сдать определённое количество людей. Старосты составляли списки. Те, кто пытался скрыться, подвергали опасности всю деревню — могли сжечь в отместку.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-destructive">
                    Обман
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Иногда объявляли наборы "добровольцев" на хорошую работу в Германии, обещали высокую зарплату, нормальные условия. Поверившие попадали в рабство.
                  </p>
                </div>
              </div>
            </Card>

            {/* Where They Worked */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Factory className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Куда отправляли
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Военные заводы</h3>
                  <p className="text-sm text-muted-foreground">
                    Производство оружия, боеприпасов, военной техники. Работа по 12-14 часов в день в опасных условиях. Минимальное питание.
                  </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Сельское хозяйство</h3>
                  <p className="text-sm text-muted-foreground">
                    Работа на немецких фермах. Тяжёлый физический труд от рассвета до заката. Жили в сараях, ели объедки.
                  </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Шахты</h3>
                  <p className="text-sm text-muted-foreground">
                    Добыча угля в опасных условиях. Частые обвалы, удушье, болезни. Многие не вернулись.
                  </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Строительство</h3>
                  <p className="text-sm text-muted-foreground">
                    Восстановление разрушенных бомбардировками городов, строительство укреплений. Без средств защиты.
                  </p>
                </div>
              </div>
            </Card>

            {/* Conditions */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Условия труда и жизни
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Остарбайтеры считались людьми второго сорта. Они носили специальные нашивки "OST" на одежде, жили в бараках за колючей проволокой, получали мизерные пайки.
                </p>
                
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 my-8">
                  <p className="font-semibold text-foreground">
                    Запрещалось: ходить по городу без разрешения, посещать немецкие магазины и кафе, контактировать с немцами. За нарушения — избиения, отправка в концлагерь.
                  </p>
                </div>

                <p>
                  Болезни, истощение, несчастные случаи на производстве уносили тысячи жизней. Медицинская помощь почти не оказывалась. Умерших хоронили в общих ямах.
                </p>
              </div>
            </Card>

            {/* Letters Home */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Письма домой
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Остарбайтерам разрешалось писать письма, но они проходили цензуру. Писать можно было только о том, что "всё хорошо". Жаловаться запрещалось.
                </p>
                
                <div className="bg-muted/50 p-6 rounded-lg my-6">
                  <p className="italic text-foreground mb-2">Из письма домой (1943 год):</p>
                  <p className="text-sm">
                    "Дорогая мама, у меня всё хорошо, работаю на заводе, кормят достаточно. Не волнуйся. Надеюсь скоро увидеться. Целую, твоя Мария."
                  </p>
                  <p className="text-xs mt-4 text-muted-foreground">
                    На самом деле Мария работала по 14 часов в день, получала 150г хлеба и похлёбку. Но написать правду было нельзя.
                  </p>
                </div>

                <p>
                  Многие письма вообще не доходили. Связь с домом прерывалась на годы.
                </p>
              </div>
            </Card>

            {/* After Liberation */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Судьба после освобождения
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  После войны освобождённые остарбайтеры столкнулись с ещё одним испытанием — фильтрационными лагерями НКВД. Советская власть подозревала их в сотрудничестве с немцами или шпионаже.
                </p>
                
                <p>
                  Люди проходили проверки, допросы. Многих отправляли в лагеря ГУЛАГа или на спецпоселения. Клеймо "побывавшего в плену/угоне" преследовало всю жизнь — сложности с работой, учёбой, постоянные подозрения.
                </p>
                
                <p>
                  Только десятилетия спустя общество начало признавать, что остарбайтеры — не предатели, а жертвы нацистской политики.
                </p>
              </div>
            </Card>

            {/* Memory */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-primary p-8">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">
                База данных остарбайтеров
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Сегодня существуют международные базы данных остарбайтеров. Многие семьи пытаются найти информацию о судьбе своих родственников.
                </p>
                <p>
                  В Германии работают архивы, где хранятся документы о принудительных работах. Это помогает восстановить память и отдать дань уважения жертвам.
                </p>
                <p className="font-semibold text-foreground pt-4">
                  380 000 белорусов прошли через ад принудительного труда. Многие не вернулись. Мы помним.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={47} />
    </>
  );
};

export default Page47;