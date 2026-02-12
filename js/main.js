// ===== Content Data =====
const content = {
  en: {
    nav: {
      brand: "IRAN FREEDOM",
      victims: "Victims",
      detainees: "Detainees",
      future: "Future",
      action: "Take Action"
    },
    hero: {
      title: "The Voice of a People Demanding Freedom",
      subtitle: "In recent years, Iranians have taken to the streets to demand their most basic human rights — the right to live, to choose, and to build a better future. The response has been live ammunition, mass arrests, and severe sentences.\nThis website exists to document the truth, honor the victims, and amplify the voices of families still searching for their loved ones.",
      closing: "The world must not look away.",
      cta: "Read Their Stories"
    },
    victims: {
      title: "In Memory of the Victims",
      subtitle: "Thousands of civilians — children, teenagers, women, and men — have lost their lives during the protests. Many were killed by live fire, and in some cases families faced pressure or financial demands to reclaim the bodies of their loved ones.\nBehind every name is a life, a dream, and a grieving family.",
      closing: "We are committed to ensuring they are never forgotten.",
      ageLabel: "Age"
    },
    detainees: {
      title: "Detainees and Those at Risk of Execution",
      subtitle: "Thousands have been detained. Many families have had no news of their loved ones for weeks or months. Numerous reports point to torture, forced confessions, and the risk of execution.\nThese individuals are imprisoned for demanding freedom and human dignity.",
      stats: {
        killed: { number: "36,500+", label: "Killed" },
        injured: { number: "300,000+", label: "Injured" }
      },
      note: "Many of the injured were shot in the face with shotgun pellets, leaving them permanently blinded. Families report that wounded protesters were arrested directly from hospitals.",
      source: "Sources: Amnesty International, Human Rights Watch, HRANA, Iran Human Rights, family testimonies, verified video evidence"
    },
    future: {
      title: "Future and Leadership",
      subtitle: "Many Iranians believe that moving beyond the Islamic Republic requires figures and movements capable of fostering national unity. Among them, Reza Pahlavi is recognized as a well-known advocate of democracy, secular governance, and a referendum by the people.",
      closing: "Ultimately, the final decision about Iran's future system of government must be made through the free will of its citizens.",
      principles: [
        { title: "Secular Democracy", desc: "Complete separation of religion and state, with elected representatives accountable to the people." },
        { title: "Human Rights", desc: "Full adherence to the Universal Declaration of Human Rights and international conventions." },
        { title: "Free Elections", desc: "A transitional government leading to free, fair, and internationally monitored elections." },
        { title: "Territorial Integrity", desc: "A unified Iran that respects and celebrates its ethnic and cultural diversity." }
      ]
    },
    action: {
      title: "How the World Can Help",
      subtitle: "Concrete steps that governments, organizations, and individuals can take to support the Iranian people.",
      cards: [
        {
          icon: "🏛",
          title: "Diplomatic Pressure",
          text: "Governments must hold the Islamic Republic accountable:",
          items: [
            "Impose targeted sanctions on regime officials",
            "Expel regime ambassadors involved in repression",
            "Support referral to the International Criminal Court",
            "Recognize the right of Iranians to self-determination"
          ]
        },
        {
          icon: "⚖️",
          title: "Human Rights & Legal",
          text: "Strengthen accountability mechanisms:",
          items: [
            "Support the UN Fact-Finding Mission on Iran",
            "Document evidence for future prosecutions",
            "Provide legal aid to detained activists' families",
            "Pressure for access by independent monitors"
          ]
        },
        {
          icon: "🌐",
          title: "Internet & Communication",
          text: "Keep Iranians connected to the world:",
          items: [
            "Fund and develop anti-censorship tools",
            "Provide satellite internet access",
            "Sanction companies supplying surveillance tech to Iran",
            "Support digital security training for activists"
          ]
        },
        {
          icon: "📢",
          title: "Amplify Their Voices",
          text: "Use your platform to make a difference:",
          items: [
            "Share verified reports on social media",
            "Attend solidarity marches and rallies",
            "Contact your elected representatives",
            "Support Iranian journalists and media in exile"
          ]
        }
      ]
    },
    footer: {
      text: "This page is dedicated to the brave people of Iran. Their fight for freedom is humanity's fight.",
      share: "Share",
      download: "Download Report (PDF)",
      twitter: "Twitter/X",
      facebook: "Facebook"
    }
  },
  fa: {
    nav: {
      brand: "آزادی ایران",
      victims: "قربانیان",
      detainees: "زندانیان",
      future: "آینده",
      action: "اقدام کنید"
    },
    hero: {
      title: "صدای مردمی که خواهان آزادی‌اند",
      subtitle: "در سال‌های اخیر، شهروندان ایران برای ابتدایی‌ترین حقوق انسانی خود به خیابان آمده‌اند؛ حق زندگی، حق انتخاب، و حق آینده‌ای بهتر. پاسخ حکومت به این خواسته‌ها سرکوب، گلوله جنگی، بازداشت‌های گسترده و احکام سنگین بوده است.\nاین وب‌سایت تلاشی است برای ثبت حقیقت، حفظ یاد قربانیان و رساندن صدای خانواده‌هایی که هنوز در جستجوی عزیزانشان هستند.",
      closing: "جهان نباید روی برگرداند.",
      cta: "داستان آن‌ها را بخوانید"
    },
    victims: {
      title: "یاد قربانیان",
      subtitle: "هزاران تن از شهروندان — از کودکان و نوجوانان تا زنان و مردان — در جریان اعتراضات جان خود را از دست داده‌اند. بسیاری با گلوله جنگی کشته شدند و در مواردی خانواده‌ها برای تحویل پیکر عزیزانشان با فشار و حتی درخواست پول روبه‌رو بوده‌اند.\nپشت هر نام، یک زندگی، یک رویا و خانواده‌ای داغدار وجود دارد.",
      closing: "ما متعهدیم که این نام‌ها فراموش نشوند.",
      ageLabel: "سن"
    },
    detainees: {
      title: "بازداشت‌شدگان و زندانیان در خطر",
      subtitle: "هزاران نفر بازداشت شده‌اند. بسیاری از خانواده‌ها هفته‌ها و ماه‌ها از وضعیت عزیزان خود بی‌خبرند. گزارش‌های متعدد از شکنجه، اعترافات اجباری و خطر صدور یا اجرای حکم اعدام وجود دارد.\nاین افراد فقط به دلیل مطالبه آزادی و کرامت انسانی زندانی شده‌اند.",
      stats: {
        killed: { number: "+۳۶٬۵۰۰", label: "کشته" },
        injured: { number: "+۳۰۰٬۰۰۰", label: "زخمی" }
      },
      note: "بسیاری از مجروحان با ساچمه به صورت هدف قرار گرفته و برای همیشه نابینا شده‌اند. خانواده‌ها گزارش می‌دهند که معترضان زخمی مستقیماً از بیمارستان‌ها بازداشت شده‌اند.",
      source: "منابع: عفو بین‌الملل، دیده‌بان حقوق بشر، هرانا، سازمان حقوق بشر ایران، شهادت خانواده‌ها، ویدئوهای تأییدشده"
    },
    future: {
      title: "آینده و رهبری",
      subtitle: "بسیاری از ایرانیان معتقدند گذار از جمهوری اسلامی نیازمند چهره‌ها و جریان‌هایی است که بتوانند وحدت ملی ایجاد کنند. در میان این نام‌ها، رضا پهلوی به عنوان شخصیتی شناخته‌شده و حامی دموکراسی، سکولاریسم و مراجعه به رأی مردم مطرح است.",
      closing: "با این حال، تصمیم نهایی درباره شکل حکومت آینده باید از طریق انتخاب آزاد مردم ایران تعیین شود.",
      principles: [
        { title: "دموکراسی سکولار", desc: "جدایی کامل دین و دولت، با نمایندگان منتخب پاسخگو به مردم." },
        { title: "حقوق بشر", desc: "پایبندی کامل به اعلامیه جهانی حقوق بشر و کنوانسیون‌های بین‌المللی." },
        { title: "انتخابات آزاد", desc: "دولت موقت انتقالی منتهی به انتخابات آزاد، عادلانه و تحت نظارت بین‌المللی." },
        { title: "تمامیت ارضی", desc: "ایرانی یکپارچه که به تنوع قومی و فرهنگی خود احترام می‌گذارد و آن را گرامی می‌دارد." }
      ]
    },
    action: {
      title: "جهان چگونه می‌تواند کمک کند",
      subtitle: "اقدامات مشخصی که دولت‌ها، سازمان‌ها و افراد می‌توانند برای حمایت از مردم ایران انجام دهند.",
      cards: [
        {
          icon: "🏛",
          title: "فشار دیپلماتیک",
          text: "دولت‌ها باید جمهوری اسلامی را پاسخگو نگه دارند:",
          items: [
            "اعمال تحریم‌های هدفمند علیه مقامات رژیم",
            "اخراج سفرای رژیم دخیل در سرکوب",
            "حمایت از ارجاع به دادگاه کیفری بین‌المللی",
            "به رسمیت شناختن حق تعیین سرنوشت ایرانیان"
          ]
        },
        {
          icon: "⚖️",
          title: "حقوق بشر و حقوقی",
          text: "تقویت سازوکارهای پاسخگویی:",
          items: [
            "حمایت از هیئت حقیقت‌یاب سازمان ملل درباره ایران",
            "مستندسازی شواهد برای پیگردهای آینده",
            "ارائه کمک حقوقی به خانواده‌های فعالان بازداشتی",
            "فشار برای دسترسی ناظران مستقل"
          ]
        },
        {
          icon: "🌐",
          title: "اینترنت و ارتباطات",
          text: "ایرانیان را به جهان متصل نگه دارید:",
          items: [
            "تأمین مالی و توسعه ابزارهای ضد سانسور",
            "فراهم کردن دسترسی اینترنت ماهواره‌ای",
            "تحریم شرکت‌های تأمین‌کننده فناوری نظارتی به ایران",
            "حمایت از آموزش امنیت دیجیتال برای فعالان"
          ]
        },
        {
          icon: "📢",
          title: "صدای آن‌ها را تقویت کنید",
          text: "از پلتفرم خود برای ایجاد تغییر استفاده کنید:",
          items: [
            "اشتراک‌گذاری گزارش‌های تأیید شده در شبکه‌های اجتماعی",
            "شرکت در راهپیمایی‌ها و تجمعات همبستگی",
            "تماس با نمایندگان منتخب خود",
            "حمایت از روزنامه‌نگاران و رسانه‌های ایرانی در تبعید"
          ]
        }
      ]
    },
    footer: {
      text: "این صفحه تقدیم به مردم شجاع ایران است. مبارزه آن‌ها برای آزادی، مبارزه بشریت است.",
      share: "اشتراک",
      download: "دانلود گزارش (PDF)",
      twitter: "Twitter/X",
      facebook: "Facebook"
    }
  },
  de: {
    nav: {
      brand: "IRAN FREIHEIT",
      victims: "Opfer",
      detainees: "Inhaftierte",
      future: "Zukunft",
      action: "Handeln"
    },
    hero: {
      title: "Die Stimme eines Volkes, das Freiheit fordert",
      subtitle: "In den letzten Jahren sind Iraner auf die Straßen gegangen, um ihre grundlegendsten Menschenrechte einzufordern — das Recht zu leben, zu wählen und eine bessere Zukunft aufzubauen. Die Antwort war scharfe Munition, Massenverhaftungen und schwere Urteile.\nDiese Website dokumentiert die Wahrheit, ehrt die Opfer und verstärkt die Stimmen der Familien, die noch immer nach ihren Angehörigen suchen.",
      closing: "Die Welt darf nicht wegschauen.",
      cta: "Ihre Geschichten lesen"
    },
    victims: {
      title: "Im Gedenken an die Opfer",
      subtitle: "Tausende Zivilisten — Kinder, Jugendliche, Frauen und Männer — haben bei den Protesten ihr Leben verloren. Viele wurden durch scharfe Munition getötet, und in einigen Fällen wurden Familien unter Druck gesetzt oder mussten Geld zahlen, um die Leichen ihrer Angehörigen zurückzubekommen.\nHinter jedem Namen steht ein Leben, ein Traum und eine trauernde Familie.",
      closing: "Wir setzen uns dafür ein, dass sie niemals vergessen werden.",
      ageLabel: "Alter"
    },
    detainees: {
      title: "Inhaftierte und von Hinrichtung Bedrohte",
      subtitle: "Tausende wurden inhaftiert. Viele Familien haben seit Wochen oder Monaten keine Nachricht von ihren Angehörigen. Zahlreiche Berichte deuten auf Folter, erzwungene Geständnisse und die Gefahr der Hinrichtung hin.\nDiese Menschen sind inhaftiert, weil sie Freiheit und Menschenwürde gefordert haben.",
      stats: {
        killed: { number: "36.500+", label: "Getötet" },
        injured: { number: "300.000+", label: "Verletzt" }
      },
      note: "Viele der Verletzten wurden mit Schrotflinten ins Gesicht geschossen und sind dauerhaft erblindet. Familien berichten, dass verwundete Demonstranten direkt aus Krankenhäusern verhaftet wurden.",
      source: "Quellen: Amnesty International, Human Rights Watch, HRANA, Iran Human Rights, Zeugenaussagen von Familien, verifiziertes Videomaterial"
    },
    future: {
      title: "Zukunft und Führung",
      subtitle: "Viele Iraner glauben, dass der Übergang von der Islamischen Republik Persönlichkeiten und Bewegungen erfordert, die nationale Einheit fördern können. Unter ihnen ist Reza Pahlavi als bekannter Befürworter von Demokratie, säkularer Regierungsführung und einem Referendum durch das Volk anerkannt.",
      closing: "Letztendlich muss die endgültige Entscheidung über Irans zukünftiges Regierungssystem durch den freien Willen seiner Bürger getroffen werden.",
      principles: [
        { title: "Säkulare Demokratie", desc: "Vollständige Trennung von Religion und Staat, mit gewählten Vertretern, die dem Volk rechenschaftspflichtig sind." },
        { title: "Menschenrechte", desc: "Vollständige Einhaltung der Allgemeinen Erklärung der Menschenrechte und internationaler Konventionen." },
        { title: "Freie Wahlen", desc: "Eine Übergangsregierung, die zu freien, fairen und international überwachten Wahlen führt." },
        { title: "Territoriale Integrität", desc: "Ein vereinter Iran, der seine ethnische und kulturelle Vielfalt respektiert und würdigt." }
      ]
    },
    action: {
      title: "Wie die Welt helfen kann",
      subtitle: "Konkrete Schritte, die Regierungen, Organisationen und Einzelpersonen unternehmen können, um das iranische Volk zu unterstützen.",
      cards: [
        {
          icon: "🏛",
          title: "Diplomatischer Druck",
          text: "Regierungen müssen die Islamische Republik zur Rechenschaft ziehen:",
          items: [
            "Gezielte Sanktionen gegen Regime-Funktionäre verhängen",
            "An Unterdrückung beteiligte Regime-Botschafter ausweisen",
            "Überweisung an den Internationalen Strafgerichtshof unterstützen",
            "Das Recht der Iraner auf Selbstbestimmung anerkennen"
          ]
        },
        {
          icon: "⚖️",
          title: "Menschenrechte & Justiz",
          text: "Rechenschaftsmechanismen stärken:",
          items: [
            "Die UN-Untersuchungsmission zum Iran unterstützen",
            "Beweise für zukünftige Strafverfolgungen dokumentieren",
            "Rechtshilfe für Familien inhaftierter Aktivisten bereitstellen",
            "Zugang für unabhängige Beobachter einfordern"
          ]
        },
        {
          icon: "🌐",
          title: "Internet & Kommunikation",
          text: "Iraner mit der Welt verbunden halten:",
          items: [
            "Anti-Zensur-Tools finanzieren und entwickeln",
            "Satelliten-Internetzugang bereitstellen",
            "Unternehmen sanktionieren, die Überwachungstechnologie an den Iran liefern",
            "Schulungen zur digitalen Sicherheit für Aktivisten unterstützen"
          ]
        },
        {
          icon: "📢",
          title: "Ihre Stimmen verstärken",
          text: "Nutzen Sie Ihre Plattform, um etwas zu bewirken:",
          items: [
            "Verifizierte Berichte in sozialen Medien teilen",
            "An Solidaritätsmärschen und Kundgebungen teilnehmen",
            "Ihre gewählten Vertreter kontaktieren",
            "Iranische Journalisten und Medien im Exil unterstützen"
          ]
        }
      ]
    },
    footer: {
      text: "Diese Seite ist dem mutigen Volk des Iran gewidmet. Ihr Kampf für Freiheit ist der Kampf der Menschheit.",
      share: "Teilen",
      download: "Bericht herunterladen (PDF)",
      twitter: "Twitter/X",
      facebook: "Facebook"
    }
  },
  lt: {
    nav: {
      brand: "IRANO LAISVĖ",
      victims: "Aukos",
      detainees: "Sulaikytieji",
      future: "Ateitis",
      action: "Veikti"
    },
    hero: {
      title: "Laisvės reikalaujančios tautos balsas",
      subtitle: "Pastaraisiais metais iraniečiai išėjo į gatves reikalaudami savo pagrindinių žmogaus teisių — teisės gyventi, rinktis ir kurti geresnę ateitį. Atsakymas buvo koviniai šoviniai, masiniai areštai ir griežti nuosprendžiai.\nŠi svetainė skirta dokumentuoti tiesą, pagerbti aukas ir sustiprinti šeimų, vis dar ieškančių savo artimųjų, balsus.",
      closing: "Pasaulis negali nusigręžti.",
      cta: "Skaitykite jų istorijas"
    },
    victims: {
      title: "Aukų atminimui",
      subtitle: "Tūkstančiai civilių — vaikai, paaugliai, moterys ir vyrai — žuvo per protestus. Daugelis buvo nušauti koviniais šoviniais, o kai kuriais atvejais šeimos buvo spaudžiamos arba turėjo mokėti, kad atgautų savo artimųjų kūnus.\nUž kiekvieno vardo slypi gyvenimas, svajonė ir gedinti šeima.",
      closing: "Mes įsipareigojame užtikrinti, kad jie niekada nebūtų pamiršti.",
      ageLabel: "Amžius"
    },
    detainees: {
      title: "Sulaikytieji ir tie, kuriems gresia egzekucija",
      subtitle: "Tūkstančiai buvo sulaikyti. Daugelis šeimų savaites ar mėnesius neturi jokių žinių apie savo artimuosius. Daugybė pranešimų rodo kankinimus, priverstines prisipažinimus ir egzekucijos grėsmę.\nŠie žmonės įkalinti už tai, kad reikalavo laisvės ir žmogaus orumo.",
      stats: {
        killed: { number: "36 500+", label: "Nužudyta" },
        injured: { number: "300 000+", label: "Sužeista" }
      },
      note: "Daugelis sužeistųjų buvo šauti šratiniais šautuvais į veidą ir liko visam laikui apakę. Šeimos praneša, kad sužeisti protestuotojai buvo areštuojami tiesiai iš ligoninių.",
      source: "Šaltiniai: Amnesty International, Human Rights Watch, HRANA, Iran Human Rights, šeimų liudijimai, patvirtintos vaizdo įrašų medžiagos"
    },
    future: {
      title: "Ateitis ir lyderystė",
      subtitle: "Daugelis iraniečių tiki, kad perėjimui nuo Islamo Respublikos reikia asmenybių ir judėjimų, galinčių skatinti nacionalinę vienybę. Tarp jų Reza Pahlavi yra pripažintas kaip žinomas demokratijos, pasaulietinio valdymo ir tautos referendumo šalininkas.",
      closing: "Galutinį sprendimą dėl Irano būsimos valdymo sistemos turi priimti piliečiai savo laisva valia.",
      principles: [
        { title: "Pasaulietinė demokratija", desc: "Visiškas religijos ir valstybės atskyrimas su rinktais atstovais, atskaitingais tautai." },
        { title: "Žmogaus teisės", desc: "Visapusiškas Visuotinės žmogaus teisių deklaracijos ir tarptautinių konvencijų laikymasis." },
        { title: "Laisvi rinkimai", desc: "Pereinamoji vyriausybė, vedanti prie laisvų, sąžiningų ir tarptautiniu mastu stebimų rinkimų." },
        { title: "Teritorinis vientisumas", desc: "Vieningas Iranas, kuris gerbia ir brangina savo etninę bei kultūrinę įvairovę." }
      ]
    },
    action: {
      title: "Kaip pasaulis gali padėti",
      subtitle: "Konkretūs žingsniai, kuriuos vyriausybės, organizacijos ir pavieniai asmenys gali imtis, kad palaikytų Irano žmones.",
      cards: [
        {
          icon: "🏛",
          title: "Diplomatinis spaudimas",
          text: "Vyriausybės turi patraukti Islamo Respubliką atsakomybėn:",
          items: [
            "Taikyti tikslines sankcijas režimo pareigūnams",
            "Išsiųsti represijose dalyvaujančius režimo ambasadorius",
            "Remti perdavimą Tarptautiniam baudžiamajam teismui",
            "Pripažinti iraniečių teisę į apsisprendimą"
          ]
        },
        {
          icon: "⚖️",
          title: "Žmogaus teisės ir teisingumas",
          text: "Stiprinti atskaitomybės mechanizmus:",
          items: [
            "Remti JT faktų nustatymo misiją dėl Irano",
            "Dokumentuoti įrodymus būsimiems baudžiamiesiems persekiojimams",
            "Teikti teisinę pagalbą sulaikytų aktyvistų šeimoms",
            "Reikalauti nepriklausomų stebėtojų prieigos"
          ]
        },
        {
          icon: "🌐",
          title: "Internetas ir komunikacija",
          text: "Palaikyti iraniečių ryšį su pasauliu:",
          items: [
            "Finansuoti ir kurti anti-cenzūros įrankius",
            "Suteikti palydovinę interneto prieigą",
            "Sankcionuoti įmones, tiekiančias stebėjimo technologijas Iranui",
            "Remti skaitmeninio saugumo mokymus aktyvistams"
          ]
        },
        {
          icon: "📢",
          title: "Sustiprinkite jų balsus",
          text: "Naudokite savo platformą pokyčiams:",
          items: [
            "Dalinkitės patvirtintomis ataskaitomis socialiniuose tinkluose",
            "Dalyvaukite solidarumo žygiuose ir mitinguose",
            "Kreipkitės į savo rinktinius atstovus",
            "Remkite Irano žurnalistus ir žiniasklaidą tremtyje"
          ]
        }
      ]
    },
    footer: {
      text: "Šis puslapis skirtas drąsiems Irano žmonėms. Jų kova už laisvę yra žmonijos kova.",
      share: "Dalintis",
      download: "Atsisiųsti ataskaitą (PDF)",
      twitter: "Twitter/X",
      facebook: "Facebook"
    }
  }
};

