
const chapters = [
  {
    title: "A little beginning",
    text: "Dear Lovely,\n\nThis is not just a website. It is a little diary where I have put some feelings that I wanted to share with you.\n\nI hope this brings a smile to your face. ♡"
  },
  {
    title: "Something about you",
    text: "There is something special about you that is difficult to explain in words.\n\nSometimes, even a simple conversation can make an ordinary day feel beautiful. And that's one of the things I appreciate about you."
  },
  {
    title: "You make me smile",
    text: "Some people have a way of making moments memorable without even trying.\n\nYour presence, your words and your little ways make you someone worth appreciating."
  },
  {
    title: "A small confession",
    text: "I may not always say everything I feel, but that doesn't mean those feelings aren't there.\n\nI wanted to create something special instead of sending just another ordinary message."
  },
  {
    title: "My wishes for you",
    text: "I wish you happiness, success and countless reasons to smile.\n\nAlways believe in yourself, follow your dreams and never stop being the wonderful person you are."
  },
  {
    title: "A beautiful thought",
    text: "Life is full of unexpected moments, and some of them become our favourite memories.\n\nI hope we get to share many happy moments, laughter and beautiful conversations."
  },
  {
    title: "No perfect promises",
    text: "I don't believe in making unrealistic promises.\n\nI believe in respect, honesty, understanding and being there for each other through the little moments."
  },
  {
    title: "You are appreciated",
    text: "Lovely, I hope you know that you deserve kindness, respect and happiness.\n\nNever let anyone make you feel less than the wonderful person you are."
  },
  {
    title: "One more page",
    text: "If this little diary could say one thing, it would be this:\n\nSome feelings are too special to fit inside an ordinary message. That's why I made all these pages for you."
  },
  {
    title: "Before the last page",
    text: "And now, Lovely, we have reached the last page of this diary.\n\nBut there is still one question I have been saving for the end...\n\nAre you ready? ♡"
  }
];

let currentChapter = 0;

const opening = document.getElementById("opening");
const diary = document.getElementById("diary");
const envelope = document.getElementById("envelope");

function openLetter() {
  envelope.classList.add("open");

  setTimeout(() => {
    opening.classList.add("hidden");
    diary.classList.remove("hidden");
    showChapter();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 850);
}

document.getElementById("openButton").addEventListener("click", openLetter);
envelope.addEventListener("click", openLetter);

function showChapter() {
  const chapter = chapters[currentChapter];

  document.getElementById("chapterNumber").textContent =
    `PAGE ${String(currentChapter + 1).padStart(2, "0")}`;

  document.getElementById("chapterLabel").textContent =
    `CHAPTER ${currentChapter + 1}`;

  document.getElementById("chapterTitle").textContent = chapter.title;
  document.getElementById("chapterText").textContent = chapter.text;

  document.getElementById("pageCount").textContent =
    `${currentChapter + 1} / ${chapters.length}`;

  document.getElementById("previousButton").disabled =
    currentChapter === 0;

  document.getElementById("previousButton").style.opacity =
    currentChapter === 0 ? ".4" : "1";

  document.getElementById("nextButton").textContent =
    currentChapter === chapters.length - 1 ? "Finish →" : "Next →";

  document.getElementById("chapterDots").innerHTML =
    chapters.map((_, i) =>
      `<span class="chapter-dot ${i === currentChapter ? "active" : ""}"></span>`
    ).join("");
}

document.getElementById("nextButton").addEventListener("click", () => {
  if (currentChapter < chapters.length - 1) {
    currentChapter++;
    showChapter();
  } else {
    document.getElementById("proposalPage").scrollIntoView({
      behavior: "smooth"
    });
  }
});

document.getElementById("previousButton").addEventListener("click", () => {
  if (currentChapter > 0) {
    currentChapter--;
    showChapter();
  }
});

document.getElementById("secretButton").addEventListener("click", () => {
  const message = document.getElementById("secretMessage");
  message.classList.toggle("hidden");

  document.getElementById("secretButton").textContent =
    message.classList.contains("hidden")
      ? "Unlock My Message ♡"
      : "Close My Message ↑";
});

document.getElementById("yesButton").addEventListener("click", () => {
  document.getElementById("proposalAnswer").textContent =
    "You made this little moment so special, Lovely! ❤️ — Sumit";

  createHearts(30);
});

document.getElementById("thinkButton").addEventListener("click", () => {
  document.getElementById("proposalAnswer").textContent =
    "Take your time, Lovely. Your feelings and your answer matter. ♡";
});

function createHearts(amount = 1) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = ["♡", "♥", "✧", "❀"][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8500);
  }
}

setInterval(() => createHearts(), 1800);
