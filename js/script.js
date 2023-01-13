/*-------------------detect users' device and disable some JS events--------------------- */

function watchForEvents() {

    let lastTouchTime = 0;
  
    function enableEvents() {
      if (new Date() - lastTouchTime < 500) return
      document.body.classList.add('forJSEvents');
    }
  
    function disableEvents() {
      document.body.classList.remove('forJSEvents');
    }
  
    function updateLastTouchTime() {
      lastTouchTime = new Date();
    }
  
    document.addEventListener('touchstart', updateLastTouchTime, true);
    document.addEventListener('touchstart', disableEvents, true);
    document.addEventListener('mousemove', enableEvents, true);
  
    enableEvents();
  }
  
  watchForEvents();


const aTag=document.querySelector('#aTag');

aTag.addEventListener('mouseover',()=>{
    if(document.body.classList.contains('forJSEvents')){  //checks body has the classname
        aTag.style.background='gray';
    }    
})

const tag2=document.querySelector('#tag2');

tag2.addEventListener('mouseover',()=>{
        tag2.style.background='gray';   
})