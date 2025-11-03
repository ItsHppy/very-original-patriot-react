import React, { useState, useEffect, useCallback, useMemo } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, User, Calendar, MapPin, FileText, ExternalLink, Heart, Users, Database, AlertCircle } from "lucide-react";

// Move static data outside component to prevent re-creation on every render
const databases = [
    {
      name: "ОБД «Мемориал»",
      url: "https://obd-memorial.ru",
      description: "Банк данных о защитниках Отечества, погибших и пропавших без вести в период Великой Отечественной войны",
      records: "17 млн записей",
      coverage: "Погибшие и пропавшие без вести",
      languages: ["русский"],
      access: "Бесплатный",
      features: [
        "Поиск по ФИО и году рождения",
        "Информация о месте захоронения",
        "Документы о награждении",
        "Данные о воинских частях"
      ],
      tips: [
        "Используйте разные варианты написания фамилии",
        "Попробуйте поиск только по фамилии",
        "Проверьте год рождения ±2 года",
        "Ищите по месту призыва"
      ]
    },
    {
      name: "Память народа",
      url: "https://pamyat-naroda.ru",
      description: "Обобщенный банк данных содержит информацию о воинах, участвовавших в боевых действиях",
      records: "430 млн документов",
      coverage: "Все участники войны",
      languages: ["русский"],
      access: "Бесплатный",
      features: [
        "Наградные документы",
        "Донесения о безвозвратных потерях",
        "Журналы боевых действий",
        "Карты боевых действий"
      ],
      tips: [
        "Изучите наградные листы",
        "Проверьте донесения о потерях",
        "Найдите боевой путь части",
        "Сопоставьте даты и места"
      ]
    },
    {
      name: "Подвиг народа",
      url: "https://podvignaroda.ru",
      description: "Банк данных о награжденных в годы Великой Отечественной войны",
      records: "15 млн записей",
      coverage: "Награжденные",
      languages: ["русский"],
      access: "Бесплатный",
      features: [
        "Наградные листы",
        "Приказы о награждении",
        "Описания подвигов",
        "Фотокопии документов"
      ],
      tips: [
        "Ищите по воинскому званию",
        "Проверьте все награды",
        "Читайте описания подвигов",
        "Сохраняйте найденные документы"
      ]
    },
    {
      name: "Белорусские архивы",
      url: "https://archives.gov.by",
      description: "Национальный исторический архив Беларуси и областные архивы",
      records: "Миллионы документов",
      coverage: "Все категории населения",
      languages: ["белорусский", "русский"],
      access: "Частично платный",
      features: [
        "Личные дела военнослужащих",
        "Списки эвакуированных",
        "Документы партизанских отрядов",
        "Списки жертв репрессий"
      ],
      tips: [
        "Подавайте официальный запрос",
        "Указывайте точные данные",
        "Приложите документы родства",
        "Ожидайте ответ 30 дней"
      ]
    },
    {
      name: "Центральный архив Министерства обороны РФ",
      url: "https://mil.ru/tsamo",
      description: "Документы Красной Армии периода Великой Отечественной войны",
      records: "Десятки миллионов дел",
      coverage: "Военнослужащие РККА",
      languages: ["русский"],
      access: "По запросу",
      features: [
        "Личные дела офицеров",
        "Документы воинских частей",
        "Медицинские карты",
        "Трибунальские дела"
      ],
      tips: [
        "Подавайте запрос официально",
        "Приложите документы о родстве",
        "Укажите последнее место службы",
        "Терпеливо ждите ответа"
      ]
    },
    {
      name: "Мемориал жертв Холокоста",
      url: "https://collections.ushmm.org",
      description: "Международная база данных жертв Холокоста",
      records: "Миллионы записей",
      coverage: "Жертвы Холокоста",
      languages: ["английский", "русский", "др."],
      access: "Бесплатный",
      features: [
        "Списки депортированных",
        "Документы гетто",
        "Свидетельства выживших",
        "Фотографии"
      ],
      tips: [
        "Ищите по девичьим фамилиям",
        "Проверяйте варианты написания",
        "Изучайте семейные списки",
        "Связывайтесь с родственниками"
      ]
    }
  ];

