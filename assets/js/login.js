document.addEventListener('DOMContentLoaded', function(){
    configurar();
})

function configurar() {
    const btnLogin = document.querySelector('#btnLogin');
    btnLogin.addEventListener('click', iniciarSesion);
}

function iniciarSesion(){
    const txtUsuario = document.querySelector('#usuario');
    const txtPassword = document.querySelector('#password');
    if(txtUsuario.value === '' || txtPassword.value === ''){
        alert('Debe completar los datos');
        return;
    }
    alert('Procesando');
}