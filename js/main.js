(function(){
  const cfg=window.invitation||{};
  const $=s=>document.querySelector(s);
  function setLink(id,value){const el=document.getElementById(id);if(!el)return;if(value){el.href=value;el.classList.remove('is-disabled');}else{el.href='#';el.classList.add('is-disabled');el.addEventListener('click',e=>e.preventDefault());}}
  function setupLinks(){
    setLink('mapsButton',cfg.googleMaps);
    setLink('formButton',cfg.googleForm);
    const groom=cfg.whatsappNovio?`https://wa.me/${cfg.whatsappNovio.replace(/\D/g,'')}?text=${encodeURIComponent('Hola Marco, te escribo por la invitación de tu boda.')}`:'';
    const bride=cfg.whatsappNovia?`https://wa.me/${cfg.whatsappNovia.replace(/\D/g,'')}?text=${encodeURIComponent('Hola Estrella, te escribo por la invitación de tu boda.')}`:'';
    setLink('groomWhatsapp',groom);setLink('brideWhatsapp',bride);
  }
  function setupMusic(){
    const audio=$('#backgroundMusic'),button=$('#musicToggle');if(!audio||!button||!cfg.musicaDisponible)return;
    audio.src=cfg.musica;button.classList.remove('is-hidden');
    const state=playing=>{button.setAttribute('aria-pressed',String(playing));button.setAttribute('aria-label',playing?'Desactivar música':'Activar música');button.classList.toggle('is-playing',playing);button.querySelector('.music-toggle__label').textContent=playing?'Sonando':'Música'};
    audio.addEventListener('play',()=>state(true));audio.addEventListener('pause',()=>state(false));
    button.addEventListener('click',async()=>{if(audio.paused){try{await audio.play()}catch(_){state(false)}}else audio.pause()});
  }
  function setupOpening(){
    const opening=$('#opening'),main=$('#invitation'),button=$('#openInvitation'),trigger=$('#openEnvelope');if(!opening||!main||!button)return;
    const enterInvitation=()=>{button.disabled=true;opening.classList.add('is-open');document.body.classList.add('invitation-open');main.setAttribute('aria-hidden','false');document.body.classList.remove('is-locked');setTimeout(()=>opening.remove(),1150);setTimeout(()=>{if(window.initScrollAnimations)window.initScrollAnimations()},80);if(cfg.musicaDisponible){const audio=$('#backgroundMusic');audio?.play().catch(()=>{})}};
    button.addEventListener('click',enterInvitation,{once:true});
    if(trigger){trigger.addEventListener('click',()=>{trigger.disabled=true;opening.classList.add('is-envelope-open');},{once:true});}
  }
  function setupImageFallbacks(){document.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>img.classList.add('image-error')))}
  function init(){setupLinks();setupMusic();setupOpening();setupImageFallbacks();if(window.initCountdown)window.initCountdown(cfg.fechaISO);}
  document.addEventListener('DOMContentLoaded',init);
})();
