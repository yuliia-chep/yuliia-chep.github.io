/* =========================================================
   ВЕСЬ ТЕКСТ САЙТУ ТУТ.
   Редагуй лише текст у лапках. Блок en — англійська, uk — українська.
   Картинки лежать у папці assets/ і підключаються за назвою файлу.
   ========================================================= */

window.SITE = {
  contacts: {
    telegram: "https://t.me/yuliia_chep",
    telegramLabel: "@yuliia_chep",
    email: "juliashcheka@gmail.com",
    linkedin: "https://www.linkedin.com/in/yuliia-chepizhna/",
  },
  photo: "assets/photo.webp", // заміни файл assets/photo.webp на своє фото
  cv: "assets/Yuliia-Chepizhna-CV.pdf", // CV для кнопки Download CV

  /* Кольори «касет» для кейсів */
  tapes: {
    app: "#7C5CFF",
    redesign: "#FF6B9A",
    reorder: "#22B58A",
    favorites: "#F3B12E",
  },

  /* Порядок екранів у телефоні в кейсі застосунку */
  appFlow: [
    "app-01-home", "app-02-search", "app-03-product", "app-04-lists-sheet", "app-05-cart",
    "app-06-orders", "app-07-payment", "app-08-summary", "app-09-thank-you", "app-10-order-details",
  ],
};

