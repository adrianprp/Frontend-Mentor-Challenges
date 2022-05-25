"use strict";
const graphDays = document.querySelector(".graph-days");
const graphColumns = document.querySelector(".graph-columns");
const labelSpending = document.querySelector(".spending-label");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    //Map data
    const days = data.map((data) => data.day);
    const amounts = data.map((data) => data.amount);

    //Set spending value
    labelSpending.textContent = `$${amounts.reduce(
      (acc, spending) => acc + spending,
      0
    )}`;

    // Create days tags
    const daysPTag = days.map((day) => `<p>${day}</p>`).join("");

    graphDays.innerHTML = daysPTag;

    //Create columns tags
    const amountsPTag = amounts
      .map(
        (amount) => `<div class="column">
                    <p class="column--label">$${amount}</p>
                    </div>`
      )
      .join("");

    graphColumns.innerHTML = amountsPTag;

    const columns = [...document.querySelectorAll(".column")];

    const maxHeight = Math.max(...amounts);

    columns.forEach((column, i) => {
      //Calculate and display the height of the column
      const height = 10 * amounts[i];
      height == 10 * maxHeight
        ? (column.style.backgroundColor = `hsl(186, 34%, 60%)`)
        : (column.style.backgroundColor = `hsl(10, 79%, 65%)`);
      column.style.height = `${height}% `;

      //Events
      column.addEventListener("mouseover", () => {
        column.firstElementChild.style.visibility = "visible";
        column.classList.add("column--hover");
      });
      column.addEventListener("mouseout", () => {
        column.firstElementChild.style.visibility = "hidden";
        column.classList.remove("column--hover");
      });
    });
  });
