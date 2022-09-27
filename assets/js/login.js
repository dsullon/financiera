document.addEventListener('DOMContentLoaded', function(){
    configurar();
})

function configurar() {
    const btnLogin = document.querySelector('#btnLogin');
    btnLogin.addEventListener('click', iniciarSesion);
}

async function iniciarSesion(){
    const txtUsuario = document.querySelector('#usuario');
    const txtPassword = document.querySelector('#password');
    if(txtUsuario.value === '' || txtPassword.value === ''){
        alert('Debe completar los datos');
        return;
    }
    const datos = new FormData();
    datos.append("usuario", txtUsuario.value);
    datos.append("password", txtPassword.value);
    datos.append("accion", "login");
    const url = "data/auth.php";
    const respuesta = fetch(url, {
        method: 'POST',
        body: datos
    })
    const resultado = await respuesta.json();
    console.log(resultado);
    alert('Procesando');
}