import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import womenPartisans from "@/assets/women-partisans.jpg";
import { Heart, Shield, Eye, Activity } from "lucide-react";

const Page35 = () => {
  const heroes = [
    {
      name: "Мария Осипова",
      role: "Снайпер",
      achievement: "Уничтожила 36 солдат противника",
      award: "Герой Советского Союза",
    },
    {
      name: "Елена Мазаник",
      role: "Разведчица",
      achievement: "Ликвидировала гауляйтера Беларуси Вильгельма Кубе",
      award: "Герой Советского Союза",
    },
    {
      name: "Зинаида Портнова",
      role: "Подпольщица",
      achievement: "Партизанская разведчица в оккупированном Витебске",
      award: "Герой Советского Союза (посмертно)",
    },
    {
      name: "Надежда Троян",
      role: "Подрывник",
      achievement: "Участвовала в подрыве 19 эшелонов врага",
      award: "Герой Советского Союза",
    },
  ];

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 35 • ГЕРОИНИ СОПРОТИВЛЕНИЯ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Женщины-партизанки
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Снайперы, медсестры, разведчицы — женщины на войне
              </p>
            </div>

            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={womenPartisans}
                alt="Женщины-партизанки"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent text-center">
                Роль женщин в партизанском движении
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-2">Медсестры</div>
                  <div className="text-sm text-muted-foreground">
                    Спасали раненых в полевых условиях
                  </div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Eye className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-2">Разведчицы</div>
                  <div className="text-sm text-muted-foreground">
                    Добывали ценные сведения
                  </div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-2">Снайперы</div>
                  <div className="text-sm text-muted-foreground">
                    Уничтожали врагов с точностью
                  </div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Activity className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-2">Связные</div>
                  <div className="text-sm text-muted-foreground">
                    Связывали отряды и подполье
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">26%</div>
                  <div className="text-xs text-muted-foreground">
                    женщин среди белорусских партизан
                  </div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">~97,000</div>
                  <div className="text-xs text-muted-foreground">
                    женщин в партизанских отрядах
                  </div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">4</div>
                  <div className="text-xs text-muted-foreground">
                    Героя Советского Союза
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-serif font-bold text-accent text-center mb-8">
                Героини войны
              </h2>
              
              {heroes.map((hero, index) => (
                <Card
                  key={index}
                  className="bg-card/60 backdrop-blur-sm border-border p-6 hover:bg-card/80 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold mb-1 text-foreground">
                        {hero.name}
                      </h3>
                      <div className="text-sm text-primary font-semibold mb-2">
                        {hero.role}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {hero.achievement}
                      </p>
                      <div className="inline-block px-3 py-1 bg-honor-gold/20 text-honor-gold rounded-full text-xs font-semibold">
                        ★ {hero.award}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Особенности женской партизанской войны
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-primary">Преимущества</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Меньше подозрений при разведке в городах</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Могли работать прислугой в немецких штабах</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Легче скрывали связь с партизанами</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Врачи и медсестры — незаменимы в отрядах</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-primary">Трудности</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Суровые условия жизни в лесу</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Тяжелые физические нагрузки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Жестокие репрессии при поимке</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Ответственность за детей в отряде</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "Женщины в партизанских отрядах показали такое же мужество, 
                как и мужчины. Они были снайперами, подрывниками, разведчицами. 
                Многие погибли, но память о них живет в сердцах народа."
              </blockquote>
              <div className="text-sm text-muted-foreground mt-4">
                Из воспоминаний Петра Машерова, командира партизанского отряда, 
                позднее — Первого секретаря ЦК КП Беларуси
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={35} />
    </>
  );
};

export default Page35;
