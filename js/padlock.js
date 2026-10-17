(function () {
  var lock = document.getElementById('padlock');
  var dials = lock.querySelectorAll('input');
  var msg = lock.querySelector('.padlock-msg');
  var icon = lock.querySelector('.padlock-icon');
  var cipher = lock.dataset.cipher.match(/../g).map(function (h) { return parseInt(h, 16); });

  function tryOpen() {
    var code = Array.prototype.map.call(dials, function (d) { return String(parseInt(d.value, 10)); }).join('-');
    var key = new TextEncoder().encode(code);
    var bytes = new Uint8Array(cipher.map(function (b, i) { return b ^ key[i % key.length]; }));
    var text = '';
    try { text = new TextDecoder('utf-8', { fatal: true }).decode(bytes); } catch (e) {}

    if (text.indexOf('msy:') === 0) {
      icon.classList.replace('fa-lock', 'fa-lock-open');
      lock.classList.add('open');
      msg.textContent = text.slice(4);
    } else {
      lock.classList.remove('shake');
      void lock.offsetWidth;
      lock.classList.add('shake');
      msg.textContent = 'trancado.';
    }
  }

  lock.querySelector('.padlock-btn').addEventListener('click', tryOpen);
  dials.forEach(function (d) {
    d.addEventListener('keydown', function (e) { if (e.key === 'Enter') tryOpen(); });
  });
})();
