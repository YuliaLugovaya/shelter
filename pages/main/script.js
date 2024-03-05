const btn_left = document.querySelector('#btn-left');
const btn_right = document.querySelector('#btn-right');
const carousel = document.querySelector('#carousel');
const itemLeft = document.querySelector("#item-left");
const itemRight = document.querySelector("#item-right");

const moveLeft = () => {
  carousel.classList.add("transition-left");
  btn_left.removeEventListener("click", moveLeft);
  btn_right.removeEventListener("click", moveRight);
}

const moveRight = () => {
  carousel.classList.add("transition-right");
  btn_right.removeEventListener("click", moveRight);
  btn_left.removeEventListener("click", moveLeft);
}

btn_left.addEventListener("click", moveLeft);
btn_right.addEventListener("click", moveRight);


// popup
function getPopup() {
  const popupLinks = document.querySelectorAll('.popup__link');
  const bodyElement = document.querySelector('body');
  const lock = document.querySelectorAll('.lock-padding');
  let unlock = true;

  if (popupLinks.length > 0) {
    popupLinks.forEach((el) => {
      el.addEventListener("click", function (e) {
        const popupName = el.getAttribute('href').replace('#', '');
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
        e.preventDefault();
      });
    })
  }

  const closeIcon = document.querySelectorAll('.close-popup');
  if (closeIcon.length > 0) {
    closeIcon.forEach((el) => {
      el.addEventListener("click", function (e) {
        popupClose(el.closest('.popup'));
        e.preventDefault();
      });
    })
  }

  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      const openPopup = document.querySelector('.popup.open');
      if (openPopup) {
        popupClose(openPopup, false);
      } else {
        bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
        if (!e.target.closest('.popup__content')) {
          popupClose(e.target.closest('.popup'));
        }
      });
    }
  }

  function popupClose(openPopup, workUnlock = true) {
    if (unlock) {
      openPopup.classList.remove('open');
      if (workUnlock) {
        bodyUnlock();
      }
    }
  }

  function bodyLock() {
    const lockValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    if (lock.length > 0) {
      lock.forEach((el) => {
        el.style.paddingRight = lockValue;
      })
    }
    bodyElement.style.paddingRight = lockValue;
    bodyElement.classList.add('_lock');

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, 500);
  }

  function bodyUnlock() {
    setTimeout(function () {
      if (lock.length > 0) {
        lock.forEach((el) => {
          el.style.paddingRight = '0px';
        })
      }
      bodyElement.style.paddingRight = '0px';
      bodyElement.classList.remove('_lock');
    }, 500);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, 500);
  }
}


