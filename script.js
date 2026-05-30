function createPetal(){
 const p=document.createElement('div');
 p.className='petal';
 p.innerHTML='🌸';
 p.style.left=Math.random()*100+'vw';
 p.style.animationDuration=(5+Math.random()*8)+'s';
 document.body.appendChild(p);
 setTimeout(()=>p.remove(),13000);
}
setInterval(createPetal,250);
