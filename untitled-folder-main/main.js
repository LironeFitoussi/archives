function switchLanguage(language) {
  const mainContent = document.getElementById("mainContent");
  const pageTitle = document.getElementById("pageTitle");
  const shaharit = document.getElementById("shaharit");
  const minha = document.getElementById("minha");
  const arvit = document.getElementById("arvit");

  if (language === "fr") {
    document.documentElement.lang = "fr";
    mainContent.dir = "ltr";
    pageTitle.innerText = `Shiva'a pour Gilbert (Avraham) ben Shlomo Habib`;
    shaharit.innerText = "Matin (שחרית) - 08:00";
    minha.innerText = "Après-midi (מנחה) - 16:00";
    arvit.innerText = "Soir (ערבית) - 18:15";
  } else {
    document.documentElement.lang = "he";
    mainContent.dir = "rtl";
    pageTitle.innerText = "שבעה לגילברט (אברהם) בן שלמה חביב";
    shaharit.innerText = "שחרית - 08:00";
    minha.innerText = "מנחה - 16:00";
    arvit.innerText = "ערבית - 18:15";
  }
}

function redirectToWaze() {
  // Replace the placeholder URL with the actual Waze link
  const wazeLink = "https://waze.com/ul/hsv8zcpjby";
  window.location.href = wazeLink;
}
