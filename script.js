
const pages = [
  {
    chapter: "CHAPTER ONE",
    title: "A little hello",
    text: "Dear Lovely,\n\nI wanted to make something different for you. Not just a normal message, but a little place where I could put some of my thoughts into words.\n\nSo, here it is. A tiny website made especially for you. ♡"
  },
  {
    chapter: "CHAPTER TWO",
    title: "You are special",
    text: "Some people make ordinary moments feel a little brighter. You have your own way of making a moment memorable.\n\nI hope you never stop being the person you are. Your smile, your thoughts and your little quirks make you wonderfully unique."
  },
  {
    chapter: "CHAPTER THREE",
    title: "A little appreciation",
    text: "I may not always find the perfect words, but I want you to know that I appreciate you.\n\nThank you for the conversations, the laughs and all those little moments. They mean more than you might realise."
  },
  {
    chapter: "CHAPTER FOUR",
    title: "No perfect words",
    text: "I'm not writing a perfect story here. Real moments are not always perfect, and that's okay.\n\nI just hope we can always be honest, respect each other and enjoy the little things along the way."
  },
  {
    chapter: "CHAPTER FIVE",
    title: "A wish for you",
    text: "I hope life gives you countless reasons to smile.\n\nMay your dreams get closer, your days become brighter and may you always remember how much you matter. Keep shining, Lovely. ♡"
  },
  {
    chapter: "CHAPTER SIX",
    title: "The next page",
    text: "This little diary ends here, but the best memories are still waiting to be made.\n\nWhatever comes next, I hope it brings happiness, kindness and beautiful moments. And I hope you enjoyed this little surprise."
  }
];

let currentPage = 0;

const welcome = document.getElementById("welcome");
const diary = document.getElementById("diary");
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");

function openDiary() {
  envelope.classList.add("open");
  setTimeout(() => {
    welcome.classList.remove("active");
    diary.classList.add("active");
    showPage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 650);
}

openBtn.addEventListener("click", openDiary);
envelope.addEventListener("click", openDiary);

function showPage() {
  const page = pages[currentPage];

  document.getElementById("pageNumber").textContent =
    `${String(currentPage + 1).padStart(2, "0")} / ${String(pages.length).padStart(2, "0")}`;

  document.getElementById("chapterTag").textContent = page.chapter;
  document.getElementById("pageTitle").textContent = page.title;
  document.getElementById("pageCopy").textContent = page.text;

  document.getElementById("prevBtn").disabled = currentPage === 0;
  document.getElementById("prevBtn").style.opacity =
    currentPage === 0 ? ".4" : "1";

  document.getElementById("nextBtn").textContent =
    currentPage === pages.length - 1 ? "Go to surprise ↓" : "Next page →";

  document.getElementById("dots").innerHTML = pages.map((_, index) =>
    `<span class="dot ${index === currentPage ? "active" : ""}"></span>`
  ).join("");
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage();
  } else {
    document.getElementById("proposal").scrollIntoView({ behavior: "smooth" });
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    showPage();
  }
});

document.getElementById("secretBtn").addEventListener("click", () => {
  const letter = document.getElementById("secretLetter");
  letter.classList.toggle("show");
  document.getElementById("secretBtn").textContent =
    letter.classList.contains("show")
      ? "Close the secret letter ↑"
      : "Open the secret letter ♡";
});


document.getElementById("yesBtn").addEventListener("click", () => {
  document.getElementById("answerMessage").textContent =
    "You just made this moment unforgettable, Lovely! ♡ Thank you for giving this story a chance. — Sumit";

  createHearts(35);
});

document.getElementById("timeBtn").addEventListener("click", () => {
  document.getElementById("answerMessage").textContent =
    "Take your time, Lovely. No pressure at all. Your feelings matter. ♡";
});


const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicBtn.innerHTML = "♫ <span>Pause</span>";
    } catch {
      showToast("Add your music.mp3 file to enable music.");
    }
  } else {
    music.pause();
    musicBtn.innerHTML = "♫ <span>Music</span>";
  }
});

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function createHearts(amount = 1) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = ["♡", "♥", "✧", "❀"][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 22) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6500);
  }
}

setInterval(() => createHearts(), 1800);
