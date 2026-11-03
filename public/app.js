document.getElementById('year').textContent = new Date().getFullYear();
const embers = document.getElementById('embers');
for (let i = 0; i < 22; i++) {
  const dot = document.createElement('span');
  dot.className = 'ember';
  dot.style.cssText = `--x:${Math.random()*100}%;--y:${15+Math.random()*75}%;--s:${1+Math.random()*2}px;--d:${7+Math.random()*10}s;--delay:${-Math.random()*20}s`;
  embers.append(dot);
}
