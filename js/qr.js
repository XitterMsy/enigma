(function () {
  var el = document.getElementById('qr');
  new QRCode(el, { text: el.dataset.text, width: 240, height: 240, colorDark: '#0a0a0b', colorLight: '#e8e6e3' });
})();
