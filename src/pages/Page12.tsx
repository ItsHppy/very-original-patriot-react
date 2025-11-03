import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import firstCommanders from "@/assets/first-commanders.jpg";
import { Users, TrendingUp, Shield } from "lucide-react";
import { useState } from "react";

const Page12 = () => {
  const [selectedCommander, setSelectedCommander] = useState<string | null>(null);

  const commanders = [
    {
      id: "korzh",
      name: "Василий Корж",
      role: "Первый партизан",
      date: "28 июня 1941",
      info: "Создал первый партизанский отряд через 6 дней после начала войны. Бывший пограничник, прекрасно знал местность."
    },
    {
      id: "bumazhkov",
      name: "Тихон Бумажков",
      role: "Первый герой-партизан",
      date: "Июль 1941",
      info: "Командир отряда в Пинском районе. Первый партизан, получивший звание Героя Советского Союза (посмертно)."
    },
    {
      id: "pavlovsky",
      name: "Фёдор Павловский",
      role: "Командир диверсантов",
      date: "Август 1941",
      info: "Организовал систему диверсий на железных дорогах. За первые месяцы уничтожил 15 вражеских поездов."
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
                  СТРАНИЦА 12 • ЛЕТО 1941
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Первые отряды
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                От 10 человек в июне до 12 000 бойцов к концу года
              </p>
            </div>

            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={firstCommanders}
                alt="Первые командиры партизанских отрядов"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-vintage-paper/80 font-serif italic">
                  Первые командиры партизанских отрядов, лето 1941 года
                </p>
              </div>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent text-center">
                Рост партизанского движения
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">430</div>
                  <div className="text-sm text-muted-foreground">отрядов создано</div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">12,000</div>
                  <div className="text-sm text-muted-foreground">партизан к декабрю</div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">6 дней</div>
                  <div className="text-sm text-muted-foreground">после начала войны</div>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Первые командиры
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {commanders.map((commander) => (
                  <button
                    key={commander.id}
                    onClick={() => setSelectedCommander(
                      selectedCommander === commander.id ? null : commander.id
                    )}
                    className={`p-6 rounded-lg border-2 transition-all text-left ${
                      selectedCommander === commander.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 bg-card/60"
                    }`}
                  >
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {commander.name}
                    </h3>
                    <div className="text-sm text-primary mb-1">{commander.role}</div>
                    <div className="text-xs text-muted-foreground">{commander.date}</div>
                  </button>
                ))}
              </div>

              {selectedCommander && (
                <div className="p-6 bg-primary/5 rounded-lg border-l-4 border-primary animate-fade-in">
                  <p className="text-muted-foreground">
                    {commanders.find(c => c.id === selectedCommander)?.info}
                  </p>
                </div>
              )}
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Из кого формировались отряды
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    Окруженцы (40%)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Красноармейцы и командиры, оставшиеся в тылу врага после окружения. 
                    Имели боевой опыт и оружие.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    Местные жители (35%)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Колхозники, рабочие, учителя. Знали местность, имели связи с населением.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    Партийные работники (15%)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Секретари райкомов, активисты. Организовывали и координировали действия.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    Диверсанты из Москвы (10%)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Специально обученные бойцы, заброшенные в тыл для организации сопротивления.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "Первые отряды создавались стихийно. Люди не хотели сдаваться врагу. 
                Уходили в леса семьями, с оружием и без него. Главное было — сопротивляться."
              </blockquote>
              <div className="text-sm text-muted-foreground">
                — Из воспоминаний партизана первого призыва
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={12} />
    </>
  );
};

export default Page12;