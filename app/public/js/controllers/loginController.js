
function LoginController()
{
// detectores de eventos se unen a pulsaciones de botón //
	$('#retrieve-password-submit').click(function(){ $('#get-credentials-form').submit();});
	$('#login-form #forgot-password').click(function(){ 
		$('#cancel').html('Cancel');
		$('#retrieve-password-submit').show();
		$('#get-credentials').modal('show');
	});

// cambian automáticamente el foco entre la ventana modal de correo electrónico y el formulario de inicio de sesión //
	$('#get-credentials').on('shown', function(){ $('#email-tf').focus(); });
	$('#get-credentials').on('hidden', function(){ $('#user-tf').focus(); });
}