// ===== Memory Data (loaded from memory.json) =====
let memoryData = [];

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

async function loadMemoryData() {
  try {
    const response = await fetch('assets/memory.json');
    memoryData = await response.json();
    memoryData = shuffleArray(memoryData);
    renderVictims();
  } catch (err) {
    console.error('Failed to load memory data:', err);
  }
}

// ===== State =====
let currentLang = 'en';

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', () => {
  loadMemoryData();
  renderActionCards();
  applyLanguage(currentLang);
  setupEventListeners();
});

// ===== Render Functions =====
function renderVictims() {
  const grid = document.getElementById('victims-grid');
  if (memoryData.length === 0) return;
  const lang = currentLang;
  grid.innerHTML = memoryData.map(v => {
    const ageLabel = content[lang].victims.ageLabel;
    const ageText = v.age ? `${ageLabel}: ${v.age}` : '';
    return `
    <div class="victim-card" data-img="assets/images/memory/${v.files}" data-name="${v.name}" data-age="${ageText}" style="cursor:pointer">
      <div class="victim-photo"><img src="assets/images/memory/${v.files}" alt="${v.name}" loading="lazy"></div>
      <div class="victim-info">
        <h3>${v.name}</h3>
        ${ageText ? `<p>${ageText}</p>` : ''}
      </div>
    </div>
  `;
  }).join('');
}

