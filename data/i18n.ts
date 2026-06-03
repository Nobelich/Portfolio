export type Locale = "en" | "ru" | "uk";

export const locales: Locale[] = ["en", "ru", "uk"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  uk: "UA",
};

type ProjectCopy = {
  title: string;
  description: string[];
};

type Translation = {
  metaDescription: string;
  nav: {
    work: string;
    about: string;
    main: string;
    projects: string;
  };
  about: {
    title: string;
    address: string;
    email: string;
    phone: string;
    github: string;
    instagram: string;
    paragraphs: string[];
  };
  project: {
    openLiveSite: string;
    viewOnGitHub: string;
    all: string;
    openLiveSiteAria: (title: string) => string;
    previewOf: (title: string) => string;
  };
  projects: Record<string, ProjectCopy>;
};

export const translations: Record<Locale, Translation> = {
  en: {
    metaDescription: "Artemiy Liubynskii — portfolio and selected work.",
    nav: {
      work: "Work",
      about: "About",
      main: "Main",
      projects: "Projects",
    },
    about: {
      title: "About",
      address: "Address",
      email: "Email",
      phone: "Phone",
      github: "GitHub",
      instagram: "Instagram",
      paragraphs: [
        "My name is Artemiy and i lived in Ukraine, where he studied at a computer academy.",
        "But now i'm studying at a computer college, learning to design and build web projects with modern tools.",
      ],
    },
    project: {
      openLiveSite: "Open live site",
      viewOnGitHub: "View on GitHub",
      all: "All",
      openLiveSiteAria: (title) => `Open ${title} live site`,
      previewOf: (title) => `Preview of ${title}`,
    },
    projects: {
      "monday-site": {
        title: "Legendary Cars",
        description: [
          "A car rental landing page built with HTML, CSS, and JavaScript — visitors browse featured vehicles and submit a booking form to reserve a drive.",
          "Built during the Monday session and deployed live on GitHub Pages. First time shipping a site end-to-end: structure, styling, and publishing.",
        ],
      },
      "wednesday-v2": {
        title: "Project title (Wednesday v2)",
        description: [
          "Write one or two sentences about what you changed or added in this version — layout, content, colors, or new sections compared to your first site.",
          "Write one or two sentences about why you redesigned it, or what this v2 project is — what problem you wanted to solve or improve.",
        ],
      },
      "thursday-site": {
        title: "Project title (Thursday)",
        description: [
          "Write one or two sentences about the idea behind your Thursday project — what inspired it, what it does, and why you wanted to make it.",
          "Write one or two sentences about how you built it and what you are proud of — a decision, a detail, or a moment when it started to feel real.",
        ],
      },
      "coming-soon": {
        title: "Coming soon",
        description: [
          "Write one or two sentences here when this project is ready to share — what it is, what it does, and why someone should take a look.",
          "Add a second pair of sentences with more detail — how you built it, what you learned, or what you would do next if you kept going.",
        ],
      },
    },
  },
  ru: {
    metaDescription: "Артемий Любинский — портфолио и избранные работы.",
    nav: {
      work: "Работы",
      about: "Обо мне",
      main: "Главная",
      projects: "Проекты",
    },
    about: {
      title: "Обо мне",
      address: "Адрес",
      email: "Email",
      phone: "Телефон",
      github: "GitHub",
      instagram: "Instagram",
      paragraphs: [
        "Артемий Любинский жил в Украине, где учился в компьютерной академии.",
        "Сейчас он учится в компьютерном колледже, осваивая проектирование и создание веб-проектов с современными инструментами.",
      ],
    },
    project: {
      openLiveSite: "Открыть сайт",
      viewOnGitHub: "Смотреть на GitHub",
      all: "Все",
      openLiveSiteAria: (title) => `Открыть сайт ${title}`,
      previewOf: (title) => `Предпросмотр ${title}`,
    },
    projects: {
      "monday-site": {
        title: "Легендарные автомобили",
        description: [
          "Лендинг аренды автомобилей на HTML, CSS и JavaScript — посетители просматривают автомобили и отправляют форму бронирования.",
          "Создан на занятии в понедельник и опубликован на GitHub Pages. Первый полный цикл: структура, стили и деплой.",
        ],
      },
      "wednesday-v2": {
        title: "Название проекта (среда v2)",
        description: [
          "Напишите одно-два предложения о том, что вы изменили или добавили в этой версии — макет, контент, цвета или новые разделы.",
          "Напишите одно-два предложения о том, зачем вы переделали сайт или какую задачу хотели решить.",
        ],
      },
      "thursday-site": {
        title: "Название проекта (четверг)",
        description: [
          "Напишите одно-два предложения об идее проекта — что вас вдохновило, что он делает и зачем вы его создали.",
          "Напишите одно-два предложения о том, как вы его построили и чем гордитесь — решением, деталью или моментом, когда всё заработало.",
        ],
      },
      "coming-soon": {
        title: "Скоро",
        description: [
          "Напишите здесь одно-два предложения, когда проект будет готов — что это, что он делает и почему стоит посмотреть.",
          "Добавьте ещё пару предложений — как вы его построили, чему научились или что сделали бы дальше.",
        ],
      },
    },
  },
  uk: {
    metaDescription: "Артемій Любинський — портфоліо та обрані роботи.",
    nav: {
      work: "Роботи",
      about: "Про мене",
      main: "Головна",
      projects: "Проєкти",
    },
    about: {
      title: "Про мене",
      address: "Адреса",
      email: "Email",
      phone: "Телефон",
      github: "GitHub",
      instagram: "Instagram",
      paragraphs: [
        "Артемій Любинський жив у Україні, де навчався в комп'ютерній академії.",
        "Зараз він навчається в комп'ютерному коледжі, вивчаючи проектування та створення веб-проєктів із сучасними інструментами.",
      ],
    },
    project: {
      openLiveSite: "Відкрити сайт",
      viewOnGitHub: "Дивитись на GitHub",
      all: "Усі",
      openLiveSiteAria: (title) => `Відкрити сайт ${title}`,
      previewOf: (title) => `Попередній перегляд ${title}`,
    },
    projects: {
      "monday-site": {
        title: "Легендарні автомобілі",
        description: [
          "Лендинг оренди автомобілів на HTML, CSS і JavaScript — відвідувачі переглядають авто та надсилають форму бронювання.",
          "Створено на занятті в понеділок і опубліковано на GitHub Pages. Перший повний цикл: структура, стилі та деплой.",
        ],
      },
      "wednesday-v2": {
        title: "Назва проєкту (середа v2)",
        description: [
          "Напишіть одне-два речення про те, що ви змінили або додали в цій версії — макет, контент, кольори чи нові розділи.",
          "Напишіть одне-два речення про те, навіщо ви переробили сайт або яку задачу хотіли вирішити.",
        ],
      },
      "thursday-site": {
        title: "Назва проєкту (четвер)",
        description: [
          "Напишіть одне-два речення про ідею проєкту — що вас надихнуло, що він робить і навіщо ви його створили.",
          "Напишіть одне-два речення про те, як ви його побудували і чим пишаєтесь — рішенням, деталлю чи моментом, коли все запрацювало.",
        ],
      },
      "coming-soon": {
        title: "Незабаром",
        description: [
          "Напишіть тут одне-два речення, коли проєкт буде готовий — що це, що він робить і чому варто подивитись.",
          "Додайте ще пару речень — як ви його побудували, чому навчились або що зробили б далі.",
        ],
      },
    },
  },
};

export function getProjectCopy(locale: Locale, slug: string): ProjectCopy {
  return (
    translations[locale].projects[slug] ?? {
      title: slug,
      description: [],
    }
  );
}
