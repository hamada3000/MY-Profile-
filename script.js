(() => {
  const root = document.documentElement;
  const body = document.body;
  const languageButton = document.querySelector(".language-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  let language = "ar";

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    body.lang = language;
    languageButton.textContent = language === "ar" ? "EN" : "عربي";
    languageButton.setAttribute("aria-label", language === "ar" ? "Switch language to English" : "حوّل اللغة إلى العربية");

    document.querySelectorAll("[data-ar][data-en]").forEach((element) => {
      element.innerHTML = element.dataset[language];
    });
    document.querySelector(".site-nav").setAttribute("aria-label", language === "ar" ? "التنقل الرئيسي" : "Main navigation");
    document.querySelector(".identity").setAttribute("aria-label", language === "ar" ? "الصفحة الرئيسية لحمادة أحمد" : "Hamada Ahmed home");
    document.querySelector(".hero-visual img").alt = language === "ar" ? "حمادة أحمد، استشاري الجودة وسلامة الغذاء" : "Hamada Ahmed, Quality and Food Safety Consultant";
  }

  function closeMenu() {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", language === "ar" ? "فتح القائمة" : "Open menu");
  }

  languageButton.addEventListener("click", () => setLanguage(language === "ar" ? "en" : "ar"));
  nav.querySelectorAll("a[href^='#']").forEach((link) => link.addEventListener("click", closeMenu));
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? (language === "ar" ? "إغلاق القائمة" : "Close menu") : (language === "ar" ? "فتح القائمة" : "Open menu"));
  });

  setLanguage("ar");
})();
