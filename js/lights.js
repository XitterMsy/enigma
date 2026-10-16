(function () {
  var wall = document.getElementById('lights');
  var word = wall.dataset.word.toUpperCase();
  var colors = ['#ff3b3b', '#ffd23b', '#3bff6b', '#3bb8ff', '#ff8a3b'];
  var bulbs = {};

  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(function (letter, i) {
    var el = document.createElement('div');
    el.className = 'bulb';
    el.innerHTML = '<i></i><b>' + letter + '</b>';
    el.querySelector('i').style.color = colors[i % colors.length];
    el.querySelector('i').style.background = colors[i % colors.length];
    wall.appendChild(el);
    bulbs[letter] = el;
  });

  var step = 0;
  setInterval(function () {
    Object.keys(bulbs).forEach(function (k) { bulbs[k].classList.remove('on'); });
    if (step < word.length) bulbs[word[step]].classList.add('on');
    step = (step + 1) % (word.length + 3);
  }, 900);
})();
