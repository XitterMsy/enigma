
(function () {
  var original = document.title;
  document.addEventListener('visibilitychange', function () {
    document.title = document.hidden ? 'a resposta é saudade' : original;
  });
})();
