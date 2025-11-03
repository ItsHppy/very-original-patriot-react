import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import WebMap from "@/components/WebMap";
import { MapPin, Users, TrendingUp } from "lucide-react";
import { useState } from "react";

const Page11 = () => {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const zones = [
    { 
      id: "vitebsk", 
      name: "Витебская область", 
      partisans: 45000, 
      area: "38%",
      coordinates: [55.1912, 30.1956] as [number, number],
      description: "Освобождение Полоцка, операции на железных дорогах Витебск-Орша"
    },
    { 
      id: "minsk", 
      name: "Минская область", 
      partisans: 52000, 
      area: "42%",
      coordinates: [53.9006, 27.5766] as [number, number],
      description: "Операция «Рельсовая война», освобождение районных центров"
    },
    { 
      id: "gomel", 
      name: "Гомельская область", 
      partisans: 38000, 
      area: "35%",
      coordinates: [52.4345, 30.9754] as [number, number],
      description: "Контроль над Припятскими болотами, диверсии на коммуникациях"
    },
    { 
      id: "brest", 
      name: "Брестская область", 
      partisans: 28000, 
      area: "30%",
      coordinates: [52.1, 23.7] as [number, number],
      description: "Операции в Беловежской пуще, контроль западных границ"
    },
    { 
      id: "grodno", 
      name: "Гродненская область", 
      partisans: 22000, 
      area: "25%",
      coordinates: [53.6884, 23.8264] as [number, number],
      description: "Взаимодействие с польскими партизанами, западные рубежи"
    },
    { 
      id: "mogilev", 
      name: "Могилевская область", 
      partisans: 35000, 
      area: "33%",
      coordinates: [53.9168, 30.3449] as [number, number],
      description: "Операции на Днепре, освобождение восточных районов"
    },
  ];

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 11 • ПАРТИЗАНСКАЯ КАРТА
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Партизанские зоны
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Интерактивная карта партизанского движения в Беларуси 1941-1944
              </p>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground">Интерактивная карта партизанских зон</h3>
                <p className="text-sm text-muted-foreground mt-2">Кликните на маркеры для получения подробной информации</p>
              </div>

              <WebMap
                zones={zones}
                selectedZone={selectedZone}
                onZoneSelect={setSelectedZone}
                className="border border-border"
              />
            </Card>

            {selectedZone && (
              <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12 animate-fade-in">
                {zones
                  .filter((z) => z.id === selectedZone)
                  .map((zone) => (
                    <div key={zone.id}>
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-serif font-bold text-accent">
                          {zone.name}
                        </h2>
                        <button
                          onClick={() => setSelectedZone(null)}
                          className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 transition-colors
                                   flex items-center justify-center text-muted-foreground hover:text-foreground"
                        >
                          ✕
                        </button>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg 
                                      border border-primary/20 hover:border-primary/30 transition-colors">
                          <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                          <div className="text-3xl font-bold text-foreground mb-1">
                            {zone.partisans.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">партизан</div>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg 
                                      border border-accent/20 hover:border-accent/30 transition-colors">
                          <TrendingUp className="w-12 h-12 text-accent mx-auto mb-3" />
                          <div className="text-3xl font-bold text-foreground mb-1">
                            {zone.area}
                          </div>
                          <div className="text-sm text-muted-foreground">территории под контролем</div>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-honor-gold/10 to-honor-gold/5 rounded-lg 
                                      border border-honor-gold/20 hover:border-honor-gold/30 transition-colors">
                          <MapPin className="w-12 h-12 text-honor-gold mx-auto mb-3" />
                          <div className="text-3xl font-bold text-foreground mb-1">
                            {Math.floor(zone.partisans / 300)}+
                          </div>
                          <div className="text-sm text-muted-foreground">отрядов</div>
                        </div>
                      </div>

                      {/* Дополнительная информация по регионам */}
                      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">Ключевые операции:</h3>
                        <div className="text-sm text-muted-foreground">
                          {zone.description}
                        </div>
                      </div>
                    </div>
                  ))}
              </Card>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/60 backdrop-blur-sm border-border p-8">
                <h3 className="text-2xl font-serif font-bold mb-6 text-accent">
                  Рост движения
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">1941 год</span>
                    <div className="flex-1 mx-4 bg-muted rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full" style={{ width: "2%" }}></div>
                    </div>
                    <span className="font-semibold text-foreground">2,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">1942 год</span>
                    <div className="flex-1 mx-4 bg-muted rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                    <span className="font-semibold text-foreground">56,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">1943 год</span>
                    <div className="flex-1 mx-4 bg-muted rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                    <span className="font-semibold text-foreground">153,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">1944 год</span>
                    <div className="flex-1 mx-4 bg-muted rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                    <span className="font-semibold text-foreground">374,000</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/60 backdrop-blur-sm border-border p-8">
                <h3 className="text-2xl font-serif font-bold mb-6 text-accent">
                  Общая статистика
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="text-2xl font-bold text-foreground">374,000</div>
                    <div className="text-sm text-muted-foreground">партизан к концу войны</div>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <div className="text-2xl font-bold text-foreground">1,255</div>
                    <div className="text-sm text-muted-foreground">партизанских отрядов</div>
                  </div>
                  <div className="border-l-4 border-honor-gold pl-4">
                    <div className="text-2xl font-bold text-foreground">59%</div>
                    <div className="text-sm text-muted-foreground">территории Беларуси под контролем</div>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="text-2xl font-bold text-foreground">11,128</div>
                    <div className="text-sm text-muted-foreground">сбитых и угнанных поездов</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={11} />
    </>
  );
};

export default Page11;
