import React, { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Volume2, VolumeX, MapPin, Zap, Target, TrendingUp } from "lucide-react";

const Page64 = () => {
  const [selectedHour, setSelectedHour] = useState<number>(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>('04:00');

  const timeline = [
    {
      time: '04:00',
      title: 'Артиллерийская подготовка',
      description: 'Началась мощнейшая артиллерийская подготовка по всему фронту',
      details: [
        '36 000 орудий и минометов открыли огонь',
        'Плотность огня: 200 стволов на километр фронта',
        'Продолжительность: 2 часа 20 минут',
        'Расход снарядов: 2.5 миллиона за день'
      ],
      frontStatus: 'Подготовка к атаке',
      germanReaction: 'Немецкие позиции подавлены',
      significance: 'Деморализация противника',
      audio: true
    },
    {
      time: '05:30',
      title: 'Авиационная подготовка',
      description: 'В бой вступила советская авиация',
      details: [
        '5300 самолетов поднялись в воздух',
        'Бомбардировка узлов сопротивления',
        'Штурмовики Ил-2 атакуют передний край',
        'Завоевано господство в воздухе'
      ],
      frontStatus: 'Воздушное превосходство',
      germanReaction: 'Люфтваффе подавлена',
      significance: 'Полное господство в воздухе',
      audio: false
    },
    {
      time: '06:20',
      title: 'Начало атаки пехоты',
      description: 'Советская пехота пошла в наступление',
      details: [
        'Первые цепи атакующих перешли в наступление',
        'Поддержка танков НПП (танки непосредственной поддержки)',
        'Прорыв первой линии немецкой обороны',
        'Продвижение на 3-5 км в первые часы'
      ],
      frontStatus: 'Наступление началось',
      germanReaction: 'Первая линия прорвана',
      significance: 'Тактический прорыв',
      audio: false
    },
    {
      time: '09:00',
      title: 'Ввод танковых корпусов',
      description: 'В прорыв вводятся танковые соединения',
      details: [
        'Танковые корпуса развивают успех',
        '1741 танк 1-го Белорусского фронта в бою',
        'Глубина прорыва достигает 10-15 км',
        'Окружение первых немецких гарнизонов'
      ],
      frontStatus: 'Развитие прорыва',
      germanReaction: 'Попытки контратак отбиты',
      significance: 'Оперативный прорыв',
      audio: false
    },
    {
      time: '12:00',
      title: 'Полдень - первые успехи',
      description: 'Подведение итогов утренних боев',
      details: [
        'Прорыв обороны на фронте 400 км',
        'Глубина продвижения: 15-25 км',
        'Взято в плен более 3000 немцев',
        'Освобождено 127 населенных пунктов'
      ],
      frontStatus: 'Устойчивое наступление',
      germanReaction: 'Отступление на вторые позиции',
      significance: 'Операция развивается успешно',
      audio: false
    },
    {
      time: '15:00',
      title: 'Прорыв второй полосы',
      description: 'Наступление на вторую линию обороны',
      details: [
        'Преодоление второй полосы обороны',
        'Танковые соединения вырываются на оперативный простор',
        'Начало окружения витебской группировки',
        'Продвижение на 25-30 км от исходных позиций'
      ],
      frontStatus: 'Оперативный успех',
      germanReaction: 'Паника в немецких штабах',
      significance: 'Обеспечен успех операции',
      audio: false
    },
    {
      time: '18:00',
      title: 'Вечерние сводки',
      description: 'Подведение итогов первого дня',
      details: [
        'Прорыв немецкой обороны на всех направлениях',
        'Продвижение на глубину 25-30 км',
        'Потери немцев: 8000 убитых, 5000 пленных',
        'Советские потери значительно меньше ожидаемых'
      ],
      frontStatus: 'Цели первого дня достигнуты',
      germanReaction: 'Срочный вызов резервов',
      significance: 'Успешное начало Багратиона',
      audio: false
    },
    {
      time: '22:00',
      title: 'Ночная подготовка',
      description: 'Подготовка к боям второго дня',
      details: [
        'Подтягивание резервов и боеприпасов',
        'Планирование действий на 24 июня',
        'Разведка новых позиций противника',
        'Отдых и пополнение частей'
      ],
      frontStatus: 'Подготовка к развитию успеха',
      germanReaction: 'Попытки организовать оборону',
      significance: 'Закрепление достигнутых результатов',
      audio: false
    }
  ];

  const frontBreakthroughs = [
    {
      front: '1-й Прибалтийский',
      commander: 'Баграмян',
      sector: 'Витебский',
      breakthrough: '30 км',
      casualties: 'Легкие',
      achievement: 'Окружение 5 дивизий противника',
      color: 'bg-red-500'
    },
    {
      front: '3-й Белорусский', 
      commander: 'Черняховский',
      sector: 'Богушевский',
      breakthrough: '28 км',
      casualties: 'Умеренные',
      achievement: 'Прорыв к Орше',
      color: 'bg-red-500'
    },
    {
      front: '2-й Белорусский',
      commander: 'Захаров',
      sector: 'Могилевский',
      breakthrough: '20 км',
      casualties: 'Средние',
      achievement: 'Взлом линии Вотана',
      color: 'bg-red-500'
    },
    {
      front: '1-й Белорусский',
      commander: 'Рокоссовский',
      sector: 'Бобруйский',
      breakthrough: '35 км',
      casualties: 'Легкие',
      achievement: 'Двойной охват Бобруйска',
      color: 'bg-red-500'
    }
  ];

  const audioEffects = {
    artillery: 'Гул артиллерии, взрывы снарядов, грохот канонады',
    silence: 'Тишина...'
  };

  const simulateTime = () => {
    const timeIndex = timeline.findIndex(t => t.time === currentTime);
    if (timeIndex < timeline.length - 1) {
      setCurrentTime(timeline[timeIndex + 1].time);
      setSelectedHour(timeIndex + 1);
    } else {
      setCurrentTime(timeline[0].time);
      setSelectedHour(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(simulateTime, 3000);
    return () => clearInterval(interval);
  }, [currentTime]);

  return (
    <>
      <PageTransition>
        <div className="min-h-screen pb-32 pt-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Page Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-red-400 tracking-wider">
                  СТРАНИЦА 64 • ПЕРВЫЙ ДЕНЬ
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                23 июня 1944 — День начала
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Хронология первого дня операции «Багратион» — начало освобождения Беларуси
              </p>
            </div>

            {/* Current Time Display */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-6 mb-12 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-red-400" />
                <div className="text-4xl font-bold text-red-400">{currentTime}</div>
                <div className="text-2xl text-muted-foreground">23 июня 1944</div>
              </div>
              <div className="text-lg text-muted-foreground">
                {timeline[selectedHour].title}
              </div>
            </Card>

            {/* Interactive Timeline */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">
                Хронология первого дня
              </h2>
              
              {/* Timeline Navigation */}
              <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mb-8">
                {timeline.map((event, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedHour(index);
                      setCurrentTime(event.time);
                    }}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedHour === index
                        ? 'border-red-500 bg-accent/20 text-red-400'
                        : 'border-border hover:border-orange-300'
                    }`}
                  >
                    <Clock className="w-4 h-4 mx-auto mb-1" />
                    <div className="text-xs font-semibold">{event.time}</div>
                  </button>
                ))}
              </div>

              {/* Current Event Details */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-red-400 mb-2">
                      {timeline[selectedHour].title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {timeline[selectedHour].description}
                    </p>
                  </div>
                  
                  {timeline[selectedHour].audio && (
                    <button
                      onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                      className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      {isAudioPlaying ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      {isAudioPlaying ? 'Выключить' : 'Звуки войны'}
                    </button>
                  )}
                </div>

                {isAudioPlaying && timeline[selectedHour].audio && (
                  <div className="bg-accent/20 p-4 rounded-lg mb-4 text-center">
                    <div className="text-red-400 font-semibold mb-2">🔊 Звуковое сопровождение</div>
                    <div className="text-red-400 italic">{audioEffects.artillery}</div>
                    <div className="mt-2">
                      <div className="w-full bg-red-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-400">Детали событий:</h4>
                    <ul className="space-y-2">
                      {timeline[selectedHour].details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-card/60 p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Статус фронта:</div>
                      <div className="text-sm text-red-300">{timeline[selectedHour].frontStatus}</div>
                    </div>
                    
                    <div className="bg-card/60 p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-800">Реакция немцев:</div>
                      <div className="text-sm text-red-700">{timeline[selectedHour].germanReaction}</div>
                    </div>
                    
                    <div className="bg-card/60 p-3 rounded border-l-4 border-red-500">
                      <div className="font-semibold text-red-400">Значение:</div>
                      <div className="text-sm text-red-300">{timeline[selectedHour].significance}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </Card>

            {/* First Day Breakthroughs */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Прорывы первого дня по фронтам
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {frontBreakthroughs.map((front, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-4 h-4 ${front.color} rounded-full`}></div>
                      <h3 className="font-bold text-lg">{front.front}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Командующий:</span>
                        <Badge variant="secondary">{front.commander}</Badge>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Сектор прорыва:</span>
                        <span className="font-semibold">{front.sector}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Глубина прорыва:</span>
                        <Badge variant="default" className="bg-red-500">
                          {front.breakthrough}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Потери:</span>
                        <Badge 
                          variant={
                            front.casualties === 'Легкие' ? 'default' :
                            front.casualties === 'Умеренные' ? 'secondary' : 'destructive'
                          }
                        >
                          {front.casualties}
                        </Badge>
                      </div>
                      
                      <div className="bg-accent/20 p-3 rounded border-l-4 border-red-500">
                        <div className="font-semibold text-red-400">Главное достижение:</div>
                        <div className="text-sm text-red-300">{front.achievement}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Success Metrics */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-accent">
                  Успехи первого дня в цифрах
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">400 км</div>
                  <div className="text-sm text-muted-foreground">фронт прорыва</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">30 км</div>
                  <div className="text-sm text-muted-foreground">максимальная глубина</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">8 000</div>
                  <div className="text-sm text-muted-foreground">потери немцев убитыми</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">127</div>
                  <div className="text-sm text-muted-foreground">освобожденных населенных пунктов</div>
                </div>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm border-border p-6 rounded-lg">
                <h3 className="text-xl font-bold text-center mb-4">Оценка штаба Красной Армии</h3>
                <blockquote className="text-lg italic text-center text-muted-foreground">
                  «Первый день операции превзошел все ожидания. Немецкая оборона прорвана 
                  на всех направлениях. Противник деморализован и отступает. 
                  Путь к освобождению Беларуси открыт.»
                </blockquote>
                <cite className="block text-center text-muted-foreground mt-4">
                  — Из дневника Генерального штаба, 23 июня 1944
                </cite>
              </div>
            </Card>

            {/* German Reaction */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-red-800">
                Немецкая реакция: паника в штабах
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Что происходило в немецких штабах:</h3>
                  <div className="space-y-4">
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold">04:00 - Начало артподготовки</div>
                      <div className="text-sm text-muted-foreground">
                        «Интенсивность огня превышает все известное. Связь с передовыми частями потеряна.»
                      </div>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold">09:00 - Прорыв танков</div>
                      <div className="text-sm text-muted-foreground">
                        «Советские танки прорвались через наши позиции. Первая линия обороны рухнула.»
                      </div>
                    </div>
                    
                    <div className="bg-card/60 p-4 rounded border-l-4 border-red-500">
                      <div className="font-semibold">15:00 - Общий отход</div>
                      <div className="text-sm text-muted-foreground">
                        «Приказываю отход на вторую линию обороны. Требую немедленной помощи от резервов.»
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Ошибки немецкого командования:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-red-500 mt-1" />
                      <div>
                        <div className="font-semibold">Недооценка угрозы</div>
                        <div className="text-sm text-muted-foreground">
                          Ожидали главный удар на Украине, а не в Беларуси
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-red-500 mt-1" />
                      <div>
                        <div className="font-semibold">Слабая разведка</div>
                        <div className="text-sm text-muted-foreground">
                          Не обнаружили масштабного сосредоточения советских войск
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-red-500 mt-1" />
                      <div>
                        <div className="font-semibold">Растянутая оборона</div>
                        <div className="text-sm text-muted-foreground">
                          Резервы были переброшены в другие районы
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-red-500 mt-1" />
                      <div>
                        <div className="font-semibold">Запоздалая реакция</div>
                        <div className="text-sm text-muted-foreground">
                          Резервы подтягивались слишком медленно
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageTransition>
      
      <BookNavigation currentPage={64} />
    </>
  );
};

export default Page64;