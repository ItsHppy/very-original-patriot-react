import { useState } from "react";
import { BookOpen, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface Chapter {
  id: number;
  title: string;
  description: string;
  startPage: number;
  endPage: number;
  icon: string;
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: "Начало войны",
    description: "22 июня 1941 года. Первые дни войны, оборона Брестской крепости",
    startPage: 1,
    endPage: 10,
    icon: "🔥"
  },
  {
    id: 2,
    title: "Партизанское движение",
    description: "Борьба в тылу врага. Подпольщики и партизаны Беларуси",
    startPage: 11,
    endPage: 40,
    icon: "🌲"
  },
  {
    id: 3,
    title: "Операции и сражения",
    description: "Крупные военные операции на территории Беларуси",
    startPage: 41,
    endPage: 60,
    icon: "⚔️"
  },
  {
    id: 4,
    title: "Освобождение и память",
    description: "Освобождение Беларуси и сохранение памяти о войне",
    startPage: 61,
    endPage: 80,
    icon: "🕊️"
  }
];

interface ChapterSelectorProps {
  children: React.ReactNode;
}

const ChapterSelector = ({ children }: ChapterSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleChapterSelect = (startPage: number) => {
    navigate(`/page/${startPage}`);
    setIsOpen(false);
  };

  const handleReadFromStart = () => {
    navigate('/page/1');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif flex items-center gap-2">
            📖 Выберите главу для чтения
          </DialogTitle>
          <DialogDescription className="text-lg">
            Начните чтение с любой главы или читайте книгу с самого начала
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 mt-6">
          {/* Кнопка "Читать с начала" */}
          <Card className="border-primary/20 hover:border-primary/40 transition-colors cursor-pointer group">
            <CardContent className="p-6">
              <Button
                onClick={handleReadFromStart}
                className="w-full h-auto p-0 bg-transparent hover:bg-transparent text-left"
                variant="ghost"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">📚</div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary group-hover:text-primary/80">
                        Читать с начала
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        Начать чтение книги с первой страницы
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-6 w-6 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </Button>
            </CardContent>
          </Card>

          {/* Главы */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chapters.map((chapter) => (
              <Card 
                key={chapter.id} 
                className="border-border hover:border-primary/40 transition-all cursor-pointer group hover:shadow-lg"
                onClick={() => handleChapterSelect(chapter.startPage)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{chapter.icon}</span>
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {chapter.title}
                      </CardTitle>
                      <div className="text-sm text-muted-foreground mt-1">
                        Страницы {chapter.startPage}-{chapter.endPage}
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm leading-relaxed">
                    {chapter.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            💡 Совет: Вы можете переключаться между главами в любое время используя меню навигации
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChapterSelector;