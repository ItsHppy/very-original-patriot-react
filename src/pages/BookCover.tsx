import { Button } from "@/components/ui/button";
import { BookOpen, Flame } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";
import ChapterSelector from "@/components/ChapterSelector";

const BookCover = () => {

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bookCover})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Flame className="h-24 w-24 text-primary animate-flicker" />
            <div className="absolute inset-0 blur-xl bg-primary/30 animate-pulse" />
          </div>
        </div>

        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-4 text-foreground tracking-wide">
          80 СТРАНИЦ
        </h1>
        <h2 className="font-serif text-4xl md:text-6xl font-semibold mb-6 text-primary">
          ИСТОРИИ ВЕЛИКОЙ ПОБЕДЫ
        </h2>
        
        <div className="max-w-2xl mx-auto mb-12 space-y-4">
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Интерактивная книга памяти
          </p>
          <p className="text-lg text-muted-foreground/80">
            Беларусь в Великой Отечественной войне 1941-1945
          </p>
        </div>

        <ChapterSelector>
          <Button
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-serif shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Открыть книгу
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-accent/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </Button>
        </ChapterSelector>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/50"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default BookCover;
