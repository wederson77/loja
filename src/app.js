const items = [
    {
        id: 0,
        nome: 'Camiseta Masculina ',
        img: '/img/camiseta.jpg',
        quantidade: 0,
        preco:  50.00,
        categoria: 'Moda Adulta'
    },
    {
        id: 1,
        nome: 'Short Masculino',
        img: '/img/shorts.png',
        quantidade: 0,
        preco: 70.00,
        categoria: 'Moda Adulta'
    },
    {
        id: 2,
        nome: 'Sapato Feminino',
        img: '/img/shoes.jpg',
        quantidade: 0,
        preco: 30.00,
        categoria: 'Moda Infantil'
    },
    {
        id: 3,
        nome: 'Chapéu Masculino',
        img: '/img/hat.jpg',
        quantidade: 0,
        preco: 100.00,
        categoria: 'Moda Infantil'
    },

]

inicializarLoja = () =>{

    var containerProdutos = document.getElementById('produtos');

    items.map((val) =>{
        //console.log(val.nome)

      //containerProdutos.innerHTML+= ``;

        containerProdutos.innerHTML+= `
        
        <div class="produto-single">
            <img src="`+val.img+`"/>
            <p>`+val.nome+` </p>
            <p>R$`+val.preco+`,00 </p>
            <button class="carrinhoMaluco" key="`+val.id +`" href="#"> Adicionar ao carrinho<button/>
            <button class="comprar" key="`+val.id +`" href="#"> Comprar<button/>
        </div>

        `;
    })

}

inicializarLoja();

atualizarCarrinho = () =>{

    var containerCarrinho = document.getElementById('tbody');
    
    containerCarrinho.innerHTML = "";

    items.map((val) =>{
        //console.log(val.nome)
        let total = (val.preco * val.quantidade);
        
        if(val.quantidade > 0){
        containerCarrinho.innerHTML+= `
            
        <tr>
        <td>
          <div class="product">
            <img src="`+val.img+`" alt="">
            <div class="info">
              <p class="name">`+val.nome+` </p>
              <br>
              <p class="category">`+val.categoria+` </p>
            </div>
          </div>
        </td>
        <td> R$`+val.preco+`,00  <br><hr></td>
      
        <td>
            <div class="qty">
                <button class="removeItem"><i class='bx bx-minus'></i></button>
                <span id="spanPlus">`+val.quantidade+`</span>
                <button class="addItem"><i class='bx bx-plus'></i></button>
            </div>
        </td>
        <td>R$ `+total+`,00</td>
        <td>
            <button class="remove" ><i class='bx bx-x'></i></button>
        </td>  
        </hr> <br> <br>
      </tr> <!----------------------------------------------Fim de um produto----------------------------------------------------->

        
        `;


            let removeItem = document.querySelector('.removeItem')
            let addItem = document.querySelector('.addItem');

            removeItem.addEventListener('click',e =>{
                console.log(' menos')
            })

            contador = 1;
            addItem.addEventListener('click',(e) =>{
                contador++
                document.getElementById('spanPlus').innerHTML = contador;

                total = val.preco * contador;

                console.log(' mais')

            });

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
