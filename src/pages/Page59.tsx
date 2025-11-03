import { useState, useEffect } from 'react';
import BookNavigation from "@/components/BookNavigation";
import '../styles/Page59.css';

const Page59 = () => {
  const [animationStarted, setAnimationStarted] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showStatistics, setShowStatistics] = useState<boolean>(false);

  const totalPeople = 100;
  const casualties = 33; // Каждый третий погиб

  const statistics = [
    {
      title: "Общие потери населения",
      value: "2.2-3 млн",
      description: "человек погибло за годы оккупации",
      percentage: "25-30%",
      detail: "от довоенного населения"
    },
    {
      title: "Еврейское население",
      value: "800 тыс.",
      description: "из 900 тысяч евреев было уничтожено",
      percentage: "90%",
      detail: "практически полное истребление"
    },
    {
      title: "Мирные жители",
      value: "1.4-1.7 млн",
      description: "погибших среди гражданского населения",
      percentage: "70%",
      detail: "от общего числа жертв"
    },
    {
      title: "Дети",
      value: "600 тыс.",
      description: "детей погибло во время оккупации",
      percentage: "30%",
      detail: "от всех погибших"
    }
  ];

  const modernComparisons = [
    {
      city: "Минск",
      population: "2 млн",
      comparison: "Погибло больше, чем живет в современном Минске"
    },
    {
      city: "Гомель + Могилев",
      population: "850 тыс.",
      comparison: "Столько евреев было уничтожено"
    },
    {
      city: "Брест + Гродно",
      population: "700 тыс.",
      comparison: "Столько детей погибло за годы войны"
    }
  ];

  const startVisualization = () => {
    setAnimationStarted(true);
    setCurrentStep(1);
    
    // Постепенное исчезновение силуэтов
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= casualties) {
          clearInterval(interval);
          setTimeout(() => setShowStatistics(true), 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 150);
  };

  const resetVisualization = () => {
    setAnimationStarted(false);
    setCurrentStep(0);
    setShowStatistics(false);
  };

  const renderSilhouettes = () => {
    const silhouettes = [];
    for (let i = 0; i < totalPeople; i++) {
      const isVictim = i < casualties;
      const shouldDisappear = animationStarted && i < currentStep;
      
      silhouettes.push(
        <div
          key={i}
          className={`silhouette ${isVictim ? 'victim' : 'survivor'} ${shouldDisappear ? 'disappeared' : ''}`}
          style={{
            animationDelay: animationStarted ? `${i * 50}ms` : '0ms'
          }}
        >
          <svg viewBox="0 0 24 24" className="person-icon">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      );
    }
    return silhouettes;
  };

  return (
    <div className="page59">
      <div className="page-header">
        <h1>Цена оккупации</h1>
        <div className="header-subtitle">
          <p>Каждый третий житель Беларуси не дожил до освобождения</p>
        </div>
      </div>

      <div className="content-grid">
        {/* Интерактивная визуализация */}
        <div className="visualization-section">
          <h2>Масштаб трагедии</h2>
          
          <div className="visualization-container">
            <div className="visualization-header">
              <h3>100 человек в довоенной Беларуси</h3>
              <p>Из каждых 100 жителей к 1944 году погибло 33 человека</p>
            </div>
            
            <div className="silhouettes-grid">
              {renderSilhouettes()}
            </div>
            
            <div className="visualization-controls">
              {!animationStarted ? (
                <button className="start-animation-btn" onClick={startVisualization}>
                  ▶️ Показать масштаб потерь
                </button>
              ) : (
                <button className="reset-animation-btn" onClick={resetVisualization}>
                  🔄 Начать заново
                </button>
              )}
            </div>
            
            <div className="visualization-legend">
              <div className="legend-item">
                <div className="legend-color survivor"></div>
                <span>Выжившие (67 человек)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color victim"></div>
                <span>Погибшие (33 человека)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Статистика потерь */}
        <div className={`statistics-section ${showStatistics ? 'visible' : ''}`}>
          <h2>Статистика человеческих потерь</h2>
          
          <div className="statistics-grid">
            {statistics.map((stat, index) => (
              <div key={index} className="stat-card" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="stat-header">
                  <h3>{stat.title}</h3>
                </div>
                <div className="stat-content">
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-description">{stat.description}</div>
                  <div className="stat-percentage">
                    <span className="percentage">{stat.percentage}</span>
                    <span className="percentage-detail">{stat.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Сравнение с современностью */}
        <div className="modern-comparison-section">
          <h2>Сравнение с современной Беларусью</h2>
          <p className="comparison-intro">
            Чтобы понять масштаб трагедии, сравните потери военного времени 
            с населением современных белорусских городов:
          </p>
          
          <div className="comparisons-grid">
            {modernComparisons.map((comp, index) => (
              <div key={index} className="comparison-card">
                <div className="comparison-header">
                  <h3>{comp.city}</h3>
                  <span className="population">{comp.population}</span>
                </div>
                <div className="comparison-text">
                  <p>{comp.comparison}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Региональная разбивка */}
        <div className="regional-breakdown">
          <h2>Потери по регионам</h2>
          
          <div className="regions-grid">
            <div className="region-card">
              <h3>Минская область</h3>
              <div className="region-stats">
                <div className="region-stat">
                  <span className="stat-label">Довоенное население:</span>
                  <span className="stat-value">2.8 млн</span>
                </div>
                <div className="region-stat">
                  <span className="stat-label">Погибло:</span>
                  <span className="stat-value">950 тыс.</span>
                </div>
                <div className="region-stat">
                  <span className="stat-label">Потери:</span>
                  <span className="stat-value percentage-high">34%</span>
                </div>
              </div>
            </div>
            
            <div className="region-card">
              <h3>Витебская область</h3>
              <div className="region-stats">
                <div className="region-stat">
                  <span className="stat-label">Довоенное население:</span>
                  <span className="stat-value">1.4 млн</span>
                </div>
                <div className="region-stat">
                  <span className="stat-label">Погибло:</span>
                  <span className="stat-value">500 тыс.</span>
                </div>
                <div className="region-stat">
                  <span className="stat-label">Потери:</span>
                  <span className="stat-value percentage-high">36%</span>
                </div>
              </div>
            </div>
            
            <div className="region-card">
              <h3>Гомельская область</h3>
              <div className="region-stats">
                <div className="region-stat">
                  <span className="stat-label">Довоенное население:</span>
                  <span className="stat-value">1.2 млн</span>
                </div>
                <div className="region-stat">
                  <span className="stat-label">Погибло:</span>
                  <span className="stat-value">380 тыс.</span>
                </div>
                <div className="region-stat">
                  <span className="stat-label">Потери:</span>
                  <span className="stat-value percentage-medium">32%</span>
                </div>
              </div>
            </div>
            
            <div className="region-card">
              <h3>Гродненская область</h3>
              <div className="region-stats">
                <div className="region-stat">
                  <span className="stat-label">Довоенное население:</span>
                  <span className="stat-value">1.1 млн</span>
                </div>
                <div className="region-stat">
                  <span className="stat-label">Погибло:</span>
                  <span className="stat-value">320 тыс.</span>
                </div>
                <div className="region-stat">
                  <span className="stat-label">Потери:</span>
                  <span className="stat-value percentage-medium">29%</span>
                </div>
              </div>
            </div>
            
            <div className="region-card">
              <h3>Брестская область</h3>
              <div className="region-stats">
                <div className="region-stat">
                  <span className="stat-label">Довоенное население:</span>
                  <span className="stat-value">1.0 млн</span>
                </div>
                <div className="region-stat">
                  <span className="stat-label">Погибло:</span>
                  <span className="stat-value">280 тыс.</span>
                </div>
                <div className="region-stat">
                  <span className="stat-label">Потери:</span>
                  <span className="stat-value percentage-medium">28%</span>
                </div>
              </div>
            </div>
            
            <div className="region-card">
              <h3>Могилевская область</h3>
              <div className="region-stats">
                <div className="region-stat">
                  <span className="stat-label">Довоенное население:</span>
                  <span className="stat-value">1.1 млн</span>
                </div>
                <div className="region-stat">
                  <span className="stat-label">Погибло:</span>
                  <span className="stat-value">330 тыс.</span>
                </div>
                <div className="region-stat">
                  <span className="stat-label">Потери:</span>
                  <span className="stat-value percentage-medium">30%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Временная динамика */}
        <div className="timeline-losses">
          <h2>Динамика потерь по годам</h2>
          
          <div className="timeline-container">
            <div className="timeline-year">
              <div className="year-header">
                <h3>1941</h3>
                <span className="casualties">450 тыс. погибших</span>
              </div>
              <div className="year-events">
                <p>Начало оккупации, массовые расстрелы, создание гетто</p>
              </div>
            </div>
            
            <div className="timeline-year">
              <div className="year-header">
                <h3>1942</h3>
                <span className="casualties">850 тыс. погибших</span>
              </div>
              <div className="year-events">
                <p>Пик "окончательного решения", уничтожение гетто</p>
              </div>
            </div>
            
            <div className="timeline-year">
              <div className="year-header">
                <h3>1943</h3>
                <span className="casualties">650 тыс. погибших</span>
              </div>
              <div className="year-events">
                <p>Карательные операции против партизан и мирного населения</p>
              </div>
            </div>
            
            <div className="timeline-year">
              <div className="year-header">
                <h3>1944</h3>
                <span className="casualties">250 тыс. погибших</span>
              </div>
              <div className="year-events">
                <p>Завершающие репрессии перед отступлением</p>
              </div>
            </div>
          </div>
        </div>

        {/* Память о жертвах */}
        <div className="memory-section">
          <h2>Вечная память</h2>
          
          <div className="memory-content">
            <blockquote className="memorial-quote">
              "Из каждых 100 белорусов, встретивших войну, до Победы дожили только 67. 
              33 человека - это не просто статистика. Это чьи-то родители, дети, братья, сестры. 
              Это прерванные судьбы, несбывшиеся мечты, не рожденные поколения."
            </blockquote>
            
            <div className="memorial-numbers">
              <div className="memorial-stat">
                <span className="number">2.5 млн</span>
                <span className="label">погибших белорусов</span>
              </div>
              <div className="memorial-stat">
                <span className="number">600</span>
                <span className="label">сожженных деревень</span>
              </div>
              <div className="memorial-stat">
                <span className="number">120</span>
                <span className="label">тысяч угнанных в рабство</span>
              </div>
            </div>
            
            <div className="memory-call">
              <h3>Наш долг - помнить</h3>
              <p>
                Каждое имя, каждая судьба должны остаться в памяти потомков. 
                Только помня о цене мира, мы сможем его сохранить.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <BookNavigation currentPage={59} />
    </div>
  );
};

export default Page59;