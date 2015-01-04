$(document).ready(function (argument) {
	$('#header').load('header.html', function(){
		$('#nav a:eq('+currentNav+')').addClass('current');
	});
	$('#footer').load('footer.html', function(){
		$('.showlink2').hover(function(){
			$('.footerlinks1, .footerlinks2').toggleClass('hide');
			$('.showlink2>a').toggleClass('blue')
		})
	});


	
})
