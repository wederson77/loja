const items = [
    {
        id: 0,
        nome: 'Camiseta Masculino',
        img: '/img/camiseta.jpg',
        quantidade: 0,
        preco: "R$ 50,00"
    },
    {
        id: 1,
        nome: 'Short Masculino',
        img: '/img/shorts.png',
        quantidade: 0,
        preco: "R$ 70,00"
    },
    {
        id: 2,
        nome: 'Sapato Feminino',
        img: '/img/shoes.jpg',
        quantidade: 0,
        preco: "R$ 30,00"
    },
    {
        id: 3,
        nome: 'Chapéu Masculino',
        img: '/img/hat.jpg',
        quantidade: 0,
        preco:"R$ 100,00"
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
            <p>`+val.preco+` </p>
            <button class="carrinhoMaluco" key="`+val.id +`" href="#"> Adicionar ao carrinho<button/>
            <button class="comprar" key="`+val.id +`" href="#"> Comprar<button/>
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
        <p style="float:right;"> Preço: `+ "R$ " +val.preco+  `</p>
        <p style="float:right;"> Quantidade: `+val.quantidade+ `</p>
        <div style="clear:both"></div>
        </div>
        `;

        console.log(JSON.stringify(val))
    }
    })

}


// por falta de links, estou adcionando usado a tag "a"  (getElementsByTagName)
var links = document.getElementsByClassName('carrinhoMaluco');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(){

        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        //console.log(links)
        return false;
    });
}
