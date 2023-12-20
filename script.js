function togglePasswordVisibility() {
    const  passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.eye')

    if (passwordInput.type === 'password'){
        passwordInput.type = 'text';
        eyeIcon.style.backgroundImage = url(eye-not.png);
    }else{
        passwordInput.type = 'password';
        eyeIcon.style.backgroundImage = url(eye.png)
    }

    
    
}

function togglePasswordVisibility1(){

    const  passwordInput2 = document.getElementById('password2');
    const eyeIcon2 = document.querySelector('.eye1')

    if (passwordInput2.type === 'password'){
        passwordInput2.type = 'text';
        eyeIcon2.style.backgroundImage = url(eye-not.png)
    }else{
        passwordInput2.type = 'password';
        eyeIcon2.style.backgroundImage = url(eye.png)
    }

}

function enviarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password1 = document.getElementById('password2').value;

    if (nombre === '' || apellido === '' || email === ''){
        alert('todos los campos son obligatorio')
        return;
    }

    if (password === password1){
        return;
    }else{
        alert('Try again but with  same password')
    }

// simular el envio del formulario(realisar una peticion AJAX)

    const resultadoDiv = document.getElementById('resultado')
    resultadoDiv.innerHTML = `<p> Formulario enviado:</p>
                              <p><strong>Nombre</strong> ${nombre} </p>
                              <p><strong>apellido:</strong> ${apellido} </p>
                              <p><strong>email:</strong> ${email} </p>
                              <p><strong>password:</strong> ${password} </p>`
                              


}

function validatePassword(){
    const passwordInput3 = document.getElementById('password');
    const validationResult = document.getElementById('validation-result');
      // obtengo el valor de la contrasena 
    const password = passwordInput3.value;

    //verificar las reglas de la contrasena 

    const islengthvalid = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const specialchar = /[!@#$%^&*(),.?":{}|<>]/.test(password);


    if (islengthvalid && hasUppercase && hasLowercase && hasDigit && specialchar){
        validationResult.textContent = 'Valid Password';
        validationResult.className = 'valid';
    }else{
        validationResult.textContent = 'Inalid Password';
        validationResult.className = 'invalid';
    }

}