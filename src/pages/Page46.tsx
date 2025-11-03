import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Clock, AlertTriangle, Utensils, Shield } from "lucide-react";

const Page46 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-muted rounded-full mb-4">
                <span className="text-sm font-semibold text-foreground tracking-wider">
                  СТРАНИЦА 46 • ЖИЗНЬ ПОД ОККУПАЦИЕЙ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Один день из жизни
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Иммерсивная история от первого лица. Минск, зима 1942 года.
              </p>
            </div>

            {/* Time: Morning */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">6:00 — Подъём</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-foreground font-medium italic">
                  Просыпаюсь от холода. Дров почти нет — немцы запретили заготовку без разрешения. За нарушение — расстрел.
                </p>
                <p>
                  Мать уже встала, пытается растопить печь остатками мебели. В доме минус, окна выбиты ещё летом при бомбёжке, заткнуты тряпками.
                </p>
                <p>
                  Комендантский час закончился, но выходить на улицу страшно. Патрули немцев и полицаев могут остановить в любой момент.
                </p>
              </div>
            </Card>

            {/* Curfew */}
            <Card className="bg-destructive/5 border-l-4 border-destructive p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <h3 className="text-xl font-semibold text-destructive">Комендантский час</h3>
              </div>
              <p className="text-muted-foreground">
                С 20:00 до 6:00 запрещено выходить на улицу. За нарушение — расстрел на месте без предупреждения.
              </p>
            </Card>

            {/* Time: Morning Work */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">7:30 — Проверка документов</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-foreground font-medium italic">
                  Иду на принудительные работы на немецкий завод. Каждый день — 12 часов за миску баланды.
                </p>
                <p>
                  На углу улицы — блокпост. Немец с овчаркой проверяет документы. Ауsweis (пропуск) должен быть всегда при себе. Без него — отправка в лагерь или расстрел.
                </p>
                <p>
                  Рядом стоит полицай — бывший сосед. Отводит глаза. Не знаю, что хуже — немцы или свои предатели.
                </p>
              </div>
            </Card>

            {/* Documents */}
            <Card className="bg-muted/50 border-l-4 border-primary p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-primary">Обязательные документы</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Ауsweis — рабочий пропуск с фотографией и печатью</p>
                <p>• Справка с места работы</p>
                <p>• Домовая книга (для проверок в квартире)</p>
                <p>• За отсутствие документов — немедленный арест</p>
              </div>
            </Card>

            {/* Time: Noon */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">13:00 — Обед</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-foreground font-medium italic">
                  Баланда из гнилой капусты и крупицы ячменя. Это всё, что дают на заводе.
                </p>
                <p>
                  Дома ещё хуже. Карточная система — 200 грамм хлеба в день на человека. Этого не хватает даже ребёнку. Хлеб наполовину из опилок.
                </p>
                <p>
                  Соседи шепчутся — кто-то ночью выкопал картошку на немецком поле. Поймали, расстреляли всю семью на глазах у деревни. За пример.
                </p>
              </div>
            </Card>

            {/* Food Rations */}
            <Card className="bg-destructive/5 border-l-4 border-destructive p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Utensils className="h-6 w-6 text-destructive" />
                <h3 className="text-xl font-semibold text-destructive">Карточная система питания</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Хлеб: 200г в день (наполовину опилки и желуди)</p>
                <p>• Крупа: 200г в месяц</p>
                <p>• Мясо: 0г (только немцам и полицаям)</p>
                <p>• Картофель: если повезёт — 2кг в месяц</p>
              </div>
            </Card>

            {/* Time: Evening */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">19:00 — Возвращение домой</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-foreground font-medium italic">
                  Темнеет. Надо успеть до комендантского часа.
                </p>
                <p>
                  На улицах — облава. Немцы хватают молодых мужчин и женщин. Отправляют в Германию на работы. Остарбайтеры — восточные рабочие. Мало кто возвращается.
                </p>
                <p>
                  Сворачиваю в переулок, бегу. Сердце колотится. Слышу крики, выстрелы. Не оборачиваюсь.
                </p>
              </div>
            </Card>

            {/* Time: Night */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">21:00 — Ночь</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-foreground font-medium italic">
                  Лежу, не могу уснуть. За стеной слышны немецкие голоса — в соседней квартире поселились офицеры.
                </p>
                <p>
                  Боюсь кашлянуть слишком громко. Боюсь шёпота. Соседка донесла на другую семью — сказала, что они слушали советское радио. Расстреляли.
                </p>
                <p>
                  Доверять нельзя никому. Страх доносов страшнее голода.
                </p>
                <p className="text-foreground font-semibold pt-4">
                  И так — каждый день. Неделя за неделей. Месяц за месяцем. Три года оккупации.
                </p>
              </div>
            </Card>

            {/* The Reality */}
            <Card className="bg-gradient-to-br from-destructive/10 to-muted/10 border-l-4 border-destructive p-8">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">
                Реальность оккупации
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Так жили миллионы белорусов с 1941 по 1944 год. Постоянный страх, голод, унижения, произвол.
                </p>
                <p>
                  Каждый день был борьбой за выживание. Каждый день — под угрозой смерти. За любую мелочь могли расстрелять.
                </p>
                <p>
                  Те, кто пережил оккупацию, говорят: "Вы не можете представить, как это было. Слава Богу, вы никогда этого не узнаете."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={46} />
    </>
  );
};

export default Page46;