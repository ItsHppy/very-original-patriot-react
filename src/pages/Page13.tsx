import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import radioStation from "@/assets/radio-station.jpg";
import { Radio, Signal, MessageSquare } from "lucide-react";
import { useState } from "react";

const Page13 = () => {
  const [showMorse, setShowMorse] = useState(false);

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 13 • СВЯЗЬ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Связь с Большой землёй
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Радиограммы из леса в Москву — нить, связывающая партизан с родиной
              </p>
            </div>

            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={radioStation}
                alt="Партизанская радиостанция"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-vintage-paper/80 font-serif italic">
                  Радиостанция "Север" в партизанском бункере
                </p>
              </div>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent text-center">
                Путь радиограммы
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Партизанский лагерь</h3>
                    <p className="text-sm text-muted-foreground">
                      Командир отряда диктует донесение радисту. Информация о движении немецких войск, 
                      координаты целей, запрос боеприпасов.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Шифрование</h3>
                    <p className="text-sm text-muted-foreground">
                      Радист шифрует сообщение специальным кодом. Если его перехватят немцы, 
                      расшифровать не смогут.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Передача азбукой Морзе</h3>
                    <p className="text-sm text-muted-foreground">
                      В эфир уходит последовательность точек и тире. Сеанс связи — не более 
                      10 минут, иначе немцы засекут местоположение.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Центральный штаб в Москве</h3>
                    <p className="text-sm text-muted-foreground">
                      Радиограмма принята, расшифрована. В ответ идут приказы, координаты 
                      точек сброса грузов, общая обстановка на фронтах.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card/60 backdrop-blur-sm border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Radio className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-serif font-bold text-accent">
                    Радиостанции
                  </h2>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">"Север"</div>
                    <p className="text-xs text-muted-foreground">
                      Основная партизанская рация. Дальность связи до 1500 км. 
                      Вес 30 кг, работает от аккумуляторов.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">"РБ" (Радиобатальон)</div>
                    <p className="text-xs text-muted-foreground">
                      Более лёгкая, для небольших отрядов. Дальность до 500 км.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Трофейные немецкие</div>
                    <p className="text-xs text-muted-foreground">
                      Захваченные у врага. Использовались для подслушивания немецких переговоров.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/60 backdrop-blur-sm border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Signal className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-serif font-bold text-accent">
                    Радисты
                  </h2>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Самая опасная профессия в партизанах. Немцы охотились за радистами — 
                  без связи отряд слепой.
                </p>

                <div className="space-y-3">
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Обучение</div>
                    <p className="text-xs text-muted-foreground">
                      3-6 месяцев в школе радистов. Азбука Морзе, шифрование, ремонт техники.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Главная опасность</div>
                    <p className="text-xs text-muted-foreground">
                      Немецкие пеленгаторы засекали сигнал за 15-20 минут. Приходилось 
                      часто менять место передачи.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold text-accent">
                  Пример шифровки
                </h2>
                <button
                  onClick={() => setShowMorse(!showMorse)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm">{showMorse ? "Скрыть" : "Показать азбуку Морзе"}</span>
                </button>
              </div>
              
              <div className="p-6 bg-primary/5 rounded-lg mb-4">
                <div className="font-mono text-sm text-foreground mb-2">
                  ЗАФИКСИРОВАНА КОЛОННА ТАНКОВ ДВИЖЕТСЯ НА ВОСТОК КООРДИНАТЫ 53.9 27.6 
                  ЗАПРАШИВАЕМ АВИАУДАР
                </div>
              </div>

              {showMorse && (
                <div className="p-6 bg-accent/10 rounded-lg animate-fade-in">
                  <div className="font-mono text-xs text-muted-foreground break-all">
                    --.. •- ••-• •• -•- ••• •• •-• --- •••- •- -• •- -•- --- •-•• --- -• -• •-
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Азбука Морзе: точка (•) — короткий сигнал, тире (—) — длинный сигнал
                  </p>
                </div>
              )}
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Статистика связи
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-foreground mb-1">350+</div>
                  <div className="text-xs text-muted-foreground">радиостанций в отрядах</div>
                </div>

                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-foreground mb-1">2-3</div>
                  <div className="text-xs text-muted-foreground">радиограммы в день</div>
                </div>

                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-foreground mb-1">10 мин</div>
                  <div className="text-xs text-muted-foreground">максимум сеанс связи</div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "Радиостанция — это наши глаза и уши. Без связи с Москвой мы были бы 
                просто разрозненными группами в лесу. А так — мы часть единой армии."
              </blockquote>
              <div className="text-sm text-muted-foreground">
                — Пётр Машеров, командир партизанской бригады, будущий руководитель БССР
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={13} />
    </>
  );
};

export default Page13;