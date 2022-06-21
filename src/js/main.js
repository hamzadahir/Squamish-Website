document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  // mobile menu
  burger.addEventListener('click', function () {
    this.classList.toggle('opened');
    menu.classList.toggle('!hidden');
  });


  // animations on scroll on Home page
  const trusted = document.getElementById('trusted');
  const frictionless = document.getElementById('frictionless');
  const bridging = document.getElementById('bridging');

  // animations on scroll on About Us page
  const circle = document.getElementById('circle');
  const ourProducts = document.getElementById('our-products');
  const exploreInsights = document.getElementById('explore-insights');
  const directors = document.getElementById('directors');

  const scrollTrigger = (selector) => {
    if (selector) {
      if (selector.offsetTop < (window.pageYOffset + window.innerHeight)) {
        selector.classList.add('animation');
      } else {
        selector.classList.remove('animation');
      }
    }
  };

  window.addEventListener('scroll', function () {
    // Home page
    scrollTrigger(trusted);
    scrollTrigger(frictionless);
    scrollTrigger(bridging);

    // About Us page
    scrollTrigger(circle);
    scrollTrigger(ourProducts);
    scrollTrigger(exploreInsights);
    scrollTrigger(directors);
  });
});