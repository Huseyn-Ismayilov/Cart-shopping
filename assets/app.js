let products = document.querySelector('.products_list')
let productsItem = document.querySelector('.product_item')


function createCartProduct(title, price, imgSrc, size) {
    return `
    <li class="item">
        <div class="image">
            <img src="${imgSrc}" alt="">
        </div>
        <div class="details">
            <span class="count">x1</span>
            <div class="product_title">
                <h3>${title}</h3>
                <span class="size">${size}</span>
            </div>
            <div class="price">
                <span>${price}</span>
                <sup>$</sup>
            </div>
        </div>
        <div class="delete">
            <img src="./assets/images/delete-btn.svg" alt="">
        </div>
    </li>
    `;
}

//Add Cart



let productButton = document.querySelectorAll(".product_item .details .btn")

productButton.forEach(function (event) {
    event.addEventListener('click', function () {
        let product = this.parentElement
        let title = product.querySelector('.title h3').innerHTML;
        let size = product.querySelector('.title span').innerHTML;
        let price = product.querySelector('.price').innerHTML;
        let desc = product.querySelector('p').innerHTML;
        // let imageSrc = product.querySelector('.image img')[0].src;
        console.log(title)
        console.log(size);
        console.log(price);
        console.log(desc);
    });
});


// productButton.forEach(function (event) {
//     event.addEventListener('click', function () {
        
//     });
// });


