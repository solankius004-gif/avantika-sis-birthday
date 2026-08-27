// ==========================================
// BIRTHDAY DATE
// ==========================================

const birthdayDate =
  new Date("September 10, 2026 00:00:00").getTime();

const $ = (id) =>
  document.getElementById(id);


// ==========================================
// BIRTHDAY LOCK SYSTEM
// ==========================================

function updateBirthdayLock() {

  const now = Date.now();

  const diff =
    birthdayDate - now;


  // ============================
  // BIRTHDAY HAS ARRIVED
  // ============================

  if (diff <= 0) {

    const lock =
      $("birthdayLock");

    if (lock) {

      lock.classList.add(
        "unlocked"
      );

    }

    // Normal countdown
    if ($("days")) {
      $("days").textContent = "00";
      $("hours").textContent = "00";
      $("minutes").textContent = "00";
      $("seconds").textContent = "00";
    }

    if ($("birthdayToday")) {

      $("birthdayToday")
        .classList.add("show");

    }

    return;
  }


  // ============================
  // STILL LOCKED
  // ============================

  const lock =
    $("birthdayLock");

  if (lock) {

    lock.classList.remove(
      "unlocked"
    );

  }


  // Lock countdown

  $("lockDays").textContent =
    String(
      Math.floor(
        diff / 86400000
      )
    ).padStart(2, "0");


  $("lockHours").textContent =
    String(
      Math.floor(
        diff / 3600000
      ) % 24
    ).padStart(2, "0");


  $("lockMinutes").textContent =
    String(
      Math.floor(
        diff / 60000
      ) % 60
    ).padStart(2, "0");


  $("lockSeconds").textContent =
    String(
      Math.floor(
        diff / 1000
      ) % 60
    ).padStart(2, "0");


  // Normal countdown

  if ($("birthdayToday")) {

    $("birthdayToday")
      .classList.remove("show");

  }

}


// Run immediately
updateBirthdayLock();


// Update every second
setInterval(
  updateBirthdayLock,
  1000
);


// ==========================================
// NORMAL COUNTDOWN
// ==========================================

function updateCountdown() {

  const diff =
    birthdayDate - Date.now();


  if (diff <= 0) {

    $("days").textContent =
      "00";

    $("hours").textContent =
      "00";

    $("minutes").textContent =
      "00";

    $("seconds").textContent =
      "00";

    $("birthdayToday")
      ?.classList.add("show");

    return;
  }


  $("birthdayToday")
    ?.classList.remove("show");


  $("days").textContent =
    String(
      Math.floor(
        diff / 86400000
      )
    ).padStart(2, "0");


  $("hours").textContent =
    String(
      Math.floor(
        diff / 3600000
      ) % 24
    ).padStart(2, "0");


  $("minutes").textContent =
    String(
      Math.floor(
        diff / 60000
      ) % 60
    ).padStart(2, "0");


  $("seconds").textContent =
    String(
      Math.floor(
        diff / 1000
      ) % 60
    ).padStart(2, "0");

}


setInterval(
  updateCountdown,
  1000
);

updateCountdown();


// ==========================================
// PARTICLES
// ==========================================

function particleBurst(
  count = 45
) {

  const symbols = [
    "💜",
    "💖",
    "✨",
    "🎉",
    "🌸",
    "💎"
  ];


  for (
    let i = 0;
    i < count;
    i++
  ) {

    const p =
      document.createElement(
        "div"
      );


    p.className =
      "particle";


    p.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    p.style.left =
      Math.random() *
      100 +
      "vw";


    p.style.fontSize =
      (
        14 +
        Math.random() *
        18
      ) +
      "px";


    p.style.animationDuration =
      (
        2.2 +
        Math.random() *
        2.5
      ) +
      "s";


    document.body.appendChild(p);


    setTimeout(
      () => p.remove(),
      5000
    );

  }

}


setInterval(
  () => particleBurst(2),
  1200
);


// ==========================================
// HERO SURPRISE BUTTON
// ==========================================

$("surpriseBtn")
  .addEventListener(
    "click",
    () => {

      document
        .querySelector("#surprise")
        .scrollIntoView({
          behavior: "smooth"
        });


      setTimeout(
        () => {

          particleBurst(80);

          $("surpriseContent")
            ?.classList.add(
              "active"
            );

        },
        500
      );

    }
  );


// ==========================================
// GIFT
// ==========================================

$("gift")
  .addEventListener(
    "click",
    () => {

      particleBurst(100);

      $("gift")
        .classList.add(
          "opened"
        );

    }
  );


// ==========================================
// LETTER
// ==========================================

$("letterBtn")
  .addEventListener(
    "click",
    () => {

      $("letterCard")
        .classList.toggle(
          "show"
        );


      $("letterBtn")
        .textContent =
        $("letterCard")
          .classList
          .contains("show")

          ? "💜 CLOSE THE LITTLE LETTER"

          : "💌 OPEN YOUR LITTLE LETTER";


      particleBurst(25);

    }
  );


// ==========================================
// BLESSINGS
// ==========================================

let blessingsShown =
  false;


$("blessingBtn")
  .addEventListener(
    "click",
    () => {

      const blessings =
        document.querySelectorAll(
          ".blessing"
        );


      if (!blessingsShown) {

        blessingsShown =
          true;


        $("blessingBtn")
          .textContent =
          "💜 BLESSINGS FOR YOU";


        blessings.forEach(
          (
            item,
            index
          ) => {

            setTimeout(
              () => {

                item.classList.add(
                  "show"
                );

              },
              index * 450
            );

          }
        );


        setTimeout(
          () => {

            $("memoryReveal")
              .classList.add(
                "show"
              );


            $("memoryReveal")
              .scrollIntoView({
                behavior: "smooth",
                block: "center"
              });

          },
          blessings.length *
          450 +
          600
        );


        particleBurst(35);

      }

      else {

        blessings.forEach(
          item =>
            item.classList.remove(
              "show"
            )
        );


        blessingsShown =
          false;


        $("blessingBtn")
          .textContent =
          "🤲 TAP FOR A LITTLE BLESSING";

      }

    }
  );


// ==========================================
// FINAL CONFETTI
// ==========================================

$("confettiBtn")
  .addEventListener(
    "click",
    () => {

      particleBurst(100);

      $("finalReveal")
        ?.classList.add(
          "show"
        );

    }
  );


// ==========================================
// MUSIC
// ==========================================

const music =
  $("music");

const musicBtn =
  $("musicBtn");

let playing =
  false;


musicBtn.addEventListener(
  "click",
  () => {

    if (!playing) {

      music
        .play()
        .then(
          () => {

            playing =
              true;


            musicBtn.textContent =
              "🔊 Music";

          }
        )
        .catch(
          () => {

            alert(
              "Put your song file at music/birthday.mp3 first."
            );

          }
        );

    }

    else {

      music.pause();

      playing =
        false;

      musicBtn.textContent =
        "🎵 Music";

    }

  }
);