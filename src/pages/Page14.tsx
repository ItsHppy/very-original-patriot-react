import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import reconnaissance from "@/assets/partisan-reconnaissance.jpg";
import { Eye, MapPin, FileText, Award } from "lucide-react";
import { useState } from "react";

const Page14 = () => {
  const [selectedScout, setSelectedScout] = useState<string | null>(null);

  const scouts = [
    {
      id: "1",
      name: "Елена Колесова",
      role: "Разведчица",
      achievement: "Добыла планы немецкого наступления под Оршей",
      details: "Работала переводчицей в немецком штабе. За 8 месяцев передала 170 донесений партизанам."
    },
    {
      id: "2",
      name: "Константин Заслонов",
      role: "Диверсант-разведчик",
      achievement: "Подорвал 93 эшелона на ж/д узле Орша",
      details: "Работал начальником депо. Организовал саботаж изнутри, затем ушёл в партизаны."
    },
    {
      id: "3",
      name: "Надежда Троян",
      role: "Подпольщица",
      achievement: "Спасла из плена 128 советских военнопленных",
      details: "Работала медсестрой в немецком госпитале. Передавала разведданные и помогала побегам."
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
                  СТРАНИЦА 14 • РАЗВЕДКА
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Партизанская разведка
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Глаза и уши в тылу врага — информация, спасающая жизни
              </p>
            </div>

            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={reconnaissance}
                alt="Партизанский разведчик"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-vintage-paper/80 font-serif italic">
                  Разведчик наблюдает за движением немецкой колонны
                </p>
              </div>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent text-center">
                Что добывали разведчики
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Военные объекты</h3>
                    <p className="text-sm text-muted-foreground">
                      Расположение гарнизонов, складов, штабов. Количество войск, 
                      вооружение, режим охраны.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                  <Eye className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Движение войск</h3>
                    <p className="text-sm text-muted-foreground">
                      Переброски частей, маршруты колонн, график поездов с техникой и боеприпасами.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                  <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Документы</h3>
                    <p className="text-sm text-muted-foreground">
                      Приказы, карты, шифровки. Самое ценное — планы наступлений и отступлений.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                  <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Настроения</h3>
                    <p className="text-sm text-muted-foreground">
                      Моральное состояние немецких войск, отношение населения к оккупантам.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Методы разведки
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h3 className="font-semibold text-foreground mb-2">Наблюдение</h3>
                  <p className="text-sm text-muted-foreground">
                    Разведчики сутками сидели в укрытиях у дорог и ж/д путей, считая технику, 
                    записывая номера частей на вагонах.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-accent">
                  <h3 className="font-semibold text-foreground mb-2">Проникновение</h3>
                  <p className="text-sm text-muted-foreground">
                    Под видом местных жителей разведчики проникали в города, устраивались на 
                    работу к немцам, собирали информацию изнутри.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h3 className="font-semibold text-foreground mb-2">Агентурная сеть</h3>
                  <p className="text-sm text-muted-foreground">
                    Сеть информаторов среди населения. Крестьяне, рабочие, даже полицаи — 
                    многие тайно сотрудничали с партизанами.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-accent">
                  <h3 className="font-semibold text-foreground mb-2">Захват "языков"</h3>
                  <p className="text-sm text-muted-foreground">
                    Пленение немецких солдат и офицеров для допроса. Особенно ценились связисты 
                    и штабные офицеры.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Легендарные разведчики
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {scouts.map((scout) => (
                  <button
                    key={scout.id}
                    onClick={() => setSelectedScout(
                      selectedScout === scout.id ? null : scout.id
                    )}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedScout === scout.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 bg-card/60"
                    }`}
                  >
                    <h3 className="font-semibold mb-1 text-foreground">{scout.name}</h3>
                    <div className="text-xs text-primary mb-2">{scout.role}</div>
                    <div className="text-xs text-muted-foreground italic">
                      {scout.achievement}
                    </div>
                  </button>
                ))}
              </div>

              {selectedScout && (
                <div className="p-6 bg-accent/10 rounded-lg border-l-4 border-accent animate-fade-in">
                  <p className="text-sm text-muted-foreground">
                    {scouts.find(s => s.id === selectedScout)?.details}
                  </p>
                </div>
              )}
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Пример донесения
              </h2>
              
              <div className="p-6 bg-primary/5 rounded-lg font-serif">
                <div className="text-xs text-muted-foreground mb-4">
                  Разведдонесение №47 от 12 августа 1943 г.
                </div>
                <p className="text-sm text-foreground mb-4">
                  "На станции Орша замечено сосредоточение бронетехники. Подсчитано: 
                  47 танков, 28 бронетранспортёров, 15 самоходных орудий. Техника прибывает 
                  с запада, движется на восток. Предположительно — переброска к фронту.
                </p>
                <p className="text-sm text-foreground mb-4">
                  На платформах также зафиксированы цистерны с горючим (около 200 шт.) 
                  и вагоны с боеприпасами. Эшелон готов к отправке, ожидается в ночь на 13 августа.
                </p>
                <p className="text-sm text-foreground">
                  Прошу разрешения на диверсию. Группа готова."
                </p>
                <div className="text-xs text-muted-foreground mt-4">
                  — Командир разведгруппы Петров
                </div>
              </div>

              <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong>Результат:</strong> На основе этого донесения был организован налёт. 
                  Эшелон подорван, уничтожено 23 танка и все боеприпасы.
                </p>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                Статистика разведки
              </h2>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-foreground mb-1">15,000+</div>
                  <div className="text-xs text-muted-foreground">разведдонесений в Москву</div>
                </div>

                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-foreground mb-1">3,500</div>
                  <div className="text-xs text-muted-foreground">захваченных документов</div>
                </div>

                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-foreground mb-1">2,000+</div>
                  <div className="text-xs text-muted-foreground">пленных для допроса</div>
                </div>

                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-foreground mb-1">85%</div>
                  <div className="text-xs text-muted-foreground">точность данных</div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4">
                "Партизанская разведка давала командованию Красной Армии бесценную информацию 
                о тыле врага. Многие успешные операции были проведены благодаря данным, 
                добытым разведчиками-партизанами."
              </blockquote>
              <div className="text-sm text-muted-foreground">
                — Из донесения Центрального штаба партизанского движения
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={14} />
    </>
  );
};

export default Page14;