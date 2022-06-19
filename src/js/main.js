document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  // mobile menu
  burger.addEventListener('click', function () {
    this.classList.toggle('opened');
    menu.classList.toggle('!hidden');
  });


  // animations on scroll
  const trusted = document.getElementById('trusted');
  const frictionless = document.getElementById('frictionless');
  const bridging = document.getElementById('bridging');

  const scrollTrigger = (selector) => {
    if (selector.offsetTop < (window.pageYOffset + window.innerHeight)) {
      selector.classList.add('animation');
    } else {
      selector.classList.remove('animation');
    }
  };

  window.addEventListener('scroll', function () {
    scrollTrigger(trusted);
    scrollTrigger(frictionless);
    scrollTrigger(bridging);
  });
});