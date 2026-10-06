window.initCountdown = function(targetISO){
  const root=document.getElementById('countdown'); if(!root)return;
  const units={days:root.querySelector('[data-unit="days"]'),hours:root.querySelector('[data-unit="hours"]'),minutes:root.querySelector('[data-unit="minutes"]'),seconds:root.querySelector('[data-unit="seconds"]')};
  let timer;
  function update(){
    const diff=new Date(targetISO).getTime()-Date.now();
    if(diff<=0){Object.values(units).forEach(el=>{if(el)el.textContent='00'}); if(timer)clearInterval(timer); return;}
    const total=Math.floor(diff/1000);
    units.days.textContent=String(Math.floor(total/86400)).padStart(2,'0');
    units.hours.textContent=String(Math.floor((total%86400)/3600)).padStart(2,'0');
    units.minutes.textContent=String(Math.floor((total%3600)/60)).padStart(2,'0');
    units.seconds.textContent=String(total%60).padStart(2,'0');
  }
  update(); timer=setInterval(update,1000);
};
