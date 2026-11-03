document.getElementById('year').textContent = new Date().getFullYear();
const embers = document.getElementById('embers');
for (let i = 0; i < 22; i++) {
  const dot = document.createElement('span');
  dot.className = 'ember';
  dot.style.cssText = `--x:${Math.random()*100}%;--y:${15+Math.random()*75}%;--s:${1+Math.random()*2}px;--d:${7+Math.random()*10}s;--delay:${-Math.random()*20}s`;
  embers.append(dot);
}
const music = document.getElementById('background-music');
const toggle = document.getElementById('music-toggle');
const label = document.getElementById('music-label');
const hint = document.getElementById('music-hint');
let disabledByUser = false;
try { disabledByUser = localStorage.getItem('maloy-music-disabled') === 'true'; } catch {}
music.volume = 0.35;
function updateMusicUI() {
  const playing = !music.paused;
  toggle.setAttribute('aria-pressed', String(playing));
  label.textContent = playing ? 'Отключить музыку' : 'Включить музыку';
  hint.hidden = playing || disabledByUser;
}
async function startMusic() {
  if (disabledByUser) return;
  try { await music.play(); } catch {}
  updateMusicUI();
}
toggle.addEventListener('click', async () => {
  if (!music.paused) { disabledByUser = true; music.pause(); }
  else { disabledByUser = false; await startMusic(); }
  try { localStorage.setItem('maloy-music-disabled', String(disabledByUser)); } catch {}
  updateMusicUI();
});
function unlockMusic(event) {
  if (event.target.closest?.('#music-toggle')) return;
  if (music.paused && !disabledByUser) startMusic();
}
document.addEventListener('click', unlockMusic);
document.addEventListener('keydown', unlockMusic);
music.addEventListener('play', updateMusicUI);
music.addEventListener('pause', updateMusicUI);
if (disabledByUser) music.pause(); else startMusic();
updateMusicUI();
