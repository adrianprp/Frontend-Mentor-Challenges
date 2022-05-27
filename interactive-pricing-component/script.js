const slider = document.getElementById("slider");
const viewsLabel = document.querySelector(".pageviews--label");
const pricingLabel = document.querySelector(".pricing--label");
const yearlyBillingCheckbox = document.getElementById("checkbox");

const pricePoints = [
  ["10k", 8],
  ["50K", 12],
  ["100k", 16],
  ["500k", 24],
  ["1M", 36],
];

const calcPrice = () => {
  let price = pricePoints[slider.value - 1][1];

  if (yearlyBillingCheckbox.checked) price = price - price * 0.25;

  return price.toFixed(2);
};

slider.addEventListener("input", () => {
  viewsLabel.textContent = `${pricePoints[slider.value - 1][0]} Pageviews`;
  pricingLabel.textContent = `$${calcPrice()}`;
});

yearlyBillingCheckbox.addEventListener("change", () => {
  pricingLabel.textContent = `$${calcPrice()}`;
});
