$(document).ready(function (argument) {
	$('#header').load('header.html', function(){
		$('#nav a:eq('+currentNav+')').addClass('current');
	});
	$('#footer').load('footer.html');

	
})
