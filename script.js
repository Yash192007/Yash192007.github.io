document.getElementById('navToggle')?.addEventListener('click', ()=>{
  const nav = document.getElementById('nav');
  if(!nav) return;
  const isHidden = getComputedStyle(nav).display === 'none';
  nav.style.display = isHidden ? 'flex' : 'none';
});

// small enhancement: smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href === '#') return;
    const el = document.querySelector(href);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});
