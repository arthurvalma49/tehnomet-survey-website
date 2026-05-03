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
  "activities.ut.title": { EN: "Ultrasonic Testing", RU: "Ультразвуковой контроль" },
  "activities.ut.desc": { EN: "Detects internal flaws and weld defects using high-frequency sound waves.", RU: "Обнаружение внутренних дефектов и дефектов сварных швов с помощью высокочастотных звуковых волн." },
  "activities.mt.title": { EN: "Magnetic Particle", RU: "Магнитопорошковый контроль" },
  "activities.mt.desc": { EN: "Reveals surface and near-surface discontinuities in ferromagnetic materials.", RU: "Выявление поверхностных и приповерхностных несплошностей в ферромагнитных материалах." },
  "activities.pt.title": { EN: "Penetrant Testing", RU: "Капиллярный контроль" },
  "activities.pt.desc": { EN: "Identifies surface-breaking defects using capillary action of dye penetrants.", RU: "Выявление поверхностных дефектов с помощью капиллярного действия проникающих жидкостей." },
  "activities.vt.title": { EN: "Visual Inspection", RU: "Визуальный контроль" },
  "activities.vt.desc": { EN: "Systematic visual examination of welds, structures and coatings.", RU: "Систематический визуальный осмотр сварных швов, конструкций и покрытий." },
  "activities.rt.title": { EN: "Radiographic Testing", RU: "Радиографический контроль" },
  "activities.rt.desc": { EN: "X-ray and gamma-ray imaging for full volumetric weld inspection.", RU: "Рентгеновский и гамма-контроль для полной объёмной инспекции сварных швов." },
  "activities.et.title": { EN: "Eddy Current", RU: "Вихретоковый контроль" },
  "activities.et.desc": { EN: "Electromagnetic detection of surface and sub-surface flaws in conductive materials.", RU: "Электромагнитное обнаружение поверхностных и подповерхностных дефектов в проводящих материалах." },
  "activities.utm.thicknessTitle": { EN: "Thickness Mapping", RU: "Картирование толщин" },
  "activities.utm.thicknessDesc": { EN: "Precise UT thickness measurement of hull plating, frames and tanks.", RU: "Точное ультразвуковое измерение толщины обшивки корпуса, набора и танков." },
  "activities.utm.corrosionTitle": { EN: "Corrosion Analysis", RU: "Анализ коррозии" },
  "activities.utm.corrosionDesc": { EN: "Condition Monitoring Locations and corrosion rate assessment over time.", RU: "Мониторинг состояния и оценка скорости коррозии во времени." },
  "activities.utm.classTitle": { EN: "Class Surveys", RU: "Классификационные освидетельствования" },
  "activities.utm.classDesc": { EN: "Support and supervision for IACS member class surveys and certification.", RU: "Поддержка и надзор за классификационными освидетельствованиями членов МАКО." },
  "activities.utm.repairTitle": { EN: "Repair Specification", RU: "Ремонтные спецификации" },
  "activities.utm.repairDesc": { EN: "Engineering documentation and steel renewal repair specifications.", RU: "Инженерная документация и спецификации ремонта с заменой стали." },
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
