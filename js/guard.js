
(function () {
  var KEY = 'enigma-msy:';
  var page = document.body.dataset.page;
  var prev = document.body.dataset.prev;
  try {
    var typed = sessionStorage.getItem('enigma-typed');
    sessionStorage.removeItem('enigma-typed');

    if (prev && !localStorage.getItem(KEY + prev)) {
      location.replace(document.body.classList.contains('spooky') ? 'halloween' : './');
      return;
    }
    localStorage.setItem(KEY + page, '1');

    if (typed) history.replaceState(null, '', typed);
  } catch (e) {}
})();
