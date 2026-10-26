/*! FRATA partner guide — embed script
 *  Вставьте на страницу:
 *    <div id="frata-guide"></div>
 *    <script src="https://YOUR-HOST/embed.js" defer></script>
 *  Необязательные атрибуты <script>:
 *    data-src     — адрес гайда (по умолчанию index.html рядом с embed.js)
 *    data-target  — id контейнера (по умолчанию frata-guide; если нет — блок создаётся перед скриптом)
 *    data-height  — высота, например 720px или 80vh (по умолчанию 720px)
 *    data-radius  — скругление, px (по умолчанию 20)
 */
(function () {
  var s = document.currentScript || (function () {
    var a = document.getElementsByTagName('script');
    for (var i = a.length - 1; i >= 0; i--) if (/embed\.js/.test(a[i].src)) return a[i];
  })();
  if (!s) return;
  var base = s.src.replace(/[^\/]*$/, '');
  var src = s.getAttribute('data-src') || base + 'index.html';
  var height = s.getAttribute('data-height') || '720px';
  var radius = s.getAttribute('data-radius') || '20';
  var id = s.getAttribute('data-target') || 'frata-guide';
  function mount() {
    var box = document.getElementById(id);
    if (!box) {
      box = document.createElement('div');
      box.id = id;
      s.parentNode.insertBefore(box, s);
    }
    if (box.getAttribute('data-frata-mounted')) return;
    box.setAttribute('data-frata-mounted', '1');
    var f = document.createElement('iframe');
    f.src = src;
    f.title = 'FRATA — подключение партнёра';
    f.loading = 'lazy';
    f.allow = 'fullscreen';
    f.style.cssText = 'display:block;width:100%;height:' + height + ';border:1px solid #e7e7ea;border-radius:' + radius + 'px;background:#fff;';
    box.appendChild(f);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
