$(function() {
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 0){
	    $('body').addClass("nav-stick");
	  }
	  else{
	    $('body').removeClass("nav-stick");
	  }
	});
});