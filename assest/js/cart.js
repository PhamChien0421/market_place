// function up() {
//     var inputElement = event.target.parentElement.querySelector('.giatri');
//     var currentValue = parseInt(inputElement.value);
//     inputElement.value = currentValue + 1;
//   }

//   // Giảm giá trị trong ô input khi nhấn nút "-"
//   function down() {
//     var inputElement = event.target.parentElement.querySelector('.giatri');
//     var currentValue = parseInt(inputElement.value);
//     if (currentValue > 1) {
//       inputElement.value = currentValue - 1;
//     }
//   }
//   document.addEventListener('DOMContentLoaded', function () {
//     let productList = document.querySelector('.produclist');
//     let existingCart = JSON.parse(localStorage.getItem('item')) || [];
//     existingCart.forEach(product => {
//         let productItem = `
//         <li class="productiveitem">
//           <img src="`+product.img+`">
//           <div class="left">
//               <h2>`+product.name+`</h2>
//               <div class="amount">
//                   <button onclick="down()">-</button>
//                   <input type="text" value="1" class="giatri">
//                   <button onclick="up()">+</button>
//               </div>
//               <div class="tongtien">
//                   <h3>`+product.price+`₫</h3>
//               </div>
//               <p class="del"><i class="fas fa-trash-alt"></i></p>
//           </div>
//         </li>`
//         productList.innerHTML += productItem;
//     });
// })
// let cartlocal = JSON.parse(localStorage.getItem('item')) || [];
// let del = document.querySelector('.del');
// del.addEventListener('click',function(){
//   console.log("nie")
// })
function updateCart() {
  let existingCart = JSON.parse(localStorage.getItem("item")) || [];

  let productList = document.querySelector(".produclist");
  productList.innerHTML = "";

  existingCart.forEach((product, index) => {
    let productItem = document.createElement("li");
    productItem.classList.add("productiveitem");
    productItem.innerHTML = `
            <img src="${product.img}">
            <div class="left">
                <h2>${product.name}</h2>
                <div class="amount">
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <input type="text" value="${product.quantity}" class="giatri" readonly>
                    <button onclick="increaseQuantity(${index})">+</button>
                </div>
                <div class="tongtien">
                    <h3>${product.price}₫</h3>
                </div>
                <p class="del" onclick="removeProduct(${index})"><i class="fas fa-trash-alt"></i></p>
            </div>
        `;
    productList.appendChild(productItem);
  });
}

function increaseQuantity(index) {
  let existingCart = JSON.parse(localStorage.getItem("item")) || [];
  existingCart[index].quantity++;
  localStorage.setItem("item", JSON.stringify(existingCart));
  updateCart();
}

function decreaseQuantity(index) {
  let existingCart = JSON.parse(localStorage.getItem("item")) || [];
  if (existingCart[index].quantity > 1) {
    existingCart[index].quantity--;
    localStorage.setItem("item", JSON.stringify(existingCart));
    updateCart();
  }
}

function removeProduct(index) {
  let existingCart = JSON.parse(localStorage.getItem("item")) || [];
  existingCart.splice(index, 1);
  localStorage.setItem("item", JSON.stringify(existingCart));
  updateCart();
}

document.addEventListener("DOMContentLoaded", function () {
  updateCart();
});
