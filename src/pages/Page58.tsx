import React, { useState } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Users, FileText, Megaphone, Factory, TrendingDown } from "lucide-react";
import '../styles/Page58.css';

const Page58 = () => {
  const [selectedOfficial, setSelectedOfficial] = useState<number>(0);
  const [selectedLaw, setSelectedLaw] = useState<number | null>(null);

  const administrativeStructure = [
    {
      level: "Генеральный комиссар",
      name: "Вильгельм Кубе",
      period: "1941-1943",
      territory: "Генеральный округ Беларуси",
      description: "Высший представитель гражданской администрации. Фанатичный нацист, организатор геноцида.",
      powers: [
        "Законодательная власть на территории",
        "Контроль всех административных органов", 
        "Организация экономической эксплуатации",
        "Проведение «расовой политики»"
      ],
      keyDecisions: [
        "Создание минского гетто",
        "Организация массовых расстрелов", 
        "Угон населения в Германию"
      ],
      fate: "Убит в 1943 году белорусскими подпольщиками"
    },
    {
      level: "Гебитскомиссар",
      name: "Карл Ценнер (Минская область)",
      period: "1941-1944",
      territory: "Минский гебитскомиссариат",
      description: "Региональный администратор, отвечал за проведение нацистской политики в области.",
      powers: [
        "Управление районными комиссариатами",
        "Контроль полиции безопасности",
        "Организация принудительного труда",
        "Конфискация продовольствия"
      ],
      keyDecisions: [
        "Создание трудовых лагерей",
        "Карательные операции против партизан",
        "Депортация молодежи"
      ],
      fate: "Бежал в 1944 году, судьба неизвестна"
    },
    {
      level: "Районный комиссар",
      name: "Пример: Ганс Мюллер",
      period: "1941-1944", 
      territory: "Районный уровень",
      description: "Низший уровень немецкой администрации, непосредственное управление населением.",
      powers: [
        "Назначение старост",
        "Сбор налогов и поставок",
        "Регистрация населения",
        "Проведение облав"
      ],
      keyDecisions: [
        "Создание гетто в районных центрах",
        "Мобилизация на принудительные работы",
        "Борьба с партизанским движением"
      ],
      fate: "Различные судьбы - от побега до военного плена"
    }
  ];

  const occupationLaws = [
    {
      id: 1,
      date: "25 июля 1941",
      title: "О гражданском управлении",
      issuer: "Рейхскомиссариат Остланд",
      content: "Установление немецкой гражданской администрации на оккупированных территориях",
      consequences: ["Ликвидация советских органов власти", "Создание новой административной системы"],
      impact: "Формальное закрепление оккупационного режима"
    },
    {
      id: 2,
      date: "7 декабря 1941",
      title: "О еврейском населении",
      issuer: "Генеральный комиссар Кубе",
      content: "Создание гетто, обязательное ношение желтых знаков, запрет на передвижение",
      consequences: ["Изоляция еврейского населения", "Подготовка к «окончательному решению»"],
      impact: "Начало систематического геноцида"
    },
    {
      id: 3,
      date: "20 февраля 1942",
      title: "О трудовой повинности", 
      issuer: "Уполномоченный по рабочей силе",
      content: "Мобилизация населения на принудительные работы в Германии",
      consequences: ["Угон 380 тысяч белорусов", "Разрушение семей"],
      impact: "Депопуляция и экономическое ослабление"
    },
    {
      id: 4,
      date: "15 мая 1942",
      title: "О борьбе с партизанами",
      issuer: "Высшее командование СС",
      content: "Коллективная ответственность, расстрел заложников, сжигание деревень",
      consequences: ["Уничтожение 628 деревень", "Гибель десятков тысяч мирных жителей"],
      impact: "Террор против гражданского населения"
    },
    {
      id: 5,
      date: "10 октября 1942",
      title: "О продовольственных поставках",
      issuer: "Министерство продовольствия",
      content: "Конфискация 80% урожая для нужд Германии",
      consequences: ["Голод среди населения", "Высокая детская смертность"],
      impact: "Экономическое истощение региона"
    }
  ];

  const propagandaMaterials = [
    {
      type: "Плакаты",
      description: "Антисоветская и антисемитская пропаганда",
      examples: [
        "«Германия освобождает от большевистского ига»",
        "«Евреи - враги человечества»", 
        "«Работа в Германии - счастливое будущее»"
      ],
      target: "Широкие массы населения",
      effectiveness: "Низкая среди белорусов"
    },
    {
      type: "Газеты",
      description: "Контролируемые СМИ на белорусском языке",
      examples: [
        "«Белорусская газета» (Минск)",
        "«Новый путь» (региональные издания)",
        "Листовки для деревень"
      ],
      target: "Грамотное городское население",
      effectiveness: "Частично успешная"
    },
    {
      type: "Радиопередачи",
      description: "Ежедневные сводки и пропаганда",
      examples: [
        "Сводки с фронта (фальсифицированные)",
        "Призывы к сотрудничеству",
        "Антипартизанская агитация"
      ],
      target: "Владельцы радиоприемников",
      effectiveness: "Ограниченная"
    }
  ];

  const economicExploitation = [
    {
      sector: "Сельское хозяйство",
      percentage: 80,
      description: "Конфискация урожая и скота",
      methods: ["Принудительные поставки", "Реквизиция скота", "Вывоз техники"],
      impact: "Голод среди крестьян",
      statistics: "Изъято 2.8 млн тонн зерна"
    },
    {
      sector: "Промышленность", 
      percentage: 95,
      description: "Демонтаж и вывоз оборудования",
      methods: ["Разборка заводов", "Вывоз станков", "Принудительный труд"],
      impact: "Деиндустриализация",
      statistics: "Демонтировано 85% промышленности"
    },
    {
      sector: "Природные ресурсы",
      percentage: 100,
      description: "Вывоз леса, торфа, строительных материалов",
      methods: ["Вырубка лесов", "Добыча торфа", "Разработка карьеров"],
      impact: "Экологический ущерб",
      statistics: "Вывезено 15 млн м³ древесины"
    },
    {
      sector: "Человеческие ресурсы",
      percentage: 40,
      description: "Угон населения на принудительные работы",
      methods: ["Облавы", "Обман", "Принуждение"],
      impact: "Депопуляция",
      statistics: "Угнано 380 тысяч человек"
    }
  ];

  const managementMethods = [
    {
      method: "Административное принуждение",
      description: "Система штрафов, арестов и наказаний",
      tools: ["Комендантский час", "Пропускная система", "Регистрация населения"],
      effectiveness: "Высокая в городах"
    },
    {
      method: "Экономическое давление",
      description: "Контроль через распределение продовольствия",
      tools: ["Карточная система", "Трудовые книжки", "Налоги натурой"],
      effectiveness: "Средняя"
    },
    {
      method: "Идеологическое воздействие",
      description: "Пропаганда и попытки привлечения коллаборационистов",
      tools: ["СМИ", "Школы", "Административные должности"],
      effectiveness: "Низкая"
    },
    {
      method: "Террор и репрессии",
      description: "Запугивание населения жестокими мерами",
      tools: ["Публичные казни", "Заложники", "Карательные операции"],
      effectiveness: "Временная"
    }
  ];

  return (
    <>
      <PageTransition>
        <div className="page58">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Page Header */}
            <div className="page-header">
              <div className="page-badge">
                <span>СТРАНИЦА 58 • АДМИНИСТРАЦИЯ</span>
              </div>
              
              <h1 className="main-title">Оккупационная администрация</h1>
              
              <p className="subtitle">
                Как нацисты управляли захваченными белорусскими землями
              </p>
            </div>

            {/* Administrative Structure */}
            <Card className="content-section">
              <h2 className="section-title">Структура немецкой власти</h2>
              
              <div className="stats-grid">
                {administrativeStructure.map((level, index) => (
                  <div
                    key={index}
                    className={`stat-item ${selectedOfficial === index ? 'active' : 'inactive'}`}
                    onClick={() => setSelectedOfficial(index)}
                  >
                    <Crown className="w-8 h-8 text-primary mb-3" />
                    <span className="stat-value">{level.level}</span>
                    <span className="stat-label">{level.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="details-panel">
                <h3 className="details-title">{administrativeStructure[selectedOfficial].name}</h3>
                <div className="details-description">
                  <Badge variant="secondary" className="mb-4">
                    {administrativeStructure[selectedOfficial].period}
                  </Badge>
                  <p className="mb-4">{administrativeStructure[selectedOfficial].description}</p>
                </div>
                
                <div className="details-grid">
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Полномочия:</h4>
                    <ul className="space-y-2">
                      {administrativeStructure[selectedOfficial].powers.map((power, idx) => (
                        <li key={idx} className="list-item">
                          <div className="list-bullet"></div>
                          <span className="list-text">{power}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Ключевые решения:</h4>
                    <ul className="space-y-2">
                      {administrativeStructure[selectedOfficial].keyDecisions.map((decision, idx) => (
                        <li key={idx} className="list-item">
                          <div className="list-bullet"></div>
                          <span className="list-text">{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-accent">Судьба:</h4>
                  <p className="text-muted-foreground">{administrativeStructure[selectedOfficial].fate}</p>
                </div>
              </div>
            </Card>

            {/* Laws and Orders */}
            <Card className="content-section">
              <h2 className="section-title">Законы и приказы оккупантов</h2>
              
              <div className="nav-tabs">
                {occupationLaws.map((law, index) => (
                  <div
                    key={law.id}
                    className={`nav-tab ${selectedLaw === law.id ? 'active' : 'inactive'}`}
                    onClick={() => setSelectedLaw(selectedLaw === law.id ? null : law.id)}
                  >
                    {law.date}
                  </div>
                ))}
              </div>
              
              {selectedLaw && (
                <Card className="mt-6 p-6">
                  {(() => {
                    const law = occupationLaws.find(l => l.id === selectedLaw);
                    return (
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-accent">{law?.title}</h3>
                          <Badge variant="destructive">{law?.date}</Badge>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-sm text-muted-foreground mb-2">Издан: {law?.issuer}</p>
                          <p className="text-foreground">{law?.content}</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-accent">Последствия:</h4>
                            <ul className="space-y-1">
                              {law?.consequences.map((consequence, idx) => (
                                <li key={idx} className="list-item">
                                  <div className="list-bullet"></div>
                                  <span className="list-text">{consequence}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2 text-accent">Влияние:</h4>
                            <p className="text-muted-foreground">{law?.impact}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </Card>
              )}
            </Card>

            {/* Propaganda */}
            <Card className="content-section">
              <div className="flex items-center gap-3 mb-8">
                <Megaphone className="w-8 h-8 text-primary" />
                <h2 className="section-title mb-0">Пропаганда: плакаты, газеты</h2>
              </div>
              
              <div className="card-grid">
                {propagandaMaterials.map((material, index) => (
                  <div key={index} className="info-card">
                    <div className="card-header">
                      <div className="card-icon">
                        <FileText className="w-6 h-6" />
                      </div>
                      <h3 className="card-title">{material.type}</h3>
                    </div>
                    <p className="card-description">{material.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Примеры:</h4>
                      <ul className="space-y-1">
                        {material.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            • {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Целевая аудитория:</span>
                        <Badge variant="secondary" className="text-xs">{material.target}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Эффективность:</span>
                        <Badge 
                          variant={material.effectiveness.includes('Низкая') ? 'destructive' : 
                                 material.effectiveness.includes('Частично') ? 'secondary' : 'default'}
                          className="text-xs"
                        >
                          {material.effectiveness}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Management Methods */}
            <Card className="content-section">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="section-title mb-0">Как управляли захваченными территориями</h2>
              </div>
              
              <div className="card-grid">
                {managementMethods.map((method, index) => (
                  <div key={index} className="info-card">
                    <h3 className="card-title">{method.method}</h3>
                    <p className="card-description">{method.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Инструменты:</h4>
                      <ul className="space-y-1">
                        {method.tools.map((tool, idx) => (
                          <li key={idx} className="list-item">
                            <div className="list-bullet"></div>
                            <span className="list-text">{tool}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Badge 
                      variant={method.effectiveness.includes('Высокая') ? 'destructive' :
                             method.effectiveness.includes('Средняя') ? 'secondary' : 'default'}
                      className="card-badge"
                    >
                      {method.effectiveness}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Economic Exploitation */}
            <Card className="content-section">
              <div className="flex items-center gap-3 mb-8">
                <Factory className="w-8 h-8 text-primary" />
                <h2 className="section-title mb-0">Экономическая эксплуатация</h2>
              </div>
              
              <div className="space-y-6">
                {economicExploitation.map((sector, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-accent">{sector.sector}</h3>
                      <div className="flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-destructive" />
                        <span className="text-2xl font-bold text-destructive">{sector.percentage}%</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{sector.description}</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Методы:</h4>
                        <ul className="space-y-1">
                          {sector.methods.map((method, idx) => (
                            <li key={idx} className="list-item">
                              <div className="list-bullet"></div>
                              <span className="list-text">{method}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Влияние:</h4>
                        <p className="text-muted-foreground">{sector.impact}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Статистика:</h4>
                        <Badge variant="destructive">{sector.statistics}</Badge>
                      </div>
                    </div>
                    
                    {/* Progress bar showing exploitation level */}
                    <div className="mt-4">
                      <div className="progress-container">
                        <div 
                          className="progress-bar"
                          style={{ width: `${sector.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Уровень эксплуатации: {sector.percentage}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Conclusion */}
            <Card className="quote-section">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-accent">
                Итоги оккупационного управления
              </h2>
              
              <blockquote className="quote-text">
                Немецкая оккупационная администрация превратила Беларусь в источник сырья 
                и рабочей силы для Третьего рейха. Жестокая эксплуатация, террор и геноцид 
                стали основными инструментами управления.
              </blockquote>
              
              <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">2.2 млн</div>
                  <div className="text-muted-foreground">погибших мирных жителей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">380 тыс.</div>
                  <div className="text-muted-foreground">угнанных в Германию</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">85%</div>
                  <div className="text-muted-foreground">разрушенной промышленности</div>
                </div>
              </div>
              
              <cite className="quote-author mt-6 block text-center">
                — Из исследований послевоенной комиссии по ущербу
              </cite>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={58} />
    </>
  );
};

export default Page58;