function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

let isEnglish = true;

function toggleLanguage() {
  isEnglish = !isEnglish;

  document.getElementById("site-title").textContent = isEnglish ? "My Business" : "میرا کاروبار";
  document.getElementById("hero-title").textContent = isEnglish ? "Welcome to Our Business" : "ہمارے کاروبار میں خوش آمدید";
  document.getElementById("hero-text").textContent = isEnglish ? "We provide high-quality services to grow your business." : "ہم آپ کے کاروبار کو بڑھانے کے لیے اعلیٰ معیار کی خدمات فراہم کرتے ہیں۔";
  document.getElementById("btn-contact").textContent = isEnglish ? "Get in Touch" : "رابطہ کریں";
}
