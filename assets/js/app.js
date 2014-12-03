$(document).ready(function(){
  
  // Smooth Scrolling
  $('.footnote').smoothScroll();
  $('.scroll').smoothScroll();
  
  $('audio').mediaelementplayer({
    alwaysShowControls: true,
    features: ['playpause','progress', 'current', 'duration'],
    audioVolume: 'horizontal',
    iPadUseNativeControls: false,
    iPhoneUseNativeControls: false,
    AndroidUseNativeControls: false
  });
  
  $('#slides').slidesjs({
    width: 1024,
    height: 574
  });
   
});

// Enables :active link styling in Mobile Safari
document.addEventListener("touchstart", function(){}, true);