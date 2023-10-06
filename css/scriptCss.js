// Ocutando e mostrando Lnks headers

document.getElementsByClassName('fa')[3].addEventListener('click', function(){

    document.getElementsByClassName('links')[0].classList.toggle('showMyLinks');

});

// Ocutando e mostrando carrinho

let cardIcon = document.getElementById('cardIcon');

cardIcon.addEventListener('click', e =>{
    let produtos = document.getElementById('principal');
    let carrinho = document.getElementById('carrinhoHTML');
    
        produtos.classList.toggle('hideProdutos');
        carrinho.classList.toggle('showCarrinho');
    

})