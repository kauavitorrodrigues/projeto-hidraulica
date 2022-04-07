function continuar() {

    var nome = document.getElementById('txtnome')
    var email = document.querySelector('input#txtemail')
    var endereço = document.querySelector('input#txtend')
    var tel = document.querySelector('input#txttel')
    var idade = document.querySelector('input#txtidade')
    var idade = Number(idade.value)
    var res = document.querySelector('div#res')
    
    if (idade == 0 || idade == '') {
        res.innerHTML = ('Preencha corretamente os dados')
    }

    else if (idade >= 18){
        alert('Cadastro concluído, aproveite')
    }

}