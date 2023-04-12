const image1 = "images/1.webp";
const name1 = "Hamburguesa Doble";
const price1 = "12.500";

const image2 = "images/2.webp";
const name2 = "Hamburguesa 2";
const price2 = "15.000";

const image3 = "images/3.webp";
const name3 = "Hamburguesa 3";
const price3 = "11.000";

const image4 = "images/4.webp";
const name4 = "Sushi";
const price4 = "22.000";

document.querySelector(".menu").innerHTML = `
<div class="plate">
        <img src="${image1}" alt="${name1}" width="200px" />
        <div class="plate-detail">
          <strong>${name1}</strong>
          <small>$${price1}</small>
        </div>
      </div>
      <div class="plate">
        <img src="${image1}" alt="Hamburguesa 2" width="200px" />
        <div class="plate-detail">
          <strong>Hamburguesa 2</strong>
          <small>$15.000</small>
        </div>
      </div>
      <div class="plate">
        <img src="images/3.webp" alt="Hamburguesa 3" width="200px" />
        <div class="plate-detail">
          <strong>Hamburguesa 3</strong>
          <small>$11.000</small>
        </div>
      </div>
      <div class="plate">
        <img src="images/4.webp" alt="Sushi" width="200px" />
        <div class="plate-detail">
          <strong>Sushi</strong>
          <small>$22.000</small>
        </div>
      </div>
`;
