    $(document).ready(function() {
        $('#carousel-imagens').slick({
        autoplay: true,
        });

        $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
        });

        //mascara de telefone com plugin
        $('#telefone').mask('(00) 00000-0000');

        // mascara de telefone com plugin
        // let mascara = if (celular) ? '(00) 00000-0000' : 
        // '(00) 0000-0000';

        // $('#telefone').mask(mascara);

        // mascara de data com plugin
        // $('#telefone').mask('00/00/0000', {
        //   placeholder: '__/__/____'
        // });

        //mascara de placa de carro com plugin
        // $('#telefone').mask('SSS-0000', {
        //   placeholder: 'ABC-1234'
        // });

        //validaçao de formulario
        $('form').validate({
        rules: {
            nome: {
            required: true
            },
            email: {
            required: true,
            email: true
            },
            telefone: {
            required: true
            },
            mensagem: {
            required: true
            },
            veiculoDeInteresse: {
            required: false
            },
        },
            messages: {
            nome: 'Por favor, insira o seu nome'
            },
            submitHandler: function(form) {
            console.log(form)
            },
            invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
            }
        })

        $('.lista-veiculos button').click(function() {

            const destino = $('#contato');

            //pegando o pai deste elemento que foi clicado e
            //encontrando o texto do seu h3
            const nomeVeiculo = 
            $(this).parent().find('h3').text();

            //usando o val agora para em vez de pegar
            //o valor, para setar um valor 
            $('#veiculo-interesse').val(nomeVeiculo);

            //ao clicar no botao vai direcionar ao fim
            //da página, onde está o formulário
            $('html').animate({
                scrollTop: destino.offset().top
            },1000)



        })
    });