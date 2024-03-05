// pagination
const prevBtn = document.querySelector('#pre-btn');
const nextBtn = document.querySelector('#next-btn');
const prevBtnMax = document.querySelector('#pre-btn-max');
const nextBtnMax = document.querySelector('#next-btn-max');
let number = document.querySelectorAll('.pets-our-friends__number');

let num;

let desctop = window.matchMedia("(min-width: 1236px)");
let tablet = window.matchMedia("(max-width: 1235px)");
let mobile = window.matchMedia("(max-width: 675px)");

function media() {
  if (desctop.matches) {
    num = 6;
  }
  if (tablet.matches) {
    num = 8;
  }
  if (mobile.matches) {
    num = 16;
  }
}

let currentActive = 1;

nextBtn.addEventListener('click', () => {
  currentActive++;
  media();
  if (currentActive > num) {
    currentActive = num;
  }
  update();
})

nextBtnMax.addEventListener('click', () => {
  media();
  currentActive = num;
  update();
})

prevBtn.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
})

prevBtnMax.addEventListener('click', () => {
  currentActive = 1;
  update();
})

function update() {
  number.forEach((el, i) => {
    if (i === currentActive - 1) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  })

  media();

  if (currentActive === 1) {
    prevBtn.disabled = true;
    prevBtnMax.disabled = true;
    prevBtn.classList.add('disabled');
    prevBtnMax.classList.add('disabled');
    nextBtn.disabled = false;
    nextBtn.classList.remove('disabled');
    nextBtnMax.disabled = false;
    nextBtnMax.classList.remove('disabled');
  } else if (currentActive === num) {
    nextBtn.disabled = true;
    nextBtn.classList.add('disabled');
    nextBtnMax.disabled = true;
    nextBtnMax.classList.add('disabled');
    prevBtn.disabled = false;
    prevBtn.classList.remove('disabled');
    prevBtnMax.disabled = false;
    prevBtnMax.classList.remove('disabled');
  } else {
    prevBtn.disabled = false;
    prevBtn.classList.remove('disabled');
    prevBtnMax.disabled = false;
    prevBtnMax.classList.remove('disabled');
    nextBtn.disabled = false;
    nextBtn.classList.remove('disabled');
    nextBtnMax.disabled = false;
    nextBtnMax.classList.remove('disabled');
  }
}

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

//random
const cards = document.querySelector('.our-friends__cards');

prevBtn.addEventListener("click", randomCards);
prevBtnMax.addEventListener("click", randomCards);
nextBtn.addEventListener("click", randomCards);
nextBtnMax.addEventListener("click", randomCards);

function randomCards() {

  let arrayCards = ['<a class="our-friends__card popup__link" href="#popup-scarlett"><img class="our-friends__card-image" src="./assets/images/pets/scarlett.png" alt="Dog Scarlett"><p class="our-friends__text">Scarlett</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="our-friends__card popup__link" href="#popup-freddie"><img class="our-friends__card-image" src="./assets/images/pets/freddie.png" alt="Cat Freddie"><p class="our-friends__text">Freddie</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="our-friends__card popup__link" href="#popup-charly"><img class="our-friends__card-image" src="./assets/images/pets/charly.png" alt="Dog Charly"><p class="our-friends__text">Charly</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="our-friends__card popup__link" href="#popup-katrine"><img class="our-friends__card-image" src="./assets/images/katrine.png" alt="Cat Katrine"><p class="our-friends__text">Katrine</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="our-friends__card popup__link" href="#popup-jennifer"><img class="our-friends__card-image" src="./assets/images/jennifer.png" alt="Dog Jennifer"><p class="our-friends__text">Jennifer</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="our-friends__card popup__link" href="#popup-woody"><img class="our-friends__card-image" src="./assets/images/woody.png" alt="Dog Woody"><p class="our-friends__text">Woody</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="our-friends__card popup__link" href="#popup-sophia"><img class="our-friends__card-image" src="./assets/images/pets/sophia.png" alt="Dog Sophia"><p class="our-friends__text">Sophia</p><p class="our-friends__button-card">Learn more</p></a>', '<a class="our-friends__card popup__link" href="#popup-timmy"><img class="our-friends__card-image" src="./assets/images/pets/timmy.png" alt="Cat Timmy"><p class="our-friends__text">Timmy</p><p class="our-friends__button-card">Learn more</p></a>']

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

  const card4 = document.createElement('div');
  card4.innerHTML = arrayCards[3];

  const card5 = document.createElement('div');
  card5.innerHTML = arrayCards[4];

  const card6 = document.createElement('div');
  card6.innerHTML = arrayCards[5];

  const card7 = document.createElement('div');
  card7.innerHTML = arrayCards[6];

  const card8 = document.createElement('div');
  card8.innerHTML = arrayCards[7];

  cards.innerHTML = "";
  cards.append(card1);
  cards.append(card2);
  cards.append(card3);
  cards.append(card4);
  cards.append(card5);
  cards.append(card6);
  cards.append(card7);
  cards.append(card8);
  getPopup();
}