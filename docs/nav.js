(function(){
  // ── CSS ──────────────────────────────────────────────────────────────────
  const css = `
    nav#xray-nav{
      position:fixed;top:0;left:0;right:0;width:100%;z-index:1000;
      height:52px;background:var(--bg2,#ede8df);
      border-bottom:1px solid var(--border,#d0c8bc);
      display:flex;align-items:center;justify-content:space-between;
      padding:0;box-sizing:border-box;font-family:'JetBrains Mono',monospace;
    }
    nav#xray-nav a.xray-title{
      font-size:11px;letter-spacing:0.15em;color:var(--text-dim,#6a6258);
      text-transform:uppercase;padding:0 16px;text-decoration:none;
      cursor:pointer;white-space:nowrap;flex-shrink:0;
    }
    nav#xray-nav .xray-right{display:flex;align-items:center;}
    nav#xray-nav ul.xray-chapters{display:flex;list-style:none;margin:0;padding:0;}
    nav#xray-nav ul.xray-chapters a{
      font-size:11px;color:var(--text-dim,#6a6258);text-decoration:none;
      padding:0 12px;height:52px;display:flex;align-items:center;
      border-left:1px solid var(--border,#d0c8bc);
      transition:color 0.2s,background 0.2s;white-space:nowrap;
    }
    nav#xray-nav ul.xray-chapters a:hover,
    nav#xray-nav ul.xray-chapters a.active{
      color:var(--accent,#7a4820);background:rgba(138,96,48,0.06);
    }
    [data-theme="dark"] nav#xray-nav{background:var(--bg2,#1a1e26);border-color:var(--border,#2a3440);}
    [data-theme="dark"] nav#xray-nav ul.xray-chapters a:hover,
    [data-theme="dark"] nav#xray-nav ul.xray-chapters a.active{background:rgba(200,169,110,0.05);}
    nav#xray-nav button.xray-toggle{
      font-family:'JetBrains Mono',monospace;font-size:11px;
      letter-spacing:0.12em;color:var(--text-dim,#6a6258);
      background:transparent;border:none;
      border-left:1px solid var(--border,#d0c8bc);
      padding:0 14px;height:52px;cursor:pointer;
      text-transform:uppercase;transition:color 0.15s;white-space:nowrap;
    }
    nav#xray-nav button.xray-toggle:hover,
    nav#xray-nav button.xray-toggle.active{color:var(--accent,#7a4820);}
    @media(max-width:900px){nav#xray-nav ul.xray-chapters{display:none;}}
  `;

  // ── Chapters ─────────────────────────────────────────────────────────────
  const chapters = [
    {href:'chapter_01_vectors.html',     label:'I. Vectors'},
    {href:'chapter_02_attention.html',   label:'II. Attention'},
    {href:'chapter_03_local_optima.html',label:'III. Local Optima'},
    {href:'chapter_04_emergence.html',   label:'IV. Emergence'},
    {href:'chapter_05_memory.html',      label:'V. Memory'},
    {href:'chapter_06_the_wall.html',    label:'VI. The Wall'},
    {href:'chapter_07_the_function.html',label:'VII. The Function'},
    {href:'chapter_08_looking_inside.html',label:'VIII. Looking Inside'},
  ];

  // ── Active detection ──────────────────────────────────────────────────────
  const current = window.location.pathname.split('/').pop() || 'index.html';

  // ── Inject CSS ────────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ── Build nav HTML ────────────────────────────────────────────────────────
  const nav = document.createElement('nav');
  nav.id = 'xray-nav';

  const title = document.createElement('a');
  title.className = 'xray-title';
  title.href = 'index.html';
  title.textContent = 'X-RAY \u2014 v1.9';
  nav.appendChild(title);

  const right = document.createElement('div');
  right.className = 'xray-right';

  const ul = document.createElement('ul');
  ul.className = 'xray-chapters';
  chapters.forEach(function(ch){
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = ch.href;
    a.textContent = ch.label;
    if(ch.href === current) a.classList.add('active');
    li.appendChild(a);
    ul.appendChild(li);
  });
  right.appendChild(ul);

  // Lang toggle
  const langBtn = document.createElement('button');
  langBtn.className = 'xray-toggle';
  langBtn.id = 'xrayLangToggle';
  langBtn.innerHTML = '&#127760; Lang';
  langBtn.onclick = function(){ if(typeof toggleLang==='function') toggleLang(); };
  right.appendChild(langBtn);

  // Display toggle
  const dispBtn = document.createElement('button');
  dispBtn.className = 'xray-toggle';
  dispBtn.id = 'xrayDispToggle';
  dispBtn.innerHTML = '&#9881; Display';
  dispBtn.onclick = function(){ if(typeof toggleSettings==='function') toggleSettings(); };
  right.appendChild(dispBtn);

  nav.appendChild(right);

  // ── Insert nav as first child of body ────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function(){
    // Ukloni stari nav ako postoji
    const oldNav = document.querySelector('nav:not(#xray-nav)');
    if(oldNav) oldNav.remove();
    document.body.insertBefore(nav, document.body.firstChild);
  });
})();
