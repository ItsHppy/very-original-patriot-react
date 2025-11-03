import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import partisanCamp from "@/assets/partisan-camp.jpg";
import { Sun, Moon, Flame, Shield, Eye } from "lucide-react";
import { useState } from "react";

const Page15 = () => {
  const [storyStep, setStoryStep] = useState(0);
  const [choices, setChoices] = useState<string[]>([]);

  const story = [
    {
      time: "05:00",
      icon: Moon,
      text: "Вы просыпаетесь в землянке. Холодно. Товарищи еще спят. Что делаете?",
      options: [
        { text: "Разжечь костер, согреть воду", next: 1, choice: "костер" },
        { text: "Проверить оружие", next: 2, choice: "оружие" },
      ],
    },
    {
      time: "06:00",
      icon: Flame,
      text: "Костер разгорается. Запах дыма может привлечь внимание. Разведчик сообщает: немецкий патруль в 2 км.",
      options: [
        { text: "Потушить костер, уходить", next: 3, choice: "отход" },
        { text: "Оставить дозор, продолжить", next: 4, choice: "дозор" },
      ],
    },
    {
      time: "06:00",
      icon: Shield,
      text: "Винтовка чистая, патронов достаточно. Командир дает задание: разведка железной дороги.",
      options: [
        { text: "Идти одному — тише", next: 5, choice: "один" },
        { text: "Взять напарника", next: 6, choice: "напарник" },
      ],
    },
    {
      time: "07:00",
      icon: Eye,
      text: "Отряд быстро собирается и уходит в глубь леса. Через час патруль проходит мимо старого лагеря.",
      options: [
        { text: "Продолжить", next: 7, choice: "безопасность" },
      ],
    },
    {
      time: "08:00",
      icon: Shield,
      text: "Дозорный замечает патруль вовремя. Отряд успевает приготовиться к обороне. Враг проходит мимо.",
      options: [
        { text: "Продолжить", next: 7, choice: "удача" },
      ],
    },
    {
      time: "09:00",
      icon: Eye,
      text: "В одиночку вы двигаетесь быстро. Выходите к железной дороге. Видите колонну из 12 грузовиков с войсками.",
      options: [
        { text: "Продолжить", next: 7, choice: "разведка_одиночка" },
      ],
    },
    {
      time: "09:30",
      icon: Eye,
      text: "Вдвоем вы прикрываете друг друга. Напарник замечает мину-ловушку у дороги. Обходите ее.",
      options: [
        { text: "Продолжить", next: 7, choice: "разведка_пара" },
      ],
    },
    {
      time: "12:00",
      icon: Sun,
      text: "День прожит. Ваши решения были правильными. Отряд в безопасности, информация получена.",
      options: [],
    },
  ];

  const currentScene = story[storyStep];

  const handleChoice = (optionIndex: number) => {
    const option = currentScene.options[optionIndex];
    setChoices([...choices, option.choice]);
    setStoryStep(option.next);
  };

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 15 • ИММЕРСИВНАЯ ИСТОРИЯ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                День из жизни партизана
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Интерактивная история с выбором. Ваши решения влияют на события.
              </p>
            </div>

            <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={partisanCamp}
                alt="Партизанский лагерь"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
            </div>

            <Card className="bg-card/90 backdrop-blur-sm border-border p-8 md:p-12 mb-8">
              <div className="flex items-center gap-4 mb-8">
                {currentScene.icon && (
                  <currentScene.icon className="w-12 h-12 text-primary" />
                )}
                <div>
                  <div className="text-sm text-primary font-semibold mb-1">
                    {currentScene.time}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Шаг {storyStep + 1} из {story.length}
                  </div>
                </div>
              </div>

              <p className="text-xl text-foreground mb-8 leading-relaxed">
                {currentScene.text}
              </p>

              <div className="space-y-4">
                {currentScene.options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className="w-full text-left justify-start h-auto py-4 px-6 hover:bg-primary/10"
                    onClick={() => handleChoice(index)}
                  >
                    <span className="mr-3 text-primary font-bold">{index + 1}.</span>
                    {option.text}
                  </Button>
                ))}
              </div>

              {storyStep === story.length - 1 && (
                <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                  <h3 className="text-xl font-serif font-bold mb-4 text-accent">
                    Ваш путь:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {choices.map((choice, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                      >
                        {choice}
                      </span>
                    ))}
                  </div>
                  <Button
                    className="mt-6"
                    onClick={() => {
                      setStoryStep(0);
                      setChoices([]);
                    }}
                  >
                    Пройти снова
                  </Button>
                </div>
              )}
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border-border p-8">
              <h3 className="text-2xl font-serif font-bold mb-6 text-accent">
                Реальность партизанской жизни
              </h3>
              <p className="text-muted-foreground mb-4">
                Каждый день партизаны принимали решения, от которых зависела жизнь 
                всего отряда. Малейшая ошибка могла привести к гибели товарищей.
              </p>
              <p className="text-muted-foreground">
                Жизнь в лесу была суровой: холод, голод, постоянная опасность. 
                Но партизаны держались, зная, что их борьба приближает победу.
              </p>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={15} />
    </>
  );
};

export default Page15;
