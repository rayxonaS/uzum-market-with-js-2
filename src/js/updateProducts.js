const totalAmountEl = document.querySelector(".total-amount");

export const allAddedProducts =
  JSON.parse(localStorage.getItem("product")) || [];

export function showProducts() {
  let totalPrice = 0;
  let totalAmount = 0;
  allAddedProducts.forEach((p) => {
    totalPrice += p.price * p.amount;
    totalAmount += p.amount;
  });
  totalAmountEl.textContent = totalAmount;
}

export function addProduct(p) {
  const item = allAddedProducts.find((el) => el.id == p.id);
  if (item) {
    item.amount += 1;
  } else {
    allAddedProducts.push({ ...p, amount: 1 });
  }
  localStorage.setItem("products", JSON.stringify(allAddedProducts));
  showProducts();
}
