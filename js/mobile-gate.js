    // Show mobile gate if screen is narrower than 900px (covers all phones and most tablets)
    (function(){
      function check(){
        const gate = document.getElementById('mobile-gate');
        if(!gate) return;
        if(window.innerWidth < 900){
          gate.style.display='flex';
          document.body.style.overflow='hidden';
        } else {
          gate.style.display='none';
          document.body.style.overflow='';
        }
      }
      check();
      window.addEventListener('resize', check);
    })();
