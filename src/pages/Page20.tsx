import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import batkaMinay from "@/assets/batka-minay.jpg";
import { Flame, Users, Target, Heart } from "lucide-react";

const Page20 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 20 • ЛЕГЕНДАРНЫЙ КОМАНДИР
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Минай Шмырёв — Батька Минай
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Легенда белорусского партизанского движения. Мститель и защитник народа.
              </p>
            </div>

            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={batkaMinay}
                alt="Батька Минай и его отряд"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-vintage-paper/80 font-serif italic">
                  Минай Филиппович Шмырёв (1891-1964) — командир партизанской бригады "Батька Минай"
                </p>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-l-4 border-destructive p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-8 w-8 text-destructive" />
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  Личная трагедия
                </h2>
              </div>
              
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                В сентябре 1941 года немцы сожгли деревню Пудоть. В огне погибла 
                жена Шмырёва Елена Александровна и трое его детей — Вера (17 лет), 
                Тамара (12 лет) и Володя (8 лет).
              </p>
              
              <div className="mt-6 p-6 bg-background/50 rounded-lg">
                <blockquote className="text-xl font-serif italic text-foreground">
                  "За смерть жены и детей я отомщу врагу сторицей. 
                  Буду бить фашистов до последнего дыхания."
                </blockquote>
                <div className="text-sm text-muted-foreground mt-2">— Минай Шмырёв</div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card/80 backdrop-blur-sm border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-serif font-bold text-accent">
                    Бригада "Батька Минай"
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="text-sm text-primary font-semibold mb-1">Создание</div>
                    <p className="text-sm text-muted-foreground">
                      Июль 1941 года, Витебская область
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <div className="text-sm text-accent font-semibold mb-1">Численность</div>
                    <p className="text-sm text-muted-foreground">
                      До 2,000 бойцов к 1943 году
                    </p>
                  </div>

                  <div className="border-l-4 border-honor-gold pl-4">
                    <div className="text-sm text-honor-gold font-semibold mb-1">Территория</div>
                    <p className="text-sm text-muted-foreground">
                      Витебская и Минская области
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-serif font-bold text-accent">
                    Боевой счёт
                  </h2>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded">
                    <div className="text-3xl font-bold text-primary mb-1">800+</div>
                    <div className="text-xs text-muted-foreground">операций</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded">
                    <div className="text-3xl font-bold text-primary mb-1">3,000+</div>
                    <div className="text-xs text-muted-foreground">врагов уничтожено</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded">
                    <div className="text-3xl font-bold text-primary mb-1">160</div>
                    <div className="text-xs text-muted-foreground">эшелонов под откос</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded">
                    <div className="text-3xl font-bold text-primary mb-1">50</div>
                    <div className="text-xs text-muted-foreground">мостов взорвано</div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Легендарные операции
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    Освобождение Сураж (сентябрь 1941)
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Первый райцентр, освобожденный партизанами. Удерживали 14 дней, 
                    эвакуировали раненых и госпитали.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    Битва за Пудоть (1942)
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Отряд Шмырёва сражался с карательной экспедицией более 500 немецких солдат. 
                    Враг был отброшен с большими потерями.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    Рельсовая война (1943)
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Бригада "Батька Минай" уничтожила 160 эшелонов противника, 
                    сорвав поставки на фронт.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-l-4 border-primary p-8">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="h-8 w-8 text-honor-gold" />
                <h2 className="text-2xl font-serif font-bold text-accent">
                  Награды и признание
                </h2>
              </div>
              
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-honor-gold">★ Герой Советского Союза</span> (6 сентября 1943)
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-primary">Генерал-майор</span> (1943)
                </p>
                <p className="text-muted-foreground text-sm mt-4">
                  После войны Минай Филиппович работал в Витебске. 
                  Его именем названы улицы во многих городах Беларуси. 
                  Народ помнит легендарного командира — Батьку Миная.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={20} />
    </>
  );
};

export default Page20;
