// app.js - Advanced Multi-language Engine & Form Handler for NoMercy Network
(function () {
  const translations = {
    en: {
      nav_home: "Home",
      nav_rules: "Rules",
      title_apps: "Available Applications",
      staff_title: "Staff Application",
      staff_desc: "Apply to join the Staff Team and help manage our growing community.",
      media_title: "Media Application",
      media_desc: "Are you a YouTuber or TikToker? Apply to become an official Media Partner.",
      dev_title: "Developer Application",
      dev_desc: "Join our Development Team to build and configure amazing new features.",
      rules_title: "Server Rules",
      rules_desc: "Read all our rules carefully to maintain a safe and fair environment.",
      status_open: "Open",
      status_closed: "Closed",
      status_read: "Read",
      btn_submit: "Submit Application",
      btn_translate: "🌐 العربية",
      footer_text: "© 2026 NoMercy Network • All Rights Reserved",
      
      // حقول فورم الإدارة
      lbl_mc_user: "🎮 What is your Minecraft username?",
      lbl_dc_user: "💬 What is your Discord username?",
      lbl_age: "🎂 How old are you?",
      lbl_mic_rec: "🎙️ Can you record videos? And do you have a microphone?",
      lbl_timezone: "🌍 Which country do you live in? What is your timezone?",
      lbl_lang: "🗣️ What languages do you speak?",
      lbl_exp: "⏳ Describe your previous experience if you have held a staff position before.",
      lbl_playtime: "🕹️ How long have you been playing on the server? How active are you?",
      lbl_meaning: "💡 What does being staff mean to you?",
      lbl_choose_you: "🎯 Why should we choose you over all other applicants?",
      lbl_feedback: "👥 What do you think about the current staff team or staff system?",
      lbl_more_exp: "📝 Write anything else about your previous staff experience on other servers.",
      
      // سيناريوهات الإدارة
      title_scenarios: "🎬 Scenario Questions",
      q_racism: "💬 If you see someone using racist language, how would you handle it?",
      q_swearing: "🤬 If you find someone swearing or using inappropriate language, what will you do?",
      q_attack: "🚨 If a player says “I will attack this server”, how will you deal with them?",
      q_cheating: "⚡ If a player is using cheats, what will you do?",
      q_links: "🔗 A player posted a suspicious or harmful link in chat. What will you do?",
      q_nicknames: "📛 Inappropriate nicknames are punishable. What punishment duration is appropriate?",
      q_rank: "💎 If a player did not receive the rank they purchased, how would you help them?",
      q_glitch: "📦 You notice a player abusing a duplication glitch. How will you deal with them?",
      q_builds: "🏗️ How would you deal with a player building inappropriate structures?",
      q_abuse: "👁️ If you notice a staff member abusing their permissions, would you act? How would you handle it?",
      
      // صفحة الميديا
      media_info_title: "Application Information & Server Rules",
      media_video_lbl: "🔗 Video link for application (YouTube or TikTok only)",
      
      // التنبيهات
      alert_success: "Application submitted successfully. Thank you!",
      alert_error: "Could not submit application. Please try again later.",
      alert_network: "Network error while submitting. Check console."
    },
    ar: {
      nav_home: "الرئيسية",
      nav_rules: "القوانين",
      title_apps: "التقديمات المتاحة",
      staff_title: "تقديم على الإدارة",
      staff_desc: "قدّم للانضمام إلى الفريق الإداري وساعدنا في إدارة وتطوير المجتمع.",
      media_title: "تقديم على رتبة ميديا",
      media_desc: "هل أنت يوتيوبر أو تيك توكر؟ قدّم لتصبح شريك ميديا رسمي معنا.",
      dev_title: "تقديم على رتبة مطور",
      dev_desc: "انضم إلى فريق التطوير لبناء وبرمجة ميزات وأنظمة جديدة ومذهلة.",
      rules_title: "قوانين السيرفر",
      rules_desc: "اقرأ جميع القوانين بعناية للحفاظ على بيئة لعب آمنة وعادلة للجميع.",
      status_open: "مفتوح",
      status_closed: "مغلق",
      status_read: "اقرأ",
      btn_submit: "إرسال الطلب",
      btn_translate: "🌐 English",
      footer_text: "© 2026 شبكة NoMercy • جميع الحقوق محفوظة",
      
      // حقول فورم الإدارة
      lbl_mc_user: "🎮 ما هو اسمك داخل لعبة ماين كرافت؟",
      lbl_dc_user: "💬 ما هو حسابك في الديسكورد؟",
      lbl_age: "🎂 كم عمرك؟",
      lbl_mic_rec: "🎙️ هل يمكنك تصوير فيديو؟ وهل تمتلك ميكروفون؟",
      lbl_timezone: "🌍 في أي دولة تعيش؟ وما هو خطك الزمني (Timezone)؟",
      lbl_lang: "🗣️ ما هي اللغات التي تتحدثها؟",
      lbl_exp: "⏳ اذكر خبراتك السابقة إذا استلمت رتبة إدارية في سيرفر آخر من قبل.",
      lbl_playtime: "🕹️ كم لك من الوقت تلعب في السيرفر؟ وما هي نسبة تفاعلك؟",
      lbl_meaning: "💡 ماذا يعني لك أن تكون إدارياً؟",
      lbl_choose_you: "🎯 لماذا يجب أن نختارك أنت دوناً عن باقي المتقدمين؟",
      lbl_feedback: "👥 ما هو رأيك في الطاقم الإداري أو النظام الحالي؟",
      lbl_more_exp: "📝 اكتب أي تفاصيل إضافية عن خبراتك الإدارية السابقة.",
      
      // سيناريوهات الإدارة
      title_scenarios: "🎬 أسئلة السيناريوهات",
      q_racism: "💬 إذا رأيت شخصاً يطلق عبارات عنصرية، كيف ستتعامل معه؟",
      q_swearing: "🤬 إذا وجدت شخصاً يشتم أو يتلفظ بألفاظ غير لائقة، ماذا ستفعل؟",
      q_attack: "🚨 إذا قال لاعب “سأقوم بالهجوم على السيرفر”، كيف ستتصرف معه؟",
      q_cheating: "⚡ إذا كان هناك لاعب يستخدم الهكر/الغش، ماذا ستفعل؟",
      q_links: "🔗 قام لاعب بنشر رابط مشبوه أو ضار في الشات. ماذا ستفعل؟",
      q_nicknames: "📛 الأسماء المستعارة غير اللائقة تعرض صاحبها للعقوبة. ما هي العقوبة المناسبة برأيك؟",
      q_rank: "💎 إذا لم يستلم لاعب الرتبة التي قام بشرائها من المتجر، كيف ستساعده؟",
      q_glitch: "📦 لاحظت وجود لاعب يستغل ثغرة لتكرار الموارد (Duplication). كيف ستتعامل معه؟",
      q_builds: "🏗️ كيف ستتعامل مع لاعب يقوم ببناء مبانٍ غير لائقة؟",
      q_abuse: "👁️ إذا لاحظت أن أحد أفراد الطاقم الإداري يستغل صلاحياته، هل ستتدخل؟ وكيف ستتصرف؟",
      
      // صفحة الميديا
      media_info_title: "معلومات وشروط التقديم على رتبة الميديا",
      media_video_lbl: "🔗 رابط فيديو التقديم (يوتيوب أو تيك توك فقط)",
      
      // التنبيهات
      alert_success: "تم إرسال طلبك بنجاح. شكراً لك!",
      alert_error: "تعذر إرسال الطلب، يرجى المحاولة مرة أخرى لاحقاً.",
      alert_network: "حدث خطأ في الشبكة أثناء الإرسال."
    }
  };

  let currentLang = localStorage.getItem("siteLang") || "en";

  function applyTranslations() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[currentLang][key]) {
        el.innerHTML = translations[currentLang][key];
      }
    });
  }

  function initTranslateButton() {
    const nav = document.querySelector("header nav");
    if (!nav || document.getElementById("langToggle")) return;

    const btn = document.createElement("a");
    btn.id = "langToggle";
    btn.href = "#";
    btn.style.cursor = "pointer";
    btn.style.color = "#df70ff";
    btn.setAttribute("data-i18n", "btn_translate");
    btn.innerHTML = translations[currentLang]["btn_translate"];

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      currentLang = currentLang === "en" ? "ar" : "en";
      localStorage.setItem("siteLang", currentLang);
      applyTranslations();
    });

    nav.appendChild(btn);
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTranslateButton();
    applyTranslations();
  });

  // معالجة إرسال الفورم الموحد
  window.handleFormSubmit = function (formId, category) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) { submitButton.disabled = true; submitButton.style.opacity = "0.6"; }

      const data = {};
      Array.from(form.elements).forEach(el => {
        if (el.name) data[el.name] = el.value;
      });
      data._category = category || formId;
      data._language = currentLang;

      try {
        const resp = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        const json = await resp.json();
        if (resp.ok && json && json.ok) {
          alert(translations[currentLang]["alert_success"]);
          form.reset();
        } else {
          alert(translations[currentLang]["alert_error"]);
        }
      } catch (err) {
        alert(translations[currentLang]["alert_network"]);
      } finally {
        if (submitButton) { submitButton.disabled = false; submitButton.style.opacity = "1"; }
      }
    });
  };
})();
