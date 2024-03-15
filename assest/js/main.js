function select() {
  let select = document.getElementById("textdown");
  if (select.style.display === "none") {
    select.style.display = "block";
  } else {
    select.style.display = "none";
  }
}
function option1() {
  let transtext = document.getElementsByTagName("button")[1];
  transtext.innerHTML = "All items";
}
function option2() {
  let transtext = document.getElementsByTagName("button")[1];
  transtext.innerHTML = "Clothings";
}
function option3() {
  let transtext = document.getElementsByTagName("button")[1];
  transtext.innerHTML = "Toys";
}
function option4() {
  let transtext = document.getElementsByTagName("button")[1];
  transtext.innerHTML = "Decorations";
}
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://65ace6c3adbd5aa31bdfb9aa.mockapi.io/api/products/pruducts")
    .then((response) => response.json())
    .then((data) => {
      let productList = document.querySelector(".row");
      data.forEach(function (product) {
        let productItem = `
                <div class="product">
                    <img class="src1" src="${product.img}">
                    <div class="productifm">
                        <p class="namesp1">${product.name}</p><br>
                        <p class="pri">${product.price}₫</p>
                        <p> đã bán ${product.sell}</p>
                    </div>
                    <button class="addcart" onclick="addToCart('${product.id}','${product.name}','${product.price}','${product.img}')"><i class="fas fa-cart-plus"></i></button>
                </div>`;
        productList.innerHTML += productItem;
      });
    });
});
// function addToCart (productId, productName, productPrice){
//     let imgsrc = document.querySelector('.src1').src;
//     let nameproductive = document.querySelector('.namesp1').innerHTML;
//     let much = document.querySelector('pri').innerHTML;
//     let products = JSON.parse(localStorage.getItem('item')) || []
//     let product = {
//         img : imgsrc ,
//         name : nameproductive ,
//         price : much ,
//     }
//     products.push(product)
//     localStorage.setItem('item',JSON.stringify(products))
//     window.location.href = "giohang.html"
// }
function addToCart(productId, productName, productPrice, productimg) {
  window.location.href = "login.html";
}
