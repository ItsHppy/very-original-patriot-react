import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import minskBurning from "@/assets/minsk-burning.jpg";
import { Flame } from "lucide-react";
import { useState } from "react";

const Page9 = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-destructive/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-destructive tracking-wider">
                  СТРАНИЦА 9 • ПАДЕНИЕ СТОЛИЦЫ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Минск в огне
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                28 июня 1941 года. Шестой день войны. Столица Беларуси оккупирована.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={minskBurning}
                alt="Горящий Минск"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="h-5 w-5 text-destructive" />
                  <p className="text-sm text-vintage-paper/80 font-serif italic">
                    Минск, 28 июня 1941 года — город объят пламенем
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Последние дни свободного Минска
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="text-sm text-primary font-semibold mb-2">22 июня, 3:30</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Первые бомбардировки
                  </h3>
                  <p className="text-muted-foreground">
                    Немецкие бомбардировщики наносят первые удары по городу. 
                    Горят вокзал, телеграф, электростанция. Начинается паника и эвакуация.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6 py-2">
                  <div className="text-sm text-accent font-semibold mb-2">24-27 июня</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Окружение
                  </h3>
                  <p className="text-muted-foreground">
                    Немецкие танковые клинья замыкают кольцо окружения. 
                    Советские войска пытаются прорваться на восток. 
                    Непрерывные бои на подступах к городу.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-6 py-2">
                  <div className="text-sm text-destructive font-semibold mb-2">28 июня</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Падение Минска
                  </h3>
                  <p className="text-muted-foreground">
                    После шести дней ожесточенных боев немецкие войска входят в город. 
                    Минск горит. Начинается трехлетняя оккупация столицы Беларуси.
                  </p>
                </div>
              </div>
            </Card>

            {/* Before/After Slider Concept */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                До и после
              </h2>
              
              <div className="mb-6">
                <p className="text-muted-foreground mb-4">
                  Сдвиньте ползунок, чтобы увидеть масштаб разрушений
                </p>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className={`transition-opacity duration-300 ${sliderPosition > 50 ? 'opacity-30' : 'opacity-100'}`}>
                  <h3 className="font-semibold mb-3 text-primary">До войны (1940)</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Население: 238 000 человек</li>
                    <li>• 332 улицы</li>
                    <li>• 70% зданий — каменные</li>
                    <li>• Промышленные предприятия: 280</li>
                    <li>• Театры, музеи, библиотеки</li>
                  </ul>
                </div>

                <div className={`transition-opacity duration-300 ${sliderPosition < 50 ? 'opacity-30' : 'opacity-100'}`}>
                  <h3 className="font-semibold mb-3 text-destructive">После бомбардировок (июль 1941)</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 80% жилого фонда уничтожено</li>
                    <li>• Центр города — сплошные руины</li>
                    <li>• Промышленность парализована</li>
                    <li>• Тысячи погибших мирных жителей</li>
                    <li>• Культурные ценности утрачены</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Witnesses */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Свидетельства очевидцев
              </h2>

              <div className="space-y-4">
                <Card className="bg-card/60 backdrop-blur-sm border-border p-6">
                  <blockquote className="text-muted-foreground italic mb-2">
                    "Город горел три дня. Дым стоял такой густой, что днём было темно, 
                    как ночью. Люди бежали куда глаза глядят — на восток, в леса..."
                  </blockquote>
                  <cite className="text-xs text-muted-foreground">— Анна Васильевна, жительница Минска</cite>
                </Card>

                <Card className="bg-card/60 backdrop-blur-sm border-border p-6">
                  <blockquote className="text-muted-foreground italic mb-2">
                    "Я был на вокзале, когда началась первая бомбёжка. Крыша рухнула, 
                    всё вокруг горело. Я чудом выжил, но потерял всю семью в этот день."
                  </blockquote>
                  <cite className="text-xs text-muted-foreground">— Михаил Петрович, железнодорожник</cite>
                </Card>
              </div>
            </div>

            {/* Statistics */}
            <Card className="bg-gradient-to-br from-destructive/10 to-primary/10 border-l-4 border-destructive p-8">
              <h3 className="text-2xl font-serif font-bold mb-6 text-center text-accent">
                Минск: 1941-1944
              </h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-destructive mb-2">1 100</div>
                  <div className="text-sm text-muted-foreground">дней оккупации</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-destructive mb-2">70 000</div>
                  <div className="text-sm text-muted-foreground">погибших в гетто</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-destructive mb-2">80%</div>
                  <div className="text-sm text-muted-foreground">города разрушено</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-honor-gold mb-2">3.07.1944</div>
                  <div className="text-sm text-muted-foreground">день освобождения</div>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
                За мужество и героизм, проявленные в борьбе против немецко-фашистских захватчиков, 
                Минск получил почетное звание "Город-Герой" (1974)
              </p>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={9} />
    </>
  );
};

export default Page9;
