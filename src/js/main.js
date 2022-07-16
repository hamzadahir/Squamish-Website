document.addEventListener('DOMContentLoaded', function () {

  // header
  const header = document.getElementsByClassName('header')[0];

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 50) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });

  // tabs
  const tabItem = document.getElementsByClassName('tab-item');
  const panelItem = document.getElementsByClassName('panel-item');

  for (let i = 0; i < tabItem.length; i++) {
    tabItem[i].addEventListener('click', function () {
      const parent = this.closest('.tabs');
      for (let i = 0; i < parent.querySelectorAll('.tab-item').length; i++) {
        parent.querySelectorAll('.panel-item')[i].classList.remove('opened');
        parent.querySelectorAll('.tab-item')[i].classList.remove('active');
      }
      panelItem[i].classList.add('opened');
      this.classList.add('active');
    });
  }

  // accordion
  const accordionTitle = document.getElementsByClassName('accordion-title');
  for (let i = 0; i < accordionTitle.length; i++) {
    accordionTitle[i].addEventListener('click', function () {
      const parent = this.closest('.accordion-item');
      parent.classList.toggle('opened');
    });
  }
});