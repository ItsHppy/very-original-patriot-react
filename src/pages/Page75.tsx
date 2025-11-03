import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Flag } from "lucide-react";
import victory from "@/assets/victory.jpg";

const Page75 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-red-400 tracking-wider">
                  СТРАНИЦА 75 • ОСВОБОЖДЕНИЕ
                </span>
              </div>
              
              <div className="flex justify-center mb-6">
                <Flag className="h-16 w-16 text-red-400" />
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Операция «Багратион»
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Освобождение Беларуси стало одной из крупнейших побед Красной Армии
              </p>
            </div>

            {/* Victory Image */}
            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={victory}
                alt="День Победы"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-lg text-vintage-paper font-serif">
                  Знамя Победы над освобождённой землёй
                </p>
              </div>
            </div>

            {/* Operation Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/50 p-6 text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">23.06</div>
                <p className="text-sm text-gray-300">начало операции 1944</p>
              </Card>

              <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/50 p-6 text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">3 июля</div>
                <p className="text-sm text-gray-300">освобождён Минск</p>
              </Card>

              <Card className="bg-gradient-to-br from-honor-gold/20 to-honor-gold/5 border-honor-gold/50 p-6 text-center">
                <div className="text-4xl font-bold text-honor-gold mb-2">29.08</div>
                <p className="text-sm text-gray-300">полное освобождение</p>
              </Card>

              <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/50 p-6 text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">600 км</div>
                <p className="text-sm text-gray-300">продвижение на запад</p>
              </Card>
            </div>

            {/* Operation Timeline */}
            <Card className="bg-gray-900 border-gray-700 p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-red-400">
                Хронология освобождения
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="text-sm text-red-400 font-semibold mb-2">23 июня 1944</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Начало операции
                  </h3>
                  <p className="text-gray-300">
                    Ровно через три года после начала войны началась операция "Багратион". Советские войска перешли в наступление на всём протяжении белорусского направления. В операции участвовало 2.3 миллиона солдат и офицеров.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6 py-2">
                  <div className="text-sm text-red-400 font-semibold mb-2">27 июня</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Прорыв обороны
                  </h3>
                  <p className="text-gray-300">
                    Советские войска прорвали мощную оборону противника. Была окружена крупная группировка немецких войск под Витебском. Начались стремительные танковые рейды в тылы врага.
                  </p>
                </div>

                <div className="border-l-4 border-honor-gold pl-6 py-2">
                  <div className="text-sm text-honor-gold font-semibold mb-2">3 июля</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Освобождение Минска
                  </h3>
                  <p className="text-gray-300">
                    Столица Беларуси была освобождена войсками 1-го, 2-го и 3-го Белорусских фронтов. Более 100 тысяч немецких солдат попали в окружение восточнее города. День 3 июля стал национальным праздником - Днём Независимости Республики Беларусь.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="text-sm text-red-400 font-semibold mb-2">28 июля</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Освобождение Бреста
                  </h3>
                  <p className="text-gray-300">
                    Город-герой Брест, где началась война, был освобождён. Символично, что освобождение пришло именно через героическую крепость, защитники которой первыми приняли удар врага в 1941 году.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6 py-2">
                  <div className="text-sm text-red-400 font-semibold mb-2">29 августа</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Полное освобождение
                  </h3>
                  <p className="text-gray-300">
                    Последние немецкие части были выбиты с территории Беларуси. Операция "Багратион" завершилась полным успехом. Было уничтожено 28 дивизий противника, ещё 17 потеряли более 50% личного состава.
                  </p>
                </div>
              </div>
            </Card>

            {/* Results */}
            <Card className="bg-gray-900 border-gray-700 p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-red-400">
                Итоги операции «Багратион»
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-red-400">
                    Военные результаты
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Разгромлена группа армий "Центр"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Освобождена вся территория Беларуси</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Красная Армия вышла к границам Польши</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Потери противника - более 400 тысяч человек</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-red-400">
                    Историческое значение
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Одна из крупнейших операций Второй мировой</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Образец военного искусства</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Приблизила окончание войны на год</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Открыла путь к освобождению Европы</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Memory */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-primary p-8">
              <blockquote className="text-xl md:text-2xl font-serif italic text-foreground mb-4">
                "Операция 'Багратион' стала триумфом советского военного искусства и символом несокрушимой воли народа к победе"
              </blockquote>
              <p className="text-gray-300 leading-relaxed">
                Освобождение Беларуси стало переломным моментом в войне. Народ, переживший страшные годы оккупации и геноцида, встретил своих освободителей со слезами радости. Начался долгий путь возрождения разрушенной республики. Память о героях-освободителях навечно сохранена в сердцах белорусского народа.
              </p>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={75} />
    </>
  );
};

export default Page75;
