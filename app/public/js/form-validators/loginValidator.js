

function LoginValidator()
{
// enlazar una ventana de alerta simple a este controlador para visualizar los errores //
	this.loginErrors = $('.modal-alert');
	this.loginErrors.modal({ show : false, keyboard : true, backdrop : true });

	this.showLoginError = function(t, m)
	{
		$('.modal-alert .modal-header h3').text(t);
		$('.modal-alert .modal-body p').text(m);
		this.loginErrors.modal('show');
	}
}


//valido los campos del fomulario para que se ingrese una contraseña valida o un usuario valido
LoginValidator.prototype.validateForm = function()
{
	//user-tf es el id del campo de ingresar un usuario
	if ($('#user-tf').val() == ''){
		this.showLoginError('Whoops!', 'Por favor ingrese un usuario valido');
		return false;
	}	else if ($('#pass-tf').val() == ''){
		this.showLoginError('Whoops!', 'Por favor ingrese una contraseña valida');
		return false;
	}	else{
		return true;
	}
}