const bgColor = "#111";
const textColor = "#ddd";

const bgColors = () => {
  const backgrounds = document.querySelectorAll(
    "div, aside, article, .aw-2kxhaj"
  );
  backgrounds.forEach((background) => {
    background.style.backgroundColor = bgColor;
  });

  const headerElements = document.querySelectorAll(
    ".yle-header-container, .yle-header-actions div"
  );
  headerElements.forEach((headerElement) => {
    headerElement.style.backgroundColor = "#262a2e";
  });
};

const textColors = () => {
  const texts = document.querySelectorAll(
    "h1, h2, h3, a, time, span, p, button, .aw-2kxhaj, li div"
  );
  texts.forEach((text) => {
    text.style.color = textColor;
  });
};

bgColors();
textColors();

const swiper = document.querySelector(".dAfKAI");
if (swiper) {
  swiper.style.borderBottom = "8px solid #222";
}

document.addEventListener("scroll", () => {
  bgColors();
  textColors();
});
