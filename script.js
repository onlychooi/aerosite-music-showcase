const jumpButtons = document.querySelectorAll("[data-jump]");

jumpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetSelector = button.getAttribute("data-jump");
    const target = document.querySelector(targetSelector);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
