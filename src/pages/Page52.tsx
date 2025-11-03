import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { MapPin, Users, Calendar, Skull, AlertTriangle } from "lucide-react";

const Page52 = () => {
  const camps = [
    {
      name: "Малый Тростенец",
      victims: "206 500",
      period: "1941-1944",
      type: "Лагерь смерти",
      location: "Минск",
      description: "4-й по величине лагерь смерти в Европе"
    },
    {
      name: "Колдычево", 
      victims: "22 000",
      period: "1942-1944",
      type: "Концентрационный",
      location: "Барановичи",
      description: "Один из самых жестоких лагерей"
    },
    {
      name: "Озаричи",
      victims: "9 000", 
      period: "март 1944",
      type: "Лагерь смерти",
      location: "Гомельская обл.",
      description: "Лагерь для распространения тифа"
    },
    {
      name: "Дрозды",
      victims: "40 000",
      period: "1941-1944", 
      type: "Пересыльный",
      location: "Минск",
      description: "Перевалочный пункт в лагеря смерти"
    }
  ];

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-destructive/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-destructive tracking-wider">
                  СТРАНИЦА 52 • КОНЦЛАГЕРЯ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Фабрики смерти
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Более 260 лагерей смерти и концентрационных лагерей на территории Беларуси
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-6 text-center">
                <Skull className="h-10 w-10 text-destructive mx-auto mb-3" />
                <div className="text-4xl font-bold text-destructive mb-2">260+</div>
                <p className="text-sm text-muted-foreground">лагерей на территории БССР</p>
              </Card>

              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-6 text-center">
                <Users className="h-10 w-10 text-destructive mx-auto mb-3" />
                <div className="text-4xl font-bold text-destructive mb-2">600 000+</div>
                <p className="text-sm text-muted-foreground">погибших во всех лагерях</p>
              </Card>

              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-6 text-center">
                <AlertTriangle className="h-10 w-10 text-destructive mx-auto mb-3" />
                <div className="text-4xl font-bold text-destructive mb-2">4-й</div>
                <p className="text-sm text-muted-foreground">по величине в Европе</p>
              </Card>
            </div>

            {/* Types of Camps */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Типы лагерей
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border-l-4 border-destructive pl-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                    Лагеря смерти
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Предназначены для массового уничтожения людей. Малый Тростенец был одним из крупнейших.
                  </p>
                  <p className="text-sm font-semibold text-destructive">
                    Цель: физическое уничтожение
                  </p>
                </div>
                
                <div className="border-l-4 border-memorial-flame pl-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                    Концентрационные
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Для принудительного труда, пыток и медленного уничтожения узников.
                  </p>
                  <p className="text-sm font-semibold text-memorial-flame">
                    Цель: эксплуатация и террор
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                    Пересыльные
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Временное содержание перед отправкой в лагеря смерти или на принудительные работы.
                  </p>
                  <p className="text-sm font-semibold text-accent">
                    Цель: сортировка узников
                  </p>
                </div>
              </div>
            </Card>

            {/* Major Camps */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Крупнейшие лагеря
              </h2>
              
              <div className="space-y-6">
                {camps.map((camp, index) => (
                  <div key={index} className="border-l-4 border-destructive pl-6 py-4 bg-gradient-to-r from-destructive/5 to-transparent rounded-r-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-2 md:mb-0">
                        {camp.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-block px-3 py-1 bg-destructive/20 text-destructive text-xs font-semibold rounded-full">
                          {camp.type}
                        </span>
                        <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full">
                          {camp.location}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-3">{camp.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-destructive font-semibold">Жертвы:</span>
                        <p className="font-bold">{camp.victims}</p>
                      </div>
                      <div>
                        <span className="text-destructive font-semibold">Период:</span>
                        <p className="font-bold">{camp.period}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* System of Terror */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Система террора
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Концлагеря в Беларуси были частью нацистской системы геноцида. Они создавались для уничтожения еврейского населения, советских военнопленных, партизан и мирных жителей.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="border-l-4 border-destructive pl-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                      Условия содержания
                    </h3>
                    <p>Узники содержались в нечеловеческих условиях: без еды, воды, медицинской помощи. Смертность достигала 80-90% в месяц.</p>
                  </div>
                  
                  <div className="border-l-4 border-destructive pl-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                      Методы уничтожения
                    </h3>
                    <p>Массовые расстрелы, повешения, отравление газом, медицинские эксперименты, избиения до смерти.</p>
                  </div>
                </div>
                
                <p>
                  География лагерей покрывала всю территорию республики. От крупных лагерей смерти до небольших рабочих лагерей - везде царил режим террора и уничтожения.
                </p>
              </div>
            </Card>

            {/* Memorial */}
            <Card className="bg-gradient-to-br from-memorial-flame/10 to-muted/10 border-l-4 border-memorial-flame p-8">
              <div className="text-center space-y-4">
                <MapPin className="h-12 w-12 text-memorial-flame mx-auto" />
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  Места памяти
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  На местах концлагерей сегодня установлены мемориалы. Они напоминают о страшной трагедии и призывают никогда не забывать этих преступлений против человечности.
                </p>
                <p className="text-memorial-flame font-semibold">
                  "Никто не забыт, ничто не забыто"
                </p>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={52} />
    </>
  );
};

export default Page52;