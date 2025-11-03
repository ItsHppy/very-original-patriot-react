import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { MapPin, Users, Calendar, Skull, Thermometer, Shield } from "lucide-react";

const Page54 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-destructive/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-destructive tracking-wider">
                  СТРАНИЦА 54 • ОЗАРИЧИ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Лагерь заражения
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Циничный план нацистов по распространению эпидемий среди советских войск
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-6 text-center">
                <Users className="h-10 w-10 text-destructive mx-auto mb-3" />
                <div className="text-4xl font-bold text-destructive mb-2">50 000</div>
                <p className="text-sm text-muted-foreground">человек в трех лагерях</p>
              </Card>

              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-6 text-center">
                <Skull className="h-10 w-10 text-destructive mx-auto mb-3" />
                <div className="text-4xl font-bold text-destructive mb-2">9 000</div>
                <p className="text-sm text-muted-foreground">погибших за 7 дней</p>
              </Card>

              <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-destructive/50 p-6 text-center">
                <Calendar className="h-10 w-10 text-destructive mx-auto mb-3" />
                <div className="text-4xl font-bold text-destructive mb-2">12-19</div>
                <p className="text-sm text-muted-foreground">марта 1944 года</p>
              </Card>
            </div>

            {/* The Plan */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Дьявольский план
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  В марте 1944 года, отступая под натиском Красной Армии, немцы осуществили один из самых циничных планов войны. Они создали три концентрационных лагеря в районе деревень Озаричи, Дерть и Подосинник в Гомельской области.
                </p>
                
                <div className="bg-destructive/5 border-l-4 border-destructive p-6 my-6">
                  <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">
                    Цель операции
                  </h3>
                  <p className="mb-4">
                    Заразить советские войска тифом и другими инфекционными болезнями. Немцы рассчитывали, что больные люди станут биологическим оружием против наступающей армии.
                  </p>
                  <p>
                    Это была попытка превратить мирных жителей в орудие массового поражения.
                  </p>
                </div>
              </div>
            </Card>

            {/* Conditions */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Нечеловеческие условия
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Под открытым небом
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    50 тысяч человек - детей, женщин, стариков - согнали в чистое поле без крыши над головой. Март 1944 года был особенно холодным.
                  </p>
                </div>

                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Без еды и воды
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Никакого питания. Люди пили из луж, ели траву и кору деревьев. Дети умирали от голода на глазах у матерей.
                  </p>
                </div>

                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Болезни и смерть
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Среди заключенных специально распространялись больные тифом. Инфекции косили людей ежечасно. Тела лежали повсюду.
                  </p>
                </div>

                <div className="border-l-4 border-memorial-flame pl-6 py-2">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-memorial-flame">
                    Охрана
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Лагеря охранялись немецкими солдатами и полицаями. За попытку побега - расстрел. Охранники боялись приближаться из-за эпидемий.
                  </p>
                </div>
              </div>
            </Card>

            {/* Three Camps */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Три лагеря смерти
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-destructive/10 to-muted/5 border border-destructive/30 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">
                    Озаричи
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Самый большой лагерь. Около 20 000 человек на болотистой местности.
                  </p>
                  <div className="text-sm">
                    <p><span className="font-semibold text-destructive">Жертвы:</span> ~4 000</p>
                    <p><span className="font-semibold text-destructive">Особенность:</span> Центральный лагерь</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-destructive/10 to-muted/5 border border-destructive/30 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">
                    Дерть
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Около 15 000 узников, в основном женщины и дети.
                  </p>
                  <div className="text-sm">
                    <p><span className="font-semibold text-destructive">Жертвы:</span> ~3 000</p>
                    <p><span className="font-semibold text-destructive">Особенность:</span> Много детей</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-destructive/10 to-muted/5 border border-destructive/30 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">
                    Подосинник
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Около 15 000 человек, преимущественно из Гомельской области.
                  </p>
                  <div className="text-sm">
                    <p><span className="font-semibold text-destructive">Жертвы:</span> ~2 000</p>
                    <p><span className="font-semibold text-destructive">Особенность:</span> Местные жители</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Liberation */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Освобождение
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  19 марта 1944 года части 65-й армии 1-го Белорусского фронта освободили лагеря. Солдаты были потрясены увиденным.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="border-l-4 border-memorial-flame pl-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                      Состояние узников
                    </h3>
                    <p>Живые скелеты, покрытые вшами и язвами. Многие не могли встать. Дети весили как младенцы.</p>
                  </div>
                  
                  <div className="border-l-4 border-memorial-flame pl-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                      Медицинская помощь
                    </h3>
                    <p>Срочно развернули госпитали. Боролись с эпидемиями. Спасли тысячи жизней, но многих было уже не спасти.</p>
                  </div>
                </div>
                
                <div className="bg-accent/5 border-l-4 border-accent p-6 italic">
                  <p className="mb-4">
                    "Такой картины ада я не видел за всю войну. Немцы превратили людей в ходячие трупы."
                  </p>
                  <p className="text-sm text-accent font-semibold">
                    - Из воспоминаний командира освободившей части
                  </p>
                </div>
              </div>
            </Card>

            {/* Timeline and Memorial */}
            <Card className="bg-gradient-to-br from-memorial-flame/10 to-muted/10 border-l-4 border-memorial-flame p-8">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">
                Хронология трагедии
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="text-memorial-flame font-bold whitespace-nowrap">12 марта 1944</div>
                  <div className="text-muted-foreground">Начало сгона населения в лагеря</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-memorial-flame font-bold whitespace-nowrap">13-18 марта</div>
                  <div className="text-muted-foreground">Массовая смертность от голода, холода и болезней</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-memorial-flame font-bold whitespace-nowrap">19 марта 1944</div>
                  <div className="text-muted-foreground">Освобождение лагерей Красной Армией</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-memorial-flame font-bold whitespace-nowrap">1969</div>
                  <div className="text-muted-foreground">Открытие мемориального комплекса</div>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <Shield className="h-12 w-12 text-memorial-flame mx-auto" />
                <p className="text-memorial-flame font-semibold">
                  "Озаричская трагедия - символ нацистского геноцида"
                </p>
                <p className="text-muted-foreground">
                  Сегодня на месте лагерей установлен мемориал, напоминающий о страшных днях марта 1944 года
                </p>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={54} />
    </>
  );
};

export default Page54;