import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import youngPartisans from "@/assets/young-partisans.jpg";
import { Users, Award, Shield, Heart } from "lucide-react";

const Page19 = () => {
  const heroes = [
    {
      name: "Марат Казей",
      age: 14,
      role: "Разведчик",
      story: "Подорвал себя гранатой, чтобы не сдаться. Герой Советского Союза (посмертно).",
      achievement: "Участвовал в 10+ разведывательных операциях"
    },
    {
      name: "Зина Портнова",
      age: 17,
      role: "Подпольщица",
      story: "Работала в немецкой столовой, отравила более 100 оккупантов. Погибла под пытками.",
      achievement: "Герой Советского Союза (посмертно)"
    },
    {
      name: "Лёня Голиков",
      age: 16,
      role: "Диверсант",
      story: "Уничтожил 78 немецких солдат, 14 мостов, 9 автомашин с боеприпасами.",
      achievement: "Герой Советского Союза (посмертно)"
    },
    {
      name: "Валя Котик",
      age: 14,
      role: "Партизан",
      story: "Самый молодой Герой Советского Союза. Погиб в бою с немцами в 14 лет.",
      achievement: "Участвовал в подрыве 6 железнодорожных эшелонов"
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
                  СТРАНИЦА 19 • ЮНЫЕ ГЕРОИ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Молодёжь в партизанах
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                От 12 до 18 лет — детство, украденное войной
              </p>
            </div>

            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={youngPartisans}
                alt="Юные партизаны"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-vintage-paper/80 font-serif italic">
                  Юные партизаны-разведчики, 1942-1943
                </p>
              </div>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent text-center">
                Молодёжь в цифрах
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">~10%</div>
                  <div className="text-sm text-muted-foreground">партизан — до 18 лет</div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">12</div>
                  <div className="text-sm text-muted-foreground">лет самому младшему</div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">4</div>
                  <div className="text-sm text-muted-foreground">Героя СССР среди детей</div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">тысяч юных партизан</div>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Роли молодых партизан
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h3 className="font-semibold text-foreground mb-2">Связные</h3>
                  <p className="text-sm text-muted-foreground">
                    Самая распространённая роль. Дети не вызывали подозрений у немцев. 
                    Переносили донесения, оружие, медикаменты между отрядами и в города.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-accent">
                  <h3 className="font-semibold text-foreground mb-2">Разведчики</h3>
                  <p className="text-sm text-muted-foreground">
                    Следили за немецкими колоннами, считали технику, запоминали расположение постов. 
                    Незаметные, быстрые, наблюдательные — идеальные разведчики.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h3 className="font-semibold text-foreground mb-2">Диверсанты</h3>
                  <p className="text-sm text-muted-foreground">
                    Участвовали в подрывах мостов и рельсов. Подносили взрывчатку, 
                    устанавливали мины. Маленькие и юркие — могли пробраться туда, 
                    куда взрослый не пролезет.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-accent">
                  <h3 className="font-semibold text-foreground mb-2">Бойцы</h3>
                  <p className="text-sm text-muted-foreground">
                    Сражались наравне со взрослыми. В засадах, штурмах гарнизонов. 
                    Многие погибли с оружием в руках, защищая Родину.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Пионеры-герои
              </h2>
              
              <div className="space-y-6">
                {heroes.map((hero, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-primary/5 rounded-lg border-l-4 border-primary"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{hero.name}</h3>
                        <div className="flex gap-3 text-sm text-muted-foreground mt-1">
                          <span>{hero.age} лет</span>
                          <span>•</span>
                          <span className="text-primary">{hero.role}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{hero.story}</p>
                    <div className="text-xs text-primary font-semibold">
                      {hero.achievement}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Почему дети уходили в партизаны
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Потеря семьи</h3>
                  <p className="text-sm text-muted-foreground">
                    Немцы убили родителей, сожгли деревню. Некуда идти, кроме как к партизанам. 
                    Месть — единственное, что осталось.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Вместе с родителями</h3>
                  <p className="text-sm text-muted-foreground">
                    Целые семьи уходили в лес. Дети оставались с отцами-партизанами. 
                    Помогали чем могли, постепенно становились бойцами.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Патриотизм</h3>
                  <p className="text-sm text-muted-foreground">
                    Сознательный выбор. Хотели воевать за Родину, как взрослые. 
                    Убегали из деревень, искали партизанские отряды.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Угон в Германию</h3>
                  <p className="text-sm text-muted-foreground">
                    Бежали от депортации. Немцы вывозили молодёжь на работы в Германию. 
                    Лес и партизаны — единственное спасение.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Быт юных партизан
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Обучение</h3>
                  <p className="text-sm text-muted-foreground">
                    В отрядах старались учить детей. Были даже партизанские школы — 
                    занятия между операциями. Арифметика, письмо, история.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Военная подготовка</h3>
                  <p className="text-sm text-muted-foreground">
                    Учили стрелять, метать гранаты, ориентироваться в лесу. 
                    Тренировки — каждый день. Партизан должен быть готов к бою.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Дружба</h3>
                  <p className="text-sm text-muted-foreground">
                    Взрослые партизаны опекали "молодняк". Делились едой, учили выживать. 
                    В отряде — как в большой семье.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Досуг</h3>
                  <p className="text-sm text-muted-foreground">
                    Песни у костра, игры, байки. Дети оставались детьми — даже на войне 
                    находили время для смеха и игр.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Судьбы после войны
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Те, кто выжил, вернулись к мирной жизни. Но война навсегда изменила их.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-sm mb-2">Образование</h3>
                  <p className="text-xs text-muted-foreground">
                    Многие пошли доучиваться. Институты, техникумы. Стали врачами, 
                    учителями, инженерами.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-sm mb-2">Военная карьера</h3>
                  <p className="text-xs text-muted-foreground">
                    Часть осталась в армии. Стали офицерами, генералами. 
                    Партизанский опыт — лучшая школа войны.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-sm mb-2">Память</h3>
                  <p className="text-xs text-muted-foreground">
                    До конца жизни помнили погибших друзей. Встречались на годовщины, 
                    ставили памятники, писали мемуары.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-sm mb-2">Травмы</h3>
                  <p className="text-xs text-muted-foreground">
                    Психологические последствия войны преследовали всю жизнь. 
                    Кошмары, посттравматический стресс.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "Они были детьми. Должны были учиться, играть, мечтать. 
                Но война сделала их взрослыми за один день. Их подвиг — 
                напоминание о цене, которую заплатила страна за свободу."
              </blockquote>
              <div className="text-sm text-muted-foreground">
                — Из выступления на открытии памятника юным партизанам
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={19} />
    </>
  );
};

export default Page19;