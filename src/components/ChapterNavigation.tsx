import { useState } from "react";
import { Menu, BookOpenText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

interface Chapter {
  id: number;
  title: string;
  startPage: number;
  endPage: number;
}

const chapters: Chapter[] = [
  { id: 1, title: "Начало войны", startPage: 1, endPage: 10 },
  { id: 2, title: "Партизанское движение", startPage: 11, endPage: 40 },
  { id: 3, title: "Операции и сражения", startPage: 41, endPage: 60 },
  { id: 4, title: "Освобождение и память", startPage: 61, endPage: 80 },
];

interface ChapterNavigationProps {
  currentPage: number;
}

const ChapterNavigation = ({ currentPage }: ChapterNavigationProps) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const getCurrentChapter = () => {
    return chapters.find(
      (chapter) => currentPage >= chapter.startPage && currentPage <= chapter.endPage
    );
  };

  const navigateToPage = (page: number) => {
    navigate(`/page/${page}`);
    setIsOpen(false);
  };

  const generatePageRange = (start: number, end: number) => {
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const currentChapter = getCurrentChapter();

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="hidden sm:flex items-center gap-2 bg-background/95 backdrop-blur-sm border-border hover:bg-muted"
        >
          <Menu className="h-4 w-4" />
          <span className="text-sm">
            {currentChapter ? currentChapter.title : "Навигация"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="center" 
        className="w-64 bg-background/95 backdrop-blur-sm border-border"
      >
        <DropdownMenuLabel className="flex items-center gap-2">
          <BookOpenText className="h-4 w-4" />
          Разделы книги
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {chapters.map((chapter) => (
          <DropdownMenuSub key={chapter.id}>
            <DropdownMenuSubTrigger 
              className={`${
                currentChapter?.id === chapter.id 
                  ? "bg-primary/10 text-primary" 
                  : ""
              }`}
            >
              <div className="flex justify-between items-center w-full">
                <span>{chapter.title}</span>
                <span className="text-xs text-muted-foreground">
                  {chapter.startPage}-{chapter.endPage}
                </span>
              </div>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="bg-background/95 backdrop-blur-sm">
              <DropdownMenuLabel className="text-xs">
                Страницы {chapter.startPage}-{chapter.endPage}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {generatePageRange(chapter.startPage, chapter.endPage).map((page) => (
                <DropdownMenuItem
                  key={page}
                  onClick={() => navigateToPage(page)}
                  className={`cursor-pointer ${
                    currentPage === page 
                      ? "bg-primary/20 text-primary font-medium" 
                      : "hover:bg-muted"
                  }`}
                >
                  Страница {page}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ))}
        
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => navigate("/")}
          className="cursor-pointer hover:bg-muted"
        >
          🏠 На главную
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChapterNavigation;