const iconHeader = document.querySelector('.header__icon');
const navHeader = document.querySelector('.header__nav');
const main = document.querySelector('.main');
const linksHeader = document.querySelectorAll('.header__link');
const logo = document.querySelector('.header__title-link');
const logoHeaderSub = document.querySelector('.header__subtitle');

const notOnlyBtn = document.querySelector('.main-not-only__button');
const ourFriendsCard = document.querySelectorAll('.our-friends__card');


iconHeader.addEventListener("click", function () {
  document.body.classList.toggle('_lock');
  iconHeader.classList.toggle('_active');
  navHeader.classList.toggle('_active');
  logo.classList.toggle('_disabled');
  if (notOnlyBtn) {
    notOnlyBtn.classList.toggle('_disabled');
  }
  if (ourFriendsCard) {
    ourFriendsCard.forEach((el) => {
      el.classList.toggle('_disabled');
    })
  }
})

linksHeader.forEach((el) => {
  el.addEventListener("click", onLinkClick);
})
main.addEventListener("click", onLinkClick);
logo.addEventListener("click", onLinkClick);
logoHeaderSub.addEventListener("click", onLinkClick);
if (notOnlyBtn) {
  notOnlyBtn.addEventListener("click", onLinkClick);
}
if (ourFriendsCard) {
  ourFriendsCard.forEach((el) => {
    el.addEventListener("click", onLinkClick);
  })
}

function onLinkClick() {
  if (iconHeader.classList.contains('_active')) {
    document.body.classList.remove('_lock');
    iconHeader.classList.remove('_active');
    navHeader.classList.remove('_active');
  }
  setTimeout(() => {
    logo.classList.remove('_disabled');
    if (notOnlyBtn) {
      notOnlyBtn.classList.remove('_disabled');
    }
    if (ourFriendsCard) {
      ourFriendsCard.forEach((el) => {
        el.classList.remove('_disabled');
      })
    }
  }, 1);
}

