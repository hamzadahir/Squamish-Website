document.addEventListener('DOMContentLoaded', function () {
  const tabItem = document.getElementsByClassName('tab-item');
  const panelItem = document.getElementsByClassName('panel-item');

  // tabs
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
});