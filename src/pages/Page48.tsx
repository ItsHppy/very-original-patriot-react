import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Heart, MapPin, AlertTriangle } from "lucide-react";

const Page48 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12 bg-gradient-to-b from-background to-destructive/5">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Warning */}
            <div className="bg-destructive/20 border-2 border-destructive rounded-lg p-6 mb-8 text-center">
              <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
              <p className="text-destructive font-bold text-lg">
                ВНИМАНИЕ: Эта страница содержит информацию о преступлениях против детей
              </p>
              <p className="text-muted-foreground mt-2">
                Материал может быть тяжёлым для восприятия
              </p>
            </div>

            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-destructive/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-destructive tracking-wider">
                  СТРАНИЦА 48 • ПРЕСТУПЛЕНИЯ ПРОТИВ ДЕТЕЙ
                </span>
              </div>
              
              <div className="flex justify-center mb-6">
                <Heart className="h-16 w-16 text-destructive" />
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Детские концлагеря
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Дети как доноры крови для немецких солдат
              </p>
            </div>

            {/* Main Statistics */}
            <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-8 md:p-12 text-center mb-12">
              <div className="text-6xl md:text-7xl font-bold text-destructive mb-4">1 990</div>
              <p className="text-xl text-muted-foreground">
                детей использовались как доноры в лагере Красный Берег
              </p>
            </Card>

            {/* Salaspils */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Саласпилс (Латвия)
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Концлагерь Саласпилс под Ригой был создан в 1941 году. Здесь был отдельный барак для детей. Сюда попадали дети из оккупированных территорий, в том числе тысячи белорусских детей.
                </p>
                
                <p>
                  Детей содержали в ужасающих условиях. Их использовали для медицинских экспериментов и как доноров крови для раненых немецких солдат на Восточном фронте.
                </p>
                
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 my-8">
                  <p className="font-semibold text-foreground">
                    У детей регулярно брали кровь — по 400-500 мл, что для ребёнка смертельно опасно. После нескольких таких процедур дети умирали от истощения и потери крови.
                  </p>
                </div>

                <p>
                  Точное число погибших детей неизвестно. По разным оценкам, через Саласпилс прошло от 12 до 50 тысяч детей. Большинство погибли.
                </p>
              </div>
            </Card>

            {/* Krasny Bereg */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Красный Берег (Гомельская область)
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  На территории Беларуси также существовал детский концлагерь — в деревне Красный Берег Жлобинского района. Здесь содержались дети в возрасте от 8 до 14 лет.
                </p>
                
                <p>
                  1990 детей прошли через этот лагерь. Их кровь использовали для переливания немецким раненым. Детей держали голодными, в холоде, без медицинской помощи.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="border-l-4 border-destructive pl-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                      Условия содержания
                    </h3>
                    <p className="text-sm">
                      Дети жили в неотапливаемом бараке. Спали на нарах без матрасов и одеял. Кормили баландой раз в день. Болезни косили десятками.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-destructive pl-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                      Забор крови
                    </h3>
                    <p className="text-sm">
                      Каждые несколько дней у детей брали кровь. Часто — без анестезии и стерильных условий. После процедуры дети не могли встать, теряли сознание.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Medical Experiments */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Медицинские эксперименты
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Кроме забора крови, над детьми проводили медицинские эксперименты: испытывали новые вакцины, заражали болезнями для изучения, проверяли действие ядов.
                </p>
                
                <p>
                  Немецкие врачи не видели в этих детях людей. Для них это был просто "биологический материал". Никакой анестезии, никакой жалости.
                </p>
                
                <p>
                  Мало кто из детей выжил. Тех, кто был слишком слаб для дальнейшего использования, убивали инъекциями фенола или просто давали умереть от голода и болезней.
                </p>
              </div>
            </Card>

            {/* Survivors' Testimonies */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Свидетельства выживших
              </h2>
              
              <div className="space-y-6">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="italic text-foreground mb-2">Из воспоминаний выжившего ребёнка:</p>
                  <p className="text-sm text-muted-foreground">
                    "Я помню, как нас выстраивали в ряд. Немец в белом халате подходил с большим шприцем. Я видел, как дети падали в обморок. Я тоже потерял сознание. Проснулся — рядом лежал мёртвый мальчик."
                  </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="italic text-foreground mb-2">Из протокола допроса медсестры лагеря:</p>
                  <p className="text-sm text-muted-foreground">
                    "Я выполняла приказы врачей. Брала кровь у детей по 400-500 мл за раз. Знала, что это опасно для ребёнка, но отказаться не могла. После войны меня мучает совесть."
                  </p>
                </div>
              </div>
            </Card>

            {/* Memorial */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Мемориал в Красном Береге
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  В 2007 году в Красном Береге был открыт мемориальный комплекс "Детям — жертвам Великой Отечественной войны". Это единственный в СНГ мемориал, посвящённый детям-жертвам войны.
                </p>
                
                <p>
                  Центральная композиция — белая фигура девочки с поднятыми к небу руками. Рядом — школьная парта с раскрытой тетрадью. На страницах — последнее письмо 15-летней Кати Сусаниной отцу на фронт.
                </p>
                
                <div className="bg-primary/10 border-l-4 border-primary p-6 my-6">
                  <p className="font-semibold text-foreground italic">
                    "Папенька, мы в подвале... Немцы пришли... Папа, если останешься жив, найди мою могилку... Папа, мне страшно... Прощай, папа..."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    — Из письма Кати Сусаниной
                  </p>
                </div>

                <p>
                  На аллее установлены белые парусные лодочки — символы детских мечтаний, не сбывшихся из-за войны.
                </p>
              </div>
            </Card>

            {/* Names List */}
            <Card className="bg-gradient-to-br from-destructive/10 to-muted/10 border-l-4 border-destructive p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">
                Список имён (неполный)
              </h2>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Установить имена всех погибших детей невозможно — немцы уничтожили документы перед отступлением. Но память о каждом ребёнке священна.</p>
                <p className="pt-4 font-semibold text-foreground">
                  Тысячи имён остались неизвестными. Но мы помним. Мы не забудем.
                </p>
              </div>
            </Card>

            {/* Conclusion */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif italic text-foreground mb-4">
                "Дети — самые беззащитные жертвы войны. Их невозможно забыть. Их преступления против них — непростительны."
              </blockquote>
              <p className="text-muted-foreground mt-4">
                Детские концлагеря — одно из самых чудовищных преступлений нацизма. Это напоминание о том, к чему приводит идеология расового превосходства и человеконенавистничества.
              </p>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={48} />
    </>
  );
};

export default Page48;