const searchInstructions = [
    {
      step: 1,
      title: "Подготовьте информацию",
      description: "Соберите все известные данные о человеке",
      details: [
        "Полное имя (включая возможные варианты написания)",
        "Дата и место рождения",
        "Последнее место жительства до войны",
        "Воинское звание и номер части (если известно)",
        "Информация о семье и родственниках"
      ],
      iconName: "FileText"
    },
    {
      step: 2,
      title: "Начните с крупных баз данных",
      description: "Используйте основные поисковые ресурсы",
      details: [
        "ОБД «Мемориал» — для поиска погибших",
        "«Память народа» — для участников войны",
        "«Подвиг народа» — для награжденных",
        "Попробуйте разные варианты написания"
      ],
      iconName: "Database"
    },
    {
      step: 3,
      title: "Расширьте поиск",
      description: "Обратитесь к архивам и специализированным базам",
      details: [
        "Белорусские государственные архивы",
        "Архивы военных округов",
        "Региональные музеи и архивы",
        "Международные базы данных"
      ],
      iconName: "Search"
    },
    {
      step: 4,
      title: "Анализируйте найденную информацию",
      description: "Сопоставляйте данные из разных источников",
      details: [
        "Проверяйте совпадения дат и мест",
        "Изучайте боевой путь воинской части",
        "Ищите однополчан и свидетелей",
        "Сохраняйте все найденные документы"
      ],
      iconName: "User"
    }
  ];

const searchTips = [
    {
      category: "Поиск по имени",
      tips: [
        "Используйте разные варианты написания фамилии (дореволюционное, современное)",
        "Пробуйте поиск только по фамилии и году рождения",
        "Учитывайте возможные ошибки в документах",
        "Ищите по уменьшительным формам имени"
      ]
    },
    {
      category: "Поиск по месту",
      tips: [
        "Указывайте как старые, так и современные названия населенных пунктов",
        "Ищите по области/району призыва",
        "Проверяйте изменения административных границ",
        "Учитывайте эвакуацию и переселения"
      ]
    },
    {
      category: "Поиск по воинской части",
      tips: [
        "Изучите историю и боевой путь части",
        "Найдите списки личного состава",
        "Проверьте переформирования и переименования",
        "Ищите документы штаба части"
      ]
    },
    {
      category: "Работа с архивами",
      tips: [
        "Подавайте официальные запросы с указанием цели",
        "Приложите документы, подтверждающие родство",
        "Будьте готовы к длительному ожиданию (до 30 дней)",
        "Указывайте максимально точные данные"
      ]
    }
  ];

const exampleSearches = [
    {
      title: "Поиск погибшего солдата",
      person: "Иванов Петр Сергеевич, 1920 г.р.",
      process: [
        "ОБД «Мемориал»: найдена запись о гибели в 1943 г.",
        "«Память народа»: найден наградной лист",
        "Архив МО: получена справка о месте захоронения",
        "Результат: полная информация о службе и подвиге"
      ],
      outcome: "Успешно найдена могила в Волгоградской области"
    },
    {
      title: "Поиск партизана",
      person: "Козлова Мария Ивановна, 1898 г.р.",
      process: [
        "Белорусские архивы: найдены документы партизанского отряда",
        "Музей партизанской славы: фотографии и воспоминания",
        "Свидетельства односельчан: дополнительная информация",
        "Результат: восстановлена история подвига"
      ],
      outcome: "Семья узнала о героических действиях прабабушки"
    },
    {
      title: "Поиск жертвы Холокоста",
      person: "Рабинович Давид Моисеевич, 1905 г.р.",
      process: [
        "Мемориал Яд Вашем: найдена запись о депортации",
        "Белорусские архивы: списки жителей гетто",
        "Свидетельства выживших: информация о судьбе",
        "Результат: установлена трагическая судьба"
      ],
      outcome: "Имя увековечено в мемориале жертв Холокоста"
    }
  ];

