const loader=document.querySelector('.loader');
window.addEventListener('load',()=>setTimeout(()=>loader?.classList.add('hide'),900));

const reveals=[...document.querySelectorAll('.reveal')];
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
reveals.forEach(el=>observer.observe(el));

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const filter=btn.dataset.filter;
  document.querySelectorAll('.project').forEach(card=>{
    const show=filter==='all'||card.dataset.category.split(' ').includes(filter);
    card.classList.toggle('is-hidden',!show);
  });
}));

document.getElementById('year').textContent=new Date().getFullYear();

// Subtle magnetic movement — deliberately restrained for a premium feel.
document.querySelectorAll('.magnetic').forEach(el=>{
  el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.10;const y=(e.clientY-r.top-r.height/2)*.10;el.style.transform=`translate(${x}px,${y}px)`});
  el.addEventListener('mouseleave',()=>el.style.transform='');
});

// Active navigation section.
const links=[...document.querySelectorAll('.desktop-nav a')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const navObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.style.color='');const active=links.find(l=>l.getAttribute('href')==='#'+e.target.id);if(active)active.style.color='var(--red)'}}),{rootMargin:'-40% 0px -50%'});
sections.forEach(s=>navObs.observe(s));
