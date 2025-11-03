import React, { useState } from 'react';
import BookNavigation from "@/components/BookNavigation";
import '../styles/Page57.css';

const Page57 = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(true);

  const collaborationTypes = [
    {
      id: 1,
      type: "Полиция безопасности",
      participants: "15 000-20 000",
      motivation: "Страх за семью, антисоветские настроения",
      duties: ["Облавы на евреев", "Охрана гетто", "Поиск партизан", "Конвоирование на расстрелы"],
      punishment: "Расстрел или 25 лет лагерей",
      morality: "high"
    },
    {
      id: 2,
      type: "Старосты деревень",
      participants: "8 000-12 000",
      motivation: "Желание сохранить деревню, принуждение",
      duties: ["Сбор продналога", "Поставка рабочей силы", "Информирование о партизанах", "Мобилизация на работы"],
      punishment: "10-15 лет заключения",
      morality: "medium"
    },
    {
      id: 3,
      type: "Бургомистры городов",
      participants: "200-300",
      motivation: "Карьеризм, идеологические убеждения",
      duties: ["Управление городом", "Организация депортаций", "Пропаганда", "Экономическое сотрудничество"],
      punishment: "Смертная казнь",
      morality: "high"
    },
    {
      id: 4,
      type: "Переводчики и служащие",
      participants: "5 000-8 000",
      motivation: "Выживание, возможность помочь землякам",
      duties: ["Перевод", "Делопроизводство", "Связь с населением", "Административная работа"],
      punishment: "5-10 лет заключения",
      morality: "low"
    }
  ];

  const collaborationReasons = [
    {
      reason: "Страх за семью",
      percentage: 45,
      description: "Угрозы расстрела родных при отказе от сотрудничества",
      examples: "Семьи полицаев получали дополнительные пайки"
    },
    {
      reason: "Антисоветские настроения",
      percentage: 25,
      description: "Ненависть к советской власти, надежда на немецкое освобождение",
      examples: "Бывшие кулаки, репрессированные в 1930-е"
    },
    {
      reason: "Идеологическая обработка",
      percentage: 15,
      description: "Вера в превосходство арийской расы, антисемитизм",
      examples: "Молодежь, воспитанная нацистской пропагандой"
    },
    {
      reason: "Корыстные мотивы",
      percentage: 10,
      description: "Желание получить имущество евреев, власть, привилегии",
      examples: "Торговцы, захватившие еврейские магазины"
    },
    {
      reason: "Принуждение и шантаж",
      percentage: 5,
      description: "Компромат, угрозы, безвыходность ситуации",
      examples: "Военнопленные, согласившиеся на службу"
    }
  ];

  const complexCases = [
    {
      id: 1,
      name: "Франц Кушель",
      position: "Бургомистр Минска",
      actions: ["Организация депортаций евреев", "Поставка рабочей силы в Германию", "Борьба с партизанами"],
      mitigation: ["Тайно предупреждал о облавах", "Помог нескольким семьям скрыться", "Саботировал некоторые приказы"],
      verdict: "Расстрел в 1946",
      complexity: "Спас десятки, но погубил тысячи"
    },
    {
      id: 2,
      name: "Василий Рожко",
      position: "Начальник полиции Барановичей",
      actions: ["Участие в расстрелах", "Охота на партизан", "Грабеж еврейского имущества"],
      mitigation: ["Под пытками выдал планы немцев партизанам", "Отпустил несколько арестованных"],
      verdict: "25 лет лагерей, умер в заключении",
      complexity: "Пытался искупить вину, но было поздно"
    },
    {
      id: 3,
      name: "Анна Федорова", 
      position: "Переводчица в комендатуре",
      actions: ["Перевод приказов о расстрелах", "Работа с документами депортации"],
      mitigation: ["Передавала информацию подполью", "Помогала людям получить справки", "Прятала важные документы"],
      verdict: "5 лет заключения, реабилитирована в 1954",
      complexity: "Использовала должность для спасения людей"
    }
  ];

  const postWarTrials = [
    {
      year: "1944-1946",
      cases: 1247,
      sentences: {
        death: 234,
        life: 89,
        long_term: 578,
        short_term: 346
      },
      description: "Первая волна - активные коллаборационисты"
    },
    {
      year: "1947-1953",
      cases: 2156,
      sentences: {
        death: 67,
        life: 156,
        long_term: 890,
        short_term: 1043
      },
      description: "Вторая волна - широкая сеть пособников"
    },
    {
      year: "1954-1960",
      cases: 467,
      sentences: {
        death: 12,
        life: 23,
        long_term: 156,
        short_term: 276
      },
      description: "Заключительная волна - скрывавшиеся преступники"
    }
  ];

  const moralDilemmas = [
    {
      dilemma: "Полицейский спасает свою семью",
      situation: "Немцы требуют участия в облаве на евреев под угрозой расстрела семьи полицейского",
      choices: [
        "Отказаться и обречь семью на смерть",
        "Согласиться и участвовать в убийстве невинных",
        "Попытаться саботировать, рискуя разоблачением"
      ],
      realOutcome: "Большинство выбирали спасение семьи"
    },
    {
      dilemma: "Староста между молотом и наковальней",
      situation: "Немцы требуют списки молодежи для угона в Германию, партизаны грозят расстрелом за сотрудничество",
      choices: [
        "Выполнить немецкий приказ",
        "Отказаться и подвергнуть деревню репрессиям",
        "Попытаться договориться с обеими сторонами"
      ],
      realOutcome: "Многие пытались лавировать между сторонами"
    }
  ];

  const getCollaborationType = (morality: string) => {
    switch(morality) {
      case 'high': return 'collaboration-high';
      case 'medium': return 'collaboration-medium';
      case 'low': return 'collaboration-low';
      default: return '';
    }
  };

  return (
    <div className="page57">
      {showDisclaimer && (
        <div className="content-disclaimer">
          <div className="disclaimer-content">
            <h3>⚠️ Сложная тема</h3>
            <p>
              Коллаборационизм - одна из самых болезненных тем войны. 
              Мы рассматриваем её объективно, без оправдания преступлений, 
              но пытаясь понять мотивы людей в экстремальных условиях.
            </p>
            <button 
              className="close-disclaimer"
              onClick={() => setShowDisclaimer(false)}
            >
              Понятно, продолжить
            </button>
          </div>
        </div>
      )}

      <div className="page-header">
        <h1>Коллаборационизм - сложная тема</h1>
        <div className="header-subtitle">
          <p>Объективное освещение без оправдания преступлений</p>
        </div>
      </div>

      <div className="content-grid">
        {/* Мотивы сотрудничества */}
        <div className="motivation-section">
          <h2>Почему люди шли на сотрудничество?</h2>
          
          <div className="motivation-chart">
            <div className="chart-container">
              {collaborationReasons.map((reason, index) => (
                <div key={index} className="motivation-bar">
                  <div className="bar-header">
                    <span className="bar-label">{reason.reason}</span>
                    <span className="bar-percentage">{reason.percentage}%</span>
                  </div>
                  <div className="bar-container">
                    <div 
                      className="bar-fill"
                      style={{ width: `${reason.percentage}%` }}
                    ></div>
                  </div>
                  <div className="bar-description">
                    <p><strong>Суть:</strong> {reason.description}</p>
                    <p><strong>Пример:</strong> {reason.examples}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Виды коллаборационизма */}
        <div className="collaboration-types">
          <h2>Виды сотрудничества с оккупантами</h2>
          
          <div className="types-grid">
            {collaborationTypes.map(type => (
              <div key={type.id} className={`type-card ${getCollaborationType(type.morality)}`}>
                <div className="type-header">
                  <h3>{type.type}</h3>
                  <span className="participants-count">{type.participants}</span>
                </div>
                
                <div className="type-content">
                  <div className="motivation">
                    <strong>Мотивация:</strong>
                    <p>{type.motivation}</p>
                  </div>
                  
                  <div className="duties">
                    <strong>Обязанности:</strong>
                    <ul>
                      {type.duties.map((duty, index) => (
                        <li key={index}>{duty}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="punishment">
                    <strong>Наказание после войны:</strong>
                    <p>{type.punishment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Сложные случаи */}
        <div className="complex-cases-section">
          <h2>Сложные случаи - грань между злом и выживанием</h2>
          
          <div className="cases-grid">
            {complexCases.map(case_ => (
              <div 
                key={case_.id} 
                className={`case-card ${selectedCase === case_.id ? 'expanded' : ''}`}
                onClick={() => setSelectedCase(selectedCase === case_.id ? null : case_.id)}
              >
                <div className="case-header">
                  <h3>{case_.name}</h3>
                  <span className="case-position">{case_.position}</span>
                </div>
                
                <div className="case-preview">
                  <p className="complexity">{case_.complexity}</p>
                </div>
                
                {selectedCase === case_.id && (
                  <div className="case-details">
                    <div className="actions-section">
                      <h4>Преступные действия:</h4>
                      <ul className="actions-list">
                        {case_.actions.map((action, index) => (
                          <li key={index} className="action-item">{action}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mitigation-section">
                      <h4>Смягчающие обстоятельства:</h4>
                      <ul className="mitigation-list">
                        {case_.mitigation.map((action, index) => (
                          <li key={index} className="mitigation-item">{action}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="verdict-section">
                      <h4>Приговор:</h4>
                      <p className="verdict">{case_.verdict}</p>
                    </div>
                  </div>
                )}
                
                <div className="expand-indicator">
                  {selectedCase === case_.id ? '▲ Свернуть' : '▼ Подробнее'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Моральные дилеммы */}
        <div className="moral-dilemmas-section">
          <h2>Моральные дилеммы военного времени</h2>
          
          <div className="dilemmas-grid">
            {moralDilemmas.map((dilemma, index) => (
              <div key={index} className="dilemma-card">
                <h3>{dilemma.dilemma}</h3>
                
                <div className="situation">
                  <h4>Ситуация:</h4>
                  <p>{dilemma.situation}</p>
                </div>
                
                <div className="choices">
                  <h4>Возможные варианты:</h4>
                  <ul>
                    {dilemma.choices.map((choice, idx) => (
                      <li key={idx}>{choice}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="real-outcome">
                  <h4>Что происходило в реальности:</h4>
                  <p>{dilemma.realOutcome}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="moral-reflection">
            <h3>Нет простых ответов</h3>
            <blockquote>
              "Легко судить людей, находясь в безопасности. Но когда над твоей семьей 
              нависает угроза смерти, когда выбор стоит между спасением своих детей 
              и чужих - моральные принципы подвергаются испытанию на прочность."
            </blockquote>
            <cite>— Из исследования военной психологии</cite>
          </div>
        </div>

        {/* Судьбы после войны */}
        <div className="postwar-trials-section">
          <h2>Судьбы после войны - суды и приговоры</h2>
          
          <div className="trials-timeline">
            {postWarTrials.map((period, index) => (
              <div key={index} className="trial-period">
                <div className="period-header">
                  <h3>{period.year}</h3>
                  <span className="cases-count">{period.cases} дел</span>
                </div>
                
                <div className="period-content">
                  <p className="period-description">{period.description}</p>
                  
                  <div className="sentences-breakdown">
                    <h4>Приговоры:</h4>
                    <div className="sentences-grid">
                      <div className="sentence-item death">
                        <span className="sentence-count">{period.sentences.death}</span>
                        <span className="sentence-type">Расстрел</span>
                      </div>
                      <div className="sentence-item life">
                        <span className="sentence-count">{period.sentences.life}</span>
                        <span className="sentence-type">Пожизненно</span>
                      </div>
                      <div className="sentence-item long">
                        <span className="sentence-count">{period.sentences.long_term}</span>
                        <span className="sentence-type">15-25 лет</span>
                      </div>
                      <div className="sentence-item short">
                        <span className="sentence-count">{period.sentences.short_term}</span>
                        <span className="sentence-type">До 15 лет</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="justice-statistics">
            <h3>Общая статистика правосудия</h3>
            <div className="justice-stats">
              <div className="justice-stat">
                <span className="stat-number">3870</span>
                <span className="stat-label">всего осуждено коллаборационистов</span>
              </div>
              <div className="justice-stat">
                <span className="stat-number">313</span>
                <span className="stat-label">приговорено к смертной казни</span>
              </div>
              <div className="justice-stat">
                <span className="stat-number">268</span>
                <span className="stat-label">получили пожизненное заключение</span>
              </div>
              <div className="justice-stat">
                <span className="stat-number">1624</span>
                <span className="stat-label">получили длительные сроки</span>
              </div>
            </div>
          </div>
        </div>

        {/* Участие в карательных операциях */}
        <div className="punitive-operations">
          <h2>Участие в карательных операциях</h2>
          
          <div className="operations-participation">
            <div className="participation-stats">
              <h3>Роль коллаборационистов</h3>
              <div className="role-breakdown">
                <div className="role-item">
                  <span className="role-percentage">60%</span>
                  <span className="role-description">Проводники и переводчики</span>
                </div>
                <div className="role-item">
                  <span className="role-percentage">25%</span>
                  <span className="role-description">Охранники и конвоиры</span>
                </div>
                <div className="role-item">
                  <span className="role-percentage">10%</span>
                  <span className="role-description">Непосредственные исполнители</span>
                </div>
                <div className="role-item">
                  <span className="role-percentage">5%</span>
                  <span className="role-description">Организаторы и руководители</span>
                </div>
              </div>
            </div>
            
            <div className="operations-examples">
              <h3>Конкретные операции</h3>
              <div className="operation-example">
                <h4>Операция "Котбус" (1943)</h4>
                <p>До 2000 местных полицаев участвовали в прочесывании лесов, 
                знание местности делало их особенно ценными для немцев.</p>
              </div>
              <div className="operation-example">
                <h4>Ликвидация гетто в Минске (1943)</h4>
                <p>Белорусская полиция участвовала в конвоировании и охране 
                во время массовых депортаций в лагеря смерти.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="conclusion-section">
        <h2>Выводы</h2>
        
        <div className="conclusion-content">
          <div className="historical-context">
            <h3>Исторический контекст</h3>
            <p>
              Коллаборационизм нельзя рассматривать в отрыве от контекста тоталитарной 
              оккупации. Люди оказались в ситуации, где любой выбор мог обернуться трагедией. 
              Важно понимать мотивы, не оправдывая преступления.
            </p>
          </div>
          
          <div className="moral-lessons">
            <h3>Уроки для человечества</h3>
            <p>
              История коллаборационизма показывает, как обычные люди могут стать 
              соучастниками преступлений в экстремальных условиях. Это напоминание 
              о важности моральной стойкости и гражданского мужества.
            </p>
          </div>
          
          <div className="memory-duty">
            <h3>Долг памяти</h3>
            <p>
              Мы изучаем эту тему не для осуждения или оправдания, а для понимания. 
              Только зная всю правду о войне - героическую и трагическую - мы можем 
              извлечь уроки для будущего.
            </p>
          </div>
        </div>
      </div>
      
      <BookNavigation currentPage={57} />
    </div>
  );
};

export default Page57;