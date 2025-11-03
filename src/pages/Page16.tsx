import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import partisanWeapons from "@/assets/partisan-weapons.jpg";
import { Crosshair, Package, Wrench, TrendingUp } from "lucide-react";
import { useState } from "react";

const Page16 = () => {
  const [selectedWeapon, setSelectedWeapon] = useState<string | null>(null);

  const weapons = [
    {
      id: "ppsh",
      name: "ППШ-41",
      type: "Советский автомат",
      info: "Основное оружие партизан. Надёжный, простой, с дисковым магазином на 71 патрон. Доставлялся с Большой земли.",
      source: "Сброшен с самолёта"
    },
    {
      id: "mosin",
      name: "Винтовка Мосина",
      type: "Снайперская винтовка",
      info: "Трёхлинейка — основа вооружения. Дальность до 800 м. Многие партизаны использовали её со времён Первой мировой.",
      source: "Скрыта перед отступлением"
    },
    {
      id: "mauser",
      name: "Mauser 98k",
      type: "Трофейная винтовка",
      info: "Немецкое оружие, захваченное в боях. Хорошая точность, но патроны добывать сложнее.",
      source: "Трофей после засады"
    },
    {
      id: "grenade",
      name: "Ф-1 'Лимонка'",
      type: "Граната",
      info: "Противопехотная граната. Радиус поражения 30 м. Эффективна в засадах и при штурмах.",
      source: "Доставка самолётами"
    }
  ];

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 16 • ВООРУЖЕНИЕ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Оружие партизан
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                От 10% вооружённых в начале до 95% к 1944 году
              </p>
            </div>

            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={partisanWeapons}
                alt="Коллекция партизанского оружия"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-vintage-paper/80 font-serif italic">
                  Партизанское вооружение: советское, трофейное, самодельное
                </p>
              </div>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent text-center">
                Рост вооружённости
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">10%</div>
                  <div className="text-sm text-muted-foreground">лето 1941 года</div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Crosshair className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">60%</div>
                  <div className="text-sm text-muted-foreground">конец 1942 года</div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Package className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">к 1944 году</div>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Основные виды оружия
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {weapons.map((weapon) => (
                  <button
                    key={weapon.id}
                    onClick={() => setSelectedWeapon(
                      selectedWeapon === weapon.id ? null : weapon.id
                    )}
                    className={`p-6 rounded-lg border-2 transition-all text-left ${
                      selectedWeapon === weapon.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 bg-card/60"
                    }`}
                  >
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {weapon.name}
                    </h3>
                    <div className="text-sm text-primary">{weapon.type}</div>
                  </button>
                ))}
              </div>

              {selectedWeapon && (
                <div className="p-6 bg-primary/5 rounded-lg border-l-4 border-primary animate-fade-in">
                  <p className="text-muted-foreground mb-2">
                    {weapons.find(w => w.id === selectedWeapon)?.info}
                  </p>
                  <div className="text-sm text-primary">
                    Источник: {weapons.find(w => w.id === selectedWeapon)?.source}
                  </div>
                </div>
              )}
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Источники оружия
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Доставка с Большой земли (40%)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Самолёты сбрасывали на парашютах автоматы, патроны, гранаты. 
                    За войну доставлено более 100 000 единиц стрелкового оружия.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-accent">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Crosshair className="w-5 h-5" />
                    Трофеи в боях (35%)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Захваченное у немцев: винтовки Mauser, автоматы MP-40, пулемёты MG-34. 
                    После каждой успешной засады — пополнение арсенала.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Wrench className="w-5 h-5" />
                    Самодельное (15%)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Гранаты из консервных банок, мины из снарядов, холодное оружие. 
                    В партизанских мастерских изготавливали даже патроны.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-accent">
                  <h3 className="font-semibold text-foreground mb-2">
                    Скрытое перед отступлением (10%)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Красноармейцы закапывали оружие перед отступлением. Партизаны 
                    находили эти тайники по картам или с помощью местных.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card/60 backdrop-blur-sm border-border p-8">
                <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                  Проблемы с боеприпасами
                </h2>
                
                <p className="text-muted-foreground mb-4">
                  Патроны были на вес золота. Каждый выстрел на счёту.
                </p>

                <div className="space-y-3">
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Экономия патронов</div>
                    <p className="text-xs text-muted-foreground">
                      Стреляли только наверняка. Новички тренировались на холостых.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Сбор гильз</div>
                    <p className="text-xs text-muted-foreground">
                      После боя собирали все гильзы. В мастерских снаряжали заново.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Трофейные патроны</div>
                    <p className="text-xs text-muted-foreground">
                      Немецкие 7.92 мм не подходили к советским винтовкам, но использовались в трофейном оружии.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/60 backdrop-blur-sm border-border p-8">
                <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                  Партизанские мастерские
                </h2>
                
                <p className="text-muted-foreground mb-4">
                  В лесах работали оружейники, чинившие и создававшие оружие.
                </p>

                <div className="space-y-3">
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Ремонт оружия</div>
                    <p className="text-xs text-muted-foreground">
                      Восстановление повреждённых автоматов, замена деталей.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Изготовление мин</div>
                    <p className="text-xs text-muted-foreground">
                      Противотанковые и противопехотные мины из трофейных снарядов.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Холодное оружие</div>
                    <p className="text-xs text-muted-foreground">
                      Ножи, кинжалы — для бесшумных операций и рукопашного боя.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Статистика вооружения
              </h2>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-foreground mb-1">100,000+</div>
                  <div className="text-xs text-muted-foreground">единиц стрелкового оружия доставлено</div>
                </div>

                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-foreground mb-1">20,000+</div>
                  <div className="text-xs text-muted-foreground">трофейных единиц захвачено</div>
                </div>

                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-foreground mb-1">150</div>
                  <div className="text-xs text-muted-foreground">оружейных мастерских</div>
                </div>

                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-foreground mb-1">40+</div>
                  <div className="text-xs text-muted-foreground">типов оружия использовалось</div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "Первое оружие партизаны добывали у врага. Засада — трофеи — новая засада. 
                Так постепенно безоружные люди становились грозной силой."
              </blockquote>
              <div className="text-sm text-muted-foreground">
                — Из мемуаров командира партизанской бригады
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={16} />
    </>
  );
};

export default Page16;