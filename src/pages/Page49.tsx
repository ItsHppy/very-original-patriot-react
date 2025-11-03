import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Users, Award } from "lucide-react";

const Page49 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 49 • ГЕРОИ-СПАСИТЕЛИ
                </span>
              </div>
              
              <div className="flex justify-center mb-6">
                <Heart className="h-16 w-16 text-primary animate-pulse" />
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Праведники народов мира
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Белорусы, спасавшие евреев, рискуя собственной жизнью
              </p>
            </div>

            {/* Main Statistics */}
            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/50 p-8 md:p-12 text-center mb-12">
              <div className="flex justify-center mb-4">
                <Award className="h-16 w-16 text-primary" />
              </div>
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">641</div>
              <p className="text-xl text-muted-foreground">
                белорус удостоен звания "Праведник народов мира"
              </p>
            </Card>

            {/* What is Righteous */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Кто такие Праведники
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  "Праведник народов мира" — почётное звание, которое с 1953 года присваивается израильским институтом памяти жертв Холокоста Яд ва-Шем.
                </p>
                
                <p>
                  Это звание получают неевреи, которые во время Второй мировой войны рисковали своей жизнью, спасая евреев от уничтожения нацистами.
                </p>
                
                <div className="bg-primary/10 border-l-4 border-primary p-6 my-8">
                  <h3 className="font-semibold text-foreground mb-3">Критерии для присвоения звания:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Активное участие в спасении евреев</li>
                    <li>• Риск для собственной жизни и безопасности</li>
                    <li>• Бескорыстность — отсутствие финансовой выгоды</li>
                    <li>• Подтверждённые свидетельства и документы</li>
                  </ul>
                </div>

                <p>
                  Из более чем 28 000 Праведников со всего мира, 641 — белорусы. Это люди, которые не побоялись противостоять нацистскому террору и сохранили человечность в нечеловеческих условиях.
                </p>
              </div>
            </Card>

            {/* The Risk */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Риск — расстрел всей семьи
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Нацистский приказ был безжалостен: за укрывательство евреев — смертная казнь. Не только самого укрывателя, но и всей его семьи, включая детей.
                </p>
                
                <p>
                  Деревни, где обнаруживали спрятанных евреев, могли сжечь целиком в отместку. Соседи под пытками могли выдать укрывателей. Доносчиков поощряли наградами.
                </p>
                
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 my-8">
                  <p className="font-semibold text-foreground">
                    Пример: В деревне Долгиново семья Казловских прятала 8 евреев в подвале. Кто-то донёс. Вся семья — отец, мать и трое детей — были расстреляны. Евреи тоже погибли.
                  </p>
                </div>

                <p>
                  Зная это, белорусы всё равно протягивали руку помощи. Прятали в подвалах, сараях, лесных землянках. Делились последним куском хлеба. Рисковали всем.
                </p>
              </div>
            </Card>

            {/* Stories of Rescue */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Users className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Истории спасения
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary">
                    Семья Кондрацких — 3 года в подвале
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Семья Кондрацких из деревни Раков прятала семью Рабиновичей — 4 человека — в погребе под домом. Три года, с 1941 по 1944.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Еда передавалась тайком. Дети Кондрацких знали, что в подвале "гости", но ни слова никому. Когда пришли немцы с обыском, Рабиновичей спрятали в тайнике под полом. Все выжили.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary">
                    Мария Василевская — поддельные документы
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Мария работала секретарём в сельсовете. Она подделывала документы, выдавая евреям паспорта с белорусскими именами.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Благодаря ей десятки людей получили новые личности и спаслись. Рисковала каждый день — за подделку документов полагался расстрел. После войны спасённые разыскали её и добились присвоения звания Праведника.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary">
                    Антон Шмид — помощь в побеге
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Антон Шмид из деревни Заболотье помогал евреям бежать из гетто. Он указывал безопасные маршруты в лес, снабжал едой, предупреждал о немецких патрулях.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Однажды немцы заметили подозрительную активность. Антона арестовали и допросили, но он не выдал ни одного человека. Был расстрелян. Спасённые им люди после войны рассказали его историю.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary">
                    Анна Борисовец — приютила детей
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Анна нашла в лесу троих еврейских детей, родители которых были убиты. Она забрала их к себе, выдав за своих племянников.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Два года прятала их на глазах у немцев. Соседи подозревали, но молчали. Все дети выжили. После войны уехали в Израиль, но переписывались с Анной до конца её жизни.
                  </p>
                </div>
              </div>
            </Card>

            {/* Yad Vashem Connection */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Связь с музеем Яд ва-Шем
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Музей Яд ва-Шем в Иерусалиме — главный мемориал памяти жертв Холокоста. Здесь хранятся имена всех Праведников народов мира.
                </p>
                
                <p>
                  В "Саду Праведников" рядом с музеем высажены деревья в честь спасителей. Каждое дерево носит имя Праведника. Там есть и белорусские имена.
                </p>
                
                <p>
                  Праведникам и их семьям вручается медаль и почётная грамота. Имена заносятся в Книгу Почёта. Это признание их мужества и человечности на века.
                </p>
              </div>
            </Card>

            {/* Why They Did It */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Почему они это делали?
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Многие спасённые спрашивали Праведников: "Почему вы рисковали своей жизнью ради нас?" Ответы были простыми и честными:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <p className="text-sm italic text-foreground">
                      "Это были люди. Просто люди. Я не мог смотреть, как их убивают."
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <p className="text-sm italic text-foreground">
                      "Мы были крещёными. Наша вера учит помогать ближнему. Они — наши ближние."
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <p className="text-sm italic text-foreground">
                      "Я думала о своих детях. Что бы я чувствовала, если бы кто-то не помог им?"
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <p className="text-sm italic text-foreground">
                      "Это было правильно. Просто правильно. Иначе я не смог бы жить с собой."
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-foreground">
                  Они не считали себя героями. Они просто остались людьми, когда весь мир сошёл с ума.
                </p>
              </div>
            </Card>

            {/* Conclusion */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif italic text-foreground mb-4">
                "Спасший одну жизнь — спасает весь мир"
              </blockquote>
              <p className="text-right text-muted-foreground mb-6">
                — Талмуд, надпись на медали Праведника
              </p>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  641 белорус — Праведник народов мира. Но реальное число спасителей гораздо больше. Многие истории не были задокументированы, многие герои погибли, и некому было рассказать об их подвиге.
                </p>
                <p className="font-semibold text-foreground">
                  Эти люди — свет во тьме. Они доказали, что даже в самые страшные времена человечность побеждает.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={49} />
    </>
  );
};

export default Page49;