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
      intro: "For 9 years I’ve been designing e-commerce, SaaS and healthcare products. In my recent team we called users guests, and that’s exactly how I design: with care, so people want to come back.",
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
        tagline: "From my own vision of the app to a concept approved as the final one.",
        metric: "5% → 51%",
        metricLabel: "of active guests use the app after one year, against a 30% forecast",
        short: "app share of active guests",
      },
      redesign: {
        side: "MAUDAU, web",
        title: "Website redesign",
        tagline: "Two concepts, 11 guest interviews and one clear winner.",
        metric: "8.55 / 10",
        metricLabel: "average guest score for my concept, against 7.41 for the alternative",
        short: "guest score vs 7.41",
      },
      reorder: {
        side: "MAUDAU, web and app",
        title: "Reorder in one tap",
        tagline: "Four entry points, an A/B test and one honest iteration.",
        metric: "+30%",
        metricLabel: "conversion to repeat orders",
        short: "repeat order conversion",
      },
      favorites: {
        side: "MAUDAU, web and app",
        title: "Favorite lists",
        tagline: "From a passive heart icon to a shopping planner.",
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
      nextHint: "Slide the next tape into the player and press Play, or just open the case.",
    },

    caseApp: {
      context: "MAUDAU is a Ukrainian marketplace. Most guests shopped from their phones and competitors already had apps, but ours wasn’t even on the roadmap. The business needed push notifications for promos, easier order tracking and a closer relationship with guests.",
      role: "Another designer started the concept first, but it didn’t land. I joined, my concept became the final one, and then I led the mobile direction in the company.",
      steps: [
        { t: "Concept", d: "Fresh, clean and calm, with no extra noise. Useful widgets on the home screen, like live order tracking, put the most important things one tap away." },
        { t: "Alpha test", d: "With two other designers I ran offline usability tests with colleagues who had never seen the app, plus a survey. The task: find and order three products from different sellers. 21 participants, 242 insights." },
        { t: "Into the roadmap", d: "We turned the findings into 20 proposals across the whole flow. Favorites and a personal account with detailed order tracking shipped next." },
      ],
      quotes: [
        "The delivery widget is a really cool thing. I love it, just wow.",
        "I like that my contact details filled in right away and I can tap through to them.",
        "It’s great that you can find a Nova Poshta branch by street name.",
      ],
      notes: [
        "Order status right on the home screen",
        "Price, delivery and reviews in one scroll",
        "One cart for several sellers, with a clear split into orders",
        "Track every parcel without calling support",
      ],
      flowHint: "tap the screen to pause and scroll",
      result: "The app’s share of active guests grew from 5% to over 51% in under a year and passed the 30% forecast by month six. In interviews, guests kept telling me they order through the app.",
      learned: "Step in when you have a vision, even if the task isn’t yours. I can pick up a project from zero, and I’m sure now: I love designing apps.",
    },

    caseRedesign: {
      context: "The website had grown with the business, and its design no longer kept up: parts of the interface felt dated, some flows were hard to use, and guest feedback kept pointing at the same issues. Leadership asked for a fresh visual direction, so we prepared concepts quickly, alongside the main roadmap.",
      goal: "Goal: a modern style that stands out from competitors and stays comfortable for shopping. Hypothesis: retro-futurism would do it best.",
      role: "Two designers prepared their own concepts. After a review, stakeholders chose mine, version B, and then we validated it with guests.",
      research: "11 interviews of about 45 minutes with guests aged 25 to 50 who shop once or twice a month. We walked through both versions on four key pages and asked guests to rate looks and usability from 1 to 10. 580 insights in total.",
      compareHint: "drag to compare",
      pages: { home: "Home", listing: "Listing", product: "Product", cart: "Cart" },
      scoresTitle: "Average guest score, 1 to 10",
      scoreRows: { visual: "Looks", usability: "Usability", overall: "Overall" },
      versionA: "Version A",
      versionB: "Version B, mine",
      quotes: [
        "The second one is more modern.",
        "Nice colours, easy on the eyes.",
        "Simpler and more convenient here.",
      ],
      next: "Together with another designer I refined version B with feedback from guests and stakeholders. This is the final home page. The release was then paused due to changes in the company.",
      finalNote: "final iteration",
      learned: "Testing a visual direction with real guests turns a debate about taste into a decision.",
    },

    caseReorder: {
      context: "Many guests buy the same things again and again, but rebuilding a cart from scratch took time.",
      role: "Together with the PO, I designed the flow for web and app: four entry points and hints that teach the feature in context.",
      entries: [
        { img: "re-web-01", t: "Empty cart", d: "Instead of a dead end, guests see their previous orders with a Repeat button." },
        { img: "re-web-02", t: "My orders", d: "Repeat any order straight from the list." },
        { img: "re-web-03", t: "Order details", d: "Bring back a single product you liked last time." },
        { img: "re-web-04", t: "Home pop-up", d: "A familiar set of products? Repeat the whole order, or later." },
      ],
      iterTitle: "How the A/B test went",
      iter: [
        { t: "First test", d: "With a big tutorial pop-up, the share of repeat orders grew by about 40% and their average value by about 29%." },
        { t: "A closer look", d: "Overall conversion dipped. The real cause was out-of-stock products, and the blocking tutorial added an extra step." },
        { t: "Simpler", d: "We removed the big tutorial and kept only small hints next to the Repeat buttons." },
      ],
      result: "+30% conversion to repeat orders in an A/B test with over 100,000 users, and an average repeat order 28% above the platform average.",
      resultNote: "Tests were run by the PO and analysts. I reviewed the reports with the team and we decided on next steps together.",
      learned: "A dip in metrics isn’t always about design. Find the real cause before rolling a feature back.",
    },

    caseFavorites: {
      context: "Favorites was a passive list of hearts, and in the alpha test guests missed proper lists most of all.",
      role: "I designed lists for web and app: named lists, sharing by link, bulk actions, watching prices and stock, plus grid and list views.",
      feedback: "After the first release, guests wrote in order reviews that the cards were inconvenient, so we added a second view. People browse differently, and the layout should let them.",
      idea: "Lists work as wishlists too: create a birthday list, describe what you’d love and share it with friends or in a blog post.",
      notes: [
        "named lists for every occasion",
        "a wishlist you can share",
        "watch prices and stock",
      ],
      result: "23% more products added to favorites.",
      learned: "Order reviews are research too, if you read them carefully. The feature was ready to grow further with more marketing support.",
    },

    more: {
      title: "More from my desk",
      note: "smaller things I’m proud of",
      pet: {
        tab: "a team idea, just for fun",
        title: "Pet scanner",
        text: "Our team came up with a little joy for pet lovers. Point the app’s barcode scanner at your pet and get a playful product card: a “Tail of the year” badge, funny specs and a “priceless” price tag. From there you can share it, donate to an animal shelter or pick up treats.",
        note: "starring my dog",
      },
      b2b: {
        tab: "back office",
        title: "Behind the storefront",
        text: "A big part of my work happened where guests never look: admin tools and a merchant center. I spent a lot of time with marketing, the contact center, B2B and commerce teams to understand their daily routines, and turned that into a merchant grid, order management, stop lists, product moderation and new promo mechanics.",
        highlight: "One of my favourite stories: I designed payment by the National Cashback card in a day, the team shipped it within a week, and we became the first store to accept it when state winter support arrived on those cards.",
      },
      earlier: {
        tab: "earlier work",
        title: "Before MAUDAU",
        items: [
          { t: "FuseBase", p: "Jan 2023 – Feb 2024", d: "Redesign of a team collaboration SaaS, still in production.", link: "https://www.behance.net/gallery/188218925/Nimbus-Note-to-FuseBase", linkText: "View on Behance" },
          { t: "Awesomic", p: "Mar 2022 – Feb 2023", d: "Several projects at once, working directly with clients around the world." },
          { t: "Zakaz.ua", p: "Nov 2021 – Apr 2022", d: "UX research for grocery delivery: interviews, personas and journey maps." },
          { t: "DOIT Software", p: "Feb 2020 – Oct 2021", d: "Headache Calendar, a medical app created with neurologists for a client in Norway, rated 4.7.", link: "https://www.behance.net/gallery/121711975/UIUX-Recording-headaches-app", linkText: "View on Behance" },
        ],
      },
    },

    about: {
      title: "About me",
      text: [
        "I’ve been a product designer for 9 years, across e-commerce, foodtech, healthcare and SaaS. I genuinely love what I do, even the tricky parts with 27 stakeholder comments.",
      ],
      journeyTitle: "How I move a task to release",
      journey: [
        { t: "Pick it up", d: "Take a task from the roadmap together with the PO." },
        { t: "Clarify", d: "Talk to stakeholders and agree on requirements." },
        { t: "Draft", d: "Sketch a first version and discuss it with the PO." },
        { t: "Polish", d: "Refine the design and present it to stakeholders." },
        { t: "Hand off", d: "Prepare everything developers need and support them." },
        { t: "Release", d: "Demo the result to stakeholders and ship it." },
      ],
      journeyLoop: "When a task needs it, we talk to guests before designing or run usability tests after.",
      valuesTitle: "What I stand for",
      values: [
        { t: "Human first", d: "Every decision starts with the person on the other side of the screen." },
        { t: "Data-driven", d: "Taste opens the conversation, research and metrics close it." },
        { t: "Value for both", d: "A good product helps people and grows the business at the same time." },
      ],
      lookingTitle: "What I’m looking for",
      looking: "A product that makes people’s lives better and a team I can grow with.",
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
      title: "Let’s create something together!",
      text: "Got a product idea or an open role in your product team? Write to me.",
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
      intro: "Уже 9 років я проєктую продукти в e-commerce, SaaS і healthcare. У моїй нещодавній команді ми називали користувачів гостями, і саме так я підходжу до дизайну: з турботою, щоб людям хотілося повертатися.",
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
        tagline: "Від мого бачення застосунку до концепту, який затвердили як фінальний.",
        metric: "5% → 51%",
        metricLabel: "активних гостей користуються застосунком через рік, хоча прогнозували 30%",
        short: "частка застосунку серед активних гостей",
      },
      redesign: {
        side: "MAUDAU, веб",
        title: "Редизайн сайту",
        tagline: "Два концепти, 11 інтерв’ю з гостями і явний переможець.",
        metric: "8,55 / 10",
        metricLabel: "середня оцінка гостей мого концепту проти 7,41 в альтернативного",
        short: "оцінка гостей проти 7,41",
      },
      reorder: {
        side: "MAUDAU, веб і застосунок",
        title: "Повторне замовлення в один тап",
        tagline: "Чотири точки входу, A/B-тест і одна чесна ітерація.",
        metric: "+30%",
        metricLabel: "конверсії в повторне замовлення",
        short: "конверсія в повторне замовлення",
      },
      favorites: {
        side: "MAUDAU, веб і застосунок",
        title: "Списки обраного",
        tagline: "Від пасивного сердечка до планувальника покупок.",
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
      nextHint: "Встав наступну касету в плеєр і натисни Play або просто відкрий кейс.",
    },

    caseApp: {
      context: "MAUDAU — український маркетплейс. Більшість гостей купували з телефона, у конкурентів давно були застосунки, а нашого навіть не було в роудмапі. Бізнесу потрібні були пуші про акції, зручне відстеження замовлень і ближчий зв’язок з гостями.",
      role: "Першим концепт почав робити інший дизайнер, але його варіант не прижився. Я підключилася, мій концепт затвердили як фінальний, а далі я очолила мобільний напрямок у компанії.",
      steps: [
        { t: "Концепт", d: "Свіжо, чисто і спокійно, без зайвого шуму. Корисні віджети на головній, як-от живе відстеження замовлення, тримають найважливіше на відстані одного тапу." },
        { t: "Альфа-тест", d: "Разом із двома дизайнерами я провела офлайн юзабіліті-тестування з колегами, які ще не бачили застосунку, а також опитування. Завдання: знайти й замовити три товари від різних продавців. 21 учасник, 242 інсайти." },
        { t: "У роудмап", d: "Знахідки ми перетворили на 20 пропозицій по всьому флоу. Першими після тесту запустили обране та особистий кабінет з детальним відстеженням замовлення." },
      ],
      quotes: [
        "Віджет доставки дуже прикольна штука, мені подобається, прям вау.",
        "Подобається, що контакти оформилися одразу й можу на них перейти.",
        "Класно, що можна шукати відділення НП по вулиці.",
      ],
      notes: [
        "Статус замовлення одразу на головній",
        "Ціна, доставка і відгуки в одному скролі",
        "Один кошик для кількох продавців із чітким поділом на замовлення",
        "Відстеження посилки без дзвінка в підтримку",
      ],
      flowHint: "тапни по екрану, щоб зупинити і погортати",
      result: "Частка застосунку серед активних гостей зросла з 5% до понад 51% менш ніж за рік і перекрила прогноз у 30% уже на шостому місяці. На інтерв’ю гості раз у раз казали мені, що замовляють через застосунок.",
      learned: "Брати ініціативу, коли маєш бачення, навіть якщо задача не твоя. Я можу підхопити проєкт з нуля і тепер точно знаю: я люблю робити застосунки.",
    },

    caseRedesign: {
      context: "Сайт ріс разом із бізнесом, і дизайн уже не встигав за ним: частина інтерфейсу виглядала застаріло, деякі сценарії були незручними, а відгуки гостей раз у раз вказували на ті самі проблеми. Керівництво попросило запропонувати новий візуальний напрямок, тож ми швидко підготували концепти паралельно з основним роудмапом.",
      goal: "Мета: сучасний стиль, який виділяється серед конкурентів і лишається зручним для покупок. Гіпотеза: найкраще з цим впорається ретро-футуризм.",
      role: "Два дизайнери підготували свої концепти. Після обговорення стейкхолдери обрали мій, версію B, а далі ми перевірили її з гостями.",
      research: "11 інтерв’ю приблизно по 45 хвилин з гостями від 25 до 50 років, які купують раз-два на місяць. Ми показували гостям обидві версії на чотирьох ключових сторінках і просили оцінити вигляд і зручність від 1 до 10. Разом 580 інсайтів.",
      compareHint: "потягни, щоб порівняти",
      pages: { home: "Головна", listing: "Лістинг", product: "Товар", cart: "Кошик" },
      scoresTitle: "Середня оцінка гостей, від 1 до 10",
      scoreRows: { visual: "Вигляд", usability: "Зручність", overall: "Загалом" },
      versionA: "Версія A",
      versionB: "Версія B, моя",
      quotes: [
        "Друга більш сучасна.",
        "По кольорах краще, око не ріже.",
        "Тут простіше і зручніше.",
      ],
      next: "Разом з іншим дизайнером ми доопрацювали версію B з урахуванням фідбеку гостей і стейкхолдерів. Ось фінальна головна. Далі реліз призупинили через зміни в компанії.",
      finalNote: "фінальна ітерація",
      learned: "Перевірка візуального напрямку з реальними гостями перетворює суперечку про смак на рішення.",
    },

    caseReorder: {
      context: "Багато гостей купують те саме знову і знову, але збирати кошик з нуля було довго.",
      role: "Разом з PO я спроєктувала флоу для вебу і застосунку: чотири точки входу і підказки, які пояснюють фічу в контексті.",
      entries: [
        { img: "re-web-01", t: "Порожній кошик", d: "Замість глухого кута гість бачить попередні замовлення з кнопкою «Повторити»." },
        { img: "re-web-02", t: "Мої замовлення", d: "Повторити будь-яке замовлення прямо зі списку." },
        { img: "re-web-03", t: "Деталі замовлення", d: "Повернути в кошик окремий товар, який сподобався минулого разу." },
        { img: "re-web-04", t: "Поп-ап на головній", d: "Знайомий набір товарів? Повторити замовлення повністю або іншим разом." },
      ],
      iterTitle: "Як пройшов A/B-тест",
      iter: [
        { t: "Перший тест", d: "Із великим навчальним поп-апом частка повторних замовлень зросла приблизно на 40%, а їхній середній чек — приблизно на 29%." },
        { t: "Уважніше", d: "Загальна конверсія просіла. Справжньою причиною були товари не в наявності, а навчальний поп-ап, що перекривав екран, додавав зайвий крок." },
        { t: "Простіше", d: "Ми прибрали великий поп-ап і залишили лише маленькі підказки біля кнопок «Повторити»." },
      ],
      result: "+30% конверсії в повторне замовлення в A/B-тесті на понад 100 000 користувачів, а середній чек повторного замовлення на 28% вищий за середній на платформі.",
      resultNote: "Тести запускали PO та аналітики. Я разом з командою розбирала звіти, і наступні кроки ми вирішували спільно.",
      learned: "Просідання метрик не завжди про дизайн. Спершу знайди справжню причину, а вже потім вирішуй долю фічі.",
    },

    caseFavorites: {
      context: "Обране було пасивним списком сердечок, а на альфа-тесті гостям найбільше бракувало саме повноцінних списків.",
      role: "Я спроєктувала списки для вебу і застосунку: іменовані списки, можливість поділитися посиланням, масові дії, стеження за ціною і наявністю, а також вигляд сіткою і списком.",
      feedback: "Після першого релізу гості писали у відгуках до замовлень, що картки незручні, тож ми додали другий вигляд. Люди переглядають товари по-різному, і інтерфейс має це дозволяти.",
      idea: "Списки працюють і як вішлісти: створи список на день народження, опиши, що хочеш, і поділися ним із друзями чи в блозі.",
      notes: [
        "іменовані списки на будь-який привід",
        "вішліст, яким можна поділитися",
        "стеження за ціною і наявністю",
      ],
      result: "На 23% більше товарів додають в обране.",
      learned: "Відгуки до замовлень — теж дослідження, якщо читати їх уважно. Фіча була готова рости далі з більшою підтримкою маркетингу.",
    },

    more: {
      title: "Ще з мого столу",
      note: "менші проєкти, якими я пишаюся",
      pet: {
        tab: "ідея команди для настрою",
        title: "Пет-сканер",
        text: "Цю маленьку радість для власників тварин придумала наша команда. Наведи сканер штрихкодів у застосунку на свого улюбленця і отримай жартівливу картку товару: значок «Хвостик року», смішні характеристики і ціну «безцінно». А далі нею можна поділитися, задонатити на притулок або вибрати смаколики.",
        note: "у головній ролі мій пес",
      },
      b2b: {
        tab: "бекофіс",
        title: "За лаштунками вітрини",
        text: "Велика частина моєї роботи була там, куди гості не заглядають: адмінка і мерчант-центр. Я багато спілкувалася з маркетингом, контакт-центром, B2B і комерцією, щоб зрозуміти їхню щоденну роботу, і перетворювала це на таблицю продавців, керування замовленнями, стоп-листи, модерацію товарів і нові механіки акцій.",
        highlight: "Одна з моїх улюблених історій: оплату карткою Національний кешбек я спроєктувала за день, команда запустила її за тиждень, і ми першими почали її приймати, коли на ці картки надійшла зимова допомога від держави.",
      },
      earlier: {
        tab: "раніше",
        title: "До MAUDAU",
        items: [
          { t: "FuseBase", p: "січень 2023 – лютий 2024", d: "Редизайн SaaS-платформи для командної роботи, досі в продакшні.", link: "https://www.behance.net/gallery/188218925/Nimbus-Note-to-FuseBase", linkText: "Дивитися на Behance" },
          { t: "Awesomic", p: "березень 2022 – лютий 2023", d: "Кілька проєктів одночасно і робота напряму з клієнтами з усього світу." },
          { t: "Zakaz.ua", p: "листопад 2021 – квітень 2022", d: "UX-дослідження для доставки продуктів: інтерв’ю, персони і карти шляху." },
          { t: "DOIT Software", p: "лютий 2020 – жовтень 2021", d: "Headache Calendar, медичний застосунок, створений разом з неврологами для клієнта з Норвегії, рейтинг 4,7.", link: "https://www.behance.net/gallery/121711975/UIUX-Recording-headaches-app", linkText: "Дивитися на Behance" },
        ],
      },
    },

    about: {
      title: "Про мене",
      text: [
        "Я продуктова дизайнерка вже 9 років: e-commerce, foodtech, healthcare і SaaS. Щиро люблю свою роботу, навіть складні моменти з 27 коментарями стейкхолдерів.",
      ],
      journeyTitle: "Як я веду задачу до релізу",
      journey: [
        { t: "Беру в роботу", d: "Разом з PO беремо задачу з роудмапу." },
        { t: "Уточнюю", d: "Говорю зі стейкхолдерами і погоджую вимоги." },
        { t: "Драфт", d: "Накидаю першу версію і обговорюю її з PO." },
        { t: "Шліфую", d: "Доводжу дизайн до фіналу і презентую стейкхолдерам." },
        { t: "Передаю", d: "Готую все потрібне для розробників і супроводжую їх." },
        { t: "Реліз", d: "Показуємо демо стейкхолдерам і запускаємо." },
      ],
      journeyLoop: "Коли задача цього потребує, ми говоримо з гостями до дизайну або проводимо юзабіліті-тести після.",
      valuesTitle: "Мої принципи",
      values: [
        { t: "Людина понад усе", d: "Кожне рішення починається з людини по той бік екрана." },
        { t: "Рішення на даних", d: "Смак відкриває розмову, а дослідження і метрики її завершують." },
        { t: "Користь для обох", d: "Хороший продукт водночас допомагає людям і розвиває бізнес." },
      ],
      lookingTitle: "Що я шукаю",
      looking: "Продукт, який робить життя людей кращим, і команду, з якою можна рости.",
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
      title: "Створімо щось разом!",
      text: "Маєш ідею продукту або відкриту вакансію в продуктовій команді? Пиши мені.",
      telegram: "Telegram",
      email: "Email",
      linkedin: "LinkedIn",
      footer: "Зроблено з турботою, зібрано з Claude",
    },
  },
};
