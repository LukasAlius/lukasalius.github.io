function createRaindrop(container) {
  const rainDrop = document.createElement("div");
  rainDrop.className = "raindrop";

  const leftPosition = Math.random() * window.innerWidth;
  const animationDuration = 1 + Math.random() * 1.5;
  const height = 15 + Math.random() * 25;
  const opacity = 0.4 + Math.random() * 0.4;

  rainDrop.style.left = leftPosition + "px";
  rainDrop.style.height = height + "px";
  rainDrop.style.animationDuration = animationDuration + "s";
  rainDrop.style.opacity = opacity;

  container.appendChild(rainDrop);

  setTimeout(() => {
    if (rainDrop.parentNode) {
      rainDrop.parentNode.removeChild(rainDrop);
    }
  }, animationDuration * 1000);
}

function randomRain() {
  const rainContainer = document.getElementById("rainContainer");
  let isRaining = false;
  let rainIntensity = 0;

  if (Math.random() > 0.6) {
    isRaining = true;
    rainIntensity = 0.2 + Math.random() * 0.5;
  } else {
    isRaining = false;
    rainIntensity = 0;
  }

  setInterval(function () {
    if (isRaining && rainIntensity > 0) {
      const dropCount = Math.ceil(rainIntensity * 2);
      for (let i = 0; i < dropCount; i++) {
        setTimeout(createRaindrop(rainContainer), i * 100);
      }
    }
  });
}

let theme = "dark";

function initializeTheme() {
  const toggle = document.getElementById("themeToggle");

  toggle.addEventListener("click", function () {
    toggleTheme();
  });
}

function toggleTheme() {
  const icon = document.querySelector(".theme-icon");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    icon.textContent = "☀️";
    theme = "light";
  } else {
    document.documentElement.removeAttribute("data-theme");
    icon.textContent = "🌙";
    theme = "dark";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    randomRain();
  }

  initializeTheme();
});
