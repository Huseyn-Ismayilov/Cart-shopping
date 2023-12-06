let cart = [];

function addToCart(productId) {
    const product = document.getElementById(productId);
    const productName = product.querySelector('.title').innerHTML
    const productPrice = parseFloat(product.querySelector('.price span').innerHTML);
    const productImage = product.querySelector('.image img').src

    cart.push({
        id: productClass,
        name: productName,
        price: productPrice,
        image: productImage
    });

    updateCart();

}

function updateCart() {
    const cartItems = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <img src="${item.image}">
        `;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    cartTotal.innerHTML = total.toFixed(2);
}
