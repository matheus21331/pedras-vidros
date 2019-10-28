# WordPress Starter Template

## Tema Padrão Santins

Tema desenvolvido para atualizar as dependências npm e estrutura de arquivos para melhorar a qualidade de código e inserir boas práticas aos projetos.

## Instalação

1.  Baixe o wordpress em https://wordpress.org/ adicione este tema na pasta `wp-content/themes/nome-do-tema/`;
1. Dentro da pasta do seu tema rode em bash o comando `npm install`;
1. Crie um banco de dados para sua aplicação;
1. Crie um vhost para sua aplicação;
1. Entre pelo navegador em seu v-host e configure o banco de dados;
1. Acesse o painel administrativo do wordpress adicionando `/wp-admin` depois do seu v-host;
1. Configure o tema.
1. Rode na pasta do tema em bash o comando `npm run start`;
1. Altere o arquivo style.css na raiz do tema;


## Dependências

Todas as depêndencias do tema já instaladas e pré configuradas.

### jquery
Biblioteca de funções javascript;

Documentação: https://api.jquery.com/

### slick-carousel
Plugin javascript para criar e personalizar sliders.

Documentação: https://kenwheeler.github.io/slick/

Exemplo:

    $('.class').slick({
        dots: true,
		arrows: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
                }
			},
      	]
    });
	

Observação: Necessário importar estilos.

### selectric
plugin jquery para personalização de selects.

Documentação: https://selectric.js.org/


    $('select').selectric();

Observação: Necessário importar estilos.

### Bootstrap 4
biblioteca css e javascript front-end.

Documentação: https://getbootstrap.com/

Observação: Necessário importar estilos.

### popper.js
Dependência do Bootstrap.

### plyr
Plugin javascript para personalização de players de vídeos embedados do youtube e vimeo, html5 e audios.

Documentação: https://github.com/sampotts/plyr

Exemplo: 



    import Plyr from 'plyr';
    
    var player = new Plyr('#playerID');

Observação: Necessário importar estilos.

### magnific-popup
plugin javascript para criar e personalizar modal de vídeos ou imagens podendo construir galerias.

Documentação: https://dimsemenov.com/plugins/magnific-popup/documentation.html

Exemplo : 

HTML: 

    <div class="parent-container">
      <a href="path-to-image-1.jpg">Open popup 1</a>
      <a href="path-to-image-2.jpg">Open popup 2</a>
      <a href="path-to-image-3.jpg">Open popup 3</a>
    </div>

Javascript: 

    $('.parent-container').magnificPopup({
     	delegate: 'a', // elementos que serão utilizados para procurar URL e abrir a popup
      	type: 'image'
      	// mais opções
    });

Observação: Necessário importar estilos.

### jquery.nicescroll
plugin jquery para personalização de barra de rolagem.

Documentação: https://nicescroll.areaaperta.com/how-to-use/

Exemplo:

    $("body").niceScroll({
      cursorcolor:"aquamarine",
      cursorwidth:"16px"
    });

Observação: Necessário importar estilos.

### jquery-mask-plugin
plugin jquery para adicionar máscaras aos campos de formulário.

Documentação: https://igorescobar.github.io/jQuery-Mask-Plugin/docs.html

Exemplos: 


    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
	$('.cpf').mask('000.000.000-00', {reverse: true});
	$('.cnpj').mask('00.000.000/0000-00', {reverse: true});

### @ google/maps
bibliteca do Google maps em javascript.

Documentação : https://www.npmjs.com/package/@google/maps , https://developers.google.com/maps/documentation/javascript/tutorial

Exemplo: 


    const googleMapsClient = require('@google/maps').createClient({
      key: 'your API key here',
      Promise: Promise
    });
     
    googleMapsClient.geocode({address: '1600 Amphitheatre Parkway, Mountain View, CA'})
      .asPromise()
      .then((response) => {
        console.log(response.json.results);
      })
      .catch((err) => {
        console.log(err);
      });

### @ fortawesome/fontawesome-free
biblioteca front-end css e javascript para icones. 

Documentação: https://fontawesome.com/ , https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use



    <i class="fas fa-camera"></i> 

Observação: Necessário importar estilos.

### @ babel/polyfill
biblioteca para cross-browser.

Documentação: https://polyfill.io/v3/api/

### Vue
framework javascript.

Documentação: https://vuejs.org/v2/guide/

Exemplo: Incluso no tema `src/js/components`.


