const searchBarContainerEl = document.querySelector(".search-bar-container");
const inputEl = document.querySelector(".input");

inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const query = inputEl.value.trim();
    if (query !== "") {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.location.href = searchUrl;
    }
  }
});

const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
});
