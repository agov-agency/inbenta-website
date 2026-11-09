// Homepage behaviour.

// Hero: rotate the highlighted word in the headline (as on inbenta.com).
(() => {
  const el = document.querySelector("[data-rotate]");
  if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const words = el.dataset.rotate.split("|");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % words.length;
    el.classList.add("is-leaving");
    setTimeout(() => {
      el.textContent = words[index];
      el.classList.remove("is-leaving");
      el.classList.add("is-entering");
      requestAnimationFrame(() => {
        el.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        el.classList.remove("is-entering");
        setTimeout(() => (el.style.transition = ""), 300);
      });
    }, 300);
  }, 2800);
})();

// Products: highlight the tab of the product currently in view.
(() => {
  const tabs = [...document.querySelectorAll(".products__tabs .tab")];
  const products = tabs.map((tab) => document.querySelector(tab.getAttribute("href"))).filter(Boolean);
  if (!products.length || !("IntersectionObserver" in window)) return;

  const setActive = (id) => {
    for (const tab of tabs) {
      if (tab.getAttribute("href") === `#${id}`) tab.setAttribute("aria-current", "true");
      else tab.removeAttribute("aria-current");
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(entry.target.id);
      }
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  products.forEach((p) => observer.observe(p));
})();

// Customer stories: previous / next buttons scroll the track by one card.
(() => {
  const track = document.querySelector(".stories__track");
  if (!track) return;
  const step = () => {
    const card = track.querySelector(".story");
    return card ? card.getBoundingClientRect().width + 24 : track.clientWidth;
  };
  document.querySelector("[data-stories-prev]")?.addEventListener("click", () => track.scrollBy({ left: -step() }));
  document.querySelector("[data-stories-next]")?.addEventListener("click", () => track.scrollBy({ left: step() }));
})();

// Industries: previous / next buttons scroll the track by one card.
(() => {
  const track = document.querySelector(".industries__track");
  if (!track) return;
  const step = () => {
    const card = track.querySelector(".industry");
    return card ? card.getBoundingClientRect().width + 16 : track.clientWidth;
  };
  document.querySelector("[data-industries-prev]")?.addEventListener("click", () => track.scrollBy({ left: -step() }));
  document.querySelector("[data-industries-next]")?.addEventListener("click", () => track.scrollBy({ left: step() }));
})();