const Page79 = () => {
  const [searchForm, setSearchForm] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    birthYear: '',
    birthPlace: '',
    militaryUnit: '',
    rank: '',
    searchType: 'all'
  });
  const [searchResults, setSearchResults] = useState<{source: string; name: string; birthYear: string; status: string; details: string}[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [showInstructions, setShowInstructions] = useState<boolean>(true);

  // Function to get icon by name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'Database': return <Database className="w-6 h-6" />;
      case 'Search': return <Search className="w-6 h-6" />;
      case 'User': return <User className="w-6 h-6" />;
      default: return <FileText className="w-6 h-6" />;
    }
  };

  // Optimized form handler to prevent unnecessary re-renders
  const updateSearchForm = useCallback((field: string, value: string) => {
    setSearchForm(prev => ({ ...prev, [field]: value }));
  }, []);

  // Memoize the instructions block to prevent re-renders
  const instructionsBlock = useMemo(() => (
    <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
      <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
        Инструкция по поиску
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {searchInstructions.map((instruction, index) => (
          <Card key={index} className="p-6 bg-gradient-to-br bg-card/80 backdrop-blur-sm border-blue-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-accent">
                {getIcon(instruction.iconName)}
              </div>
              <div>
                <Badge variant="default" className="bg-gray-600 mb-2">Шаг {instruction.step}</Badge>
                <h3 className="font-bold text-lg">{instruction.title}</h3>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">{instruction.description}</p>
            
            <ul className="space-y-2">
              {instruction.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">{detail}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Card>
  ), []);

  const handleSearch = async () => {
    setIsSearching(true);
    // Симуляция поиска
    setTimeout(() => {
      setSearchResults([
        {
          source: "ОБД Мемориал",
          name: `${searchForm.lastName} ${searchForm.firstName} ${searchForm.middleName}`,
          birthYear: searchForm.birthYear,
          status: "Найдена запись",
          details: "Рядовой, 150-я стрелковая дивизия, пропал без вести в 1943 г."
        }
      ]);
      setIsSearching(false);
    }, 2000);
  };

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary tracking-wider">
                  СТРАНИЦА 79 • ПОИСК ПРЕДКОВ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Найди своего предка
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Воссоединитесь с историей своей семьи — найдите информацию о родственниках, участвовавших в Великой Отечественной войне
              </p>
            </div>

            {/* Search Form */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Search className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Форма поиска
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="lastName">Фамилия *</Label>
                    <Input
                      id="lastName"
                      value={searchForm.lastName}
                      onChange={(e) => updateSearchForm('lastName', e.target.value)}
                      placeholder="Иванов"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="firstName">Имя *</Label>
                    <Input
                      id="firstName"
                      value={searchForm.firstName}
                      onChange={(e) => updateSearchForm('firstName', e.target.value)}
                      placeholder="Петр"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="middleName">Отчество</Label>
                    <Input
                      id="middleName"
                      value={searchForm.middleName}
                      onChange={(e) => updateSearchForm('middleName', e.target.value)}
                      placeholder="Сергеевич"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="birthYear">Год рождения</Label>
                    <Input
                      id="birthYear"
                      value={searchForm.birthYear}
                      onChange={(e) => updateSearchForm('birthYear', e.target.value)}
                      placeholder="1920"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="birthPlace">Место рождения</Label>
                    <Input
                      id="birthPlace"
                      value={searchForm.birthPlace}
                      onChange={(e) => updateSearchForm('birthPlace', e.target.value)}
                      placeholder="д. Петровка, Минская область"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="militaryUnit">Воинская часть (если известно)</Label>
                    <Input
                      id="militaryUnit"
                      value={searchForm.militaryUnit}
                      onChange={(e) => updateSearchForm('militaryUnit', e.target.value)}
                      placeholder="150-я стрелковая дивизия"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="rank">Звание</Label>
                    <Input
                      id="rank"
                      value={searchForm.rank}
                      onChange={(e) => updateSearchForm('rank', e.target.value)}
                      placeholder="рядовой, сержант, лейтенант..."
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="searchType">Тип поиска</Label>
                    <Select value={searchForm.searchType} onValueChange={(value) => updateSearchForm('searchType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип поиска" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все базы данных</SelectItem>
                        <SelectItem value="memorial">Только погибшие</SelectItem>
                        <SelectItem value="awarded">Только награжденные</SelectItem>
                        <SelectItem value="participants">Все участники</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button onClick={handleSearch} disabled={isSearching || !searchForm.lastName || !searchForm.firstName}>
                  {isSearching ? "Поиск..." : "Начать поиск"}
                  <Search className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" onClick={() => setShowInstructions(!showInstructions)}>
                  {showInstructions ? "Скрыть инструкции" : "Показать инструкции"}
                </Button>
              </div>
            </Card>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
                <h2 className="text-2xl font-serif font-bold mb-6 text-accent">
                  Результаты поиска
                </h2>
                
                {searchResults.map((result, index) => (
                  <Card key={index} className="p-6 mb-4 bg-card/60 backdrop-blur-sm border-border border-green-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-accent mb-2">{result.name}</h3>
                        <Badge variant="default" className="bg-red-600 mb-3">{result.source}</Badge>
                        <p className="text-muted-foreground mb-2">{result.details}</p>
                        <div className="text-sm text-primary">
                          Год рождения: {result.birthYear} • Статус: {result.status}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Подробнее
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </Card>
            )}

            {/* Instructions */}
            {showInstructions && instructionsBlock}

            {/* Databases */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Database className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Базы данных для поиска
                </h2>
              </div>
              
              <div className="grid gap-6">
                {databases.map((db, index) => (
                  <Card key={index} className="p-6  ">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-accent mb-2">{db.name}</h3>
                        <p className="text-muted-foreground mb-3">{db.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline">{db.records}</Badge>
                          <Badge variant="outline">{db.coverage}</Badge>
                          <Badge variant="outline">{db.access}</Badge>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm">
                        Перейти
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-accent">Возможности поиска:</h4>
                        <ul className="space-y-1">
                          {db.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-accent">Советы по поиску:</h4>
                        <ul className="space-y-1">
                          {db.tips.map((tip, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Search Tips */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Полезные советы
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {searchTips.map((category, index) => (
                  <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm border-border">
                    <h3 className="font-bold text-lg text-accent mb-4">{category.category}</h3>
                    <ul className="space-y-3">
                      {category.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-yellow-600 flex-shrink-0">
                            <AlertCircle className="w-4 h-4" />
                          </div>
                          <span className="text-sm text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Example Searches */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Примеры успешных поисков
              </h2>
              
              <div className="grid gap-6">
                {exampleSearches.map((example, index) => (
                  <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm border-border">
                    <h3 className="font-bold text-lg text-accent mb-2">{example.title}</h3>
                    <div className="text-muted-foreground mb-4">
                      <span className="font-semibold">Объект поиска:</span> {example.person}
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Процесс поиска:</h4>
                      <ol className="space-y-2">
                        {example.process.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-accent flex-shrink-0 text-sm font-bold">
                              {idx + 1}
                            </div>
                            <span className="text-sm text-muted-foreground">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="bg-card p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-accent">Результат:</div>
                      <div className="text-primary">{example.outcome}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Memory and Heritage */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-accent">
                Сохраняем память поколений
              </h2>
              
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">👨‍👩‍👧‍👦💙📚</div>
                <div className="text-2xl font-bold text-accent mb-4">
                  Каждый найденный предок — это возвращенная память
                </div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Поиск информации о родственниках-участниках войны помогает сохранить семейную историю 
                  и передать ее следующим поколениям
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Память о героях</h3>
                  <p className="text-sm text-muted-foreground">
                    Каждый участник войны заслуживает того, чтобы его помнили
                  </p>
                </div>
                
                <div className="text-center">
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Семейная история</h3>
                  <p className="text-sm text-muted-foreground">
                    Воссоединение с корнями укрепляет семейные связи
                  </p>
                </div>
                
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Будущим поколениям</h3>
                  <p className="text-sm text-muted-foreground">
                    Сохраненная информация станет наследием для детей и внуков
                  </p>
                </div>
              </div>
              
              <blockquote className="text-xl font-serif italic text-center text-accent leading-relaxed mb-6">
                «Не зная прошлого, невозможно понять подлинный смысл настоящего и цели будущего. 
                Каждая семья должна знать своих героев.»
              </blockquote>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">
                  Начните поиск сегодня
                </div>
                <div className="text-lg text-muted-foreground">
                  Каждый день может принести новые открытия о вашей семейной истории
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={79} />
    </>
  );
};

export default Page79;