window.CONTENT = {
  en: {
    nav: { work: "Work", about: "About", contact: "Contact", back: "All work", theme: "Switch theme", lang: "UA", cv: "Download CV", menu: "Menu", sound: "Sound" },

    hero: {
      name: "Yuliia Chepizhna",
      role: "Senior Product Designer",
      intro: "For 9 years I’ve been designing e-commerce, SaaS and healthcare products. In my recent team we called users guests, and that’s exactly how I design: with care, so people want to come back",
      note: "nice to meet you!",
      photoNote: "hi, it’s me",
      open: "Open to new product teams",
      cta: "Listen to my cases",
    },

    work: {
      title: "Main cases",
      period: "MAUDAU, Feb 2024 – Nov 2026",
      note: "pick a tape and press play",
      open: "Open case",
      deck: { empty: "Insert a tape", drag: "drag a tape here or tap it", loaded: "Ready to play", play: "Play", stop: "Stop", eject: "Eject", load: "Load tape" },
    },

    cases: {
      app: {
        side: "MAUDAU, iOS and Android",
        title: "A mobile app from zero",
        tagline: "From my own vision of the app to a concept approved as the final one",
        metric: "5% → 51%",
        metricLabel: "of active guests use the app after one year, against a 30% forecast",
        short: "app share of active guests",
      },
      redesign: {
        side: "MAUDAU, web",
        title: "Website redesign",
        tagline: "Two concepts, 11 guest interviews and one clear winner",
        metric: "8.55 / 10",
        metricLabel: "average guest score for my concept, against 7.41 for the alternative",
        short: "guest score vs 7.41",
      },
      reorder: {
        side: "MAUDAU, web and app",
        title: "Reorder in one tap",
        tagline: "Four entry points, an A/B test and one final tweak",
        metric: "+30%",
        metricLabel: "conversion to repeat orders",
        short: "repeat order conversion",
      },
      favorites: {
        side: "MAUDAU, web and app",
        title: "Favorite lists",
        tagline: "From a passive heart icon to a shopping planner",
        metric: "+23%",
        metricLabel: "more products added to favorites",
        short: "more items in favorites",
      },
    },

    caseLabels: {
      context: "Context",
      role: "My role",
      process: "How it went",
      solution: "Main flow",
      result: "Result",
      learned: "What I learned",
      quotes: "What guests said",
      next: "Next case",
      nextHint: "Slide the next tape into the player and press Play, or just open the case",
    },

    caseApp: {
      context: "At MAUDAU, a Ukrainian marketplace, most guests shopped from mobile devices. Competitors were already ahead with dedicated apps, while our own wasn’t on the roadmap yet. The business needed a direct line to guests: push notifications for promos, smooth order tracking, and stronger retention",
      role: "Took over the early-stage mobile app initiative, created the winning concept adopted by stakeholders, and led the mobile design direction going forward",
      steps: [
        { t: "Concept", d: "Clean, focused, and clutter-free. Smart home screen widgets, like real-time order tracking, bring the essentials right to your fingertips" },
        { t: "Alpha test", d: "Together with two designers, I ran internal alpha testing across three channels: in-person usability sessions on a multi-vendor checkout flow, a team-wide survey, and an open feedback chat. Combining deep qualitative testing with company-wide input, we gathered 242 actionable insights" },
        { t: "Into the roadmap", d: "Beyond quick cosmetic fixes from user feedback, we packaged the research into 20 core proposals across the flow. The immediate priority was bridging the gap between web and mobile—shipping Favorites, a personal account, and transparent order tracking first" },
      ],
      quotes: [
        "The delivery widget is a really cool thing. I love it, just wow",
        "I like that my contact details filled in right away and I can tap through to them",
        "It’s great that you can find a Nova Poshta branch by street name",
      ],
      notes: [
        "Quick repeat of frequent baskets straight from the home screen",
        "Real-time delivery status right at your fingertips without extra clicks",
        "Custom lists to organize recurring essentials and track discounts",
        "Clean, frictionless flow for orders from different vendors in one cart",
      ],
      flowHint: "",
      flowHintTouch: "use the arrows or swipe to browse the screens",
      result: "The app’s share of active guests jumped from 5% to over 51% in under a year, beating our 30% forecast by month six. Best of all, during user interviews, guests consistently mentioned the app as their go-to way to shop",
      learned: "Take ownership when you have a clear vision, even without a formal brief. I know I can turn an initiative from zero into a high-impact product—and this project proved just how much I thrive on mobile design",
    },

    caseRedesign: {
      context: "The website had grown with the business, and its design no longer kept up: parts of the interface felt dated, some flows were hard to use, and guest feedback kept pointing at the same issues. Leadership asked for a fresh visual direction, so we prepared concepts quickly, alongside the main roadmap",
      goal: "Goal: a modern style that stands out from competitors and stays comfortable for shopping. Hypothesis: retro-futurism would do it best",
      role: "The team explored two design directions. After validating both through customer interviews, stakeholders chose my concept for production",
      research: "11 interviews of about 45 minutes with guests aged 25 to 50 who shop once or twice a month. We walked through both versions on four key pages and asked guests to rate looks and usability from 1 to 10. 580 insights in total",
      compareHint: "drag to compare",
      pages: { home: "Home", listing: "Listing", product: "Product", cart: "Cart" },
      scoresTitle: "Average guest score, 1 to 10",
      scoreRows: { visual: "UI", usability: "UX", overall: "Overall" },
      versionA: "Version A",
      versionB: "Version B, mine",
      quotes: [
        "The second one is more modern",
        "Nice colours, easy on the eyes",
        "Simpler and more convenient here",
      ],
      next: "Together with another designer I refined version B with feedback from guests and stakeholders. This is the final home page. The release was then paused due to changes in the company",
      finalNote: "final iteration",
      learned: "Testing a visual direction with real guests turns subjective debates into confident decisions",
    },

    caseReorder: {
      context: "Guests often buy the same items again, yet rebuilding recurring carts from scratch created unnecessary friction",
      role: "Partnering with the PO, I mapped out the web and mobile experience: four clear entry points paired with in-context nudges to onboard guests smoothly",
      entries: [
        { img: "re-web-01", t: "Empty cart", d: "Instead of a dead end, guests see their previous orders with a Repeat button" },
        { img: "re-web-02", t: "My orders", d: "Repeat any order straight from the list" },
        { img: "re-web-03", t: "Order details", d: "Quickly re-add a favorite item from a past order" },
        { img: "re-web-04", t: "Home pop-up", d: "A familiar set of products? Repeat the whole order, or later" },
      ],
      mobileShots: ["Mobile: empty cart with previous orders", "Mobile: only available items are added"],
      iterTitle: "How the A/B test went",
      iter: [
        { t: "First test", d: "With a big tutorial pop-up, the share of repeat orders grew by about 40% and their average value by about 29%" },
        { t: "A closer look", d: "Overall conversion dipped. The real cause was out-of-stock products, and the blocking tutorial added an extra step" },
        { t: "Simpler", d: "We removed the big tutorial and kept only small hints next to the Repeat buttons" },
      ],
      result: "+30% conversion to repeat orders in an A/B test, with the average repeat order value 28% above the platform average",
      resultNote: "While the PO and data analysts ran the tests, we analyzed the results collaboratively to define our next design steps",
      learned: "A drop in metrics isn’t automatically a design flaw. Dig for the root cause before rushing to roll back a feature",
    },

    caseFavorites: {
      context: "Favorites used to be just a flat list of liked items, but we believed flexible, custom lists would help guests assemble larger, multi-item baskets with ease",
      role: "I designed the lists experience for web and app: custom named lists, public link sharing, bulk cart actions, price and stock alerts, and flexible grid/list views",
      feedback: "Early feedback revealed that the default product cards felt clunky for quick scanning, so we introduced a compact list view. Everyone browses differently, and the layout should adapt to their habits",
      idea: "Lists work as wishlists too: create a birthday list, describe what you’d love and share it with friends or in a blog post",
      notes: [
        "named lists for every occasion",
        "a wishlist you can share",
        "watch prices and stock",
      ],
      result: "23% more products added to favorites",
      learned: "Customer reviews are an underrated research channel if you listen closely. We built a solid, validated foundation—setting the feature up to scale with targeted marketing",
    },

    more: {
      title: "More from my desk",
      note: "smaller things I’m proud of",
      pet: {
        tab: "a team idea, just for fun",
        title: "Pet scanner",
        text: "A playful easter egg we built for pet lovers: scan your pet with the in-app barcode reader to generate a playful product card. You get a “Tail of the Year” badge, funny specs, and a “Priceless” tag—with instant options to share the card, donate to an animal shelter, or grab some treats",
        note: "starring my dog",
      },
      b2b: {
        tab: "back office",
        title: "Behind the storefront",
        text: "A significant part of my work happened behind the scenes: internal admin tools and the merchant portal. I shadowed marketing, customer support, B2B, and commercial teams to unpack their daily workflows—translating those needs into a merchant dashboard, order management, moderation pipelines, stop lists, and flexible promo mechanics",
        highlight: "A standout story in speed and execution: I designed the National Cashback payment flow in a single day, the engineering team shipped it within a week, and we became the first online retailer to support it when state winter aid rolled out",
      },
      earlier: {
        tab: "earlier work",
        title: "Before MAUDAU",
        items: [
          { t: "FuseBase", p: "Jan 2023 – Feb 2024", d: "Redesign of a team collaboration SaaS, still in production", link: "https://www.behance.net/gallery/188218925/Nimbus-Note-to-FuseBase", linkText: "View on Behance" },
          { t: "Awesomic", p: "Mar 2022 – Feb 2023", d: "Several projects at once, working directly with clients around the world" },
          { t: "Zakaz.ua", p: "Nov 2021 – Apr 2022", d: "UX research for grocery delivery: interviews, personas and journey maps" },
          { t: "DOIT Software", p: "Feb 2020 – Oct 2021", d: "Headache Calendar, a medical app created with neurologists for a client in Norway, rated 4.7", link: "https://www.behance.net/gallery/121711975/UIUX-Recording-headaches-app", linkText: "View on Behance" },
        ],
      },
    },

    about: {
      title: "About me",
      text: [
        "I’ve been a product designer for 9 years, across e-commerce, foodtech, healthcare and SaaS. I genuinely love what I do, even the tricky parts with 27 stakeholder comments",
      ],
      journeyTitle: "How I move a task to release",
      journey: [
        { t: "Pick it up", d: "Take a task from the roadmap together with the PO" },
        { t: "Clarify", d: "Talk to stakeholders and agree on requirements" },
        { t: "Sketch a first version", d: "Discuss it with the PO" },
        { t: "Polish", d: "Refine the design and present it to stakeholders" },
        { t: "Hand off", d: "Support developers" },
        { t: "Release", d: "Demo the result to stakeholders and ship it" },
      ],
      journeyLoop: "When a task needs it, we talk to guests before designing or run usability tests after",
      valuesTitle: "What I stand for",
      values: [
        { t: "Human first", d: "Every decision starts with the person behind the screen, guided by honest collaboration and the genuine care of hands-on craft" },
        { t: "Data-driven", d: "Taste starts the conversation, but research and real user metrics make the final call" },
        { t: "Value for both", d: "A great product genuinely solves human problems while driving sustainable business growth" },
      ],
      lookingTitle: "What I’m looking for",
      looking: "A product that makes people’s lives better and a team I can grow with",
      domains: ["E-commerce", "Foodtech", "Healthcare", "SaaS", "Pet care"],
      domainNote: "would love to try",
    },

    recs: {
      title: "Kind words",
      items: [
        { q: "She played a pivotal role in my career journey. From conducting my very first interviews to becoming a trusted teammate, she made the entire process incredibly smooth and comfortable.", who: "Daria Nevmyvaka", role: "Product Designer" },
        { q: "Yulia has a great talent for creating beautiful and user-friendly designs. She’s not just skilled but also a great team player. She communicates well and is open to feedback.", who: "Igor Remeniuk", role: "Product and design lead, managed Yuliia" },
      ],
      more: "Read on LinkedIn",
    },

    contact: {
      title: "Let’s build something great together!",
      text: "Have a product idea in mind or looking for a designer to join your team? Let’s talk",
      telegram: "Telegram",
      email: "Email",
      linkedin: "LinkedIn",
      footer: "Designed with care, built with Claude",
    },
  },

  uk: {
    nav: { work: "Кейси", about: "Про мене", contact: "Контакти", back: "Усі кейси", theme: "Змінити тему", lang: "EN", cv: "Завантажити CV", menu: "Меню", sound: "Звук" },

    hero: {
      name: "Юлія Чепіжна",
      role: "Senior Product Designer",
      intro: "Понад 9 років проєктую продукти для e-commerce, SaaS та healthcare. У попередній команді ми звикли називати користувачів гостями. Це і є основа мого підходу: створювати досвід із такою турботою, щоб до продукту хотілося повертатися",
      note: "приємно познайомитися!",
      photoNote: "привіт, це я",
      open: "Відкрита до нових продуктових команд",
      cta: "Послухати кейси",
    },

    work: {
      title: "Головні кейси",
      period: "MAUDAU, лютий 2024 – листопад 2026",
      note: "обери касету і тисни play",
      open: "Відкрити кейс",
      deck: { empty: "Встав касету", drag: "перетягни касету сюди або тапни по ній", loaded: "Готово до запуску", play: "Play", stop: "Стоп", eject: "Вийняти", load: "Вставити касету" },
    },

    cases: {
      app: {
        side: "MAUDAU, iOS і Android",
        title: "Мобільний застосунок з нуля",
        tagline: "Від мого бачення застосунку до концепту, який затвердили як фінальний",
        metric: "5% → 51%",
        metricLabel: "активних гостей користуються застосунком через рік, хоча прогнозували 30%",
        short: "частка застосунку серед активних гостей",
      },
      redesign: {
        side: "MAUDAU, веб",
        title: "Редизайн сайту",
        tagline: "Два концепти, 11 інтерв’ю з гостями і явний переможець",
        metric: "8,55 / 10",
        metricLabel: "середня оцінка гостей мого концепту проти 7,41 альтернативного",
        short: "оцінка гостей проти 7,41",
      },
      reorder: {
        side: "MAUDAU, веб і застосунок",
        title: "Повторне замовлення в один клік",
        tagline: "Чотири точки входу, A/B-тест і фінальне доопрацювання",
        metric: "+30%",
        metricLabel: "конверсії в повторне замовлення",
        short: "конверсія в повторне замовлення",
      },
      favorites: {
        side: "MAUDAU, веб і застосунок",
        title: "Списки обраного",
        tagline: "Від простої іконки «сердечка» до планувальника покупок",
        metric: "+23%",
        metricLabel: "більше товарів додають в обране",
        short: "більше товарів в обраному",
      },
    },

    caseLabels: {
      context: "Контекст",
      role: "Моя роль",
      process: "Як це було",
      solution: "Основний флоу",
      result: "Результат",
      learned: "Чого я навчилася",
      quotes: "Що казали гості",
      next: "Наступний кейс",
      nextHint: "Встав наступну касету в плеєр і натисни Play або просто відкрий кейс",
    },

    caseApp: {
      context: "Більшість гостей українського маркетплейсу MAUDAU замовляли з телефонів. У конкурентів давно працювали власні застосунки, тоді як наш навіть не потрапив до роудмапу. Проте бізнесу був потрібен прямий контакт із гостем: пуш-сповіщення про акції, зручне відстеження замовлень і утримання аудиторії",
      role: "Підхопила ініціативу створення мобільного застосунку на ранньому етапі, розробила фінальну концепцію, затверджену стейкхолдерами, і надалі очолила напрям мобільного дизайну в компанії",
      steps: [
        { t: "Концепт", d: "Легкий і чистий інтерфейс без зайвого шуму. Контекстні віджети на головній (наприклад, статус доставки) тримають найважливіше під рукою — в один клік" },
        { t: "Альфа-тест", d: "Разом із двома колегами-дизайнерами я організувала альфа-тестування всередині компанії. Ми поєднали офлайн-сесії (де тестували замовлення товарів у кількох продавців), опитування команди та спільний чат для збору відгуків. Цей мікс якісних і кількісних даних дав нам 242 цінні інсайти" },
        { t: "У роудмап", d: "Окрім швидких дрібних правок за відгуками, ми структурували результати у 20 системних рішень для всього флоу. Наступним великим кроком стало вирівнювання досвіду між вебом і застосунком: спершу ми запустили Обране, особистий кабінет і детальний трекінг замовлень" },
      ],
      quotes: [
        "Віджет доставки дуже прикольна штука, мені подобається, прям вау",
        "Подобається, що контакти оформилися одразу й можу на них перейти",
        "Класно, що можна шукати відділення НП по вулиці",
      ],
      notes: [
        "Швидкий повтор кошика прямо з головного екрана",
        "Статус доставки в реальному часі без зайвих переходів",
        "Списки покупок для регулярних товарів та відстеження знижок",
        "Зручне оформлення товарів від різних продавців в одному кошику",
      ],
      flowHint: "",
      flowHintTouch: "гортай екрани стрілками або свайпом",
      result: "Частка застосунку серед активних гостей злетіла з 5% до понад 51% менш ніж за рік, перевершивши прогноз у 30% уже на шостому місяці. А на інтерв’ю гості все частіше відзначали застосунок як свій основний і найулюбленіший спосіб покупок",
      learned: "Брати відповідальність, коли бачиш рішення, навіть якщо немає чіткого брифу. Тепер я точно знаю, що можу підняти складний продукт із нуля, а ще — наскільки сильно мене драйвить дизайн мобільних застосунків",
    },

    caseRedesign: {
      context: "Сайт ріс разом із бізнесом, і дизайн уже не встигав за ним: частина інтерфейсу виглядала застаріло, деякі сценарії були незручними, а відгуки гостей раз у раз вказували на ті самі проблеми. Керівництво попросило запропонувати новий візуальний напрямок, тож ми швидко підготували концепти паралельно з основним роудмапом",
      goal: "Мета: сучасний стиль, який виділяється серед конкурентів і лишається зручним для покупок. Гіпотеза: найкраще з цим впорається ретро-футуризм",
      role: "Команда розглядала два дизайн-напрями. Ми спершу перевірили обидва варіанти на інтерв’ю з гостями, і на основі результатів стейкхолдери обрали мій концепт",
      research: "11 інтерв’ю приблизно по 45 хвилин з гостями від 25 до 50 років, які купують раз-два на місяць. Ми показували гостям обидві версії на чотирьох ключових сторінках і просили оцінити вигляд і зручність від 1 до 10. Разом вийшло 580 інсайтів",
      compareHint: "потягни, щоб порівняти",
      pages: { home: "Головна", listing: "Лістинг", product: "Товар", cart: "Кошик" },
      scoresTitle: "Середня оцінка гостей, від 1 до 10",
      scoreRows: { visual: "Візуал", usability: "Зручність", overall: "Загалом" },
      versionA: "Версія A",
      versionB: "Версія B, моя",
      quotes: [
        "Друга більш сучасна",
        "По кольорах краще, око не ріже",
        "Тут простіше і зручніше",
      ],
      next: "Разом з іншим дизайнером ми доопрацювали версію B з урахуванням фідбеку гостей і стейкхолдерів. Ось фінальна головна. Далі реліз призупинили через зміни в компанії",
      finalNote: "фінальна ітерація",
      learned: "Тестування візуального стилю на реальних гостях перетворює суб’єктивні суперечки про смаки на впевнені бізнес-рішення",
    },

    caseReorder: {
      context: "Гості часто купують звичні товари, проте збирання повторного кошика з нуля забирало зайвий час і зусилля",
      role: "У парі з PO я розробила сценарій для вебу та мобайлу: чотири точки входу й точкові підказки, які допомагають гостям швидко освоїти новий функціонал",
      entries: [
        { img: "re-web-01", t: "Порожній кошик", d: "Замість глухого кута гість бачить попередні замовлення з кнопкою «Повторити»" },
        { img: "re-web-02", t: "Мої замовлення", d: "Повторити будь-яке замовлення прямо зі списку" },
        { img: "re-web-03", t: "Деталі замовлення", d: "Швидко додати в кошик улюблений товар із минулого замовлення" },
        { img: "re-web-04", t: "Поп-ап на головній", d: "Знайомий набір товарів? Повтори замовлення повністю або іншим разом" },
      ],
      mobileShots: ["Мобільна версія: порожній кошик з попередніми замовленнями", "Мобільна версія: додаємо лише наявні товари"],
      iterTitle: "Як пройшов A/B-тест",
      iter: [
        { t: "Перший тест", d: "Із великим поп-апом на головній частка повторних замовлень зросла приблизно на 40%, а їхній середній чек — приблизно на 29%" },
        { t: "Деталі", d: "Загальна конверсія просіла. Справжньою причиною були товари не в наявності, а навчальний поп-ап, що перекривав екран, додавав зайвий крок" },
        { t: "Спрощення", d: "Ми прибрали великий поп-ап і залишили лише маленькі підказки біля кнопок «Повторити»" },
      ],
      result: "+30% конверсії в повторне замовлення в A/B-тесті, а середній чек повторного кошика — на 28% вищий за середній на платформі",
      resultNote: "Поки PO та аналітики проводили тестування, ми разом розбирали результати й спільно визначали наступні кроки для дизайну",
      learned: "Просідання метрик — це не завжди промах у дизайні. Важливо знайти першопричину, перш ніж поспішати з відкочуванням релізу",
    },

    caseFavorites: {
      context: "«Обране» було просто звичайним списком товарів під сердечком, проте ми вірили: тематичні списки допоможуть гостям легше збирати комплексні кошики",
      role: "Я спроєктувала списки для вебу й застосунку: тематичні добірки з власними назвами, шеринг за посиланням, масові дії з товарами, трекінг цін і залишків, а також перемикання між сіткою та списком",
      feedback: "Перші відгуки показали, що звичні картки незручні для швидкого скролу, тому ми додали компактний вигляд списком. Користувачі мають різні патерни перегляду, і інтерфейс повинен підлаштовуватися під їхні звички",
      idea: "Списки працюють і як вішлісти: створи список на день народження, опиши, що хочеш, і поділися ним із друзями чи в блозі",
      notes: [
        "іменовані списки на будь-який привід",
        "вішліст, яким можна поділитися",
        "стеження за ціною і наявністю",
      ],
      result: "На 23% більше товарів додають в обране",
      learned: "Відгуки до замовлень — це повноцінне джерело досліджень, якщо вчитуватися в деталі. Ми заклали надійну основу, підготувавши функціонал до масштабування разом із маркетингом",
    },

    more: {
      title: "Ще з моєї практики",
      note: "менші проєкти, якими я пишаюся",
      pet: {
        tab: "ідея команди just for fun",
        title: "Пет-сканер",
        text: "Пасхалка для пет-батьків від нашої команди: наводиш сканер штрихкодів у застосунку на пухнастого й отримуєш жартівливу картку товару. Там і відзнака «Хвостик року», і кумедні характеристики, і цінник «Безцінно». Звідти можна поділитися карткою, задонатити притулку чи одразу замовити смаколики",
        note: "у головній ролі мій пес",
      },
      b2b: {
        tab: "бекофіс",
        title: "За лаштунками вітрини",
        text: "Значна частина моєї роботи залишалася за лаштунками — у внутрішній адмінці та мерчант-центрі. Я тісно взаємодіяла з маркетингом, підтримкою, B2B та комерційним відділом, вивчаючи їхні щоденні процеси, і перетворювала ці інсайти на зручні робочі столи продавців, процесинг замовлень, стоп-листи, модерацію товарів і нові промомеханіки",
        highlight: "Один із моїх улюблених прикладів швидкої доставки цінності: флоу оплати карткою «Національний кешбек» я спроєктувала за день, розробка запустила реліз за тиждень, і ми стали першим ритейлером, який приймав ці виплати зі старту державної зимової допомоги",
      },
      earlier: {
        tab: "попередні проєкти",
        title: "До MAUDAU",
        items: [
          { t: "FuseBase", p: "січень 2023 – лютий 2024", d: "Редизайн SaaS-платформи для командної роботи, досі в продакшні", link: "https://www.behance.net/gallery/188218925/Nimbus-Note-to-FuseBase", linkText: "Дивитися на Behance" },
          { t: "Awesomic", p: "березень 2022 – лютий 2023", d: "Кілька проєктів одночасно і робота напряму з клієнтами з усього світу" },
          { t: "Zakaz.ua", p: "листопад 2021 – квітень 2022", d: "UX-дослідження для доставки продуктів: інтерв’ю, персони і CJM" },
          { t: "DOIT Software", p: "лютий 2020 – жовтень 2021", d: "Headache Calendar, медичний застосунок, створений разом з неврологами для клієнта з Норвегії, рейтинг 4,7", link: "https://www.behance.net/gallery/121711975/UIUX-Recording-headaches-app", linkText: "Дивитися на Behance" },
        ],
      },
    },

    about: {
      title: "Про мене",
      text: [
        "У продуктовому дизайні я вже 9 років: працювала в e-commerce, foodtech, healthcare та SaaS. Щиро люблю свою справу — навіть ті моменти, коли на макет прилітає 27 коментарів від стейкхолдерів",
      ],
      journeyTitle: "Як я веду задачу до релізу",
      journey: [
        { t: "Беру в роботу", d: "Разом з PO беремо задачу з роудмапу" },
        { t: "Уточнюю деталі", d: "Говорю зі стейкхолдерами і погоджую вимоги" },
        { t: "Роблю першу версію", d: "Обговорюю її з PO" },
        { t: "Вношу правки", d: "Доводжу дизайн до фіналу і презентую стейкхолдерам" },
        { t: "Передаю розробникам", d: "Супроводжую розробку" },
        { t: "Реліз", d: "Показуємо демо стейкхолдерам і запускаємо" },
      ],
      journeyLoop: "Коли задача цього потребує, ми говоримо з гостями до дизайну або проводимо юзабіліті-тести після",
      valuesTitle: "Мої принципи",
      values: [
        { t: "Людина понад усе", d: "Кожне рішення починається з людини по той бік екрана, щирої взаємодії в команді та вдумливої ручної роботи, у яку вкладено душу" },
        { t: "Аргументовані рішення", d: "Інтуїція підказує ідею, а дослідження та цифри перетворюють її на впевнене рішення" },
        { t: "Користь для обох", d: "Хороший продукт щиро допомагає людям і водночас працює на стале зростання бізнесу" },
      ],
      lookingTitle: "Що я шукаю",
      looking: "Продукт, який робить життя людей кращим, і команду, з якою можна рости",
      domains: ["E-commerce", "Foodtech", "Healthcare", "SaaS", "Pet care"],
      domainNote: "дуже хочу спробувати",
    },

    recs: {
      title: "Добрі слова",
      items: [
        { q: "She played a pivotal role in my career journey. From conducting my very first interviews to becoming a trusted teammate, she made the entire process incredibly smooth and comfortable.", who: "Daria Nevmyvaka", role: "Product Designer" },
        { q: "Yulia has a great talent for creating beautiful and user-friendly designs. She’s not just skilled but also a great team player. She communicates well and is open to feedback.", who: "Igor Remeniuk", role: "Керував роботою Юлії" },
      ],
      more: "Читати в LinkedIn",
    },

    contact: {
      title: "Створимо щось круте разом?",
      text: "Маєш ідею для продукту або шукаєш дизайнера у свою команду? Буду рада поспілкуватися",
      telegram: "Telegram",
      email: "Email",
      linkedin: "LinkedIn",
      footer: "Зроблено з турботою, зібрано з Claude",
    },
  },
};
