document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  burger.addEventListener('click', function () {
    this.classList.toggle('opened');
    menu.classList.toggle('!hidden');
  });
});