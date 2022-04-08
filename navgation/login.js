function continuar() {
    var email = document.querySelector('input#txtemail')
    var senha = document.querySelector('input#txtsenha')
    
    if ( senha.value == '' || email.value == '') {
        alert('Preencha corretamente os dados')
    }

    else  {
        alert('Login sucedido')
    }

}
