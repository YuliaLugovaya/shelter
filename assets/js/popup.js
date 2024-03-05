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