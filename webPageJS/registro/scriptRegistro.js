const nombre = document.getElementById('nombres'),
    apellido = document.getElementById('apellidos'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    botonEnviar = document.getElementById('botonEnviar'),
    formulario = document.getElementById('formRegistro')


function eventListeners(){
    document.addEventListener('DOMContentLoaded', inicioApp)

    nombre.addEventListener('blur', validarCampo)
    apellido.addEventListener('blur', validarCampo)
    email.addEventListener('blur', validarCampo)
    password.addEventListener('blur', validarCampo)

}

eventListeners()

function inicioApp(){
    botonEnviar.disabled = true
}

function validarCampo(){
    validarLongitud(this)
    
    if(nombre.value !== '' && apellido.value !== '' && email.value !== '' && password.value !== ''){
        let errores = document.getElementsByClassName('error')
        if(errores.length === 0){
            botonEnviar.disabled = false
        }
    }
    if(this.type === 'email'){
        validarEmail(this)
    }
}

function validarEmail(email){
    if(expresionRegularEmail(email.value)){
        email.style. borderBottomColor = 'green'
        email.classList.remove('error')
    }else{
        email.style.borderBottomColor = 'red'
        email.classList.add('error')
    }
}

function expresionRegularEmail(email){
    const expresionRegular = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,10})+$/
    return expresionRegular.test(email) ? true : false
}

function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green'
        campo.classList.remove('error')
    }else{
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error')
    }
}

function validarEmail(email){
    if(expresionRegularEmail(email.value)){
        email.style.borderBottomColor = 'green'
        email.classList.remove('error')
    }else{
        email.style.borderBottomColor = 'red'
        email.classList.add('error')
    }
}