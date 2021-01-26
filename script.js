var mediaQuery = window.matchMedia('(max-width: 768px)')
  
if (mediaQuery.matches) {
  alert("Use This Website In Chrome For Best Experiences");
}

$(document).keydown(function(e){ 
  if(e.which === 123){ 

     return false; 

  } 

}); 
$(document).bind("contextmenu",function(e) {  
	e.preventDefault(); 
 
}); 
 
  var waypoint11 = new Waypoint({
    element: document.querySelector('.heyguys'),
    handler: function() {
        anime({
            targets: '.heyguys',
            translateX: [-1000, 0],
            delay: anime.stagger(200),
            duration: 800  
            
        });
    },
    offset: '100%'
})

var waypoint13 = new Waypoint({
  element: document.querySelector('.heyguys1'),
  handler: function() {
      anime({
          targets: '.heyguys1',
          translateX: [-1000, 0],
          delay: anime.stagger(200),
          duration: 800  
          
      });
  },
  offset: '100%'
})
 
