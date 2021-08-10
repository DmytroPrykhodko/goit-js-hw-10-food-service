// console.log('theme');
const refs = {
  themeSwitch: document.querySelector("#theme-switch-toggle"),
  body: document.querySelector("body"),
};

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
// По умолчанию записываем в localStorage светлую тему если ничего нет
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "LIGHT");
  refs.body.classList.add(Theme.LIGHT);
}
//выставляем правильно переключатель
localStorage.getItem("theme") === "LIGHT"
  ? (refs.themeSwitch.checked = false)
  : (refs.themeSwitch.checked = true);
thatTheme();

// вешаем слушатель на чек бокс
refs.themeSwitch.addEventListener("change", themeSwitchClick);

// console.log(Theme[localStorage.getItem("theme")]);

// функция обработки слушателя
function themeSwitchClick(event) {
  //   console.log(event.target.checked);
  if (event.target.checked) {
    localStorage.setItem("theme", "DARK");
  } else {
    localStorage.setItem("theme", "LIGHT");
  }
  thatTheme();
}

// функция изменения стиля body
function thatTheme() {
  if (refs.body.classList.contains(Theme.LIGHT))
    refs.body.classList.remove(Theme.LIGHT);
  if (refs.body.classList.contains(Theme.DARK))
    refs.body.classList.remove(Theme.DARK);

  // refs.body.classList.contains(Theme.DARK)
  //   ? refs.body.classList.replace(Theme.LIGH, Theme.DARK)
  //   : elem.classList.replace(Theme.DARK, Theme.LIGHT);

  refs.body.classList.add(Theme[localStorage.getItem("theme")]);
}
