// Solarized light by default; the button switches to dark and remembers the choice.
(function () {
  var btn = document.getElementById('theme'), root = document.documentElement;
  function label() { btn.textContent = root.dataset.theme === 'dark' ? 'Light' : 'Dark'; }
  btn.onclick = function () {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('site-theme', root.dataset.theme); } catch (e) {}
    label();
  };
  label();
})();
