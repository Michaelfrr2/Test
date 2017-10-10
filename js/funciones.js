jQuery(document).on('submit', '#login', function(event) {
	event.preventDefault();

	jQuery.ajax({
		url: 'php/login.php',
		type: 'POST',
		dataType: 'JSON',
		data: $(this).serialize(),
		 beforeSend: function() {
		 	$('.btn-lg').val('Espere');
		 }
	})
	.done(function(respuesta) {
		console.log(respuesta);
		if (!respuesta.error) {
			if (respuesta.tipo == 1) {
				location.href = 'php/home.php';
			}else{
				location.href = '../index.php';
			}			

		}else{
			$('.error').slideDown('slow');
			setTimeout(function () {
				$('.error').slideUp('slow');
			},2000);
			$('.btn-lg').val('Ingresar');
		}
	})
	.fail(function(resp) {
		console.log(resp);
	});
	
});