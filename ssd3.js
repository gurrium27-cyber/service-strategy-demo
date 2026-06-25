// 抽屉相关：旧版未启用，stub 以防 HTML 引用报错
function closeDr() {
  const m = document.getElementById('mask');
  const d = document.getElementById('dr');
  if (m) m.classList.remove('on');
  if (d) d.classList.remove('on');
}

document.addEventListener('DOMContentLoaded', function () {
  const mask = document.getElementById('mask');
  if (mask) mask.addEventListener('click', closeDr);
});
