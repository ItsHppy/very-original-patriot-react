import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ChapterNavigation from "./ChapterNavigation";

interface BookNavigationProps {
  currentPage: number;
  totalPages?: number;
}

const BookNavigation = ({ currentPage, totalPages = 80 }: BookNavigationProps) => {
  const navigate = useNavigate();

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      navigate(`/page/${currentPage - 1}`);
    } else {
      navigate('/');
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      navigate(`/page/${currentPage + 1}`);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <Button
            variant="ghost"
            size="lg"
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
            className="hover:bg-muted transition-colors"
          >
            <ChevronLeft className="mr-2 h-5 w-5" />
            Назад
          </Button>

          <div className="flex items-center gap-4">
            <ChapterNavigation currentPage={currentPage} />
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-lg font-serif">
                {currentPage === 0 ? 'Обложка' : `Страница ${currentPage}`}
                <span className="text-muted-foreground"> / {totalPages}</span>
              </span>
            </div>
          </div>

          <Button
            variant="ghost"
            size="lg"
            onClick={goToNextPage}
            disabled={currentPage >= totalPages}
            className="hover:bg-muted transition-colors"
          >
            Вперёд
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default BookNavigation;
