const main = document.getElementById("main");

const products = Array.from(main.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.children);
const cartList = document.getElementById("cartList");
const totalAmount = document.getElementById("totalAmount");

let cart = [];

function updateCart() {
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("bg-white", "p-4", "rounded-xl", "shadow-md", "flex", "justify-between", "items-center");
        li.innerHTML = `${item.name} - ${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });

    totalAmount.innerText = `₱${total.toFixed(2)}`;
}

products.forEach(item => {
    const addButton = item.firstElementChild.nextElementSibling.nextElementSibling;
    addButton.addEventListener("click", () => {
        const name = item.firstElementChild.textContent;
        const price = item.firstElementChild.nextElementSibling.textContent;

        cart.push({ name, price });

        updateCart();
    });
});