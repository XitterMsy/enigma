
(function () {
  var typed = decodeURIComponent(location.pathname.split('/').pop().replace(/\.html$/, ''));
  var clean = typed.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!clean || !window.crypto || !crypto.subtle) return;

  crypto.subtle.digest('SHA-256', new TextEncoder().encode('msy:' + clean)).then(function (buf) {
    var hash = Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('').slice(0, 16);
    var target = ROUTES.pages.indexOf(hash) !== -1 ? hash : ROUTES.alias[hash];
    if (!target) return;
    try { sessionStorage.setItem('enigma-typed', clean); } catch (e) {}
    location.replace(target);
  });
})();
