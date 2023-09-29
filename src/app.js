const items = [
    {
        id: 0,
        nome: 'camiseta',
        img: '/img/camiseta.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'short',
        img: '/img/shorts.png',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'sapato',
        img: '/img/shoes.jpg',
        quantidade: 0
    },

]

inicializarLoja = () =>{

    var containerProdutos = document.getElementById('produtos');

    items.map((val) =>{
        //console.log(val.nome)

        containerProdutos.innerHTML+= `
        
        <div class="produto-single">
            <img src="`+val.img+`"/>
            <p>`+val.nome+` </p>
            <a key="`+val.id +`" href="#"> Adcionar ao carrinho<a/>
        </div>

        `;
    })

}



inicializarLoja();

atualizarCarrinho = () =>{

    var containerCarrinho = document.getElementById('carrinho');

    containerCarrinho.innerHTML = "";

    items.map((val) =>{
        //console.log(val.nome)
        if(val.quantidade > 0){
        containerCarrinho.innerHTML+= `
        
        <div class="info-single-checkout">
        <p style="float:left;">Produto: `+val.nome+`</p>
        <p style="float:right;"> Quantidade: `+val.quantidade+`</p>
        <div style="clear:both"></div>
        </div>
        `;
    }
    })

}


// por falta de links, estou adcionando usado a tag "a"  (getElementsByTagName)
var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(){

        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();

        return false;
    });
}

// // Crie uma nova imagem
// const imagem = new Image();

// // Defina a fonte (URL) da imagem
// imagem.src = '/img/camiseta.jpg';



// console.log(imagem.src)

// // Agora, a variável 'imagem' contém a imagem