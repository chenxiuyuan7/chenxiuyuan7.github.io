<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/css/APlayer.min.css"><script src="/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="/js/Meting.min.js"></script>// 音乐绑定事件
function musicBindEvent() {
  document.querySelector("#nav-music .aplayer-music").addEventListener("click", function () {
    anzhiyu.musicTelescopic();
  });
  document.querySelector("#nav-music .aplayer-button").addEventListener("click", function () {
    anzhiyu.musicToggle(false);
  });
}