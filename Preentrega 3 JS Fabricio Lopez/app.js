const shopContent = document.getElementById('shopContent');
const verCarrito = document.getElementById('verCarrito');
const shopContainer = document.getElementById('shop-container');

let carrito = [];

//forEach o map.
donas.forEach((donas) => {
    let content = document.createElement("div");
    content.className = 'card'
    content.innerHTML = `
        <img src="${donas.img}">
        <h3>${donas.nombre}</h3>
        <p class='price'>${donas.precio}$</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement('button')
    comprar.innerText = 'seleccionar';
    comprar.className = 'seleccionar'

    content.append(comprar);

    comprar.addEventListener('click',() =>{
        carrito.push({
            id : donas.id,
            nombre : donas.nombre,
            precio : donas.precio,
            img: donas.img,
            
        })
        console.log(carrito)
    })
})

verCarrito.addEventListener('click', () =>{

    shopContainer.innerHTML = '';

    shopContainer.style.display = 'flex';

    const shopHeader = document.createElement('div');
    shopHeader.className = 'shop-window';
    shopHeader.innerHTML = `
    <h2 class='shop-window-header'>Carrito</h2>
    `;

    shopContainer.append(shopHeader);


    const shopButton = document.createElement('h2');
    shopButton.innerText = 'X';
    shopButton.className = 'shop-header-button';

    shopButton.addEventListener('click', () => {
    shopContainer.style.display = 'none';
    })

    shopHeader.append(shopButton);


    carrito.forEach((donas) => {
    let carritoContent = document.createElement('div');
    carrito.className = 'shop-content'
    carritoContent.innerHTML = `
        <img src="${donas.img}">
        <h3>${donas.nombre}</h3>
        <p class='price'>${donas.precio}$</p>
    `;

    shopContainer.append(carritoContent);
    });


    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalCompra = document.createElement('div');
    totalCompra.className = 'total-compra'
    totalCompra.innerHTML = `total a pagar: ${total}$`;
    shopContainer.append(totalCompra);
});