// carousel
carousel.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "move-left") {
    carousel.classList.remove("transition-left");
    const leftItems = itemLeft.innerHTML;

    document.querySelector("#item-active").innerHTML = leftItems;

    let arrayCards = ['<a class="main-our-friends__card our-friends__card_scarlett popup__link" href="#popup-scarlett"><img class="our-friends__card-image" src="../../assets/images/pets/scarlett.png" alt="Dog Scarlett"><p class="our-friends__text">Scarlett</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="main-our-friends__card our-friends__card_freddie popup__link" href="#popup-freddie"><img class="our-friends__card-image" src="../../assets/images/pets/freddie.png" alt="Cat Freddie"><p class="our-friends__text">Freddie</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="main-our-friends__card our-friends__card_charly popup__link" href="#popup-charly"><img class="our-friends__card-image" src="../../assets/images/pets/charly.png" alt="Dog Charly"><p class="our-friends__text">Charly</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="main-our-friends__card our-friends__card_katrine popup__link" href="#popup-katrine"><img class="our-friends__card-image" src="../../assets/images/katrine.png" alt="Cat Katrine"><p class="our-friends__text">Katrine</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="main-our-friends__card our-friends__card_jennifer popup__link" href="#popup-jennifer"><img class="our-friends__card-image" src="../../assets/images/jennifer.png" alt="Dog Jennifer"><p class="our-friends__text">Jennifer</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="main-our-friends__card our-friends__card_woody popup__link" href="#popup-woody"><img class="our-friends__card-image" src="../../assets/images/woody.png" alt="Dog Woody"><p class="our-friends__text">Woody</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="main-our-friends__card our-friends__card_sophia popup__link" href="#popup-sophia"><img class="our-friends__card-image" src="../../assets/images/pets/sophia.png" alt="Dog Sophia"><p class="our-friends__text">Sophia</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="main-our-friends__card our-friends__card_timmy popup__link" href="#popup-timmy"><img class="our-friends__card-image" src="../../assets/images/pets/timmy.png" alt="Cat Timmy"><p class="our-friends__text">Timmy</p><p class="our-friends__button-card">Learn more</p></a>']

    for (let i = arrayCards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arrayCards[i], arrayCards[j]] = [arrayCards[j], arrayCards[i]];
    }

    const card1 = document.createElement('div');
    card1.innerHTML = arrayCards[0];

    const card2 = document.createElement('div');
    card2.innerHTML = arrayCards[1];

    const card3 = document.createElement('div');
    card3.innerHTML = arrayCards[2];

    itemLeft.innerHTML = "";
    itemLeft.append(card1);
    itemLeft.append(card2);
    itemLeft.append(card3);
    getPopup();

  } else {
    carousel.classList.remove("transition-right");
    const RightItems = itemRight.innerHTML;

    document.querySelector("#item-active").innerHTML = RightItems;

    let arrayCards = ['<a class="main-our-friends__card our-friends__card_scarlett popup__link" href="#popup-scarlett"><img class="our-friends__card-image" src="../../assets/images/pets/scarlett.png" alt="Dog Scarlett"><p class="our-friends__text">Scarlett</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="main-our-friends__card our-friends__card_freddie popup__link" href="#popup-freddie"><img class="our-friends__card-image" src="../../assets/images/pets/freddie.png" alt="Cat Freddie"><p class="our-friends__text">Freddie</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="main-our-friends__card our-friends__card_charly popup__link" href="#popup-charly"><img class="our-friends__card-image" src="../../assets/images/pets/charly.png" alt="Dog Charly"><p class="our-friends__text">Charly</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="main-our-friends__card our-friends__card_katrine popup__link" href="#popup-katrine"><img class="our-friends__card-image" src="../../assets/images/katrine.png" alt="Cat Katrine"><p class="our-friends__text">Katrine</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="main-our-friends__card our-friends__card_jennifer popup__link" href="#popup-jennifer"><img class="our-friends__card-image" src="../../assets/images/jennifer.png" alt="Dog Jennifer"><p class="our-friends__text">Jennifer</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="main-our-friends__card our-friends__card_woody popup__link" href="#popup-woody"><img class="our-friends__card-image" src="../../assets/images/woody.png" alt="Dog Woody"><p class="our-friends__text">Woody</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="main-our-friends__card our-friends__card_sophia popup__link" href="#popup-sophia"><img class="our-friends__card-image" src="../../assets/images/pets/sophia.png" alt="Dog Sophia"><p class="our-friends__text">Sophia</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="main-our-friends__card our-friends__card_timmy popup__link" href="#popup-timmy"><img class="our-friends__card-image" src="../../assets/images/pets/timmy.png" alt="Cat Timmy"><p class="our-friends__text">Timmy</p><p class="our-friends__button-card">Learn more</p></a>']

    for (let i = arrayCards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arrayCards[i], arrayCards[j]] = [arrayCards[j], arrayCards[i]];
    }

    const card1 = document.createElement('div');
    card1.innerHTML = arrayCards[0];

    const card2 = document.createElement('div');
    card2.innerHTML = arrayCards[1];

    const card3 = document.createElement('div');
    card3.innerHTML = arrayCards[2];

    itemRight.innerHTML = "";
    itemRight.append(card1);
    itemRight.append(card2);
    itemRight.append(card3);
    getPopup();
  }

  btn_left.addEventListener("click", moveLeft);
  btn_right.addEventListener("click", moveRight);
})