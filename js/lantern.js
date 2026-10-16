(function () {
  var room = document.getElementById('room');

  function move(e) {
    var r = room.getBoundingClientRect();
    room.style.setProperty('--x', (e.clientX - r.left) + 'px');
    room.style.setProperty('--y', (e.clientY - r.top) + 'px');
  }

  room.addEventListener('pointermove', move);
  room.addEventListener('pointerdown', move);
  room.addEventListener('pointerleave', function () {
    room.style.setProperty('--x', '-300px');
    room.style.setProperty('--y', '-300px');
  });
})();
