(function () {
  document.querySelectorAll('.swatch').forEach(function (el) {
    el.style.background = el.dataset.hex;
    el.addEventListener('click', function () {
      el.textContent = el.textContent ? '' : el.dataset.hex;
    });
  });
})();
