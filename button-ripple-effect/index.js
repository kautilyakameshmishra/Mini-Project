const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("mouseover", (event) => {
    const x = event.pageX - btn.offsetLeft;
    const y = event.pageY - btn.offsetTop;

    btn.style.setProperty("--xPos", x + "px");
    btn.style.setProperty("--yPos", y + "px");
  });

  btn.addEventListener("click", () => {
    const link = btn.getAttribute("data-link");
    window.location.href = link;
  });
});