function renderActionCards() {
  const grid = document.getElementById('action-grid');
  const langs = Object.keys(content);
  const cards = content.en.action.cards;
  grid.innerHTML = cards.map((card, i) => {
    const langAttrsTitle = langs.map(l => `data-${l}="${content[l].action.cards[i].title}"`).join(' ');
    const langAttrsText = langs.map(l => `data-${l}="${content[l].action.cards[i].text}"`).join(' ');
    return `
      <div class="action-card">
        <div class="action-icon">${card.icon}</div>
        <h3 ${langAttrsTitle}>${card.title}</h3>
        <p ${langAttrsText}>${card.text}</p>
        <ul>
          ${card.items.map((item, j) => {
            const langAttrsItem = langs.map(l => `data-${l}="${content[l].action.cards[i].items[j]}"`).join(' ');
            return `<li ${langAttrsItem}>${item}</li>`;
          }).join('')}
        </ul>
      </div>
    `;
  }).join('');
}

// ===== Language Toggle =====
function applyLanguage(lang) {
  currentLang = lang;
  const c = content[lang];

  // Direction
  document.body.classList.toggle('rtl', lang === 'fa');
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');

  // Nav
  document.getElementById('nav-brand').textContent = c.nav.brand;
  document.getElementById('lang-select').value = lang;
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.textContent = c.nav[el.dataset.nav];
  });

  // Hero
  document.getElementById('hero-title').textContent = c.hero.title;
  document.getElementById('hero-subtitle').textContent = c.hero.subtitle;
  document.getElementById('hero-closing').textContent = c.hero.closing;
  document.getElementById('hero-cta').textContent = c.hero.cta;

  // Victims section
  document.getElementById('victims-title').textContent = c.victims.title;
  document.getElementById('victims-subtitle').textContent = c.victims.subtitle;
  document.getElementById('victims-closing').textContent = c.victims.closing;
  renderVictims();

  // Detainees section
  document.getElementById('detainees-title').textContent = c.detainees.title;
  document.getElementById('detainees-subtitle').textContent = c.detainees.subtitle;
  document.getElementById('detainees-note').textContent = c.detainees.note;
  document.getElementById('detainees-source').textContent = c.detainees.source;

  // Stats
  Object.keys(c.detainees.stats).forEach(key => {
    const stat = c.detainees.stats[key];
    document.querySelector(`[data-stat="${key}"] .number`).textContent = stat.number;
    document.querySelector(`[data-stat="${key}"] .label`).textContent = stat.label;
  });

  // Future section
  document.getElementById('future-title').textContent = c.future.title;
  document.getElementById('future-subtitle').textContent = c.future.subtitle;
  document.getElementById('future-closing').textContent = c.future.closing;

  // Principles
  c.future.principles.forEach((p, i) => {
    const el = document.querySelectorAll('.principle-card')[i];
    if (el) {
      el.querySelector('h4').textContent = p.title;
      el.querySelector('p').textContent = p.desc;
    }
  });

  // Action section
  document.getElementById('action-title').textContent = c.action.title;
  document.getElementById('action-subtitle').textContent = c.action.subtitle;

  // Footer
  document.getElementById('footer-text').textContent = c.footer.text;
  document.getElementById('footer-download').textContent = c.footer.download;
  document.querySelectorAll('[data-share]').forEach(el => {
    el.textContent = c.footer[el.dataset.share] || el.textContent;
  });

  // Dynamic data-en / data-fa elements
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

// ===== Event Listeners =====
function setupEventListeners() {
  // Language select
  document.getElementById('lang-select').addEventListener('change', (e) => {
    applyLanguage(e.target.value);
  });

  // Mobile menu
  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('nav-links').classList.remove('open');
    });
  });

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxName = document.getElementById('lightbox-name');
  const lightboxAge = document.getElementById('lightbox-age');

  document.getElementById('victims-grid').addEventListener('click', (e) => {
    const card = e.target.closest('.victim-card');
    if (!card) return;
    lightboxImg.src = card.dataset.img;
    lightboxImg.alt = card.dataset.name;
    lightboxName.textContent = card.dataset.name;
    lightboxAge.textContent = card.dataset.age;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  document.getElementById('lightbox-close').addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Share buttons
  document.querySelectorAll('[data-share-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const action = btn.dataset.shareAction;
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent('The world must not look away. Stand with the people of Iran. #IranFreedom');
      if (action === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
      } else if (action === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
      }
    });
  });
}
