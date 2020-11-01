const counter = document.getElementById("counter");
const itemName = document.getElementById("item-name");
const soldText = document.getElementById("sold");
const salesText = document.getElementById("sales");
const priceText = document.getElementById("price");

const nameInput = document.getElementById("name");
const nameChangeBtn = document.getElementById("change-name");
const priceInput = document.getElementById("price-input");

const resetBtn = document.getElementById("reset");

counter.onclick = onClickCounter;
nameChangeBtn.onclick = onChangeName;
priceInput.onkeyup = onChangePrice;
resetBtn.onclick = onReset;

function onClickCounter() {
  incrementSold();
  changeSales();
}

function incrementSold() {
  soldText.innerText = getSold() + 1;
}

function getSold() {
  return Number(soldText.innerText);
}

function changeSales() {
  showSales(calculateSales());
}

function calculateSales() {
  const sold = getSold();
  const price = priceInput.value;

  return sold * price;
}

function showSales(sales) {
  const salesText = document.getElementById("sales");
  salesText.innerText = sales.toLocaleString();
}

function onChangeName() {
  itemName.innerText = nameInput.value;
}

function onChangePrice() {
  priceText.innerText = Number(priceInput.value).toLocaleString();
  changeSales();
}

function onReset() {
  const answer = confirm("모든 수치가 초기화됩니다. 괜찮을까요?");

  if (answer) {
    setCountZero();
  }
}

function setCountZero() {
  const counterTexts = document.querySelectorAll("#counter span");
  for (let i = 0; i < counterTexts.length; i++) {
    let innerText = counterTexts[i].innerText;
    innerText = innerText.replace(/,/g, "");
    if (!isNaN(innerText)) {
      counterTexts[i].innerText = 0;
    }
  }
  priceInput.value = 0;
}
