//Haz tú validación en javascript acá
document.getElementById('nombre').addEventListener('input', validarNombre);
document.getElementById('email').addEventListener('input', validarEmail);
document.getElementById('asunto').addEventListener('input', validarAsunto);
document.getElementById('mensaje').addEventListener('input', validarMensaje);

function validarNombre(){
    const nombre = document.getElementById('nombre').value.trim();
    const errorNombre = document.getElementById('error-nombre');

    let formValido = true;

    // Validación del campo Nombre
    if (nombre === '') {
        errorNombre.textContent = 'Campo Nombre no debe quedar vacio.';
        formValido = false;
    } else if (nombre.length > 50) {
        errorNombre.textContent = 'Nombre debe contener máximo 50 caracteres.';
        formValido = false;
    } else {
        errorNombre.textContent = '';
    }

    return formValido;
}

function validarEmail (){
    const email = document.getElementById('email').value.trim();
    const errorEmail = document.getElementById('error-email');
    let formValido = true;

    // Validación del campo Correo Electrónico
    if (email === '') {
        errorEmail.textContent = 'Campo Correo Electrónico no debe quedar vacio.';
        formValido = false;
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        errorEmail.textContent = 'Formato de correo electrónico inválido, debe contener el @ y un dominio';
        formValido = false;
    } else {
        errorEmail.textContent = '';
    }

    return formValido;
}

function validarAsunto(){
    const asunto = document.getElementById('asunto').value.trim();
    const errorAsunto = document.getElementById('error-asunto');

    let formValido = true;

    // Validación del campo Asunto
    if (asunto === '') {
        errorAsunto.textContent = 'Campo Asunto no debe quedar vacio.';
        formValido = false;
    } else if (asunto.length > 50) {
        errorAsunto.textContent = 'Asunto debe contener máximo 50 caracteres.';
        formValido = false;
    } else {
        errorAsunto.textContent = '';
    }

    return formValido;
}

function validarMensaje(){
    const mensaje = document.getElementById('mensaje').value.trim();
    const errorMensaje = document.getElementById('error-mensaje');

    let formValido = true;

    // Validación del campo Mensaje
    if (mensaje === '') {
        errorMensaje.textContent = 'Campo Mensaje no debe quedar en vacio.';
        formValido = false;
    } else if (mensaje.length > 300) {
        errorMensaje.textContent = 'Mensaje debe contener máximo 300 caracteres.';
        formValido = false;
    } else {
        errorMensaje.textContent = '';
    }

    return formValido;
}

function limpiarCampos() {
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('asunto').value = '';
    document.getElementById('mensaje').value = '';
}

function validarFormulario() {

    // Activar o desactivar el botón de enviar según la validez del formulario
    const botonEnviar = document.getElementById('enviar');
    const campoNombre = validarNombre(); 
    const campoEmail = validarEmail(); 
    const campoAsunto = validarAsunto(); 
    const campoMensaje = validarMensaje(); 

    // Limpiar todos los mensajes de error
    document.getElementById('error-nombre').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-asunto').textContent = '';
    document.getElementById('error-mensaje').textContent = '';

    // Verificar cada campo y mostrar el mensaje de error correspondiente
    if(!campoNombre) {
        document.getElementById('error-nombre').textContent = 'Campo Nombre no debe quedar vacío y debe tener máximo 50 caracteres.';
    }

    if(!campoEmail) {
        document.getElementById('error-email').textContent = 'Formato de correo electrónico inválido.';
    }

    if(!campoAsunto) {
        document.getElementById('error-asunto').textContent = 'Campo Asunto no debe quedar vacío y debe tener máximo 50 caracteres.';
    }

    if(!campoMensaje) {
        document.getElementById('error-mensaje').textContent = 'Campo Mensaje no debe quedar en vacío y debe tener máximo 300 caracteres.';
    }

    // Verificar si el formulario es válido
    if(campoNombre && campoEmail && campoAsunto && campoMensaje){
        botonEnviar.disabled = true;
        alert("Envio exito de sus datos");
        limpiarCampos();
    } else {
        botonEnviar.disabled = false;
        console.log('Formulario inválido. Por favor, corrija los errores.');
    }

    botonEnviar.disabled = false;
}

