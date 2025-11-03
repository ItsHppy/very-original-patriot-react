import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import letters from "@/assets/letters.jpg";
import { useState } from "react";

const Page3 = () => {
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null);

  const letterData = [
    {
      id: 1,
      author: "Рядовой Иван Петров",
      date: "25 июня 1941",
      text: "Дорогая мама! Пишу тебе, может быть, в последний раз. Враг окружил нас, но мы держимся. Не плачь обо мне. Я умру как солдат. Береги сестренку. Твой сын Ваня.",
      fate: "Погиб в бою 27 июня 1941 года"
    },
    {
      id: 2,
      author: "Лейтенант Николай Смирнов",
      date: "23 июня 1941",
      text: "Любимая моя Катя! Не знаю, дойдет ли до тебя это письмо. Бои страшные. Немцев очень много. Но мы не сдадимся. Если что — помни, я всегда любил тебя и нашу дочку.",
      fate: "Пропал без вести в июле 1941 года"
    },
    {
      id: 3,
      author: "Сержант Михаил Волков",
      date: "30 июня 1941",
      text: "Отец! Передай всем в деревне — мы сражаемся до конца. Патронов почти нет, воды нет уже три дня. Но пока живы — будем стрелять. За Родину! За вас!",
      fate: "Выжил, взят в плен. Освобожден в 1945 году"
    }
  ];

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 3 • ПОСЛЕДНИЕ СТРОКИ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Последние письма
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Слова, написанные перед лицом смерти. Прощания с родными. Вечная память героям.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={letters}
                alt="Письма защитников"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-vintage-paper/80 font-serif italic">
                  Письма солдат — последние слова перед вечностью
                </p>
              </div>
            </div>

            {/* Interactive Letters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Письма защитников
              </h2>
              <p className="text-muted-foreground mb-6">
                Нажмите на письмо, чтобы прочитать полный текст и узнать судьбу автора
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {letterData.map((letter) => (
                  <Card
                    key={letter.id}
                    className={`bg-card/60 backdrop-blur-sm border-border p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                      selectedLetter === letter.id ? 'ring-2 ring-primary scale-105' : ''
                    }`}
                    onClick={() => setSelectedLetter(selectedLetter === letter.id ? null : letter.id)}
                  >
                    <div className="mb-3">
                      <h3 className="text-lg font-serif font-semibold text-primary">
                        {letter.author}
                      </h3>
                      <p className="text-sm text-muted-foreground">{letter.date}</p>
                    </div>
                    
                    {selectedLetter === letter.id ? (
                      <div className="space-y-4 animate-fade-in">
                        <blockquote className="text-sm leading-relaxed border-l-4 border-primary pl-4 italic">
                          "{letter.text}"
                        </blockquote>
                        <div className="pt-4 border-t border-border">
                          <p className="text-xs font-semibold text-accent mb-1">Судьба автора:</p>
                          <p className="text-sm text-muted-foreground">{letter.fate}</p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {letter.text}
                      </p>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <Card className="bg-gradient-to-br from-primary/10 to-destructive/10 border-l-4 border-primary p-8">
              <div className="text-center">
                <h3 className="text-2xl font-serif font-bold mb-4 text-accent">
                  Письма с фронта
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  За годы войны было отправлено более 6 миллиардов писем. 
                  Многие из них так и не дошли до адресатов. 
                  Каждое письмо — это надежда, любовь и прощание.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">6 млрд</div>
                    <div className="text-sm text-muted-foreground">писем отправлено</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">2.5 млн</div>
                    <div className="text-sm text-muted-foreground">писем "похоронок"</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={3} />
    </>
  );
};

export default Page3;
