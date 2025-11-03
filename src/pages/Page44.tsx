import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Shield, Users, Route, FileText } from "lucide-react";

const Page44 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 44 • СОПРОТИВЛЕНИЕ
                </span>
              </div>
              
              <div className="flex justify-center mb-6">
                <Shield className="h-16 w-16 text-primary" />
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Подпольная борьба в гетто
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                История сопротивления и побегов из Минского гетто
              </p>
            </div>

            {/* Main Achievement */}
            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/50 p-8 md:p-12 text-center mb-12">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">10 000</div>
              <p className="text-xl text-muted-foreground">
                евреев бежало из Минского гетто к партизанам
              </p>
            </Card>

            {/* Organization */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Users className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Организация сопротивления
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Несмотря на чудовищные условия и постоянный страх смерти, в Минском гетто действовало подпольное сопротивление. Люди не смирились с участью жертв - они боролись.
                </p>
                
                <p>
                  Подпольщики создавали группы сопротивления, распространяли листовки, саботировали работы на немецких предприятиях, собирали оружие. Но главной целью было спасение людей - организация побегов к партизанам.
                </p>
              </div>
            </Card>

            {/* Leaders */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Руководители подполья
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary">
                    Михаил Гебелев
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Бывший военный, организатор одной из первых подпольных групп. Создал связь с партизанами, через которую десятки людей ушли в лес.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary">
                    Герш Смоляр
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Журналист, руководитель подпольного комитета. Создал систему нелегального вывода людей из гетто. Сам ушел к партизанам в 1942 году.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary">
                    Исай Казинец
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Один из организаторов партизанского отряда имени Кутузова. Через его связи в лес ушли сотни узников гетто.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary">
                    Хаим Гордон
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Руководитель группы подпольщиков, наладивших связь с минским подпольем. Помог организовать побеги целыми семьями.
                  </p>
                </div>
              </div>
            </Card>

            {/* Connection with Partisans */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Связь с партизанами
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Ключевым элементом сопротивления была связь с партизанскими отрядами, действовавшими в лесах вокруг Минска. Эту связь наладили подпольщики минского антифашистского подполья.
                </p>
                
                <p>
                  Через связных передавались сведения о немецких гарнизонах, маршрутах патрулей, планах акций. Но главное - партизаны присылали проводников, которые выводили группы беглецов в лес.
                </p>
                
                <div className="bg-primary/10 border-l-4 border-primary p-6 my-8">
                  <p className="font-semibold text-foreground">
                    Из воспоминаний партизана: "Каждую неделю приходили новые группы из гетто. Измученные, голодные, но живые. Они сразу брались за оружие."
                  </p>
                </div>
              </div>
            </Card>

            {/* Methods of Escape */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Route className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Как организовывали побеги
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Подкопы и туннели
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Под колючей проволокой рыли туннели. Работали по ночам, прячась от охраны. Землю выносили в карманах, высыпали незаметно. Через некоторые туннели прошли десятки людей.
                  </p>
                </div>

                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Через рабочие колонны
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Узники выходили из гетто на работы под охраной. Подпольщики подкупали или обманывали охранников. В суматохе люди убегали в подготовленные укрытия, где их ждали проводники.
                  </p>
                </div>

                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Поддельные документы
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Подпольщики создавали поддельные пропуска, справки, подделывали печати. С такими документами можно было пройти через КПП и покинуть гетто "легально".
                  </p>
                </div>

                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Помощь белорусов
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Белорусские семьи прятали беглецов, давали одежду и еду, указывали дорогу. Без этой помощи большинство побегов были бы невозможны. Риск был смертельный - за укрывательство расстреливали всю семью.
                  </p>
                </div>
              </div>
            </Card>

            {/* Routes to Forest */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Маршруты из гетто в лес
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Путь из гетто до партизанских лагерей занимал от нескольких дней до недели. Шли по ночам, прячась днем. Обходили немецкие гарнизоны и блокпосты.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3">Северное направление</h4>
                    <p className="text-sm">К партизанам в Налибокскую пущу. Около 40-50 км через леса.</p>
                  </div>
                  
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3">Западное направление</h4>
                    <p className="text-sm">К отрядам в Койдановских лесах. Около 30 км.</p>
                  </div>
                  
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3">Восточное направление</h4>
                    <p className="text-sm">К партизанам в районе Борисова. Около 60 км.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Result */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-primary p-8">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">
                Результат сопротивления
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Около 10 000 узников Минского гетто смогли бежать к партизанам. Это был беспрецедентный масштаб спасения для гетто оккупированной Европы.
                </p>
                <p>
                  Многие беглецы стали бойцами партизанских отрядов. Они сражались с оружием в руках, мстили за погибших. Их вклад в освобождение Беларуси неоценим.
                </p>
                <p className="font-semibold text-foreground pt-4">
                  Подпольщики гетто показали, что даже в самых страшных условиях человек способен на сопротивление и борьбу за свободу.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={44} />
    </>
  );
};

export default Page44;