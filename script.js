"use strict";

const openButton = document.querySelector("#openLetter");
const openPromptText = document.querySelector("#openPromptText");
const letterSection = document.querySelector("#letter");
const musicToggle = document.querySelector("#musicToggle");
const shareButton = document.querySelector("#shareButton");
const toast = document.querySelector("#toast");
const responseBox = document.querySelector("#rsvpResponse");
const responseButtons = [...document.querySelectorAll("[data-response]")];
const heartBurst = document.querySelector("#heartBurst");

let hasOpened = false;
let toastTimer;
let audioContext;
let musicTimer;
let activeNodes = [];

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.remove("show");
  void toast.offsetWidth;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function openLetter() {
  if (hasOpened) {
    letterSection.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  hasOpened = true;
  openButton.querySelector(".envelope").style.removeProperty("transform");
  openButton.classList.add("opened");
  openButton.setAttribute("aria-expanded", "true");
  openPromptText.textContent = "Letter opened";
  document.body.classList.add("letter-is-open");
  try { localStorage.setItem("jenny-letter-opened", "true"); } catch (_) {}

  window.setTimeout(() => {
    letterSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 1450);
}

openButton.addEventListener("click", openLetter);

openButton.addEventListener("pointermove", (event) => {
  if (hasOpened || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const bounds = openButton.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 5;
  const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 4;
  openButton.querySelector(".envelope").style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${x * 0.12}deg)`;
});

openButton.addEventListener("pointerleave", () => {
  openButton.querySelector(".envelope").style.removeProperty("transform");
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.13, rootMargin: "0px 0px -40px" });

document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => revealObserver.observe(element));

function playAmbientChord() {
  if (!audioContext) return;
  const now = audioContext.currentTime;
  const master = audioContext.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.022, now + 1.5);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 7.8);
  master.connect(audioContext.destination);

  const notes = [261.63, 329.63, 392.0, 493.88];
  activeNodes = notes.map((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = index % 2 ? "sine" : "triangle";
    oscillator.frequency.value = frequency / 2;
    oscillator.detune.value = index * 2;
    gain.gain.value = index === 3 ? 0.22 : 0.35;
    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(now + index * 0.07);
    oscillator.stop(now + 8);
    return oscillator;
  });
}

async function startMusic() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    showToast("Audio is not supported on this device");
    return;
  }
  audioContext = audioContext || new AudioContextClass();
  await audioContext.resume();
  playAmbientChord();
  musicTimer = window.setInterval(playAmbientChord, 7600);
  musicToggle.setAttribute("aria-pressed", "true");
  musicToggle.setAttribute("aria-label", "Pause gentle background music");
  showToast("Gentle ambience is playing");
}

function stopMusic() {
  window.clearInterval(musicTimer);
  musicTimer = undefined;
  activeNodes.forEach((node) => {
    try { node.stop(); } catch (_) {}
  });
  activeNodes = [];
  if (audioContext?.state === "running") audioContext.suspend();
  musicToggle.setAttribute("aria-pressed", "false");
  musicToggle.setAttribute("aria-label", "Play gentle background music");
  showToast("Music paused");
}

musicToggle.addEventListener("click", () => {
  if (musicToggle.getAttribute("aria-pressed") === "true") stopMusic();
  else startMusic();
});

shareButton.addEventListener("click", async () => {
  const shareData = {
    title: "A Letter for Jenny",
    text: "A message from the heart, sealed in wax.",
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      showToast("Letter shared with care");
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Link copied — ready to share");
    } else {
      showToast("Copy the page link to share it");
    }
  } catch (error) {
    if (error.name !== "AbortError") showToast("Sharing was not available");
  }
});

function createHeartBurst() {
  const symbols = ["♡", "♥", "✦", "♡", "❀"];
  for (let index = 0; index < 18; index += 1) {
    const particle = document.createElement("span");
    particle.className = "heart-particle";
    particle.textContent = symbols[index % symbols.length];
    particle.style.setProperty("--x", `${Math.round((Math.random() - 0.5) * 360)}px`);
    particle.style.setProperty("--y", `${Math.round(-100 - Math.random() * 300)}px`);
    particle.style.setProperty("--r", `${Math.round((Math.random() - 0.5) * 160)}deg`);
    particle.style.animationDelay = `${Math.random() * 0.18}s`;
    heartBurst.appendChild(particle);
    window.setTimeout(() => particle.remove(), 2200);
  }
}

function setResponse(value, shouldAnimate = true) {
  responseButtons.forEach((button) => {
    const selected = button.dataset.response === value;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  if (value === "yes") {
    responseBox.innerHTML = "Then it’s a date. The coffee already tastes better. <span aria-hidden=\"true\">♡</span>";
    if (shouldAnimate) createHeartBurst();
  } else if (value === "maybe") {
    responseBox.textContent = "Fair enough—the plan will wait patiently, with no audit objections.";
  }
}

responseButtons.forEach((button) => {
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => {
    const value = button.dataset.response;
    setResponse(value);
    try { localStorage.setItem("jenny-rsvp", value); } catch (_) {}
  });
});

try {
  const savedResponse = localStorage.getItem("jenny-rsvp");
  if (["yes", "maybe"].includes(savedResponse)) setResponse(savedResponse, false);
} catch (_) {}

document.querySelector("#year").textContent = new Date().getFullYear();
