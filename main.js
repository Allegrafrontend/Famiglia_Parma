$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },
        },
        submitHandler: function(form) {
            
            alert('Formulário válido. Enviando...');
            form.submit(); 
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});
