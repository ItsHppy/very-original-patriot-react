import { Shield, Users, Flame, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import partisanZoneImage from "@/assets/partisan-zone.jpg";

const Page26 = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen bg-background pb-32 pt-12">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Сила народного сопротивления
            </h1>
            <p className="text-xl text-muted-foreground">
              Масштабы партизанского движения
            </p>
          </header>

          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={partisanZoneImage} 
              alt="Партизанская зона" 
              className="w-full h-[400px] object-cover"
            />
            <p className="text-center text-sm text-muted-foreground mt-2 italic">
              Партизанская зона - территория под контролем народных мстителей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-10 h-10 mb-3 text-primary" />
                <CardTitle>Численность</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <Badge variant="secondary" className="mb-2">1941 год</Badge>
                    <p className="text-muted-foreground">Несколько тысяч бойцов</p>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">1944 год</Badge>
                    <p className="text-muted-foreground">Более 370 000 партизан</p>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">Подполье</Badge>
                    <p className="text-muted-foreground">Около 70 000 подпольщиков в городах</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-10 h-10 mb-3 text-primary" />
                <CardTitle>Организация</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <Badge variant="secondary" className="mb-2">Бригады</Badge>
                    <p className="text-muted-foreground">199 партизанских бригад</p>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">Отряды</Badge>
                    <p className="text-muted-foreground">Более 1000 отдельных отрядов</p>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">Координация</Badge>
                    <p className="text-muted-foreground">Центральный штаб партизанского движения</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12 border-l-4 border-l-primary">
            <CardHeader>
              <Flame className="w-10 h-10 mb-3 text-primary" />
              <CardTitle>Боевая эффективность</CardTitle>
              <CardDescription>Результаты партизанской борьбы</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">11 000+</div>
                  <p className="text-sm text-muted-foreground">Крушений поездов</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">17 000+</div>
                  <p className="text-sm text-muted-foreground">Мостов подорвано</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">300 000+</div>
                  <p className="text-sm text-muted-foreground">Вражеских солдат</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-12">
            <CardHeader>
              <Target className="w-10 h-10 mb-3 text-primary" />
              <CardTitle>Контролируемые территории</CardTitle>
              <CardDescription>Партизанские зоны к 1943 году</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Badge>60%</Badge>
                    Территория Беларуси
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    К концу 1943 года партизаны контролировали более половины территории республики
                  </p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Badge>20+</Badge>
                    Партизанских зон
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Обширные районы, где действовала советская власть и работали школы, больницы
                  </p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Badge>1000+</Badge>
                    Населённых пунктов
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Более тысячи деревень находились под защитой и контролем партизан
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground mb-8">
            "Белорусские партизаны превратились в грозную силу, которая связывала 
            десятки вражеских дивизий и наносила огромный ущерб коммуникациям противника"
            <footer className="text-sm mt-2 not-italic">— Из доклада германского командования</footer>
          </blockquote>
        </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={26} />
    </>
  );
};

export default Page26;