import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import dugout from "@/assets/dugout.jpg";
import { Home, Thermometer, Shield, Users } from "lucide-react";

const Page17 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 17 • БЫТ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Партизанские землянки
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Дом в лесу — укрытие от врага и непогоды
              </p>
            </div>

            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={dugout}
                alt="Разрез партизанской землянки"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-vintage-paper/80 font-serif italic">
                  Устройство типичной партизанской землянки (реконструкция)
                </p>
              </div>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent text-center">
                Условия жизни
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Thermometer className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">-5°C</div>
                  <div className="text-sm text-muted-foreground">зимой внутри</div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Home className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">+15°C</div>
                  <div className="text-sm text-muted-foreground">летом внутри</div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">10-15</div>
                  <div className="text-sm text-muted-foreground">человек в одной землянке</div>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Как строились землянки
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Выбор места</h3>
                    <p className="text-sm text-muted-foreground">
                      Глухой лес, желательно у воды. Подальше от дорог и деревень. 
                      Важно — сухая почва, чтобы не затопило весной.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Рытьё котлована</h3>
                    <p className="text-sm text-muted-foreground">
                      Яма глубиной 1.5-2 метра. Размер 4x6 метров на 10-15 человек. 
                      Землю уносили подальше, чтобы не выдать место.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Установка каркаса</h3>
                    <p className="text-sm text-muted-foreground">
                      Брёвна для стен и потолка. Нары вдоль стен в 2-3 яруса. 
                      Печка-буржуйка из листового железа или консервных банок.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Маскировка</h3>
                    <p className="text-sm text-muted-foreground">
                      Сверху — слой земли 30-50 см. Мох, трава, ветки. Дым от печки 
                      выводился в дупло старого дерева или рассеивался под землёй.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card/60 backdrop-blur-sm border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-serif font-bold text-accent">
                    Защита от авиации
                  </h2>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Немецкие самолёты искали партизанские лагеря с воздуха.
                </p>

                <div className="space-y-3">
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Дым</div>
                    <p className="text-xs text-muted-foreground">
                      Печку топили только ночью или в пасмурную погоду. Дым рассеивали 
                      через систему подземных труб.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Тропы</div>
                    <p className="text-xs text-muted-foreground">
                      К землянкам не вели прямые тропы. Маршруты постоянно меняли, 
                      заметали следы.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Вход</div>
                    <p className="text-xs text-muted-foreground">
                      Замаскированный люк размером 50x70 см. Снаружи — как кочка или 
                      куст. Изнутри закрывался на засов.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/60 backdrop-blur-sm border-border p-8">
                <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                  Быт в землянке
                </h2>
                
                <p className="text-muted-foreground mb-4">
                  Тесно, темно, сыро — но это дом и защита.
                </p>

                <div className="space-y-3">
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Освещение</div>
                    <p className="text-xs text-muted-foreground">
                      Коптилки из гильз с фитилём. Иногда — трофейные немецкие фонари.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Сон</div>
                    <p className="text-xs text-muted-foreground">
                      Нары из жердей, застеленные еловыми ветками. Спали в одежде, 
                      укрывались шинелями.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded">
                    <div className="font-semibold text-sm mb-1">Досуг</div>
                    <p className="text-xs text-muted-foreground">
                      Вечерами — песни, чтение газет, игра в карты. Писали письма, 
                      чистили оружие.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Типы землянок
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    Жилые землянки
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Для отдыха бойцов. Самые большие, с печкой. Вмещали 10-20 человек. 
                    В одном лагере могло быть 5-10 таких землянок.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    Штабные
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Для командиров и связистов. Меньше по размеру, но лучше оборудованы. 
                    Стол, радиостанция, карты на стенах.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    Хозяйственные
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Склады для продовольствия, боеприпасов, оружия. Без печки, 
                    максимально замаскированы.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    Госпитальные
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Для раненых. Чище остальных, с хорошей вентиляцией. Располагались 
                    отдельно от основного лагеря.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Зимой в землянке
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Самое тяжёлое время. Мороз, сырость, нехватка дров.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-sm mb-2">Проблемы</h3>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Конденсат на стенах превращался в лёд</li>
                    <li>• Дрова быстро заканчивались</li>
                    <li>• Угар от печки в тесном помещении</li>
                    <li>• Болезни от сырости и холода</li>
                  </ul>
                </div>

                <div className="p-4 bg-accent/5 rounded-lg">
                  <h3 className="font-semibold text-sm mb-2">Решения</h3>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Утепление стен мхом и землёй</li>
                    <li>• Дежурства у печки — топить по очереди</li>
                    <li>• Вентиляционные отверстия</li>
                    <li>• Горячая еда и чай минимум 2 раза в день</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "Землянка — это не комфорт. Это выживание. Но когда возвращаешься после 
                операции живым, эта сырая нора кажется самым уютным местом на земле."
              </blockquote>
              <div className="text-sm text-muted-foreground">
                — Из дневника партизана Алексея Фёдорова
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={17} />
    </>
  );
};

export default Page17;