export type Lang = "EN" | "RU";

const translations = {
  // Nav
  "nav.home": { EN: "Home", RU: "Главная" },
  "nav.about": { EN: "About Us", RU: "О нас" },
  "nav.activities": { EN: "Activities", RU: "Деятельность" },
  "nav.contacts": { EN: "Contacts", RU: "Контакты" },
  "nav.requestSurvey": { EN: "Request a Survey", RU: "Заказать обследование" },

  // Home hero
  "home.badge": { EN: "Marine Inspection · Since 1998", RU: "Морская инспекция · С 1998 года" },
  "home.heroTitle1": { EN: "Independent ship hull", RU: "Независимая инспекция" },
  "home.heroTitle2": { EN: "inspection, ", RU: "корпусов судов, " },
  "home.heroTitle3": { EN: "worldwide.", RU: "по всему миру." },
  "home.heroDesc": {
    EN: "Non-destructive testing, ultrasonic thickness measurement and steel renewal supervision for fleet operators. Certified technicians mobilised to any port within 24 hours.",
    RU: "Неразрушающий контроль, ультразвуковая толщинометрия и надзор за заменой стали для операторов флота. Сертифицированные специалисты выезжают в любой порт в течение 24 часов.",
  },
  "home.viewActivities": { EN: "View Activities", RU: "Наши услуги" },

  // Stats
  "home.stat.vessels": { EN: "Vessels inspected per year", RU: "Судов обследовано в год" },
  "home.stat.mobilisation": { EN: "Mobilisation availability", RU: "Готовность к мобилизации" },
  "home.stat.experience": { EN: "Years of experience", RU: "Лет опыта" },
  "home.stat.coverage": { EN: "Operational coverage", RU: "Операционное покрытие" },
  "home.stat.worldwide": { EN: "Worldwide", RU: "Весь мир" },

  // Home about preview
  "home.aboutLabel": { EN: "About Us", RU: "О нас" },
  "home.aboutTitle": { EN: "Trusted partner in marine vessel inspection", RU: "Надёжный партнёр в инспекции морских судов" },
  "home.aboutP1": {
    EN: "Tehnomet Survey is an actively developing service company operating in the field of ship repair and inspection of hull structures of marine vessels. Founded in 1998, we are part of the BLRT Grupp and operate worldwide.",
    RU: "Tehnomet Survey — активно развивающаяся сервисная компания, работающая в области судоремонта и инспекции корпусных конструкций морских судов. Основана в 1998 году, входит в состав BLRT Grupp и работает по всему миру.",
  },
  "home.aboutP2": {
    EN: "Our technicians hold all necessary documents to be mobilised on short notice and arrive on a spot as per client's request — wherever the vessel is located.",
    RU: "Наши специалисты имеют все необходимые документы для оперативной мобилизации и прибытия на место по запросу клиента — где бы ни находилось судно.",
  },
  "home.readMore": { EN: "Read More", RU: "Подробнее" },

  // Home activities preview
  "home.activitiesLabel": { EN: "Activities", RU: "Деятельность" },
  "home.activitiesTitle": { EN: "Our Core Services", RU: "Основные услуги" },
  "home.ndt.title": { EN: "Non-Destructive Testing (NDT)", RU: "Неразрушающий контроль (НК)" },
  "home.ndt.desc": {
    EN: "Hull and weld inspection without interrupting vessel operations. UT, MT, PT, VT, RT and ET methods performed by certified technicians.",
    RU: "Инспекция корпуса и сварных швов без прерывания эксплуатации судна. Методы УЗК, МПД, ПВК, ВИК, РК и ВТК выполняются сертифицированными специалистами.",
  },
  "home.utm.title": { EN: "UTM & Steel Supervision", RU: "УЗТ и надзор за сталью" },
  "home.utm.desc": {
    EN: "Ultrasonic thickness measurement, corrosion monitoring, structural integrity assessment and class survey support.",
    RU: "Ультразвуковая толщинометрия, мониторинг коррозии, оценка структурной целостности и поддержка классификационных освидетельствований.",
  },

  // Class societies strip
  "class.accepted": { EN: "Accepted by all major classification societies", RU: "Признано всеми ведущими классификационными обществами" },

  // About page
  "about.label": { EN: "About Us", RU: "О нас" },
  "about.heroTitle": { EN: "A quarter century of marine inspection expertise.", RU: "Четверть века экспертизы в морской инспекции." },
  "about.ourStory": { EN: "Our Story", RU: "Наша история" },
  "about.storyP1": {
    EN: "Tehnomet Survey is an actively developing service company, operating in the field of ship repair and inspection of hull structures of marine vessels, founded in 1998. We operate worldwide.",
    RU: "Tehnomet Survey — активно развивающаяся сервисная компания, работающая в области судоремонта и инспекции корпусных конструкций морских судов, основанная в 1998 году. Мы работаем по всему миру.",
  },
  "about.storyP2": {
    EN: "Our technicians have all the necessary documents to be mobilized on a short notice and arrive on a spot as per client's request, wherever vessel is located. Over more than two decades we have built lasting relationships with ship owners, fleet operators, port agents and procurement managers across Europe, the Middle East and Asia-Pacific.",
    RU: "Наши специалисты имеют все необходимые документы для оперативной мобилизации и прибытия на место по запросу клиента, где бы ни находилось судно. За более чем два десятилетия мы построили прочные отношения с судовладельцами, операторами флота, портовыми агентами и менеджерами по закупкам в Европе, на Ближнем Востоке и в Азиатско-Тихоокеанском регионе.",
  },
  "about.storyP3": {
    EN: "We perform our work in close cooperation with all major classification societies, ensuring every report and certificate we produce is accepted globally. Independence and technical rigour are at the core of how we operate.",
    RU: "Мы выполняем нашу работу в тесном сотрудничестве со всеми ведущими классификационными обществами, обеспечивая глобальное признание каждого отчёта и сертификата. Независимость и техническая строгость — основа нашей работы.",
  },
  "about.stat.vessels": { EN: "Vessels per year", RU: "Судов в год" },
  "about.stat.availability": { EN: "Availability", RU: "Доступность" },
  "about.stat.experience": { EN: "Years experience", RU: "Лет опыта" },
  "about.stat.coverage": { EN: "Coverage", RU: "Покрытие" },
  "about.stat.worldwide": { EN: "Worldwide", RU: "Весь мир" },
  "about.parentLabel": { EN: "Parent Company", RU: "Материнская компания" },
  "about.parentTitle": { EN: "Part of BLRT Grupp", RU: "Часть BLRT Grupp" },
  "about.parentP1": {
    EN: "Tehnomet Survey is part of BLRT Grupp, one of the largest industrial holding companies in the Baltic region with deep roots in shipbuilding, ship repair and maritime services.",
    RU: "Tehnomet Survey входит в состав BLRT Grupp — одного из крупнейших промышленных холдингов Балтийского региона с глубокими корнями в судостроении, судоремонте и морских услугах.",
  },
  "about.parentP2": {
    EN: "Through BLRT Grupp we have access to extensive shipyard infrastructure, engineering expertise and a network of maritime specialists — strengths we bring to every inspection contract.",
    RU: "Через BLRT Grupp мы имеем доступ к обширной инфраструктуре верфей, инженерному опыту и сети морских специалистов — преимущества, которые мы привносим в каждый инспекционный контракт.",
  },
  "about.card.shipyard": { EN: "Shipyard heritage", RU: "Наследие верфей" },
  "about.card.industrial": { EN: "Industrial scale", RU: "Промышленный масштаб" },
  "about.card.baltic": { EN: "Baltic region leader", RU: "Лидер Балтийского региона" },
  "about.card.decades": { EN: "Decades of trust", RU: "Десятилетия доверия" },
  "about.ctaTitle": { EN: "Need an inspection arranged?", RU: "Нужно организовать инспекцию?" },
  "about.ctaDesc": { EN: "Talk to our team — response within hours, mobilisation within 24h.", RU: "Свяжитесь с нашей командой — ответ в течение нескольких часов, мобилизация в течение 24 часов." },

  // Activities page
  "activities.label": { EN: "Activities", RU: "Деятельность" },
  "activities.heroTitle": { EN: "Inspection services for the modern fleet.", RU: "Инспекционные услуги для современного флота." },
  "activities.ndt.label": { EN: "Non-Destructive Testing (NDT)", RU: "Неразрушающий контроль (НК)" },
  "activities.ndt.intro": {
    EN: "Inspection of hull structures and welds without interrupting vessel operations. Our certified technicians detect surface and sub-surface defects to confirm structural integrity, with reports accepted by all major classification societies.",
    RU: "Инспекция корпусных конструкций и сварных швов без прерывания эксплуатации судна. Наши сертифицированные специалисты выявляют поверхностные и подповерхностные дефекты для подтверждения структурной целостности, с отчётами, признанными всеми ведущими классификационными обществами.",
  },
  "activities.utm.label": { EN: "UTM & Steel Supervision", RU: "УЗТ и надзор за сталью" },
  "activities.utm.intro": {
    EN: "Ultrasonic thickness measurement, corrosion monitoring and structural integrity assessment in support of class surveys and steel renewal works. We deliver actionable thickness mappings and engineering documentation.",
    RU: "Ультразвуковая толщинометрия, мониторинг коррозии и оценка структурной целостности в поддержку классификационных освидетельствований и работ по замене стали. Мы предоставляем детальные карты толщин и инженерную документацию.",
  },

  // NDT methods
  "activities.ut.title": { EN: "Ultrasonic Testing", RU: "Ультразвуковой контроль" },
  "activities.ut.desc": { EN: "Detects internal flaws and weld defects using high-frequency sound waves.", RU: "Обнаружение внутренних дефектов и дефектов сварных швов с помощью высокочастотных звуковых волн." },
  "activities.ut.full": {
    EN: "Ultrasonic Testing (UT) uses high-frequency sound waves to detect internal flaws in welds and hull structures. The technique can identify cracks, inclusions, porosity and lack of fusion without damaging the material. Our technicians are certified to perform UT in accordance with international standards and classification society requirements.",
    RU: "Ультразвуковой контроль (УЗК) использует высокочастотные звуковые волны для обнаружения внутренних дефектов в сварных швах и конструкциях корпуса. Метод позволяет выявлять трещины, включения, пористость и непровары без повреждения материала. Наши специалисты сертифицированы для проведения УЗК в соответствии с международными стандартами и требованиями классификационных обществ.",
  },
  "activities.mt.title": { EN: "Magnetic Particle", RU: "Магнитопорошковый контроль" },
  "activities.mt.desc": { EN: "Reveals surface and near-surface discontinuities in ferromagnetic materials.", RU: "Выявление поверхностных и приповерхностных несплошностей в ферромагнитных материалах." },
  "activities.mt.full": {
    EN: "Magnetic Particle Testing (MT) is used to detect surface and near-surface discontinuities in ferromagnetic materials such as steel. A magnetic field is applied to the test area, and ferromagnetic particles are distributed over the surface. Discontinuities cause the particles to gather, forming visible indications. This method is widely used in shipbuilding for weld inspection.",
    RU: "Магнитопорошковый контроль (МПД) применяется для обнаружения поверхностных и приповерхностных несплошностей в ферромагнитных материалах, таких как сталь. На испытуемый участок подаётся магнитное поле, и ферромагнитные частицы распределяются по поверхности. Несплошности вызывают скопление частиц, образуя видимые индикации. Этот метод широко применяется в судостроении для контроля сварных швов.",
  },
  "activities.pt.title": { EN: "Penetrant Testing", RU: "Капиллярный контроль" },
  "activities.pt.desc": { EN: "Identifies surface-breaking defects using capillary action of dye penetrants.", RU: "Выявление поверхностных дефектов с помощью капиллярного действия проникающих жидкостей." },
  "activities.pt.full": {
    EN: "Penetrant Testing (PT) uses the capillary action of dye penetrants to reveal surface-breaking defects. A liquid penetrant is applied to the surface, allowed to seep into any cracks or discontinuities, then excess is removed and a developer is applied to draw out the penetrant from defects, making them visible. This method is effective on both ferromagnetic and non-ferromagnetic materials.",
    RU: "Капиллярный контроль (ПВК) использует капиллярное действие проникающих жидкостей для выявления поверхностных дефектов. Проникающая жидкость наносится на поверхность, проникает в трещины и несплошности, затем избыток удаляется и наносится проявитель, который вытягивает пенетрант из дефектов, делая их видимыми. Этот метод эффективен как для ферромагнитных, так и для неферромагнитных материалов.",
  },
  "activities.vt.title": { EN: "Visual Inspection", RU: "Визуальный контроль" },
  "activities.vt.desc": { EN: "Systematic visual examination of welds, structures and coatings.", RU: "Систематический визуальный осмотр сварных швов, конструкций и покрытий." },
  "activities.vt.full": {
    EN: "Visual Testing (VT) is the most fundamental and widely used NDT method. It involves systematic visual examination of welds, structures and coatings using direct observation, aided by tools such as magnifying lenses, borescopes and cameras. VT is the first line of inspection and is essential for identifying surface defects, misalignment, and coating degradation.",
    RU: "Визуальный контроль (ВИК) — наиболее фундаментальный и широко применяемый метод НК. Включает систематический визуальный осмотр сварных швов, конструкций и покрытий с использованием прямого наблюдения, а также инструментов — увеличительных линз, бороскопов и камер. ВИК — первая линия инспекции, необходимая для выявления поверхностных дефектов, несоосности и деградации покрытий.",
  },
  "activities.rt.title": { EN: "Radiographic Testing", RU: "Радиографический контроль" },
  "activities.rt.desc": { EN: "X-ray and gamma-ray imaging for full volumetric weld inspection.", RU: "Рентгеновский и гамма-контроль для полной объёмной инспекции сварных швов." },
  "activities.rt.full": {
    EN: "Radiographic Testing (RT) uses X-rays or gamma rays to produce images of the internal structure of welds and materials. The radiation passes through the test piece and creates an image on film or a digital detector, revealing internal defects such as porosity, slag inclusions, cracks and lack of fusion. RT provides a permanent record of inspection results.",
    RU: "Радиографический контроль (РК) использует рентгеновское или гамма-излучение для получения изображений внутренней структуры сварных швов и материалов. Излучение проходит через испытуемый объект и создаёт изображение на плёнке или цифровом детекторе, выявляя внутренние дефекты — пористость, шлаковые включения, трещины и непровары. РК обеспечивает постоянную запись результатов инспекции.",
  },
  "activities.et.title": { EN: "Eddy Current", RU: "Вихретоковый контроль" },
  "activities.et.desc": { EN: "Electromagnetic detection of surface and sub-surface flaws in conductive materials.", RU: "Электромагнитное обнаружение поверхностных и подповерхностных дефектов в проводящих материалах." },
  "activities.et.full": {
    EN: "Eddy Current Testing (ET) uses electromagnetic induction to detect surface and near-surface flaws in conductive materials. An alternating current coil is placed near the test surface, inducing eddy currents in the material. Defects disrupt these currents, which is detected by the instrument. ET is particularly effective for detecting cracks in heat exchanger tubes and non-ferromagnetic materials.",
    RU: "Вихретоковый контроль (ВТК) использует электромагнитную индукцию для обнаружения поверхностных и приповерхностных дефектов в проводящих материалах. Катушка переменного тока размещается вблизи поверхности, индуцируя вихревые токи в материале. Дефекты нарушают эти токи, что фиксируется прибором. ВТК особенно эффективен для обнаружения трещин в трубах теплообменников и неферромагнитных материалах.",
  },

  // UTM methods - updated
  "activities.utm.utmTitle": { EN: "Ultrasonic Thickness Measurements (UTM)", RU: "Ультразвуковые измерения толщины (УЗТ)" },
  "activities.utm.utmDesc": { EN: "Residual thickness measurement of hull structures carried out by the most popular method of UTM, in accordance with classification society rules.", RU: "Измерение остаточной толщины конструкций корпуса наиболее популярным методом УЗТ, в соответствии с правилами классификационных обществ." },
  "activities.utm.utmFull": {
    EN: "Pursuant to the international rules of classification societies, all vessels are subject to periodical survey in connection with the technical condition of the hull. In the course of survey, the hull is inspected for deformations, cracks or structural breaches, and the obligatory measurement of residual thickness of the hull structures. The results of survey and measurements are compared with a relevant normative value. Based on obtained results costumer receives a full picture of jobs required/recommended to be done on a board. Residual thickness of hull structures is carried out by the most popular way of UTM.\n\nOur technicians are top-ranking experts with comprehensive training and tuition received. Most of them have higher education in the field of shipbuilding and ship repair. We have all the necessary documents and certifications to operate worldwide. Inspection and survey can be carried out on a best customer preference, either pre-docking inspection or dock straight ahead in a short notice. Reporting documentation prepared accordingly, and always submitted to the customer immediately upon completion of survey.",
    RU: "В соответствии с международными правилами классификационных обществ, все суда подлежат периодическому освидетельствованию в связи с техническим состоянием корпуса. В ходе освидетельствования корпус проверяется на деформации, трещины или нарушения конструкции, а также проводится обязательное измерение остаточной толщины конструкций корпуса. Результаты освидетельствования и измерений сравниваются с соответствующим нормативным значением. На основании полученных результатов заказчик получает полную картину необходимых/рекомендованных работ на борту. Измерение остаточной толщины конструкций корпуса проводится наиболее популярным методом УЗТ.\n\nНаши специалисты — высококвалифицированные эксперты с всесторонней подготовкой. Большинство из них имеют высшее образование в области судостроения и судоремонта. Мы имеем все необходимые документы и сертификаты для работы по всему миру. Инспекция и освидетельствование могут быть проведены по предпочтению заказчика — предстапельная инспекция или непосредственно в доке в кратчайшие сроки. Отчётная документация подготавливается соответствующим образом и всегда передаётся заказчику сразу после завершения освидетельствования.",
  },
  "activities.utm.repairTitle": { EN: "Repair Sketches & Steel Replacement Calculation", RU: "Ремонтные эскизы и расчёт замены стали" },
  "activities.utm.repairDesc": { EN: "Repair sketches, suggestions and weight calculation of metal to be replaced based on ship repair technologies.", RU: "Ремонтные эскизы, предложения и расчёт массы заменяемого металла на основе технологий судоремонта." },
  "activities.utm.repairFull": {
    EN: "Appropriate training of technicians enables us beside from reports on the actual condition of the vessel, provide the client with repair sketches and suggestions, and calculate the weight of the metal to be replaced by reference to specific features of ship repair technologies. Pre-conducted survey of the vessel and proper calculation of weights of the structures to be replaced enables our customers to be better prepared for docking work, take into account all aspects when budgeting and to avoid pitfalls.",
    RU: "Соответствующая подготовка наших специалистов позволяет нам, помимо отчётов о фактическом состоянии судна, предоставлять клиенту ремонтные эскизы и предложения, а также рассчитывать массу заменяемого металла с учётом особенностей судоремонтных технологий. Предварительно проведённое освидетельствование судна и корректный расчёт масс заменяемых конструкций позволяют нашим заказчикам лучше подготовиться к доковым работам, учесть все аспекты при бюджетировании и избежать непредвиденных расходов.",
  },
  "activities.utm.pittingTitle": { EN: "Pitting Corrosion Detection & Measurement", RU: "Обнаружение и измерение питтинговой коррозии" },
  "activities.utm.pittingDesc": { EN: "Expert detection and measurement of pitting corrosion in ballast and cargo tanks with detailed reporting.", RU: "Экспертное обнаружение и измерение питтинговой коррозии в балластных и грузовых танках с подробной отчётностью." },
  "activities.utm.pittingFull": {
    EN: "Pitting corrosion or pitting wear of metal can develop on any ship structure. This issue is most common for ballast and cargo tanks. Pitting corrosion undetected and without measures taken on time can lead to costly repairs, lengthy downtime of the vessel and to environmental hazards. Our technicians have a considerable expertise in pitting corrosion research. Upon completion of inspection, they will provide a detailed report on location of the problem areas, their depth and extensiveness, together with appropriate repair suggestions based on requirements and tolerances of classification societies and IACS rules.",
    RU: "Питтинговая коррозия или питтинговый износ металла может развиваться на любой судовой конструкции. Эта проблема наиболее характерна для балластных и грузовых танков. Необнаруженная питтинговая коррозия без своевременно принятых мер может привести к дорогостоящему ремонту, длительному простою судна и экологическим рискам. Наши специалисты обладают значительным опытом в исследовании питтинговой коррозии. По завершении инспекции они предоставят подробный отчёт о расположении проблемных зон, их глубине и распространённости, а также соответствующие предложения по ремонту на основе требований и допусков классификационных обществ и правил МАКО.",
  },
  "activities.utm.anchorTitle": { EN: "Anchor Chains Calibration", RU: "Калибровка якорных цепей" },
  "activities.utm.anchorDesc": { EN: "Calibration of anchor chains to ensure total wear is within normal range per classification society requirements.", RU: "Калибровка якорных цепей для проверки допустимого износа в соответствии с требованиями классификационных обществ." },
  "activities.utm.anchorFull": {
    EN: "Starting from the second special survey of the vessel (10 years from the date of construction), the classification society representative may also request calibration of the anchor chain to ensure the total wear is within a normal range. Our UTM teams can perform this job both during the preliminary inspection or during dockage and prepare appropriate reports along with replacement suggestions for all parties concerned.",
    RU: "Начиная со второго специального освидетельствования судна (10 лет с даты постройки), представитель классификационного общества может также потребовать калибровку якорной цепи для проверки того, что общий износ находится в допустимых пределах. Наши команды УЗТ могут выполнить эту работу как во время предварительной инспекции, так и во время стоянки в доке, и подготовить соответствующие отчёты вместе с предложениями по замене для всех заинтересованных сторон.",
  },

  "activities.readMore": { EN: "Read More", RU: "Подробнее" },
  "activities.readLess": { EN: "Show Less", RU: "Свернуть" },

  "activities.whyLabel": { EN: "Why Choose Us", RU: "Почему мы" },
  "activities.whyTitle": { EN: "Built for fleet operators who can't afford guesswork", RU: "Создано для операторов флота, которым нельзя ошибаться" },
  "activities.why.mobilisation": { EN: "24/7 Mobilisation", RU: "Мобилизация 24/7" },
  "activities.why.mobilisationDesc": { EN: "On-call technicians ready to deploy to any port worldwide within 24 hours of your request.", RU: "Дежурные специалисты готовы выехать в любой порт мира в течение 24 часов после вашего запроса." },
  "activities.why.classSocieties": { EN: "All Major Class Societies", RU: "Все ведущие классификационные общества" },
  "activities.why.classSocietiesDesc": { EN: "Reports and surveys accepted by LR, DNV, BV, ABS, ClassNK, RINA and CCS.", RU: "Отчёты и освидетельствования принимаются LR, DNV, BV, ABS, ClassNK, RINA и CCS." },
  "activities.why.certified": { EN: "Certified Technicians", RU: "Сертифицированные специалисты" },
  "activities.why.certifiedDesc": { EN: "All inspectors hold internationally recognised qualifications and class society approvals.", RU: "Все инспекторы имеют международно признанные квалификации и допуски классификационных обществ." },

  // Contacts page
  "contacts.label": { EN: "Contacts", RU: "Контакты" },
  "contacts.heroTitle": { EN: "Request a survey or get in touch.", RU: "Закажите обследование или свяжитесь с нами." },
  "contacts.heroDesc": { EN: "Available 24/7 worldwide — typical response within hours, mobilisation within 24h.", RU: "Доступны 24/7 по всему миру — типичный ответ в течение нескольких часов, мобилизация в течение 24 часов." },
  "contacts.available": { EN: "Available 24/7", RU: "Доступны 24/7" },
  "contacts.companyName": { EN: "Tehnomet Survey OÜ", RU: "Tehnomet Survey OÜ" },
  "contacts.companyDesc": { EN: "Ship Repair & Hull Inspection", RU: "Судоремонт и инспекция корпусов" },
  "contacts.phone": { EN: "Phone", RU: "Телефон" },
  "contacts.email": { EN: "Email", RU: "Эл. почта" },
  "contacts.address": { EN: "Address", RU: "Адрес" },
  "contacts.hours": { EN: "Hours", RU: "Часы работы" },
  "contacts.hoursValue": { EN: "24 / 7 · Worldwide", RU: "24 / 7 · Весь мир" },
  "contacts.formTitle": { EN: "Send us your request", RU: "Отправьте нам запрос" },
  "contacts.formDesc": { EN: "All fields help us respond faster with the right information.", RU: "Все поля помогают нам быстрее ответить с нужной информацией." },
  "contacts.firstName": { EN: "First Name", RU: "Имя" },
  "contacts.lastName": { EN: "Last Name", RU: "Фамилия" },
  "contacts.company": { EN: "Company", RU: "Компания" },
  "contacts.emailField": { EN: "Email", RU: "Эл. почта" },
  "contacts.phoneField": { EN: "Phone", RU: "Телефон" },
  "contacts.serviceRequired": { EN: "Service Required", RU: "Требуемая услуга" },
  "contacts.selectService": { EN: "Select a service…", RU: "Выберите услугу…" },
  "contacts.vesselField": { EN: "Vessel Name & Current Port", RU: "Название судна и текущий порт" },
  "contacts.detailsLabel": { EN: "Details & Urgency", RU: "Детали и срочность" },
  "contacts.detailsPlaceholder": { EN: "Type of inspection, vessel type, timing, ETA at port…", RU: "Тип инспекции, тип судна, сроки, ETA в порт…" },
  "contacts.sendRequest": { EN: "Send Request", RU: "Отправить запрос" },
  "contacts.sending": { EN: "Sending…", RU: "Отправка…" },
  "contacts.toastTitle": { EN: "Request received", RU: "Запрос получен" },
  "contacts.toastDesc": { EN: "Thank you. Our team will contact you within a few hours.", RU: "Спасибо. Наша команда свяжется с вами в течение нескольких часов." },
  "contacts.service.ndt": { EN: "Non-Destructive Testing (NDT)", RU: "Неразрушающий контроль (НК)" },
  "contacts.service.utm": { EN: "Ultrasonic Thickness Measurement (UTM)", RU: "Ультразвуковая толщинометрия (УЗТ)" },
  "contacts.service.steel": { EN: "Steel Renewal Supervision", RU: "Надзор за заменой стали" },
  "contacts.service.class": { EN: "Class Survey Support", RU: "Поддержка классификационных освидетельствований" },
  "contacts.service.repair": { EN: "Repair Specification", RU: "Ремонтные спецификации" },
  "contacts.service.other": { EN: "Other / Multiple", RU: "Другое / Несколько" },

  // Our Values
  "nav.values": { EN: "Our Values", RU: "Наши ценности" },
  "values.label": { EN: "Our Values", RU: "Наши ценности" },
  "values.heroTitle": { EN: "What we stand for.", RU: "Наши принципы." },
  "values.people.title": { EN: "Focus on People", RU: "Внимание к людям" },
  "values.people.subtitle": { EN: "Recognition and Respect", RU: "Признание и уважение" },
  "values.people.1": { EN: "We see and appreciate each person", RU: "Мы видим и ценим каждого человека" },
  "values.people.2": { EN: "We trust colleagues and partners", RU: "Мы доверяем коллегам и партнёрам" },
  "values.people.3": { EN: "We hear each other and listen to each other", RU: "Мы слышим и слушаем друг друга" },
  "values.people.4": { EN: "We support each other", RU: "Мы поддерживаем друг друга" },
  "values.reliability.title": { EN: "Reliability", RU: "Надёжность" },
  "values.reliability.subtitle": { EN: "Responsibility and Competence", RU: "Ответственность и компетентность" },
  "values.reliability.1": { EN: "We fulfil our commitments", RU: "Мы выполняем свои обязательства" },
  "values.reliability.2": { EN: "We are responsible for our actions", RU: "Мы несём ответственность за свои действия" },
  "values.reliability.3": { EN: "We meet expectations", RU: "Мы оправдываем ожидания" },
  "values.efficiency.title": { EN: "Efficiency", RU: "Эффективность" },
  "values.efficiency.subtitle": { EN: "Spend Minimum – Reach Maximum", RU: "Минимум затрат – максимум результата" },
  "values.efficiency.1": { EN: "We plan our work", RU: "Мы планируем нашу работу" },
  "values.efficiency.2": { EN: "We conserve the resources entrusted to us", RU: "Мы бережём доверенные нам ресурсы" },
  "values.efficiency.3": { EN: "We improve processes", RU: "Мы совершенствуем процессы" },
  "values.development.title": { EN: "Development", RU: "Развитие" },
  "values.development.subtitle": { EN: "Growth and Progress", RU: "Рост и прогресс" },
  "values.development.1": { EN: "We contribute to the development of our employees", RU: "Мы способствуем развитию наших сотрудников" },
  "values.development.2": { EN: "We are open to finding the best solutions", RU: "Мы открыты к поиску лучших решений" },
  "values.development.3": { EN: "We modernize technologies", RU: "Мы модернизируем технологии" },
  "values.development.4": { EN: "We can change the future", RU: "Мы можем изменить будущее" },
  "values.development.5": { EN: "We take care of the environment", RU: "Мы заботимся об окружающей среде" },

  // Footer
  "footer.tagline": { EN: "Be Aware. Be Confident. Be Safe. Marine vessel inspection trusted by ship owners worldwide since 1998.", RU: "Осведомлённость. Уверенность. Безопасность. Инспекция морских судов, которой доверяют судовладельцы по всему миру с 1998 года." },
  "footer.pages": { EN: "Pages", RU: "Страницы" },
  "footer.services": { EN: "Services", RU: "Услуги" },
  "footer.contact": { EN: "Contact", RU: "Контакты" },
  "footer.rights": { EN: "All rights reserved.", RU: "Все права защищены." },
  "footer.motto": { EN: "Be Aware · Be Confident · Be Safe", RU: "Осведомлённость · Уверенность · Безопасность" },
  "footer.service.ndt": { EN: "Non-Destructive Testing (NDT)", RU: "Неразрушающий контроль (НК)" },
  "footer.service.utm": { EN: "Ultrasonic Thickness Measurement", RU: "Ультразвуковая толщинометрия" },
  "footer.service.steel": { EN: "Steel Renewal Supervision", RU: "Надзор за заменой стали" },
  "footer.service.class": { EN: "Class Surveys (IACS)", RU: "Классификационные освидетельствования (МАКО)" },
  "footer.service.repair": { EN: "Repair Specifications", RU: "Ремонтные спецификации" },
} as const;

export type TranslationKey = keyof typeof translations;

export default translations;
