import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, BookOpen } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-serif font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-serif font-semibold mb-4 text-foreground">
            Страница не найдена
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            К сожалению, запрашиваемая страница не существует в нашей книге памяти.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => navigate('/')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Home className="mr-2 h-5 w-5" />
            На главную
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/page/1')}
            className="border-primary text-primary hover:bg-primary/10"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Начать чтение
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
